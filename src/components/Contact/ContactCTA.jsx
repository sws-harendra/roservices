import { PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/30 rounded-full blur-[80px]"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center text-white relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold tracking-tight"
        >
          Need RO Repair Today?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-xl text-blue-100 font-light"
        >
          Book your service in less than a minute.
        </motion.p>

        <motion.a 
          href="tel:+917764018221"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-flex items-center gap-3 bg-white text-slate-950 px-10 py-4 rounded-full font-bold text-[12px] tracking-[0.2em] uppercase shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all"
        >
          <PhoneCall size={18} className="text-blue-600" />
          Call Now
        </motion.a>
      </div>
    </section>
  );
}
