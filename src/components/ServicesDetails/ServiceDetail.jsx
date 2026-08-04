import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import serviceImg from "../../assets/images/repair.jpg";

function ServiceDetail() {
  const problems = [
    "Low Water Output",
    "Water Leakage",
    "Bad Taste & Odor",
    "Filter Replacement",
    "High TDS Issue",
    "Motor Repair",
  ];

  return (
    <section className="py-10 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={serviceImg}
              alt="RO Service"
              className="w-full h-96 object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sky-600 font-semibold uppercase tracking-widest"
            >
              RO Repair Service
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-4xl font-bold text-slate-900 leading-tight"
            >
              Professional RO Repair & Maintenance
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-5 text-slate-600 leading-8"
            >
              
            </motion.p>

            {/* Problems */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-transparent hover:border-sky-200 hover:shadow-md transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.15 }}
                  >
                    <CheckCircle
                      size={20}
                      className="text-green-500"
                    />
                  </motion.div>

                  <span className="text-slate-700 font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.04,
                x: 5,
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 text-white shadow-lg transition hover:bg-sky-700"
            >
              Book Service
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default ServiceDetail;