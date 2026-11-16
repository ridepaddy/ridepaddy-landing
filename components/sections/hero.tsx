'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CalendarClock,
  CarFront,
  CheckCircle2,
  MapPin,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const highlights = [
  'Vetted operators and drivers',
  'One price agreed before you travel',
  'The whole vehicle, never a shared seat',
];

const requestDetails = [
  { icon: CalendarClock, label: 'Date and time', value: 'Saturday, 7:00 AM' },
  { icon: Users, label: 'Passengers', value: '3 with luggage' },
  { icon: CarFront, label: 'Vehicle', value: 'SUV' },
  { icon: Route, label: 'Service', value: 'One-way' },
];

const requestOutcomes = [
  'Two or three quotes to compare',
  'One all-in price on each quote',
  'Driver name, photo and plate after you book',
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
            <div className='rise'>
              <Badge
                variant='secondary'
                className='mb-6 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-secondary shadow-sm backdrop-blur'>
                <Sparkles className='mr-2 h-4 w-4' />
                Private car and driver hire, launching first in Lagos
              </Badge>
            </div>

            <div className='rise' style={{ animationDelay: '0.1s' }}>
              <h1 className='max-w-3xl text-5xl font-heading font-bold leading-[0.95] tracking-tight text-secondary md:text-6xl lg:text-7xl'>
                Your trip.
                <span className='block'>Your car.</span>
                <span className='gradient-text block'>Your driver.</span>
              </h1>
            </div>

            <div className='rise' style={{ animationDelay: '0.2s' }}>
              <p className='mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl'>
                Tell RidePaddy where you are going and when. We bring you
                fixed-price quotes from vetted transport operators for
                interstate trips, airport transfers and day hire.
              </p>
            </div>

            <div className='rise' style={{ animationDelay: '0.3s' }}>
              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Button size='lg' className='rounded-full px-7' asChild>
                  <Link href='#waitlist'>
                    Join the launch list
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
            </div>

            <div className='rise' style={{ animationDelay: '0.4s' }}>
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
            </div>

          </div>

          <div className='relative'>
            <div className='rise' style={{ animationDelay: '0.2s' }}>
              <div className='section-shell mx-auto max-w-[30rem] p-5 sm:p-6'>
                <div className='flex items-center justify-between gap-3'>
                  <div className='text-xs font-medium uppercase tracking-[0.2em] text-secondary/60'>
                    Example request
                  </div>
                  <div className='inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-secondary'>
                    <ShieldCheck className='h-3.5 w-3.5 text-primary' />
                    Vetted operators only
                  </div>
                </div>

                <div
                  className='rise mt-4 rounded-[1.4rem] bg-secondary p-5 text-white'
                  style={{ animationDelay: '0.45s' }}>
                  <div className='flex items-start gap-3'>
                    <div className='mt-1 flex flex-col items-center'>
                      <span className='h-2.5 w-2.5 rounded-full bg-primary' />
                      <span className='my-1 h-9 w-px bg-white/30' />
                      <MapPin className='h-4 w-4 text-primary' />
                    </div>
                    <div className='flex-1 space-y-4'>
                      <div>
                        <div className='text-xs uppercase tracking-[0.18em] text-white/60'>
                          Pickup
                        </div>
                        <div className='text-lg font-heading font-semibold'>
                          Lekki, Lagos
                        </div>
                      </div>
                      <div>
                        <div className='text-xs uppercase tracking-[0.18em] text-white/60'>
                          Destination
                        </div>
                        <div className='text-lg font-heading font-semibold'>
                          Bodija, Ibadan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-4 grid grid-cols-2 gap-3'>
                  {requestDetails.map((detail, index) => {
                    const Icon = detail.icon;

                    return (
                      <div
                        key={detail.label}
                        className='rise rounded-2xl border border-secondary/8 bg-white/80 p-4'
                        style={{ animationDelay: `${0.65 + index * 0.12}s` }}>
                        <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                          <Icon className='h-3.5 w-3.5 text-primary' />
                          {detail.label}
                        </div>
                        <div className='mt-1 text-sm font-semibold text-secondary'>
                          {detail.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  className='rise mt-4 rounded-[1.4rem] bg-primary/12 p-5'
                  style={{ animationDelay: '1.2s' }}>
                  <div className='text-sm font-heading font-semibold text-secondary'>
                    What you get back
                  </div>
                  <ul className='mt-3 space-y-2'>
                    {requestOutcomes.map((outcome, index) => (
                      <li
                        key={outcome}
                        className='rise flex items-start gap-2 text-sm text-secondary'
                        style={{ animationDelay: `${1.4 + index * 0.15}s` }}>
                        <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
