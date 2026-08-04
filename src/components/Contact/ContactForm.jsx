import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

const contactInfo = [
  {
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "info@aquatrust.com",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Patna, Bihar",
  },
  {
    icon: <Clock size={20} />,
    title: "Working Hours",
    value: "Mon - Sun : 8 AM - 8 PM",
  },
];

function ContactForm() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 space-y-5"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Book a Service
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500 transition"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500 transition"
          />

          <select className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500 transition">
            <option>Select Service</option>
            <option>RO Repair</option>
            <option>Installation</option>
            <option>AMC</option>
            <option>Filter Change</option>
          </select>

          <textarea
            rows={5}
            placeholder="Describe your issue..."
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-sky-500 resize-none transition"
          />

          <motion.button
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