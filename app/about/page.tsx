import { Metadata } from 'next';
import { About } from '@/components/sections/about';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { StructuredData, organizationStructuredData } from '@/components/seo/structured-data';

export const metadata: Metadata = {
  title: 'About RidePaddy - Our Story & Mission | Carpooling Nigeria',
  description:
    'Learn about RidePaddy\'s mission to transform transportation in Nigeria. Meet our team, discover our values, and see how we\'re building the future of shared mobility across Africa.',
  keywords: [
    'RidePaddy about',
    'carpooling Nigeria',
    'transportation startup',
    'Nigerian mobility',
    'ride sharing company',
    'about us',
    'team',
    'mission',
    'vision',
  ],
  openGraph: {
    title: 'About RidePaddy - Our Story & Mission',
    description:
      'Discover how RidePaddy is transforming transportation in Nigeria through community-driven carpooling solutions.',
    type: 'website',
    url: '/about',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'RidePaddy Team - Building the Future of Transportation in Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RidePaddy - Our Story & Mission',
    description:
      'Meet the team behind Nigeria\'s most trusted carpooling platform and learn about our mission to transform transportation.',
    images: ['/images/twitter-about.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={organizationStructuredData} />
      <Header />
      <main className='pt-16'>
        {/* Breadcrumb */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-100'>
          <Breadcrumb 
            items={[
              { label: 'About', current: true }
            ]} 
          />
        </div>
        
        <About />
      </main>
      <Footer />
    </>
  );
}