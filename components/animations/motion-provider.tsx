'use client';

import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

/** Makes every Framer Motion animation respect the visitor's reduced-motion setting. */
export function MotionProvider({ children }: Readonly<{ children: ReactNode }>) {
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>;
}
