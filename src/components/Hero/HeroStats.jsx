import React from "react";
import { Settings, UserCheck, Clock, ShieldCheck } from "lucide-react";

function HeroStats() {
  return (
    <div className="absolute -bottom-10 -left-10 lg:-left-20 bg-white rounded-xl shadow-xl p-5 border border-gray-100 max-w-md w-full">
      <h3 className="font-bold text-slate-800 text-sm mb-4">Why Choose AquaPrime?</h3>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
            <Settings size={18} />
          </div>
          <span className="text-[10px] text-gray-600 font-medium leading-tight">Advanced<br/>Technology</span>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
            <UserCheck size={18} />
          </div>
          <span className="text-[10px] text-gray-600 font-medium leading-tight">Expert<br/>Engineers</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
            <Clock size={18} />
          </div>
          <span className="text-[10px] text-gray-600 font-medium leading-tight">Timely<br/>Service</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
            <ShieldCheck size={18} />
          </div>
          <span className="text-[10px] text-gray-600 font-medium leading-tight">100% Customer<br/>Satisfaction</span>
        </div>
      </div>
    </div>
  );
}

export default HeroStats;
