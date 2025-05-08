import Image from 'next/image';
import Link from 'next/link';

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Featured Courses</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn, Grow & Succeed with our industry-recognized training programs designed to enhance your professional capabilities.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="100">
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap">
            All Courses
          </button>
          <button className="bg-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 whitespace-nowrap">
            Finance
          </button>
          <button className="bg-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 whitespace-nowrap">
            Health & Safety
          </button>
          <button className="bg-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 whitespace-nowrap">
            Environmental Safety
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 course-card" data-aos="fade-up" data-aos-delay="150">
            <div className="relative">
              <Image 
                src="https://readdy.ai/api/search-image?query=financial%20training%20course%2C%20professional%20setting%20with%20charts%20and%20graphs%2C%20business%20people%20analyzing%20financial%20data%2C%20modern%20corporate%20classroom%20with%20finance%20materials&width=400&height=250&seq=3&orientation=landscape" 
                alt="Financial Risk Management" 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover object-top" 
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Finance
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Risk Management</h3>
              <p className="text-gray-600 mb-4">
                Master the essential principles of identifying, assessing, and mitigating financial risks in modern business environments.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-1">
                    <i className="ri-time-line"></i>
                  </div>
                  <span>12 Weeks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-1">
                    <i className="ri-medal-line"></i>
                  </div>
                  <span>CPD Certified</span>
                </div>
              </div>
              <Link 
                href="#" 
                className="inline-block w-full bg-white border border-primary text-primary text-center px-4 py-2 rounded-button font-medium transition-all duration-300 hover:bg-primary/5 whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Course 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 course-card" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
              <Image 
                src="https://readdy.ai/api/search-image?query=workplace%20health%20and%20safety%20training%2C%20professionals%20wearing%20safety%20equipment%2C%20industrial%20setting%20with%20safety%20signage%2C%20instructor%20demonstrating%20proper%20safety%20procedures&width=400&height=250&seq=4&orientation=landscape" 
                alt="Workplace Health & Safety" 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover object-top" 
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Health & Safety
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Workplace Health & Safety</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training on creating and maintaining safe work environments, hazard identification, and regulatory compliance.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-1">
                    <i className="ri-time-line"></i>
                  </div>
                  <span>8 Weeks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-1">
                    <i className="ri-medal-line"></i>
                  </div>
                  <span>CPD Certified</span>
                </div>
              </div>
              <Link 
                href="#" 
                className="inline-block w-full bg-white border border-primary text-primary text-center px-4 py-2 rounded-button font-medium transition-all duration-300 hover:bg-primary/5 whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Course 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 course-card" data-aos="fade-up" data-aos-delay="250">
            <div className="relative">
              <Image 
                src="https://readdy.ai/api/search-image?query=environmental%20safety%20training%2C%20professionals%20examining%20environmental%20samples%2C%20outdoor%20field%20work%20with%20testing%20equipment%2C%20environmental%20scientists%20in%20protective%20gear%20conducting%20assessments&width=400&height=250&seq=5&orientation=landscape" 
                alt="Environmental Risk Assessment" 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover object-top" 
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Environmental Safety
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Risk Assessment</h3>
              <p className="text-gray-600 mb-4">
                Learn to identify, analyze and mitigate environmental hazards while ensuring compliance with international standards.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-1">
                    <i className="ri-time-line"></i>
                  </div>
                  <span>10 Weeks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-1">
                    <i className="ri-medal-line"></i>
                  </div>
                  <span>CPD Certified</span>
                </div>
              </div>
              <Link 
                href="#" 
                className="inline-block w-full bg-white border border-primary text-primary text-center px-4 py-2 rounded-button font-medium transition-all duration-300 hover:bg-primary/5 whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <Link 
            href="#" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}