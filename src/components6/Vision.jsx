import React from "react";
import playstoreImage from "../assets/Play-Store.svg"; 
import SampleImage from "../assets/your-image.svg"; 
import googlestore from "../assets/Google-Play.svg"; 

const Vision = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid grid-rows-2 gap-12 items-center">
        {/* Top Content */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-4">Nard Homebiz</h1>
          <h2 className="text-xl font-normal text-[#8396AC] mb-6">
            Realize Your Entrepreneurial Vision
          </h2>
          {/* Three lines as separate paragraphs */}
          <p className="text-base text-gray-700 mb-2">
            Transform your home-based business with Nard Homebiz Solution. Our intuitive platform is tailor-made to simplify operations for a variety of industries,
          </p>
          <p className="text-base text-gray-700 mb-2">
            from cozy coffee brew cafes to thriving tutoring services. With user-friendly features and robust functionality, Nard Homebiz Solution is your key to unlocking
          </p>
          <p className="text-base text-gray-700 mb-6">
            entrepreneurial success from the comfort of your home.
          </p>

          {/* Play Store & Google Play Buttons */}
          <div className="flex justify-center items-center gap-6">
            <img src={playstoreImage} alt="Play Store" className="max-w-xs" />
            <img src={googlestore} alt="Google Play" className="max-w-xs" />
          </div>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center">
          <img
            src={SampleImage}
            alt="Nard Homebiz"
            className="w-[calc(100%-200px)] max-w-[calc(100%-200px)] rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
