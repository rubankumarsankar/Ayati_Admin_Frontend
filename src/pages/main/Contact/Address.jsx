import React from "react";
import { Mail } from "lucide-react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { motion } from "framer-motion";

export default function Address() {
  const cards = [
    {
      title: "Email Address",
      icon: <Mail className="w-8 h-8" />,
      content: ["upendran@ayatiworks.com", "lavetohar@ayatiworks.com"],
    },
    {
      title: "Mobile Number",
      icon: <MdOutlinePhoneAndroid className="w-8 h-8" />,
      content: ["044-35031874", "044-35031878"],
    },
  ];

  // Animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="section">
      <div className="section-container mx-auto">
        <div className="flex flex-col sm:flex-row gap-10 max-w-3xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col p-6 w-[350px] shadow-lg bg-white text-black/80 
              cursor-pointer hover:bg-primary hover:text-white transition-colors gap-5"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
            >
              {/* Header */}
              <div className="flex items-center font-primary text-2xl/8 gap-4 mb-6 font-medium">
                {card.icon}
                {card.title}
              </div>

              {/* Content */}
              <div className="max-w-2xl">
                {card.content.map((line, i) => (
                  <p
                    key={i}
                    className="font-secondary text-xl/8 break-all"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
