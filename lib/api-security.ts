import { NextResponse } from 'next/server';

const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_BODY_BYTES = 16_384;

export function enforceRateLimit(request: Request, route: string) {
  const address =
    request.headers.get('x-real-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown';
  const key = `${route}:${address}`;
  const now = Date.now();
  if (attempts.size > 10_000) {
    for (const [attemptKey, attempt] of attempts) {
      if (attempt.resetAt <= now) attempts.delete(attemptKey);
    }
  }
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + 60_000 });
    return null;
  }
  current.count += 1;
  if (current.count <= 5) return null;
  return NextResponse.json(
    { success: false, error: 'Too many requests. Please try again shortly.' },
    { status: 429, headers: { 'Retry-After': String(Math.ceil((current.resetAt - now) / 1000)) } }
  );
}

export async function readJsonBody(request: Request): Promise<unknown> {
  const declaredLength = Number(request.headers.get('content-length') ?? 0);
  if (declaredLength > MAX_BODY_BYTES) throw new RangeError('Request body is too large');
  const text = await request.text();
  if (Buffer.byteLength(text, 'utf8') > MAX_BODY_BYTES)
    throw new RangeError('Request body is too large');
  return JSON.parse(text) as unknown;
}
