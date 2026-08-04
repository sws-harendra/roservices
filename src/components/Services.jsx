import React from "react";
import { motion } from "motion/react";

import {
  Wrench,
  Settings,
  Droplets,
  RefreshCw,
  ClipboardList,
  ShieldCheck,
  Phone,
  ArrowRight,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <Wrench size={40} className="text-sky-600" />,
    title: "RO Repair & Maintenance",
    description:
      "We diagnose and fix issues with all types of RO systems, ensuring optimal performance.",
    features: [
      "Complete system diagnosis",
      "All brands supported",
      "Quick turnaround",
      "Warranty on repairs",
    ],
  },
  {
    icon: <Settings size={40} className="text-sky-600" />,
    title: "RO Installation & Replacement",
    description:
      "Professional installation and replacement of RO systems for homes and businesses.",
    features: [
      "Professional setup",
      "All brands installation",
      "Free consultation",
      "Installation warranty",
    ],
  },
  {
    icon: <Droplets size={40} className="text-sky-600" />,
    title: "Water Purifier Servicing",
    description:
      "Regular servicing to enhance the efficiency and longevity of your water purifiers.",
    features: [
      "Thorough cleaning",
      "Performance check",
      "Filter inspection",
      "Water quality testing",
    ],
  },
];

function Services() {
  return (
    <section className="py-15 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sky-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-3 text-slate-900">
            Our Expert Services for
            <span className="text-sky-600"> Clean & Safe Water</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Professional doorstep solutions for all your RO and water purifier
            needs across Patna with certified technicians and genuine spare
            parts.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-6 border border-slate-100 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors"
              >
                <div className="text-sky-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 text-[15px] leading-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex gap-2 mt-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  <Zap size={14} />
                  Quick Service
                </div>

                <div className="flex items-center gap-1.5 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  <ShieldCheck size={14} />
                  Warranty
                </div>
              </div>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {service.features.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.35 + i * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="mt-5 w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-2.5 rounded-xl font-semibold"
              >
                <Phone size={18} />
                Call Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 bg-slate-900 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition">
            View Our Services
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
