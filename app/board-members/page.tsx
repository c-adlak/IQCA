"use client";
import React, { useEffect, useState } from "react";
import MemberInquiryForm from "./memberInquiryForm";
import MemberModal from "./MembersModal";
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://iqca-backend.onrender.com";
// --- Types ---
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
  status: boolean;
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
  const [loading, setLoading] = useState(true);
  const stats = [
    { id: 1, number: 1200, label: "Courses Delivered" },
    { id: 2, number: 85, label: "Corporate Partners" },
    { id: 3, number: "25+", label: "Years of Experience" },
  ];

  const fetchBoardMembers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await fetch(
        "http://localhost:5000/boardMembers/board-members",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      const active = data.filter(
        (member: BoardMember) => member.status === true
      );
      const activeWithRoles = active.map((member: BoardMember) => ({
        ...member,
        keyRolesAndExpertise: member.keyRolesAndExpertise ?? [],
      }));
      setBoardMembers(activeWithRoles);
      setFilteredMembers(activeWithRoles);

      const uniqueRegions = Array.from(
        new Set(activeWithRoles.map((m: BoardMember) => m.region))
      ) as string[];
      setRegions(["All", ...uniqueRegions]);
      setRegions(["All", ...uniqueRegions]);
    } catch (err) {
      console.error("Failed to fetch board members", err);
    } finally {
      setLoading(false);
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
    <div className="bg-gray-50 py-12 pt-8 px-4">
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
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-blue-800 text-lg font-medium">
                Loading members...
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </header>

        {/* Members Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMembers?.map((member) => (
            <BoardMemberCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </section>

        <div className="p-4">
          <MemberInquiryForm />
        </div>

        <section className="bg-white p-8 rounded-lg shadow-md mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <StatItem key={stat.id} number={stat.number} label={stat.label} />
            ))}
          </div>
        </section>
      </div>

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
    <div className="overflow-hidden mt-6 ">
      <img
        src={
          member.photo.startsWith("http")
            ? member.photo
            : `${API_BASE_URL}${member.photo}`
        }
        alt={member.name}
        className="w-full h-48 object-contain rounded-md"
        style={{
          objectPosition: member.objectPosition || "center",
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
      <p className="text-blue-800 mb-1">{member.designation}</p>
      <p className="text-orange-500 text-sm mb-4">{member.region}</p>
      <p className="text-gray-700 max-h-40 overflow-auto text-sm custom-scroll">
        {member.about}
      </p>
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
