'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';

const faqs = [
  {
    question: 'What is RidePaddy?',
    answer:
      'RidePaddy is a booking service for private, chauffeur-driven transport in Nigeria. You describe your trip and we arrange a vetted vehicle and driver at a fixed price.',
  },
  {
    question: 'What can I book?',
    answer:
      'Interstate trips, airport pickups and drop-offs, and hourly or full-day hire with a driver. You book the whole vehicle, not a seat.',
  },
  {
    question: 'Where are you launching?',
    answer:
      'We are starting in Lagos, with trips to nearby cities such as Ibadan and Abeokuta and transfers at Lagos airport. Other cities follow as operators join.',
  },
  {
    question: 'How do I book before launch?',
    answer:
      'Join the launch list on this page. We will contact you when bookings open on your route.',
  },
  {
    question: 'How do you choose operators?',
    answer:
      'Operators are checked for business registration, vehicle papers, insurance and driver licences, and each vehicle is inspected before its first booking.',
  },
  {
    question: 'I run a car-hire or transport business. Can I join?',
    answer:
      'Yes. Message us on WhatsApp or use the contact page and we will take you through the vetting steps.',
  },
] as const;

export function FAQ() {
  return (
    <section id='faq' className='px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='section-shell p-8 sm:p-10 lg:p-14'>
          <FadeIn>
            <div className='mx-auto mb-12 max-w-2xl text-center'>
              <Badge variant='secondary' className='mb-5 rounded-full px-4 py-2'>
                Frequently asked questions
              </Badge>
              <h2 className='section-title'>Quick answers before launch</h2>
              <p className='section-copy mt-5'>
                What people usually ask before joining the launch list.
              </p>
            </div>
          </FadeIn>

          <div className='grid gap-5 md:grid-cols-2'>
            {faqs.map((faq) => (
              <Card
                key={faq.question}
                className='rounded-[1.6rem] border-white/70 bg-white/85 shadow-[0_18px_50px_rgba(20,61,71,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(20,61,71,0.12)]'>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-heading font-semibold text-secondary'>
                    {faq.question}
                  </h3>
                  <p className='mt-3 text-sm leading-7 text-muted-foreground sm:text-base'>
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
