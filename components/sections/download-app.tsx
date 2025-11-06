'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { QrCode, Smartphone, Download, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';

const APP_FEATURES = [
  'Real-time GPS tracking and safety features',
  'Secure in-app payments and messaging',
  'Smart route matching and scheduling',
  '24/7 customer support and emergency assistance',
] as const;

const STATS = [
  {
    icon: Download,
    value: '100K+',
    label: 'Downloads',
    bgColor: 'bg-primary-20',
    iconColor: 'text-primary',
    position: 'top-8 -left-8',
    delay: 0,
  },
  {
    icon: Smartphone,
    value: '4.9★',
    label: 'App Rating',
    bgColor: 'bg-secondary-20',
    iconColor: 'text-secondary',
    position: 'bottom-8 -left-4',
    delay: 2,
  },
] as const;

export function DownloadApp() {
  return (
    <section
      id='download'
      className='py-24 bg-gradient-to-br from-primary to-primary-60'
      aria-labelledby='download-heading'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='text-secondary'>
            <FadeIn>
              <h2
                id='download-heading'
                className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight'>
                Download the <span className='block'>RidePaddy App</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className='text-xl font-body text-secondary/90 mb-8 leading-relaxed'>
                Join thousands of Nigerians who are already saving money and
                making friends through carpooling. Available on iOS and Android.
              </p>
            </FadeIn>

            {/* App Store Badges */}
            <FadeIn delay={0.4}>
              <div className='flex flex-col sm:flex-row gap-4 mb-12'>
                <Link
                  href='https://apps.apple.com/app/ridepaddy'
                  className='block hover:scale-105 transition-transform duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-lg'
                  aria-label='Download RidePaddy on the App Store'>
                  <Image
                    src='/images/app-store-badge.svg'
                    alt='Download on App Store'
                    width={200}
                    height={60}
                    className='h-14 w-auto'
                    priority
                  />
                </Link>
                <Link
                  href='https://play.google.com/store/apps/details?id=com.ridepaddy'
                  className='block hover:scale-105 transition-transform duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-lg'
                  aria-label='Get RidePaddy on Google Play'>
                  <Image
                    src='/images/google-play-badge.png'
                    alt='Get it on Google Play'
                    width={200}
                    height={60}
                    className='h-14 w-auto'
                    priority
                  />
                </Link>
              </div>
            </FadeIn>

            {/* Features List */}
            <FadeIn delay={0.6}>
              <ul className='space-y-4' aria-label='App features'>
                {APP_FEATURES.map((feature, index) => (
                  <li key={index} className='flex items-center space-x-3'>
                    <div
                      className='w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0'
                      aria-hidden='true'>
                      <div className='w-2 h-2 bg-secondary rounded-full' />
                    </div>
                    <span className='font-body text-secondary/90'>{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right Column - App Preview */}
          <div className='relative'>
            <SlideIn direction='right' delay={0.3}>
              <div className='relative flex justify-center'>
                {/* Main Phone */}
                <div className='relative z-10'>
                  <div className='w-80 h-96 bg-black rounded-3xl p-2 shadow-2xl'>
                    <div className='w-full h-full bg-card rounded-2xl overflow-hidden relative'>
                      <Image
                        src='/images/app-download-mockup.png'
                        alt='RidePaddy app interface showing download screen with user-friendly design'
                        fill
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 320px'
                      />
                    </div>
                  </div>
                </div>

                {/* QR Code Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className='absolute -right-8 top-1/2 transform -translate-y-1/2'>
                  <Card className='bg-card/95 backdrop-blur-sm shadow-xl'>
                    <CardContent className='p-6 text-center'>
                      <QrCode
                        className='h-8 w-8 text-primary mx-auto mb-3'
                        aria-hidden='true'
                      />
                      <div
                        className='w-24 h-24 bg-secondary rounded-lg mx-auto mb-3 flex items-center justify-center'
                        aria-label='QR code to download RidePaddy app'>
                        <QrCode className='h-16 w-16 text-white' />
                      </div>
                      <p className='text-sm font-body text-muted-foreground font-medium'>
                        Scan to Download
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Floating Stats */}
                {STATS.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 0 }}
                      animate={{
                        y: index === 0 ? [-10, 10, -10] : [10, -10, 10],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: stat.delay,
                      }}
                      className={`absolute ${stat.position} bg-card rounded-2xl p-4 shadow-lg`}>
                      <div className='flex items-center space-x-3'>
                        <div
                          className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                          <IconComponent
                            className={`h-6 w-6 ${stat.iconColor}`}
                            aria-hidden='true'
                          />
                        </div>
                        <div>
                          <div className='font-heading font-bold text-secondary'>
                            {stat.value}
                          </div>
                          <div className='text-sm font-body text-muted-foreground'>
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </SlideIn>
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={1.0}>
          <div className='text-center mt-16'>
            <div className='inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-3 backdrop-blur-sm'>
              <ArrowRight className='h-5 w-5 text-secondary' aria-hidden='true' />
              <span className='font-body text-secondary font-medium'>
                Join 50,000+ Happy Users Today
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
