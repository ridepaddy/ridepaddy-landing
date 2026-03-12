import { NextResponse } from 'next/server';
import { waitlistSchema } from '@/lib/validations';
import { appendWaitlistSubmission } from '@/lib/submission-store';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = waitlistSchema.parse(body);
    const { position } = await appendWaitlistSubmission(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        data: {
          position,
        },
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
