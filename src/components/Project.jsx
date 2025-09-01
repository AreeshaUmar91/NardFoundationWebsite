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
        <h4 className="text-green-500 text-sm sm:text-base font-semibold mb-2">
          Our Projects
        </h4>

        {/* Subheading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 leading-snug text-left">
          You can help lots of people <br /> by donating little.
        </h1>

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
