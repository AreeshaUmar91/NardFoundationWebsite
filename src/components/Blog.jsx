import React from "react";
import BlogImage from "../assets/blog.png";

const Blog = () => {
  return (
    <section className="relative -mt-28 z-10" id="blog">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Blog Container - Gap only on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-0">

          {/* Blog 1 - Blue Background */}
          <div className="bg-blue-900 text-white p-6 flex flex-col justify-between rounded-none">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <p className="mb-6">
                Educating, encouraging and training special needs individuals to become self-sufficient, boosting their confidence and independence
              </p>
            </div>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              Discover
            </button>
          </div>

          {/* Blog 2 - Image Background */}
          <div
            className="bg-cover bg-center text-white flex flex-col justify-end p-6 rounded-none"
            style={{ backgroundImage: `url(${BlogImage})` }}
          >
            
              <h3 className="text-2xl font-semibold mb-2">Infrastructure <br />Upgrade</h3>
              <p>
                Upgrading infrastructure in farming to help special needs individuals work better and create inclusive, productive agricultural environments.
              </p>
          
          </div>

          {/* Blog 3 - Green Background */}
          <div className="bg-green-500 text-white p-6 flex flex-col justify-between rounded-none">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Become a <br />Volunteer</h3>
              <p className="mb-6">
                Volunteering offers a meaningful opportunity to contribute to community well-being while gaining valuable experience
              </p>
            </div>
            <a href="#" className="underline font-semibold hover:text-gray-100 transition">
             Join Organization
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
