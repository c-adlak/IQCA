"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
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

const Page = () => {
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [loading, setLoading] = useState(false);

  const getBoardMembers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/boardMembers/get-board-members`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      // console.log("Fetched board members:", data);
      setBoardMembers(data);
    } catch (error) {
      console.error("Error fetching board members:", error);
      toast.error("Failed to fetch board members.");
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (id: string) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/boardMembers/accept-request/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      const response = await fetch(
        `${API_BASE_URL}/boardMembers/reject-request/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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

  useEffect(() => {
    getBoardMembers();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Board Members</h1>
      {loading ? (
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
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-green-700 transition"
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
};

export default Page;
