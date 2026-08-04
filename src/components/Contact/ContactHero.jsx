import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-sky-700 text-white">
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/10 px-5 py-2 backdrop-blur text-cyan-100"
        >
          💧 Trusted Water Treatment Experts
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Contact Our Experts
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="block text-cyan-300"
          >
            Anytime, Anywhere
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200"
        >
          Whether you need RO installation, annual maintenance, filter
          replacement, or emergency repair, our certified engineers are
          available to provide fast and reliable support.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{
              y: -3,
              boxShadow: "0 18px 40px rgba(0,0,0,.18)",
            }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-sky-700"
          >
            <Phone size={18} />
            Call Now
          </motion.button>

          <motion.button
            whileHover={{
              y: -3,
              backgroundColor: "#ffffff",
              color: "#0369a1",
            }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold backdrop-blur transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;
