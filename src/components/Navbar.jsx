import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, CalendarCheck, ChevronDown, Droplets, Wrench, Settings } from "lucide-react";
import TopBar from "./TopBar";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <div className={`transition-all duration-300 z-50 w-full ${isScrolled ? '-translate-y-full absolute opacity-0' : 'translate-y-0 relative opacity-100'}`}>
         <TopBar />
      </div>

      <div className={`fixed inset-x-0 z-[100] flex justify-center px-4 md:px-8 transition-all duration-500 pointer-events-none ${isScrolled ? 'top-4' : 'top-[48px] sm:top-[40px]'}`}>
        <motion.nav
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ease-in-out ${
            isScrolled
              ? "w-full max-w-6xl bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] py-3 px-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              : "w-full max-w-7xl bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] py-4 px-6 shadow-sm mt-2"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex-none flex items-center gap-4 cursor-pointer group z-10">
            <div className={`relative flex items-center justify-center transition-all duration-500 z-[110] bg-white rounded-full overflow-hidden ${
              isScrolled ? "w-10 h-10 shadow-sm" : "w-14 h-14 shadow-md"
            }`}>
              <img src="/logo.jpeg" alt="GS RO Service Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className={`flex flex-col transition-all duration-500 ${isScrolled ? 'scale-90 origin-left' : 'scale-100'}`}>
              <h1 className={`font-serif leading-tight transition-colors ${
                isScrolled ? 'text-lg text-slate-900' : 'text-2xl text-slate-900 drop-shadow-sm'
              }`}>
                GS RO Service
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className={`hidden lg:flex flex-1 justify-center items-center ${isScrolled ? "gap-10" : "gap-12"}`}>
            {navLinks.map((item) => {
              const isActive = location.pathname === item.link || (item.name === "Home" && location.pathname === "/");
              
              if (item.dropdown) {
                return (
                  <div 
                    key={item.name}
                    className="relative group py-4"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.link}
                      className={`flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
                        isActive || activeDropdown === item.name 
                          ? "text-blue-600"
                          : (isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-700 hover:text-blue-600")
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2 overflow-hidden flex flex-col gap-1"
                        >
                          {item.dropdown.map((dropItem, idx) => (
                            <Link 
                              key={idx}
                              to={dropItem.link}
                              onClick={() => setActiveDropdown(null)}
                              className="group/drop flex items-start gap-4 p-4 rounded-[1rem] hover:bg-slate-50 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/drop:bg-blue-600 group-hover/drop:text-white transition-colors">
                                {dropItem.icon}
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 group-hover/drop:text-blue-600 transition-colors">{dropItem.name}</div>
                                <div className="text-xs text-slate-500 font-light mt-0.5">{dropItem.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.link}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${
                    isActive 
                      ? "text-blue-600"
                      : (isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-700 hover:text-blue-600")
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex-none flex items-center gap-4 z-10">
            <button 
              onClick={() => navigate('/contact')}
              className={`hidden lg:flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300 ${
                isScrolled 
                  ? "bg-slate-950 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg"
                  : "bg-blue-600 hover:bg-slate-950 text-white px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/20"
              }`}
            >
              <CalendarCheck size={14} />
              Book Service
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className={`lg:hidden transition-all p-3 rounded-full shadow-sm ${
                isScrolled 
                  ? "text-slate-900 bg-slate-100 hover:bg-slate-200" 
                  : "text-slate-900 bg-white shadow-md hover:bg-slate-50"
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-3xl font-bold text-white italic">Menu.</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-white/10 rounded-full text-white transition-colors hover:bg-white/20">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((item, i) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col"
                  >
                    <Link 
                      to={item.link} 
                      onClick={() => !item.dropdown && setIsMobileMenuOpen(false)} 
                      className={`font-serif text-4xl text-white hover:text-blue-400 transition-colors flex items-center justify-between ${
                        location.pathname === item.link || (item.name === "Home" && location.pathname === "/") ? "text-blue-400" : ""
                      }`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown size={24} className="text-white/50" />}
                    </Link>

                    {item.dropdown && (
                      <div className="flex flex-col gap-4 mt-6 ml-4 border-l border-white/20 pl-4">
                        {item.dropdown.map((dropItem, idx) => (
                          <Link
                            key={idx}
                            to={dropItem.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-4 group"
                          >
                            <div className="text-blue-400 group-hover:text-blue-300">
                              {dropItem.icon}
                            </div>
                            <div>
                              <div className="text-white/90 text-lg group-hover:text-white">{dropItem.name}</div>
                              <div className="text-white/50 text-xs">{dropItem.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="h-[1px] bg-white/10 w-full my-4" />

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-full flex items-center justify-center gap-3 font-bold text-[13px] tracking-[0.2em] uppercase shadow-lg shadow-blue-600/30 transition-all"
              >
                <CalendarCheck size={18} />
                Book Service
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
