'use client';

import { motion } from 'framer-motion';
import {
  Clock3,
  DollarSign,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Verified by design',
    description:
      'Safer matching starts with identity checks, clear profiles, and trusted rider signals.',
    accent: 'bg-primary/15 text-primary',
  },
  {
    icon: MapPinned,
    title: 'Route-smart matching',
    description:
      'Meet people already headed your way instead of juggling scattered transport options.',
    accent: 'bg-secondary/10 text-secondary',
  },
  {
    icon: DollarSign,
    title: 'Commutes that cost less',
    description:
      'Passengers spend less. Drivers offset fuel and routine city travel without friction.',
    accent: 'bg-primary/15 text-primary',
  },
  {
    icon: Clock3,
    title: 'Built for everyday rhythm',
    description:
      'Morning runs, office commutes, campus routes, and regular pick-up schedules all fit naturally.',
    accent: 'bg-secondary/10 text-secondary',
  },
];

const valueProps = [
  'Friendly route matching',
  'Clear trip coordination',
  'Community-first rider experience',
  'Made for Nigerian urban mobility',
];

export function Features() {
  return (
    <section id='features' className='px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='section-shell p-8 sm:p-10 lg:p-14'>
          <div className='absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.14),transparent_60%)] lg:block' />

          <div className='relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
            <div>
              <FadeIn>
                <Badge variant='secondary' className='mb-5 rounded-full px-4 py-2'>
                  <Sparkles className='mr-2 h-4 w-4' />
                  Why the experience feels different
                </Badge>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className='section-title max-w-xl'>
                  A cleaner, calmer way to move across the city.
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className='section-copy mt-5 max-w-xl'>
                  RidePaddy is not just another booking flow. It is a more
                  intentional commuting product built around familiarity,
                  consistency, and trust.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className='mt-8 space-y-3'>
                  {valueProps.map((item) => (
                    <div
                      key={item}
                      className='flex items-center gap-3 rounded-2xl border border-secondary/8 bg-background/75 px-4 py-3 text-sm text-secondary shadow-sm'>
                      <HeartHandshake className='h-4 w-4 text-primary' />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className='mt-8'>
                  <Button className='rounded-full px-6' asChild>
                    <a href='#waitlist'>Get early access</a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
              {featureCards.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true, margin: '-10%' }}>
                    <Card className='h-full rounded-[1.75rem] border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(20,61,71,0.06)]'>
                      <CardContent className='p-7'>
                        <div className={`mb-5 inline-flex rounded-2xl p-3 ${feature.accent}`}>
                          <Icon className='h-6 w-6' />
                        </div>
                        <h3 className='text-xl font-heading font-semibold text-secondary'>
                          {feature.title}
                        </h3>
                        <p className='mt-3 text-sm leading-7 text-muted-foreground'>
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
