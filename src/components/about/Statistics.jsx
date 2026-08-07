import React from "react";
import { BriefcaseBusiness, Users, Award, Headset } from "lucide-react";
import { motion } from "motion/react";

function Statistics() {
  const stats = [
    {
      icon: <BriefcaseBusiness size={32} />,
      number: "500+",
      title: "Projects Completed",
      description:
        "Successfully delivering residential and industrial water treatment solutions.",
    },
    {
      icon: <Users size={32} />,
      number: "1000+",
      title: "Happy Clients",
      description:
        "Trusted by homeowners, businesses and industries across the region.",
    },
    {
      icon: <Award size={32} />,
      number: "10+",
      title: "Years Experience",
      description:
        "A decade of expertise in RO installation, maintenance and repair services.",
    },
    {
      icon: <Headset size={32} />,
      number: "24/7",
      title: "Customer Support",
      description:
        "Quick assistance whenever you need professional technical support.",
    },
  ];

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden text-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-blue-900/50 text-blue-300 font-bold text-[10px] tracking-[0.3em] uppercase border border-blue-800/50"
          >
            Our Achievements
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl md:text-7xl font-serif tracking-tight leading-tight"
          >
            Trusted Water Treatment <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Experts You Can Rely On</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-slate-400 leading-relaxed font-light"
          >
            We take pride in providing high-quality water purification,
            installation, repair, and maintenance services with a strong
            commitment to customer satisfaction.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl hover:bg-slate-800/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="mt-8 text-5xl font-serif text-white">
                {item.number}
              </h3>

              <h4 className="mt-4 text-xl font-serif text-blue-200">
                {item.title}
              </h4>

              <p className="mt-4 text-slate-400 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
