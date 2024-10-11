import { Metadata } from 'next';
import LandingPage from './home/page';

export const metadata: Metadata = {
  title: 'Index page',
  description: 'Description of the index page',
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
