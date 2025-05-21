import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';

export default function Programs() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#B790CF] mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our initiatives that empower women and girls through education, entrepreneurship, and advocacy
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Education Program */}
            <div className="bg-white-100 shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/programs/education.jpg"
                  alt="Education Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#B790CF] mb-4">Education Program</h2>
                <p className="text-gray-700 mb-6">
                  Our education program provides access to quality education, mentorship, and resources for girls to achieve their academic goals.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• Scholarships for secondary and higher education</li>
                  <li>• After-school tutoring and support</li>
                  <li>• STEM education initiatives</li>
                  <li>• Life skills training</li>
                </ul>
                <a href="/programs/education" className="text-[#B790CF] hover:text-[#9A7AAD] font-semibold flex items-center">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Entrepreneurship Program */}
            <div className="bg-white-100 shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/programs/entrepreneurship.jpg"
                  alt="Entrepreneurship Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#B790CF] mb-4">Entrepreneurship Program</h2>
                <p className="text-gray-700 mb-6">
                  We empower women with business skills, resources, and support to start and grow their own enterprises.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• Business skills training</li>
                  <li>• Micro-loans and financial support</li>
                  <li>• Mentorship from successful entrepreneurs</li>
                  <li>• Market access and networking</li>
                </ul>
                <a href="/programs/entrepreneurship" className="text-[#B790CF] hover:text-[#9A7AAD] font-semibold flex items-center">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Advocacy Program */}
            <div className="bg-white-100 shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/programs/advocacy.jpg"
                  alt="Advocacy Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#B790CF] mb-4">Advocacy Program</h2>
                <p className="text-gray-700 mb-6">
                  Our advocacy work focuses on promoting gender equality and women's rights at community and policy levels.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• Community awareness campaigns</li>
                  <li>• Policy advocacy initiatives</li>
                  <li>• Gender-based violence prevention</li>
                  <li>• Women's rights education</li>
                </ul>
                <a href="/programs/advocacy" className="text-[#B790CF] hover:text-[#9A7AAD] font-semibold flex items-center">
                  Learn More →
                </a>
              </div>
            </div>

            {/* Community Development */}
            <div className="bg-white-100 shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/programs/community.jpg"
                  alt="Community Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#B790CF] mb-4">Community Development</h2>
                <p className="text-gray-700 mb-6">
                  We work with communities to create sustainable change and improve living conditions for women and families.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>• Health and wellness initiatives</li>
                  <li>• Environmental projects</li>
                  <li>• Infrastructure development</li>
                  <li>• Community leadership training</li>
                </ul>
                <a href="/programs/community" className="text-[#B790CF] hover:text-[#9A7AAD] font-semibold flex items-center">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}