'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Smart navigation function
const getNavigation = (pathname: string) => [
  {
    name: 'Team',
    href: pathname === '/' ? '#team' : '/about',
  },
  {
    name: 'Features',
    href: pathname === '/' ? '#features' : '/#features',
  },
  {
    name: 'How It Works',
    href: pathname === '/' ? '#how-it-works' : '/#how-it-works',
  },
  {
    name: 'Safety',
    href: pathname === '/' ? '#safety' : '/#safety',
  },
  {
    name: 'Download',
    href: pathname === '/' ? '#download' : '/#download',
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navigation = getNavigation(pathname);
  const waitlistHref = pathname === '/' ? '#waitlist' : '/#waitlist';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/70 shadow-[0_18px_60px_rgba(20,61,71,0.12)] backdrop-blur-2xl'
          : 'bg-transparent',
      )}>
      <nav className='mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8'>
        <div
          className={cn(
            'flex items-center justify-between rounded-full border px-4 py-3 sm:px-6',
            isScrolled
              ? 'border-white/70 bg-white/85'
              : 'border-secondary/10 bg-white/60 backdrop-blur-xl',
          )}>
          <Link href='/' className='flex items-center space-x-3'>
            <Image
              src='/images/brand/Full-Logo-Green-&-Dark-Teal.svg'
              alt='RidePaddy Logo'
              width={150}
              height={40}
              className='h-8 w-auto'
            />
          </Link>

          <div className='hidden items-center gap-1 rounded-full bg-secondary/5 p-1 md:flex'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='rounded-full px-4 py-2 text-sm font-medium text-secondary/80 transition-colors duration-200 hover:bg-white hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
                {item.name}
              </Link>
            ))}
          </div>

          <div className='hidden items-center gap-3 md:flex'>
            <Link
              href='tel:+2348065235615'
              className='inline-flex items-center gap-2 text-sm font-medium text-secondary/75 transition-colors hover:text-secondary'>
              <Phone className='h-4 w-4' />
              Talk to us
            </Link>
            <Button size='sm' className='rounded-full px-5' asChild>
              <Link href={waitlistHref}>
                Join waitlist
                <ArrowUpRight className='h-4 w-4' />
              </Link>
            </Button>
          </div>

          <div className='md:hidden'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='rounded-full bg-white/80'
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls='mobile-menu'>
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            id='mobile-menu'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='mt-3 overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-3 shadow-2xl backdrop-blur-xl md:hidden'>
            <nav className='space-y-1' aria-label='Mobile navigation'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='block rounded-2xl px-4 py-3 text-secondary transition-colors hover:bg-primary-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <div className='space-y-2 pt-4'>
                <Button variant='outline' className='w-full rounded-full' asChild>
                  <Link href='tel:+2348065235615'>
                    <Phone className='h-4 w-4 mr-2' />
                    Contact Us
                  </Link>
                </Button>
                <Button className='w-full rounded-full' asChild>
                  <Link href={waitlistHref}>Join waitlist</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
