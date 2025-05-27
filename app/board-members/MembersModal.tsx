import React, { useState } from "react";
type BoardMember = {
  id: number;
  name: string;
  title: string;
  about: string;
  designation: string;
  photo: string;
  region: string;
  objectPosition?: string;
  keyRolesAndExpertise: string[];
};
const MemberModal = ({
  member,
  onClose,
}: {
  member: BoardMember;
  onClose: () => void;
}) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  const MAX_LINES = 5;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-4xl h-[90vh] mx-4 relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="h-64 md:h-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src={`https://iqca-backend.onrender.com${member.photo}`}
              alt={member.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 overflow-y-auto h-full">
            <h2 className="text-2xl mt-8 font-bold text-blue-900">
              {member.name}
            </h2>

            <p className="text-blue-800 font-semibold mb-1">
              {`Designation: ${member.designation}`}
            </p>

            {member.title && (
              <p className="text-blue-700 mb-1">{member.title}</p>
            )}

            <p className="text-gray-600 mb-3">Region: {member.region}</p>

            <div className="text-gray-700 text-sm relative mb-4">
              <div
                className={`${!showFullText ? `line-clamp-${MAX_LINES}` : ""}`}
              >
                {member.about}
              </div>

              {member.about && member.about.split(" ").length > 40 && (
                <button
                  onClick={toggleText}
                  className="mt-2 text-blue-600 hover:underline text-sm"
                >
                  {showFullText ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            {member.keyRolesAndExpertise?.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Key Roles & Expertise
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {member.keyRolesAndExpertise.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
