import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="https://static.readdy.ai/image/3fc0099591bed6bbd6c6cee4a5375f2b/b27e687bdd151d60a3e8e8b61610dd11.png" 
                alt="ABHA School Board" 
                width={180} 
                height={64} 
                className="h-16 w-auto" 
              />
            </Link>
            <p className="text-gray-400 mb-6">
              ABHA School Board is a premier CPD-accredited training provider delivering expert-led courses in finance, health & safety, and environmental safety.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center social-icon">
                <i className="ri-facebook-fill"></i>
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center social-icon">
                <i className="ri-twitter-fill"></i>
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center social-icon">
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center social-icon">
                <i className="ri-instagram-fill"></i>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Course Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Health & Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Environmental Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link inline-block">
                  Certification Programs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-3 mt-1">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="text-gray-400">123 Business Avenue, London, UK</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-3 mt-1">
                  <i className="ri-phone-line"></i>
                </div>
                <span className="text-gray-400">+44 (0) 20 1234 5678</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-3 mt-1">
                  <i className="ri-mail-line"></i>
                </div>
                <span className="text-gray-400">info@abhaschool.com</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-3 mt-1">
                  <i className="ri-time-line"></i>
                </div>
                <span className="text-gray-400">Mon-Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <div className="w-10 h-10 flex items-center justify-center text-gray-400">
              <i className="ri-visa-fill ri-lg"></i>
            </div>
            <div className="w-10 h-10 flex items-center justify-center text-gray-400">
              <i className="ri-mastercard-fill ri-lg"></i>
            </div>
            <div className="w-10 h-10 flex items-center justify-center text-gray-400">
              <i className="ri-paypal-fill ri-lg"></i>
            </div>
            <div className="w-10 h-10 flex items-center justify-center text-gray-400">
              <i className="ri-apple-fill ri-lg"></i>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ABHA School Board. All rights reserved. | 
            <Link href="#" className="hover:text-white ml-1">
              Privacy Policy
            </Link> | 
            <Link href="#" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}