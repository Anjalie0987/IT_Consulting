import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate Limiting Store (In-memory)
const rateLimitMap = new Map();

// Helper to clean up expired entries
const cleanupRateLimit = () => {
    const now = Date.now();
    for (const [ip, data] of rateLimitMap.entries()) {
        if (now - data.startTime > 10 * 60 * 1000) { // 10 minutes
            rateLimitMap.delete(ip);
        }
    }
};

export async function POST(request) {
    try {
        // 3. ENV VAR SAFETY CHECK
        const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];
        const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

        if (missingEnvVars.length > 0) {
            console.error('Contact API Error: Missing environment variables');
            return NextResponse.json(
                { success: false, message: 'Internal server error' },
                { status: 500 }
            );
        }

        const body = await request.json();
        const {
            firstName,
            lastName,
            email,
            company,
            phone,
            message,
            termsAccepted,
            companyWebsite, // Hidden honeypot field
        } = body;

        // ---------------------------------------------------------
        // STEP-2: ANTI-SPAM (Honeypot)
        // ---------------------------------------------------------
        // Reject silently if honeypot is filled
        if (companyWebsite) {
            return NextResponse.json(
                { success: true, message: 'Thank you for contacting us.' },
                { status: 200 }
            );
        }

        // ---------------------------------------------------------
        // STEP-2: RATE LIMITING (5 requests / 10 minutes)
        // ---------------------------------------------------------
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

        // Clean up old entries periodically (simple optimization)
        if (Math.random() < 0.1) cleanupRateLimit();

        const now = Date.now();
        const windowMs = 10 * 60 * 1000;
        const limit = 5;

        const rateData = rateLimitMap.get(ip) || { count: 0, startTime: now };

        // Reset if window passed
        if (now - rateData.startTime > windowMs) {
            rateData.count = 0;
            rateData.startTime = now;
        }

        // Check limit
        if (rateData.count >= limit) {
            return NextResponse.json(
                { success: false, message: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Increment count
        rateData.count++;
        rateLimitMap.set(ip, rateData);

        // 1. INPUT VALIDATION
        // Required fields check
        if (
            !firstName?.trim() ||
            !lastName?.trim() ||
            !email?.trim() ||
            !company?.trim() ||
            !message?.trim()
        ) {
            return NextResponse.json(
                { success: false, message: 'Validation failed' },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Validation failed' },
                { status: 400 }
            );
        }

        // Message length validation
        if (message.trim().length < 10) {
            return NextResponse.json(
                { success: false, message: 'Validation failed' },
                { status: 400 }
            );
        }

        // Terms accepted validation
        if (termsAccepted !== true) {
            return NextResponse.json(
                { success: false, message: 'Validation failed' },
                { status: 400 }
            );
        }

        // 2. NODEMAILER SETUP & 2. FIX SMTP PORT HANDLING
        const smtpPort = parseInt(process.env.SMTP_PORT, 10);
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: smtpPort,
            secure: smtpPort === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 5. BASIC HTML INJECTION PROTECTION
        const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // 3. EMAIL CONSTRUCTION
        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address (authenticated user)
            to: process.env.ADMIN_EMAIL, // Receiver address
            replyTo: email, // Set Reply-To as user email
            subject: `New Contact Form Submission – ${company}`,
            text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${company}
        
        Message:
        ${message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company}</p>
        <br/>
        <h3>Message:</h3>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
        };

        // 4. SEND EMAIL (Admin Notification)
        await transporter.sendMail(mailOptions);

        // 5. SEND AUTO-REPLY (User Confirmation)
        // Fire-and-forget style or independent error handling so it doesn't fail the request
        try {
            const autoReplyOptions = {
                from: process.env.SMTP_USER,
                to: email, // User's email
                subject: 'We received your message – AConsultants',
                text: `
Hi ${firstName},

Thank you for contacting AConsultants.
We have received your message and our team will get back to you shortly.

Best regards,
AConsultants Team
                `,
                html: `
<p>Hi ${firstName},</p>
<p>Thank you for contacting AConsultants.<br>
We have received your message and our team will get back to you shortly.</p>
<p>Best regards,<br>
<strong>AConsultants Team</strong></p>
                `,
            };

            await transporter.sendMail(autoReplyOptions);
        } catch (autoReplyError) {
            // Log error but treat the main request as successful
            console.error('Contact API Auto-Reply Error:', autoReplyError.message);
        }

        // 5. SUCCESS RESPONSE
        return NextResponse.json(
            { success: true, message: 'Thank you for contacting us. We will get back to you shortly.' },
            { status: 200 }
        );

    } catch (error) {
        // 4. REDUCE ERROR LOGGING
        console.error('Contact API Error:', error.message);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}

// 1. ADD METHOD GUARD (405 Handling) - For explicit GET requests
export async function GET() {
    return NextResponse.json(
        { success: false, message: 'Method not allowed' },
        { status: 405 }
    );
}
