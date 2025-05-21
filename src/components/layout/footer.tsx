'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconMail } from '@tabler/icons-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2F4160] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/nyayo.svg"
              alt="Nyayo Logo"
              width={120}
              height={40}
            />
          </Link>
            <p className="text-gray-300 mb-4">
              Empowering women and girls in Tanzania through education, entrepreneurship training, and advocacy against gender-based violence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>Near mwananyamala Hospital, Dar es Salaam</p>
              <p>Tanzania</p>
              <p>Email: info@nyayo.or.tz</p>
              <p>Phone: +255 755 106 397</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-[#2F4160] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B790CF]"
              />
              <button
                type="submit"
                className="w-full bg-[#B790CF] hover:bg-[#2F4160] text-white px-6 py-2 rounded-full transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#9A7AAD]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300">
              © {new Date().getFullYear()}  powered by EvMak Tanzania. Nyayo, All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                <IconBrandFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                <IconBrandTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                <IconBrandInstagram size={24} />
              </a>
              <a href="mailto:info@nyayo.or.tz" className="text-gray-300 hover:text-[#B790CF] transition-colors">
                <IconMail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};