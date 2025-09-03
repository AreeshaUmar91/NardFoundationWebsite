import PdfImg from "../assets/pdf-icon.svg"; // PDF image file

const Audit = () => {
  const reports = [
    { id: 1, title: "Annual Audit Report 2025" },
    { id: 2, title: "Annual Audit Report 2025" },
    { id: 3, title: "Annual Audit Report 2025" },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-6 rounded-lg shadow-lg">

        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-black mb-6 text-left">
          Annual Audit Report
        </h2>

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-12 items-center mb-4">
          <span className="col-span-2 text-black text-center font-bold py-2">No</span>
          <span className="col-span-7 text-black text-center font-bold py-2">Documents</span>
          <span className="col-span-3 text-black text-center font-bold py-2">PDF</span>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col gap-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="grid grid-cols-1 sm:grid-cols-12 items-center bg-white p-4 rounded-md"
            >
              {/* No */}
              <span className="sm:col-span-2 text-black text-center sm:text-center">
                {report.id}
              </span>

              {/* Document Name (indented slightly) */}
              <span className="sm:col-span-7 text-black sm:text-center sm:15">
                {report.title}
              </span>

              {/* PDF Image (larger size) */}
              <div className="sm:col-span-3 flex justify-center">
                <img src={PdfImg} alt="PDF" className="w-10 h-10 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audit;
