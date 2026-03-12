'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Adebayo Ogundimu',
    role: 'Software Engineer',
    location: 'Victoria Island, Lagos',
    content:
      "RidePaddy transformed my daily commute from Surulere to VI. I've made real connections and save serious money every month.",
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Chiamaka Nwosu',
    role: 'Marketing Manager',
    location: 'Lekki, Lagos',
    content:
      'I can plan ahead, ride with familiar people, and avoid the stress of piecing transport together every morning.',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Emeka Okafor',
    role: 'Business Owner',
    location: 'Ikeja, Lagos',
    content:
      'It turned empty seats into useful income and made commuting feel like a routine instead of a daily scramble.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
];

const trustStats = [
  { label: 'Product direction', value: 'Trust-led' },
  { label: 'Rider experience', value: 'People-first' },
  { label: 'Launch approach', value: 'City-ready' },
];

export function Testimonials() {
  return (
    <section id='testimonials' className='px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
          <div>
            <FadeIn>
              <Badge variant='secondary' className='mb-5 rounded-full px-4 py-2'>
                Community trust
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className='section-title max-w-lg'>
                People should trust the ride before they book it.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className='section-copy mt-5 max-w-lg'>
                RidePaddy is designed to feel familiar, safe, and socially
                useful. These are the signals that matter most before launch.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className='mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
                {trustStats.map((stat) => (
                  <div
                    key={stat.label}
                    className='section-shell rounded-[1.5rem] p-5 shadow-[0_16px_40px_rgba(20,61,71,0.05)]'>
                    <div className='text-2xl font-heading font-bold text-secondary'>
                      {stat.value}
                    </div>
                    <div className='mt-1 text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className='mt-8'>
                <Button className='rounded-full px-6' asChild>
                  <Link href='#waitlist'>
                    Join the waitlist
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className='grid gap-5 md:grid-cols-3'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-10%' }}>
                <Card className='h-full rounded-[1.75rem] border-white/70 bg-white/86 shadow-[0_18px_50px_rgba(20,61,71,0.06)]'>
                  <CardContent className='flex h-full flex-col p-6'>
                    <div className='mb-4 flex items-center gap-1 text-primary'>
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className='h-4 w-4 fill-current'
                        />
                      ))}
                    </div>

                    <p className='flex-1 text-sm leading-7 text-foreground'>
                      “{testimonial.content}”
                    </p>

                    <div className='mt-6 flex items-center gap-3 border-t border-border pt-5'>
                      <div className='h-12 w-12 overflow-hidden rounded-full'>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <div>
                        <div className='font-heading text-sm font-semibold text-secondary'>
                          {testimonial.name}
                        </div>
                        <div className='text-xs text-muted-foreground'>
                          {testimonial.role}, {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
