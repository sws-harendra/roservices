import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Droplets, Wrench, Headphones } from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Droplets size={40} />,
      title: "Pure Water Solutions",
      description:
        "Advanced RO systems delivering clean, safe, and healthy water.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Quality Guaranteed",
      description:
        "We use premium products and follow the highest quality standards.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Expert Installation",
      description:
        "Experienced technicians ensure hassle-free installation and maintenance.",
    },
    {
      icon: <Headphones size={40} />,
      title: "24/7 Customer Support",
      description:
        "Our support team is always available to assist you whenever needed.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sky-600 font-semibold uppercase tracking-[3px]">
            Why Choose Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Trusted Water Treatment Experts
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
            We provide reliable water purification solutions with modern
            technology, certified engineers, and outstanding customer support.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120,
                y: 30,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-l hover:shadow-2xl p-8"
            >
              {/* Background Circle */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-50 transition-all duration-500 group-hover:scale-150" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-slate-900 text-center">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-center text-gray-600 leading-7">
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
