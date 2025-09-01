import React from "react";
import { Link } from "react-router-dom";
import FeatureImg1 from "../assets/signup.png";
import FeatureImg2 from "../assets/signup.png";
import FeatureImg3 from "../assets/signup.png";

const Signup = () => {
  const sections = [
    {
      img: FeatureImg1,
      heading: "Special Needs Individuals",
      content:
        "Are you passionate about making a difference? Join our foundation's volunteer team and help us impact lives in meaningful ways! As a volunteer, you'll contribute to various projects that support our mission to empower underserved communities by providing access to quality education, healthcare, and essential resources.",
    },
    {
      img: FeatureImg2,
      heading: "Yellow Ribbon",
      content:
        "We believe in second chances and the power of transformation. By becoming a volunteer, you can show the world—and yourself—that you are more than your past mistakes. Your experiences, resilience, and willingness to change can now serve as a source of hope and inspiration to others.",
    },
    {
      img: FeatureImg3,
      heading: "Underprivileged",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc viverra turpis mattis facilisis nulla massa. Quam luctus orci vivamus sed vulputate. Nulla dolor massa tortor nisl aliquet pretium adipiscing aliquam. Dui cras at turpis et quis nisl est.",
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">Work With Us</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <img
              src={section.img}
              alt={section.heading}
              className="w-32 h-32 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {section.heading}
            </h3>
            <p className="text-gray-600 mb-6">{section.content}</p>
            <Link to="/join-now">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Join Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Signup;
