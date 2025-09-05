import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceCategories = [
  {
    title: "BRAND",
    items: [
      "Branding Services",
      "Branding Strategy and Positioning",
      "Experience Design",
      "Creative Marketing",
      "Marketing Strategy Consulting",
      "Customer Acquisition",
    ],
  },
  {
    title: "The Vibe Bureaus",
    items: [
      "Influencer Marketing",
      "Instagram Marketing",
      "Social Media Marketing",
      "Interactive Social Media Agency",
      "Response Management (If Offered)",
      "Multilingual Marketing",
    ],
  },
  {
    title: "Click & Convert",
    items: [
      "Web Development Services",
      "Web Maintenance Services",
      "Shopify Development",
      "E-Commerce",
      "Mobile App Development",
      "UX & Experience Design",
    ],
  },
  {
    title: "Pixel & Performance",
    items: [
      "SEO Services",
      "Performance Marketing",
      "Programmatic Solutions",
      "Paid Media Planning & Buying",
      "Amazon Marketing",
      "Affiliate Marketing Services",
    ],
  },
  {
    title: "Contentual Healing",
    items: [
      "Content Writing Services",
      "Digital PR",
      "Video Creation & Marketing",
      "Digital Marketing Consultants",
      "Creative Campaigns",
      "Ayati Intelligence",
    ],
  },
  {
    title: "Mad Lab",
    items: [
      "Advertising Agency Services",
      "Creative Campaigns",
      "Experiment-Based Marketing",
      "Conceptual Brand Thinking",
    ],
  },
];

const ServicesMegaMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <button className="hover:text-blue-600 font-medium transition">
        Services ▾
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[700px] z-50"
          >
            {serviceCategories.map((cat, idx) => (
              <div key={idx}>
                <h3 className="font-medium text-blue-800 mb-2 text-sm uppercase">
                  {cat.title}
                </h3>
                <ul className="space-y-1 text-xs text-black/80">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesMegaMenu;
