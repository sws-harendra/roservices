import { ArrowRight, Phone, ShieldCheck, Droplets } from "lucide-react";
import { motion } from "motion/react";

function HeroContent() {
  return (
    <div>
      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-medium"
      >
        <Droplets size={18} />
        Trusted Water Treatment Company
      </motion.span>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900"
      >
        Pure Water
        <br />
        <span className="text-sky-600">Better Tomorrow</span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-8 text-lg text-gray-600 leading-8"
      >
        We specialize in residential, commercial, and industrial water
        purification systems, offering complete installation, maintenance, and
        annual service solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-wrap gap-5 mt-10"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-8 py-4 rounded-xl bg-sky-600 text-white shadow-lg hover:bg-sky-700"
        >
          Get Free Quote
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-8 py-4 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition"
        >
          <Phone size={18} />
          Call Now
        </motion.button>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ y: -6 }}
          className="flex gap-4"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <ShieldCheck className="text-sky-600" size={42} />
          </motion.div>

          <div>
            <h3 className="font-bold text-lg">Certified Quality</h3>

            <p className="text-gray-500 text-sm mt-1">
              Trusted products and expert installation.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ y: -6 }}
          className="flex gap-4"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <Droplets className="text-sky-600" size={42} />
          </motion.div>

          <div>
            <h3 className="font-bold text-lg">Safe Drinking Water</h3>

            <p className="text-gray-500 text-sm mt-1">
              Healthy water for your family.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroContent;
