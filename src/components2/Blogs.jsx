import Project1 from "../assets/projectPage1.png";
import Project2 from "../assets/projectPage2.png";
import Project3 from "../assets/projectPage3.png";
import Project4 from "../assets/projectPage4.png";
import Project5 from "../assets/projectPage5.png";
import Project6 from "../assets/projectPage6.png";

const Blogs = () => {
  const projects = [
    { id: 1, title: "Anchor Project: Nard Urban Farming (Hydroponic & Aquaponic)", img: Project1, donation: "5000$" },
    { id: 2, title: "Anchor Project: Nard Coffee Roastery", img: Project2, donation: "5000$" },
    { id: 3, title: "Anchor Project: Nard Counting", img: Project3, donation: "5000$" },
    { id: 4, title: "Anchor Project: Home Based Business Support (NardHomeBiz)", img: Project4, donation: "5000$" },
    { id: 5, title: "San Francisco is officially the first city to ban plastic", img: Project5, donation: "5000$" },
    { id: 6, title: "Big charity: build school for poor children", img: Project6, donation: "5000$" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col items-center">

              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full sm:w-3/4 md:w-full h-64 sm:h-80 md:h-96 object-cover mb-2"
              />

              {/* Project Name */}
              <p
                className={`text-lg font-semibold text-gray-900 mb-2 text-center ${
                  index === 0 || index === 3 ? "max-w-[220px] line-clamp-2" : "w-3/4 sm:w-full"
                }`}
              >
                {project.title}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full justify-center">
                <button className="py-2 px-4 rounded-xl font-semibold bg-[#E8E8E8] w-full sm:w-auto text-center">
                  Donation: {project.donation}
                </button>
                <button className="py-2 px-4 rounded-xl font-semibold text-white bg-[#263750] w-full sm:w-auto text-center">
                  Contribution
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
