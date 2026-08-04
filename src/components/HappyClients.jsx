import React from "react";
import { Quote, Star } from "lucide-react";

function HappyClient() {
  const clients = [
    {
      name: "Rajesh Kumar",
      company: "Shivam Builders",
      message:
        "Aqua Trust delivered an outstanding RO water treatment solution for our residential project. Their installation was professional and the after-sales support has been excellent.",
    },
    {
      name: "Priya Sharma",
      company: "Green Valley Hospital",
      message:
        "The team completed the installation before the deadline and explained every detail clearly. We highly recommend Aqua Trust for commercial water purification systems.",
    },
    {
      name: "Amit Verma",
      company: "Techno Solutions Pvt. Ltd.",
      message:
        "Reliable service, genuine spare parts, and prompt maintenance support. We've been working with Aqua Trust for over three years without any issues.",
    },
  ];

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold uppercase tracking-widest">
            Happy Clients
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            We Are Dedicated To Satisfy
            <span className="text-sky-600"> Every Client</span>
          </h2>

          <p className="text-slate-600 mt-5 max-w-3xl mx-auto leading-8">
            Our commitment to quality service, timely installation, and
            long-term maintenance has earned the trust of residential,
            commercial, and industrial customers across the region.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <Quote className="text-sky-600 mb-6" size={40} />

              <p className="text-slate-600 leading-8 italic">
                "{client.message}"
              </p>

              <div className="flex mt-6 mb-5 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <div className="border-t pt-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {client.name}
                </h3>

                <p className="text-sky-600 font-medium">{client.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HappyClient;
