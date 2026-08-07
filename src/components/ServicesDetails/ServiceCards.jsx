import React from "react";
import {
  Wrench,
  Settings,
  Droplets,
  ShieldCheck,
  Filter,
  BadgeCheck,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "RO Repair",
    icon: <Wrench size={32} />,
    desc: "Fast diagnosis and repair for all RO systems.",
  },
  {
    title: "RO Installation",
    icon: <Settings size={32} />,
    desc: "Professional installation with quality assurance.",
  },
  {
    title: "Filter Replacement",
    icon: <Filter size={32} />,
    desc: "Original filters for safe and pure drinking water.",
  },
  {
    title: "AMC Service",
    icon: <ShieldCheck size={32} />,
    desc: "Annual maintenance plans for worry-free performance.",
  },
  {
    title: "Water Purification",
    icon: <Droplets size={32} />,
    desc: "Complete purification solutions for homes & offices.",
  },
  {
    title: "Quality Support",
    icon: <BadgeCheck size={32} />,
    desc: "Reliable after-sales service by certified technicians.",
  },
];

function ServiceCards() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-3 text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-50 px-5 py-2 rounded-full mb-6"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-5 text-5xl lg:text-7xl font-serif text-slate-900 leading-tight tracking-tight"
          >
            Reliable Water Treatment <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block italic text-blue-700"
            >
              Solutions.
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-10 shadow-sm transition-all duration-500 hover:bg-blue-900 border border-slate-100"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 group-hover:bg-blue-800 group-hover:text-white transition-all duration-500 shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-serif text-slate-900 transition-colors duration-500 group-hover:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-slate-500 font-light group-hover:text-blue-100 transition-colors duration-500">
                {item.desc}
              </p>

              {/* Learn More */}
              <motion.div
                className="mt-8 flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-blue-600 group-hover:text-white transition-colors duration-500"
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
