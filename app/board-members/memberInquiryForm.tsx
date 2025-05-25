import React, { useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}

const regions = ["North", "South", "East", "West", "Central"];

const MemberInquiryForm: React.FC<Props> = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    about: "",
    photo: "",
    keyRolesAndExpertise: "",
    region: "North",
  });

  if (!show) return null;

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
        "http://localhost:5000/boardMembers/board-member-inquiry",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      alert("Inquiry submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add Member
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                required
                value={formData.designation}
                onChange={handleChange}
                className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
              <textarea
                name="about"
                placeholder="About"
                required
                value={formData.about}
                onChange={handleChange}
                className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
              <input
                type="file"
                name="photo"
                accept="image/*"
                required
                className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
              <input
                type="text"
                name="keyRolesAndExpertise"
                placeholder="Key Roles and Expertise (comma separated)"
                value={formData.keyRolesAndExpertise}
                onChange={handleChange}
                className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              >
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberInquiryForm;
