import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { IconHeart, IconSchool, IconUsers } from '@tabler/icons-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#B790CF] mb-6">
              About Nyayo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering women and girls in Tanzania through education, entrepreneurship, and advocacy
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#B790CF] mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To empower women and girls in Tanzania through comprehensive education, entrepreneurship training, and advocacy programs that promote gender equality and economic independence.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#B790CF] mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  A Tanzania where every woman and girl has equal opportunities to achieve their full potential, free from discrimination and violence.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#B790CF] text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="h-16 w-16 bg-[#B790CF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconHeart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Compassion</h3>
                <p className="text-gray-700">
                  We approach our work with empathy and understanding, recognizing the unique challenges faced by women and girls.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="h-16 w-16 bg-[#B790CF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconSchool className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We strive for the highest standards in our programs and services, ensuring lasting impact in our communities.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="h-16 w-16 bg-[#B790CF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconUsers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Inclusivity</h3>
                <p className="text-gray-700">
                  We believe in creating opportunities for all women and girls, regardless of their background or circumstances.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#B790CF] text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/images/team/member1.jpg"
                    alt="Mary Daniel"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-2">Mary Daniel</h3>
                <p className="text-[#9A7AAD] mb-4">Executive Director</p>
                <p className="text-gray-700">
                  With over 15 years of experience in community development and women&apos;s empowerment programs.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/images/team/member2.jpg"
                    alt="Irleen Natay"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-2">Irleen Natay</h3>
                <p className="text-[#9A7AAD] mb-4">Program Director</p>
                <p className="text-gray-700">
                  Specializes in educational program development and community outreach initiatives.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/images/team/member3.jpg"
                    alt="Prisca Bismark"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-2">Prisca Bismark</h3>
                <p className="text-[#9A7AAD] mb-4">Community Mobilizer</p>
                <p className="text-gray-700">
                  Brings extensive experience in project management and organizational development.
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/images/team/member4.jpg"
                    alt="Easter Daniel"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#B790CF] mb-2">Easter Daniel</h3>
                <p className="text-[#9A7AAD] mb-4">Care Giver</p>
                <p className="text-gray-700">
                  Brings extensive experience in project management and organizational development.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-[#B790CF] text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#B790CF] mb-2">5000+</div>
                <p className="text-gray-700">Women Empowered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#B790CF] mb-2">20+</div>
                <p className="text-gray-700">Communities Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#B790CF] mb-2">10+</div>
                <p className="text-gray-700">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}