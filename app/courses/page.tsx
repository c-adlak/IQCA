"use client";
import React, { useState } from "react";
import { Clock, Award, ArrowRight } from "lucide-react";

const page = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Courses" },
    { id: "finance", name: "Finance" },
    { id: "health", name: "Health & Safety" },
    { id: "environmental", name: "Environmental Safety" },
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
  ];

  const filteredCourses =
    activeFilter === "all"
      ? courses.slice(0, 6)
      : courses
          .filter((course) => course.category === activeFilter)
          .slice(0, 6);

  const hasMoreCourses =
    activeFilter === "all"
      ? courses.length > 6
      : courses.filter((course) => course.category === activeFilter).length > 6;

  return (
    <section id="courses" className="py-20 pt-48 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Featured Courses
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn, Grow & Succeed with our industry-recognized training programs
            designed to enhance your professional capabilities.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={150 + course.id * 50}
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
                <a
                  href="#"
                  className="inline-block w-full bg-white border border-primary text-primary text-center px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-primary/5"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {hasMoreCourses && (
          <div className="flex justify-end mt-8" data-aos="fade-up">
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
export default page;
