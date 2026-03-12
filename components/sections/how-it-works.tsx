'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CarFront, Map, MessageSquareText, UserRoundPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/animations/fade-in';

const steps = [
  {
    icon: UserRoundPlus,
    title: 'Create your profile',
    description:
      'Tell RidePaddy where you commute, how often you move, and what kind of ride you prefer.',
  },
  {
    icon: Map,
    title: 'Match on route',
    description:
      'The app surfaces drivers and riders already going your way, with clearer context and timing.',
  },
  {
    icon: MessageSquareText,
    title: 'Confirm details',
    description:
      'Coordinate pickup, timing, and comfort preferences before the trip starts.',
  },
  {
    icon: CarFront,
    title: 'Ride with confidence',
    description:
      'Track your commute, share the cost, and keep using trusted people for repeat trips.',
  },
];

export function HowItWorks() {
  return (
    <section id='how-it-works' className='px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center'>
        <div>
          <FadeIn>
            <Badge variant='secondary' className='mb-5 rounded-full px-4 py-2'>
              Four simple steps
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className='section-title max-w-2xl'>
              Easy to understand. Even easier to use every day.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='section-copy mt-5 max-w-2xl'>
              The product flow is intentionally light: join, match, confirm, and
              ride. No clutter, no confusing screens, and no complicated setup.
            </p>
          </FadeIn>

          <div className='mt-10 space-y-4'>
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-10%' }}
                  className='section-shell p-5 sm:p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <div>
                      <div className='mb-2 flex items-center gap-3'>
                        <span className='inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-secondary px-2 text-xs font-semibold text-white'>
                          {index + 1}
                        </span>
                        <h3 className='text-lg font-heading font-semibold text-secondary'>
                          {step.title}
                        </h3>
                      </div>
                      <p className='text-sm leading-7 text-muted-foreground'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className='section-shell soft-grid p-5 sm:p-7'>
            <div className='grid gap-4 md:grid-cols-[0.94fr_1.06fr]'>
              <div className='grid gap-4'>
                <div className='rounded-[1.6rem] bg-secondary p-3'>
                  <div className='relative aspect-[3/4] overflow-hidden rounded-[1.2rem]'>
                    <Image
                      src='/images/new-onboard.png'
                      alt='RidePaddy onboarding screen showing quick reliable commuting'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 320px'
                    />
                  </div>
                </div>

                <div className='rounded-[1.6rem] border border-secondary/10 bg-white/80 p-3'>
                  <div className='relative aspect-[3/4] overflow-hidden rounded-[1.2rem]'>
                    <Image
                      src='/images/new-onboard2.png'
                      alt='RidePaddy onboarding screen about earning from daily commutes'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 320px'
                    />
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='rounded-[1.6rem] bg-primary/12 p-5'>
                  <div className='text-sm font-medium uppercase tracking-[0.2em] text-secondary/60'>
                    From first impression
                  </div>
                  <div className='mt-3 text-2xl font-heading font-semibold text-secondary'>
                    Branded, calm onboarding that feels deliberate.
                  </div>
                  <p className='mt-3 text-sm leading-7 text-muted-foreground'>
                    The app opens with a strong brand moment, then quickly moves
                    into a clear explanation of value and next steps.
                  </p>
                </div>

                <div className='grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-[1.4rem] border border-secondary/8 bg-white/80 p-5'>
                    <div className='text-2xl font-heading font-bold text-secondary'>
                      Clear copy
                    </div>
                    <div className='mt-1 text-sm text-muted-foreground'>
                      Simple product messaging from the first screen
                    </div>
                  </div>
                  <div className='rounded-[1.4rem] border border-secondary/8 bg-white/80 p-5'>
                    <div className='text-2xl font-heading font-bold text-secondary'>
                      Guided flow
                    </div>
                    <div className='mt-1 text-sm text-muted-foreground'>
                      Onboarding explains value before asking for commitment
                    </div>
                  </div>
                </div>

                <div className='rounded-[1.6rem] bg-secondary px-5 py-6 text-white'>
                  <div className='text-sm uppercase tracking-[0.2em] text-white/60'>
                    To daily use
                  </div>
                  <div className='mt-2 text-3xl font-heading font-bold'>
                    Product flow that stays understandable.
                  </div>
                  <p className='mt-3 text-sm leading-7 text-white/75'>
                    The visuals now reflect the real product UI instead of
                    placeholder marketing mockups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
