"use client";
import { useState } from "react";
// import meetingImg from "";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
const AboutUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically handle the form submission to your backend
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 pt-44 pb-20 flex gap-8 flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              About ICQA: Excellence in Professional Training
            </h1>
            <p className="text-gray-700 mb-6">
              Since 2015, ICQA has been at the forefront of professional
              education, delivering CEU-accredited courses that transform
              careers and organizations. Our commitment to quality and industry
              relevance has made us a trusted partner for professionals seeking
              advancement.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
                Our Courses
              </button>
              <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded-md hover:bg-blue-50 transition">
                Meet Our Team
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={"./aboutPageImg/meetingImg.jpg"}
              height={400}
              width={600}
              alt="Team meeting at ICQA"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Our Mission & Values
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At ICQA, we're driven by commitment to excellence in professional
            education. Our mission is to empower individuals and organizations
            through high-quality, industry-relevant training.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Excellence */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-blue-900 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Excellence</h3>
            <p className="text-gray-700">
              We are dedicated to every course we deliver, ensuring the highest
              standards of educational quality and professional relevance.
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-blue-900 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Innovation</h3>
            <p className="text-gray-700">
              We continuously explore new teaching methodologies and create
              content to reflect the latest industry developments and best
              practices.
            </p>
          </div>

          {/* Community */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-blue-900 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Community</h3>
            <p className="text-gray-700">
              We foster a supportive learning community where professionals can
              network, share insights, and grow together as they implement them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={"./aboutPageImg/officeImg.jpg"}
                height={400}
                width={600}
                alt="ICQA Campus"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015 by a team of industry experts, ICQA began with a
                single mission: to bridge the gap between academic knowledge and
                practical workplace skills, particularly in quality, safety, and
                business/project management.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've grown from a small training provider to an
                internationally recognized institution, helping more than 500
                professionals advance their careers through our specialized
                certification programs.
              </p>
              <p className="text-gray-700 mb-6">
                Today, ICQA is recognized as a global leader committed to
                educational excellence and professional development, with a 98%
                success rate and a network of over 50 expert instructors
                delivering value-adding practical education.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
                Learn More About Our History
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-900 mb-2">15+</p>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900 mb-2">500+</p>
              <p className="text-gray-700">Certified Professionals</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900 mb-2">98%</p>
              <p className="text-gray-700">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-900 mb-2">50+</p>
              <p className="text-gray-700">Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
            Our Leadership Team
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Meet the experts behind ICQA's success. Each leader brings years of
            industry experience and academic excellence to our professional
            training programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dr. James Wilson */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/320/320"
                alt="Dr. James Wilson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-blue-900 font-bold text-xl">
                  Dr. James Wilson
                </h3>
                <p className="text-blue-600 mb-4">Founder & CEO</p>
                <p className="text-gray-700 text-sm mb-4">
                  Over 25 years of experience in financial education and
                  corporate training. James founded ICQA to bridge the gap
                  between academic theory and workplace practice.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.225 0h-20.45c-0.975 0-1.775 0.8-1.775 1.775v20.45c0 0.975 0.8 1.775 1.775 1.775h20.45c0.975 0 1.775-0.8 1.775-1.775v-20.45c0-0.975-0.8-1.775-1.775-1.775zM7.325 20.45h-3.55v-10.65h3.55v10.65zM5.55 8.3c-1.125 0-2.025-0.9-2.025-2.025s0.9-2.025 2.025-2.025 2.025 0.9 2.025 2.025-0.9 2.025-2.025 2.025zM20.45 20.45h-3.55v-5.175c0-1.325-0.025-3.025-1.85-3.025-1.85 0-2.125 1.425-2.125 2.9v5.3h-3.55v-10.65h3.4v1.55h0.050c0.475-0.9 1.625-1.85 3.35-1.85 3.575 0 4.25 2.35 4.25 5.425v5.525z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.998 4.926c-0.881 0.391-1.827 0.654-2.821 0.772 1.014-0.608 1.794-1.572 2.162-2.719-0.951 0.564-2.001 0.973-3.121 1.191-0.896-0.953-2.171-1.549-3.582-1.549-2.712 0-4.911 2.2-4.911 4.912 0 0.384 0.044 0.76 0.128 1.12-4.084-0.206-7.704-2.161-10.129-5.136-0.422 0.725-0.664 1.568-0.664 2.468 0 1.704 0.867 3.207 2.184 4.088-0.805-0.026-1.562-0.247-2.223-0.615v0.062c0 2.379 1.692 4.364 3.939 4.817-0.412 0.112-0.845 0.172-1.292 0.172-0.316 0-0.624-0.031-0.922-0.088 0.624 1.951 2.436 3.371 4.581 3.411-1.68 1.317-3.795 2.101-6.095 2.101-0.396 0-0.786-0.023-1.171-0.069 2.168 1.39 4.742 2.201 7.506 2.201 9.008 0 13.93-7.461 13.93-13.931 0-0.212-0.004-0.424-0.014-0.635 0.957-0.689 1.785-1.55 2.445-2.533z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Dr. Sarah Chen */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/320/320"
                alt="Dr. Sarah Chen"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-blue-900 font-bold text-xl">
                  Dr. Sarah Chen
                </h3>
                <p className="text-blue-600 mb-4">Academic Director</p>
                <p className="text-gray-700 text-sm mb-4">
                  Leads our curriculum development team, bringing her expertise
                  in environmental science and sustainable business practices to
                  our course offerings.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.225 0h-20.45c-0.975 0-1.775 0.8-1.775 1.775v20.45c0 0.975 0.8 1.775 1.775 1.775h20.45c0.975 0 1.775-0.8 1.775-1.775v-20.45c0-0.975-0.8-1.775-1.775-1.775zM7.325 20.45h-3.55v-10.65h3.55v10.65zM5.55 8.3c-1.125 0-2.025-0.9-2.025-2.025s0.9-2.025 2.025-2.025 2.025 0.9 2.025 2.025-0.9 2.025-2.025 2.025zM20.45 20.45h-3.55v-5.175c0-1.325-0.025-3.025-1.85-3.025-1.85 0-2.125 1.425-2.125 2.9v5.3h-3.55v-10.65h3.4v1.55h0.050c0.475-0.9 1.625-1.85 3.35-1.85 3.575 0 4.25 2.35 4.25 5.425v5.525z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.998 4.926c-0.881 0.391-1.827 0.654-2.821 0.772 1.014-0.608 1.794-1.572 2.162-2.719-0.951 0.564-2.001 0.973-3.121 1.191-0.896-0.953-2.171-1.549-3.582-1.549-2.712 0-4.911 2.2-4.911 4.912 0 0.384 0.044 0.76 0.128 1.12-4.084-0.206-7.704-2.161-10.129-5.136-0.422 0.725-0.664 1.568-0.664 2.468 0 1.704 0.867 3.207 2.184 4.088-0.805-0.026-1.562-0.247-2.223-0.615v0.062c0 2.379 1.692 4.364 3.939 4.817-0.412 0.112-0.845 0.172-1.292 0.172-0.316 0-0.624-0.031-0.922-0.088 0.624 1.951 2.436 3.371 4.581 3.411-1.68 1.317-3.795 2.101-6.095 2.101-0.396 0-0.786-0.023-1.171-0.069 2.168 1.39 4.742 2.201 7.506 2.201 9.008 0 13.93-7.461 13.93-13.931 0-0.212-0.004-0.424-0.014-0.635 0.957-0.689 1.785-1.55 2.445-2.533z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Robert Martinez */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/320/320"
                alt="Robert Martinez"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-blue-900 font-bold text-xl">
                  Robert Martinez
                </h3>
                <p className="text-blue-600 mb-4">Head of Industry Relations</p>
                <p className="text-gray-700 text-sm mb-4">
                  Maintains strong connections with industry partners, ensuring
                  our courses remain aligned with current workplace and
                  technology trends.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.225 0h-20.45c-0.975 0-1.775 0.8-1.775 1.775v20.45c0 0.975 0.8 1.775 1.775 1.775h20.45c0.975 0 1.775-0.8 1.775-1.775v-20.45c0-0.975-0.8-1.775-1.775-1.775zM7.325 20.45h-3.55v-10.65h3.55v10.65zM5.55 8.3c-1.125 0-2.025-0.9-2.025-2.025s0.9-2.025 2.025-2.025 2.025 0.9 2.025 2.025-0.9 2.025-2.025 2.025zM20.45 20.45h-3.55v-5.175c0-1.325-0.025-3.025-1.85-3.025-1.85 0-2.125 1.425-2.125 2.9v5.3h-3.55v-10.65h3.4v1.55h0.050c0.475-0.9 1.625-1.85 3.35-1.85 3.575 0 4.25 2.35 4.25 5.425v5.525z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.998 4.926c-0.881 0.391-1.827 0.654-2.821 0.772 1.014-0.608 1.794-1.572 2.162-2.719-0.951 0.564-2.001 0.973-3.121 1.191-0.896-0.953-2.171-1.549-3.582-1.549-2.712 0-4.911 2.2-4.911 4.912 0 0.384 0.044 0.76 0.128 1.12-4.084-0.206-7.704-2.161-10.129-5.136-0.422 0.725-0.664 1.568-0.664 2.468 0 1.704 0.867 3.207 2.184 4.088-0.805-0.026-1.562-0.247-2.223-0.615v0.062c0 2.379 1.692 4.364 3.939 4.817-0.412 0.112-0.845 0.172-1.292 0.172-0.316 0-0.624-0.031-0.922-0.088 0.624 1.951 2.436 3.371 4.581 3.411-1.68 1.317-3.795 2.101-6.095 2.101-0.396 0-0.786-0.023-1.171-0.069 2.168 1.39 4.742 2.201 7.506 2.201 9.008 0 13.93-7.461 13.93-13.931 0-0.212-0.004-0.424-0.014-0.635 0.957-0.689 1.785-1.55 2.445-2.533z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded-md hover:bg-blue-50 transition">
              View Full Team
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
            What Our Students Say
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Hear from professionals who have experienced our career-advancing
            training programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Practical Risk Management course at ICQA completely
                transformed my career trajectory. The instructors were
                incredibly knowledgeable and willing to share their years of
                experience. I received a senior position at a leading financial
                institution."
              </p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/40/40"
                  alt="Elena Thompson"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">Elena Thompson</p>
                  <p className="text-gray-600 text-sm">
                    Risk Manager, Capital One
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As a seasoned IT Safety professional, I needed a certification
                that would be recognized across industries. ICQA's program not
                only provided me with the knowledge I needed, but opened doors
                for leadership opportunities I never thought possible."
              </p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/40/40"
                  alt="David Patel"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">David Patel</p>
                  <p className="text-gray-600 text-sm">
                    HSSE Manager, Clean Tech Inc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-800 text-white min-h-screen flex flex-col items-center">
        <div className="container mx-auto p-4 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:space-x-8 w-full">
            {/* Left side - Contact info */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="mb-6">
                Have questions about our courses or want to discuss custom
                training solutions for your organization? Our team is here to
                help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p>123 Education Avenue</p>
                    <p>London, EC1A 1BB</p>
                    <p>United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p>+44 (0) 20 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p>info@iqca-education.com</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="hover:text-blue-300 transition duration-200"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-blue-300 transition duration-200"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-blue-300 transition duration-200"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-blue-300 transition duration-200"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="lg:w-2/3 bg-white text-gray-800 rounded-lg p-6 lg:p-8 shadow-lg">
              <h2 className="text-xl lg:text-2xl font-bold mb-6 text-blue-800">
                Send Us a Message
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Message subject"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-800 text-white py-3 px-6 rounded font-medium hover:bg-blue-700 transition duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
