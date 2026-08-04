import React from "react";
import { Wrench, Settings, Droplets, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Wrench size={24} className="text-blue-600" />,
    title: "RO Repair & Maintenance",
    description: "We diagnose and fix issues in all types of RO systems. Fast, reliable & affordable.",
    tags: ["Quick Service", "Warranty"],
    features: [
      "Complete system diagnosis",
      "All brands supported",
      "Genuine spare parts",
      "Warranty on repairs",
    ],
  },
  {
    icon: <Settings size={24} className="text-blue-600" />,
    title: "RO Installation & Replacement",
    description: "Professional installation and replacement of all types of RO systems.",
    tags: ["Expert Installation", "Warranty"],
    features: [
      "Professional setup",
      "All brands installation",
      "Old unit exchange",
      "Installation warranty",
    ],
  },
  {
    icon: <Droplets size={24} className="text-blue-600" />,
    title: "Water Purifier Servicing",
    description: "Regular servicing to enhance performance and improve the lifespan of your water purifier.",
    tags: ["Thorough Cleaning", "Warranty"],
    features: [
      "Thorough Cleaning",
      "Performance check",
      "Filter replacement",
      "Water quality testing",
    ],
  },
];

function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900">
            Our Expert Services for <span className="text-blue-600">Clean & Safe Water</span>
          </h2>
          <p className="mt-4 text-[15px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Professional cleaning solutions for all your RO and water purifier needs across Patna with certified technicians and genuine spare parts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mt-3 text-sm leading-relaxed min-h-[60px]">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex gap-2 mt-4">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-semibold bg-green-50 text-green-700 px-3 py-1 rounded-full flex items-center gap-1">
                    {tag === "Warranty" ? (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    ) : (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10-10"/></svg>
                    )}
                    {tag}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 mb-8 flex-grow">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-sm font-semibold transition">
                <Phone size={16} />
                Call Now
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
            View Our Services
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
