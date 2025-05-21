'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#B790CF] mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us to learn more about our programs or how you can support our mission
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-100 shadow-lg rounded-2xl p-8 text-center">
              <div className="h-16 w-16 bg-[#B790CF] rounded-full flex items-center justify-center mx-auto mb-6">
                <IconMapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Visit Us</h3>
              <p className="text-gray-700">
                Near mwananyamala Hospital<br />
                Dar es Salaam<br />
                Tanzania
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-2xl p-8 text-center">
              <div className="h-16 w-16 bg-[#B790CF] rounded-full flex items-center justify-center mx-auto mb-6">
                <IconPhone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Call Us</h3>
              <p className="text-gray-700">
                +255 755 106 397<br />
                Monday - Friday<br />
                9:00 AM - 5:00 PM
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-2xl p-8 text-center">
              <div className="h-16 w-16 bg-[#B790CF] rounded-full flex items-center justify-center mx-auto mb-6">
                <IconMail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Email Us</h3>
              <p className="text-gray-700">
                info@nyayo.or.tz<br />
                For general inquiries<br />
                We'll respond within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 shadow-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-[#B790CF] text-center mb-8">Send Us a Message</h2>
            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B790CF]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B790CF]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B790CF]"
                  placeholder="Message subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B790CF]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#B790CF] hover:bg-[#2F4160] text-white px-8 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}