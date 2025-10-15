import { Shield, Target, Award, Users, TrendingUp, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-16">
        <div className="container mx-auto px-6 sm:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lusail Insurance</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Your trusted insurance partner in Qatar, providing comprehensive coverage and exceptional service since 2010.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 sm:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Lusail Insurance was founded in 2010 with a vision to revolutionize the insurance industry in Qatar. 
                We recognized the need for transparent, customer-centric insurance solutions that truly protect what matters most.
              </p>
              <p>
                Over the years, we've grown from a small startup to one of Qatar's most trusted insurance providers, 
                serving thousands of individuals and businesses across the nation. Our success is built on our 
                unwavering commitment to customer satisfaction and innovative insurance solutions.
              </p>
              <p>
                Today, we partner with over 10 leading insurance companies to offer you the best coverage options 
                at competitive prices. Our digital-first approach makes getting insured quick, easy, and hassle-free.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/whychooseus.png"
              alt="Lusail Insurance Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 sm:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] text-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To provide accessible, transparent, and comprehensive insurance solutions that empower individuals 
                and businesses to protect what matters most. We strive to make insurance simple, affordable, and 
                customer-centric through innovative technology and exceptional service.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#6B1028] to-[#8B1538] text-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be Qatar's leading digital insurance platform, recognized for innovation, transparency, and 
                customer satisfaction. We envision a future where everyone has access to the protection they need 
                through seamless digital experiences and personalized insurance solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 sm:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#8B1538] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Integrity</h3>
            <p className="text-gray-600">
              We build lasting relationships through honest communication, transparent practices, and unwavering 
              commitment to our customers' best interests.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#8B1538] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We listen, understand, and deliver solutions 
              that truly meet their unique needs.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#8B1538] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every interaction, continuously improving our services and exceeding 
              customer expectations at every touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-16">
        <div className="container mx-auto px-6 sm:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Lusail Insurance in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-white/90">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <p className="text-white/90">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-white/90">Insurance Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-white/90">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 sm:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Lusail Insurance?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#8B1538] text-white rounded-lg flex items-center justify-center">
                <Shield size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600 text-sm">Access to 10+ leading insurers with the best coverage options</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#8B1538] text-white rounded-lg flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Competitive Prices</h3>
              <p className="text-gray-600 text-sm">Best rates guaranteed through our extensive partner network</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#8B1538] text-white rounded-lg flex items-center justify-center">
                <Heart size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Quick & Easy Process</h3>
              <p className="text-gray-600 text-sm">Hassle-free digital experience from quote to claims</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#8B1538] text-white rounded-lg flex items-center justify-center">
                <Users size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">Professional advisors to help you choose the right coverage</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#8B1538] text-white rounded-lg flex items-center justify-center">
                <Shield size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer service and claims assistance</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#8B1538] text-white rounded-lg flex items-center justify-center">
                <Award size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Claims</h3>
              <p className="text-gray-600 text-sm">Streamlined claims process with quick settlements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
