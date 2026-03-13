import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import WhatsAppChat from '@/components/WhatsAppWidget';
import { NetworkStatus } from '@/components/network-status';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Primary Font -- Creato Display
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

// Secondary Font - Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'RidePaddy - Find Your Ride Buddy',
    template: '%s | RidePaddy',
  },
  description:
    'Connect with trusted drivers and passengers for safe, affordable carpooling across Nigeria. Join the RidePaddy community and turn your commute into a shared journey.',
  keywords: [
    'carpooling',
    'ride sharing',
    'Nigeria',
    'Lagos',
    'Abuja',
    'transportation',
    'commute',
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
    title: 'RidePaddy - Find Your Ride Buddy',
    description:
      'Connect with trusted drivers and passengers for safe, affordable carpooling across Nigeria.',
    url: 'https://ridepaddy.com',
    siteName: 'RidePaddy',
    images: [
      {
        url: '/images/Ride-Paddy-Brand.jpg',
        width: 1200,
        height: 630,
        alt: 'RidePaddy - Carpooling App',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RidePaddy - Find Your Ride Buddy',
    description:
      'Connect with trusted drivers and passengers for safe, affordable carpooling across Nigeria.',
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
    <html lang="en" className={`${creatoDisplay.variable} ${montserrat.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        <NetworkStatus />
        {children}
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
