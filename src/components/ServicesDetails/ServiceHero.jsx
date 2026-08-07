import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Wrench,
  ArrowRight,
  ShieldCheck,
  Droplets,
} from "lucide-react";

function ServiceHero() {
  const navigate = useNavigate();
  
  const features = [
    "Certified RO Engineers",
    "Same Day Service",
    "Affordable Pricing",
    "Genuine Spare Parts",
  ];

  return (
    <section className="bg-sky-600 text-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm"
          >
            <Droplets size={18} />
            Professional Water Solutions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-5xl font-bold leading-tight"
          >
            RO Repair &
            <span className="block text-">
              Maintenance Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-blue-100 text-lg max-w-xl"
          >
            We provide installation, repair, AMC plans, filter replacement,
            and complete RO maintenance for homes, offices, and industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-sky-700 px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              Book Service
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-sky-700 transition"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Why Choose Us?
          </h3>

          <div className="space-y-5">
            {features.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index,
                  }}
                  className="p-2 rounded-full bg-sky-100 text-sky-600"
                >
                  <ShieldCheck size={20} />
                </motion.div>

                <p className="text-slate-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mt-8 flex items-center gap-3 rounded-xl bg-sky-50 p-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Wrench className="text-sky-600" size={28} />
            </motion.div>

            <div>
              <h4 className="font-semibold text-slate-800">
                500+ Services Completed
              </h4>

              <p className="text-sm text-slate-500">
                Trusted by hundreds of happy customers.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default ServiceHero;