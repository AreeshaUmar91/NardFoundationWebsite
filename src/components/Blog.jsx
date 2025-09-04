import React from "react";
import BlogImage from "../assets/blog.png";

const Blog = () => {
  return (
    <section
      className="relative lg:-mt-28 mt-10 z-10 px-[20px] sm:px-[40px] lg:px-[80px]"
      id="blog"
    >
      <div className="max-w-6xl mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          {/* Blog 1 */}
          <div className="text-white p-8 flex flex-col justify-between bg-[#263750] shadow-lg w-full h-full">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-extrabold mb-2">
                Education
              </h3>
              <p className="font-normal text-sm sm:text-base lg:text-base">
                Educating, encouraging and <br />training special needs
                individuals <br />
                to become self-sufficient, boosting <br />
                their confidence and independence.
              </p>
            </div>
            <button className="w-full sm:w-[151px] h-[66px] bg-white text-[#2E4049] rounded-full flex items-center justify-center mt-4">
              <span className="text-[14px] sm:text-[16px] lg:text-[14px]">
                Discover
              </span>
            </button>
          </div>

          {/* Blog 2 */}
          <div
            className="bg-cover bg-center text-white flex flex-col justify-between p-8 shadow-lg w-full h-full"
            style={{ backgroundImage: `url(${BlogImage})` }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-extrabold mb-1">
                Infrastructure <br />Upgrade
              </h3>
              <p className="font-normal text-sm sm:text-base lg:text-base mt-0">
                Upgrading infrastructure in <br />farming to help special needs
                <br />
                individuals work better and <br />
                create inclusive, productive <br />
                agricultural environments.
              </p>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="bg-green-500 text-white p-10 flex flex-col justify-between shadow-lg w-full h-full">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-extrabold mb-2">
                Become <br />a Volunteer
              </h3>
              <p className="font-normal text-sm sm:text-base lg:text-base">
                Volunteering offers a meaningful <br />opportunity to contribute
                to <br />
                community well-being while <br />
                gaining valuable experience.
              </p>
            </div>
            <a
              href="#"
              className="hover:text-gray-100 transition inline-block mt-4 px-4 py-2 text-white text-start w-full sm:w-auto"
            >
              JOIN ORGANIZATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
