import React, { useState } from "react";

const regions = ["North", "South", "East", "West", "Central"];

const MemberInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    about: "",
    photo: "",
    keyRolesAndExpertise: "",
    region: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("designation", formData.designation);
    data.append("about", formData.about);
    data.append("keyRolesAndExpertise", formData.keyRolesAndExpertise);
    data.append("region", formData.region);
    if ((e.target as any).photo.files[0]) {
      data.append("photo", (e.target as any).photo.files[0]);
    }

    try {
      const response = await fetch(
        "https://iqca-backend.onrender.com/boardMembers/board-member-inquiry",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      alert("Inquiry submitted successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Board Member Inquiry
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          required
          value={formData.designation}
          onChange={handleChange}
          className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <textarea
          name="about"
          placeholder="About"
          required
          value={formData.about}
          onChange={handleChange}
          className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          required
          className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          type="text"
          name="keyRolesAndExpertise"
          placeholder="Key Roles and Expertise (comma separated)"
          value={formData.keyRolesAndExpertise}
          onChange={handleChange}
          className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleChange}
          required
          placeholder="Enter your region or country"
          className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MemberInquiryForm;
