import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export default function UnauthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="px-4 sm:px-6 lg:w-4/5 w-full mx-auto">
      <Navbar />
      <div className="flex flex-col justify-between items-center w-full min-h-[calc(100vh_-_574px)] gap-10 sm:gap-16 lg:gap-20 overflow-hidden">
        {children}
      </div>
      <Footer />
    </section>

  );
}
