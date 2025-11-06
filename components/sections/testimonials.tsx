'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/animations/fade-in';

interface TestimonialStats {
  tripsSaved?: string;
  friendsMade?: number;
  monthsUsing?: number;
  earningsGenerated?: string;
  passengersHelped?: number;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  content: string;
  videoUrl?: string;
  stats: TestimonialStats;
  verified: boolean;
  featured: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Adebayo Ogundimu',
    role: 'Software Engineer',
    location: 'Victoria Island, Lagos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    content:
      "RidePaddy transformed my daily commute from Surulere to VI. I've made amazing friends and save over ₦50,000 monthly on transportation. The safety features give me complete peace of mind.",
    videoUrl: '/videos/testimonial-adebayo.mp4',
    stats: { tripsSaved: '₦200K+', friendsMade: 15, monthsUsing: 8 },
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Chiamaka Nwosu',
    role: 'Marketing Manager',
    location: 'Lekki, Lagos',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    content:
      'As a busy working mom, RidePaddy is a lifesaver. I can plan my trips in advance, the drivers are professional, and my kids love their regular "Uncle" drivers. It\'s like having an extended family.',
    stats: { tripsSaved: '₦150K+', friendsMade: 8, monthsUsing: 6 },
    verified: true,
    featured: false,
  },
  {
    id: 3,
    name: 'Emeka Okafor',
    role: 'Business Owner & Driver',
    location: 'Ikeja, Lagos',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    content:
      'I started as a passenger but became a driver when I saw the opportunity. Now I earn an extra ₦80K monthly while helping my community. RidePaddy created a real income stream for me.',
    stats: {
      earningsGenerated: '₦480K+',
      passengersHelped: 120,
      monthsUsing: 10,
    },
    verified: true,
    featured: false,
  },
  {
    id: 4,
    name: 'Dr. Fatima Hassan',
    role: 'Medical Doctor',
    location: 'Garki, Abuja',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    content:
      "Working night shifts at the hospital, I need reliable, safe transportation. RidePaddy's verification process and emergency features are top-notch. I always feel secure, even during late hours.",
    stats: { tripsSaved: '₦180K+', friendsMade: 12, monthsUsing: 7 },
    verified: true,
    featured: false,
  },
  {
    id: 5,
    name: 'Kemi Adebisi',
    role: 'University Student',
    location: 'Yaba, Lagos',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    content:
      'As a student on a budget, RidePaddy saves me so much money. The student discount and affordable rides mean I can focus on my studies instead of worrying about transport costs.',
    stats: { tripsSaved: '₦75K+', friendsMade: 20, monthsUsing: 5 },
    verified: true,
    featured: false,
  },
  {
    id: 6,
    name: 'Ibrahim Mohammed',
    role: 'Civil Servant',
    location: 'Maitama, Abuja',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    rating: 5,
    content:
      "The carpooling community in Abuja is incredible. I've networked with people from different sectors and even found new business opportunities. RidePaddy is more than transportation.",
    stats: { tripsSaved: '₦165K+', friendsMade: 18, monthsUsing: 9 },
    verified: true,
    featured: false,
  },
];

const stats = [
  { label: 'Happy Users', value: '50,000+' },
  { label: 'Money Saved', value: '₦2.5B+' },
  { label: 'Friendships Made', value: '15,000+' },
  { label: 'Cities Served', value: '8' },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredTestimonial =
    testimonials.find((t) => t.featured) || testimonials[0];
  const otherTestimonials = testimonials.filter((t) => !t.featured);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % otherTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, otherTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % otherTestimonials.length);
    setIsAutoPlaying(false);
  };

  const previousTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + otherTestimonials.length) % otherTestimonials.length,
    );
    setIsAutoPlaying(false);
  };

  return (
    <section id='testimonials' className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6'>
              Real Stories from Real{' '}
              <span className='gradient-text block'>Paddies</span>
            </h2>
            <p className='text-lg font-body text-muted-foreground max-w-3xl mx-auto'>
              Discover how RidePaddy is transforming lives across Nigeria. From
              saving money to building friendships, our community shares their
              amazing experiences.
            </p>
          </div>
        </FadeIn>

        {/* Stats Bar */}
        <FadeIn delay={0.2}>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-muted rounded-2xl p-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='text-center'>
                <div className='text-2xl md:text-3xl font-heading font-bold text-primary mb-2'>
                  {stat.value}
                </div>
                <div className='text-sm font-body text-muted-foreground'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Featured Testimonial */}
          <div>
            <FadeIn delay={0.4}>
              <Card className='border-0 shadow-2xl overflow-hidden'>
                <div className='relative'>
                  {/* Video/Image */}
                  <div className='relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20'>
                    <Image
                      src={featuredTestimonial.image}
                      alt={featuredTestimonial.name}
                      fill
                      className='object-cover'
                    />
                    {featuredTestimonial.videoUrl && (
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <Button
                          size='lg'
                          className='rounded-full bg-card/90 hover:bg-card hover:scale-110 transition-all duration-300'>
                          <Play className='h-6 w-6 ml-1' fill='currentColor' />
                        </Button>
                      </div>
                    )}
                    <Badge className='absolute top-4 left-4 bg-primary'>
                      Featured Story
                    </Badge>
                  </div>

                  <CardContent className='p-8'>
                    {/* Quote */}
                    <div className='relative mb-6'>
                      <Quote className='absolute -top-2 -left-2 h-8 w-8 text-primary/20' />
                      <p className='text-lg font-body text-foreground leading-relaxed italic pl-6'>
                        {featuredTestimonial.content}
                      </p>
                    </div>

                    {/* User Info */}
                    <div className='flex items-start justify-between mb-6'>
                      <div>
                        <div className='flex items-center space-x-2 mb-2'>
                          <h4 className='font-heading font-bold text-secondary'>
                            {featuredTestimonial.name}
                          </h4>
                          {featuredTestimonial.verified && (
                            <Badge variant='secondary' className='text-xs'>
                              Verified User
                            </Badge>
                          )}
                        </div>
                        <p className='font-body text-muted-foreground text-sm mb-1'>
                          {featuredTestimonial.role}
                        </p>
                        <p className='font-body text-muted-foreground text-sm'>
                          {featuredTestimonial.location}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className='flex items-center space-x-1'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < featuredTestimonial.rating
                                ? 'text-primary fill-current'
                                : 'text-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 pt-6 border-t border-border'>
                      {Object.entries(featuredTestimonial.stats).map(
                        ([key, value]) => (
                          <div key={key} className='text-center'>
                            <div className='font-heading font-bold text-primary'>
                              {value}
                            </div>
                            <div className='text-xs font-body text-muted-foreground capitalize'>
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div>
            <div className='relative'>
              {/* Carousel Header */}
              <div className='flex items-center justify-between mb-8'>
                <h3 className='text-2xl font-heading font-bold text-secondary'>
                  More Happy Paddies
                </h3>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='outline'
                    size='icon'
                    onClick={previousTestimonial}
                    className='rounded-full'>
                    <ChevronLeft className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    onClick={nextTestimonial}
                    className='rounded-full'>
                    <ChevronRight className='h-4 w-4' />
                  </Button>
                </div>
              </div>

              {/* Testimonial Cards */}
              <div className='space-y-6'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}>
                    <Card className='border-0 shadow-lg hover-lift'>
                      <CardContent className='p-6'>
                        <div className='flex items-start space-x-4'>
                          <div className='relative'>
                            <div className='w-12 h-12 rounded-full overflow-hidden'>
                              <Image
                                src={
                                  otherTestimonials[currentIndex]?.image || ''
                                }
                                alt={
                                  otherTestimonials[currentIndex]?.name || ''
                                }
                                width={48}
                                height={48}
                                className='object-cover'
                              />
                            </div>
                            {otherTestimonials[currentIndex]?.verified && (
                              <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-card' />
                            )}
                          </div>

                          <div className='flex-1'>
                            <div className='flex items-center justify-between mb-2'>
                              <div>
                                <h4 className='font-heading font-semibold text-secondary'>
                                  {otherTestimonials[currentIndex]?.name}
                                </h4>
                                <p className='text-sm font-body text-muted-foreground'>
                                  {otherTestimonials[currentIndex]?.role}
                                </p>
                              </div>
                              <div className='flex items-center space-x-1'>
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i <
                                      (otherTestimonials[currentIndex]
                                        ?.rating || 0)
                                        ? 'text-primary fill-current'
                                        : 'text-muted'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>

                            <p className='font-body text-foreground text-sm leading-relaxed mb-3'>
                              {otherTestimonials[currentIndex]?.content}
                            </p>

                            <div className='flex items-center justify-between text-xs font-body text-muted-foreground'>
                              <span>
                                {otherTestimonials[currentIndex]?.location}
                              </span>
                              <span>
                                {
                                  otherTestimonials[currentIndex]?.stats
                                    .monthsUsing
                                }{' '}
                                months using RidePaddy
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>

                {/* Quick Preview Cards */}
                <div className='grid grid-cols-1 gap-4'>
                  {otherTestimonials.slice(1, 3).map((testimonial) => (
                    <Card
                      key={testimonial.id}
                      className='border border-border hover:shadow-md transition-shadow cursor-pointer'>
                      <CardContent className='p-4'>
                        <div className='flex items-start space-x-3'>
                          <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={40}
                              height={40}
                              className='object-cover'
                            />
                          </div>
                          <div className='flex-1 min-w-0'>
                            <div className='flex items-center justify-between mb-1'>
                              <h5 className='font-body font-medium text-secondary text-sm truncate'>
                                {testimonial.name}
                              </h5>
                              <div className='flex items-center space-x-1'>
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-2.5 w-2.5 ${
                                      i < testimonial.rating
                                        ? 'text-primary fill-current'
                                        : 'text-muted'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className='text-xs font-body text-muted-foreground line-clamp-2'>
                              {testimonial.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className='flex justify-center space-x-2 mt-6'>
                {otherTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <FadeIn delay={0.8}>
          <div className='text-center mt-16 bg-gradient-to-r from-primary-20 to-secondary-20 rounded-3xl p-12'>
            <h3 className='text-2xl md:text-3xl font-heading font-bold text-secondary mb-4'>
              Ready to Write Your Own Success Story?
            </h3>
            <p className='text-lg font-body text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Join thousands of Nigerians who have transformed their daily
              commute into something special with RidePaddy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' className='group font-body'>
                Download App Now
                <motion.div
                  className='ml-2'
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}>
                  →
                </motion.div>
              </Button>
              <Button variant='outline' size='lg' className='font-body'>
                Read More Stories
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
