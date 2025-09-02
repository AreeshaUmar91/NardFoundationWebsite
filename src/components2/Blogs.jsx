import Project1 from "../assets/projectPage1.svg";
import Project2 from "../assets/projectPage2.svg";
import Project3 from "../assets/projectPage3.svg";
import Project4 from "../assets/projectPage4.svg";
import Project5 from "../assets/projectPage5.svg";
import Project6 from "../assets/projectPage6.svg";

const Blogs = () => {
  const projects = [
    { id: 1, title: "Anchor Project: Nard Urban Farming (Hydroponic & Aquaponic)", img: Project1, donation: "5,000$" },
    { id: 2, title: "Anchor Project: Nard Coffee Roastery", img: Project2, donation: "5,000$" },
    { id: 3, title: "Anchor Project: Nard Counting", img: Project3, donation: "5,000$" },
    { id: 4, title: "Anchor Project: Home Based Business Support (NardHomeBiz)", img: Project4, donation: "5,000$" },
    { id: 5, title: "San Francisco is officially the first city to ban plastic", img: Project5, donation: "5,000$" },
    { id: 6, title: "Big charity: build school for poor children", img: Project6, donation: "5,000$" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isComingSoon = [2, 4, 5].includes(index); // 3rd, 5th, 6th cards

            return (
              <div key={project.id} className="relative flex flex-col items-center">

                {/* Project Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full sm:w-3/4 md:w-full h-64 sm:h-80 md:h-96 object-cover mb-2"
                />

                {/* Overlay for Coming Soon */}
                {isComingSoon && (
                  <div className="absolute inset-0 bg-[#D9D9D9B2] flex items-center justify-center">
                    <span className="text-black text-xl font-semibold">Coming Soon</span>
                  </div>
                )}

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
                  {/* DONATION Button */}
                  <button className="h-12 px-8 rounded-2xl bg-[#E8E8E8] w-full sm:w-auto text-center flex items-center justify-center gap-7 font-bold">
                    <span>Donation:</span>
                    <span>{project.donation}</span>
                  </button>

                  {/* CONTRIBUTION Button */}
                  <button className="h-12 px-10 rounded-3xl text-white bg-[#263750] w-full sm:w-auto text-center font-normal">
                    CONTRIBUTION
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
