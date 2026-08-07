import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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
    value: "info@gsservicesindia.in",
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
    const phoneNumber = "9060809553"; // Client's WhatsApp Number

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
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 space-y-5"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Book a Service
          </h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500 transition"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500 transition"
          />

          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500 transition"
          >
            <option value="">Select Service</option>
            <option value="RO Repair">RO Repair</option>
            <option value="Installation">Installation</option>
            <option value="AMC">AMC</option>
            <option value="Filter Change">Filter Change</option>
          </select>

          <textarea
            rows={5}
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            placeholder="Describe your issue..."
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500 resize-none transition"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-semibold shadow-lg"
          >
            Submit Request
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-sky-700 from-sky-700 to-cyan-600 text-white rounded-3xl shadow-xl p-8"
        >
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm">
            Get In Touch
          </span>

          <h2 className="text-3xl font-bold mt-5">
            We're Here to Help
          </h2>

          <p className="mt-3 text-sky-100">
            Contact us for RO installation, repair, AMC, and water treatment
            solutions.
          </p>

          <div className="mt-8 space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.45,
                }}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              >
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                  className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center"
                >
                  {item.icon}
                </motion.div>

                <div>
                  <p className="text-sm text-sky-100">
                    {item.title}
                  </p>

                  <h3 className="font-semibold group-hover:text-cyan-200 transition-colors">
                    {item.value}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactForm;