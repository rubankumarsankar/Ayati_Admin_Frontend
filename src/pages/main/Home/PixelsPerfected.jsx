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
    <section className="bg-white section">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container text-left relative mb-12"
      >
        <h2 className="section-title relative inline-block">
          Pixels Perfected
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[150px] mt-3 origin-left rounded-full"
          />
        </h2>
      </motion.div>

      {/* Campaigns */}
      <div className="section-container space-y-16">
        {campaigns.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-top ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full">
              <h3 className="font-primary text-2xl md:text-3xl font-bold text-black/80 mb-3">
                {item.title}
              </h3>
              {item.sub && (
                <p className="text-black font-semibold mb-3">{item.sub}</p>
              )}
              <p className="text-gray-600 leading-relaxed mb-5">{item.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 border border-blue-700 text-blue-700 text-sm rounded-full hover:bg-blue-700 hover:text-white transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex justify-center mt-6">
          <motion.button
            className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            SEE MORE
          </motion.button>
        </div>
      </div>
    </section>
  );
}
