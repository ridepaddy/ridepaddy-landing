'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check, MapPinned, Users } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const launchCities = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan'];
const benefits = [
  'Priority access before public launch',
  'Launch updates for your city',
  'Early community perks and first-ride offers',
];

export function Waitlist() {
  const waitlistUrl =
    process.env.NEXT_PUBLIC_WAITLIST_FORM_URL ||
    'https://forms.gle/zxw5QZa1cNwbLyup6';

  return (
    <section
      id='waitlist'
      className='px-4 py-20 sm:px-6 lg:px-8'
      aria-labelledby='waitlist-heading'>
      <div className='mx-auto max-w-7xl'>
        <div className='section-shell overflow-hidden bg-[linear-gradient(135deg,rgba(1,205,129,0.10),rgba(20,61,71,0.02))] p-8 sm:p-10 lg:p-14'>
          <div className='absolute left-0 top-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl' />
          <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl' />

          <div className='relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
            <div>
              <FadeIn>
                <Badge variant='secondary' className='mb-5 rounded-full px-4 py-2'>
                  <Users className='mr-2 h-4 w-4' />
                  Join the early-access list
                </Badge>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 id='waitlist-heading' className='section-title max-w-xl'>
                  Get first access when RidePaddy opens your route.
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className='section-copy mt-5 max-w-xl'>
                  We are opening city by city. Use the waitlist form to tell us
                  where you are, how you plan to use RidePaddy, and how to reach
                  you when launch access is ready.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className='mt-8 space-y-3'>
                  {benefits.map((benefit) => (
                    <div key={benefit} className='flex items-center gap-3 text-secondary'>
                      <div className='rounded-full bg-primary/15 p-2 text-primary'>
                        <Check className='h-4 w-4' />
                      </div>
                      <span className='text-sm sm:text-base'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.25}>
              <Card className='rounded-[2rem] border-white/80 bg-white/90 shadow-[0_24px_60px_rgba(20,61,71,0.08)]'>
                <CardContent className='p-7 sm:p-8'>
                  <div className='flex items-center gap-3 text-secondary'>
                    <div className='rounded-2xl bg-secondary/10 p-3'>
                      <MapPinned className='h-5 w-5' />
                    </div>
                    <div>
                      <div className='text-lg font-heading font-semibold'>
                        Launch cities in focus
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        More cities are added as demand grows.
                      </div>
                    </div>
                  </div>

                  <div className='mt-6 grid grid-cols-2 gap-3'>
                    {launchCities.map((city) => (
                      <motion.div
                        key={city}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35 }}
                        viewport={{ once: true }}
                        className='rounded-2xl border border-secondary/8 bg-background/80 px-4 py-4 text-center text-sm font-medium text-secondary'>
                        {city}
                      </motion.div>
                    ))}
                  </div>

                  <div className='mt-6 rounded-[1.6rem] bg-secondary px-5 py-6 text-white'>
                    <div className='text-sm uppercase tracking-[0.2em] text-white/60'>
                      Waitlist flow
                    </div>
                    <div className='mt-2 text-3xl font-heading font-bold'>
                      Fill once. We follow up.
                    </div>
                    <p className='mt-3 text-sm leading-7 text-white/75'>
                      The Google Form is the current source of truth for waitlist
                      entries, so your details go straight into the launch list.
                    </p>
                  </div>

                  <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                    <Button className='w-full rounded-full sm:flex-1' size='lg' asChild>
                      <a href={waitlistUrl} target='_blank' rel='noopener noreferrer'>
                        Open Google Form
                        <ArrowUpRight className='h-4 w-4' />
                      </a>
                    </Button>
                    <Button
                      variant='outline'
                      className='w-full rounded-full border-secondary/15 bg-white sm:flex-1'
                      size='lg'
                      asChild>
                      <a href='#download'>See app preview</a>
                    </Button>
                  </div>

                  <p className='mt-4 text-center text-xs leading-6 text-muted-foreground'>
                    Your details are collected through the official waitlist
                    form and used only for launch communication.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
