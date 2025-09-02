import LargeImg from "../assets/contribution.png"; // Large picture
import { FaPlus } from "react-icons/fa";

const Goals = () => {
  return (
    <section className="bg-white text-black m-4 sm:m-6 md:m-12 rounded-lg shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 flex flex-col space-y-4">

        {/* Large Image */}
        <img
          src={LargeImg}
          alt="Contribution"
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
        />

        {/* Grand Total and Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
          <h3 className="font-bold my-2 text-lg sm:text-xl md:text-2xl" style={{ color: "#2E4049" }}>
            Grand Total Accumulated Contribution: $19000
          </h3>
          <div className="flex gap-4 mt-2 sm:mt-0 flex-wrap">
            <button className="flex items-center justify-between gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-3xl border border-gray-300 hover:bg-gray-100 transition">
              <span className="font-bold">Contribution</span>
              <span className="flex items-center justify-center w-5 h-5 bg-green-400 text-white text-xs rounded-full">
                <FaPlus />
              </span>
            </button>
            <button className="flex items-center justify-between gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-3xl border border-gray-300 hover:bg-gray-100 transition">
              <span className="font-bold">Expenditure</span>
              <span className="flex items-center justify-center w-5 h-5 bg-green-400 text-white text-xs rounded-full">
                <FaPlus />
              </span>
            </button>
          </div>
        </div>

        {/* Grand Total Expenditure */}
        <h4 className="font-bold my-2 text-lg sm:text-xl md:text-2xl" style={{ color: "#2E4049" }}>
          Grand Total Expenditure: $19000
        </h4>

        {/* Our Goal */}
        <div className="mt-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold my-2" style={{ color: "#2E4049" }}>
            Our Goal
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-base">
            At The Nard Foundation Limited, we are dedicated in improving the lives of special needs individuals. Every day, we strive to create a better future by providing education, training and community support.
          </p>
        </div>

        {/* Why Contribution Matter */}
        <div className="mt-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold my-2" style={{ color: "#2E4049" }}>
            Why Contribution Matter?
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-base">
            Your generous donation helps us reach more people in need. With your support, we can reach more families, provide essential services, upgrade new infrastructures and create life-changing opportunities. Every contribution, no matter the size, makes a real difference.
          </p>
        </div>

        {/* Details about the cause */}
        <div className="mt-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold my-2" style={{ color: "#2E4049" }}>
            Details about the cause
          </h3>
          <div className="text-gray-600 text-sm sm:text-base md:text-base space-y-2">
            <p className="my-1">
              <span className="font-bold" style={{ color: "#2E4049" }}>
                1. Education for Special Needs:
              </span> Contribution helps fund specialized resources, training for educators, and assistive infrastructure that enhances learning experiences for students with disabilities.
            </p>
            <p className="my-1">
              <span className="font-bold" style={{ color: "#2E4049" }}>
                2. Yellow Ribbon Programs:
              </span> Contributions to these programs can provide veterans with financial assistance for education, support services for transitioning to civilian life, and resources for job placement and skills training.
            </p>
            <p className="my-1">
              <span className="font-bold" style={{ color: "#2E4049" }}>
                3. Support for Underprivileged Groups:
              </span> Contribution can fund after-school programs, summer camps, and educational workshops aimed at low-income families. These initiatives often include meals, transportation, and mentoring, helping to alleviate the barriers that prevent children from accessing quality education.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Goals;
