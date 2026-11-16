export const APP_CONFIG = {
  name: 'RidePaddy',
  description: 'Private car and driver hire in Nigeria, booked at a fixed price',
  url: 'https://ridepaddy.com',
  author: 'RidePaddy Team',
  keywords: [
    'car hire with driver',
    'vehicle charter',
    'chauffeur service',
    'airport transfer',
    'interstate travel',
    'Nigeria',
    'Lagos',
  ],
};

export const CONTACT_INFO = {
  email: 'hello@ridepaddy.com',
  phone: '+234 8065235615',
  address: 'Lagos, Nigeria',
  supportEmail: 'hello@ridepaddy.com',
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/ridepaddy',
  twitter: 'https://twitter.com/ridepaddy',
  instagram: 'https://instagram.com/ridepaddy',
  linkedin: 'https://linkedin.com/company/ridepaddy',
};

export const TEAM_MEMBERS = [
  {
    name: 'Maurice Ogbebor',
    role: 'Founder',
    image: '/images/mauricePhoto.jpg',
  },
  {
    name: 'Abdulrasheed Tijani',
    role: 'Co-Founder',
    image: '/images/rasheedPhoto.jpeg',
  },
] as const;

export const CITIES = [
  'Lagos',
  'Abuja',
  'Port Harcourt',
  'Kano',
  'Ibadan',
  'Kaduna',
  'Enugu',
  'Benin City',
  'Jos',
  'Ilorin',
] as const;


// Animation variants for consistent motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] },
    },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  },
};
