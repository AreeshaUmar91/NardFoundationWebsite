import React from "react";
import { Link } from "react-router-dom";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";

const Project = () => {
  const projects = [
    { img: Project1, route: "/projects/project1" },
    { img: Project2, route: "/projects/project2" },
    { img: Project3, route: "/projects/project3" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h4
          className="text-green-500 mb-2"
          style={{ fontWeight: 500, fontSize: "35px" }}
        >
          Our Projects
        </h4>

        {/* Subheading and Button - Responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4 mr-100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-left">
            You can help lots of people <br /> by donating little.
          </h1>

          <Link
            to="/projects"
            className="flex items-center justify-center text-white font-normal" // font-normal removes bold
            style={{
              width: "180px",           // button width
              height: "60px",           // button height
              backgroundColor: "#2E4049",
              borderRadius: "50px",     // increased border radius
              transform: "rotate(-0.04deg)",
              opacity: 1,
              paddingRight: "30px 30px",     // increased padding for text
            }}
          >
            MORE PROJECTS
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.route}
              className="block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.img}
                alt={`Project ${index + 1}`}
                className="w-full h-[700px] object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
