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
    icon: <Wrench size={28} />,
    desc: "Fast diagnosis and repair for all RO systems.",
  },
  {
    title: "RO Installation",
    icon: <Settings size={28} />,
    desc: "Professional installation with quality assurance.",
  },
  {
    title: "Filter Replacement",
    icon: <Filter size={28} />,
    desc: "Original filters for safe and pure drinking water.",
  },
  {
    title: "AMC Service",
    icon: <ShieldCheck size={28} />,
    desc: "Annual maintenance plans for worry-free performance.",
  },
  {
    title: "Water Purification",
    icon: <Droplets size={28} />,
    desc: "Complete purification solutions for homes & offices.",
  },
  {
    title: "Quality Support",
    icon: <BadgeCheck size={28} />,
    desc: "Reliable after-sales service by certified technicians.",
  },
];

function ServiceCards() {
  return (
    <section className="py-15 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm"
          >
            💧 Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
          >
            Reliable Water Treatment
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block text-sky-600"
            >
              Solutions for Every Need
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 mt-14 md:grid-cols-2 lg:grid-cols-3">
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
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-sky-500 hover:shadow-l"
            >
              {/* Top Accent Line */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-sky-600 transition-all duration-500 group-hover:w-full"></div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ duration: 0.25 }}
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-600"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>

              {/* Learn More */}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-600"
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
