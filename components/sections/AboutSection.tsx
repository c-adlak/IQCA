import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <Image 
              src="https://readdy.ai/api/search-image?query=professional%20training%20session%20with%20diverse%20group%20of%20business%20people%20in%20modern%20conference%20room%2C%20instructor%20presenting%20to%20attentive%20audience%2C%20high-quality%20corporate%20training%20environment%2C%20clean%20professional%20setting&width=600&height=500&seq=2&orientation=landscape" 
              alt="About ABHA School Board" 
              width={600} 
              height={500} 
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
            />
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-700 mb-6">
              ABHA School Board is a premier CPD-accredited training provider committed to delivering high-quality education in finance, health & safety, and environmental safety. With over 15 years of industry experience, we've helped thousands of professionals and businesses enhance their skills and compliance.
            </p>
            <p className="text-gray-700 mb-6">
              Our expert-led courses combine theoretical knowledge with practical applications, ensuring our students can immediately apply what they learn in real-world scenarios. We pride ourselves on staying current with industry regulations and best practices.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <i className="ri-medal-line ri-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">CPD Accredited</h3>
                  <p className="text-sm text-gray-600">Recognized qualifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <i className="ri-user-star-line ri-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Trainers</h3>
                  <p className="text-sm text-gray-600">Industry professionals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <i className="ri-global-line ri-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Reach</h3>
                  <p className="text-sm text-gray-600">Students from 40+ countries</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <i className="ri-customer-service-2-line ri-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dedicated Support</h3>
                  <p className="text-sm text-gray-600">Throughout your journey</p>
                </div>
              </div>
            </div>
            <Link href="#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}