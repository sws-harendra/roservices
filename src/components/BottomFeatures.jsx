import React from "react";
import { ShieldCheck, UserCheck, Clock, CircleDollarSign } from "lucide-react";
import { motion } from "motion/react";

function BottomFeatures() {
  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Pure & Safe Water",
      desc: "100% safe and healthy water for your family.",
    },
    {
      icon: <UserCheck size={28} />,
      title: "Trusted Experts",
      desc: "Certified professionals with rich experience.",
    },
    {
      icon: <Clock size={28} />,
      title: "Quick & Reliable",
      desc: "On-time service and customer support.",
    },
    {
      icon: <CircleDollarSign size={28} />,
      title: "Affordable Pricing",
      desc: "Best quality service at competitive prices.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left group"
            >
              <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center text-blue-400 bg-slate-950 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 shrink-0">
                {feature.icon}
              </div>
              <div className="mt-2 md:mt-0">
                <h4 className="font-serif text-lg text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BottomFeatures;
