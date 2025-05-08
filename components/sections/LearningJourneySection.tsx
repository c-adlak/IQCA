import Link from 'next/link';

export default function LearningJourneySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Learning Journey Today</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Enrol in industry-recognised courses and gain the skills to excel in finance, health & safety, and environmental safety.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <i className="ri-search-line ri-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Choose Your Course</h3>
            <p className="text-gray-600 mb-6">
              Browse our catalog of CPD-accredited courses and select the one that aligns with your career goals.
            </p>
            <Link 
              href="#courses" 
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              Explore Courses
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <i className="ri-user-add-line ri-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Enroll & Access</h3>
            <p className="text-gray-600 mb-6">
              Complete the enrollment process and gain immediate access to course materials and resources.
            </p>
            <Link 
              href="#" 
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              Enrollment Guide
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <i className="ri-graduation-cap-line ri-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Learn & Certify</h3>
            <p className="text-gray-600 mb-6">
              Complete the coursework, pass assessments, and receive your industry-recognized certification.
            </p>
            <Link 
              href="#" 
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              Certification Process
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <Link 
            href="#contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}