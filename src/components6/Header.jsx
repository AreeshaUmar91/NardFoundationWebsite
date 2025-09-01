import { useState } from "react"; 
import { Link } from "react-router-dom";
import ProjectImg from "../assets/nardhomemain.svg";

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
      {/* Background Image without blur */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${ProjectImg})` }}
      ></div>

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="flex items-start flex-nowrap py-3 px-4 md:px-6 bg-transparent w-full">
          {/* Logo + Name */}
          <div className="flex flex-col items-center">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
            <span className="text-[#263750] font-medium text-sm mt-1 text-center">
              The Nard Foundation Limited
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-around items-center bg-[#FFFFFF80] px-4 py-2 ml-4 rounded-md">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-medium whitespace-nowrap text-gray-900 hover:text-green-500 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/signup"
              className="bg-green-500 text-white px-3 py-1 font-medium rounded"
            >
              Sign Up
            </Link>
            <Link to="/login" className="text-gray-900 font-medium">
              Log In
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-700 focus:outline-none"
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
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FFFFFF80] w-full absolute top-full left-0 z-50 shadow-md">
            <nav className="flex flex-col gap-4 p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-gray-900 hover:text-green-500 transition"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="bg-green-500 text-white px-3 py-1 font-medium rounded"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="text-gray-900 font-medium"
              >
                Log In
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-start h-full pl-4 sm:pl-16 md:pl-[100px] pt-32 max-w-4xl">
        <h1 className="text-4xl font-medium text-[#29659A]">
          Nard HomeBiz Solutions
        </h1>
        <h2 className="text-xl font-medium text-[#8396AC] mt-2">
          Small Home-Based Business Application
        </h2>
        <hr className="border-gray-300 w-20 my-4" />
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
