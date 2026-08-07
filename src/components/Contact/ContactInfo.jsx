import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

const info = [
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    value: "+91 90608 09553",
    desc: "Mon - Sun | 8:00 AM - 8:00 PM",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    value: "Dk.enterprisesptn@gmail.com",
    desc: "We'll reply within 24 hours",
  },
  {
    icon: <MapPin size={24} />,
    title: "Visit Office",
    value: "Sipara patna 20 Gaya Line road",
    desc: "On-site Service Available",
  },
  {
    icon: <Clock size={24} />,
    title: "Working Hours",
    value: "8:00 AM - 8:00 PM",
    desc: "Monday - Sunday",
  },
];

function ContactInfo() {
  return (
    <section className="py-32 bg-slate-50 relative z-20 -mt-10 rounded-t-[3rem] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-100 px-5 py-2 rounded-full mb-6">
            Contact Information
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-serif text-slate-900 leading-tight tracking-tight">
            We're Always Here <br />
            <span className="italic text-blue-700">to Help.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {info.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={index}
              className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-10 text-center shadow-sm hover:shadow-2xl hover:bg-slate-950 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-blue-300 transition-colors duration-500 mb-8">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif text-slate-900 group-hover:text-white transition-colors duration-500 mb-3">
                {item.title}
              </h3>

              <p className="font-light text-slate-600 group-hover:text-blue-100 transition-colors duration-500 mb-2">
                {item.value}
              </p>

              <p className="text-sm text-slate-400 font-light group-hover:text-slate-500 transition-colors duration-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ContactInfo;