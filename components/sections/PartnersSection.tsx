"use client";
import { useState, useEffect, useRef } from "react";

const CompanyCarousel = () => {
  const [position, setPosition] = useState(0);
  const carouselRef = useRef(null);

  // Company logos data
  const companies = [
    { name: "IBM", icon: "○", color: "text-blue-800" },
    { name: "HSBC", icon: "🏛", color: "text-blue-800" },
    { name: "Accenture", icon: "📊", color: "text-blue-800" },
    { name: "Microsoft", icon: "⊞", color: "text-blue-800" },
    { name: "Amazon", icon: "ⓐ", color: "text-blue-800" },
    // Duplicate the items to create a seamless loop
    { name: "IBM", icon: "○", color: "text-blue-800" },
    { name: "HSBC", icon: "🏛", color: "text-blue-800" },
    { name: "Accenture", icon: "📊", color: "text-blue-800" },
    { name: "Microsoft", icon: "⊞", color: "text-blue-800" },
    { name: "Amazon", icon: "ⓐ", color: "text-blue-800" },
    { name: "IBM", icon: "○", color: "text-blue-800" },
    { name: "HSBC", icon: "🏛", color: "text-blue-800" },
    { name: "Accenture", icon: "📊", color: "text-blue-800" },
    { name: "Microsoft", icon: "⊞", color: "text-blue-800" },
    { name: "Amazon", icon: "ⓐ", color: "text-blue-800" },
  ];

  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPos) => {
        // Reset position when we've scrolled far enough
        if (prevPos <= -50) {
          return 0;
        }
        return prevPos - 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Our Trusted Partners
        </h2>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-24 items-center space-x-16 whitespace-nowrap"
            style={{ transform: `translateX(${position}%)` }}
            ref={carouselRef}
          >
            {companies.map((company, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-3">
                  <span className={`text-3xl ${company.color}`}>
                    {company.icon}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{company.name}</p>
              </div>
            ))}
          </div>

          {/* Gradient overlay on edges */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
