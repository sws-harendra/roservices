import React from "react";
import { Wrench, Settings, Droplets, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 md:flex justify-between items-end gap-8">
          <div>
            <span className="text-blue-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">Advanced Water <br />Solutions.</h2>
          </div>
          <p className="text-slate-500 max-w-sm mt-6 md:mt-0 font-light text-lg leading-relaxed">
            Discover how our professional cleaning, repair, and installation services guarantee pure and safe drinking water for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1 - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-[#FAFAFA] border border-slate-100 p-8 md:p-12 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-110">
              <Wrench className="w-32 h-32 text-blue-600" />
            </div>
            <h3 className="text-3xl font-serif mb-4 relative z-10 text-slate-900">Comprehensive RO Repair</h3>
            <p className="text-slate-600 text-lg max-w-md relative z-10 font-light leading-relaxed mb-8">
              Complete system diagnosis and maintenance. We identify faults quickly, support all brands, and use genuine spare parts to restore your purifier's performance.
            </p>
            <div className="flex flex-wrap gap-2 relative z-10">
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full">Fast Service</span>
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full">Warranty Included</span>
            </div>
          </motion.div>

          {/* Bento Item 2 - Dark Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-blue-900 p-8 group hover:-translate-y-1 transition-all duration-500 shadow-xl shadow-blue-900/20 text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-transparent opacity-50 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 opacity-20">
              <Settings className="w-24 h-24 text-white" />
            </div>
            <h3 className="text-2xl font-serif mb-4 relative z-10">Installation & Setup</h3>
            <p className="text-blue-100/90 relative z-10 font-light leading-relaxed mb-6">
              Expert, hassle-free installation of any new RO system. We also offer great exchange values for your old units.
            </p>
            <div className="relative z-10 mt-auto">
               <button onClick={() => navigate('/contact')} className="text-sm font-semibold text-white underline underline-offset-4 hover:text-blue-200 transition">Book Installation</button>
            </div>
          </motion.div>

          {/* Bento Item 3 - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#FAFAFA] border border-slate-100 p-8 group hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 hover:-translate-y-1"
          >
            <Droplets className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-serif mb-4 text-blue-700">Deep Cleaning</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Regular servicing, filter replacements, and water quality testing to extend the lifespan of your machine.
            </p>
          </motion.div>

          {/* Bento Item 4 - Spans 2 columns, Actionable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-[#FAFAFA] border border-slate-100 p-8 md:p-12 group flex flex-col md:flex-row items-start md:items-center justify-between hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-serif mb-4 text-slate-900">Ready for Pure Water?</h3>
              <p className="text-slate-600 text-lg max-w-md font-light leading-relaxed">
                Our certified technicians are available 24/7. Book your service today and ensure your family drinks safe water.
              </p>
            </div>
            <div 
              onClick={() => navigate('/contact')}
              className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 text-slate-400 group-hover:text-white transition-all duration-500 cursor-pointer group-hover:border-transparent shadow-sm"
            >
              <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
