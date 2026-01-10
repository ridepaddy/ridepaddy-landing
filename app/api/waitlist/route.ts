import { NextResponse } from 'next/server';
import { waitlistSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = waitlistSchema.parse(body);

    // TODO: Implement your data storage solution here
    // Options:
    // 1. Save to database (Prisma, MongoDB, etc.)
    // 2. Send to email service (Resend, SendGrid, etc.)
    // 3. Add to mailing list (Mailchimp, ConvertKit, etc.)
    // 4. Save to Airtable/Google Sheets
    // 5. Send to webhook

    // For now, log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Waitlist submission:', validatedData);
    }

    // Example: Send to webhook (uncomment and configure)
    // const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(validatedData),
    //   });
    // }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid data provided',
          details: error.message
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to join waitlist. Please try again later.'
      },
      { status: 500 }
    );
  }
}
