"use client";
import { useState, useMemo, useEffect } from "react";

import YearTabs from "../../components/ui/YearTabs";
import MagazineCard from "../../components/ui/MagazineCard";
import { fetchAllEvents } from "../../lib/api";

function MagazinePage() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events data on component mount
  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        setLoading(true);
        const events = await fetchAllEvents();
        
        // Transform events data to match magazine structure
        const transformedMagazines = events.map((event) => ({
          id: event._id,
          title: event.name,
          coverImage: event.image,
          publishYear: new Date(event.date).getFullYear(),
          publishMonth: new Date(event.date).toLocaleString('default', { month: 'long' }),
          issue: `${new Date(event.date).toLocaleString('default', { month: 'long' })} ${new Date(event.date).getFullYear()}`,
          pdfUrl: event.pdf || "#",
          description: event.description,
        }));
        
        setMagazines(transformedMagazines);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching magazines:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMagazines();
  }, []);

  const availableYears = useMemo(() => {
    const years = [...new Set(magazines.map((mag) => mag.publishYear))];
    return years.sort((a, b) => b - a);
  }, [magazines]);

  const filteredMagazines = useMemo(() => {
    if (selectedYear === null) return magazines;
    return magazines?.filter((mag) => mag.publishYear === selectedYear);
  }, [selectedYear, magazines]);


  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading magazines...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-red-300 mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Error loading magazines
          </h3>
          <p className="text-gray-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            IQBIZ Archive
          </h1>
          <p className="text-center text-gray-600">
            Browse our collection of IQBIZ by year
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Year Tabs */}
        {availableYears.length > 0 && (
          <YearTabs
            years={availableYears}
            selectedYear={selectedYear}
            onYearSelect={setSelectedYear}
          />
        )}

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredMagazines.map((magazine) => (
          <a
            key={magazine.id}
            href={magazine.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
             padding: "0px",
          }}
        >
            <MagazineCard
              magazine={magazine}
            />
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredMagazines.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No magazines found
            </h3>
            <p className="text-gray-500">
              {selectedYear
                ? `No magazines available for ${selectedYear}`
                : "No magazines in the archive"}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

export default MagazinePage;
