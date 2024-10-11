import { Metadata } from 'next';
import LandingPage from './home/page';

export const metadata: Metadata = {
  title: 'Landing page',
  description: 'Landing Page for boldo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default async function IndexPage() {

  return (
    <>
      <LandingPage />
    </>
  );
}
