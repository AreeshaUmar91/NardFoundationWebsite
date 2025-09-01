import React from "react";
import BlogImage from "../assets/blog.png";

const Blog = () => {
  return (
    <section className="relative -mt-28 z-10" id="blog">
      <div className="max-w-6xl mx-auto px-0 sm:px-0 lg:px-0">
        {/* Grid with no gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {/* Blog 1 */}
          <div className="text-white p-6 flex flex-col justify-between rounded-none bg-[#263750]">
            <div>
              <h3 className="text-2xl font-extrabold mb-4">Education</h3>
              <p className="mb-6 font-normal">
                Educating, encouraging and training special needs individuals to become self-sufficient, boosting their confidence and independence
              </p>
            </div>
            <button className="w-[151px] h-[66px] bg-white text-[#2E4049] rounded-full flex items-center justify-center">
              <span className="w-[97px] h-[22px] text-center text-[14px]">
                Discover
              </span>
            </button>
          </div>

          {/* Blog 2 */}
          <div
            className="bg-cover bg-center text-white flex flex-col justify-start p-6 rounded-none"
            style={{ backgroundImage: `url(${BlogImage})` }}
          >
            <h3 className="text-2xl font-extrabold mb-2">Infrastructure <br />Upgrade</h3>
            <p className="font-normal">
              Upgrading infrastructure in farming to help special needs individuals work better and create inclusive, productive agricultural environments.
            </p>
          </div>

          {/* Blog 3 */}
          <div className="bg-green-500 text-white p-6 flex flex-col justify-start rounded-none">
            <div>
              <h3 className="text-2xl font-extrabold mb-4">
                Become <br />a Volunteer
              </h3>
              <p className="mb-0 font-normal">
                Volunteering offers a meaningful opportunity to contribute to community well-being while gaining valuable experience
              </p>
            </div>
            <a
              href="#"
              className="font-semibold hover:text-gray-100 transition inline-block mt-2"
              style={{
                width: "175px",
                height: "25px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
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
