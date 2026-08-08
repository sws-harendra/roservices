import React from "react";
import { motion } from "motion/react";

const processData = [
  {
    id: "1",
    title: "Book & Schedule Service",
    desc: "Look for and select the services that your water purifier needs. Speak with a member of our customer service staff to schedule your request and choose the best time for service.",
  },
  {
    id: "2",
    title: "Get Technician Details",
    desc: "You will receive the service engineer's name and contact information after filing your request, allowing you to follow their whereabouts in real-time.",
  },
  {
    id: "3",
    title: "Get Relax",
    desc: "Unwind and have fun in your spare time. Our professional will visit you and fix your water purifier problems to your complete satisfaction.",
  },
];

function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#1f3a5a] mb-4 tracking-tight"
          >
            How we Work
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-[#29b6f6] mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 font-medium max-w-4xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Your time and money are valuable to us and our whole team. Hence providing you with transparent and seamless RO services right at your door. Enjoy your family time by making a reservation and using our hassle-free services.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {processData.map((step, index) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10, 
                boxShadow: "0 20px 40px -5px rgba(41, 182, 246, 0.2)" 
              }}
              key={index}
              className="group flex flex-col items-center gap-6 p-8 rounded-2xl border-2 border-transparent shadow-lg bg-white hover:border-[#29b6f6]/30 transition-all duration-300 relative text-center"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] text-[#1f3a5a] flex items-center justify-center text-3xl font-black shrink-0 shadow-md border-4 border-white group-hover:text-[#29b6f6] group-hover:shadow-[#29b6f6]/40 transition-colors z-10"
              >
                {step.id}
              </motion.div>
              
              <div>
                <h4 className="font-extrabold text-xl md:text-2xl text-[#1f3a5a] mb-4 group-hover:text-[#29b6f6] transition-colors">{step.title}</h4>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
