'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { ArrowUpRight, Check, Loader2, MapPinned, Users } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CONTACT_INFO } from '@/lib/constants';
import { waitlistSchema, type WaitlistFormData } from '@/lib/validations';

const launchRoutes = [
  'Lagos airport',
  'Lagos to Ibadan',
  'Lagos to Abeokuta',
  'Day hire in Lagos',
];
const benefits = [
  'First access when bookings open',
  'Updates for your route',
  'A say in which routes we open next',
];

export function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      role: 'customer',
      service: 'intercity',
      fromLocation: '',
      toLocation: '',
      website: '',
    },
  });

  const isOperator = watch('role') === 'operator';

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to join the launch list.');
      }

      setIsSuccess(true);
      reset();

      toast.success('You are on the launch list', {
        description: 'We will contact you when bookings open on your route.',
      });
    } catch (error) {
      toast.error('We could not save your details', {
        description:
          error instanceof Error ? error.message : 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='waitlist'
      className='px-4 py-12 sm:px-6 lg:px-8 lg:py-16'
      aria-labelledby='waitlist-heading'>
      <div className='mx-auto max-w-7xl'>
        <div className='section-shell overflow-hidden bg-[linear-gradient(135deg,rgba(1,205,129,0.10),rgba(20,61,71,0.02))] p-8 sm:p-10 lg:p-14'>
          <div className='absolute left-0 top-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl' />
          <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl' />

          <div className='relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
            <div>
              <FadeIn>
                <Badge variant='secondary' className='mb-5 rounded-full px-4 py-2'>
                  <Users className='mr-2 h-4 w-4' />
                  Join the launch list
                </Badge>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 id='waitlist-heading' className='section-title max-w-xl'>
                  Be first to book when RidePaddy opens your route.
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className='section-copy mt-5 max-w-xl'>
                  We are opening route by route, starting in Lagos. Tell us
                  where you travel and how to reach you when bookings open.
                  Transport operators can use the same form to join.
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

              <FadeIn delay={0.35}>
                <div className='mt-8 rounded-[1.6rem] bg-secondary px-5 py-6 text-white'>
                  <div className='text-sm uppercase tracking-[0.2em] text-white/60'>
                    Launch routes in focus
                  </div>
                  <div className='mt-4 grid grid-cols-2 gap-3'>
                    {launchRoutes.map((city) => (
                      <div
                        key={city}
                        className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium'>
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.25}>
              <Card className='rounded-[2rem] border-white/80 bg-white/90 shadow-[0_24px_60px_rgba(20,61,71,0.08)]'>
                <CardContent className='p-7 sm:p-8'>
                  <div className='mb-6 flex items-center gap-3 text-secondary'>
                    <div className='rounded-2xl bg-secondary/10 p-3'>
                      <MapPinned className='h-5 w-5' />
                    </div>
                    <div>
                      <div className='text-lg font-heading font-semibold'>
                        Join the launch list
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        It takes about a minute.
                      </div>
                    </div>
                  </div>

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className='rounded-[1.6rem] bg-secondary px-6 py-8 text-center text-white'>
                      <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10'>
                        <Check className='h-5 w-5' />
                      </div>
                      <h3 className='text-2xl font-heading font-semibold'>
                        You&apos;re on the list
                      </h3>
                      <p className='mt-3 text-sm leading-7 text-white/75'>
                        We will contact you when bookings open on your route.
                      </p>
                      <Button
                        variant='outline'
                        className='mt-6 rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white'
                        onClick={() => setIsSuccess(false)}>
                        Add another person
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                      <div>
                        <Input
                          {...register('fullName')}
                          placeholder='Full name'
                          aria-label='Full name'
                          autoComplete='name'
                          className='h-12 rounded-2xl bg-white'
                          aria-invalid={Boolean(errors.fullName)}
                        />
                        {errors.fullName && (
                          <p className='mt-1 text-xs text-destructive'>
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div className='grid gap-4 sm:grid-cols-2'>
                        <div>
                          <Input
                            {...register('email')}
                            type='email'
                            placeholder='Email address'
                            aria-label='Email address'
                            autoComplete='email'
                            className='h-12 rounded-2xl bg-white'
                            aria-invalid={Boolean(errors.email)}
                          />
                          {errors.email && (
                            <p className='mt-1 text-xs text-destructive'>
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Input
                            {...register('phoneNumber')}
                            type='tel'
                            placeholder='Phone number'
                            aria-label='Phone number'
                            autoComplete='tel'
                            className='h-12 rounded-2xl bg-white'
                            aria-invalid={Boolean(errors.phoneNumber)}
                          />
                          {errors.phoneNumber && (
                            <p className='mt-1 text-xs text-destructive'>
                              {errors.phoneNumber.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className='grid gap-4'>
                        <div>
                          <select
                            {...register('role')}
                            aria-label='How you will use RidePaddy'
                            className='flex h-12 w-full rounded-2xl border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
                            aria-invalid={Boolean(errors.role)}>
                            <option value='customer'>I need a car and driver</option>
                            <option value='operator'>I run a transport business</option>
                          </select>
                          {errors.role && (
                            <p className='mt-1 text-xs text-destructive'>
                              {errors.role.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <select
                            {...register('service')}
                            aria-label='Service'
                            className='flex h-12 w-full rounded-2xl border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
                            aria-invalid={Boolean(errors.service)}>
                            <option value='intercity'>Interstate trip</option>
                            <option value='airport_transfer'>Airport transfer</option>
                            <option value='day_hire'>Hourly or day hire</option>
                            <option value='not_sure'>Not sure yet</option>
                          </select>
                          {errors.service && (
                            <p className='mt-1 text-xs text-destructive'>
                              {errors.service.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className='grid gap-4 sm:grid-cols-2'>
                        <div>
                          <Input
                            {...register('fromLocation')}
                            placeholder={isOperator ? 'Base city' : 'Travelling from (optional)'}
                            aria-label={isOperator ? 'Base city' : 'Travelling from'}
                            className='h-12 rounded-2xl bg-white'
                            aria-invalid={Boolean(errors.fromLocation)}
                          />
                          {errors.fromLocation && (
                            <p className='mt-1 text-xs text-destructive'>
                              {errors.fromLocation.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Input
                            {...register('toLocation')}
                            placeholder={isOperator ? 'States you serve' : 'Travelling to (optional)'}
                            aria-label={isOperator ? 'States you serve' : 'Travelling to'}
                            className='h-12 rounded-2xl bg-white'
                            aria-invalid={Boolean(errors.toLocation)}
                          />
                          {errors.toLocation && (
                            <p className='mt-1 text-xs text-destructive'>
                              {errors.toLocation.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Honeypot: hidden from people, filled in by bots. */}
                      <div className='hidden' aria-hidden='true'>
                        <input
                          {...register('website')}
                          type='text'
                          tabIndex={-1}
                          autoComplete='off'
                        />
                      </div>

                      <div className='flex flex-col gap-3 sm:flex-row'>
                        <Button
                          className='w-full rounded-full sm:flex-1'
                          size='lg'
                          type='submit'
                          disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className='h-4 w-4 animate-spin' />
                              Submitting
                            </>
                          ) : (
                            <>
                              Join the launch list
                              <ArrowUpRight className='h-4 w-4' />
                            </>
                          )}
                        </Button>
                        <Button
                          variant='outline'
                          className='w-full rounded-full border-secondary/15 bg-white sm:flex-1'
                          size='lg'
                          asChild>
                          <a
                            href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                            target='_blank'
                            rel='noopener noreferrer'>
                            Chat on WhatsApp
                          </a>
                        </Button>
                      </div>

                      <p className='text-center text-xs leading-6 text-muted-foreground'>
                        Your details are used only to contact you about
                        RidePaddy.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
