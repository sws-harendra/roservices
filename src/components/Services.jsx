import React from "react";
import { Phone } from "lucide-react";
import { motion } from "motion/react";

function Services() {
  const servicesData = [
    {
      title: "RO Repair & Maintenance",
      description: "We diagnose and fix issues with all types of RO systems, ensuring optimal performance.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "RO Installation & Replacement",
      description: "Professional installation and replacement of RO systems for homes and businesses.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Water Purifier Servicing",
      description: "Regular servicing to enhance the efficiency and longevity of your water purifiers.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Filter & Membrane Replacement",
      description: "High-quality replacement filters and membranes for better water quality.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">Our Services</h2>
          <div className="w-16 h-1.5 bg-[#29b6f6] mx-auto mb-6"></div>
          <p className="text-[#29b6f6] font-bold text-base md:text-lg uppercase tracking-wide">
            We Provide the Best Water Purifier Repair & Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Image */}
              <div className="w-full sm:w-1/3 shrink-0 rounded-lg overflow-hidden h-32 bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full sm:w-2/3 flex flex-col">
                <h3 className="text-[#29b6f6] font-extrabold text-xl mb-3">{service.title}</h3>
                <p className="text-slate-600 font-medium text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <a
                  href="tel:+917764018221"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2980b9] text-white font-bold text-sm rounded-sm shadow-md hover:bg-[#1a5276] transition-colors border-2 border-[#e74c3c] self-start"
                >
                  <Phone size={18} />
                  +91 77640 18221
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
