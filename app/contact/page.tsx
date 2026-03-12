import type { Metadata } from 'next';
import { Mail, MapPin, MessageSquareText, Phone } from 'lucide-react';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from './contact-form';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact RidePaddy',
  description:
    'Get in touch with RidePaddy for partnerships, launch questions, support, or product enquiries.',
  alternates: {
    canonical: '/contact',
  },
};

const contactWays = [
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    title: 'Phone',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`,
  },
  {
    icon: MessageSquareText,
    title: 'WhatsApp',
    value: 'Chat with RidePaddy',
    href: 'https://wa.me/2348065235615',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: CONTACT_INFO.address,
    href: null,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className='pt-20'>
        <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
          <Breadcrumb items={[{ label: 'Contact', current: true }]} />
        </div>

        <section className='px-4 pb-20 pt-6 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
              <div className='section-shell p-8 sm:p-10'>
                <p className='mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary'>
                  Contact
                </p>
                <h1 className='section-title'>Talk to RidePaddy</h1>
                <p className='section-copy mt-5'>
                  Reach out for partnerships, early-access questions, press,
                  product feedback, or anything else related to RidePaddy.
                </p>

                <div className='mt-8 grid gap-4'>
                  {contactWays.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <Card className='rounded-[1.4rem] border-white/70 bg-white/85 shadow-[0_16px_40px_rgba(20,61,71,0.05)]'>
                        <CardContent className='flex items-center gap-4 p-5'>
                          <div className='rounded-2xl bg-primary/15 p-3 text-primary'>
                            <Icon className='h-5 w-5' />
                          </div>
                          <div>
                            <div className='text-sm font-medium text-muted-foreground'>
                              {item.title}
                            </div>
                            <div className='text-base font-semibold text-secondary'>
                              {item.value}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );

                    return item.href ? (
                      <a key={item.title} href={item.href}>
                        {content}
                      </a>
                    ) : (
                      <div key={item.title}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div className='section-shell p-8 sm:p-10'>
                <div className='mb-8'>
                  <h2 className='text-2xl font-heading font-semibold text-secondary'>
                    Send a message
                  </h2>
                  <p className='mt-2 text-sm leading-7 text-muted-foreground sm:text-base'>
                    Use the form below and RidePaddy will get back to you as
                    soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
