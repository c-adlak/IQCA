"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

type BoardMember = {
  phone: any;
  country: any;
  _id: string;
  name: string;
  photo: string;
  designation: string;
  about: string;
  region: string;
  keyRolesAndExpertise: string[];
};

type Course = {
  _id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  image?: string;
};

type EventItem = {
  _id: string;
  name: string;
  description: string;
  date: string;
  image?: string;
  pdf?: string;
};

type CareerApplication = {
  _id: string;
  name: string;
  email: string;
  position: string;
  resume: string; // URL
  message?: string;
  status: "pending" | "reviewed" | "accepted" | "rejected";
  createdAt?: string;
};

const API_BASE_URL = "https://iqca-backend.onrender.com";
// "http://localhost:5000" || "https://iqca-backend.onrender.com";

export const AdminDashboard = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState<
    "members" | "courses" | "events" | "career"
  >("members");

  // Board Members state
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [boardLoading, setBoardLoading] = useState(false);

  // Courses state
  const [courses, setCourses] = useState<Course[]>([]);
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [courseForm, setCourseForm] = useState<{
    title: string;
    description: string;
    category: string;
    duration: string;
    imageFile: File | null;
  }>({
    title: "",
    description: "",
    category: "",
    duration: "",
    imageFile: null,
  });
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);

  // Events state
  const [events, setEvents] = useState<EventItem[]>([]);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [eventForm, setEventForm] = useState<{
    name: string;
    date: string;
    imageFile: File | null;
    pdfFile: string;
  }>({ name: "", date: "", imageFile: null, pdfFile: "" });
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  // Career Applications state
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [applicationsLoading, setApplicationsLoading] = useState(false);

  // Load data when tab changes
  useEffect(() => {
    if (activeTab === "members") {
      getBoardMembers();
    } else if (activeTab === "courses") {
      getCourses();
    } else if (activeTab === "events") {
      getEvents();
    } else if (activeTab === "career") {
      getCareerApplications();
    }
  }, [activeTab]);

  // Load initial data
  useEffect(() => {
    getBoardMembers();
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/auth/admin-login");
  };

  // Board Members handlers
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

  // Courses handlers
  const getCourses = async () => {
    setCoursesLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 401) {
        handleLogout();
        return;
      }
      const data = await res.json();
      setCourses(Array.isArray(data) ? data : data.courses || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
      toast.error("Failed to fetch courses.");
    } finally {
      setCoursesLoading(false);
    }
  };

  const submitCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", courseForm.title);
      formData.append("description", courseForm.description);
      formData.append("category", courseForm.category);
      formData.append("duration", courseForm.duration);
      if (courseForm.imageFile) formData.append("image", courseForm.imageFile);

      const url = editingCourseId
        ? `${API_BASE_URL}/courses/${editingCourseId}`
        : `${API_BASE_URL}/courses`;
      const method = editingCourseId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.status === 401) {
        handleLogout();
        return;
      }

      if (!res.ok) throw new Error("Course save failed");
      toast.success(editingCourseId ? "Course updated" : "Course created");
      setCourseForm({
        title: "",
        description: "",
        category: "",
        duration: "",
        imageFile: null,
      });
      setEditingCourseId(null);
      getCourses();
    } catch (err) {
      console.error("Error saving course:", err);
      toast.error("Failed to save course.");
    }
  };

  const editCourse = (c: Course) => {
    setEditingCourseId(c._id);
    setCourseForm({
      title: c.title || "",
      description: c.description || "",
      category: c.category || "",
      duration: c.duration || "",
      imageFile: null,
    });
  };

  const deleteCourse = async (id: string) => {
    if (!confirm("Delete this course?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/courses/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 401) {
        handleLogout();
        return;
      }
      if (!res.ok) throw new Error("Delete failed");
      toast.success("Course deleted");
      getCourses();
    } catch (err) {
      console.error("Error deleting course:", err);
      toast.error("Failed to delete course.");
    }
  };

  // Events handlers
  const getEvents = async () => {
    setEventsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/events`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 401) {
        handleLogout();
        return;
      }
      const data = await res.json();
      setEvents(Array.isArray(data) ? data : data.events || []);
    } catch (err) {
      console.error("Error fetching events:", err);
      toast.error("Failed to fetch events.");
    } finally {
      setEventsLoading(false);
    }
  };

  const submitEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", eventForm.name);
      formData.append("date", eventForm.date);
      if (eventForm.imageFile) formData.append("image", eventForm.imageFile);
      formData.append("pdf", eventForm.pdfFile);

      const url = editingEventId
        ? `${API_BASE_URL}/events/${editingEventId}`
        : `${API_BASE_URL}/events`;
      const method = editingEventId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.status === 401) {
        handleLogout();
        return;
      }

      if (!res.ok) throw new Error("Event save failed");

      toast.success(editingEventId ? "Event updated" : "Event created");

      setEventForm({ name: "", date: "", imageFile: null, pdfFile: "" });
      setEditingEventId(null);
      getEvents();
    } catch (err) {
      console.error("Error saving event:", err);
      toast.error("Failed to save event.");
    }
  };
  const editEvent = (ev: EventItem) => {
    setEditingEventId(ev._id);
    setEventForm({
      name: ev.name || "",
      date: ev.date ? ev.date.substring(0, 10) : "",
      imageFile: null,
      pdfFile: ev.pdf || "",
    });
  };

  const deleteEvent = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 401) {
        handleLogout();
        return;
      }
      if (!res.ok) throw new Error("Delete failed");
      toast.success("Event deleted");
      getEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
      toast.error("Failed to delete event.");
    }
  };

  // Career Applications handlers
  const getCareerApplications = async () => {
    setApplicationsLoading(true);
    try {
      const res = await fetch(
        "https://iqca-backend.onrender.com/career/applications",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch applications");
      const data = await res.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching applications:", err);
      toast.error("Failed to fetch applications.");
    } finally {
      setApplicationsLoading(false);
    }
  };

  const updateApplicationStatus = async (
    id: string,
    status: "pending" | "reviewed" | "accepted" | "rejected"
  ) => {
    try {
      const res = await fetch(
        `https://iqca-backend.onrender.com/career/applications/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );
      if (!res.ok) throw new Error("Failed to update status");
      toast.success("Status updated");
      getCareerApplications();
    } catch (err) {
      console.error("Error updating status:", err);
      toast.error("Failed to update status.");
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm("Delete this application?")) return;
    try {
      const res = await fetch(
        `https://iqca-backend.onrender.com/career/applications/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete application");
      toast.success("Application deleted");
      getCareerApplications();
    } catch (err) {
      console.error("Error deleting application:", err);
      toast.error("Failed to delete application.");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="mb-6 flex gap-2">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "members" ? "bg-black text-white" : "border"
          }`}
          onClick={() => setActiveTab("members")}
        >
          Board Members
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "courses" ? "bg-black text-white" : "border"
          }`}
          onClick={() => setActiveTab("courses")}
        >
          Courses
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "events" ? "bg-black text-white" : "border"
          }`}
          onClick={() => setActiveTab("events")}
        >
          Magazine
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "career" ? "bg-black text-white" : "border"
          }`}
          onClick={() => setActiveTab("career")}
        >
          Career
        </button>
      </div>

      {activeTab === "members" && (
        <div>
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
                  key={member?._id}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                >
                  <img
                    src={
                      member?.photo?.startsWith("http")
                        ? member.photo
                        : member?.photo
                        ? `${API_BASE_URL}${member.photo}`
                        : "/default-avatar.png" // fallback image
                    }
                    alt={member?.name || "Member"}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold">
                    {member?.name || "Unnamed"}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {member?.designation || "No designation"}
                  </p>
                  {member?.about && (
                    <div className="mt-2 text-gray-700 max-h-32 overflow-auto pr-2 custom-scroll">
                      {member.about}
                    </div>
                  )}
                  {member?.region && (
                    <div className="mt-2">
                      <strong>Region:</strong> {member.region}
                    </div>
                  )}
                  {member?.country && (
                    <div className="mt-2">
                      <strong>Region:</strong> {member.country}
                    </div>
                  )}
                  {member?.phone && (
                    <div className="mt-2">
                      <strong>Region:</strong> {member.phone}
                    </div>
                  )}
                  {member?.keyRolesAndExpertise?.length > 0 && (
                    <div className="mt-2">
                      <strong>Key Roles:</strong>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {member.keyRolesAndExpertise.map((role, index) => (
                          <li key={index}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => handleAccept(member?._id)}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(member?._id)}
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
      )}

      {activeTab === "courses" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {editingCourseId ? "Edit Course" : "Create Course"}
          </h2>
          <form
            className="bg-white border rounded-xl p-6 mb-8"
            onSubmit={submitCourse}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border rounded px-3 py-2"
                placeholder="Title"
                value={courseForm.title}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, title: e.target.value })
                }
                required
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Category"
                value={courseForm.category}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, category: e.target.value })
                }
                required
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Duration"
                value={courseForm.duration}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, duration: e.target.value })
                }
                required
              />
              <input
                type="file"
                accept="image/*"
                className="border rounded px-3 py-2"
                onChange={(e) =>
                  setCourseForm({
                    ...courseForm,
                    imageFile: e.target.files?.[0] || null,
                  })
                }
              />
              <textarea
                className="border rounded px-3 py-2 md:col-span-2"
                placeholder="Description"
                value={courseForm.description}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, description: e.target.value })
                }
                required
              />
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded"
              >
                {editingCourseId ? "Update" : "Create"}
              </button>
              {editingCourseId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingCourseId(null);
                    setCourseForm({
                      title: "",
                      description: "",
                      category: "",
                      duration: "",
                      imageFile: null,
                    });
                  }}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {coursesLoading ? (
            <p>Loading courses...</p>
          ) : courses.length === 0 ? (
            <p>No courses found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((c) => (
                <div
                  key={c._id}
                  className="bg-white rounded-xl shadow p-4 border"
                >
                  {c.image && (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                  )}
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-600">
                    {c.category} • {c.duration}
                  </p>
                  <p className="mt-2 text-sm text-gray-700 max-h-24 overflow-auto">
                    {c.description}
                  </p>
                  <div className="mt-4 flex gap-3">
                    {/* <button className="px-3 py-1 border rounded" onClick={() => editCourse(c)}>Edit</button> */}
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded"
                      onClick={() => deleteCourse(c._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "events" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {editingEventId ? "Edit Event" : "Create Event"}
          </h2>
          <form
            className="bg-white border rounded-xl p-6 mb-8"
            onSubmit={submitEvent}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border rounded px-3 py-2"
                placeholder="Name"
                value={eventForm.name}
                onChange={(e) =>
                  setEventForm({ ...eventForm, name: e.target.value })
                }
                required
              />
              <input
                type="date"
                className="border rounded px-3 py-2"
                value={eventForm.date}
                onChange={(e) =>
                  setEventForm({ ...eventForm, date: e.target.value })
                }
                required
              />
              <input
                type="file"
                accept="image/*"
                className="border rounded px-3 py-2"
                onChange={(e) =>
                  setEventForm({
                    ...eventForm,
                    imageFile: e.target.files?.[0] || null,
                  })
                }
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="PDF URL"
                value={eventForm.pdfFile || ""}
                onChange={(e) =>
                  setEventForm({ ...eventForm, pdfFile: e.target.value })
                }
              />
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded"
              >
                {editingEventId ? "Update" : "Create"}
              </button>
              {editingEventId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingEventId(null);
                    setEventForm({
                      name: "",
                      date: "",
                      imageFile: null,
                      pdfFile: "",
                    });
                  }}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {eventsLoading ? (
            <p>Loading events...</p>
          ) : events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((ev) => (
                <div
                  key={ev._id}
                  className="bg-white rounded-xl shadow p-4 border"
                >
                  {ev.image && (
                    <img
                      src={ev.image}
                      alt={ev.name}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                  )}
                  <h3 className="text-lg font-semibold">{ev.name}</h3>
                  <p className="text-sm text-gray-600">
                    {ev.date ? new Date(ev.date).toLocaleDateString() : ""}
                  </p>
                  <p className="mt-2 text-sm text-gray-700 max-h-24 overflow-auto">
                    {ev.description}
                  </p>
                  <div className="mt-4 flex gap-3">
                    {/* <button className="px-3 py-1 border rounded" onClick={() => editEvent(ev)}>Edit</button> */}
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded"
                      onClick={() => deleteEvent(ev._id)}
                    >
                      Delete
                    </button>
                    {ev.pdf && (
                      <a
                        className="px-3 py-1 border rounded"
                        href={ev.pdf}
                        target="_blank"
                        rel="noreferrer"
                      >
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "career" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Career Applications</h2>
          {applicationsLoading ? (
            <p>Loading applications...</p>
          ) : applications.length === 0 ? (
            <p>No applications found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {applications.map((app) => (
                <div
                  key={app._id}
                  className="bg-white rounded-xl shadow p-4 border"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{app.name}</h3>
                      <p className="text-sm text-gray-600">{app.email}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded border capitalize">
                      {app.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    <strong>Position:</strong> {app.position}
                  </p>
                  {app.message && (
                    <p className="mt-2 text-sm text-gray-700 max-h-24 overflow-auto">
                      {app.message}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-gray-500">
                    {app.createdAt
                      ? new Date(app.createdAt).toLocaleString()
                      : ""}
                  </p>
                  <div className="mt-4 flex gap-3 items-center flex-wrap">
                    <label className="text-sm text-gray-600">Status:</label>
                    <select
                      className="border rounded px-2 py-1 text-sm"
                      value={app.status}
                      onChange={(e) =>
                        updateApplicationStatus(
                          app._id,
                          e.target.value as
                            | "pending"
                            | "reviewed"
                            | "accepted"
                            | "rejected"
                        )
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <a
                      className="px-3 py-1 border rounded"
                      href={app.resume}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Resume
                    </a>
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded"
                      onClick={() => deleteApplication(app._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
