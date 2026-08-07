import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { Wrench, ArrowRight, ShieldCheck, Droplets } from "lucide-react";

function ServiceHero() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  const features = [
    "Certified RO Engineers",
    "Same Day Service",
    "Affordable Pricing",
    "Genuine Spare Parts",
  ];

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 px-6 rounded-b-[3rem] z-10">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950"></div>
      </motion.div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center mt-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-flex items-center gap-3 mb-6 text-blue-300 font-bold text-[11px] tracking-[0.4em] uppercase bg-blue-900/30 px-6 py-2.5 rounded-full border border-blue-500/20 backdrop-blur-md"
          >
            <Droplets size={14} />
            Professional Water Solutions
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-[1] tracking-tight mb-8">
            RO Repair & <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Maintenance.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-8 text-xl text-blue-100/80 font-light max-w-xl leading-relaxed"
          >
            We provide installation, repair, AMC plans, filter replacement, and complete RO maintenance for homes, offices, and industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 mt-12"
          >
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-4 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-[12px] tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              Book Service
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <ArrowRight size={16} />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
          
          <h3 className="text-3xl font-serif text-white mb-8 relative z-10">
            Why Choose <span className="italic text-blue-300">Us?</span>
          </h3>

          <div className="space-y-6 relative z-10">
            {features.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (0.1 * index) }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-blue-900/50 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-slate-300 font-light text-lg group-hover:text-white transition-colors duration-300">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-10 flex items-center gap-5 rounded-[1.5rem] bg-blue-950/50 border border-blue-900/50 p-6 relative z-10 transition-colors hover:bg-blue-900/50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="p-3 rounded-full bg-blue-900 text-blue-400"
            >
              <Wrench size={24} />
            </motion.div>

            <div>
              <h4 className="font-bold text-white text-lg tracking-wide">
                500+ Services
              </h4>
              <p className="text-sm text-slate-400 font-light mt-1">
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