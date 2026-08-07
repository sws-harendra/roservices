import React from "react";
import { motion } from "motion/react";
import heroImg from "../../image/aqua1.png";
import HeroStats from "./HeroStats";

function HeroImage() {
  return (
    <div className="relative mt-10 lg:mt-0 z-10 pl-4 lg:pl-10">
      <div className="relative">
        {/* Main Image */}
        <motion.img 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          src={heroImg} 
          alt="RO System" 
          className="rounded-2xl w-full object-cover max-h-[500px] shadow-2xl shadow-blue-900/10" 
        />
        
        {/* Floating Badge (Top Right) */}
        <div className="absolute top-8 -right-4 lg:-right-8 bg-white shadow-xl rounded px-4 py-2 flex flex-col items-center border border-gray-100">
          <div className="text-blue-600 mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5l9-5z"/><path d="M12 15l2 5l-9-5z"/><circle cx="12" cy="8" r="5"/></svg>
          </div>
          <span className="text-blue-600 font-bold text-sm">10+ Years</span>
          <span className="text-gray-500 text-[10px] uppercase font-semibold">Of Excellence</span>
        </div>
      </div>

      <HeroStats />
    </div>
  );
}

export default HeroImage;
