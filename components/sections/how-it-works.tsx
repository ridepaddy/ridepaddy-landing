'use client';

import { motion } from 'framer-motion';
import { CarFront, Map, MessageSquareText, UserRoundPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/animations/fade-in';

const steps = [
  {
    icon: Map,
    title: 'Tell us your trip',
    description:
      'Share your pickup, destination, date, time, passengers and the kind of vehicle you need.',
  },
  {
    icon: MessageSquareText,
    title: 'Compare quotes',
    description:
      'We ask vetted operators who cover your route and send you two or three all-in prices to choose from.',
  },
  {
    icon: UserRoundPlus,
    title: 'Book and pay',
    description:
      'Choose a quote and pay online. We then send your driver and vehicle details.',
  },
  {
    icon: CarFront,
    title: 'Travel',
    description:
      'Your driver arrives at the agreed place and time. Our team stays reachable until you are dropped off.',
  },
];

const services = [
  {
    title: 'One-way or return',
    description: 'Interstate trips such as Lagos to Ibadan or Abeokuta',
  },
  {
    title: 'Airport transfer',
    description: 'Pickup or drop-off at Lagos airport',
  },
  {
    title: 'Day hire',
    description: 'A car and driver for a few hours or the whole day',
  },
  {
    title: 'Wait and return',
    description: 'Your driver waits while you attend a meeting or event',
  },
];

export function HowItWorks() {
  return (
    <section id='how-it-works' className='px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
      <div className='mx-auto grid max-w-7xl gap-12 rounded-[2rem] bg-secondary p-8 shadow-[0_24px_80px_rgba(20,61,71,0.22)] sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-14'>
        <div>
          <FadeIn>
            <Badge
              variant='secondary'
              className='mb-5 rounded-full bg-white/10 px-4 py-2 text-white'>
              Four simple steps
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className='max-w-2xl text-3xl font-heading font-bold tracking-tight text-white md:text-4xl lg:text-5xl'>
              From itinerary to pickup in four steps.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg'>
              Here is how a booking will work when we open in Lagos. There is
              no app to download and no account needed to ask for a quote.
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
                  className='section-shell p-5 sm:p-6'
                  style={{ backgroundColor: '#fff' }}>
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
          <div
            className='section-shell soft-grid p-5 sm:p-7'
            style={{ backgroundColor: '#fff' }}>
            <div className='flex flex-col gap-4'>
              <div className='rounded-[1.6rem] bg-primary/12 p-5'>
                <div className='text-sm font-medium uppercase tracking-[0.2em] text-secondary/60'>
                  Services at launch
                </div>
                <div className='mt-3 text-2xl font-heading font-semibold text-secondary'>
                  Four ways to book a car and driver.
                </div>
                <p className='mt-3 text-sm leading-7 text-muted-foreground'>
                  Choose the arrangement that fits your trip. Not sure which?
                  Describe the trip and we will advise.
                </p>
              </div>

              <div className='grid gap-4 sm:grid-cols-2'>
                {services.map((service) => (
                  <div
                    key={service.title}
                    className='rounded-[1.4rem] border border-secondary/8 bg-white/80 p-5'>
                    <div className='text-xl font-heading font-bold text-secondary'>
                      {service.title}
                    </div>
                    <div className='mt-1 text-sm text-muted-foreground'>
                      {service.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className='rounded-[1.6rem] bg-secondary px-5 py-6 text-white'>
                <div className='text-sm uppercase tracking-[0.2em] text-white/60'>
                  Launching first in
                </div>
                <div className='mt-2 text-3xl font-heading font-bold'>
                  Lagos and the South-West.
                </div>
                <p className='mt-3 text-sm leading-7 text-white/75'>
                  More cities follow as vetted operators join. Tell us your
                  route on the launch list and we will let you know when it
                  opens.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
