'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconMenu2, IconX } from '@tabler/icons-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 20);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Prevent hydration mismatch by not rendering scroll-dependent content until mounted
  // Updated header classes to maintain transparent background
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isMounted && isScrolled 
      ? 'bg-black/20 backdrop-blur-sm shadow-[0_8px_32px_rgba(183,144,207,0.3)] translate-y-1' 
      : 'bg-black/20 backdrop-blur-sm'
  } rounded-b-2xl`;

  return (
    <header className={headerClasses}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/nyayo.svg"
              alt="Nyayo Logo"
              width={80}  // Reduced from 120
              height={30} // Reduced from 40
              className="transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'program', 'impact', 'contact'].map((path) => (
              <Link 
                key={path}
                href={`/${path}`} 
                className="text-white hover:text-[#2F4160] transition-colors"
              >
                {path === 'Home' ? 'Home' :
                path === 'about' ? 'About Us' :
                path === 'programs' ? 'Our Programs' : 
                 path === 'impact' ? 'Our Impact' : 'Contact'}
              </Link>
            ))}
            <Link 
              href="/donate" 
              className="bg-[#B790CF] hover:bg-[#2F4160] text-white px-6 py-2 rounded-full transition-colors"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-b-2xl">
            <nav className="flex flex-col space-y-4 py-4">
              <Link href="/programs" className="text-gray-700 hover:text-[#B790CF] px-4">
                Our Programs
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#B790CF] px-4">
                About Us
              </Link>
              <Link href="/impact" className="text-gray-700 hover:text-[#B790CF] px-4">
                Our Impact
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#B790CF] px-4">
                Contact
              </Link>
              <Link 
                href="/donate" 
                className="bg-[#B790CF] hover:bg-[#9A7AAD] text-white mx-4 px-6 py-2 rounded-full text-center"
              >
                Donate Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}