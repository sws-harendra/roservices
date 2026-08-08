import React from "react";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import aboutCompany from "../../assets/images/Ro_purify.jpg";

function CompanyInfo() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative pr-8 pb-8"
          >
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
              <img
                src={aboutCompany}
                alt="About Company"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Overlapping Blue Box */}
            <div className="absolute bottom-0 right-0 bg-[#29b6f6] text-white p-6 rounded-sm max-w-[200px] shadow-lg">
              <p className="font-bold text-sm text-center leading-tight">
                Best<br />Experience in RO Service Industry
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[#29b6f6] font-bold text-sm mb-2 block">
              About RO Service Center
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6 leading-tight">
              Trusted Experts In <br />
              Water Treatment.
            </h2>

            <p className="text-slate-500 mb-4 text-sm leading-relaxed">
              We provide advanced RO systems, industrial water treatment, installation, maintenance, and annual service solutions for homes, businesses, and industries. Our mission is to deliver clean, safe, and sustainable water with reliable customer support.
            </p>

            {/* Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a href="tel:+919060809553" className="inline-flex items-center gap-2 bg-[#e74c3c] text-white font-bold text-sm px-6 py-3 hover:bg-[#c0392b] transition-colors shadow-md rounded-sm">
                <Phone size={16} />
                Call Us: +91 77640 18221
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;
