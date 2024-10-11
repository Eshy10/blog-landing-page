import { Metadata } from 'next';
import { Hero, CustomerStats, Faq, GetStarted, Services, Testimonials, Blog } from './components';

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing Page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <CustomerStats />
      <Testimonials />
      <Faq />
      <Blog />
      <GetStarted />
    </>
  );
}
