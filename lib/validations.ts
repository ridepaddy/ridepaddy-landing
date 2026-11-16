import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  // International format, or a Nigerian local number such as 08012345678.
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^(\+?[1-9]\d{7,14}|0\d{10})$/, 'Please enter a valid phone number'),
  role: z.enum(['customer', 'operator'], {
    message: 'Please tell us how you will use RidePaddy',
  }),
  service: z.enum(['intercity', 'day_hire', 'airport_transfer', 'not_sure'], {
    message: 'Please choose a service',
  }),
  fromLocation: z.string().max(120, 'Please keep this under 120 characters').optional(),
  toLocation: z.string().max(120, 'Please keep this under 120 characters').optional(),
  // Honeypot field. Real visitors never see or fill it.
  website: z.string().max(200).optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
