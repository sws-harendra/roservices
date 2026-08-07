import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import serviceImg from "../../assets/images/repair.jpg";

function ServiceDetail() {
  const navigate = useNavigate();
  const problems = [
    "Low Water Output",
    "Water Leakage",
    "Bad Taste & Odor",
    "Filter Replacement",
    "High TDS Issue",
    "Motor Repair",
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-200/20 rounded-[3rem] transform -rotate-3 scale-105 origin-bottom-left"></div>
            <img
              src={serviceImg}
              alt="RO Service"
              className="rounded-[3rem] shadow-2xl shadow-slate-200/50 w-full h-[600px] object-cover relative z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-100 px-5 py-2 rounded-full inline-block mb-6"
            >
              RO Repair Service
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-serif text-slate-900 mt-3 leading-tight tracking-tight"
            >
              Professional Repair & <br />
              <span className="italic text-blue-700">Maintenance.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-500 mt-8 leading-relaxed text-lg font-light"
            >
              Is your water purifier not working properly? Don't compromise on your family's health. Our certified technicians can fix all types of RO problems quickly and efficiently using 100% genuine spare parts.
            </motion.p>

            {/* Problems */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-slate-100 group hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <CheckCircle size={18} />
                  </div>
                  <span className="font-serif text-slate-800">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 bg-blue-900 text-white rounded-full font-bold text-[12px] tracking-[0.2em] uppercase shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-colors flex items-center gap-3 w-max"
            >
              Book Service Now
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;