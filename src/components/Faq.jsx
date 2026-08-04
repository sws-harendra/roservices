import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

function Faq() {
  const [active, setActive] = useState(0);

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
    <section className="py-10 bg-red from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold">
            <HelpCircle size={18} />
            Frequently Asked Questions
          </div>

          <h2 className="text-5xl font-bold text-slate-900 mt-6">
            Find Answers To
            <span className="text-sky-600"> Common Questions</span>
          </h2>

          <p className="mt-5 text-slate-600 text-lg max-w-3xl mx-auto leading-8">
            Everything you need to know about our RO installation, maintenance,
            repair services, and annual maintenance contracts.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition duration-300"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex justify-between items-center p-7 text-left"
              >
                <h3 className="text-xl font-semibold text-slate-800">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180 text-sky-600" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  active === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-7 pb-7">
                  <div className="border-t border-slate-200 pt-5">
                    <p className="text-slate-600 leading-8">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-sky-700 from-sky-600 to-cyan-500 p-10 text-center text-white shadow-2xl"
        >
          {/* Background Decoration */}
          <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-white/10"></div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative text-3xl md:text-4xl font-bold"
          >
            Still Have Questions?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="relative mx-auto mt-4 max-w-2xl text-sky-100 leading-7"
          >
            Our experts are available to help you choose the best RO solution
            and provide quick support whenever you need it.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative mt-8 rounded-full bg-white px-8 py-4 font-semibold text-sky-700 shadow-lg transition"
          >
            Contact Our Team →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
