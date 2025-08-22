'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Car,
  DollarSign,
  MapPin,
  Star,
  TrendingUp,
  Leaf,
  Clock,
  Heart,
  Award,
  Zap,
  Globe,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';

interface Stat {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  subtext: string;
  color: string;
  gradient: string;
  trend?: string;
}

const mainStats: Stat[] = [
  {
    icon: Users,
    label: 'Active Users',
    value: '50,000+',
    subtext: 'Verified paddies across Nigeria',
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
    trend: '+45% this month',
  },
  {
    icon: Car,
    label: 'Trips Completed',
    value: '2.5M+',
    subtext: 'Safe journeys and counting',
    color: 'text-green-600',
    gradient: 'from-green-500 to-green-600',
    trend: '+200K weekly',
  },
  {
    icon: DollarSign,
    label: 'Money Saved',
    value: '₦2.5B+',
    subtext: 'Saved by our community',
    color: 'text-yellow-600',
    gradient: 'from-yellow-500 to-yellow-600',
    trend: '+₦50M monthly',
  },
  {
    icon: MapPin,
    label: 'Cities Covered',
    value: '8',
    subtext: 'Major Nigerian cities',
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-purple-600',
    trend: '3 more coming',
  },
];

const additionalStats = [
  {
    icon: Star,
    label: 'Average Rating',
    value: '4.9/5',
    subtext: 'User satisfaction score',
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    icon: Leaf,
    label: 'CO₂ Reduced',
    value: '1,200T',
    subtext: 'Environmental impact',
    color: 'text-emerald-600',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Clock,
    label: 'Time Saved',
    value: '500K hrs',
    subtext: 'Collective time savings',
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Heart,
    label: 'Friendships',
    value: '15,000+',
    subtext: 'New connections made',
    color: 'text-pink-600',
    gradient: 'from-pink-500 to-pink-600',
  },
];

const achievementStats = [
  {
    icon: Award,
    title: 'Safety Leader',
    description: '99.8% incident-free trips',
    color: 'bg-yellow-100 text-yellow-800',
  },
  {
    icon: TrendingUp,
    title: 'Fastest Growing',
    description: '#1 carpooling app in Nigeria',
    color: 'bg-green-100 text-green-800',
  },
  {
    icon: Globe,
    title: 'Community Impact',
    description: 'Featured in Nigerian tech news',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    icon: Zap,
    title: 'Innovation Award',
    description: 'Best transport solution 2024',
    color: 'bg-purple-100 text-purple-800',
  },
];

export function Stats() {
  return (
    <section
      id='stats'
      className='py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <FadeIn>
          <div className='text-center mb-16'>
            <Badge variant='secondary' className='mb-4 px-4 py-2'>
              <TrendingUp className='h-4 w-4 mr-2' />
              Growing Strong Every Day
            </Badge>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              The Numbers Speak for{' '}
              <span className='gradient-text block'>Themselves</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              See how RidePaddy is transforming transportation across Nigeria.
              These achievements are powered by our amazing community of
              paddies.
            </p>
          </div>
        </FadeIn>

        {/* Main Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group'>
                <Card className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden'>
                  <div className={`h-2 bg-gradient-to-r ${stat.gradient}`} />
                  <CardContent className='p-8 text-center'>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className='h-8 w-8 text-white' />
                    </div>

                    <div className='text-3xl md:text-4xl font-bold text-slate-900 mb-2'>
                      {stat.value}
                    </div>

                    <h3 className='font-semibold text-slate-800 mb-2'>
                      {stat.label}
                    </h3>
                    <p className='text-slate-600 text-sm mb-4 leading-relaxed'>
                      {stat.subtext}
                    </p>

                    {stat.trend && (
                      <Badge
                        variant='secondary'
                        className='text-xs bg-slate-100 text-slate-700 border-slate-200 font-medium'>
                        <TrendingUp className='h-3 w-3 mr-1' />
                        {stat.trend}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Stats */}
        <StaggerContainer>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {additionalStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300'>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className='h-6 w-6 text-white' />
                  </div>
                  <div className='text-xl md:text-2xl font-bold text-slate-900 mb-1'>
                    {stat.value}
                  </div>
                  <div className='font-medium text-slate-800 text-sm mb-1'>
                    {stat.label}
                  </div>
                  <div className='text-xs text-slate-500 leading-relaxed'>
                    {stat.subtext}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Achievement Badges */}
        <FadeIn delay={0.4}>
          <div className='bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16'>
            <div className='text-center mb-10'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                Recognition & Achievements
              </h3>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                RidePaddy&apos;s commitment to excellence has been recognized by
                industry leaders and our growing community across Nigeria.
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {achievementStats.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='text-center group'>
                    <div
                      className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className='h-8 w-8' />
                    </div>
                    <h4 className='font-bold text-gray-900 mb-2'>
                      {achievement.title}
                    </h4>
                    <p className='text-sm text-gray-600 leading-relaxed'>
                      {achievement.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Real-time Stats Counter */}
        <FadeIn delay={0.6}>
          <div className='bg-gradient-to-br from-primary via-secondary to-success rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden'>
            {/* Gradient overlay for depth */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-3xl'></div>
            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-success/20 rounded-full blur-xl'></div>

            <div className='relative z-10'>
              <div className='mb-8'>
                <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                  Live Community Impact
                </h3>
                <p className='text-green-100 max-w-2xl mx-auto leading-relaxed'>
                  Watch our community grow in real-time as more Nigerians
                  discover the power of shared transportation.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                  <div className='text-3xl md:text-4xl font-bold mb-2'>
                    <LiveCounter target={2547892} />
                  </div>
                  <div className='text-green-100 font-medium mb-1'>
                    Total Trips Completed
                  </div>
                  <div className='text-green-200 text-sm'>
                    +127 in the last hour
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                  <div className='text-3xl md:text-4xl font-bold mb-2'>
                    ₦<LiveCounter target={2547} />M
                  </div>
                  <div className='text-green-100 font-medium mb-1'>
                    Money Saved Today
                  </div>
                  <div className='text-green-200 text-sm'>+₦45K every hour</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                  <div className='text-3xl md:text-4xl font-bold mb-2'>
                    <LiveCounter target={52847} />
                  </div>
                  <div className='text-green-100 font-medium mb-1'>
                    Active Community Members
                  </div>
                  <div className='text-green-200 text-sm'>+23 joined today</div>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.8}>
          <div className='text-center mt-16 bg-gray-50 rounded-3xl p-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
              Want to Be Part of These Numbers?
            </h3>
            <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
              Join thousands of Nigerians who are already saving money, making
              friends, and contributing to a more sustainable future with
              RidePaddy.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className='bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg'>
                Download App & Join the Community
              </button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Live counter component with realistic incremental updates
function LiveCounter({ target }: Readonly<{ target: number }>) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return <span>{count.toLocaleString()}</span>;
}
