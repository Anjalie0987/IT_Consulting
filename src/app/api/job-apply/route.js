import { NextResponse } from 'next/server';

export const runtime = 'nodejs';


export async function POST(request) {
    try {
        console.log('----------------------------------------------------------------');
        console.log('🚀 [API] Job Application Request Started');

        // 1. Parse FormData
        const formData = await request.formData();
        console.log('📦 [API] FormData received. Keys:', Array.from(formData.keys()));

        // Extract fields
        const jobTitle = formData.get('jobTitle')?.toString().trim();
        const firstName = formData.get('firstName')?.toString().trim();
        const lastName = formData.get('lastName')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const phone = formData.get('phone')?.toString().trim() || '';
        const location = formData.get('location')?.toString().trim() || '';
        const resume = formData.get('resume');

        console.log('👤 [API] Applicant:', { firstName, lastName, email, jobTitle });

        // 2. Validation
        if (!jobTitle || !firstName || !lastName || !email || !resume) {
            console.error('❌ [API] Missing required fields');
            return NextResponse.json(
                { success: false, message: 'Validation failed: Missing required fields' },
                { status: 400 }
            );
        }

        // File validation
        if (!(resume instanceof File)) {
            console.error('❌ [API] Resume is not a file object');
            return NextResponse.json(
                { success: false, message: 'Validation failed: Resume must be a file' },
                { status: 400 }
            );
        }

        console.log(`📄 [API] Resume Details: Name=${resume.name}, Size=${resume.size} bytes, Type=${resume.type}`);

        const MAX_SIZE_MB = 5;
        if (resume.size > MAX_SIZE_MB * 1024 * 1024) {
            console.error('❌ [API] File size exceeds limit');
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
            console.error(`❌ [API] Invalid file type: ${resume.type}`);
            return NextResponse.json(
                { success: false, message: 'Validation failed: Invalid file type. Only PDF and Word documents are allowed.' },
                { status: 400 }
            );
        }

        // 3. Convert File to Base64
        console.log('🔄 [API] Converting resume to Base64...');
        const arrayBuffer = await resume.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const resumeBase64 = buffer.toString('base64');
        console.log(`✅ [API] Base64 conversion complete. Length: ${resumeBase64.length}`);

        // 4. Construct Payload
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

        // 5. Forward to Google Apps Script
        const webhookUrl = process.env.GOOGLE_JOB_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('❌ [API] Server Configuration Error: GOOGLE_JOB_WEBHOOK_URL is missing in env');
            return NextResponse.json(
                { success: false, message: 'Internal server error: Webhook URL not configured' },
                { status: 500 }
            );
        }

        console.log(`📨 [API] Sending payload to Google Webhook... (URL length: ${webhookUrl.length})`);

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        console.log(`📡 [API] Google Webhook Response Status: ${response.status} ${response.statusText}`);

        const responseText = await response.text();
        console.log(`📝 [API] Google Webhook Raw Response: ${responseText}`);

        // 6. Handle Google Response
        if (!response.ok) {
            console.error(`❌ [API] Google Webhook Error: ${response.status}`);
            return NextResponse.json(
                { success: false, message: 'Internal server error: Webhook failed' },
                { status: 500 }
            );
        }

        let googleResult;
        try {
            googleResult = JSON.parse(responseText);
        } catch (e) {
            console.error('❌ [API] Failed to parse Google JSON response:', e);
            // Even if JSON parse fails, if status was 200, it might have worked but returned text.
            // But usually we expect JSON.
            // Let's assume failure if not JSON for better debugging.
            return NextResponse.json(
                { success: false, message: 'Internal server error: Invalid response from Google' },
                { status: 500 }
            );
        }

        if (googleResult.status !== 'success' && !googleResult.success) { // Handle both 'status' and 'success' keys potentially
            console.error('❌ [API] Google Webhook Logic Failure:', googleResult.message || googleResult);
            return NextResponse.json(
                { success: false, message: 'Internal server error: Google script returned error' },
                { status: 500 }
            );
        }

        // 7. Return Success
        console.log('✅ [API] Application submitted successfully');
        return NextResponse.json(
            { success: true, message: 'Application submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('🔥 [API] Critical Error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
