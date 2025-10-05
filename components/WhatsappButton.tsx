import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = " 916267439056";
  const message = "Hello IQCA Team, I would like to know more about your courses.";
  const encodedMessage = encodeURIComponent(message);
  const sanitizedPhone = phoneNumber.replace(/\D/g, "");
  const whatsappLink = `https://api.whatsapp.com/send?phone=${sanitizedPhone}&text=${encodedMessage}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-[1100] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
