import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'sonner';
import WhatsAppChat from '@/components/WhatsAppWidget';
import { NetworkStatus } from '@/components/network-status';
import { MotionProvider } from '@/components/animations/motion-provider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Primary Font --- Creato Display
const creatoDisplay = localFont({
  src: [
    {
      path: '../public/fonts/CreatoDisplay-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-creato-display',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    default: 'RidePaddy - Private Car and Driver Hire in Nigeria',
    template: '%s | RidePaddy',
  },
  description:
    'Book a vetted car and driver for interstate trips, airport transfers and day hire. RidePaddy is launching first in Lagos. Join the launch list.',
  keywords: [
    'car hire with driver',
    'vehicle charter',
    'chauffeur service',
    'airport transfer',
    'interstate travel',
    'Nigeria',
    'Lagos',
  ],
  authors: [{ name: 'RidePaddy Team' }],
  creator: 'RidePaddy',
  publisher: 'RidePaddy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ridepaddy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RidePaddy - Private Car and Driver Hire in Nigeria',
    description:
      'Book a vetted car and driver for interstate trips, airport transfers and day hire. Launching first in Lagos.',
    url: 'https://ridepaddy.com',
    siteName: 'RidePaddy',
    images: [
      {
        url: '/images/Ride-Paddy-Brand.jpg',
        width: 1200,
        height: 630,
        alt: 'RidePaddy - Private car and driver hire',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RidePaddy - Private Car and Driver Hire in Nigeria',
    description:
      'Book a vetted car and driver for interstate trips, airport transfers and day hire. Launching first in Lagos.',
    images: ['/images/Ride-Paddy-Brand.jpg'],
    creator: '@ridepaddy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  icons: {
    icon: [
      {
        url: '/images/brand/Green-Logo-Icon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/images/brand/Green-Logo-Icon.svg',
    apple: '/images/brand/Green-Logo-Icon.svg',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#01CD81' },
    { media: '(prefers-color-scheme: dark)', color: '#143D47' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={creatoDisplay.variable}>
      <body className={`${creatoDisplay.className} antialiased`}>
        <NetworkStatus />
        <MotionProvider>{children}</MotionProvider>
        <WhatsAppChat />
        <Toaster
          position="top-right"
          richColors
          expand={true}
          duration={4000}
          toastOptions={{
            style: {
              background: 'white',
              border: '1px solid #e5e7eb',
              fontSize: '14px',
            },
            className: 'sonner-toast',
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
