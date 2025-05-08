'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [count500, setCount500] = useState(0);
  
  useEffect(() => {
    const target = 500;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        setCount500(Math.floor(current));
        requestAnimationFrame(updateCounter);
      } else {
        setCount500(target);
      }
    };
    
    updateCounter();
  }, []);

  return (
    <section className="pt-32 pb-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              Empower Your Future with Industry-Leading Training & <span className="text-primary animate-text-gradient">Certifications</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg" style={{ animation: 'fadeIn 1s ease-out 0.3s forwards', opacity: 0 }}>
              Transform your career with our CPD-accredited courses in Finance, Health & Safety, and Environmental Safety. Expert-led training designed for success.
            </p>
            <div className="flex flex-wrap gap-4 mb-12" style={{ animation: 'fadeIn 1s ease-out 0.6s forwards', opacity: 0 }}>
              <Link 
                href="#courses" 
                className="bg-primary text-white px-8 py-3 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 hover:translate-y-[-2px] whitespace-nowrap flex items-center group"
              >
                Get Started
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
              <Link 
                href="#contact" 
                className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-button font-medium transition-all duration-300 hover:bg-gray-50 whitespace-nowrap flex items-center"
              >
                View Courses
                <i className="ri-external-link-line ml-2"></i>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8" style={{ animation: 'fadeIn 1s ease-out 0.9s forwards', opacity: 0 }}>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary mb-1 counter" data-target="500">
                  {count500}+
                </div>
                <div className="text-sm text-gray-600">Certified Professionals</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-gray-600">Expert Instructors</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-float" data-aos="fade-left" data-aos-duration="1000">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="https://readdy.ai/api/search-image?query=modern%20corporate%20training%20session%20in%20progress%2C%20business%20professionals%20engaged%20in%20discussion%2C%20bright%20contemporary%20office%20space%20with%20glass%20walls%20and%20modern%20furniture%2C%20professional%20atmosphere&width=800&height=600&seq=7&orientation=landscape" 
                alt="Training Session" 
                width={800} 
                height={600} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <i className="ri-medal-line text-primary"></i>
              </div>
              <div>
                <div className="font-medium text-gray-900">CPD Accredited</div>
                <div className="text-sm text-gray-600">Industry Recognized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}