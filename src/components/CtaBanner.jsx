import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import repairBg from "../assets/images/repair.jpg"; // Using existing image

function CtaBanner() {
  return (
    <section className="relative py-24 bg-[#3d5a73] overflow-hidden text-center">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${repairBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      ></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-wide">
            Company Name: GS RO Service
          </h2>
          <div className="w-12 h-1 bg-[#29b6f6] mx-auto mb-6"></div>
          
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-wide">
            Company Address: Patna, Bihar, India
          </h2>
          <div className="w-12 h-1 bg-[#29b6f6] mx-auto mb-10"></div>
          
          <a href="tel:+919060809553" className="inline-flex items-center gap-2 bg-[#29b6f6] text-white font-bold text-sm px-6 py-3 uppercase tracking-wider hover:bg-[#0288d1] transition-colors shadow-lg">
            Book Your Service
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaBanner;
