import React from "react";

const YearTabs = ({ years, selectedYear, onYearSelect }) => {
  const getTabColor = (year) => {
    if (year === 2022) {
      return selectedYear === year
        ? "bg-blue-600 text-white"
        : "bg-blue-500 text-white hover:bg-blue-600";
    }
    return selectedYear === year
      ? "bg-orange-600 text-white"
      : "bg-orange-500 text-white hover:bg-orange-600";
  };

  return (
    <div className="flex justify-center gap-4 mb-12">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearSelect(year)}
          className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${getTabColor(
            year
          )}`}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default YearTabs;
