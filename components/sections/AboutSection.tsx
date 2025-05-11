import Image from "next/image";
import Link from "next/link";
import {
  Medal,
  UserCheck,
  Globe,
  Users,
  Layers3,
  BadgeCheck,
} from "lucide-react";
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
            <h2 className="text-gray-700 leading-tight text-5xl mb-6">
              Leading the Way in Professional Training & CPD-Accredited
              Certifications{" "}
            </h2>
            <p className="text-gray-700 mb-6">
              IQCA Board is a CPD-accredited training provider, delivering
              expert-led courses in finance, health & safety, and environmental
              safety for individuals and businesses
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* CPD Accredited */}
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <Medal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    CPD Accredited
                  </h3>
                </div>
              </div>

              {/* Expert-Led Courses */}
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Expert-Led Courses
                  </h3>
                </div>
              </div>

              {/* Comprehensive Curriculum */}
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Comprehensive Curriculum
                  </h3>
                </div>
              </div>

              {/* Corporate & Individual Training */}
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Corporate & Individual Training
                  </h3>
                </div>
              </div>

              {/* Flexible Learning Options */}
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <Layers3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Flexible Learning Options
                  </h3>
                </div>
              </div>

              {/* Globally Recognized Certifications */}
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center text-primary mr-3">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Globally Recognized Certifications
                  </h3>
                </div>
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
