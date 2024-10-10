import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export default function UnauthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
