import React from "react";
import { motion } from "framer-motion";

export default function PixelsPerfected() {
  const campaigns = [
    {
      img: "/assets/volvo-car.png",
      title: "The Wheels That Rolled In – Volvo",
      sub: "Driven by legacy, powered by performance. Just like our campaigns.",
      desc: "Ayatiworks crafted high-impact digital campaigns for Volvo, blending sleek creatives with sharp performance strategies, resulting in maximum visibility, engagement, and brand recall across premium audience segments.",
      tags: ["Performance Campaign", "Social Media"],
    },
    {
      img: "/assets/apex-hands.png",
      title: "The Steel Deal – Apex Dura TMT",
      sub: "Built for strength, branded for recall. A solid partnership in every sense.",
      desc: "As a 360° digital partner, we manage Apex Dura’s website, social media, creatives, and digital PR, building a durable digital foundation that matches the strength of their product.",
      tags: [],
    },
    {
      img: "/assets/apl-img.png",
      title: "The School That Schooled Us – APL Global School",
      sub: "Shaping their educational digital story online",
      desc: "From website maintenance to managing their complete presence on Meta, X, and more, Ayatiworks ensures APL Global School stays consistently visible, engaging, and connected with parents and students online.",
      tags: [],
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 flex items-center gap-2"
      >
        Pixels Perfected
        <img
          src="/icons/pixel-icon.png"
          alt="pixel-icon"
          className="h-6 w-6"
        />
      </motion.h2>

      {/* Campaigns */}
      <div className="space-y-12">
        {campaigns.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {item.title}
              </h3>
              {item.sub && (
                <p className="text-blue-700 font-semibold mb-2">{item.sub}</p>
              )}
              <p className="text-gray-700 leading-relaxed mb-4">{item.desc}</p>
              <div className="flex gap-3 flex-wrap">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-blue-700 text-blue-700 text-sm rounded-full hover:bg-blue-700 hover:text-white transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
