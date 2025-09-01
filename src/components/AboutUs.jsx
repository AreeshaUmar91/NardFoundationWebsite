// AboutSectionThree.jsx
import React from "react";
import AboutImage from "../assets/about.png"; // replace with your image path

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-stretch gap-10">
        {/* Left side - Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h4 className="text-green-500 text-sm font-semibold mb-2">About Us</h4>
          <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">
            Society Uplifting and Integration of Special Needs Individuals
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Work with local organizations, special schools, and farms to promote accessibility in public spaces and services, leading to improved employment and opportunities for special needs individuals.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Join organizations that support them: involve working with children, adults, or seniors, providing companionship, tutoring, or skills training.
          </p>
        </div>

        {/* Right side - Image */}
        
        <div className="md:w-1/2 flex" style={{height:"350px",width:"430px"}}>
          <img
            src={AboutImage}
            alt="Special Needs Support"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            style={{ minHeight: "300px",padding:"20px" }}
          />
        </div>
        </div>
     
    </section>
  );
};

export default AboutUs;
