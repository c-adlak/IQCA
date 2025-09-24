"use client";
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#bf9c56",
          color: "white",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <MessageCircle size={24} />
      </div>

      {isOpen && (
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/vVKDM1hsBee3fynw29TsG"
          width="350"
          height="500"
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            zIndex: 999,
          }}
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
};

export default Chatbot;
