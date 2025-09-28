"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [loginOption, setLoginOption] = useState("");

  const handleLoginRedirect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLoginOption(value);
    /*
    if (value === "student") {
      router.push("/auth/student-login"); // student login removed
    } else 
    */
    if (value === "admin") {
      router.push("/auth/admin-login");
    }
  };


  const [mobileIqbizOpen, setMobileIqbizOpen] = useState(false);

  return (
    <header className={`sticky top-0 left-0 right-0 bg-white z-50 transition-all duration-300 "`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="inline-block">
          <Image
            src="../images/IQCAlogo.png"
            alt="ABHA School Board"
            width={180}
            height={76}
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-primary hover:font-semibold transform hover:scale-105 transition-all duration-300 font-medium nav-link"
          >
            Home
          </Link>
          <Link
            href="/career"
            className="text-gray-800 hover:text-primary hover:font-semibold transform hover:scale-105 transition-all duration-300 font-medium nav-link"
          >
            Career
          </Link>
          {isAuthenticated && (
            <Link
              href="/dashboard"
              className="text-gray-800 hover:text-primary hover:font-semibold transform hover:scale-105 transition-all duration-300 font-medium nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
          <Link
            href="/about"
            className="text-gray-800 hover:text-primary hover:font-semibold transform hover:scale-105 transition-all duration-300 font-medium nav-link"
          >
            About Us
          </Link>
          {/* IQBIZ Dropdown (Desktop) */}
          <div className="relative group">
            <button className="inline-flex items-center text-gray-800 hover:text-primary hover:font-semibold transform hover:scale-105 transition-all duration-300 font-medium nav-link focus:outline-none">
              IQBIZ
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 mt-2 w-48 rounded-md border bg-white shadow-lg transition-all duration-200">
              <div className="py-2">
                <Link
                  href="/events"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Events
                </Link>
                <Link
                  href="/board-members"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Partners and Sponsors
                </Link>
                <Link
                  href="/magazine"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Magazine
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/courses"
            className="text-gray-800 hover:text-primary hover:font-semibold transform hover:scale-105 transition-all duration-300 font-medium nav-link"
          >
            Short Courses
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/#contact"
            className="hidden md:inline-block bg-primary text-white px-6 py-2.5 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap"
          >
            Book Consultation
          </Link>

          {!isAuthenticated && (
            <select
              value={loginOption}
              onChange={handleLoginRedirect}
              className="hidden md:inline-block bg-primary text-white px-6 py-2.5 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select Login
              </option>
              {/*
              <option value="student">Student Login</option> // student login removed
              */}
              <option value="admin">Admin Login</option>
            </select>
          )}

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"
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
            href="/career"
            className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Career
          </Link>
          {isAuthenticated && (
            <Link
              href="/dashboard"
              className="text-gray-800 hover:text-primary hover:font-semibold transform hover:scale-105 transition-all duration-300 font-medium nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
          <Link
            href="/about"
            className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          {/* IQBIZ Collapsible (Mobile) */}
          <button
            className="flex items-center justify-between text-gray-800 py-2 transition-colors duration-300 font-medium"
            onClick={() => setMobileIqbizOpen(!mobileIqbizOpen)}
          >
            <span>IQBIZ</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileIqbizOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          {mobileIqbizOpen && (
            <div className="ml-4 flex flex-col space-y-2">
              <Link
                href="/events"
                className="text-gray-800 hover:text-primary py-1 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/board-members"
                className="text-gray-800 hover:text-primary py-1 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners and Sponsors
              </Link>
              <Link
                href="/magazine"
                className="text-gray-800 hover:text-primary py-1 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Magazine
              </Link>
            </div>
          )}
          <Link
            href="/courses"
            className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Short Courses
          </Link>

          <Link
            href="/#contact"
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
