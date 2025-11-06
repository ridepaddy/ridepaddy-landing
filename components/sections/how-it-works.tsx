'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { UserPlus, Search, MessageCircle, Car } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account and complete verification in minutes',
    details:
      'Quick registration with phone verification and optional document upload for enhanced trust.',
  },
  {
    icon: Search,
    title: 'Find Rides',
    description: 'Search for rides or post your own trip',
    details:
      'Smart matching algorithm finds compatible rides based on your route, timing, and preferences.',
  },
  {
    icon: MessageCircle,
    title: 'Connect',
    description: 'Message your ride buddy and coordinate pickup',
    details:
      'Safe in-app messaging to coordinate pickup details and get to know your travel companion.',
  },
  {
    icon: Car,
    title: 'Travel Together',
    description: 'Enjoy your shared journey with safety tracking',
    details:
      'Real-time GPS tracking, emergency features, and community support throughout your trip.',
  },
];

export function HowItWorks() {
  return (
    <section id='how-it-works' className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6'>
              How <span className='gradient-text'>RidePaddy</span> Works
            </h2>
            <p className='text-lg font-body text-muted-foreground max-w-3xl mx-auto'>
              Getting started with RidePaddy is simple. Follow these four easy
              steps to start your carpooling journey today.
            </p>
          </div>
        </FadeIn>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Side - Steps */}
          <div className='space-y-8'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <SlideIn key={step.title} direction='left' delay={index * 0.2}>
                  <div className='flex items-start space-x-4 group'>
                    <div className='flex-shrink-0'>
                      <div className='w-16 h-16 bg-primary-20 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                        <Icon className='h-8 w-8 text-primary group-hover:text-white' />
                      </div>
                    </div>
                    <div className='flex-1'>
                      <div className='flex items-center space-x-3 mb-3'>
                        <span className='bg-primary text-white text-sm font-heading font-bold px-3 py-1 rounded-full'>
                          {index + 1}
                        </span>
                        <h3 className='text-xl font-heading font-bold text-secondary'>
                          {step.title}
                        </h3>
                      </div>
                      <p className='font-body text-foreground mb-2 font-medium'>
                        {step.description}
                      </p>
                      <p className='text-sm font-body text-muted-foreground leading-relaxed'>
                        {step.details}
                      </p>
                    </div>
                  </div>
                </SlideIn>
              );
            })}
          </div>

          {/* Right Side - Visual */}
          <div className='relative'>
            <SlideIn direction='right' delay={0.4}>
              <div className='relative'>
                {/* Background Circle */}
                <div className='absolute inset-0 bg-gradient-to-br from-primary-20 to-secondary-20 rounded-full transform rotate-6' />

                {/* Phone Mockups */}
                <div className='relative z-10 flex items-center justify-center'>
                  <div className='grid grid-cols-2 gap-4'>
                    {/* Driver App */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className='w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl'>
                      <div className='w-full h-full bg-card rounded-2xl overflow-hidden relative'>
                        <Image
                          src='/images/driver-app-mockup.png'
                          alt='Driver App Interface'
                          fill
                          className='object-cover'
                        />
                        <div className='absolute top-4 left-4 bg-primary text-white text-xs font-body px-2 py-1 rounded-full'>
                          Driver
                        </div>
                      </div>
                    </motion.div>

                    {/* Passenger App */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className='w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl mt-8'>
                      <div className='w-full h-full bg-card rounded-2xl overflow-hidden relative'>
                        <Image
                          src='/images/passenger-app-mockup.png'
                          alt='Passenger App Interface'
                          fill
                          className='object-cover'
                        />
                        <div className='absolute top-4 left-4 bg-secondary text-white text-xs font-body px-2 py-1 rounded-full'>
                          Passenger
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute top-16 -right-8 bg-card p-3 rounded-xl shadow-lg'>
                  <div className='text-center'>
                    <div className='text-2xl font-heading font-bold text-primary'>99.8%</div>
                    <div className='text-xs font-body text-muted-foreground'>Safety Rating</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                  className='absolute bottom-16 -left-8 bg-card p-3 rounded-xl shadow-lg'>
                  <div className='text-center'>
                    <div className='text-2xl font-heading font-bold text-primary'>50K+</div>
                    <div className='text-xs font-body text-muted-foreground'>Happy Users</div>
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
