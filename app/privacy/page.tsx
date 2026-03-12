import type { Metadata } from 'next';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy | RidePaddy',
  description:
    'Learn how RidePaddy collects, uses, stores, and protects information submitted through our website and waitlist.',
  alternates: {
    canonical: '/privacy',
  },
};

const privacySections = [
  {
    title: 'What we collect',
    body:
      'When you use the RidePaddy website or join the waitlist, we may collect information such as your name, email address, phone number, city, intended use of the product, device/browser information, and basic analytics data.',
  },
  {
    title: 'How we use information',
    body:
      'We use submitted information to manage the waitlist, communicate launch updates, improve the website, understand demand by city, prevent abuse, and support future product onboarding.',
  },
  {
    title: 'Sharing of information',
    body:
      'We do not sell your personal information. We may share information with service providers who help operate the website, communications tools, analytics, hosting, or lawful compliance processes.',
  },
  {
    title: 'Data retention',
    body:
      'We keep information only for as long as it is reasonably needed for waitlist management, business operations, legal obligations, dispute handling, or future onboarding workflows.',
  },
  {
    title: 'Cookies and analytics',
    body:
      'RidePaddy may use cookies, analytics, or similar technologies to understand traffic, performance, and product interest. These tools help us improve the website experience.',
  },
  {
    title: 'Your choices',
    body:
      'You may contact us to request updates or deletion of the information you submitted through the waitlist, subject to any legal or operational retention requirements.',
  },
  {
    title: 'Security',
    body:
      'We use reasonable administrative and technical measures to protect information, but no website or transmission method can be guaranteed to be completely secure.',
  },
  {
    title: 'Policy updates',
    body:
      'We may update this privacy policy periodically. The effective date at the top of the page reflects the latest version.',
  },
  {
    title: 'Contact',
    body:
      'For privacy-related questions or requests, contact RidePaddy at hello@ridepaddy.com.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className='pt-20'>
        <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
          <Breadcrumb items={[{ label: 'Privacy Policy', current: true }]} />
        </div>

        <section className='px-4 pb-20 pt-6 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl'>
            <div className='section-shell p-8 sm:p-10 lg:p-14'>
              <p className='mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary'>
                Legal
              </p>
              <h1 className='section-title'>Privacy Policy</h1>
              <p className='section-copy mt-5'>
                Effective date: March 11, 2026. This policy describes how
                RidePaddy handles information collected through the website and
                waitlist.
              </p>

              <div className='mt-10 space-y-8'>
                {privacySections.map((section) => (
                  <section key={section.title}>
                    <h2 className='text-xl font-heading font-semibold text-secondary'>
                      {section.title}
                    </h2>
                    <p className='mt-3 text-sm leading-7 text-muted-foreground sm:text-base'>
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
