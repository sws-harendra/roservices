import { Phone, Mail, MapPin, Clock } from "lucide-react";

const info = [
  {
    icon: <Phone size={26} />,
    title: "Call Us",
    value: "+91 79790 76001",
    desc: "Mon - Sun | 8:00 AM - 8:00 PM",
  },
  {
    icon: <Mail size={26} />,
    title: "Email Us",
    value: "support@company.com",
    desc: "We'll reply within 24 hours",
  },
  {
    icon: <MapPin size={26} />,
    title: "Visit Office",
    value: "Patna, Bihar",
    desc: "On-site Service Available",
  },
  {
    icon: <Clock size={26} />,
    title: "Working Hours",
    value: "8:00 AM - 8:00 PM",
    desc: "Monday - Sunday",
  },
];

function ContactInfo() {
  return (
    <section className="py-20  from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold">
            Contact Information
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            We're Always Here to Help
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-slate-600">
            Reach out to our team for RO installation, maintenance,
            repairs, and water treatment solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {info.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-l hover:-translate-y-2 transition-all duration-300"
            >

              {/* Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-sky-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 font-medium text-slate-700">
                {item.value}
              </p>

              <p className="mt-2 text-sm text-slate-500 leading-6">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;