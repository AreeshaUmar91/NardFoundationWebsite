import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import LeftBottomImg from "../assets/left-bottom.png"; // Left bottom image
import FrontImg from "../assets/front-pic.png"; // Picture in front/right

const GetItNow = () => {
  return (
    <section className="relative bg-[#DEE5F4] py-20 px-6 overflow-hidden">

      {/* Left Bottom Image */}
      <img 
        src={LeftBottomImg} 
        alt="Left Bottom" 
        className="absolute bottom-0 left-0 w-64 h-auto object-cover pr-6" // Right padding for spacing
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 gap-10">

        {/* Center Text & Buttons */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
          <h2 className="text-4xl font-bold text-[#294B78]">
            Get it Now
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
            <button className="flex flex-col items-center bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition">
              <div className="flex items-center gap-2 mb-1">
                <FaGooglePlay size={24} />
                <span className="font-bold text-white text-lg">GET IT ON</span>
              </div>
              <span className="text-gray-300 text-sm font-semibold">GOOGLE PLAY</span>
            </button>

            <button className="flex flex-col items-center bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition">
              <span className="text-gray-300 text-sm mb-1">Available in Pro</span>
              <div className="flex items-center gap-2">
                <FaApple size={24} />
                <span className="text-gray-200 font-semibold text-lg">Apple Store</span>
              </div>
            </button>
          </div>
        </div>

        {/* Front Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end pr-6"> {/* Added right padding */}
          <img 
            src={FrontImg} 
            alt="Front" 
            className="w-[300px] h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default GetItNow;
