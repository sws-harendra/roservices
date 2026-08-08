import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-[6px] border-[#29b6f6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
              GS RO <span className="text-[#29b6f6]">Service</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              We provide the best RO water purifier repair and maintenance services in Patna. Ensuring you get 100% pure and safe water for your family and business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Products', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-slate-400 hover:text-[#29b6f6] transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#29b6f6]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {['RO Installation', 'RO Repairing', 'RO AMC Service', 'Industrial RO Plant', 'Filter Replacement'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-[#29b6f6] transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#29b6f6]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#29b6f6] shrink-0 mt-1" size={18} />
                <span className="text-sm text-slate-400">Patna, Bihar, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#29b6f6] shrink-0" size={18} />
                <span className="text-sm text-slate-400 font-bold">+91 77640 18221</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#29b6f6] shrink-0" size={18} />
                <span className="text-sm text-slate-400">support@gsroservice.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} <span className="text-[#29b6f6] font-bold">PURE WATER SOLUTION</span>. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
