import React, { useState } from "react";

const MagazineCard = ({ magazine }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer transform transition-transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={magazine.coverImage}
            alt={magazine.title}
            className="w-full h-100 object-cover"
          />

          {/* Hover overlay with publication date */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {magazine.publishMonth} - {magazine.publishYear}
              </h3>
              <p className="text-white text-sm opacity-90">Click to view PDF</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {magazine.title}
          </h3>
          <p className="text-gray-600 text-sm">Issue: {magazine.issue}</p>
        </div>
      </div>
    </div>
  );
};

export default MagazineCard;
