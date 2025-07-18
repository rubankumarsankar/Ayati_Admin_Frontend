import React, { useState } from "react";
import { motion } from "framer-motion";

export default function DottedWorldMap() {
  const [hovered, setHovered] = useState(null);

  const locations = [
    { name: "USA", x: "18%", y: "40%", logo: "/logo-1.png" }, // Pencil/Logo
    { name: "DUBAI", x: "60%", y: "48%", logo: "/logo-1.png" },
    { name: "INDIA", x: "69%", y: "52%", logo: "/logo-1.png" },
    { name: "SINGAPORE", x: "75%", y: "62%", logo: "/logo-1.png" },
  ];

  const stats = [
    { icon: "/assets/award-icon.png", value: "+30", label: "Awards" },
    { icon: "/assets/client-icon.png", value: "+20", label: "Clients" },
    { icon: "/assets/city-icon.png", value: "+05", label: "Cities" },
    { icon: "/assets/country-icon.png", value: "+05", label: "Countries" },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          Globally Planted, Digitally Rooted
        </h2>
        <img
          src="/assets/map-heading-icon.png"
          alt="Heading Icon"
          className="mx-auto mt-2 w-10"
        />
      </div>

      {/* Map */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* ✅ Dotted Map Background */}
        <img
          src="/assets/map.png"
          alt="Dotted World Map"
          className="w-full object-contain"
        />

        {/* ✅ Highlighted Locations with Pencil/Logo */}
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            className="absolute cursor-pointer"
            style={{ top: loc.y, left: loc.x }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.1 }}
          >
            {/* Pulse Animation */}
            <span className="absolute -inset-3 rounded-full bg-blue-500 opacity-30 animate-ping"></span>

            {/* ✅ Pencil/Logo as Marker */}
            <img
              src={loc.logo}
              alt={loc.name}
              className="relative h-8 w-8 object-contain "
            />

            {/* Tooltip */}
            {hovered === i && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 bg-blue-900 text-white text-xs rounded-md px-2 py-1 shadow">
                {loc.name}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center max-w-3xl mx-auto">
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={item.icon} alt={item.label} className="h-8 w-8 mb-2" />
            <p className="text-blue-900 font-bold text-lg">{item.value}</p>
            <p className="text-gray-600 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
