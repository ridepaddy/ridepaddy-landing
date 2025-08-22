interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data for About page
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RidePaddy",
  "description": "Nigeria's most trusted carpooling platform connecting verified drivers and passengers for safe, affordable rides.",
  "url": "https://ridepaddy.com",
  "logo": "https://ridepaddy.com/images/logo.png",
  "foundingDate": "2023",
  "founders": [
    {
      "@type": "Person",
      "name": "Adunni Okafor",
      "jobTitle": "Co-Founder & CEO"
    },
    {
      "@type": "Person", 
      "name": "Chike Emeka",
      "jobTitle": "Co-Founder & CTO"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Nigeria",
    "addressLocality": "Lagos"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@ridepaddy.com",
    "availableLanguage": ["English", "Hausa", "Yoruba", "Igbo"]
  },
  "sameAs": [
    "https://facebook.com/ridepaddy",
    "https://twitter.com/ridepaddy", 
    "https://instagram.com/ridepaddy",
    "https://linkedin.com/company/ridepaddy"
  ],
  "industry": "Transportation",
  "numberOfEmployees": "10-50",
  "serviceArea": {
    "@type": "Country",
    "name": "Nigeria"
  }
};