import { NextResponse } from 'next/server';

export const runtime = 'nodejs';


export async function POST(request) {
    try {
        // 1. Method Guard (Redundant in App Router export name, but good practice if logic extracted)
        // In Next.js App Router, only the exported 'POST' function handles POST requests.

        // 2. Parse FormData
        const formData = await request.formData();

        // Extract fields
        // Extract fields
        const jobTitle = formData.get('jobTitle')?.toString().trim();
        const firstName = formData.get('firstName')?.toString().trim();
        const lastName = formData.get('lastName')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const phone = formData.get('phone')?.toString().trim() || '';
        const location = formData.get('location')?.toString().trim() || '';
        const resume = formData.get('resume');

        // 3. Validation
        // Required fields
        if (!jobTitle || !firstName || !lastName || !email || !resume) {
            return NextResponse.json(
                { success: false, message: 'Validation failed: Missing required fields' },
                { status: 400 }
            );
        }

        // File validation
        if (!(resume instanceof File)) {
            return NextResponse.json(
                { success: false, message: 'Validation failed: Resume must be a file' },
                { status: 400 }
            );
        }

        const MAX_SIZE_MB = 5;
        if (resume.size > MAX_SIZE_MB * 1024 * 1024) {
            return NextResponse.json(
                { success: false, message: 'Validation failed: File size exceeds 5MB' },
                { status: 400 }
            );
        }

        const ALLOWED_TYPES = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        if (!ALLOWED_TYPES.includes(resume.type)) {
            return NextResponse.json(
                { success: false, message: 'Validation failed: Invalid file type. Only PDF and Word documents are allowed.' },
                { status: 400 }
            );
        }

        // 4. Convert File to Base64
        const arrayBuffer = await resume.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const resumeBase64 = buffer.toString('base64');

        // 5. Construct Payload
        const payload = {
            jobTitle,
            firstName,
            lastName,
            email,
            phone,
            location,
            resumeFileName: resume.name,
            resumeBase64,
        };

        // 6. Forward to Google Apps Script
        const webhookUrl = process.env.GOOGLE_JOB_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('Server Configuration Error: GOOGLE_JOB_WEBHOOK_URL is missing');
            return NextResponse.json(
                { success: false, message: 'Internal server error' },
                { status: 500 }
            );
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        // 7. Handle Google Response
        if (!response.ok) {
            console.error(`Google Webhook Error: ${response.status} ${response.statusText}`);
            return NextResponse.json(
                { success: false, message: 'Internal server error' },
                { status: 500 }
            );
        }

        // The Google Script returns { success: true/false, message: ... }
        // We can parse it to check logic success, or just trust the 200 OK means it ran.
        // However, our script returns 200 even for logic failures (caught by try/catch in GAS),
        // so let's parse the JSON to be sure.
        const googleResult = await response.json();

        if (!googleResult.success) {
            console.error('Google Webhook Logic Failure:', googleResult.message);
            return NextResponse.json(
                { success: false, message: 'Internal server error' },
                { status: 500 }
            );
        }

        // 8. Return Success
        return NextResponse.json(
            { success: true, message: 'Application submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
