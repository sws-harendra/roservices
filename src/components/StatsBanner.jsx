import React from "react";
import { ShieldCheck, Users, CheckCircle, MapPin } from "lucide-react";

function StatsBanner() {
  return (
    <div className="w-full bg-blue-600 py-10 rounded-2xl my-10 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative gradient / texture could go here */}
      <div className="absolute inset-0 bg-blue-700 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="relative z-10 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-500/50">
          
          <div className="flex flex-col items-center justify-center text-white px-4">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck size={32} />
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold leading-none">10+</span>
              </div>
            </div>
            <span className="text-blue-100 text-xs font-medium uppercase tracking-wide">Years of Experience</span>
          </div>

          <div className="flex flex-col items-center justify-center text-white px-4">
            <div className="flex items-center gap-3 mb-2">
              <Users size={32} />
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold leading-none">5,000+</span>
              </div>
            </div>
            <span className="text-blue-100 text-xs font-medium uppercase tracking-wide">Happy Customers</span>
          </div>

          <div className="flex flex-col items-center justify-center text-white px-4">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle size={32} />
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold leading-none">15,000+</span>
              </div>
            </div>
            <span className="text-blue-100 text-xs font-medium uppercase tracking-wide">Services Completed</span>
          </div>

          <div className="flex flex-col items-center justify-center text-white px-4">
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={32} />
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold leading-none">Patna</span>
              </div>
            </div>
            <span className="text-blue-100 text-xs font-medium uppercase tracking-wide">Service Coverage</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StatsBanner;
