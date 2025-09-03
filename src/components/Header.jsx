import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeroImg from "../assets/hero.svg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About Us", path: "/" },
    { name: "Projects", path: "/projectsPage" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Work For Us", path: "/WorkForUs" },
    { name: "Contribution", path: "/contribution" },
    { name: "NardHomeBiz", path: "/nardhomebiz" },
    { name: "Announcement", path: "/announcement" },
  ];

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {/* Background with soft white shadow on left */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 20%, transparent 50%), url(${HeroImg})`,
        }}
      ></div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50 px-4 sm:px-6 md:px-8 flex items-center justify-between w-full">
        {/* Logo + Name */}
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          <span className="text-[#263750] font-bold text-sm mt-1 text-center">
            The Nard Foundation Limited
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-around items-center bg-[#FFFFFF80] px-4 py-2 ml-4 rounded-md">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-semibold whitespace-nowrap transition hover:text-green-500 ${
                location.pathname === item.path
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/signup"
            className="bg-green-500 text-white px-3 py-1 font-semibold rounded"
          >
            Sign Up
          </Link>
          <Link to="/login" className="text-gray-900 font-semibold">
            Log In
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center ml-auto">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-64 bg-white p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-4 text-gray-700 font-semibold"
            >
              Close
            </button>
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold text-gray-900 hover:text-green-500 transition"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="bg-green-500 text-white px-4 py-2 rounded font-semibold"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="text-gray-900 font-semibold"
              >
                Log In
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full w-full px-4 sm:px-6 md:px-8 lg:px-16 text-left">
        <span className="text-white font-normal mb-2 text-lg sm:text-xl">
          Social Responsibility...
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg leading-snug">
          Giving back to <br />
          society is everyone's <br />
          responsibility
        </h1>
      </div>
    </div>
  );
};

export default Header;
