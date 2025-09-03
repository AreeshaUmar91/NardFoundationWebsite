import React from "react";
import { Link } from "react-router-dom";

// Project images
import ProjectImg1 from "../assets/contribution.svg";
import ProjectImg2 from "../assets/projectPage4.svg";
import ProjectImg3 from "../assets/projectPage5.svg";

// Small "Raised" images
import RaisedImg1 from "../assets/raised1.svg";
import RaisedImg2 from "../assets/raised2.svg";
import RaisedImg3 from "../assets/raised3.svg";

const Project = () => {
  const sections = [
    {
      img: ProjectImg1,
      title1: "Fund Raising: Education For Special",
      title2: "Needs Individuals In Urban Farming",
      raisedImg: RaisedImg1,
      raisedMarginTop: "30px", // closer
    },
    {
      img: ProjectImg2,
      title1: "Fund Raising: Upgrading Infrastructure",
      title2: "in Farming for Special Needs Individuals Workforce",
      raisedImg: RaisedImg2,
      raisedMarginTop: "0px", // closer
    },
    {
      img: ProjectImg3,
      title1: "Fund Raising: Maintenance for",
      title2: "Nard Foundation Urban Farm",
      raisedImg: RaisedImg3,
      raisedMarginTop: "30px", // closer
    },
  ];

  return (
    <section className="py-16 bg-white mx-[40px]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h4
          className="text-green-500 mb-4"
          style={{ fontWeight: 500, fontSize: "35px" }}
        >
          Our Projects
        </h4>

        {/* Subheading and Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-left">
            You can help lots of people <br /> by donating little.
          </h1>
          <Link
            to="/projectsPage"
            className="flex items-center justify-center text-white font-normal"
            style={{
              width: "180px",
              height: "60px",
              backgroundColor: "#2E4049",
              borderRadius: "50px",
              padding: "0px",
            }}
          >
            MORE PROJECTS
          </Link>
        </div>

        {/* Projects Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* smaller gap */}
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left p-3" // smaller padding
              style={{ border: "none", borderRadius: "0", boxShadow: "none" }}
            >
              {/* Project Image */}
              <img
                src={section.img}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover mb-2 rounded-md" // smaller margin
              />

              {/* Titles */}
              <p className="font-bold text-lg mb-1">{section.title1}</p>
              <p className="font-bold text-lg mb-2">{section.title2}</p>

              {/* Small Raised Image */}
              <img
                src={section.raisedImg}
                alt={`Raised ${index + 1}`}
                className="h-12 w-auto mb-2"
                style={{ marginTop: section.raisedMarginTop }}
              />

              {/* Raised and Goal Text */}
              <div className="flex justify-between w-full mb-2">
                <p className="font-bold text-[#2E4049]">Raised-0M</p>
                <p className="font-bold text-[#4CAF50]">Goal - SGD 10,000</p>
              </div>

              {/* Contribution Button */}
              <Link
                to="/donate"
                className="px-6 py-2 text-white rounded-full hover:bg-green-600 transition"
                style={{ backgroundColor: "#263750" }}
              >
                CONTRIBUTION
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
