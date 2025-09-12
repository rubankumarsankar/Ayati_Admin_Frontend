import React from "react";
import { motion } from "framer-motion";

// ✅ Dummy award data (can later come from API or JSON)
const awards = [
  {
    image: "/assets/awards-1.webp",
    title: "Celebrating Milestones, Honoring Excellence",
    description:
      "At Ayatiworks, every award is more than just a trophy. It’s a reminder of the passion, persistence, and people behind our journey. Over the years, we’ve been recognized by industry leaders for our creativity, innovation, and impact across digital, design, and technology.",
  },
  {
    image: "/assets/awards-2.webp",
    title: "Digital Agency of the Year 2022",
    description:
      "Being recognized as the Digital Agency of the Year reflects our commitment to delivering measurable results and innovative campaigns that transform brands in the digital space.",
  },
  {
    image: "/assets/awards-3.webp",
    title: "Indian Achievers Award 2021–2022",
    description:
      "This award acknowledges our perseverance and leadership in driving meaningful change through technology and creativity, setting benchmarks for the industry.",
  },
];

export default function AwardsMarqueeSection() {
  return (
    <section className="bg-white section-container">
      <div className="overflow-hidden relative py-10">
        {/* marquee container */}
        <div className="flex animate-marquee whitespace-nowrap gap-10">
          {/* duplicate for infinite loop */}
          {awards.concat(awards).map((award, idx) => (
            <div
              key={idx}
              className="min-w-[90vw] md:min-w-[700px] max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-200 shrink-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] items-stretch">
                {/* Left Image (keeps rounded corner without clipping text) */}
                <div className="relative md:rounded-l-2xl overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full md:w-[300px] h-full object-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="p-6">
                  <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="section-title text-left"
                  >
                    <span className="mb-2 block whitespace-normal break-words hyphens-auto">
                      {award.title}
                    </span>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
                    />
                  </motion.h2>

                  <p className="mt-4 text-gray-700 font-secondary text-lg/9 w-full whitespace-normal break-words hyphens-auto">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
