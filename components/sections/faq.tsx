'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';

const faqs = [
  {
    question: 'What is RidePaddy?',
    answer:
      'RidePaddy is a community-driven carpooling platform designed to help drivers and passengers coordinate safer, more affordable trips across Nigerian cities.',
  },
  {
    question: 'How do I join before launch?',
    answer:
      'Join the waitlist on the homepage. We will use that to notify you when RidePaddy opens in your city and when early access is available.',
  },
  {
    question: 'Will RidePaddy launch in my city?',
    answer:
      'Launch happens city by city. Current demand is strongest in Lagos, Abuja, Port Harcourt, and Ibadan, with more cities added as rollout expands.',
  },
  {
    question: 'How does RidePaddy think about safety?',
    answer:
      'The product is being built around identity checks, route visibility, emergency support, and clearer rider trust signals from the start.',
  },
] as const;

export function FAQ() {
  return (
    <section id='faq' className='px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='section-shell p-8 sm:p-10 lg:p-14'>
          <FadeIn>
            <div className='mx-auto mb-12 max-w-2xl text-center'>
              <Badge variant='secondary' className='mb-5 rounded-full px-4 py-2'>
                Frequently asked questions
              </Badge>
              <h2 className='section-title'>Quick answers before launch</h2>
              <p className='section-copy mt-5'>
                The essentials visitors usually want to know before they join
                the waitlist or explore the app preview.
              </p>
            </div>
          </FadeIn>

          <div className='grid gap-5 md:grid-cols-2'>
            {faqs.map((faq) => (
              <Card
                key={faq.question}
                className='rounded-[1.6rem] border-white/70 bg-white/85 shadow-[0_18px_50px_rgba(20,61,71,0.05)]'>
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
