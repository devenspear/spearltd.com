import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, source, message, turnstileToken } = body;
    
    // Ensure phone is properly handled (not undefined or null)
    const formattedPhone = phone || 'Not provided';

    // Verify Cloudflare Turnstile token
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();

    // If Turnstile verification fails
    if (!turnstileData.success) {
      return NextResponse.json(
        { error: 'Human verification failed', details: turnstileData },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
    
    // Email content
    const emailText = `
      Name: ${name}
      Email: ${email}
      Phone: ${formattedPhone}
      How they heard about us: ${source || 'Not provided'}
      
      Message:
      ${message}
    `;
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${formattedPhone}</p>
      <p><strong>How they heard about us:</strong> ${source || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using SendGrid
    await sgMail.send({
      to: process.env.EMAIL_TO || 'doug@spearltd.com',
      from: {
        email: process.env.EMAIL_FROM || 'contact@spearltd.com',
        name: 'Spear Consultants'
      },
      subject: `New contact form submission from ${name}`,
      text: emailText,
      html: emailHtml,
    });

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    // Enhanced error logging
    console.error('Error sending email:', error);
    
    // Get more detailed error information
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage = `${errorMessage}: ${error.message}`;
      console.error('Error details:', error.stack);
    }
    
    // Check if it's a SendGrid API error
    if (error && typeof error === 'object' && 'response' in error) {
      const sendGridError = error as { response?: { body?: unknown } };
      if (sendGridError.response?.body) {
        console.error('SendGrid API error:', sendGridError.response.body);
        errorMessage = `SendGrid API error: ${JSON.stringify(sendGridError.response.body)}`;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
