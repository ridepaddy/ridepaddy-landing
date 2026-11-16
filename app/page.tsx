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
const HowItWorks = dynamic(
  () => import('@/components/sections/how-it-works').then((mod) => ({ default: mod.HowItWorks })),
  {
    loading: () => (
      <div className="min-h-screen bg-gradient-to-br from-primary-20 via-white to-secondary-20 animate-pulse" />
    ),
  }
);

const Waitlist = dynamic(() =>
  import('@/components/sections/waitlist').then((mod) => ({ default: mod.Waitlist }))
);

export const metadata: Metadata = {
  title: 'RidePaddy - Private Car and Driver Hire in Nigeria',
  description:
    'Book a vetted car and driver for interstate trips, airport transfers and day hire. RidePaddy is launching first in Lagos. Join the launch list.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <FAQStructuredData />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Team />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
