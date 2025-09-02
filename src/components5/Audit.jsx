import PdfImg from "../assets/pdf-icon.svg"; // PDF image file

const Audit = () => {
  const reports = [
    { id: 1, title: "Annual Audit Report 2025" },
    { id: 2, title: "Annual Audit Report 2025" },
    { id: 3, title: "Annual Audit Report 2025" },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-6 rounded-lg shadow-lg border-none">

        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-black mb-4 text-left">
          Annual Audit Report
        </h2>

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-12 items-center mb-2">
          <span className="col-span-2 text-black text-center font-bold py-2">No</span>
          <span className="col-span-7 text-black text-center font-bold py-2">Documents</span>
          <span className="col-span-3 text-black text-center font-bold py-2">PDF</span>
        </div>

        {/* Table Rows */}
        {reports.map((report) => (
          <div
            key={report.id}
            className="grid grid-cols-1 sm:grid-cols-12 items-center mb-2 bg-white rounded-lg shadow-sm p-2 sm:p-0"
          >
            {/* No */}
            <span className="sm:col-span-2 text-black text-center sm:text-center py-2 sm:py-0">
              {report.id}
            </span>

            {/* Document Name */}
            <span className="sm:col-span-7 text-black text-center sm:text-left py-2 sm:py-0">
              {report.title}
            </span>

            {/* PDF Image */}
            <div className="sm:col-span-3 flex justify-center py-2 sm:py-0">
              <img src={PdfImg} alt="PDF" className="w-6 h-6 object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Audit;
