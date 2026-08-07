import { ArrowRight, Phone, ShieldCheck, Droplet } from "lucide-react";
import { motion } from "motion/react";

function HeroContent() {
  return (
    <div className="z-10 relative">
      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm"
      >
        <ShieldCheck size={16} />
        Trusted Water Treatment Company
      </motion.span>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-slate-800 tracking-tight"
      >
        Pure Water
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Better Tomorrow</span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-6 text-gray-600 leading-relaxed max-w-lg"
      >
        We specialize in advanced, economical, and industrial water purification for homes, offices, complete installation, maintenance, and annual service contracts.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-wrap gap-4 mt-8"
      >
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-colors"
        >
          Get Free Quote
          <ArrowRight size={18} />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-blue-600 text-blue-700 bg-white font-semibold hover:bg-blue-50 transition-colors"
        >
          <Phone size={18} />
          Call Now
        </motion.button>
      </motion.div>

      {/* Features */}
      <div className="flex flex-col sm:flex-row gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-start gap-3"
        >
          <div className="p-2 border border-blue-200 rounded text-blue-600">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Certified Quality</h3>
            <p className="text-gray-500 text-xs mt-0.5">Tested products and expert<br/>installation.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-start gap-3"
        >
          <div className="p-2 border border-blue-200 rounded text-blue-600">
            <Droplet size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Safe Drinking Water</h3>
            <p className="text-gray-500 text-xs mt-0.5">Healthy water for your family</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroContent;
