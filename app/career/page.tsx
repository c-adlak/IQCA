"use client";
import React, { useState } from "react";

import { Briefcase, FileText, User, Mail, Send, Link } from "lucide-react";

const CareerPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    resume: "", // now a string, not a File
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");
    setError("");
    try {
      const payload = {
        name: form.name,
        email: form.email,
        position: form.position,
        resume: form.resume, // sending as text
        message: form.message,
      };

      const response = await fetch("http://localhost:5000/career/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Submission failed");
      }
      setSuccess("Application submitted successfully!");
      setForm({ name: "", email: "", position: "", resume: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto bg-white/90 p-10 rounded-3xl shadow-2xl border border-blue-100 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-900 rounded-full p-4 shadow-lg">
          <Briefcase className="text-white w-10 h-10" />
        </div>
        <h1 className="text-4xl font-extrabold mb-2 text-blue-900 text-center mt-6">
          Career Application
        </h1>
        <p className="mb-8 text-gray-600 text-center text-lg">
          Apply for jobs or internships, paste your Google Drive resume link,
          and manage your application.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="text-gray-700 mb-1 font-semibold flex items-center gap-2">
                <User className="w-4 h-4 text-blue-700" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full border-2 border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-blue-50/50"
              />
            </div>
            <div className="relative">
              <label className="text-gray-700 mb-1 font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-700" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="w-full border-2 border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-blue-50/50"
              />
            </div>
            <div className="relative md:col-span-2">
              <label className="text-gray-700 mb-1 font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-700" />
                Position Applied For
              </label>
              <input
                type="text"
                name="position"
                value={form.position}
                onChange={handleChange}
                required
                placeholder="e.g. Software Engineer"
                className="w-full border-2 border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-blue-50/50"
              />
            </div>
            <div className="relative md:col-span-2">
              <label className="text-gray-700 mb-1 font-semibold flex items-center gap-2">
                <Link className="w-4 h-4 text-blue-700" />
                Resume URL (Google Drive)
              </label>
              <input
                type="url"
                name="resume"
                value={form.resume}
                onChange={handleChange}
                required
                placeholder="Paste your Google Drive resume link here"
                className="w-full border-2 border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-blue-50/50"
              />
            </div>
            <div className="relative md:col-span-2">
              <label className="text-gray-700 mb-1 font-semibold flex items-center gap-2">
                <Send className="w-4 h-4 text-blue-700" />
                Message (optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about yourself or your motivation..."
                className="w-full border-2 border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-blue-50/50"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 mt-2"
          >
            {submitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <Briefcase className="w-5 h-5" />
                Submit Application
              </>
            )}
          </button>
          {success && (
            <p className="text-green-600 mt-4 text-center font-semibold">
              {success}
            </p>
          )}
          {error && (
            <p className="text-red-600 mt-4 text-center font-semibold">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CareerPage;
