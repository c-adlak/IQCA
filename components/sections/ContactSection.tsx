'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    newsletter: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form data submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
      newsletter: false
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary/90 to-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Learning Journey Today</h2>
            <p className="text-white/90 mb-8 max-w-lg">
              Enrol in our industry-recognised courses and gain the skills to excel in finance, health & safety, and environmental safety. Book a consultation with our experts to find the right course for your career goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#courses" 
                className="bg-white text-primary px-8 py-3 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap"
              >
                Explore Courses
              </Link>
              <Link 
                href="#" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-medium transition-all duration-300 hover:bg-white/10 whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 bg-white rounded-lg p-8 shadow-lg" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                <div className="relative">
                  <select 
                    id="interest" 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary pr-8"
                    required
                  >
                    <option value="" disabled>Select your area of interest</option>
                    <option value="finance">Finance</option>
                    <option value="health">Health & Safety</option>
                    <option value="environmental">Environmental Safety</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                  placeholder="Tell us about your training needs..."
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">I agree to receive communications about courses and promotions</span>
                </label>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white px-6 py-3 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}