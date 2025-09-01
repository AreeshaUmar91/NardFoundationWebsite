import LargeImg from "../assets/contribution.png"; // Large picture
import { FaPlus } from "react-icons/fa";

const Goals = () => {
  return (
    <section className="bg-white text-black m-12 rounded-lg shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col space-y-4">

        {/* Large Image */}
        <img
          src={LargeImg}
          alt="Contribution"
          className="w-full h-96 object-cover rounded-lg"
        />

        {/* Grand Total and Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <h3 className="text-sm font-medium">
            Grand Total Accumulated Contribution: $19000
          </h3>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="flex items-center justify-between gap-2 px-3 py-1 bg-white text-black rounded-lg font-semibold border border-gray-300">
              Contribution
              <span className="flex items-center justify-center w-5 h-5 bg-green-400 text-white text-xs rounded-full">
                <FaPlus />
              </span>
            </button>
            <button className="flex items-center justify-between gap-2 px-3 py-1 bg-white text-black rounded-lg font-semibold border border-gray-300">
              Expenditure
              <span className="flex items-center justify-center w-5 h-5 bg-green-400 text-white text-xs rounded-full">
                <FaPlus />
              </span>
            </button>
          </div>
        </div>

        {/* Grand Total Expenditure */}
        <h4 className="text-sm font-bold mt-4">Grand Total Expenditure: $19000</h4>

        {/* Our Goal */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Our Goal</h3>
          <p className="text-gray-700">
            At The Nard Foundation Limited, we are dedicated in improving the lives of special needs individuals. Every day, we strive to create a better future by providing education, training and community support.
          </p>
        </div>

        {/* Why Contribution Matter */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Why Contribution Matter?</h3>
          <p className="text-gray-700">
            Your generous donation helps us reach more people in need. With your support, we can reach more families, provide essential services, upgrade new infrastructures and create life-changing opportunities. Every contribution, no matter the size, makes a real difference.
          </p>
        </div>

        {/* Details about the cause */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Details about the cause</h3>
          <div className="text-gray-600 space-y-2">
            <p>
              <span className="font-semibold">1. Education for Special Needs:</span> Contribution helps fund specialized resources, training for educators, and assistive infrastructure that enhances learning experiences for students with disabilities.
            </p>
            <p>
              <span className="font-semibold">2. Yellow Ribbon Programs:</span> Contributions to these programs can provide veterans with financial assistance for education, support services for transitioning to civilian life, and resources for job placement and skills training.
            </p>
            <p>
              <span className="font-semibold">3. Support for Underprivileged Groups:</span> Contribution can fund after-school programs, summer camps, and educational workshops aimed at low-income families. These initiatives often include meals, transportation, and mentoring, helping to alleviate the barriers that prevent children from accessing quality education.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Goals;
