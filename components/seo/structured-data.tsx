import { CONTACT_INFO, SOCIAL_LINKS, TEAM_MEMBERS } from '@/lib/constants';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// Organization structured data for About page
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RidePaddy',
  description:
    'A booking service for private, chauffeur-driven vehicle hire in Nigeria, launching first in Lagos.',
  url: 'https://ridepaddy.com',
  logo: 'https://ridepaddy.com/images/brand/Green-Logo-Icon.svg',
  foundingDate: '2023',
  founders: TEAM_MEMBERS.slice(0, 2).map((member) => ({
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
  })),
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Nigeria',
    addressLocality: 'Lagos',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: CONTACT_INFO.email,
    availableLanguage: ['English', 'Hausa', 'Yoruba', 'Igbo'],
  },
  sameAs: [
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.twitter,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.linkedin,
  ],
  industry: 'Transportation',
  serviceArea: {
    '@type': 'Country',
    name: 'Nigeria',
  },
};
