import React from "react";

const Contributors = () => {
  const rows = Array.from({ length: 6 }, (_, i) => ({
    no: "01",
    date: "1/10/2024",
    title: "The Prime Minister of Singapore visits to farm",
  }));

  return (
    <section className="bg-white m-10 p-6 rounded-lg shadow-md">
      {/* Small heading */}
      <h4 className="text-sm font-semibold text-gray-900 mb-4">Contributor</h4>

      {/* Table headers */}
      <div className="flex bg-green-500 rounded-t-lg p-2 text-sm font-semibold text-white">
        <div className="w-1/6">No</div>
        <div className="w-2/6">Date</div>
        <div className="w-3/6">Title</div>
      </div>

      {/* Table rows */}
      {rows.map((row, index) => (
        <div
          key={index}
          className="flex items-center p-2 text-sm"
        >
          {/* No column */}
          <div className="w-1/6">{row.no}</div>

          {/* Date column */}
          <div className="w-2/6">{row.date}</div>

          {/* Title column with green rounded symbol + */}
          <div className="w-3/6 flex items-center gap-2">
            <span className="bg-green-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center">
              +
            </span>
            {row.title}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contributors;
