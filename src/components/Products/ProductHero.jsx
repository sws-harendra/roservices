import React from "react";
import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";

function ProductHero() {
  return (
    <section className="bg-sky-600 text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm mb-6"
        >
          <ShoppingBag size={18} />
          Premium Water Purifiers
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-6"
        >
          Our Products
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sky-100 max-w-2xl mx-auto text-lg"
        >
          Explore our range of high-quality RO water purifiers and accessories designed to deliver safe, clean, and healthy drinking water for your home and office.
        </motion.p>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
         <div className="absolute top-48 -right-24 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>
    </section>
  );
}

export default ProductHero;
