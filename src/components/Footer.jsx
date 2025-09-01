// Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2E4049] text-white">
      {/* Top Part */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nard Foundation</h2>
            <p className="text-sm mb-6 leading-relaxed">
              Care about people to transforming their <br/>lives and exudes a positive impression.
              <br/>Believe in fundraising and NGO organizations.
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

        {/* Right Side */}
        <div className="md:w-1/2 bg-[#2E4049] flex flex-col sm:flex-row justify-between gap-8 sm:gap-12">
          {/* Get Involved */}
          <div>
            <h3 className="font-semibold mb-4 text-lg hover:text-green-500 transition-colors">
              Get Involved
            </h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline hover:text-green-400">Volunteer</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Donation</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Partnership</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Fundraising</a></li>
            </ul>
          </div>

          {/* Utility */}
          <div>
            <h3 className="font-semibold mb-4 text-lg hover:text-green-500 transition-colors">
              Utility
            </h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline hover:text-green-400">FAQs</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Resources</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Reports</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg hover:text-green-500 transition-colors">
              Contact
            </h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline hover:text-green-400">Email</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Phone</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Address</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-6 py-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Nard Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
