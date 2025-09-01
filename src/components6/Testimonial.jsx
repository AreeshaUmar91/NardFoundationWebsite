import React from "react";
import TestimonialImg from "../assets/small-pic.png"; // Left small testimonial bar
import SmallImg from "../assets/testimonial.png"; // Profile image overlay

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">

        {/* Left Part */}
        <div className="lg:w-1/2 flex flex-col items-start text-left space-y-6">
          <h4 className="text-sm text-gray-500 uppercase">Testimonials</h4>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            What people say <br /> about Us.
          </h2>
          <img 
            src={TestimonialImg} 
            alt="Testimonial" 
            className="w-[385px] h-[12px] object-cover rounded-lg mt-4"
          />
        </div>

        {/* Right Part */}
        <div className="lg:w-1/2 relative flex flex-col items-start">

          {/* Testimonial Box */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full">

            {/* Small Image Overlay */}
            <img 
              src={SmallImg} 
              alt="Small" 
              className="w-20 h-20 rounded-full object-cover shadow-lg absolute -top-10 left-6"
            />

            {/* Testimonial Content */}
            <div className="mt-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                "I've been using Nard Fxpro for a few months now, and I'm impressed by its efficiency. The automated trading feature has saved me a lot of time and effort, and the invitation code access adds a sense of exclusivity to the platform. Overall, great experience!"
              </p>
              <p className="text-gray-600 font-semibold">Mike Taylor</p>
              <p className="text-gray-500 text-sm mb-4">New York, USA</p>
            </div>
          </div>

          {/* Footer Box outside of testimonial content with increased height */}
          <div className="border border-gray-300 w-full rounded p-6 mt-6 min-h-[100px] flex flex-col justify-center">
            <p className="font-semibold text-gray-800">Cristina Thomas</p>
            <p className="text-gray-500 text-sm">Tokyo</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
