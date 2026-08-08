import React from "react";
import { motion } from "motion/react";
import statsBg from "../assets/images/repair.jpg";

function StatsBanner() {
  const stats = [
    { number: "2,500+", label: "Successful Project" },
    { number: "2,450+", label: "Happy Customers" },
    { number: "15+", label: "Expert Technician" },
    { number: "10+", label: "Years Of Experience" },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${statsBg})` }}
      ></div>
      <div className="absolute inset-0 bg-[#2c3e50]/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
            We have over 20 years experience
          </h2>
          
          <div className="w-12 h-1 bg-[#29b6f6] mx-auto mb-4"></div>
          
          <h3 className="text-lg md:text-xl font-bold text-white mb-16 drop-shadow-md">
            Best RO Service Provider Patna
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center text-white"
              >
                <div className="text-3xl md:text-5xl font-bold text-[#29b6f6] mb-2 drop-shadow-md">
                  {stat.number}
                </div>
                <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default StatsBanner;
