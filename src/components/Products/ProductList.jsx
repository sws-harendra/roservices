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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center p-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-800 shadow-sm flex items-center gap-1">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  {product.rating}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-sky-600">{product.price}</span>
                  <button className="bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center gap-2">
                    <ShoppingCart size={18} />
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
