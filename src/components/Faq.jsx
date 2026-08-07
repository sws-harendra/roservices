import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

function Faq() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How often should I service my RO water purifier?",
      answer:
        "We recommend servicing your RO water purifier every 3 to 6 months depending on water quality and daily usage. Regular maintenance ensures safe drinking water and extends the life of the system.",
    },
    {
      question: "What are the signs that my RO needs repair?",
      answer:
        "Common signs include slow water flow, unusual taste or odor, leakage, noisy operation, and frequent filter blockage. If you notice any of these issues, schedule a service immediately.",
    },
    {
      question: "Do you provide same-day RO service in Patna?",
      answer:
        "Yes. We provide same-day RO installation, repair, and maintenance services in most areas of Patna, subject to technician availability.",
    },
    {
      question: "Do you service all RO brands?",
      answer:
        "Yes. Our experienced technicians service all major RO brands including Kent, Aquaguard, Livpure, Pureit, AO Smith, Blue Star, and many more.",
    },
    {
      question: "What is included in your AMC (Annual Maintenance Contract)?",
      answer:
        "Our AMC includes scheduled maintenance visits, complete system inspection, filter cleaning, performance testing, priority support, and discounted spare parts whenever required.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-50 px-5 py-2 rounded-full"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-serif text-slate-900 mt-8 tracking-tight leading-tight"
          >
            Common <span className="text-blue-700 italic pr-2">Questions.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-light mt-8 max-w-2xl mx-auto leading-relaxed text-lg"
          >
            Everything you need to know about our RO installation, maintenance, repair services, and annual maintenance contracts.
          </motion.p>
        </div>

        {/* FAQ */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="border-b border-slate-100 last:border-0 overflow-hidden"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <h3 className={`text-xl font-serif transition-colors duration-300 ${active === index ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'}`}>
                  {faq.question}
                </h3>
                <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${active === index ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                  <ChevronDown className={`transition-transform duration-500 ${active === index ? "rotate-180" : ""}`} />
                </span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-12">
                      <p className="text-slate-500 font-light leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[3rem] bg-blue-900 p-12 md:p-16 text-center text-white shadow-2xl shadow-blue-900/20"
        >
          {/* Background Decoration */}
          <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative text-4xl md:text-5xl font-serif tracking-tight"
          >
            Still Have Questions?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="relative mx-auto mt-6 max-w-xl text-blue-100 font-light leading-relaxed text-lg"
          >
            Our experts are available to help you choose the best RO solution and provide quick support whenever you need it.
          </motion.p>

          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative mt-10 rounded-full bg-white px-10 py-4 font-bold text-[13px] tracking-[0.2em] uppercase text-slate-900 shadow-xl transition hover:shadow-blue-500/20"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
