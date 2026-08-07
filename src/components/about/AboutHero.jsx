import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import banner from "../../assets/images/about-banner.jpg";

function AboutHero() {
  return (
    <section
      className="relative h-[85vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-13 w-full top-4">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-5xl lg:text-6xl font-bold leading-tight"
          >
            Delivering
            <br />
            <span className="text-sky-400">Solutions You Can Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 text-lg text-gray-300 leading-8"
          >
            We provide reliable residential, commercial and industrial water
            treatment solutions with advanced technology, experienced
            technicians and dependable after-sales support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 px-7 py-3 rounded-xl font-semibold shadow-lg"
            >
              Our Services
              <motion.span
                animate={{
                  x: [0, 6, 0],
                  scale: [1, 0.85, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              className="border border-white/70 px-7 py-3 rounded-xl hover:bg-white hover:text-slate-900 transition font-semibold"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
