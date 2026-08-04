import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-sky-400">💧 AquaPrime</h2>

          <h3 className="text-lg font-semibold mt-2">
            RO Service Center Patna
          </h3>

          <p className="text-gray-400 mt-4 leading-7">
            Patna's most trusted independent RO repair and water purifier
            service center. Fast, affordable, and reliable doorstep service.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center hover:bg-sky-700"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li>RO Repair</li>
            <li>RO Installation</li>
            <li>AMC Plans</li>
            <li>Filter Replacement</li>
            <li>Water Purifier Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex gap-3">
              <MdPhone className="text-sky-400 text-xl" />
              <span>9876543210</span>
            </div>

            <div className="flex gap-3">
              <MdEmail className="text-sky-400 text-xl" />
              <span>info@aquaprimeservices.com</span>
            </div>

            <div className="flex gap-3">
              <MdLocationOn className="text-sky-400 text-xl" />
              <span>Patna, Bihar, India</span>
            </div>

            <div className="flex gap-3">
              <MdAccessTime className="text-sky-400 text-xl" />
              <span>Mon – Sun : 8:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} AquaPrime Services. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
