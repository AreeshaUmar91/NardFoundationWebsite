import { FaFilePdf } from "react-icons/fa"; // PDF icon

const Audit = () => {
  const reports = [
    { id: 1, title: "Annual Audit Report 2025" },
    { id: 2, title: "Annual Audit Report 2025" },
    { id: 3, title: "Annual Audit Report 2025" },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 border border-gray-300 rounded-lg p-4">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-black mb-4 text-center">
          Annual Audit Report
        </h2>

        {/* Table Header */}
        <div className="grid grid-cols-12 items-center mb-2">
          <span className="col-span-2 text-black text-center">No</span>
          <span className="col-span-7 text-black text-center">Documents</span>
          <span className="col-span-3 text-black text-center">PDF</span>
        </div>

        {/* Table Rows */}
        {reports.map((report) => (
          <div
            key={report.id}
            className="grid grid-cols-12 items-center py-1"
          >
            {/* No */}
            <span className="col-span-2 text-black text-center">{report.id}</span>

            {/* Document Name */}
            <span className="col-span-7 text-black text-center">{report.title}</span>

            {/* PDF Icon */}
            <div className="col-span-3 flex justify-center">
              <FaFilePdf className="text-red-600 w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Audit;
