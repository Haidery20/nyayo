'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
}

export const AnimatedText = ({
  text,
  className = '',
  once = true,
  repeatDelay = 3000,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const animate = async () => {
      if (isInView) {
        await controls.start('visible');
        if (!once) {
          timeout = setTimeout(async () => {
            await controls.start('hidden');
            animate();
          }, repeatDelay);
        }
      }
    };

    animate();

    return () => clearTimeout(timeout);
  }, [isInView, controls, once, repeatDelay]);

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={textRef}
      className={`w-fit ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};