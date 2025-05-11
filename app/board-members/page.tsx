"use client";
import React, { useState } from "react";

const page = () => {
  const [activeRegion, setActiveRegion] = useState("All");

  const boardMembers = [
    {
      id: 1,
      name: "Jonathan Wilson",
      title: "Chief Executive Officer",
      bio: "With over 20 years of experience in professional education and corporate training, Jonathan leads our strategic vision and organizational growth.",
      imageUrl: "/api/placeholder/400/320",
      region: "UK & Europe",
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Chief Operations Officer",
      bio: "Sarah brings extensive expertise in operational excellence and educational program development with a focus on health and safety training.",
      imageUrl: "/api/placeholder/400/320",
      region: "Asia",
    },
    {
      id: 3,
      name: "Dr. Robert Thompson",
      title: "Chief Academic Officer",
      bio: "A former university dean with a PhD in Educational Leadership, Robert ensures our courses meet the highest academic and industry standards.",
      imageUrl: "/api/placeholder/400/320",
      region: "USA & Canada",
    },
    {
      id: 4,
      name: "Michelle Patel",
      title: "Director of Finance",
      bio: "Michelle's background in financial management and educational institutions helps drive our sustainable growth and financial health.",
      imageUrl: "/api/placeholder/400/320",
      region: "Asia",
    },
    {
      id: 5,
      name: "David Lawson",
      title: "Director of Environmental Programs",
      bio: "With expertise in environmental safety and compliance, David leads our growing portfolio of environmental certification programs.",
      imageUrl: "/api/placeholder/400/320",
      region: "UK & Europe",
    },
    {
      id: 6,
      name: "Dr. Emily Richards",
      title: "Director of Health & Safety",
      bio: "Emily combines her medical background with extensive training experience to develop our industry-leading health and safety curriculum.",
      imageUrl: "/api/placeholder/400/320",
      region: "USA & Canada",
    },
    {
      id: 7,
      name: "Kwame Osei",
      title: "Director of African Operations",
      bio: "With a decade of experience in educational development across African nations, Kwame leads our expanding initiatives throughout the continent.",
      imageUrl: "/api/placeholder/400/320",
      region: "USA & Canada",
    },
    {
      id: 8,
      name: "Maria Rodriguez",
      title: "Caribbean Regional Manager",
      bio: "Maria specializes in developing safety training programs tailored to the specific needs of Caribbean industries and communities.",
      imageUrl: "/api/placeholder/400/320",
      region: "USA & Canada",
    },
  ];

  // Define all available regions
  const regions = ["All", "UK & Europe", "Asia", "USA & Canada"];

  // Filter board members based on selected region
  const filteredMembers =
    activeRegion === "All"
      ? boardMembers
      : boardMembers.filter((member) => member.region === activeRegion);

  // Stats data
  const stats = [
    {
      id: 1,
      number: "500+",
      label: "Certified Professionals",
    },
    {
      id: 2,
      number: "98%",
      label: "Success Rate",
    },
    {
      id: 3,
      number: "50+",
      label: "Expert Instructors",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 pt-48 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Our Board Members
          </h1>
          <p className="text-gray-600 max-w-3xl mb-8">
            Meet the experienced professionals leading our organization to
            excellence in professional education and training.
          </p>

          {/* Regional Tabs */}
          <div className="flex justify-around flex-wrap mb-8 border-b">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-6 py-3 mb-6 font-medium text-lg rounded-lg transition-colors duration-200 ${
                  activeRegion === region
                    ? "bg-blue-600 text-white"
                    : "bg-primary text-white hover:bg-blue-500"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMembers.map((member) => (
            <BoardMemberCard
              key={member.id}
              name={member.name}
              title={member.title}
              bio={member.bio}
              imageUrl={member.imageUrl}
              region={member.region}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <StatItem key={stat.id} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type BoardMemberCardProps = {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  region: string;
};

const BoardMemberCard = ({
  name,
  title,
  bio,
  imageUrl,
  region,
}: BoardMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-64 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900">{name}</h3>
        <p className="text-blue-800 mb-1">{title}</p>
        <p className="text-orange-500 text-sm mb-4">{region}</p>
        <p className="text-gray-700 text-sm">{bio}</p>
      </div>
    </div>
  );
};

type StatItemProps = {
  number: number | string;
  label: string;
};

const StatItem = ({ number, label }: StatItemProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-900">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default page;
