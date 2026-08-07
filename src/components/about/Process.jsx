import React from "react";
import { ClipboardCheck, Search, Wrench, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const processData = [
  {
    id: "01",
    title: "Consultation",
    desc: "Understand customer requirements and provide the best solution.",
    icon: ClipboardCheck,
  },
  {
    id: "02",
    title: "Site Inspection",
    desc: "Our experts inspect the location for proper planning.",
    icon: Search,
  },
  {
    id: "03",
    title: "Installation",
    desc: "Professional installation with quality assurance.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Support",
    desc: "Regular maintenance and 24/7 customer support.",
    icon: ShieldCheck,
  },
];

function Process() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-50 px-5 py-2 rounded-full inline-block mb-6"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-serif text-slate-900 mt-3 tracking-tight leading-tight"
          >
            Our Working <span className="italic text-blue-700 pr-2">Process.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-slate-500 font-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We follow a simple and efficient process to deliver the best water treatment solutions.
          </motion.p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative bg-slate-50 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:bg-blue-900 hover:border-blue-900 transition-all duration-500 text-center group overflow-hidden"
              >
                {/* Number */}
                <span className="absolute -top-4 -right-2 text-9xl font-serif font-black text-slate-200/50 group-hover:text-blue-800/50 transition-colors duration-500 pointer-events-none select-none z-0">
                  {item.id}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center group-hover:bg-blue-800 transition-colors duration-500 shadow-sm">
                    <Icon size={32} className="text-blue-600 group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-serif text-slate-900 group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-slate-500 font-light leading-relaxed group-hover:text-blue-100 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
