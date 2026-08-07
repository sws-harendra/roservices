import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import banner from "../../assets/images/about-banner.jpg";
import { useNavigate } from "react-router-dom";

function AboutHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 px-6 rounded-b-[3rem] z-10">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/40 to-slate-950"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block mb-6 text-blue-300 font-bold text-[11px] tracking-[0.4em] uppercase"
          >
            Our Story
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-8">
            Pure Water.<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Real Trust.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-8 text-xl md:text-2xl text-blue-100/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            We provide reliable residential, commercial and industrial water treatment solutions with advanced technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
          >
            <motion.button
              onClick={() => navigate('/services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-[13px] tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              Our Services
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <ArrowRight size={16} />
              </span>
            </motion.button>

            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full font-bold text-[13px] tracking-[0.2em] uppercase text-white border border-white/20 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
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
