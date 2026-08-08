import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import banner1 from "../../image/banner1.png";
import banner2 from "../../image/banner2.png";
import banner3 from "../../image/banner3.png";

const backgroundImages = [banner1, banner2, banner3];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] lg:aspect-[2.5/1] flex flex-col items-center justify-center overflow-hidden bg-white z-10 mt-[60px] sm:mt-[70px]">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={backgroundImages[currentImageIndex]} 
            alt={`RO Water Service Banner ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover object-center saturate-110 contrast-[1.05] drop-shadow-md"
            style={{ imageRendering: "high-quality" }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* 
        Optional overlay can be added here if needed in the future.
        Since the images already contain text, we keep the UI clean.
      */}
      <div className="absolute bottom-6 z-20 flex gap-2">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === idx ? "bg-blue-600 scale-110" : "bg-slate-300/50 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
