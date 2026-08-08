import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingButtons() {
  const phoneNumber = "9060809553";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* WhatsApp Pill Button */}
      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-2.5 rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:scale-105 hover:shadow-[0_6px_16px_rgba(37,211,102,0.5)] transition-all duration-300"
      >
        <FaWhatsapp size={28} />
        <div className="flex flex-col text-left">
          <span className="text-[12px] font-medium leading-tight text-white/90">Chat on WhatsApp</span>
          <span className="text-[15px] font-bold leading-tight tracking-wide">+91 9060809553</span>
        </div>
      </a>

      {/* Call Button */}
      <a
        href={`tel:+91${phoneNumber}`}
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(37,99,235,0.4)] hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
}

export default FloatingButtons;
