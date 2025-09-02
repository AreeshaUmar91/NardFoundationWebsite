import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import MobileImg from "../assets/mobile.svg"; // Center mobile image
const Vision = () => {
  return (
    <section className="bg-white text-black py-20 px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-black">Nard Homebiz</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Realize Your Entrepreneurial Vision</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          Transform your home-based business with Nard Homebiz Solution. Our intuitive platform is tailor-made to simplify operations for a variety of industries, from cozy coffee brew cafes to thriving tutoring services. With user-friendly features and robust functionality, Nard Homebiz Solution is your key to unlocking entrepreneurial success from the comfort of your home.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
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

        <div className="w-full flex justify-center mt-8">
          <img 
            src={MobileImg} 
            alt="Profile" 
            className="w-full max-w-[1000px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
