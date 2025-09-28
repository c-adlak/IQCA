"use client";
import React, { useState, useEffect } from "react";
import { Clock, Award, ArrowRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

type Course = {
  _id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
};
const CoursesTab = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Dynamic filters state
  const [filters, setFilters] = useState<{ id: string; name: string }[]>([
    { id: "all", name: "All Courses" }, // Always keep "All" filter
  ]);

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://iqca-backend.onrender.com/courses/");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data: Course[] = await response.json();
        setCourses(data);

        // Create dynamic filters from fetched courses
        const uniqueCategories = Array.from(
          new Set(data.map((course) => course.category))
        );

        const dynamicFilters = uniqueCategories.map((category) => {
          // You can format the name nicely if needed
          let formattedName = category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          return { id: category, name: formattedName };
        });

        setFilters([{ id: "all", name: "All Courses" }, ...dynamicFilters]);

        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(
    (course) => activeFilter === "all" || course.category === activeFilter
  );

  const visibleCourses =
    activeFilter === "all" && !showAllCourses
      ? filteredCourses.slice(0, 6)
      : filteredCourses;


  // Loading state
  if (loading) {
    return (
      <section id="courses" className="py-20 pt-8 bg-gray-50">
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
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="courses" className="py-20 pt-8 bg-gray-50">
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
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">Error loading courses: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-20 pt-8 bg-gray-50">
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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
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
              key={course._id}
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
                  href={`/courses/show-interest/${course._id}`}
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
                className={`w-5 h-5 ml-2 transform transition-transform ${showAllCourses ? "-rotate-90" : ""
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
