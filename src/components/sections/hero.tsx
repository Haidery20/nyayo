import Image from 'next/image';

interface HeroProps {
  content?: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    backgroundVideo: {
      url: string;
      type: string;
    };
  };
}

export function Hero({ content }: HeroProps) {
  return (
    <>
      {/* Hero Section */}
      <main className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={content?.backgroundVideo?.url || "/videos/African-women.mp4"} type={content?.backgroundVideo?.type || "video/mp4"} />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {content?.title || "Empowering Women & Girls in Tanzania"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {content?.description || "Join us in creating a just and safer world through education, entrepreneurship, and advocacy"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={content?.ctaLink || "#support"} className="bg-[#B790CF] hover:bg-[#2F4160x] text-white px-8 py-3 rounded-full transition-colors text-lg font-semibold">
              {content?.ctaText || "Support Our Cause"}
            </a>
            <a href="#programs" className="bg-transparent border-2 border-white hover:bg-[#2F4160] text-white px-8 py-3 rounded-full transition-colors text-lg font-semibold">
              Our Programs
            </a>
          </div>
        </div>
      </main>
            {/* What We Do Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B790CF] text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Empower Through Education</h3>
              <p className="text-gray-700">
                We provide comprehensive educational support, scholarships, and mentorship programs to help girls and women access quality education and develop essential life skills.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Foster Entrepreneurship</h3>
              <p className="text-gray-700">
                Through Nyayo&apos;s education program
              </p>
              <p className="text-gray-700">
                &quot;Through Nyayo&apos;s education program&quot;
              </p>
              <p className="text-gray-700">
                &quot;I found my voice through Nyayo&apos;s advocacy program and now help other women in my community.&quot;
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Advocate for Rights</h3>
              <p className="text-gray-700">
                We work tirelessly to prevent gender-based violence, promote equality, and create safe spaces for women and girls in communities across Tanzania.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#B790CF] mb-4">Health</h3>
              <p className="text-gray-700">
                We work tirelessly to prevent gender-based violence, promote equality, and create safe spaces for women and girls in communities across Tanzania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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
            <div>
              <div className="text-4xl font-bold text-[#B790CF] mb-2">15+</div>
              <p className="text-gray-700">Active Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#B790CF] text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/stories/story1.jpg"
                  alt="Success Story 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#B790CF] mb-2">{"Sarah's Journey"}</h3>
                <p className="text-gray-700">
                  {"\"Through Nyayo's education program, I was able to complete my studies and now run my own business.\""}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/stories/story2.jpg"
                  alt="Success Story 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#B790CF] mb-2">{"Maria's Success"}</h3>
                <p className="text-gray-700">
                  &quot;The entrepreneurship training&quot;
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/stories/story3.jpg"
                  alt="Success Story 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#B790CF] mb-2">{"Grace's Story"}</h3>
                <p className="text-gray-700">
                  Through Nyayo&apos;s education program
                </p>
                <p className="text-gray-700">
                  &quot;I found my voice through Nyayo&apos;s advocacy program and now help other women in my community.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#B790CF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Make a Difference Today</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Your support can help transform lives and create lasting change in communities across Tanzania
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="bg-white text-[#B790CF] px-8 py-3 rounded-full transition-colors text-lg font-semibold hover:bg-gray-100">
              Donate Now
            </a>
            <a href="/volunteer" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full transition-colors text-lg font-semibold hover:bg-white/10">
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}