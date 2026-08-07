import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingButtons() {
  const phoneNumber = "9060809553";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
    

      {/* Call Button */}
      <a
        href={`tel:+91${phoneNumber}`}
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
}

export default FloatingButtons;
