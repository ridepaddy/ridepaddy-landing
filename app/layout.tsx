import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import WhatsAppChat from "@/components/WhatsAppWidget";
// import { Analytics } from '@/lib/analytics';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "RidePaddy - Find Your Ride Buddy",
    template: "%s | RidePaddy",
  },
  description:
    "Connect with trusted drivers and passengers for safe, affordable carpooling across Nigeria. Join the RidePaddy community and turn your commute into a shared journey.",
  keywords: [
    "carpooling",
    "ride sharing",
    "Nigeria",
    "Lagos",
    "Abuja",
    "transportation",
    "commute",
  ],
  authors: [{ name: "RidePaddy Team" }],
  creator: "RidePaddy",
  publisher: "RidePaddy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ridepaddy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RidePaddy - Find Your Ride Buddy",
    description:
      "Connect with trusted drivers and passengers for safe, affordable carpooling across Nigeria.",
    url: "https://ridepaddy.com",
    siteName: "RidePaddy",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RidePaddy - Carpooling App",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RidePaddy - Find Your Ride Buddy",
    description:
      "Connect with trusted drivers and passengers for safe, affordable carpooling across Nigeria.",
    images: ["/images/og-image.jpg"],
    creator: "@ridepaddy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <WhatsAppChat />
        <Toaster
          position="top-right"
          richColors
          expand={true}
          duration={4000}
          toastOptions={{
            style: {
              background: "white",
              border: "1px solid #e5e7eb",
              fontSize: "14px",
            },
            className: "sonner-toast",
          }}
        />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
