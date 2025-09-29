import React, { useState } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";

const MemberInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    about: "",
    photo: null as File | null,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 2) newErrors.name = "Name is too short.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (formData.phone.trim().length < 7)
      newErrors.phone = "Phone number is too short.";
    if (formData.country.trim().length < 2)
      newErrors.country = "Country name is too short.";
    if (formData.about.trim().length < 10)
      newErrors.about = "About must be at least 10 characters.";
    if (!formData.photo) {
      newErrors.photo = "Please upload a photo.";
    } else if (
      !["image/jpeg", "image/png", "image/jpg"].includes(formData.photo.type)
    ) {
      newErrors.photo = "Photo must be an image (jpeg, jpg, png).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    if (!validate()) return;

    setLoading(true);
    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("country", formData.country);
    data.append("about", formData.about);
    if (formData.photo) data.append("photo", formData.photo);

    try {
      const response = await fetch(
        "https://iqca-backend.onrender.com/boardMembers/board-member-inquiry",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");
      await response.json();
      toast.success("Request accepted successfully!");
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        about: "",
        photo: null,
      });
      setErrors({});
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to fetch board members.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Become a Sponsor
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {[
          { name: "name", type: "text", placeholder: "Name" },
          { name: "email", type: "email", placeholder: "Email ID" },
          { name: "phone", type: "text", placeholder: "Contact No" },
          {
            name: "country",
            type: "text",
            placeholder: "Enter your country",
          },
        ].map(({ name, type, placeholder }) => (
          <div key={name}>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              required
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name]}</p>
            )}
          </div>
        ))}

        <div>
          <textarea
            name="about"
            placeholder="About"
            required
            value={formData.about}
            onChange={handleChange}
            className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.about && (
            <p className="text-red-500 text-sm">{errors.about}</p>
          )}
        </div>

        <div>
          <input
            type="file"
            name="photo"
            accept="image/*"
            required
            onChange={handleChange}
            className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          {errors.photo && (
            <p className="text-red-500 text-sm">{errors.photo}</p>
          )}
        </div>

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
