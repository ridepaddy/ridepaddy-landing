'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  UserCheck,
  MapPin,
  Phone,
  AlertTriangle,
  Clock,
  Star,
  Lock,
  Camera,
  FileCheck,
  Headphones,
  Heart,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { StaggerContainer } from '@/components/animations/stagger-container';

const safetyFeatures = [
  {
    icon: UserCheck,
    title: 'Identity Verification',
    description:
      'Every driver undergoes comprehensive background checks and document verification.',
    details: [
      'National ID verification',
      "Driver's license validation",
      'Vehicle registration check',
      'Real-time photo verification',
    ],
    stat: '99.8% verified drivers',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description:
      'Live GPS tracking with automatic trip sharing to your emergency contacts.',
    details: [
      'Live location sharing',
      'Route deviation alerts',
      'Emergency contact notifications',
      'Trip progress monitoring',
    ],
    stat: '24/7 monitoring',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Phone,
    title: 'Emergency Support',
    description:
      'One-tap emergency button connects you to our safety team and authorities.',
    details: [
      'Instant emergency alerts',
      'Direct line to safety team',
      'Police integration',
      'Medical emergency response',
    ],
    stat: '<30 sec response',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Star,
    title: 'Community Rating',
    description:
      'Transparent rating system helps you choose the safest, most reliable drivers.',
    details: [
      'Two-way rating system',
      'Detailed feedback reviews',
      'Safety score calculation',
      'Community moderation',
    ],
    stat: '4.9/5 avg rating',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Lock,
    title: 'Secure Communication',
    description:
      'All messages encrypted and phone numbers protected for your privacy.',
    details: [
      'End-to-end encryption',
      'Anonymous phone calls',
      'Secure messaging',
      'Privacy protection',
    ],
    stat: '256-bit encryption',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock customer support in multiple Nigerian languages.',
    details: [
      'Live chat support',
      'Multi-language assistance',
      'Incident resolution',
      'Safety guidance',
    ],
    stat: 'Always available',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

const safetyStats = [
  {
    label: 'Safety Incidents',
    value: '0.02%',
    description: 'Lowest in the industry',
  },
  {
    label: 'Response Time',
    value: '<30s',
    description: 'Emergency response average',
  },
  {
    label: 'Verified Drivers',
    value: '99.8%',
    description: 'Comprehensive background checks',
  },
  {
    label: 'User Satisfaction',
    value: '4.9/5',
    description: 'Safety rating from users',
  },
];

const verificationSteps = [
  {
    step: 1,
    title: 'Document Upload',
    description: 'Drivers submit ID, license, and vehicle documents',
    icon: FileCheck,
  },
  {
    step: 2,
    title: 'Background Check',
    description: 'Third-party verification of criminal and driving records',
    icon: UserCheck,
  },
  {
    step: 3,
    title: 'Vehicle Inspection',
    description: 'Physical vehicle inspection and safety certification',
    icon: Camera,
  },
  {
    step: 4,
    title: 'Ongoing Monitoring',
    description: 'Continuous monitoring and regular re-verification',
    icon: Clock,
  },
];

export function Safety() {
  return (
    <section id='safety' className='py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <FadeIn>
          <div className='text-center mb-16'>
            <Badge variant='secondary' className='mb-4 px-4 py-2'>
              <Shield className='h-4 w-4 mr-2' />
              Your Safety is Our Priority
            </Badge>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Travel with Complete{' '}
              <span className='gradient-text block'>Peace of Mind</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              RidePaddy implements industry-leading safety measures to ensure
              every trip is secure, monitored, and protected. Your safety isn't
              just a feature—it's our foundation.
            </p>
          </div>
        </FadeIn>

        {/* Safety Stats */}
        <FadeIn delay={0.2}>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {safetyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='text-center bg-white rounded-2xl p-6 shadow-sm'>
                <div className='text-2xl md:text-3xl font-bold text-primary mb-2'>
                  {stat.value}
                </div>
                <div className='font-medium text-gray-900 mb-1'>
                  {stat.label}
                </div>
                <div className='text-sm text-gray-500'>{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
          {/* Left Column - Safety Features */}
          <div>
            <SlideIn direction='left'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-8'>
                Comprehensive Safety Features
              </h3>
            </SlideIn>

            <StaggerContainer>
              <div className='space-y-6'>
                {safetyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      <Card className='border-0 shadow-md hover:shadow-lg transition-all duration-300 group'>
                        <CardContent className='p-6'>
                          <div className='flex items-start space-x-4'>
                            <div
                              className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className='h-6 w-6' />
                            </div>
                            <div className='flex-1'>
                              <div className='flex items-center justify-between mb-2'>
                                <h4 className='font-bold text-gray-900'>
                                  {feature.title}
                                </h4>
                                <Badge variant='secondary' className='text-xs'>
                                  {feature.stat}
                                </Badge>
                              </div>
                              <p className='text-gray-600 mb-3 leading-relaxed'>
                                {feature.description}
                              </p>
                              <ul className='space-y-1'>
                                {feature.details.map((detail, i) => (
                                  <li
                                    key={i}
                                    className='flex items-center text-sm text-gray-500'>
                                    <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0' />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </StaggerContainer>
          </div>

          {/* Right Column - Safety Dashboard Visual */}
          <div className='relative'>
            <SlideIn direction='right' delay={0.4}>
              <div className='relative'>
                {/* Main Safety Dashboard Mockup */}
                <div className='relative z-10 bg-white rounded-3xl p-8 shadow-2xl'>
                  <div className='flex items-center justify-between mb-6'>
                    <h4 className='font-bold text-gray-900'>
                      Safety Dashboard
                    </h4>
                    <div className='flex items-center space-x-2'>
                      <div className='w-2 h-2 bg-green-500 rounded-full' />
                      <span className='text-sm text-gray-600'>Active</span>
                    </div>
                  </div>

                  {/* Live Trip Monitoring */}
                  <div className='space-y-4'>
                    <div className='bg-green-50 rounded-xl p-4'>
                      <div className='flex items-center space-x-3 mb-3'>
                        <MapPin className='h-5 w-5 text-green-600' />
                        <span className='font-medium text-gray-900'>
                          Live Trip Monitoring
                        </span>
                      </div>
                      <div className='text-sm text-gray-600'>
                        Route: Surulere → Victoria Island
                      </div>
                      <div className='text-sm text-gray-600'>
                        ETA: 8:45 AM • 15 mins remaining
                      </div>
                    </div>

                    <div className='bg-blue-50 rounded-xl p-4'>
                      <div className='flex items-center space-x-3 mb-3'>
                        <Shield className='h-5 w-5 text-blue-600' />
                        <span className='font-medium text-gray-900'>
                          Driver Verified
                        </span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <div className='w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full' />
                        <div>
                          <div className='text-sm font-medium'>Adebayo O.</div>
                          <div className='text-xs text-gray-500'>
                            4.9★ • 500+ trips
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='bg-yellow-50 rounded-xl p-4'>
                      <div className='flex items-center space-x-3 mb-3'>
                        <Heart className='h-5 w-5 text-yellow-600' />
                        <span className='font-medium text-gray-900'>
                          Emergency Contacts
                        </span>
                      </div>
                      <div className='text-sm text-gray-600'>
                        2 contacts notified • Trip shared
                      </div>
                    </div>
                  </div>

                  {/* Emergency Button */}
                  <Button
                    className='w-full mt-6 bg-red-600 hover:bg-red-700 text-white'
                    size='lg'>
                    <AlertTriangle className='h-5 w-5 mr-2' />
                    Emergency Alert
                  </Button>
                </div>

                {/* Floating Safety Stats */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-2xl shadow-lg z-20'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold'>99.8%</div>
                    <div className='text-xs opacity-90'>Safe Trips</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                  }}
                  className='absolute -bottom-4 -left-4 bg-blue-500 text-white p-4 rounded-2xl shadow-lg z-20'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold'>&lt;30s</div>
                    <div className='text-xs opacity-90'>Response</div>
                  </div>
                </motion.div>
              </div>
            </SlideIn>
          </div>
        </div>

        {/* Driver Verification Process */}
        <FadeIn delay={0.6}>
          <div className='bg-white rounded-3xl p-8 md:p-12 shadow-lg'>
            <div className='text-center mb-12'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                How We Verify Every Driver
              </h3>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Our rigorous 4-step verification process ensures that only the
                most trustworthy and qualified drivers join the RidePaddy
                community.
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-8'>
              {verificationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className='text-center group'>
                    <div className='relative mb-6'>
                      <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                        <Icon className='h-8 w-8 text-primary group-hover:text-white' />
                      </div>
                      <div className='absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm'>
                        {step.step}
                      </div>
                      {index < verificationSteps.length - 1 && (
                        <div className='hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10' />
                      )}
                    </div>
                    <h4 className='font-bold text-gray-900 mb-3'>
                      {step.title}
                    </h4>
                    <p className='text-sm text-gray-600 leading-relaxed'>
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Safety Guarantee */}
        <FadeIn delay={0.8}>
          <div className='text-center mt-16 bg-gradient-to-r from-primary to-primary-600 rounded-3xl p-12 text-white'>
            <Shield className='h-16 w-16 mx-auto mb-6 opacity-90' />
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              Our Safety Guarantee
            </h3>
            <p className='text-lg text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed'>
              If you ever feel unsafe during a RidePaddy trip, we'll immediately
              connect you with emergency services and cover any costs associated
              with getting you to safety.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' variant='secondary'>
                Learn More About Safety
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-primary'>
                Download App
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
