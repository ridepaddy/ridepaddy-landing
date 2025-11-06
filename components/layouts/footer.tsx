'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

// Smart footer navigation
const getFooterLinks = (pathname: string) => ({
  product: [
    { name: 'Features', href: pathname === '/' ? '#features' : '/#features' },
    {
      name: 'How It Works',
      href: pathname === '/' ? '#how-it-works' : '/#how-it-works',
    },
    { name: 'Safety', href: pathname === '/' ? '#safety' : '/#safety' },
    { name: 'Pricing', href: pathname === '/' ? '#pricing' : '/#pricing' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
});

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ridepaddy' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ridepaddy' },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/ridepaddy',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/ridepaddy',
  },
];

export function Footer() {
  const pathname = usePathname();
  const footerLinks = getFooterLinks(pathname);
  return (
    <footer className='bg-secondary text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <Link href='/' className='flex items-center space-x-2 mb-4'>
              <Image
                src='/images/brand/Full-Logo-Green-&-White.svg'
                alt='RidePaddy Logo'
                width={150}
                height={50}
                className='rounded brightness-125 contrast-125 drop-shadow-lg'
              />
            </Link>
            <p className='text-secondary-foreground/80 font-body mb-6 max-w-sm'>
              Nigeria&apos;s most trusted carpooling platform. Connect with
              verified drivers and passengers for safe, affordable rides.
            </p>

            {/* Contact Info */}
            <div className='space-y-2 text-sm text-secondary-foreground/80 font-body'>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-4 w-4' />
                <span>Lagos, Nigeria</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='h-4 w-4' />
                <span>+234 8065235615</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='h-4 w-4' />
                <span>hello@ridepaddy.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className='font-semibold font-heading mb-4'>Product</h3>
            <ul className='space-y-2'>
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-secondary-foreground/80 font-body hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded transition-colors duration-200'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-semibold font-heading mb-4'>Support</h3>
            <ul className='space-y-2'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-secondary-foreground/80 font-body hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded transition-colors duration-200'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-semibold font-heading mb-4'>Company</h3>
            <ul className='space-y-2 mb-6'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-secondary-foreground/80 font-body hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded transition-colors duration-200'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className='font-semibold font-heading mb-2'>Stay Updated</h4>
              <p className='text-secondary-foreground/80 font-body text-sm mb-3'>
                Get the latest news and updates from RidePaddy.
              </p>
              <form
                className='flex space-x-2'
                onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='newsletter-email' className='sr-only'>
                  Email address
                </label>
                <Input
                  id='newsletter-email'
                  type='email'
                  placeholder='Enter email'
                  required
                  aria-label='Email address for newsletter'
                  className='flex-1 bg-white border-secondary-40 text-secondary placeholder-muted-foreground'
                />
                <Button type='submit' size='sm'>
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-secondary-60 pt-8 mt-12'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-secondary-foreground/80 font-body text-sm'>
              © {new Date().getFullYear()} RidePaddy. All rights reserved.
            </p>

            {/* Social Links */}
            <div className='flex space-x-4 mt-4 md:mt-0'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className='text-secondary-foreground/80 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded transition-colors duration-200'
                    aria-label={social.name}>
                    <Icon className='h-5 w-5' />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
