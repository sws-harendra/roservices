import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-8 border-t-[20px] border-blue-900 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Company */}
        <div className="col-span-1 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
              <img src="/logo.jpeg" alt="AquaPrime Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white leading-tight">AquaPrime</h1>
            </div>
          </Link>

          <p className="text-slate-400 font-light leading-relaxed mb-8">
            Patna's most trusted independent RO repair and water purifier
            service center. Fast, affordable, and reliable doorstep service.
          </p>

          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:border-transparent transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-transparent transition-all duration-300">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6">Quick Links</h3>
          <ul className="space-y-4 text-slate-400 font-light">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6">Services</h3>
          <ul className="space-y-4 text-slate-400 font-light">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">RO Repair</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">RO Installation</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">AMC Plans</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Filter Replacement</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Water Purifier Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-serif text-white mb-6">Contact Us</h3>
          <div className="space-y-5 text-slate-400 font-light">
            <div className="flex gap-4">
              <MdPhone className="text-blue-500 text-2xl shrink-0" />
              <div className="flex flex-col">
                <span className="text-white font-medium">+91 9060809553</span>
                <span className="text-sm">24/7 Support Line</span>
              </div>
            </div>

            <div className="flex gap-4">
              <MdEmail className="text-blue-500 text-2xl shrink-0" />
              <span className="mt-1 hover:text-white transition-colors cursor-pointer">info@gsservicesindia.in</span>
            </div>

            <div className="flex gap-4">
              <MdLocationOn className="text-blue-500 text-2xl shrink-0" />
              <span className="mt-1 leading-relaxed">Sipara patna 20 Gaya Line road</span>
            </div>

            <div className="flex gap-4">
              <MdAccessTime className="text-blue-500 text-2xl shrink-0" />
              <span className="mt-1">Mon – Sun : 8:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-light">
        <p>© {new Date().getFullYear()} AquaPrime Services. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">Designed for pure water excellence.</p>
      </div>
    </footer>
  );
}

export default Footer;
