import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectImg from "../assets/nardhomemain.svg"; // background

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "About Us", path: "/aboutUs" },
    { name: "Projects", path: "/projectsPage" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Work For Us", path: "/WorkForUS" },
    { name: "Contribution", path: "/contribution" },
    { name: "NardHomeBiz", path: "/nardHomeBiz" },
    { name: "Announcement", path: "/announcement" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background with blur */}
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-sm brightness-75"
        style={{ backgroundImage: `url(${ProjectImg})` }}
      ></div>

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 bg-white/70 backdrop-blur-sm">
          {/* Logo */}
          <div className="flex lg:flex-1 items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="text-[#263750] font-bold">
                The Nard Foundation Limited
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-6 lg:items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-900 font-semibold hover:text-green-500 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/signup"
              className="bg-green-500 text-white px-4 py-2 rounded font-semibold"
            >
              Sign Up
            </Link>
            <Link to="/login" className="text-gray-900 font-semibold">
              Log In
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-64 bg-white p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-4 text-gray-700 font-semibold"
            >
              Close
            </button>
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-900 font-semibold hover:text-green-500 transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content - Text Only */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-32 max-w-4xl mx-auto text-center lg:text-left">
        <h1 className="text-4xl font-bold text-[#29659A]">
          Nard HomeBiz Solutions
        </h1>
        <h2 className="text-xl font-semibold text-[#8396AC] mt-2">
          Small Home-Based Business Application
        </h2>
        <hr className="border-gray-300 w-20 my-4 mx-auto lg:mx-0" />
        <p className="text-gray-800 leading-relaxed">
          The main goal of NardHomeBusiness is to help home-based entrepreneurs
          manage their businesses more easily, handle orders efficiently, and
          communicate better with customers. It aims to simplify running a
          home business and support entrepreneurs in growing their ventures
          effectively. With its user-friendly features, the app is designed to
          make the process smoother and more successful for home-based
          businesses.
        </p>
      </div>
    </div>
  );
};

export default Header;
