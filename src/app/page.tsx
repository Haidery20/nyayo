'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getContent } from '@/lib/cms/strapi';

export default function Home() {
  const [content, setContent] = useState({
    heroSection: {
      title: "Empowering Women & Girls in Tanzania",
      description: "Join us in creating a just and safer world through education, entrepreneurship, and advocacy",
      ctaText: "Support Our Cause",
      ctaLink: "#support",
      backgroundVideo: {
        url: "/videos/African-women.mp4",
        type: "video/mp4"
      }
    }
  });

  useEffect(() => {
    async function fetchContent() {
      try {
        const cmsContent = await getContent('home-page');
        if (cmsContent) {
          setContent(cmsContent);
        }
      } catch (error) {
        console.error('Error fetching CMS content:', error);
        // Keep using fallback content on error
      }
    }
    fetchContent();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-800 min-h-screen"
      >
        <Header />
        <Hero content={content.heroSection} />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

