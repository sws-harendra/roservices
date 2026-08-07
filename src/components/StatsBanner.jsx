import React from "react";
import { ShieldCheck, Users, CheckCircle, MapPin } from "lucide-react";
import { motion } from "motion/react";

function StatsBanner() {
  return (
    <div className="px-6 relative z-20 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full bg-blue-900 py-16 md:py-20 rounded-[3rem] max-w-7xl mx-auto relative overflow-hidden shadow-2xl shadow-blue-900/20"
      >
        {/* Decorative texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        
        {/* Glow effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        
        <div className="relative z-10 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:divide-x divide-white/10">
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-white px-4 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck size={40} className="text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-serif leading-none">10+</span>
                </div>
              </div>
              <span className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em] text-center">Years of Experience</span>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-white px-4 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users size={40} className="text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-serif leading-none">5k+</span>
                </div>
              </div>
              <span className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em] text-center">Happy Customers</span>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-white px-4 group mt-8 md:mt-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={40} className="text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-serif leading-none">15k+</span>
                </div>
              </div>
              <span className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em] text-center">Services Completed</span>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-white px-4 group mt-8 md:mt-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin size={40} className="text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-serif leading-none">Patna</span>
                </div>
              </div>
              <span className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em] text-center">Service Coverage</span>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default StatsBanner;
