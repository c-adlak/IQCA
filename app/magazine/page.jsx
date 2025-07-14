"use client";
import { useState, useMemo, use, useEffect } from "react";

import YearTabs from "../../components/ui/YearTabs";
import MagazineCard from "../../components/ui/MagazineCard";
import PDFViewer from "../../components/ui/PDFViewer";
import { magazines } from "../data/magazine";

function MagazinePage() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMagazine, setSelectedMagazine] = useState(null);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);

  const availableYears = useMemo(() => {
    const years = [...new Set(magazines.map((mag) => mag.publishYear))];
    return years.sort((a, b) => b - a);
  }, []);

  const filteredMagazines = useMemo(() => {
    if (selectedYear === null) return magazines;
    return magazines?.filter((mag) => mag.publishYear === selectedYear);
  }, [selectedYear]);

  // const handleMagazineClick = (magazine) => {
  //   setSelectedMagazine(magazine);
  //   setIsPDFViewerOpen(true);
  // };

  const handleClosePDFViewer = () => {
    setIsPDFViewerOpen(false);
    setSelectedMagazine(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Magazine Archive
          </h1>
          <p className="text-center text-gray-600">
            Browse our collection of magazines by year
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Year Tabs */}
        <YearTabs
          years={availableYears}
          selectedYear={selectedYear}
          onYearSelect={setSelectedYear}
        />

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredMagazines.map((magazine) => (
          <a
            href={`/pdfjs/web/viewer.html?file=${magazine.pdfUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
             padding: "0px",
          }}
        >
            <MagazineCard
              key={magazine.id}
              magazine={magazine}
              // onMagazineClick={handleMagazineClick}
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

      {/* PDF Viewer Modal */}
      {/* <PDFViewer
        magazine={selectedMagazine}
        isOpen={isPDFViewerOpen}
        onClose={handleClosePDFViewer}
      /> */}
    </div>
  );
}

export default MagazinePage;
