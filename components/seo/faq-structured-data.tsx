import { StructuredData } from './structured-data';

export const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is RidePaddy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RidePaddy is a carpooling platform that connects drivers and passengers in Nigeria for safe, affordable, and eco-friendly transportation. We help you find reliable ride buddies for your daily commute or occasional trips.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I join the waitlist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Simply fill out the waitlist form on our homepage with your email address. You'll be among the first to know when RidePaddy launches in your city.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is RidePaddy safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We prioritize safety with verified user profiles, real-time GPS tracking, in-app emergency SOS, secure payment systems, and a rating system for all users.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cities does RidePaddy operate in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are launching soon in Lagos and Abuja, with plans to expand to other major cities across Nigeria including Port Harcourt, Ibadan, Kano, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to use RidePaddy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RidePaddy charges a small service fee per trip. Passengers and drivers share the cost of transportation, making it more affordable than traditional ride-hailing services.',
      },
    },
  ],
};

export function FAQStructuredData() {
  return <StructuredData data={faqStructuredData} />;
}
