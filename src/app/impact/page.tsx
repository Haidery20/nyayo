'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

const CircularProgress = ({ value, maxValue, duration, suffix, label }: { 
  value: number;
  maxValue: number;
  duration: number;
  suffix?: string;
  label: string;
}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / maxValue) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="transform -rotate-90 w-40 h-40">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
          <circle
            className="text-[#B790CF] transition-all duration-1000 ease-out"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-4xl font-bold text-[#B790CF]">
            <CountUp end={value} duration={duration} suffix={suffix} />
          </div>
        </div>
      </div>
      <p className="text-gray-700 mt-4">{label}</p>
    </div>
  );
};

export default function Impact() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#B790CF] mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making a real difference in the lives of women and girls across Tanzania
            </p>
          </div>

          {/* Impact Stats */}
          <div className="bg-white-100 shadow-lg rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <CircularProgress 
                value={5000}
                maxValue={5000}
                duration={2.5}
                suffix="+"
                label="Women Empowered"
              />
              <CircularProgress 
                value={20}
                maxValue={20}
                duration={2}
                suffix="+"
                label="Communities Served"
              />
              <CircularProgress 
                value={10}
                maxValue={10}
                duration={1.5}
                suffix="+"
                label="Years of Service"
              />
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#B790CF] text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-100 shadow-lg rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                    <Image
                      src="/images/success/story1.jpg"
                      alt="Success Story 1"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#B790CF]">Maria's Journey</h3>
                    <p className="text-[#9A7AAD]">Small Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Through Nyayo's entrepreneurship program, Maria started her own successful tailoring business, now employing three other women from her community.
                </p>
              </div>

              <div className="bg-white-100 shadow-lg rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                    <Image
                      src="/images/success/story2.jpg"
                      alt="Success Story 2"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#B790CF]">Grace's Story</h3>
                    <p className="text-[#9A7AAD]">Education Graduate</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  With support from our education program, Grace completed her secondary education and is now pursuing her dream of becoming a teacher.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#B790CF] text-center mb-12">Areas of Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white-100 shadow-lg rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Education</h3>
                <p className="text-gray-700">
                  Providing access to quality education and vocational training for girls and young women.
                </p>
              </div>

              <div className="bg-white-100 shadow-lg rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Entrepreneurship</h3>
                <p className="text-gray-700">
                  Supporting women in starting and growing their own businesses through training and resources.
                </p>
              </div>

              <div className="bg-white-100 shadow-lg rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Advocacy</h3>
                <p className="text-gray-700">
                  Working to eliminate gender-based violence and promote women's rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}