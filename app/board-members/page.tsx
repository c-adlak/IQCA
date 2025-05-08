import React from "react";

const page = () => {
  const boardMembers = [
    {
      id: 1,
      name: "Jonathan Wilson",
      title: "Chief Executive Officer",
      bio: "With over 20 years of experience in professional education and corporate training, Jonathan leads our strategic vision and organizational growth.",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Chief Operations Officer",
      bio: "Sarah brings extensive expertise in operational excellence and educational program development with a focus on health and safety training.",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 3,
      name: "Dr. Robert Thompson",
      title: "Chief Academic Officer",
      bio: "A former university dean with a PhD in Educational Leadership, Robert ensures our courses meet the highest academic and industry standards.",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 4,
      name: "Michelle Patel",
      title: "Director of Finance",
      bio: "Michelle's background in financial management and educational institutions helps drive our sustainable growth and financial health.",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 5,
      name: "David Lawson",
      title: "Director of Environmental Programs",
      bio: "With expertise in environmental safety and compliance, David leads our growing portfolio of environmental certification programs.",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 6,
      name: "Dr. Emily Richards",
      title: "Director of Health & Safety",
      bio: "Emily combines her medical background with extensive training experience to develop our industry-leading health and safety curriculum.",
      imageUrl: "/api/placeholder/400/320",
    },
  ];

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
          <p className="text-gray-600 max-w-3xl">
            Meet the experienced professionals leading our organization to
            excellence in professional education and training.
          </p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {boardMembers.map((member) => (
            <BoardMemberCard
              key={member.id}
              name={member.name}
              title={member.title}
              bio={member.bio}
              imageUrl={member.imageUrl}
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
};
const BoardMemberCard = ({
  name,
  title,
  bio,
  imageUrl,
}: BoardMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-64 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900">{name}</h3>
        <p className="text-blue-800 mb-4">{title}</p>
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
