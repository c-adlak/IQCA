"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface User {
  id: string;
  username: string;
  role: "admin" | "student";
}

type BoardMember = {
  _id: string;
  name: string;
  photo: string;
  designation: string;
  about: string;
  region: string;
  keyRolesAndExpertise: string[];
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://iqca-backend.onrender.com";

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [boardLoading, setBoardLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/auth/student-login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);

      // If admin, fetch board members
      if (parsedUser.role === "admin") {
        getBoardMembers();
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }, [router]);
  const getBoardMembers = async () => {
    setBoardLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${API_BASE_URL}/boardMembers/get-board-members`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        handleLogout();
        return;
      }

      const data = await response.json();
      setBoardMembers(data);
    } catch (error) {
      console.error("Error fetching board members:", error);
      toast.error("Failed to fetch board members.");
    } finally {
      setBoardLoading(false);
    }
  };

  const handleAccept = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${API_BASE_URL}/boardMembers/accept-request/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (response.ok) {
        toast.success("Request accepted successfully!");
        getBoardMembers();
      } else {
        toast.error("Failed to accept the request.");
      }
    } catch (err) {
      console.error("Accept error:", err);
      toast.error("An error occurred while accepting the request.");
    }
  };

  const handleReject = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${API_BASE_URL}/boardMembers/reject-request/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (response.ok) {
        toast.success("Request rejected successfully!");
        getBoardMembers();
      } else {
        toast.error("Failed to reject the request.");
      }
    } catch (err) {
      console.error("Reject error:", err);
      toast.error("An error occurred while rejecting the request.");
    }
  };

  const handleLogout = () => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    if (parsedUser?.role === "admin") {
      router.push("/auth/admin-login");
    } else {
      router.push("/auth/student-login");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // If no user, redirect (this shouldn't happen due to useEffect, but safety check)
  if (!user) {
    return null;
  }

  // Admin Dashboard
  const AdminDashboard = () => (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard - Board Members
      </h1>
      {boardLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-blue-800 text-lg font-medium">
            Loading members...
          </p>
        </div>
      ) : boardMembers.length === 0 ? (
        <h2 className="text-center text-gray-600">
          No requests for board members
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boardMembers.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <img
                src={
                  member.photo.startsWith("http")
                    ? member.photo
                    : `${API_BASE_URL}${member.photo}`
                }
                alt={member.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.designation}</p>
              <div className="mt-2 text-gray-700 max-h-32 overflow-auto pr-2 custom-scroll">
                {member.about}
              </div>
              <div className="mt-2">
                <strong>Region:</strong> {member.region}
              </div>
              <div className="mt-2">
                <strong>Key Roles:</strong>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {member.keyRolesAndExpertise.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleAccept(member._id)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(member._id)}
                  className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Student Dashboard
  const StudentDashboard = () => (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              View Courses
            </button>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Submit Assignment
            </button>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
              Check Grades
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-green-600">
            Recent Activities
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Assignment submitted</p>
              <p className="text-xs text-gray-400">2 hours ago</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Course enrollment</p>
              <p className="text-xs text-gray-400">1 day ago</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Grade received</p>
              <p className="text-xs text-gray-400">3 days ago</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-orange-600">
            Upcoming Events
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded">
              <p className="text-sm font-medium">Math Exam</p>
              <p className="text-xs text-gray-600">Tomorrow, 10:00 AM</p>
            </div>
            <div className="p-3 bg-orange-50 rounded">
              <p className="text-sm font-medium">Project Deadline</p>
              <p className="text-xs text-gray-600">Dec 25, 11:59 PM</p>
            </div>
            <div className="p-3 bg-orange-50 rounded">
              <p className="text-sm font-medium">Science Lab</p>
              <p className="text-xs text-gray-600">Dec 28, 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-600 text-white rounded-xl p-6">
          <h4 className="text-lg font-semibold">Courses Enrolled</h4>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="bg-green-600 text-white rounded-xl p-6">
          <h4 className="text-lg font-semibold">Assignments Completed</h4>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-purple-600 text-white rounded-xl p-6">
          <h4 className="text-lg font-semibold">Average Grade</h4>
          <p className="text-3xl font-bold mt-2">85%</p>
        </div>
        <div className="bg-orange-600 text-white rounded-xl p-6">
          <h4 className="text-lg font-semibold">Attendance</h4>
          <p className="text-3xl font-bold mt-2">92%</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                {user.role === "admin" ? "Admin Panel" : "Student Portal"}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === "admin"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {user?.role?.toUpperCase()}
                </span>
                <span className="text-gray-700">Welcome, {user.username}!</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main>
        {user.role === "admin" ? <AdminDashboard /> : <StudentDashboard />}
      </main>
    </div>
  );
};

export default DashboardPage;
