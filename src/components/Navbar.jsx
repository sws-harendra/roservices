import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillDropletFill } from "react-icons/bs";
import { Menu, X, CalendarCheck } from "lucide-react";
import TopBar from "./TopBar";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm z-50 sticky top-0">
      <TopBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="AquaPrime Logo" className="w-12 h-12 object-contain rounded-full shadow-sm border border-gray-100" />

          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">
              AquaPrime
            </h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide">
              Water Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.link || (item.name === "Home" && location.pathname === "/");
            return (
              <Link
                key={item.name}
                to={item.link}
                className={`font-semibold text-[15px] transition-colors pb-1 border-b-2 ${
                  isActive 
                    ? "text-blue-600 border-blue-600" 
                    : "text-slate-700 border-transparent hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded text-sm font-semibold transition">
            <CalendarCheck size={18} />
            Book Service
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-slate-700">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700 hover:text-blue-600 px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded flex items-center justify-center gap-2 font-semibold">
              <CalendarCheck size={18} />
              Book Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
