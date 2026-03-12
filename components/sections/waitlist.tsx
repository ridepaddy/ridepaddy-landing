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
import { waitlistSchema, type WaitlistFormData } from '@/lib/validations';

const launchCities = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan'];
const benefits = [
  'Priority access before public launch',
  'Launch updates for your city',
  'Early community perks and first-ride offers',
];

export function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [position, setPosition] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      city: '',
      userType: 'passenger',
      referralCode: '',
    },
  });

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
        throw new Error(result.error || 'Unable to join the waitlist.');
      }

      setPosition(result.data?.position ?? null);
      setIsSuccess(true);
      reset();

      toast.success('You are on the waitlist', {
        description:
          result.data?.position != null
            ? `You are number ${result.data.position} in the current queue.`
            : 'We will notify you when RidePaddy launches in your city.',
      });
    } catch (error) {
      toast.error('Waitlist submission failed', {
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
      className='px-4 py-20 sm:px-6 lg:px-8'
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
                  We are opening city by city. Join the waitlist to hear when
                  your area goes live and to get early-launch benefits before the
                  wider rollout.
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
                    Launch cities
                  </div>
                  <div className='mt-4 grid grid-cols-2 gap-3'>
                    {launchCities.map((city) => (
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
                        Join the waitlist
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Submit your details once. We will handle the rest.
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
                        You&apos;re in
                      </h3>
                      <p className='mt-3 text-sm leading-7 text-white/75'>
                        {position != null
                          ? `Your current waitlist position is ${position}. We will reach out when your route is ready.`
                          : 'We will reach out when your route is ready.'}
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
                            placeholder='Phone number'
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

                      <div className='grid gap-4 sm:grid-cols-2'>
                        <div>
                          <Input
                            {...register('city')}
                            placeholder='City'
                            className='h-12 rounded-2xl bg-white'
                            aria-invalid={Boolean(errors.city)}
                          />
                          {errors.city && (
                            <p className='mt-1 text-xs text-destructive'>
                              {errors.city.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <select
                            {...register('userType')}
                            className='flex h-12 w-full rounded-2xl border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
                            aria-invalid={Boolean(errors.userType)}>
                            <option value='passenger'>Passenger</option>
                            <option value='driver'>Driver</option>
                            <option value='both'>Both</option>
                          </select>
                          {errors.userType && (
                            <p className='mt-1 text-xs text-destructive'>
                              {errors.userType.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Input
                          {...register('referralCode')}
                          placeholder='Referral code (optional)'
                          className='h-12 rounded-2xl bg-white'
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
                              Join the waitlist
                              <ArrowUpRight className='h-4 w-4' />
                            </>
                          )}
                        </Button>
                        <Button
                          variant='outline'
                          className='w-full rounded-full border-secondary/15 bg-white sm:flex-1'
                          size='lg'
                          asChild>
                          <a href='#download'>See app preview</a>
                        </Button>
                      </div>

                      <p className='text-center text-xs leading-6 text-muted-foreground'>
                        Your details are used only for launch updates and
                        early-access communication.
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
