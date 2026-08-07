import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../image/aqua1.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[95vh] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-white rounded-b-[3rem] z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white z-10"></div>

      {/* Floating Orbs (Light Mode) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <motion.div 
           animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[100px] mix-blend-multiply"
         ></motion.div>
         <motion.div 
           animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[100px] mix-blend-multiply"
         ></motion.div>
      </div>

      <div className="relative z-10 px-6 w-full max-w-7xl mt-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-8"
          >
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-blue-700 font-bold text-[10px] tracking-[0.2em] uppercase">Premium Water Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif leading-[1.05] tracking-tight mb-8 text-slate-900"
          >
            Pure Water. <br />
            <span className="relative inline-block pr-4">
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 relative z-10">
                Better Tomorrow.
              </span>
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-cyan-400/80" viewBox="0 0 200 9" fill="none"><path d="M2.00018 7.37072C50.2989 -0.669527 122.956 -1.68412 198.057 7.37072" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-600 font-light mb-10 leading-relaxed max-w-lg"
          >
            Experience advanced, economical, and industrial water purification for your home and office with our complete maintenance solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-16"
          >
            <button 
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-bold px-8 py-4 rounded-full uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(37,99,235,0.2)] transition-all hover:scale-105"
            >
              Book a Service 
              <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <ArrowRight size={14} />
              </span>
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-slate-200 hover:bg-slate-50 text-slate-900 text-[12px] font-bold px-8 py-4 rounded-full uppercase tracking-[0.2em] transition-all"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Stats Grid - Mini Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
          >
            {[
              { icon: <ShieldCheck size={18} />, label: "Quality", value: "100% Certified" },
              { icon: <Clock size={18} />, label: "Experience", value: "10+ Years" },
              { icon: <MapPin size={18} />, label: "Coverage", value: "Patna Region" }
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition-colors hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-600">{stat.icon}</div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
                </div>
                <span className="text-slate-900 font-serif text-lg">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Image Showcase */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 lg:scale-110 lg:-translate-x-4"
        >
          {/* Decorative Background behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/30 blur-[80px] rounded-full pointer-events-none"></div>
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-xl"
          >
            <div className="relative rounded-[2.5rem] bg-white border border-slate-100 p-6 overflow-hidden shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)]">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent pointer-events-none"></div>
              
              <img 
                src={heroImg} 
                alt="AquaPrime Water Purifier" 
                className="w-full h-auto rounded-[1.5rem] object-cover relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
