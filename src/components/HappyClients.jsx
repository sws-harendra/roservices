import React from "react";
import { Star } from "lucide-react";
import { motion } from "motion/react";

function HappyClients() {
  const clients = [
    {
      name: "Rajesh Kumar",
      company: "Director, Shubham Builders",
      message:
        "AquaPrime delivered an outstanding RO service. Their team is skilled, professional and the water quality has improved so much. We truly support them.",
    },
    {
      name: "Priya Sharma",
      company: "Green Valley Hospital",
      message:
        "The team completed the installation fast and their service is excellent. Our family is now drinking clean and safe water. Highly recommended for their commercial water purification systems.",
    },
    {
      name: "Amit Verma",
      company: "Verma Solutions Pvt. Ltd.",
      message:
        "Reliable service, genuine spare parts, and expert engineers. AquaPrime keeps our water purifier in perfect condition every time.",
    },
  ];

  return (
    <section className="bg-slate-50 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-100 px-5 py-2 rounded-full"
          >
            Happy Clients
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-serif text-slate-900 mt-8 tracking-tight leading-tight"
          >
            Dedicated To Satisfy <br className="hidden md:block" />
            <span className="text-blue-700 italic pr-2">Every Client.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-light mt-8 max-w-2xl mx-auto leading-relaxed text-lg"
          >
            Our commitment to quality service, timely solutions, and long-term maintenance has earned the trust of residential, commercial, and industrial customers across the region.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.15)" }}
              className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 flex flex-col relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-6xl text-blue-100 font-serif leading-none h-12 relative z-10 group-hover:text-blue-200 transition-colors duration-300">"</div>

              <p className="text-slate-600 text-lg leading-relaxed min-h-[140px] relative z-10 font-light mt-4">
                {client.message}
              </p>

              <div className="flex mt-8 mb-8 text-blue-500 relative z-10">
                <Star size={18} fill="currentColor" className="mr-1" />
                <Star size={18} fill="currentColor" className="mr-1" />
                <Star size={18} fill="currentColor" className="mr-1" />
                <Star size={18} fill="currentColor" className="mr-1" />
                <Star size={18} fill="currentColor" />
              </div>

              <div className="mt-auto relative z-10">
                <div className="w-full h-[1px] bg-slate-100 mb-6"></div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white font-serif text-xl shadow-md shadow-blue-900/20">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-slate-900">
                      {client.name}
                    </h3>
                    <p className="text-blue-600 text-[10px] font-bold mt-1 uppercase tracking-widest">
                      {client.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HappyClients;
