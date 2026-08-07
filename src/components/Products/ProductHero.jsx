import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBag } from "lucide-react";

function ProductHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 px-6 rounded-b-[3rem] z-10">
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
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

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
            className="inline-flex items-center gap-3 mb-6 text-blue-300 font-bold text-[11px] tracking-[0.4em] uppercase bg-blue-900/30 px-6 py-2.5 rounded-full border border-blue-500/20 backdrop-blur-md"
          >
            <ShoppingBag size={14} />
            Premium Water Purifiers
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight mb-8">
            Purity You Can <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Taste.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-8 text-xl text-blue-100/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Explore our range of high-quality RO water purifiers and accessories designed to deliver safe, clean, and healthy drinking water for your home and office.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductHero;
