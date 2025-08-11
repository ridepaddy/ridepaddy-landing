import { Metadata } from 'next';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Stats } from '@/components/sections/stats';
import { Safety } from '@/components/sections/safety';
import { Testimonials } from '@/components/sections/testimonials';
import { Waitlist } from '@/components/sections/waitlist';
import { DownloadApp } from '@/components/sections/download-app';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { Hero } from '@/components/sections/hero';

export const metadata: Metadata = {
  title: 'RidePaddy - Find Your Ride Buddy | Carpooling in Nigeria',
  description:
    "Join Nigeria's most trusted carpooling platform. Connect with verified drivers and passengers for safe, affordable rides across Lagos, Abuja, and more.",
};

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <Safety />
        <Testimonials />
        <DownloadApp />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
