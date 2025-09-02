import Project1 from "../assets/projectPage1.svg";
import Project2 from "../assets/projectPage2.svg";
import Project3 from "../assets/projectPage3.svg";
import Project4 from "../assets/projectPage4.svg";
import Project5 from "../assets/projectPage5.svg";
import Project6 from "../assets/projectPage6.svg";

const Blogs = () => {
  const projects = [
    { id: 1, title: "Anchor Project: Nard Urban Farming<br />(Hydroponic & Aquaponic)", img: Project1, donation: "5,000$" },
    { id: 2, title: "Anchor Project: Nard Coffee Roastery", img: Project2, donation: "5,000$" },
    { id: 3, title: "Anchor Project: Nard Counting", img: Project3, donation: "5,000$" },
    { id: 4, title: "Anchor Project: Home Based <br/>Business Support (NardHomeBiz)", img: Project4, donation: "5,000$" },
    { id: 5, title: "San Francisco is officially the first <br/>city to ban plastic", img: Project5, donation: "5,000$" },
    { id: 6, title: "Big charity: build school for poor <br/>children", img: Project6, donation: "5,000$" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const isComingSoon = [2, 4, 5].includes(index);

            return (
              <div
                key={project.id}
                className="relative flex flex-col h-full bg-white p-4 rounded-lg shadow-md"
              >
                {/* Project Image */}
                <div className="relative w-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover rounded-md"
                  />
                  {/* Overlay for Coming Soon */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-[#D9D9D9B2] flex items-center justify-center rounded-md">
                      <span className="text-black text-xl font-semibold">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Project Name */}
                <p
                  className="font-semibold text-gray-900 mt-4 mb-4 flex-1"
                  style={{ fontSize: "20px", lineHeight: "1.4" }}
                  dangerouslySetInnerHTML={{ __html: project.title }}
                ></p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between w-full gap-3 mt-auto">
                  <button className="h-12 flex-1 px-4 rounded-2xl bg-[#E8E8E8] flex items-center justify-center gap-2 font-bold text-sm sm:text-base">
                    <span>Donation:</span>
                    <span>{project.donation}</span>
                  </button>

                  <button className="h-12 flex-1 px-4 rounded-3xl text-white bg-[#263750] font-normal text-sm sm:text-base">
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
