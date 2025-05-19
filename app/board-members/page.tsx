"use client";
import React, { useState } from "react";

type BoardMember = {
  id: number;
  name: string;
  title: string;
  bio: string;
  about?: {
    [sectionTitle: string]: string[];
  };
  imageUrl: string;
  region: string;
  objectPosition?: string;
};

type BoardMemberCardProps = {
  member: BoardMember;
  onClick: () => void;
};

export default function Page() {
  const boardMembers: BoardMember[] = [
    {
      id: 0,
      name: "Roma Arora",
      title: "Country chair For Strategic partnerships and International Education Development",
      bio: "Roma is a skilled office administrator with expertise in managing day-to-day operations, supporting staff, and ensuring seamless workflow.",
      imageUrl: "/images/board-members/romaArora.jpg",
      region: "UK & Europe",
      objectPosition: "0% 10%",
      about: {
        "Key Roles": [
          "Office Administrator: Oversees administrative tasks, maintains organization, and provides support to the team.",
          "Task Management: Prioritizes and manages tasks efficiently to meet deadlines and achieve office goals.",
        ],
        Expertise: [
          "Office Management & Operations",
          "Administrative Support",
          "Time Management & Organization",
          "Communication & Team Collaboration",
        ],
      },
    },
    // {
    //   "id": 1,
    //   "name": "Nufail Naleem",
    //   "title": "Country chair, Administrative management and business network",
    //   "bio": "Nufail Naleem is a seasoned business consultant and strategic development expert with 13 years of experience, specializing in Fortune 500 companies, LSE, and SMEs. He is also an academic and corporate trainer who has mentored over 5000 students.",
    //   "imageUrl": "/images/board-members/NufailNaleem.jpeg",
    //   "region": "Asia",
    //   objectPosition: "0% 10%",
    //   "about": {
    //     "Key Roles": [
    //       "Business Consultant: Advises Fortune 500, LSE-listed, and SME companies on strategy and operations.",
    //       "Academic & Corporate Trainer: Trained over 5000 students in business management and strategic planning.",
    //       "Change Management Specialist: Leads initiatives involving AI adoption and organizational transformation."
    //     ],
    //     "Expertise": [
    //       "Business Consulting & Strategic Development",
    //       "Change Management & AI Integration",
    //       "Corporate Training & Mentorship",
    //       "Financial Analysis & Planning"
    //     ]
    //   }
    // },
    {
      id: 2,
      name: "David Morchiladze",
      title: "Country Chair | International Education Consultant, United Kingdom | Strategic Partner, IQCA Board",
      bio: "David is a seasoned leader in international education with expertise in quality assurance, global partnerships, and strategic planning. He serves as the Country Chair, International Education Consultant, and Strategic Partner on the IQCA Board, driving initiatives that elevate educational standards worldwide.",
      about: {
        "Key Roles": [
          "Country Chair: Represents organizational interests at the national level, fostering partnerships and driving policy changes to align with global education standards.",
          "International Education Consultant: Advises institutions on global expansion and quality improvement, offering insights on market trends and best practices.",
          "Strategic Partner, IQCA Board: Collaborates on long-term strategy, global partnerships, and accreditation processes to enhance educational quality across borders.",
        ],
        "Key Strengths": [
          "Global Strategy & Leadership: Expertise in navigating international education systems and leading impactful initiatives.",
          "Quality Assurance: Guiding institutions through accreditation and quality improvement efforts.",
          "Partnership Development: Building strategic alliances to expand educational reach and impact.",
        ],
      },
      imageUrl: "/images/board-members/DavidMorchiladze.jpg",
      region: "UK",
      objectPosition: "0% 50%",
    },
    {
      id: 3,
      name: "Rudaba Jafry",
      title: "Country Chair for International Business & Education Consultation | Board Member of IQCA Board, UK",
      bio: "Rudaba Jafry is a dynamic leader in international business and education consultation. As Country Chair and Board Member of the IQCA Board, UK, she champions global collaboration, strategic growth, and quality assurance in education.",
      about: {
        "Key Roles": [
          "Country Chair: Leads international education and business initiatives, supporting institutions in global outreach and development.",
          "Board Member of IQCA Board: Contributes to governance, accreditation, and strategic planning to enhance educational quality worldwide.",
        ],
        "Expertise": [
          "Global Education & Business Strategy",
          "Quality Assurance & Accreditation",
          "Leadership & International Collaboration",
        ],
      },
      imageUrl: "/images/board-members/RudabaJafry.jpg",
      region: "Europe",
      objectPosition: "48% 25%",
    },
    {
      id: 4,
      name: "Jonathan Wilson",
      title: "Chief Executive Officer",
      bio: "With over 20 years of experience in professional education and corporate training, Jonathan leads our strategic vision and organizational growth.",
      imageUrl: "/api/placeholder/400/320",
      region: "UK & Europe",
      about: {
        "Key Roles": [
          "Leads strategic planning and growth of the organization.",
          "Oversees partnerships and ensures long-term sustainability.",
        ],
        Expertise: [
          "Leadership & Strategy",
          "Corporate Training",
          "Professional Education Development",
        ],
      },
    },
    {
      id: 5,
      name: "Sarah Chen",
      title: "Chief Operations Officer",
      bio: "Sarah brings extensive expertise in operational excellence and educational program development with a focus on health and safety training.",
      imageUrl: "/api/placeholder/400/320",
      region: "Asia",
      about: {
        "Key Roles": [
          "Manages day-to-day operations across regions.",
          "Ensures quality and efficiency in training delivery.",
        ],
        Expertise: [
          "Operational Management",
          "Program Development",
          "Health & Safety Training",
        ],
      },
    },
    {
      id: 6,
      name: "Dr. Robert Thompson",
      title: "Chief Academic Officer",
      bio: "A former university dean with a PhD in Educational Leadership, Robert ensures our courses meet the highest academic and industry standards.",
      imageUrl: "/api/placeholder/400/320",
      region: "USA & Canada",
      about: {
        "Key Roles": [
          "Oversees curriculum design and accreditation.",
          "Leads research initiatives and faculty development.",
        ],
        Expertise: [
          "Educational Leadership",
          "Curriculum Development",
          "Academic Standards",
        ],
      },
    },
    {
      id: 7,
      name: "Michelle Patel",
      title: "Director of Finance",
      bio: "Michelle's background in financial management and educational institutions helps drive our sustainable growth and financial health.",
      imageUrl: "/api/placeholder/400/320",
      region: "Asia",
      about: {
        "Key Roles": [
          "Manages organizational budgeting and financial planning.",
          "Oversees compliance and reporting procedures.",
        ],
        Expertise: ["Financial Planning", "Budgeting", "Institutional Finance"],
      },
    },
    {
      id: 8,
      name: "David Lawson",
      title: "Director of Environmental Programs",
      bio: "With expertise in environmental safety and compliance, David leads our growing portfolio of environmental certification programs.",
      imageUrl: "/api/placeholder/400/320",
      region: "UK & Europe",
      about: {
        "Key Roles": [
          "Designs and oversees environmental certification programs.",
          "Ensures environmental regulatory compliance.",
        ],
        Expertise: [
          "Environmental Safety",
          "Regulatory Compliance",
          "Sustainability Education",
        ],
      },
    },
    {
      id: 9,
      name: "Dr. Emily Richards",
      title: "Director of Health & Safety",
      bio: "Emily combines her medical background with extensive training experience to develop our industry-leading health and safety curriculum.",
      imageUrl: "/api/placeholder/400/320",
      region: "USA & Canada",
      about: {
        "Key Roles": [
          "Leads development of health & safety curriculum.",
          "Advises on health regulations and emergency protocols.",
        ],
        Expertise: [
          "Public Health",
          "Workplace Safety",
          "Emergency Preparedness",
        ],
      },
    },
    {
      id: 10,
      name: "Kwame Osei",
      title: "Director of African Operations",
      bio: "With a decade of experience in educational development across African nations, Kwame leads our expanding initiatives throughout the continent.",
      imageUrl: "/api/placeholder/400/320",
      region: "USA & Canada",
      about: {
        "Key Roles": [
          "Coordinates educational programs across Africa.",
          "Builds partnerships with local institutions and governments.",
        ],
        Expertise: [
          "International Education",
          "Program Implementation",
          "Stakeholder Engagement",
        ],
      },
    },
    {
      id: 11,
      name: "Maria Rodriguez",
      title: "Caribbean Regional Manager",
      bio: "Maria specializes in developing safety training programs tailored to the specific needs of Caribbean industries and communities.",
      imageUrl: "/api/placeholder/400/320",
      region: "USA & Canada",
      about: {
        "Key Roles": [
          "Develops training programs specific to Caribbean industries.",
          "Supports community-focused educational initiatives.",
        ],
        Expertise: [
          "Regional Training Development",
          "Community Education",
          "Caribbean Industry Compliance",
        ],
      },
    },
  ];

  // Define all available regions
  const regions = [
    "All",
    ...Array.from(new Set(boardMembers.map((m) => m.region))),
  ];

  const stats = [
    { id: 1, number: 1200, label: "Courses Delivered" },
    { id: 2, number: 85, label: "Corporate Partners" },
    { id: 3, number: "25+", label: "Years of Experience" },
  ];
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(
    null
  );
  const filteredMembers =
    activeRegion === "All"
      ? boardMembers
      : boardMembers.filter((m) => m.region === activeRegion);

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

          {/* Region Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8 border-b">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`w-full px-6 py-3 mb-6 font-medium text-lg rounded-lg transition-colors duration-200 ${activeRegion === region
                  ? "bg-blue-600 text-white"
                  : "bg-primary text-white hover:bg-blue-500"
                  }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMembers.map((member) => (
            <BoardMemberCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <StatItem key={stat.id} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
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

// Member Card
const BoardMemberCard = ({ member, onClick }: BoardMemberCardProps) => (
  <div
    onClick={onClick}
    className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
  >
    <div className="h-64 overflow-hidden">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-cover"
        style={{
          objectPosition: member.objectPosition || "center",
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
      <p className="text-blue-800 mb-1">{member.title}</p>
      <p className="text-orange-500 text-sm mb-4">{member.region}</p>
      <p className="text-gray-700 text-sm">{member.bio}</p>
    </div>
  </div>
);

// Modal
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
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-900">{member.name}</h2>
          <p className="text-blue-800 mb-2">{member.title}</p>
          <p className="text-gray-700">{member.bio}</p>

          {member.about && (
            <div className="mt-4">
              {Object.entries(member.about).map(([section, items]) => (
                <div key={section} className="mb-4">
                  <strong className="text-blue-800 block mb-1">
                    {section}
                  </strong>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

// Stat Item
type StatItemProps = {
  number: number | string;
  label: string;
};
const StatItem = ({ number, label }: StatItemProps) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-blue-900">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);
