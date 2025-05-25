"use client";
import React, { useEffect, useState } from "react";
import MemberInquiryForm from "./memberInquiryForm";

// --- Types ---
type BoardMember = {
  id: number;
  name: string;
  title: string;
  about: string;
  designation: string;
  // about?: Record<string, string[]>;
  photo: string;
  region: string;
  objectPosition?: string;
};

type StatItemProps = {
  number: number | string;
  label: string;
};

type BoardMemberCardProps = {
  member: BoardMember;
  onClick: () => void;
};

// --- Main Component ---
export default function Page() {
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<BoardMember[]>([]);
  const [regions, setRegions] = useState<string[]>(["All"]);
  const [activeRegion, setActiveRegion] = useState("All");
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(
    null
  );

  const stats = [
    { id: 1, number: 1200, label: "Courses Delivered" },
    { id: 2, number: 85, label: "Corporate Partners" },
    { id: 3, number: "25+", label: "Years of Experience" },
  ];

  const fetchBoardMembers = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/boardMembers/get-board-members"
      );
      const data = await res.json();
      const active = data.filter((member: any) => member.status === true);
      setBoardMembers(active);
      setFilteredMembers(active);

      const uniqueRegions = Array.from(
        new Set(active.map((m: BoardMember) => m.region))
      ) as string[];
      setRegions(["All", ...uniqueRegions]);
    } catch (err) {
      console.error("Failed to fetch board members", err);
    }
  };

  const handleRegionChange = (region: string) => {
    setActiveRegion(region);
    if (region === "All") {
      setFilteredMembers(boardMembers);
    } else {
      setFilteredMembers(boardMembers.filter((m) => m.region === region));
    }
  };

  useEffect(() => {
    fetchBoardMembers();
  }, []);

  return (
    <div className="bg-gray-50 py-12 pt-48 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Our Board Members
          </h1>
          <p className="text-gray-600 max-w-3xl mb-8">
            Meet the experienced professionals leading our organization to
            excellence in professional education and training.
          </p>

          {/* Region Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8 border-b">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => handleRegionChange(region)}
                className={`w-full px-6 py-3 mb-6 font-medium text-lg rounded-lg transition-colors duration-200 ${
                  activeRegion === region
                    ? "bg-blue-600 text-white"
                    : "bg-primary text-white hover:bg-blue-500"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </header>

        {/* Members Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMembers.map((member) => (
            <BoardMemberCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </section>

        {/* Inquiry Form */}
        <div className="p-4">
          <MemberInquiryForm />
        </div>

        {/* Stats */}
        <section className="bg-white p-8 rounded-lg shadow-md mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <StatItem key={stat.id} number={stat.number} label={stat.label} />
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}

// --- Member Card ---
const BoardMemberCard = ({ member, onClick }: BoardMemberCardProps) => (
  <div
    onClick={onClick}
    className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
  >
    <div className="h-64 overflow-hidden">
      <img
        src={`http://localhost:5000${member.photo}`}
        alt={member.name}
        className="w-full h-full object-cover"
        style={{ objectPosition: member.objectPosition || "center" }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
      <p className="text-blue-800 mb-1">{member.designation}</p>
      <p className="text-orange-500 text-sm mb-4">{member.region}</p>
      <p className="text-gray-700 text-sm">{member.about}</p>
    </div>
  </div>
);

// --- Member Modal ---
const MemberModal = ({
  member,
  onClose,
}: {
  member: BoardMember;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-4xl mx-4 relative">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-full overflow-hidden">
          <img
            src={`http://localhost:5000${member.photo}`}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-900">{member.name}</h2>
          <p className="text-blue-800 mb-2">{member.title}</p>
          <p className="text-gray-700">{member.about}</p>
          {/* {member.about && (
            <div className="mt-4">
              {Object.entries(member.about).map(([section, items]) => (
                <div key={section} className="mb-4">
                  <strong className="text-blue-800 block mb-1">
                    {section}
                  </strong>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  </div>
);

// --- Stats Item ---
const StatItem = ({ number, label }: StatItemProps) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-blue-900">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);
