import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { FAQ } from '@/components/sections/faq';
import { Team } from '@/components/sections/team';
import { FAQStructuredData } from '@/components/seo/faq-structured-data';

// Lazy load below-the-fold sections for better performance
const HowItWorks = dynamic(() => import('@/components/sections/how-it-works').then(mod => ({ default: mod.HowItWorks })), {
  loading: () => <div className="min-h-screen bg-gradient-to-br from-primary-20 via-white to-secondary-20 animate-pulse" />
});

const Safety = dynamic(() => import('@/components/sections/safety').then(mod => ({ default: mod.Safety })));

const Testimonials = dynamic(() => import('@/components/sections/testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-screen bg-white animate-pulse" />
});

const DownloadApp = dynamic(() => import('@/components/sections/download-app').then(mod => ({ default: mod.DownloadApp })));

const Waitlist = dynamic(() => import('@/components/sections/waitlist').then(mod => ({ default: mod.Waitlist })));

export const metadata: Metadata = {
  title: 'RidePaddy - Find Your Ride Buddy | Carpooling in Nigeria',
  description:
    "Join Nigeria's most trusted carpooling platform. Connect with verified drivers and passengers for safe, affordable rides across Lagos, Abuja, and more.",
};

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      <FAQStructuredData />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Team />
        <Safety />
        <Testimonials />
        <FAQ />
        <DownloadApp />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
