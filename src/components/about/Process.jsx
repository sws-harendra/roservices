import React from "react";
import { ClipboardCheck, Search, Wrench, ShieldCheck } from "lucide-react";

const processData = [
  {
    id: "01",
    title: "Consultation",
    desc: "Understand customer requirements and provide the best solution.",
    icon: ClipboardCheck,
  },
  {
    id: "02",
    title: "Site Inspection",
    desc: "Our experts inspect the location for proper planning.",
    icon: Search,
  },
  {
    id: "03",
    title: "Installation",
    desc: "Professional installation with quality assurance.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Support",
    desc: "Regular maintenance and 24/7 customer support.",
    icon: ShieldCheck,
  },
];

function Process() {
  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Working Process
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We follow a simple and efficient process to deliver the best water
            treatment solutions.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 text-center group"
              >
                {/* Number */}
                <span className="absolute top-4 right-5 text-5xl font-bold text-sky-100">
                  {item.id}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 transition">
                  <Icon
                    size={30}
                    className="text-sky-600 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-slate-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-6">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
