import React from "react";
import { CheckCircle, ShieldCheck, Droplets, Wrench } from "lucide-react";
import { motion } from "motion/react";

import aboutCompany from "../../assets/images/Ro_purify.jpg";

function CompanyInfo() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <motion.img
              src={aboutCompany}
              alt="About Company"
              whileHover={{
                scale: 1.03,
              }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sky-600 font-semibold uppercase tracking-widest"
            >
              About Company
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-slate-900 mt-3"
            >
              Trusted Water Treatment Experts
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mt-6 leading-8"
            >
              We provide advanced RO systems, industrial water treatment,
              installation, maintenance, and annual service solutions for homes,
              businesses, and industries. Our mission is to deliver clean, safe,
              and sustainable water with reliable customer support.
            </motion.p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {[
                {
                  icon: <ShieldCheck className="text-sky-600" size={24} />,
                  text: "Certified Engineers",
                },
                {
                  icon: <Droplets className="text-sky-600" size={24} />,
                  text: "Pure Water Solutions",
                },
                {
                  icon: <Wrench className="text-sky-600" size={24} />,
                  text: "Installation & Service",
                },
                {
                  icon: <CheckCircle className="text-sky-600" size={24} />,
                  text: "100% Customer Satisfaction",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 cursor-pointer"
                >
                  <motion.div
                    whileHover={{
                      rotate: 15,
                      scale: 1.2,
                    }}
                  >
                    {item.icon}
                  </motion.div>

                  <span className="font-medium text-slate-700">
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
              transition={{
                delay: 1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-10 px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl shadow-lg"
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
