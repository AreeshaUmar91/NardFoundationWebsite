import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import MobileImg from "../assets/mobile.jpg"; // Center mobile image
import Feature1 from "../assets/feature11.png";
import Feature2 from "../assets/feature22.png";
import Feature3 from "../assets/feature33.png";
import Feature4 from "../assets/feature4.png";
import Feature5 from "../assets/feature5.png";
import Feature6 from "../assets/feature6.png";

const Vision = () => {
  return (
    <div className="bg-white">

      {/* Vision Section */}
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
        </div>
      </section>

      {/* Mobile Features Section */}
      <section className="py-20 px-6 relative flex justify-center">
        <div className="max-w-7xl w-full flex justify-center relative">

          {/* Left Features */}
          <div className="flex flex-col justify-between mr-12 relative">
            {[
              { img: Feature1, title: "Industry-Tailored Solutions", desc: "Designed for a variety of home-based businesses including cafes, food services, tutoring, and crafts." },
              { img: Feature2, title: "Analytics Insights for Growth", desc: "Offers valuable analytics insights to business owners, enabling data-driven decision-making." },
              { img: Feature3, title: "Streamlined Management", desc: "Simplified posting & management for services, courses, and menus, ensuring smooth operations & customer satisfaction." },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center mb-16 last:mb-0 relative bg-white border border-gray-200 p-3 rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 group w-72" // increased width
              >
                <div className="text-right mr-4 max-w-xs">
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
                <img src={feature.img} alt={feature.title} className="w-12 h-12" />
              </div>
            ))}
          </div>

          {/* Mobile Image */}
          <div className="relative z-10">
            <img
              src={MobileImg}
              alt="Mobile"
              className="w-[320px] h-[521px] object-cover" // increased width
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col justify-between ml-12 relative">
            {[
              { img: Feature4, title: "Secure Payment Processing", desc: "Ensures safe transactions for both business owners and customers, building trust within the platform." },
              { img: Feature5, title: "Dynamic Customer Communication", desc: "Facilitates direct communication between businesses and customers, enhancing engagement." },
              { img: Feature6, title: "Community Forum", desc: "An inclusive community forum for app users to discuss, share insights, and donate products, fostering collaboration and support." },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center mb-16 last:mb-0 relative bg-white border border-gray-200 p-3 rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 group w-72" // increased width
              >
                <img src={feature.img} alt={feature.title} className="w-12 h-12" />
                <div className="text-left ml-4 max-w-xs">
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dotted lines outside both mobile and features (more dots) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[0, 1, 2].map((i) => (
              <div
                key={`left-line-${i}`}
                className="absolute border-t-2 border-dotted border-gray-400"
                style={{
                  top: `${130 + i * 140}px`,
                  left: "calc(50% - 320px / 2 - 12px)", // mobile left border
                  width: "180px", // slightly increased distance
                  borderStyle: "dotted",
                }}
              />
            ))}
            {[0, 1, 2].map((i) => (
              <div
                key={`right-line-${i}`}
                className="absolute border-t-2 border-dotted border-gray-400"
                style={{
                  top: `${130 + i * 140}px`,
                  right: "calc(50% - 320px / 2 - 12px)", // mobile right border
                  width: "180px", // slightly increased distance
                  borderStyle: "dotted",
                }}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Vision;
