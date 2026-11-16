type SubmissionKind = 'waitlist' | 'contact';

export class SubmissionStoreError extends Error {
  constructor(
    message: string,
    readonly statusCode = 502
  ) {
    super(message);
    this.name = 'SubmissionStoreError';
  }
}

async function forwardSubmission(kind: SubmissionKind, submission: Record<string, unknown>) {
  const endpoint = process.env[`${kind.toUpperCase()}_SUBMISSION_URL`];
  if (!endpoint) throw new SubmissionStoreError('Submission service is not configured', 503);
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.SUBMISSION_WEBHOOK_TOKEN
        ? { Authorization: `Bearer ${process.env.SUBMISSION_WEBHOOK_TOKEN}` }
        : {}),
    },
    body: JSON.stringify({ ...submission, submittedAt: new Date().toISOString() }),
    cache: 'no-store',
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok)
    throw new SubmissionStoreError(`Submission service returned ${response.status}`);
  const contentType = response.headers.get('content-type');
  return contentType?.includes('application/json')
    ? ((await response.json()) as Record<string, unknown>)
    : {};
}

export async function appendWaitlistSubmission(submission: Record<string, unknown>) {
  await forwardSubmission('waitlist', submission);
}

export async function appendContactSubmission(submission: Record<string, unknown>) {
  await forwardSubmission('contact', submission);
}
