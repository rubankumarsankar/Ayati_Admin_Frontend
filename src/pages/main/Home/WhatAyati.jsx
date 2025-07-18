import React from "react";
import { motion } from "framer-motion";

export default function WhatAyati() {
  const cardData = [
    {
      title: "BRANDWIDTH",
      subtitle: "CTRL + ALT + BRAND",
      points: [
        "Branding Services",
        "Branding Strategy and Positioning",
        "Experience Design",
        "Creative Marketing",
        "Marketing Strategy Consulting",
        "Customer Acquisition",
      ],
    },
    {
      title: "GRAM & GLORY",
      subtitle: "The Vibe Bureaux",
      points: [
        "Instagram Ads Optimization",
        "Content Strategy for Reels",
        "Audience Engagement Growth",
        "Creative Campaign Execution",
        "Analytics & Performance Reports",
      ],
    },
    {
      title: "The Vibe Bureaux",
      subtitle: "Good Vibes",
      points: [
        "Influencer Marketing",
        "Instagram Marketing",
        "Social Media Marketing",
        "Interactive Social Media Agency",
        "Response Management (If Offered)",
        "Multilingual Marketing",
      ],
    },
    {
      title: "360 CREATIVE HUB",
      subtitle: "End-to-End Solutions",
      points: [
        "Brand Identity Design",
        "Digital Campaign Planning",
        "Print & Outdoor Marketing",
        "Video Production",
        "UI/UX Design for Web & App",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-6 px-4 md:px-10 lg:px-20 flex flex-col">
            <div className="border-t border-black/70 shadow-xl my-8"></div>

      {/* What Ayati Brew’s + 360 Integrated Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 mb-10"
      >
        <h3 className="text-2xl font-bold text-blue-900 relative">
          What Ayati Brew’s
          <span className="block h-1 w-24 bg-blue-700 mt-1 mx-auto md:mx-0"></span>
        </h3>
        <h3 className="text-2xl font-bold text-blue-900 relative">
          360 Integrated Solutions
          <span className="block h-1 w-24 bg-blue-700 mt-1 mx-auto md:mx-0"></span>
        </h3>
      </motion.div>

      {/* Cards - 2 rows × 2 columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white shadow-lg hover:shadow-2xl rounded-xl p-6 border-t-4 border-blue-700 transition flex"
          >
            {/* Left Side - Content */}
            <div className="flex-1">
              <h4 className="text-blue-800 font-bold text-lg uppercase mb-1">
                {card.subtitle && <span className="text-gray-500">{card.subtitle}</span>}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                {card.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Side - Vertical Title */}
            <div className="ml-4 flex items-center">
              <p className="text-blue-800 font-bold text-sm md:text-lg tracking-widest writing-vertical">
                {card.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
            <div className="border-b border-black/70 shadow-xl my-8"></div>

    </section>
  );
}
