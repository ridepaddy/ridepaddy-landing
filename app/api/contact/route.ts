import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { appendContactSubmission } from '@/lib/submission-store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    await appendContactSubmission(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact API error:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid data provided',
          details: error.message,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send your message. Please try again later.',
      },
      { status: 500 },
    );
  }
}
