import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeroImg from "../assets/hero.png";

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
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-sm brightness-75"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>

      {/* Header */}
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

          {/* Mobile Button */}
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-6 lg:items-center">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold ${
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-64 bg-white p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-4 text-gray-700"
            >
              Close
            </button>
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-semibold ${
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <span className="text-white font-semibold mb-4">
          Social Responsibility...
        </span>
        <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg">
          Giving back to <br /> society is everyone's <br /> responsibility
        </h1>
      </div>
    </div>
  );
};

export default Header;
