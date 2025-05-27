import React, { useState } from "react";
import Loading from "./Loading";

const MemberInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    about: "",
    linkedin: "",
    photo: null as File | null,
    keyRolesAndExpertise: "",
    region: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "photo" && files?.length) {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();

    // Normalize LinkedIn URL
    const normalizedLinkedin = formData.linkedin.startsWith("http")
      ? formData.linkedin
      : `https://${formData.linkedin}`;

    data.append("name", formData.name);
    data.append("designation", formData.designation);
    data.append("about", formData.about);
    data.append("keyRolesAndExpertise", formData.keyRolesAndExpertise);
    data.append("region", formData.region);
    data.append("email", formData.email);
    data.append("linkedin", normalizedLinkedin);

    // Append photo only if available
    const photoInput = (e.target as any).photo;
    if (photoInput && photoInput.files && photoInput.files[0]) {
      data.append("photo", photoInput.files[0]);
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
      await response.json();
      alert("Inquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        designation: "",
        about: "",
        linkedin: "",
        photo: null,
        keyRolesAndExpertise: "",
        region: "",
      });
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to submit the form.");
    } finally {
      setLoading(false);
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
          type="email"
          name="email"
          placeholder="Email ID"
          required
          value={formData.email}
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
          name="linkedin" // ✅ corrected
          placeholder="LinkedIn profile link"
          required
          value={formData.linkedin}
          onChange={handleChange}
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
        <input
          type="file"
          name="photo"
          accept="image/*"
          required
          onChange={handleChange}
          className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center text-white bg-primary hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loading />
              <span>Submitting...</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default MemberInquiryForm;
