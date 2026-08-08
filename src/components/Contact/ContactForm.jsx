import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const contactInfo = [
  {
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+91 90608 09553",
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "Dk.enterprisesptn@gmail.com",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Sipara patna 20 Gaya Line road",
  },
  {
    icon: <Clock size={20} />,
    title: "Working Hours",
    value: "Mon - Sun : 8 AM - 8 PM",
  },
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    issue: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "7764018221"; // Client's WhatsApp Number

    if (!formData.name || !formData.phone) {
      alert("Please enter your full name and phone number.");
      return;
    }

    const message = `Hello AquaPrime! I would like to book a service.
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service Required:* ${formData.service || "Not Specified"}
*Issue:* ${formData.issue || "None"}`;

    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    // Reset form after sending
    setFormData({ name: "", phone: "", service: "", issue: "" });
  };

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-slate-50 p-10 md:p-14 rounded-[3rem] shadow-sm border border-slate-100"
        >
          <h2 className="text-4xl font-serif text-slate-900 mb-8">
            Book a Service
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 tracking-wide uppercase mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-4 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 tracking-wide uppercase mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-4 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 tracking-wide uppercase mb-2">Service Type</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-4 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light appearance-none"
              >
                <option value="">Select Service</option>
                <option value="RO Repair">RO Repair</option>
                <option value="Installation">Installation</option>
                <option value="AMC">AMC</option>
                <option value="Filter Change">Filter Change</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 tracking-wide uppercase mb-2">Issue Description</label>
              <textarea
                rows={4}
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder="Describe your issue..."
                className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-4 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all font-light"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-slate-950 hover:bg-blue-600 text-white py-4 rounded-[1.5rem] font-bold text-[12px] tracking-[0.2em] uppercase transition-colors shadow-lg flex items-center justify-center gap-3 mt-4"
            >
              Submit Request
              <ArrowRight size={16} />
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-slate-950 text-white rounded-[3rem] shadow-2xl p-10 md:p-14 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-block bg-blue-900/50 border border-blue-500/30 px-5 py-2 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase text-blue-300 mb-6">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6">
              We're Here <br />
              <span className="italic text-blue-300">to Help.</span>
            </h2>

            <p className="text-blue-100/80 font-light leading-relaxed mb-12">
              Contact us for RO installation, repair, AMC, and water treatment solutions. Our experts are ready to assist you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-1">
                      {item.title}
                    </p>
                    <h3 className="font-serif text-lg text-white">
                      {item.value}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactForm;