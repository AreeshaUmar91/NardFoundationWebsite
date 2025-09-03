import React from "react";
import BlogImage from "../assets/blog.png";

const Blog = () => {
  return (
    <section className="relative -mt-28 z-10 px-4 sm:px-8 md:px-16 lg:px-20" id="blog">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Blog 1 */}
          <div className="text-white p-6 flex flex-col justify-between rounded-lg bg-[#263750] shadow-lg w-full h-full">
            <div>
              <h3 className="text-2xl font-extrabold mb-4">Education</h3>
              <p className="mb-6 font-normal text-sm sm:text-base">
                Educating, encouraging and training special needs individuals to become self-sufficient, boosting their confidence and independence.
              </p>
            </div>
            <button className="w-full sm:w-[151px] h-[66px] bg-white text-[#2E4049] rounded-full flex items-center justify-center mt-2">
              <span className="text-[14px]">Discover</span>
            </button>
          </div>

          {/* Blog 2 */}
          <div
            className="bg-cover bg-center text-white flex flex-col justify-between p-6 rounded-lg shadow-lg w-full h-full"
            style={{ backgroundImage: `url(${BlogImage})` }}
          >
            <h3 className="text-2xl font-extrabold mb-2">
              Infrastructure <br />Upgrade
            </h3>
            <p className="font-normal text-sm sm:text-base">
              Upgrading infrastructure in farming to help special needs individuals work better and create inclusive, productive agricultural environments.
            </p>
          </div>

          {/* Blog 3 */}
          <div className="bg-green-500 text-white p-6 flex flex-col justify-between rounded-lg shadow-lg w-full h-full">
            <div>
              <h3 className="text-2xl font-extrabold mb-4">
                Become <br />a Volunteer
              </h3>
              <p className="mb-4 font-normal text-sm sm:text-base">
                Volunteering offers a meaningful opportunity to contribute to community well-being while gaining valuable experience.
              </p>
            </div>
            <a
              href="#"
              className="font-semibold hover:text-gray-100 transition inline-block mt-2 px-4 py-2 bg-white text-[#2E4049] rounded-full text-center w-full sm:w-auto"
            >
              Join Organization
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
