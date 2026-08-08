import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

function ContactHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[80vh] py-32 flex items-center justify-center overflow-hidden bg-slate-950 px-6 rounded-b-[3rem] z-10">
      {/* Background Parallax Layer */}
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
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-flex items-center gap-3 mb-6 text-blue-300 font-bold text-[11px] tracking-[0.4em] uppercase bg-blue-900/30 px-6 py-2.5 rounded-full border border-blue-500/20 backdrop-blur-md"
          >
            Trusted Water Experts
          </motion.span>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight mb-8">
            Contact Our <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Experts.
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-8 text-xl text-blue-100/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Whether you need RO installation, annual maintenance, filter replacement, or emergency repair, our certified engineers are available to provide fast and reliable support.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="tel:+917764018221"
              whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-[12px] tracking-[0.2em] uppercase transition-all"
            >
              <Phone size={16} />
              Call Now
            </motion.a>

            <motion.a
              href="https://wa.me/917764018221"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 bg-white/5 border border-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-[12px] tracking-[0.2em] uppercase transition-all hover:text-blue-300 hover:border-blue-300/50"
            >
              <MessageCircle size={16} />
              WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;
