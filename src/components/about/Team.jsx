import React from "react";
import { UserRound, ShieldCheck, Award, Headset } from "lucide-react";
import { motion } from "motion/react";

function Team() {
  const team = [
    {
      icon: <UserRound size={32} />,
      title: "Certified Engineers",
      desc: "Experienced professionals delivering reliable water treatment solutions.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Quality Assurance",
      desc: "Every project follows strict quality standards and industry practices.",
    },
    {
      icon: <Award size={32} />,
      title: "10+ Years Experience",
      desc: "Trusted expertise in residential, commercial, and industrial projects.",
    },
    {
      icon: <Headset size={32} />,
      title: "24/7 Support",
      desc: "Quick response and dedicated customer support whenever you need us.",
    },
  ];

  return (
    <section className="py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-100 px-5 py-2 rounded-full inline-block mb-6"
          >
            Our Strength
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif text-slate-900 mt-2 tracking-tight"
          >
            Meet Our <span className="italic text-blue-700">Team.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-light max-w-2xl mx-auto mt-8 text-lg leading-relaxed"
          >
            Our skilled engineers and support specialists are committed to
            delivering safe, efficient, and high-quality water treatment
            solutions.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 text-center group"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-serif text-slate-900 mt-8 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-500 font-light mt-4 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
