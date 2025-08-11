'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

const directions = {
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  up: { x: 0, y: -50 },
  down: { x: 0, y: 50 },
};

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  className = '',
}: Readonly<SlideInProps>) {
  const initialPosition = directions[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPosition,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className={className}>
      {children}
    </motion.div>
  );
}
