import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Auth Layout',
  description: 'Sign Up ~ Login',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default async function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="text-center mt-0 mx-auto max-w-[1280px]">
        <div>
          <Link className="primary-btn" href="/sign-in">
            Sign In
          </Link>
        </div>
    </div>
  );
}
