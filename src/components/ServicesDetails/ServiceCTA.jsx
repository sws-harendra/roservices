import React from "react";
import { motion } from "motion/react";
import { PhoneCall } from "lucide-react";

function ServiceCTA() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply pointer-events-none"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-6">
            Ready for <span className="italic text-blue-300">Pure Water?</span>
          </h2>
          
          <p className="text-xl text-blue-100/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your professional RO repair or installation appointment today and ensure the health of your family with our expert services.
          </p>

          <motion.a
            href="tel:+919060809553"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-[13px] tracking-[0.2em] uppercase transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <PhoneCall size={20} />
            </span>
            Call Now: +91 9060809553
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceCTA;
