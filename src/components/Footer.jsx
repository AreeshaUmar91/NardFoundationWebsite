// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2E4049] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nard Foundation</h2>
            <p className="text-sm mb-6 leading-relaxed">
              Care about people to transforming their <br />
              lives and exudes a positive impression. <br />
              Believe in fundraising and NGO organizations.
            </p>
          </div>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#2E4049] flex items-center justify-center hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#2E4049] flex items-center justify-center hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Side - Special Section */}
        <div className="md:w-1/2 bg-[#384C56] flex flex-col sm:flex-row justify-between gap-8 sm:gap-12 p-6 rounded-md">
          {/* Get Involved */}
          <div className="flex-shrink-0 min-w-[120px]">
            <h3 className="font-semibold mb-4 text-lg hover:text-green-500 transition-colors whitespace-nowrap">
              Get Involved
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/aboutUs" className="hover:underline hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:underline hover:text-green-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline hover:text-green-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility */}
          <div className="flex-shrink-0 min-w-[120px]">
            <h3 className="font-semibold mb-4 text-lg hover:text-green-500 transition-colors whitespace-nowrap">
              Style Guide
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/" className="hover:underline hover:text-green-400">
                  Licenses
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-green-400">
                  Password
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-green-400">
                  404 Page
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:underline hover:text-green-400">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-shrink-0 min-w-[180px]">
            <h3 className="font-semibold mb-4 text-lg hover:text-green-500 transition-colors">
              Contact
            </h3>
            <ul className="text-sm space-y-2">
              <li>5008, Ang Mo Kio Avenue 5,<br/> #04-09 Techplace II,<br/> Singapore 569874</li>
              <li>admin@nardfoundation.com</li>
              <li>222 888 0000</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 py-4 text-center text-sm text-white">
      Copyright  &copy; Nard Foundation. 
      </div>
    </footer>
  );
};

export default Footer;
