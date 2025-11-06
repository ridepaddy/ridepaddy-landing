'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Target,
  Eye,
  Heart,
  Users,
  // Award,
  // MapPin,
  Shield,
  Leaf,
  Globe,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { StaggerContainer } from '@/components/animations/stagger-container';

// Add screen reader only styles
const srOnly =
  'sr-only absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Every feature we build prioritizes the safety and security of our community.',
    color: 'text-secondary',
    bg: 'bg-secondary-20',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description:
      'We believe in the power of connections and building lasting relationships.',
    color: 'text-primary',
    bg: 'bg-primary-20',
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description:
      'Reducing carbon footprint through shared transportation solutions.',
    color: 'text-primary',
    bg: 'bg-primary-20',
  },
  {
    icon: Heart,
    title: 'Social Impact',
    description:
      'Creating economic opportunities while solving real transportation challenges.',
    color: 'text-secondary',
    bg: 'bg-secondary-20',
  },
];

// const milestones = [
//   {
//     id: "founding",
//     year: "2023",
//     title: "The Beginning",
//     description:
//       "RidePaddy was founded with a vision to transform transportation in Nigeria.",
//     stats: "Idea conceived",
//   },
//   {
//     id: "launch",
//     year: "Early 2024",
//     title: "First Launch",
//     description:
//       "Launched in Lagos with 100 beta users, focusing on safety and reliability.",
//     stats: "100+ Beta Users",
//   },
//   {
//     id: "growth",
//     year: "Mid 2024",
//     title: "Rapid Growth",
//     description:
//       "Expanded to 8 cities with advanced safety features and community building.",
//     stats: "50,000+ Active Users",
//   },
//   {
//     id: "future",
//     year: "2025+",
//     title: "Looking Forward",
//     description:
//       "Expanding nationwide with AI-powered matching and sustainable initiatives.",
//     stats: "Future Vision",
//   },
// ];

const team = [
  {
    name: 'Maurice Ogbebor',
    role: 'Co-Founder & CEO',
    bio: '',
    image: '/images/mauricePhoto.jpg',
    linkedin: '#',
  },
  {
    name: 'Abdulrasheed Tijani ',
    role: 'Co-Founder & CTO',
    bio: '',
    image: '/images/rasheedPhoto.jpeg',
    linkedin:
      'https://www.linkedin.com/in/abdulrasheed-tijani-7459b1169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    name: 'Elijah Ugwu',
    role: 'Chief Operating officer',
    bio: '',
    image: '/images/elijahPhoto.jpeg',
    linkedin: '#',
  },
  {
    name: 'Oluwayomi Adekanye',
    role: 'VP Engineering',
    bio: '',
    image: '/images/kanyePhoto.jpg',
    linkedin: '#',
  },
];

// const achievements = [
//   {
//     icon: Award,
//     title: "Best Transportation Innovation",
//     description: "TechCrunch Disrupt Africa 2024",
//     year: "2024",
//   },
//   {
//     icon: Users,
//     title: "50,000+ Active Users",
//     description: "Fastest growing carpooling platform",
//     year: "2024",
//   },
//   {
//     icon: MapPin,
//     title: "8 Cities Coverage",
//     description: "Expanding across major Nigerian cities",
//     year: "2024",
//   },
//   {
//     icon: Leaf,
//     title: "1,200T CO₂ Reduced",
//     description: "Environmental impact milestone",
//     year: "2024",
//   },
// ];

export function About() {
  return (
    <section
      id='about'
      className='py-24 bg-white'
      aria-labelledby='about-heading'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <FadeIn>
          <div className='text-center mb-20'>
            <Badge variant='secondary' className='mb-4 px-4 py-2'>
              <Heart className='h-4 w-4 mr-2' />
              Our Story
            </Badge>
            <h2
              id='about-heading'
              className='text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary mb-6'>
              Building the Future of{' '}
              <span className='brand-gradient bg-clip-text text-transparent block'>
                Shared Transportation
              </span>
            </h2>
            <p className='text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              RidePaddy was born from a simple observation: millions of
              Nigerians struggle with expensive, unreliable transportation every
              day. We&apos;re building more than just a carpooling
              app—we&apos;re creating a community that transforms how people
              move, connect, and thrive together.
            </p>
          </div>
        </FadeIn>

        {/* Mission & Vision */}
        <section
          className='grid lg:grid-cols-2 gap-16 mb-20'
          aria-labelledby='mission-vision-heading'>
          <h3 id='mission-vision-heading' className={srOnly}>
            Mission and Vision
          </h3>
          <SlideIn direction='left'>
            <Card className='border-0 shadow-xl bg-gradient-to-br from-primary via-secondary to-success text-white relative overflow-hidden'>
              {/* Gradient overlay for depth */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10'></div>
              {/* Decorative elements */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl'></div>
              <div className='absolute bottom-0 left-0 w-24 h-24 bg-success/20 rounded-full blur-xl'></div>

              <CardContent className='p-8 relative z-10'>
                <div className='mb-6'>
                  <Target className='h-12 w-12 mb-4 opacity-90' />
                  <h3 className='text-2xl font-bold font-heading mb-4'>
                    Our Mission
                  </h3>
                  <p className='text-white/90 font-body leading-relaxed'>
                    To make transportation in Nigeria affordable, safe, and
                    social by connecting people who share similar routes,
                    creating lasting friendships, and building stronger
                    communities one ride at a time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </SlideIn>

          <SlideIn direction='right' delay={0.2}>
            <Card className='border-0 shadow-xl bg-gradient-to-br from-secondary to-secondary-60 text-white relative overflow-hidden'>
              {/* Gradient overlay for depth */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10'></div>
              {/* Decorative elements */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl'></div>
              <div className='absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-xl'></div>

              <CardContent className='p-8 relative z-10'>
                <div className='mb-6'>
                  <Eye className='h-12 w-12 mb-4 opacity-90' />
                  <h3 className='text-2xl font-bold font-heading mb-4'>
                    Our Vision
                  </h3>
                  <p className='text-white/90 font-body leading-relaxed'>
                    To become Africa&apos;s leading community-driven mobility
                    platform, where every journey creates value—saving money,
                    building relationships, protecting our environment, and
                    empowering communities across the continent.
                  </p>
                </div>
              </CardContent>
            </Card>
          </SlideIn>
        </section>

        {/* Values */}
        <FadeIn delay={0.4}>
          <section className='mb-20' aria-labelledby='values-heading'>
            <div className='text-center mb-12'>
              <h3
                id='values-heading'
                className='text-2xl md:text-3xl font-bold font-heading text-secondary mb-4'>
                Our Core Values
              </h3>
              <p className='text-muted-foreground font-body max-w-2xl mx-auto'>
                The principles that guide everything we do and every decision we
                make as we build the future of transportation.
              </p>
            </div>

            <StaggerContainer>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      <Card className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-lift h-full'>
                        <CardContent className='p-6 text-center'>
                          <div
                            className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            <Icon className={`h-8 w-8 ${value.color}`} />
                          </div>
                          <h4 className='font-bold font-heading text-secondary mb-3'>
                            {value.title}
                          </h4>
                          <p className='text-muted-foreground font-body text-sm leading-relaxed'>
                            {value.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </StaggerContainer>
          </section>
        </FadeIn>

        {/* Timeline */}
        {/* <FadeIn delay={0.6}>
          <section className='mb-20' aria-labelledby='journey-heading'>
            <div className='text-center mb-12'>
              <h3
                id='journey-heading'
                className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                Our Journey So Far
              </h3>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                From a simple idea to transforming how Nigerians experience
                transportation. Here are the key milestones in our journey.
              </p>
            </div>

            <div className='relative'>
             
              <div className='absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200'></div>

              <div className='space-y-12'>
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                 
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10'></div>

                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                      }`}>
                      <Card className='border-0 shadow-lg'>
                        <CardContent className='p-6'>
                          <div className='flex items-center justify-between mb-2'>
                            <Badge variant='secondary' className='text-xs'>
                              {milestone.stats}
                            </Badge>
                            <span className='text-2xl font-bold text-primary'>
                              {milestone.year}
                            </span>
                          </div>
                          <h4 className='font-bold text-gray-900 mb-2'>
                            {milestone.title}
                          </h4>
                          <p className='text-gray-600 text-sm leading-relaxed'>
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn> */}

        {/* Team */}
        <FadeIn delay={0.8}>
          <section className='mb-20' aria-labelledby='team-heading'>
            <div className='text-center mb-12'>
              <h3
                id='team-heading'
                className='text-2xl md:text-3xl font-bold font-heading text-secondary mb-4'>
                Meet the Team
              </h3>
              <p className='text-muted-foreground font-body max-w-2xl mx-auto'>
                The passionate individuals working tirelessly to revolutionize
                transportation in Nigeria and beyond.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <Card className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-lift'>
                    <CardContent className='p-6 text-center'>
                      <div className='relative mb-4'>
                        <div className='w-24 h-24 rounded-full overflow-hidden mx-auto'>
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className='object-cover'
                          />
                        </div>
                      </div>
                      <h4 className='font-bold font-heading text-secondary mb-1'>
                        {member.name}
                      </h4>
                      <p className='text-primary font-body font-medium text-sm mb-3'>
                        {member.role}
                      </p>
                      {/* <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p> */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Achievements */}
        {/* <FadeIn delay={1.0}>
          <section className='mb-16' aria-labelledby='achievements-heading'>
            <div className='text-center mb-12'>
              <h3
                id='achievements-heading'
                className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                Recognition & Achievements
              </h3>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                We&apos;re proud of the recognition we&apos;ve received and the impact
                we&apos;re making in the transportation industry.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <Card className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full'>
                      <CardContent className='p-6 text-center'>
                        <div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                          <Icon className='h-8 w-8 text-primary' />
                        </div>
                        <div className='text-xs text-primary font-semibold mb-2'>
                          {achievement.year}
                        </div>
                        <h4 className='font-bold text-gray-900 mb-2'>
                          {achievement.title}
                        </h4>
                        <p className='text-gray-600 text-sm'>
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </FadeIn> */}

        {/* Call to Action */}
        <FadeIn delay={1.2}>
          <section
            className='text-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-12'
            aria-labelledby='join-mission-heading'>
            <Globe className='h-16 w-16 mx-auto mb-6 text-primary' />
            <h3
              id='join-mission-heading'
              className='text-2xl md:text-3xl font-bold font-heading text-secondary mb-4'>
              Join Our Mission
            </h3>
            <p className='text-lg font-body text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed'>
              Whether you&apos;re looking for affordable rides, want to earn
              extra income, or simply believe in building stronger communities,
              there&apos;s a place for you in the RidePaddy family.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  size='lg'
                  className='font-body shadow-lg'
                  aria-label='Download RidePaddy mobile application'>
                  Download App
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  size='lg'
                  variant='outline'
                  className='font-body'
                  aria-label='Learn more about RidePaddy services'>
                  Learn More
                </Button>
              </motion.div>
            </div>
          </section>
        </FadeIn>
      </div>
    </section>
  );
}
