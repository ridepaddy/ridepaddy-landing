'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

const trustMetrics = [
  { label: 'Profile checks and trust signals', value: 'Verified' },
  { label: 'Simple route coordination', value: 'Smooth' },
  { label: 'Built around familiar riders', value: 'Community' },
];

const highlights = [
  'Verified drivers and riders',
  'Designed for Nigerian routes',
  'Save money without losing comfort',
];

export function Hero() {
  return (
    <section className='hero-mesh relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40'>
      <div className='soft-grid absolute inset-0 opacity-35' />
      <div className='absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl' />
      <div className='absolute bottom-10 right-[-6rem] h-72 w-72 rounded-full bg-secondary/10 blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
          <div>
            <FadeIn>
              <Badge
                variant='secondary'
                className='mb-6 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-secondary shadow-sm backdrop-blur'>
                <Sparkles className='mr-2 h-4 w-4' />
                Safe, social commuting for modern Nigerian cities
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className='max-w-3xl text-5xl font-heading font-bold leading-[0.95] tracking-tight text-secondary md:text-6xl lg:text-7xl'>
                Move smarter.
                <span className='gradient-text block'>Find your ride paddy.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className='mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl'>
                RidePaddy makes commuting feel lighter: better matches, verified
                profiles, cleaner navigation, and a more human way to get
                across town.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Button size='lg' className='rounded-full px-7' asChild>
                  <Link href='#waitlist'>
                    Join the waitlist
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='rounded-full border-secondary/15 bg-white/70 px-7 backdrop-blur'
                  asChild>
                  <Link href='#how-it-works'>See how it works</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                {highlights.map((item) => (
                  <div
                    key={item}
                    className='inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-secondary shadow-sm backdrop-blur'>
                    <CheckCircle2 className='h-4 w-4 text-primary' />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className='mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3'>
                {trustMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className='rounded-3xl border border-white/70 bg-white/72 p-5 shadow-[0_18px_50px_rgba(20,61,71,0.07)] backdrop-blur'>
                    <div className='text-2xl font-heading font-bold text-secondary'>
                      {metric.value}
                    </div>
                    <div className='mt-1 text-sm text-muted-foreground'>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className='relative'>
            <SlideIn direction='right' delay={0.2}>
              <div className='relative mx-auto max-w-[30rem]'>
                <div className='section-shell p-4'>
                  <div className='relative overflow-hidden rounded-[1.6rem] bg-secondary p-3'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.28),transparent_42%)]' />
                    <div className='relative mx-auto max-w-[18rem] overflow-hidden rounded-[1.35rem] border border-white/10 shadow-2xl'>
                      <Image
                        src='/images/new-onboarding.png'
                        alt='RidePaddy welcome screen in device frame'
                        width={740}
                        height={1486}
                        className='h-auto w-full object-cover'
                        priority
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className='absolute -left-4 top-8 rounded-3xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur'>
                  <div className='flex items-start gap-3'>
                    <div className='rounded-2xl bg-primary/15 p-3'>
                      <ShieldCheck className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <div className='text-sm font-semibold text-secondary'>
                        Verified and secure
                      </div>
                      <div className='mt-1 text-xs leading-5 text-muted-foreground'>
                        Profiles, routes, and ride preferences checked.
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.2,
                  }}
                  className='absolute -bottom-4 right-0 rounded-3xl border border-white/80 bg-white/92 p-4 shadow-xl backdrop-blur'>
                  <div className='flex items-center gap-4'>
                    <div className='rounded-2xl bg-secondary/10 p-3'>
                      <Users className='h-5 w-5 text-secondary' />
                    </div>
                    <div>
                      <div className='flex items-center gap-1 text-secondary'>
                        <Star className='h-4 w-4 fill-primary text-primary' />
                        <span className='text-sm font-semibold'>Community-first rides</span>
                      </div>
                      <div className='mt-1 text-xs text-muted-foreground'>
                        Match with people on the same route and rhythm.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
