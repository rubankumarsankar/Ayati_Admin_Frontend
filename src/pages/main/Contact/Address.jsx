import React from "react";
import { Mail, Phone } from "lucide-react"; // Optional icons

export default function Address() {
  const cards = [
    {
      title: "Email Address",
      icon: <Mail className="w-6 h-6" />,
      content: ["upendran@ayatiworks.com", "lavetohar@ayatiworks.com"],
      bg: "bg-blue-700",
      textColor: "text-white",
    },
    {
      title: "Mobile Number",
      icon: <Phone className="w-6 h-6" />,
      content: ["044-35031874", "044-35031878"],
      bg: "bg-white",
      textColor: "text-black",
    },
  ];

  return (
  <>
 <div className="flex flex-col sm:flex-row gap-10 max-w-xl mx-auto">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`flex flex-col p-6 rounded-lg shadow-md transition-colors duration-300 ${card.bg} ${card.textColor} hover:bg-blue-700 hover:text-white cursor-pointer`}
        >
          <div className="flex items-center gap-6 mb-8 font-semibold">
            {card.icon}
            {card.title}
          </div>
          <div className="space-y-1 text-sm">
            {card.content.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
    

  </>
   
  );
}
