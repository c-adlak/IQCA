"use client";
import React, { useState } from "react";
import { Clock, Award, ArrowRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
};

const CoursesTab = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    newsletter: false,
  });

  const filters = [
    { id: "all", name: "All Courses" },
    { id: "finance", name: "Finance" },
    { id: "health", name: "Health & Safety" },
    { id: "environmental", name: "Environmental Safety" },
    { id: "it", name: "IT" },
    { id: "engineering", name: "Engineering" },
  ];

  const courses = [
    {
      id: 1,
      title: "Financial Risk Management",
      description:
        "Master the essential principles of identifying, assessing, and mitigating financial risks in modern business environments.",
      category: "finance",
      duration: "12 Weeks",
      image:
        "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Workplace Health & Safety",
      description:
        "Comprehensive training on creating and maintaining safe work environments, hazard identification, and regulatory compliance.",
      category: "health",
      duration: "8 Weeks",
      image:
        "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Environmental Risk Assessment",
      description:
        "Learn to identify, analyze and mitigate environmental hazards while ensuring compliance with international standards.",
      category: "environmental",
      duration: "10 Weeks",
      image:
        "https://images.pexels.com/photos/5690988/pexels-photo-5690988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Investment Banking Fundamentals",
      description:
        "Gain a solid foundation in investment banking principles, valuation methods, and financial modeling.",
      category: "finance",
      duration: "14 Weeks",
      image:
        "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Emergency Response Training",
      description:
        "Learn essential emergency response procedures and crisis management techniques for workplace safety.",
      category: "health",
      duration: "6 Weeks",
      image:
        "https://images.pexels.com/photos/8961256/pexels-photo-8961256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      title: "Sustainable Business Practices",
      description:
        "Develop strategies for implementing sustainable business practices and environmental management systems.",
      category: "environmental",
      duration: "8 Weeks",
      image:
        "https://images.pexels.com/photos/5690991/pexels-photo-5690991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      title: "Corporate Finance Strategy",
      description:
        "Advanced course in financial planning, capital structure, and value creation strategies.",
      category: "finance",
      duration: "10 Weeks",
      image:
        "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 8,
      title: "Quantity Surveyor with BIM Integration",
      description:
        "This CPD-accredited course bridges traditional quantity surveying with modern BIM practices using Autodesk Revit and Navisworks for accurate project estimation and management.",
      category: "engineering",
      duration: "6-8 Weeks",
      image:
        "https://images.pexels.com/photos/4254890/pexels-photo-4254890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // placeholder, replace if needed
    },
    {
      id: 9,
      title: "Solar Energy Systems for Civil Engineers",
      description:
        "Hands-on CPD-accredited training for civil engineers in solar PV systems, including installation, grid integration, and NABCEP-aligned modules for green building readiness.",
      category: "engineering",
      duration: "6-8 Weeks",
      image:
        "https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // placeholder, replace if needed
    },
    {
      id: 10,
      title: "Cyber Security Fundamentals",
      description:
        "CPD-accredited course on network security, ethical hacking, threat analysis, and regulatory compliance to prepare IT professionals to combat modern cyber threats.",
      category: "it",
      duration: "8 Weeks",
      image:
        "https://images.pexels.com/photos/5380658/pexels-photo-5380658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // placeholder, replace if needed
    },
  ];

  const filteredCourses = courses.filter(
    (course) => activeFilter === "all" || course.category === activeFilter
  );

  const visibleCourses =
    activeFilter === "all" && !showAllCourses
      ? filteredCourses.slice(0, 6)
      : filteredCourses;

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
    <section id="courses" className="py-20 pt-48 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Featured Courses
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn, Grow & Succeed with our industry-recognized training
            programs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setShowAllCourses(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.category.charAt(0).toUpperCase() +
                    course.category.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-1" />
                    <span>CPD Certified</span>
                  </div>
                </div>
                <Link
                  className="inline-block w-full bg-white border border-primary text-primary text-center px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-primary/5"
                  href="/courses/show-interest"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {activeFilter === "all" && filteredCourses.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-opacity-90"
            >
              {showAllCourses ? "View Less" : "View All"}
              <ArrowRight
                className={`w-5 h-5 ml-2 transform transition-transform ${
                  showAllCourses ? "-rotate-90" : ""
                }`}
              />
            </button>
          </div>
        )}

        {activeFilter !== "all" && filteredCourses.length > 6 && (
          <div className="flex justify-end mt-8">
            <a
              href="/courses"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-opacity-90 group"
            >
              Explore More Courses
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesTab;
