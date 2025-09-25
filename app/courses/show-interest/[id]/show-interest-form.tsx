"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ShowInterestForm({ courseTitle }: { courseTitle: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: courseTitle || "",
    message: "",
    newsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mbloakeg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          newsletter: formData.newsletter ? "Yes" : "No",
        }),
      });

      if (response.ok) {
        toast.success("Thank you for your inquiry!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
          newsletter: false,
        });
      } else {
        toast.error("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-medium text-sm text-gray-700">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-sm text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block font-medium text-sm text-gray-700">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-sm text-gray-700">Your Message</label>
          <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div className="flex items-center">
          <input id="newsletter" name="newsletter" type="checkbox" checked={formData.newsletter} onChange={handleCheckboxChange} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
          <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">Subscribe to our newsletter</label>
        </div>
        <div>
          <button type="submit" className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">Submit</button>
        </div>
      </form>
    </div>
  );
}


