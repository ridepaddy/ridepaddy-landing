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
        text: 'RidePaddy is a booking service for private, chauffeur-driven transport in Nigeria. You describe your trip and we arrange a vetted vehicle and driver at a fixed price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I book with RidePaddy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interstate trips, airport pickups and drop-offs, and hourly or full-day hire with a driver. You book the whole vehicle, not a seat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is RidePaddy launching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are starting in Lagos, with trips to nearby cities such as Ibadan and Abeokuta and transfers at Lagos airport. Other cities follow as operators join.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book before launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Join the launch list on our homepage. We will contact you when bookings open on your route.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does RidePaddy choose operators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Operators are checked for business registration, vehicle papers, insurance and driver licences, and each vehicle is inspected before its first booking.',
      },
    },
  ],
};

export function FAQStructuredData() {
  return <StructuredData data={faqStructuredData} />;
}
