# Contact Form Backend

## Overview
This feature implements a secure backend for the Contact Us form using Next.js API Routes and Nodemailer. Submissions are validated server-side and emailed to the configured administrator address.

## Setup Instructions

1.  **Environment Variables**
    Create a file named `.env.local` in the root directory (`/IT_Consulting`) and populate it with your email provider credentials. Use `.env.example` as a reference.

    ```bash
    SMTP_HOST=smtp.gmail.com        # Example for Gmail
    SMTP_PORT=587                   # 587 for TLS, 465 for SSL
    SMTP_USER=your-email@gmail.com
    SMTP_PASS=your-app-password     # App Password if using Gmail/Outlook
    ADMIN_EMAIL=recipient@example.com
    ```

    > **Note:** If using Gmail, you must generate an [App Password](https://myaccount.google.com/apppasswords). Do not use your regular login password.

2.  **Dependencies**
    Ensure dependencies are installed:
    ```bash
    npm install
    ```

## Local Testing

1.  Start the development server:
    ```bash
    npm run dev
    ```

2.  Open the browser to `http://localhost:3000/contact` (or wherever the form is located).

3.  **Test Cases:**
    -   **Validation Error:** Try submitting an empty form. You should see a validation error message.
    -   **Success:** Fill out all required fields (Name, Email, Job, Message, Accept Terms). Click Submit.
        -   You should see a green success message.
        -   The form should clear.
        -   Check the `ADMIN_EMAIL` inbox for the notification.

## Troubleshooting
-   **Email not received?** Check your server console logic. If `SMTP_PASS` is incorrect, Nodemailer will log an authentication error.
-   **400 Errors:** These are validation errors. Ensure the email format is valid and the message is at least 10 characters long.
