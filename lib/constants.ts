export const APP_CONFIG = {
  name: 'RidePaddy',
  description: "Find Your Ride Buddy - Nigeria's Trusted Carpooling Platform",
  url: 'https://ridepaddy.com',
  author: 'RidePaddy Team',
  keywords: [
    'carpooling',
    'ride sharing',
    'Nigeria',
    'Lagos',
    'Abuja',
    'transportation',
    'commute',
    'paddy',
    'buddy',
  ],
};

export const CONTACT_INFO = {
  email: 'hello@ridepaddy.com',
  phone: '+234 8065235615',
  address: 'Lagos, Nigeria',
  supportEmail: 'support@ridepaddy.com',
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/ridepaddy',
  twitter: 'https://twitter.com/ridepaddy',
  instagram: 'https://instagram.com/ridepaddy',
  linkedin: 'https://linkedin.com/company/ridepaddy',
};

export const APP_STORE_LINKS = {
  ios: 'https://apps.apple.com/app/ridepaddy',
  android: 'https://play.google.com/store/apps/details?id=com.ridepaddy',
};

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

export const USER_TYPES = [
  { value: 'driver', label: 'Driver - I want to offer rides' },
  { value: 'passenger', label: 'Passenger - I need rides' },
  { value: 'both', label: 'Both - I drive and need rides' },
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
