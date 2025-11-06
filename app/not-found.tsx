'use client';
import Link from 'next/link';
import { ArrowLeft, Home, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-muted via-background to-muted flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl w-full text-center'>
        {/* 404 Illustration */}
        <div className='mb-8'>
          <div className='relative inline-block'>
            {/* Large 404 Text */}
            <h1 className='text-[150px] sm:text-[200px] md:text-[250px] font-heading font-bold leading-none'>
              <span className='gradient-text'>404</span>
            </h1>

            {/* Floating Icons */}
            <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
              <MapPin className='absolute top-1/4 left-0 h-12 w-12 text-primary opacity-20 animate-pulse' />
              <Search
                className='absolute top-1/3 right-0 h-10 w-10 text-secondary opacity-20 animate-pulse'
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className='mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary mb-4'>
            Oops! Page Not Found
          </h2>
          <p className='text-lg font-body text-muted-foreground max-w-lg mx-auto leading-relaxed'>
            Looks like you&apos;ve taken a wrong turn. The page you&apos;re
            looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
          <Link href='/'>
            <Button size='lg' className='font-body gap-2 w-full sm:w-auto'>
              <Home className='h-5 w-5' />
              Back to Home
            </Button>
          </Link>
          <Link href='/#features'>
            <Button
              size='lg'
              variant='outline'
              className='font-body gap-2 w-full sm:w-auto'>
              <Search className='h-5 w-5' />
              Explore Features
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className='bg-card rounded-2xl p-8 shadow-sm'>
          <h3 className='text-lg font-heading font-semibold text-secondary mb-4'>
            Looking for something specific?
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            <Link
              href='/#features'
              className='text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200'>
              Features
            </Link>
            <Link
              href='/#how-it-works'
              className='text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200'>
              How It Works
            </Link>
            <Link
              href='/#safety'
              className='text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200'>
              Safety
            </Link>
            <Link
              href='/#download'
              className='text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200'>
              Download App
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className='mt-8'>
          <button
            onClick={() => window.history.back()}
            className='inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200'>
            <ArrowLeft className='h-4 w-4' />
            Go back to previous page
          </button>
        </div>
      </div>
    </div>
  );
}
