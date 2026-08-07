import React from "react";
import { motion } from "motion/react";
import { ShoppingCart, Check, Star } from "lucide-react";

import roImg from "../../assets/images/Ro_purify.jpg";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "AquaPrime Ultra RO+UV",
      description: "Advanced 7-stage purification with RO+UV+UF+TDS control for 100% pure water.",
      price: "₹12,499",
      rating: 4.8,
      features: ["7-stage purification", "Copper+ Alkaline", "10L Storage"],
      image: roImg
    },
    {
      id: 2,
      name: "AquaPrime Smart Pro",
      description: "Smart RO water purifier with digital display and real-time TDS monitoring.",
      price: "₹15,999",
      rating: 4.9,
      features: ["Digital Display", "App Connectivity", "12L Storage"],
      image: roImg
    },
    {
      id: 3,
      name: "AquaPrime Basic RO",
      description: "Reliable and affordable RO purification for clean drinking water every day.",
      price: "₹8,999",
      rating: 4.6,
      features: ["5-stage RO", "Space Saving", "7L Storage"],
      image: roImg
    },
    {
      id: 4,
      name: "Commercial RO Plant",
      description: "High capacity 50 LPH RO plant for offices, schools, and restaurants.",
      price: "₹24,500",
      rating: 4.7,
      features: ["50 LPH Capacity", "Heavy Duty", "Auto Flush"],
      image: roImg
    },
    {
      id: 5,
      name: "RO Replacement Filter Kit",
      description: "Complete set of pre-filter, sediment, and carbon filters for yearly maintenance.",
      price: "₹1,299",
      rating: 4.5,
      features: ["Genuine Parts", "Universal Fit", "Easy to Install"],
      image: roImg
    },
    {
      id: 6,
      name: "High TDS Membrane",
      description: "Premium RO membrane capable of handling water with up to 2500 ppm TDS.",
      price: "₹2,100",
      rating: 4.8,
      features: ["Anti-Scaling", "Long Life", "Up to 2500 TDS"],
      image: roImg
    }
  ];

  return (
    <section className="py-32 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-slate-100/50"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100/50 flex items-center justify-center p-8 group-hover:bg-slate-100 transition-colors duration-500">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover rounded-[2rem] shadow-lg"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-bold text-slate-800 shadow-sm flex items-center gap-1.5 border border-slate-200/50">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  {product.rating}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-1">{product.description}</p>
                
                <div className="space-y-3 mb-8 bg-slate-50 p-5 rounded-[1.5rem]">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600 font-light">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-3xl font-serif text-slate-900">{product.price}</span>
                  <button className="bg-slate-950 text-white hover:bg-blue-600 px-6 py-3 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase transition-colors flex items-center gap-2 shadow-lg hover:shadow-blue-600/30">
                    <ShoppingCart size={16} />
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
