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
import Image from 'next/image';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

const getFooterLinks = (pathname: string) => ({
  product: [
    { name: 'Features', href: pathname === '/' ? '#features' : '/#features' },
    {
      name: 'How It Works',
      href: pathname === '/' ? '#how-it-works' : '/#how-it-works',
    },
    { name: 'Safety', href: pathname === '/' ? '#safety' : '/#safety' },
    { name: 'Download', href: pathname === '/' ? '#download' : '/#download' },
  ],
  support: [
    { name: 'Join Waitlist', href: pathname === '/' ? '#waitlist' : '/#waitlist' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'WhatsApp', href: 'https://wa.me/2348065235615' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Community', href: pathname === '/' ? '#testimonials' : '/#testimonials' },
    { name: 'Launch Cities', href: pathname === '/' ? '#waitlist' : '/#waitlist' },
    { name: 'Download App', href: pathname === '/' ? '#download' : '/#download' },
  ],
});

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: SOCIAL_LINKS.facebook },
  { name: 'Twitter', icon: Twitter, href: SOCIAL_LINKS.twitter },
  {
    name: 'Instagram',
    icon: Instagram,
    href: SOCIAL_LINKS.instagram,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: SOCIAL_LINKS.linkedin,
  },
];

export function Footer() {
  const pathname = usePathname();
  const footerLinks = getFooterLinks(pathname);

  return (
    <footer className='px-4 pb-8 pt-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-secondary/10 bg-secondary text-white shadow-[0_24px_80px_rgba(20,61,71,0.22)]'>
        <div className='grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-10'>
          <div className='lg:col-span-1'>
            <Link href='/' className='mb-5 flex items-center space-x-2'>
              <Image
                src='/images/brand/Full-Logo-Green-&-White.svg'
                alt='RidePaddy Logo'
                width={150}
                height={50}
                className='h-10 w-auto'
              />
            </Link>
            <p className='mb-6 max-w-sm text-sm leading-7 text-secondary-foreground/80'>
              Nigeria&apos;s most trusted carpooling platform. Connect with
              verified drivers and passengers for safer, smarter, and more
              social commuting.
            </p>

            <div className='mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-primary'>
              Built for Lagos and beyond
            </div>

            <div className='space-y-3 text-sm text-secondary-foreground/80'>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-4 w-4' />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='h-4 w-4' />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='h-4 w-4' />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className='mb-4 font-heading text-lg font-semibold'>Explore</h3>
            <ul className='space-y-2'>
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-secondary-foreground/80 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 font-heading text-lg font-semibold'>Connect</h3>
            <ul className='space-y-2'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-secondary-foreground/80 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 font-heading text-lg font-semibold'>RidePaddy</h3>
            <ul className='mb-6 space-y-2'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-secondary-foreground/80 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='rounded-3xl border border-white/10 bg-white/5 p-5'>
              <h4 className='mb-2 font-heading text-lg font-semibold'>
                Start with the waitlist
              </h4>
              <p className='mb-4 text-sm leading-6 text-secondary-foreground/80'>
                Early access, launch updates, and first-ride perks in one place.
              </p>
              <Button className='w-full rounded-full' asChild>
                <Link href={pathname === '/' ? '#waitlist' : '/#waitlist'}>
                  Reserve your spot
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className='border-t border-white/10 px-6 py-6 lg:px-10'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-sm text-secondary-foreground/80'>
              © {new Date().getFullYear()} RidePaddy. All rights reserved.
            </p>

            <div className='flex space-x-4'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className='rounded-full border border-white/10 bg-white/5 p-2.5 text-secondary-foreground/80 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary'
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
