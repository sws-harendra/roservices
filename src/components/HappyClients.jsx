import React from "react";
import { motion } from "motion/react";

function HappyClients() {
  const clients = [
    {
      name: "Yugraj Singh",
      location: "Patna City",
      message: "They have very good and quality collection of water purifiers. The staff are very friendly and professional. I bought new purifier from them and I am very happy with the service. The best part is that you can schedule service date and time according to our convenient time.",
    },
    {
      name: "Amit Kumar",
      location: "Kankarbagh",
      message: "I had a problem with my old RO system. They replaced the filters at a lower cost. It's working perfectly now. Excellent team.",
    },
  ];

  return (
    <section className="bg-slate-100 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1f3a5a] mb-4 tracking-tight">We are dedicated to satisfy clients</h2>
          <div className="w-16 h-1.5 bg-[#29b6f6] mx-auto mb-8"></div>
          <p className="text-slate-600 font-medium max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Our clients who connected with us.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 justify-start md:justify-center px-4 snap-x">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-md shadow-sm p-8 min-w-[300px] max-w-lg shrink-0 snap-center border border-slate-200"
            >
              <div className="text-[#29b6f6] text-4xl font-serif mb-4 leading-none font-bold">“</div>
              <p className="text-slate-600 text-base leading-relaxed mb-8 italic text-center font-medium">
                {client.message}
              </p>
              <div className="text-center mt-auto">
                <h4 className="font-extrabold text-[#1f3a5a] text-xl">{client.name}</h4>
                <span className="text-sm font-semibold text-slate-500">{client.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Dots Indicator */}
        <div className="flex justify-center mt-4">
           <div className="w-2 h-2 rounded-full bg-[#29b6f6]"></div>
        </div>

      </div>
    </section>
  );
}

export default HappyClients;
