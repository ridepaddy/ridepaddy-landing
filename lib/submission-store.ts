import { mkdir, readFile, appendFile } from 'node:fs/promises';
import path from 'node:path';

const submissionsDir = path.join(process.cwd(), 'data', 'submissions');

async function ensureDir() {
  await mkdir(submissionsDir, { recursive: true });
}

async function readLines(filePath: string) {
  try {
    const content = await readFile(filePath, 'utf8');
    return content.split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

export async function appendWaitlistSubmission(
  submission: Record<string, unknown>,
) {
  await ensureDir();
  const filePath = path.join(submissionsDir, 'waitlist.jsonl');
  const existingLines = await readLines(filePath);
  const position = existingLines.length + 1;

  await appendFile(
    filePath,
    `${JSON.stringify({
      ...submission,
      position,
      submittedAt: new Date().toISOString(),
    })}\n`,
    'utf8',
  );

  return { position };
}

export async function appendContactSubmission(
  submission: Record<string, unknown>,
) {
  await ensureDir();
  const filePath = path.join(submissionsDir, 'contact.jsonl');

  await appendFile(
    filePath,
    `${JSON.stringify({
      ...submission,
      submittedAt: new Date().toISOString(),
    })}\n`,
    'utf8',
  );
}
