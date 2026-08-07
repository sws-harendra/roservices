import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Droplets, Wrench, Headphones } from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Droplets size={32} />,
      title: "Pure Water Solutions",
      description:
        "Advanced RO systems delivering clean, safe, and healthy water.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Quality Guaranteed",
      description:
        "We use premium products and follow the highest quality standards.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Expert Installation",
      description:
        "Experienced technicians ensure hassle-free installation and maintenance.",
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Support",
      description:
        "Our support team is always available to assist you whenever needed.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-50 px-5 py-2 rounded-full inline-block mb-6">
            Why Choose Us
          </p>

          <h2 className="text-5xl lg:text-7xl font-serif text-slate-900 mt-3 tracking-tight leading-tight">
            Trusted Water Treatment <br className="hidden md:block" />
            <span className="italic text-blue-700">Experts.</span>
          </h2>

          <p className="text-slate-500 font-light mt-8 max-w-2xl mx-auto leading-relaxed text-lg">
            We provide reliable water purification solutions with modern
            technology, certified engineers, and outstanding customer support.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-10 hover:bg-blue-900 transition-colors duration-500"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white text-blue-600 group-hover:bg-blue-800 group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-slate-900 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-500 font-light leading-relaxed group-hover:text-blue-100 transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
