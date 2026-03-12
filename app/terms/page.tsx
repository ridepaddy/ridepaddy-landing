import type { Metadata } from 'next';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Terms of Service | RidePaddy',
  description:
    'Read the RidePaddy terms that govern access to our website, waitlist, and future ride-sharing platform.',
  alternates: {
    canonical: '/terms',
  },
};

const termsSections = [
  {
    title: 'Acceptance of terms',
    body:
      'By accessing RidePaddy, joining the waitlist, or using any of our services, you agree to these terms and to any additional policies referenced here.',
  },
  {
    title: 'Use of the website and waitlist',
    body:
      'You may use the website only for lawful purposes. You agree not to submit false information, interfere with the site, attempt unauthorized access, or use the waitlist for spam, impersonation, or fraudulent activity.',
  },
  {
    title: 'Future product access',
    body:
      'Joining the waitlist does not guarantee launch timing, product availability, pricing, or access to any specific route or city. RidePaddy may change, pause, or discontinue features before or after launch.',
  },
  {
    title: 'Accounts and eligibility',
    body:
      'When RidePaddy launches, some features may require an account, identity checks, driver verification, vehicle documentation, or other eligibility requirements. You are responsible for keeping your information accurate and up to date.',
  },
  {
    title: 'Safety and transport disclaimers',
    body:
      'RidePaddy is intended to improve coordination and trust, but no platform can eliminate all transport or personal safety risk. Users remain responsible for their own conduct, legal compliance, and decisions made during travel.',
  },
  {
    title: 'Intellectual property',
    body:
      'All RidePaddy branding, website content, copy, visuals, and software-related materials remain the property of RidePaddy or its licensors unless otherwise stated.',
  },
  {
    title: 'Limitation of liability',
    body:
      'To the fullest extent permitted by law, RidePaddy is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the site, the waitlist, or future platform services.',
  },
  {
    title: 'Changes to these terms',
    body:
      'We may update these terms from time to time. Continued use of the site after updates means you accept the revised version.',
  },
  {
    title: 'Contact',
    body:
      'For questions about these terms, contact RidePaddy at hello@ridepaddy.com.',
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className='pt-20'>
        <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
          <Breadcrumb
            items={[{ label: 'Terms of Service', current: true }]}
          />
        </div>

        <section className='px-4 pb-20 pt-6 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl'>
            <div className='section-shell p-8 sm:p-10 lg:p-14'>
              <p className='mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary'>
                Legal
              </p>
              <h1 className='section-title'>Terms of Service</h1>
              <p className='section-copy mt-5'>
                Effective date: March 11, 2026. These terms apply to the
                RidePaddy website, waitlist, and any related digital services we
                make available.
              </p>

              <div className='mt-10 space-y-8'>
                {termsSections.map((section) => (
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
