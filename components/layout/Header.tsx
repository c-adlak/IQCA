"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        isScrolled ? "py-2 shadow" : "py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="inline-block">
          <Image
            src="../images/a.png"
            alt="ABHA School Board"
            width={180}
            height={76}
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium nav-link"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium nav-link"
          >
            About Us
          </Link>
          <Link
            href="#courses"
            className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium nav-link"
          >
            Short Courses
          </Link>
          <Link
            href="#"
            className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium nav-link"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="#contact"
            className="hidden md:inline-block bg-primary text-white px-6 py-2.5 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap"
          >
            Book Consultation
          </Link>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i
              className={`ri-${mobileMenuOpen ? "close" : "menu"}-line ri-lg`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-lg absolute top-full left-0 right-0 p-4 transition-all duration-300`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#courses"
            className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Short Courses
          </Link>
          <Link
            href="#"
            className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="bg-primary text-white px-6 py-2.5 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 text-center whitespace-nowrap"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
