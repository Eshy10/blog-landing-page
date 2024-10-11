import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Landing Page Layout',
  description: 'Product layout description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="text-center mt-0 mx-auto max-w-[1280px]">{children}</div>
  );
}
