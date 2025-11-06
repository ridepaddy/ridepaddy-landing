'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Shield,
  MapPin,
  Clock,
  Star,
  Zap,
  Heart,
  DollarSign,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '../animations/stagger-container';

const features = [
  {
    icon: Users,
    title: 'Community First',
    description:
      'Build lasting relationships with your regular ride buddies in a trusted community.',
    color: 'bg-secondary-20 text-secondary',
  },
  {
    icon: Shield,
    title: 'Safety Guaranteed',
    description:
      'Comprehensive verification, real-time tracking, and 24/7 safety support.',
    color: 'bg-primary-20 text-primary',
  },
  {
    icon: MapPin,
    title: 'Smart Matching',
    description:
      'AI-powered route matching finds the perfect rides for your journey.',
    color: 'bg-secondary-20 text-secondary',
  },
  {
    icon: Clock,
    title: 'Flexible Timing',
    description:
      'Schedule rides in advance or find instant matches for your commute.',
    color: 'bg-primary-20 text-primary',
  },
  {
    icon: Star,
    title: 'Quality Assured',
    description:
      'Comprehensive rating system ensures great experiences for everyone.',
    color: 'bg-secondary-20 text-secondary',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description:
      'Cost-sharing model that saves money for passengers and earns income for drivers.',
    color: 'bg-primary-20 text-primary',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description:
      'Book rides in seconds with our streamlined, user-friendly interface.',
    color: 'bg-secondary-20 text-secondary',
  },
  {
    icon: Heart,
    title: 'Nigerian Built',
    description:
      'Designed specifically for Nigerian roads, culture, and transportation needs.',
    color: 'bg-primary-20 text-primary',
  },
];

export function Features() {
  return (
    <section id='features' className='py-24 bg-muted'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary mb-6'>
              Why Choose <span className='brand-gradient bg-clip-text text-transparent'>RidePaddy?</span>
            </h2>
            <p className='text-lg font-body text-muted-foreground max-w-3xl mx-auto'>
              Experience the future of transportation in Nigeria with features
              designed for safety, community, and convenience.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group'>
                  <Card className='h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-lift'>
                    <CardHeader className='text-center pb-2'>
                      <div
                        className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className='h-8 w-8' />
                      </div>
                      <CardTitle className='text-xl font-heading text-secondary mb-2'>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='text-center pt-0'>
                      <CardDescription className='font-body text-muted-foreground leading-relaxed'>
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Call to Action */}
        <FadeIn delay={0.8}>
          <div className='text-center mt-16'>
            <p className='text-lg font-body text-muted-foreground mb-6'>
              Ready to experience the RidePaddy difference?
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size='lg' className='font-body'>
                Join Our Community
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
