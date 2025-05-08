import Image from 'next/image';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose IQCA Board?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your Trusted Training Partner for Professional Development and Certification
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <Image 
              src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20business%20professionals%20in%20training%20session%2C%20engaged%20learners%20in%20modern%20classroom%2C%20interactive%20professional%20development%20workshop%2C%20clean%20corporate%20learning%20environment&width=600&height=500&seq=6&orientation=landscape" 
              alt="Why Choose IQCA Board" 
              width={600} 
              height={500} 
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
            />
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 feature-card transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-4">
                    <i className="ri-award-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Industry-Recognized Certifications</h3>
                    <p className="text-gray-600">
                      Our CPD-accredited courses are recognized by leading employers worldwide, enhancing your professional credibility.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 feature-card transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-4">
                    <i className="ri-user-star-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
                    <p className="text-gray-600">
                      Learn from industry veterans with extensive practical experience who bring real-world insights to every course.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 feature-card transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-4">
                    <i className="ri-book-open-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Curriculum</h3>
                    <p className="text-gray-600">
                      Our courses blend theoretical knowledge with practical applications, ensuring you can immediately apply what you learn.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 feature-card transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center text-primary bg-primary/10 rounded-full mr-4">
                    <i className="ri-customer-service-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
                    <p className="text-gray-600">
                      Our support team is available to assist you throughout your learning journey, from enrollment to certification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}