import React from "react";
import { CheckCircle, ShieldCheck, Droplets, Wrench } from "lucide-react";
import { motion } from "motion/react";

import aboutCompany from "../../assets/images/Ro_purify.jpg";

function CompanyInfo() {
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
            <motion.img
              src={aboutCompany}
              alt="About Company"
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
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-serif text-slate-900 mt-3 leading-tight tracking-tight"
            >
              Trusted Experts In <br />
              <span className="italic text-blue-700">Water Treatment.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-500 mt-8 leading-relaxed text-lg font-light"
            >
              We provide advanced RO systems, industrial water treatment, installation, maintenance, and annual service solutions for homes, businesses, and industries. Our mission is to deliver clean, safe, and sustainable water with reliable customer support.
            </motion.p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: <ShieldCheck size={24} />, text: "Certified Engineers" },
                { icon: <Droplets size={24} />, text: "Pure Water Solutions" },
                { icon: <Wrench size={24} />, text: "Installation & Service" },
                { icon: <CheckCircle size={24} />, text: "100% Satisfaction" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 group hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="font-serif text-slate-800 text-lg">
                    {item.text}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 bg-blue-900 text-white rounded-full font-bold text-[12px] tracking-[0.2em] uppercase shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;
