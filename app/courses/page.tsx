"use client";
import React, { useState } from "react";
import { Clock, Award, ArrowRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
};

const page = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    newsletter: false,
  });

  // Whenever modal opens with new course, prefill interest
  React.useEffect(() => {
    if (selectedCourse) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: selectedCourse.title,
        message: '',
        newsletter: false,
      });
    }
  }, [selectedCourse]);

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


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      <Toaster position="top-center" />
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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === filter.id
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
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setShowModal(true);
                  }}
                  className="inline-block w-full bg-white border border-primary text-primary text-center px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-primary/5"
                >
                  Learn More
                </button>

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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Interested in: {selectedCourse?.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-medium text-sm text-gray-700">
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
                  <label htmlFor="email" className="block font-medium text-sm text-gray-700">
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
                  <label htmlFor="phone" className="block font-medium text-sm text-gray-700">
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

                <div>
                  <label htmlFor="interest" className="block font-medium text-sm text-gray-700">
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
                    <option value="UI/UX Design">Environmental Safety</option>
                    <option value="Cybersecurity">Engineering</option>
                    <option value="Cybersecurity">IT</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-medium text-sm text-gray-700">
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
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
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
      )}

    </section>
  );
};
export default page;
