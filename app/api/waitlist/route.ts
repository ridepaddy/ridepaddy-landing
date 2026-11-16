import { NextResponse } from 'next/server';
import { waitlistSchema } from '@/lib/validations';
import { appendWaitlistSubmission, SubmissionStoreError } from '@/lib/submission-store';
import { enforceRateLimit, readJsonBody } from '@/lib/api-security';

export async function POST(request: Request) {
  const limited = enforceRateLimit(request, 'waitlist');
  if (limited) return limited;
  try {
    const body = await readJsonBody(request);

    // Validate the request body
    const { website, ...validatedData } = waitlistSchema.parse(body);

    // A filled honeypot means a bot. Report success without storing anything.
    if (!website) await appendWaitlistSubmission(validatedData);

    return NextResponse.json(
      { success: true, message: 'You are on the launch list.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);

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
        error: 'We could not save your details. Please try again later.',
      },
      { status: error instanceof SubmissionStoreError ? error.statusCode : 500 }
    );
  }
}
