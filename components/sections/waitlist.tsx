'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  // Mail,
  // User,
  // Phone,
  // MapPin,
  Users,
  CheckCircle,
  // Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { waitlistSchema, type WaitlistFormData } from '@/lib/validations';
// import { CITIES, USER_TYPES } from "@/lib/constants";
import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';

interface WaitlistStats {
  totalSignups: number;
  cities: string[];
  userTypes: {
    drivers: number;
    passengers: number;
    both: number;
  };
}

export function Waitlist() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [stats, setStats] = useState<WaitlistStats>({
    totalSignups: 12847,
    cities: ['Lagos', 'Abuja', 'Port Harcourt', 'Kano'],
    userTypes: { drivers: 3251, passengers: 7892, both: 1704 },
  });

  const {
    // register,
    handleSubmit,
    formState: {},
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setIsSuccess(true);
      reset();

      setStats((prev) => ({
        ...prev,
        totalSignups: prev.totalSignups + 1,
        userTypes: {
          ...prev.userTypes,
          [data.userType as keyof typeof prev.userTypes]:
            prev.userTypes[data.userType as keyof typeof prev.userTypes] + 1,
        },
      }));

      // Success toast with Sonner
      toast.success('Welcome to RidePaddy! 🎉', {
        description: `You're #${result.data.position} on our waitlist. We'll notify you when we launch in your city.`,
        duration: 6000,
        action: {
          label: 'Share',
          onClick: () => {
            if (navigator.share) {
              navigator
                .share({
                  title: 'Join me on RidePaddy!',
                  text: "I just joined the RidePaddy waitlist. Join me and let's find our ride buddies together!",
                  url: window.location.href,
                })
                .catch(console.error);
            }
          },
        },
      });
    } catch (error) {
      // Error toast with Sonner
      toast.error('Oops! Something went wrong', {
        description:
          error instanceof Error ? error.message : 'Please try again later.',
        duration: 5000,
        action: {
          label: 'Retry',
          onClick: () => void handleSubmit(onSubmit)(),
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id='waitlist'
      className='py-24 bg-gradient-to-br from-primary-20 via-background to-secondary-20'
      aria-labelledby='waitlist-heading'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column - Form */}
          <div>
            <FadeIn>
              <div className='mb-8'>
                <Badge variant='secondary' className='mb-4 px-4 py-2'>
                  <Users className='h-4 w-4 mr-2' />
                  Join {stats.totalSignups.toLocaleString()}+ Users
                </Badge>
                <h2
                  id='waitlist-heading'
                  className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6'>
                  Be the First to{' '}
                  <span className='gradient-text block'>Find Your Paddy</span>
                </h2>
                <p className='text-lg font-body text-muted-foreground leading-relaxed'>
                  Join our exclusive waitlist and get early access to RidePaddy
                  when we launch in your city. Plus, get a special discount on
                  your first 5 rides!
                </p>
              </div>
            </FadeIn>

            <SlideIn direction='left' delay={0.2}>
              <Card className='shadow-xl border-0 hover-lift'>
                <CardHeader className='pb-6'>
                  <CardTitle className='text-xl font-heading'>
                    Join the Waitlist
                  </CardTitle>
                  <CardDescription className='font-body'>
                    Get notified when RidePaddy launches in your city and
                    receive exclusive early access.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className='text-center py-8'>
                      <div className='w-16 h-16 bg-primary-20 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <CheckCircle className='h-8 w-8 text-primary' />
                      </div>
                      <h3 className='text-xl font-heading font-semibold text-secondary mb-2'>
                        You&apos;re on the list! 🎉
                      </h3>
                      <p className='font-body text-muted-foreground mb-6'>
                        We&apos;ll send you an email when RidePaddy launches in
                        your city.
                      </p>
                      <Button
                        variant='outline'
                        onClick={() => setIsSuccess(false)}
                        className='w-full font-body'>
                        Add Another Person
                      </Button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className='space-y-6'>
                      <Button
                        disabled={isLoading}
                        asChild
                        className='w-full cursor-pointer font-body'
                        size='lg'>
                        <a
                          href={
                            process.env.NEXT_PUBLIC_WAITLIST_FORM_URL ||
                            'https://forms.gle/zxw5QZa1cNwbLyup6'
                          }
                          target='_blank'
                          rel='noopener noreferrer'>
                          Join the Waitlist
                        </a>
                      </Button>

                      <p className='text-xs font-body text-muted-foreground text-center'>
                        {'By joining, you agree to our '}
                        <a
                          href='/terms'
                          className='text-primary hover:underline'
                          rel='noopener noreferrer'>
                          Terms of Service
                        </a>
                        {' and '}
                        <a
                          href='/privacy'
                          className='text-primary hover:underline'
                          rel='noopener noreferrer'>
                          Privacy Policy
                        </a>
                        {'.'}
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </SlideIn>
          </div>

          {/* Right Column - Stats & Benefits */}
          <div className='space-y-8'>
            <SlideIn direction='right' delay={0.4}>
              <Card className='border-0 shadow-lg brand-gradient text-white hover-lift'>
                <CardContent className='p-8'>
                  <h3 className='text-xl font-heading font-semibold mb-6'>
                    Join the Growing Community
                  </h3>

                  <div className='grid grid-cols-2 gap-6 mb-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-heading font-bold mb-1'>
                        {stats.totalSignups.toLocaleString()}+
                      </div>
                      <div className='font-body text-white/90 text-sm'>
                        People Waiting
                      </div>
                    </div>
                    <div className='text-center'>
                      <div className='text-3xl font-heading font-bold mb-1'>
                        {stats.cities.length}
                      </div>
                      <div className='font-body text-white/90 text-sm'>
                        Cities Ready
                      </div>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='font-body text-white/90'>Drivers</span>
                      <span className='font-body font-semibold'>
                        {stats.userTypes.drivers.toLocaleString()}
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='font-body text-white/90'>
                        Passengers
                      </span>
                      <span className='font-body font-semibold'>
                        {stats.userTypes.passengers.toLocaleString()}
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='font-body text-white/90'>Both</span>
                      <span className='font-body font-semibold'>
                        {stats.userTypes.both.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn direction='right' delay={0.6}>
              <Card className='border-0 shadow-lg hover-lift'>
                <CardContent className='p-8'>
                  <h3 className='text-xl font-heading font-semibold mb-6'>
                    Early Access Benefits
                  </h3>

                  <div className='space-y-4'>
                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-primary-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='h-3 w-3 text-primary' />
                      </div>
                      <div>
                        <div className='font-body font-semibold text-secondary'>
                          50% Off First 5 Rides
                        </div>
                        <div className='text-sm font-body text-muted-foreground'>
                          Exclusive discount for early adopters
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-primary-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='h-3 w-3 text-primary' />
                      </div>
                      <div>
                        <div className='font-body font-semibold text-secondary'>
                          Priority Support
                        </div>
                        <div className='text-sm font-body text-muted-foreground'>
                          Get help faster with dedicated support
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-primary-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='h-3 w-3 text-primary' />
                      </div>
                      <div>
                        <div className='font-body font-semibold text-secondary'>
                          Exclusive Events
                        </div>
                        <div className='text-sm font-body text-muted-foreground'>
                          Join community meetups and networking events
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-primary-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='h-3 w-3 text-primary' />
                      </div>
                      <div>
                        <div className='font-body font-semibold text-secondary'>
                          Beta Features
                        </div>
                        <div className='text-sm font-body text-muted-foreground'>
                          Access new features before anyone else
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn direction='right' delay={0.8}>
              <div className='bg-muted rounded-2xl p-6'>
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='flex -space-x-2'>
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className='w-8 h-8 brand-gradient rounded-full border-2 border-card flex items-center justify-center'>
                        <span className='text-xs font-heading font-semibold text-white'>
                          {String.fromCharCode(64 + i)}
                        </span>
                      </div>
                    ))}
                    <div className='w-8 h-8 bg-muted-foreground rounded-full border-2 border-card flex items-center justify-center'>
                      <span className='text-xs font-heading font-semibold text-background'>
                        +
                      </span>
                    </div>
                  </div>
                  <div className='text-sm font-body text-muted-foreground'>
                    <span className='font-semibold'>1,247</span> people joined
                    this week
                  </div>
                </div>
                <p className='text-sm font-body text-muted-foreground italic'>
                  &quot;Can&apos;t wait for RidePaddy to launch! This is exactly
                  what Lagos needs.&quot;{' '}
                  <span className='font-semibold'>- Adebayo O.</span>
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
