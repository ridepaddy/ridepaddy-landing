'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Smart navigation function
const getNavigation = (pathname: string) => [
  {
    name: 'About',
    href: pathname === '/' ? '#about' : '/about',
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
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b'
          : 'bg-transparent',
      )}>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              src='/images/brand/Full-Logo-Green-&-Dark-Teal.svg'
              alt='RidePaddy Logo'
              width={150}
              height={80}
              className='rounded brightness-125 contrast-125 drop-shadow-lg'
            />
            {/* <span className="text-xl font-bold gradient-text">RidePaddy</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded transition-colors duration-200 font-medium font-body'>
                {item.name}
              </Link>
            ))}
            <div className='flex items-center space-x-4'>
              <Button variant='outline' size='sm' asChild>
                <Link href='tel:+2341234567890'>
                  <Phone className='h-4 w-4 mr-2' />
                  Contact
                </Link>
              </Button>
              <Button size='sm' asChild>
                <Link href='#download'>Download App</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            id='mobile-menu'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden border-t bg-white'>
            <nav className='px-2 pt-2 pb-3 space-y-1' aria-label='Mobile navigation'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-secondary hover:text-primary hover:bg-primary-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md font-medium font-body transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <div className='pt-4 space-y-2'>
                <Button variant='outline' className='w-full' asChild>
                  <Link href='tel:+2341234567890'>
                    <Phone className='h-4 w-4 mr-2' />
                    Contact Us
                  </Link>
                </Button>
                <Button className='w-full' asChild>
                  <Link href='#download'>Download App</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
