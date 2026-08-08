import React from "react";
import { motion } from "motion/react";
import { Phone, CheckCircle } from "lucide-react";

function WhyChooseUs() {

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#2c3e50] mb-6 tracking-tight">
              Why Choose us
            </h2>
            <p className="text-blue-600 text-lg md:text-xl font-bold mb-8">
              We do our best to provide excellent water Purifier service.
            </p>

            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mb-6">
              At RO Service Center, we believe in delivering exceptional service with a commitment to quality and customer satisfaction. Our team consists of experienced and certified technicians who are well-versed in handling all types of RO water purifiers. Whether it's installation, repair, or maintenance, we ensure that our services meet the highest industry standards.
            </p>

            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mb-8">
              Transparency and affordability are at the core of our business. We offer competitive pricing with no hidden costs, ensuring that you get the best value for your money. Additionally, we use only high-quality spare parts and components to enhance the longevity and efficiency of your RO system.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "Independent RO Service Provider",
                "Guaranteed Service In 4 Hours Only",
                "Experienced & Certified Technicians",
                "Quality Spare Parts & Components"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 shadow-sm border border-blue-200">
                    <CheckCircle size={14} strokeWidth={3} />
                  </div>
                  <span className="text-base text-slate-700 font-bold tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <motion.a
              href="tel:+919060809553"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2980b9] text-white font-bold rounded-sm shadow-md hover:bg-[#1a5276] transition-colors border-2 border-[#e74c3c]"
            >
              <Phone size={18} />
              +91 9060809553
            </motion.a>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative bg-slate-100/50 rounded-3xl overflow-hidden h-[400px] lg:h-[500px] flex items-center justify-center p-6 border border-slate-200 shadow-sm"
          >
            <img
              src="/products/8.png"
              alt="Why Choose Us"
              className="w-full h-full object-contain object-center drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
