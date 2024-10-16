"use client"
import { useState } from 'react';
import Button from './ui/Button';
import { MENU_HEADER } from '@/libs/data';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white">
      <Link href="/">
        <div className="relative w-24 h-12">
          <Image src={'/assets/images/boldo-logo-full.svg'} alt="logo" fill />
        </div>

      </Link>
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between items-center space-x-6">
        {MENU_HEADER.map((menu, index) => (
          <Link key={index} href={menu.link} className="font-semibold text-[#0A2640] text-lg">
            {menu.name}
          </Link>
        ))}
        <Button className="py-2 px-12 rounded-full" variant="primary" outline="black">
          Log In
        </Button>
      </div>
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <HiX className='text-[#394e63]' /> : <HiMenu className='text-[#394e63]' />}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <Link href="/">
            <div className="relative w-24 h-12">
              <Image src={'/assets/images/boldo-logo-full.svg'} alt="logo" fill />
            </div>
          </Link>
          <button title='icon' onClick={toggleMenu} className="text-2xl">
            <HiX className='text-[#394e63]' />
          </button>
        </div>
        <div className="flex flex-col items-start space-y-6 px-4 py-4">
          {MENU_HEADER.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className="font-semibold text-[#0A2640] text-xl"
              onClick={toggleMenu} // Close menu when clicking an item
            >
              {menu.name}
            </Link>
          ))}
          <Button className="py-2 px-12 rounded-full" variant="primary" outline="black">
            Log In
          </Button>
        </div>
      </div>
    </nav>
  );
}
