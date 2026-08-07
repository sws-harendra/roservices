import React from "react";
import { MapPin, Headset, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function TopBar() {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between text-[13px] text-gray-500 font-medium">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-gray-400" />
          <span>Pure Water. Safe Life. Better Tomorrow.</span>
        </div>

        {/* Right Side */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Headset size={14} className="text-gray-400" />
            <span>24/7 Support</span>
          </div>

          <div className="h-4 w-px bg-gray-300"></div>

          <div className="flex items-center gap-2">
            <Phone size={14} className="text-gray-400" />
            <span>+91 9060809553</span>
          </div>

          <div className="h-4 w-px bg-gray-300"></div>

          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-sky-600 transition">
              <FaFacebook size={14} />
            </a>
            <a href="#" className="hover:text-sky-600 transition">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="hover:text-sky-600 transition">
              <FaLinkedin size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
