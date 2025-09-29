"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminDashboard } from "./AdminDashboard"; // Import the self-contained component
import { useAuth } from "../../hooks/useAuth";

const DashboardPage = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect if not authenticated
    if (!loading && !user) {
      router.push("/auth/student-login");
    }
  }, [user, loading, router]);

  const handleLogout = () => {
    logout();
    if (user?.role === "admin") {
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

  // Student Dashboard Component
  // const StudentDashboard = () => (
  //   <div className="p-10">
  //     <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {/* Quick Actions */}
  //       <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
  //         <h3 className="text-xl font-semibold mb-4 text-blue-600">
  //           Quick Actions
  //         </h3>
  //         <div className="space-y-3">
  //           <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
  //             View Courses
  //           </button>
  //           <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
  //             Submit Assignment
  //           </button>
  //           <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
  //             Check Grades
  //           </button>
  //         </div>
  //       </div>

  //       {/* Recent Activities */}
  //       <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
  //         <h3 className="text-xl font-semibold mb-4 text-green-600">
  //           Recent Activities
  //         </h3>
  //         <div className="space-y-3">
  //           <div className="p-3 bg-gray-50 rounded">
  //             <p className="text-sm text-gray-600">Assignment submitted</p>
  //             <p className="text-xs text-gray-400">2 hours ago</p>
  //           </div>
  //           <div className="p-3 bg-gray-50 rounded">
  //             <p className="text-sm text-gray-600">Course enrollment</p>
  //             <p className="text-xs text-gray-400">1 day ago</p>
  //           </div>
  //           <div className="p-3 bg-gray-50 rounded">
  //             <p className="text-sm text-gray-600">Grade received</p>
  //             <p className="text-xs text-gray-400">3 days ago</p>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Upcoming Events */}
  //       <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
  //         <h3 className="text-xl font-semibold mb-4 text-orange-600">
  //           Upcoming Events
  //         </h3>
  //         <div className="space-y-3">
  //           <div className="p-3 bg-orange-50 rounded">
  //             <p className="text-sm font-medium">Math Exam</p>
  //             <p className="text-xs text-gray-600">Tomorrow, 10:00 AM</p>
  //           </div>
  //           <div className="p-3 bg-orange-50 rounded">
  //             <p className="text-sm font-medium">Project Deadline</p>
  //             <p className="text-xs text-gray-600">Dec 25, 11:59 PM</p>
  //           </div>
  //           <div className="p-3 bg-orange-50 rounded">
  //             <p className="text-sm font-medium">Science Lab</p>
  //             <p className="text-xs text-gray-600">Dec 28, 2:00 PM</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Statistics */}
  //     <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
  //       <div className="bg-blue-600 text-white rounded-xl p-6">
  //         <h4 className="text-lg font-semibold">Courses Enrolled</h4>
  //         <p className="text-3xl font-bold mt-2">5</p>
  //       </div>
  //       <div className="bg-green-600 text-white rounded-xl p-6">
  //         <h4 className="text-lg font-semibold">Assignments Completed</h4>
  //         <p className="text-3xl font-bold mt-2">12</p>
  //       </div>
  //       <div className="bg-purple-600 text-white rounded-xl p-6">
  //         <h4 className="text-lg font-semibold">Average Grade</h4>
  //         <p className="text-3xl font-bold mt-2">85%</p>
  //       </div>
  //       <div className="bg-orange-600 text-white rounded-xl p-6">
  //         <h4 className="text-lg font-semibold">Attendance</h4>
  //         <p className="text-3xl font-bold mt-2">92%</p>
  //       </div>
  //     </div>
  //   </div>
  // );

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
        {user.role === "admin" ? (
          <AdminDashboard />
        ) : (
          <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Courses</button>
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Submit Assignment</button>
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Check Grades</button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Recent Activities</h3>
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
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Upcoming Events</h3>
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
        )}
      </main>
    </div>
  );
};

export default DashboardPage;