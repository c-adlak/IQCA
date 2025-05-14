"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CoursePage from "../page";
type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
};
export default function ContactForCourse() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    newsletter: false,
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mbloakeg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          newsletter: formData.newsletter ? "Yes" : "No",
        }),
      });

      if (response.ok) {
        toast.success("Thank you for your inquiry!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
          newsletter: false,
        });
      } else {
        toast.error("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r mt-32 from-teal-400 to-blue-500">
      {/* Navigation */}
      <div className="container mx-auto px-4 pt-4">
        <Link
          className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
          href="/#courses"
        >
          Back to IQCA Courses
        </Link>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">
          200hr Yoga Teacher Training Diploma Course
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-white">Online Course</p>
          <div className="flex items-center">
            <span className="text-white mr-2">Share</span>
            <a href="#" className="text-white mx-1">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-blue-500 font-bold">f</span>
              </div>
            </a>
            <a href="#" className="text-white mx-1">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-blue-500 font-bold">X</span>
              </div>
            </a>
            <a href="#" className="text-white mx-1">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-blue-500 font-bold">in</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                About the IQCA Course
              </h2>
              <p className="text-gray-700 mb-4">
                The course is for those who are interested in a career as a yoga
                teacher, but are unsure whether to commit their time and
                finances to a full classroom-based course. Hands-on and
                in-depth, the course covers the full syllabus for yoga teacher
                training, making this course a stepping stone into teaching,
                although we do recommend that our course is supplemented with
                classroom-based lessons and consistent practice.
              </p>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-medium text-sm text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-medium text-sm text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-medium text-sm text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>

                    {/* <div>
                      <label
                        htmlFor="interest"
                        className="block font-medium text-sm text-gray-700"
                      >
                        Area of Interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="Web Development">Finance</option>
                        <option value="Data Science">Health and Safety</option>
                        <option value="UI/UX Design">
                          Environmental Safety
                        </option>
                        <option value="Cybersecurity">Engineering</option>
                        <option value="Cybersecurity">IT</option>
                        <option value="Other">Other</option>
                      </select>
                    </div> */}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-medium text-sm text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label
                      htmlFor="newsletter"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/3">
              <div className="border-b-2 border-blue-500 pt-2 mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  IQCA Provider
                </h3>
              </div>
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-blue-800 text-xs text-center">
                    <div>CENTRE OF</div>
                    <div className="font-bold">EXCELLENCE</div>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">
                  Centre of Excellence
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                Centre of Excellence is recognised worldwide as one of the
                leading online training providers, with hundreds of learners
                having gained vital skills and qualifications online via our
                centre. Our aim is to help individuals to achieve excellence in
                every area of their life via quality distance learning.
              </p>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <CoursePage />
    </div>
  );
}
