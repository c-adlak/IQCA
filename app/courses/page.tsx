"use client";
import React, { useState, useEffect } from "react";
import { Clock, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { fetchAllCourses, Course } from "../../lib/api";

const CoursePage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{ id: string; name: string }[]>([
    { id: "all", name: "All Courses" },
  ]);

  // Fetch courses from API
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCourses();
        setCourses(data);

        // Create dynamic filters from fetched courses
        const uniqueCategories = Array.from(
          new Set(data.map((course) => course.category))
        );

        const dynamicFilters = uniqueCategories.map((category) => {
          let formattedName = category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          return { id: category, name: formattedName };
        });

        setFilters([{ id: "all", name: "All Courses" }, ...dynamicFilters]);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load courses");
        console.error("Error loading courses:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

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
              Learn, Grow & Succeed with our industry-recognized training programs
              designed to enhance your professional capabilities.
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
              Learn, Grow & Succeed with our industry-recognized training programs
              designed to enhance your professional capabilities.
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
              key={course._id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={150 + (parseInt(course._id) || 0) * 50}
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
                  href={`/courses/show-interest/${course._id}`}
                  className="inline-block w-full bg-white border border-primary text-primary text-center px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-primary/5"
                >
                  Learn More
                </Link>
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
export default CoursePage;
