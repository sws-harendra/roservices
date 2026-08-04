import React from "react";
import { ShieldCheck, UserCheck, Clock, CircleDollarSign } from "lucide-react";

function BottomFeatures() {
  return (
    <section className="bg-slate-50 border-t border-slate-100 py-10 relative overflow-hidden">
      {/* Decorative water elements could go here */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 bg-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Pure & Safe Water</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">100% safe and healthy<br/>water for your family.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 bg-white">
              <UserCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Trusted Experts</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">Certified professionals<br/>with rich experience.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 bg-white">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Quick & Reliable</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">On-time service and<br/>customer support.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 bg-white">
              <CircleDollarSign size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Affordable Pricing</h4>
              <p className="text-[10px] text-gray-500 mt-0.5">Best quality service at<br/>competitive prices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomFeatures;
