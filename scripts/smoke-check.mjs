import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();

const requiredFiles = [
  'app/page.tsx',
  'app/contact/page.tsx',
  'app/terms/page.tsx',
  'app/privacy/page.tsx',
  'components/sections/hero.tsx',
  'components/sections/waitlist.tsx',
  'public/images/Splash.png',
  'public/images/new-onboarding.png',
];

for (const file of requiredFiles) {
  await access(path.join(root, file));
}

const homePage = await readFile(path.join(root, 'app/page.tsx'), 'utf8');
assert.match(homePage, /<Hero \/>/);
assert.match(homePage, /<Waitlist \/>/);
assert.match(homePage, /<FAQ \/>/);

const footer = await readFile(
  path.join(root, 'components/layouts/footer.tsx'),
  'utf8',
);
assert.match(footer, /\/terms/);
assert.match(footer, /\/privacy/);
assert.match(footer, /\/contact/);

console.log('Smoke check passed.');
