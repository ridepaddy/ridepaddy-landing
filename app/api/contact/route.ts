import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { appendContactSubmission, SubmissionStoreError } from '@/lib/submission-store';
import { enforceRateLimit, readJsonBody } from '@/lib/api-security';

export async function POST(request: Request) {
  const limited = enforceRateLimit(request, 'contact');
  if (limited) return limited;
  try {
    const body = await readJsonBody(request);
    const validatedData = contactSchema.parse(body);

    await appendContactSubmission(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    if (error instanceof RangeError) {
      return NextResponse.json({ success: false, error: error.message }, { status: 413 });
    }

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid data provided',
          details: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send your message. Please try again later.',
      },
      { status: error instanceof SubmissionStoreError ? error.statusCode : 500 }
    );
  }
}
