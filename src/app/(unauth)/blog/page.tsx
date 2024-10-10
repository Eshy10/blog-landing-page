import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog page',
  description: 'Blog page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default async function BlogPage() {

  return (
    <div>
      <div className="flex gap-3 justify-center">
        <Link href="/profile" className="primary-btn">
          Home
        </Link>
      </div>
    </div>
  );
}
