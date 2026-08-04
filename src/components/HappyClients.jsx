import React from "react";
import { Star } from "lucide-react";

function HappyClients() {
  const clients = [
    {
      name: "Rajesh Kumar",
      company: "Director, Shubham Builders",
      message:
        "AquaPrime delivered an outstanding RO service. Their team is skilled, professional and the water quality has improved so much. We truly support them.",
    },
    {
      name: "Priya Sharma",
      company: "Green Valley Hospital",
      message:
        "The team completed the installation fast and their service is excellent. Our family is now drinking clean and safe water. Highly recommended for their commercial water purification systems.",
    },
    {
      name: "Amit Verma",
      company: "Verma Solutions Pvt. Ltd.",
      message:
        "Reliable service, genuine spare parts, and expert engineers. AquaPrime keeps our water purifier in perfect condition every time.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">
            HAPPY CLIENTS
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            We Are Dedicated To Satisfy <span className="text-blue-600">Every Client</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Our commitment to quality service, timely solutions, and long-term maintenance has earned the trust of residential, commercial, and industrial customers across the region.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col"
            >
              <div className="text-6xl text-blue-600 font-serif leading-none h-12">"</div>

              <p className="text-gray-600 text-sm leading-relaxed min-h-[100px]">
                "{client.message}"
              </p>

              <div className="flex mt-4 mb-6 text-yellow-400">
                <Star size={14} fill="currentColor" className="mr-1" />
                <Star size={14} fill="currentColor" className="mr-1" />
                <Star size={14} fill="currentColor" className="mr-1" />
                <Star size={14} fill="currentColor" className="mr-1" />
                <Star size={14} fill="currentColor" />
              </div>

              <div className="mt-auto">
                <div className="w-full h-0.5 bg-black mb-4"></div>
                <h3 className="text-sm font-bold text-slate-900">
                  {client.name}
                </h3>
                <p className="text-blue-600 text-[11px] font-semibold mt-1 uppercase tracking-wide">
                  {client.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots pagination mock */}
        <div className="flex justify-center mt-10 gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <div className="w-2 h-2 rounded-full bg-blue-200"></div>
          <div className="w-2 h-2 rounded-full bg-blue-200"></div>
          <div className="w-2 h-2 rounded-full bg-blue-200"></div>
        </div>
      </div>
    </section>
  );
}

export default HappyClients;
