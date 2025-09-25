export const courses = [
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
      "https://images.pexels.com/photos/4254890/pexels-photo-4254890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 9,
    title: "Solar Energy Systems for Civil Engineers",
    description:
      "Hands-on CPD-accredited training for civil engineers in solar PV systems, including installation, grid integration, and NABCEP-aligned modules for green building readiness.",
    category: "engineering",
    duration: "6-8 Weeks",
    image:
      "https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 10,
    title: "Cyber Security Fundamentals",
    description:
      "CPD-accredited course on network security, ethical hacking, threat analysis, and regulatory compliance to prepare IT professionals to combat modern cyber threats.",
    category: "it",
    duration: "8 Weeks",
    image:
      "https://images.pexels.com/photos/5380658/pexels-photo-5380658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function getCourseById(id) {
  const numericId = Number(id);
  return courses.find((c) => c.id === numericId) || null;
}

