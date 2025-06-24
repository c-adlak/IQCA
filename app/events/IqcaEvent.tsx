import React, { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Users, Camera } from "lucide-react";
import eventimg1 from "@/public/eventImages/eventimg1.jpg";
import eventimg2 from "@/public/eventImages/eventimg2.jpg";
import eventimg3 from "@/public/eventImages/eventimg3.jpg";
import eventimg4 from "@/public/eventImages/eventimg4.jpg";
import eventimg5 from "@/public/eventImages/eventimg5.jpg";
import eventimg6 from "@/public/eventImages/eventimg6.jpg";
import eventimg7 from "@/public/eventImages/eventimg7.jpg";
import eventimg8 from "@/public/eventImages/eventimg8.jpg";
const EventPhotoGrid = () => {
  const [showDetails, setShowDetails] = useState(false);

  // Sample event photos - in a real app, these would be actual image URLs
  const eventPhotos = [
    {
      id: 1,
      url: eventimg1,
      alt: "Business networking event",
    },
    {
      id: 2,
      url: eventimg2,
      alt: "Panel discussion",
    },
    {
      id: 3,
      url: eventimg3,
      alt: "Networking session",
    },
    {
      id: 4,
      url: eventimg4,
      alt: "Professional meeting",
    },
    {
      id: 5,
      url: eventimg5,
      alt: "Conference room",
    },
    {
      id: 6,
      url: eventimg6,
      alt: "Business presentation",
    },
  ];

  const detailPhotos = [
    {
      id: 1,
      url: eventimg1,
      alt: "Opening ceremony",
    },
    {
      id: 2,
      url: eventimg2,
      alt: "Hina Gupta presenting IQCA vision",
    },
    {
      id: 3,
      url: eventimg3,
      alt: "Networking during break",
    },
    {
      id: 4,
      url: eventimg4,
      alt: "Panel discussion in progress",
    },
    {
      id: 5,
      url: eventimg5,
      alt: "Quality Hotel River Station venue",
    },
    {
      id: 6,
      url: eventimg6,
      alt: "Group photo of attendees",
    },
    {
      id: 7,
      url: eventimg7,
      alt: "Business cards exchange",
    },
    {
      id: 8,
      url: eventimg8,
      alt: "Closing remarks",
    },
  ];

  const EventCard = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div
        className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
        onClick={() => setShowDetails(true)}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Norway–UK Business Meet & Greet 2025
            </h2>
            <div className="flex items-center text-gray-600">
              <Camera className="w-5 h-5 mr-2" />
              <span className="text-sm">{eventPhotos.length} photos</span>
            </div>
          </div>

          <div className="flex items-center text-gray-600 mb-6 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">May 31, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">Drammen, Norway</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {eventPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative overflow-hidden rounded-lg aspect-square group"
              >
                <img
                  src={
                    typeof photo.url === "string" ? photo.url : photo.url.src
                  }
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {index === eventPhotos.length - 1 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      +{detailPhotos.length - eventPhotos.length} more
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <span className="text-gray-500 text-sm">
              Click to view event details and all photos
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const EventDetails = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-sm rounded-t-2xl ml-6 mr-6">
          <div className="px-6 py-4 flex items-center">
            <button
              onClick={() => setShowDetails(false)}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Events
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Event Details</h1>
          </div>
        </div>

        <div className="p-6">
          {/* Event Info Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Norway–UK Business Meet & Greet 2025
              </h1>

              <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  <span>May 31, 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  <span>Quality Hotel River Station, Drammen, Norway</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  <span>IQCA Board UK</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-4">
                On 31st May 2025, the IQCA Board UK successfully hosted the
                Norway–UK Business Meet & Greet at the prestigious Quality Hotel
                River Station in Drammen, Norway. This exclusive event brought
                together leading professionals, entrepreneurs, educators, and
                global thinkers to explore opportunities in business
                development, education, and cross-border collaboration between
                Norway and the UK.
              </p>

              <p className="mb-4">
                <strong>Hina Gupta</strong>, Director of IQCA Board UK,
                presented the board's vision, ongoing initiatives, and the
                strategic roadmap for future global engagement. The event
                featured insightful discussions from esteemed panelists and
                industry experts, highlighting key developments and
                collaborative potential in various sectors.
              </p>

              <p>
                The meet served as a dynamic platform for knowledge sharing and
                networking, reinforcing IQCA's mission to foster international
                growth through education and innovation.
              </p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Camera className="w-6 h-6 mr-3 text-blue-600" />
              Event Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
              {detailPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                >
                  <img
                    src={
                      typeof photo.url === "string" ? photo.url : photo.url.src
                    }
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:object-contain"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-800">
                          View
                        </span>
                      </div>f
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {showDetails ? <EventDetails /> : <EventCard />}
    </div>
  );
};

export default EventPhotoGrid;
