import React from "react";

const images = [
  { src: "/assets/boy.png", heading: "Heading" },
  { src: "/assets/center.png", heading: "Heading" },
  { src: "/assets/happy.png", heading: "Heading" },
  { src: "/assets/dubai.png", heading: "Heading" },
  { src: "/assets/flower.png", heading: "Heading" },
  { src: "/assets/hand.png", heading: "Heading" },
];

export default function grid() {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((item, idx) => (
        <div key={idx} className="relative w-full h-64 overflow-hidden">
          <img
            src={item.src}
            alt={`Image ${idx + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-white text-blue-800 font-bold text-sm px-3 py-1">
            {item.heading}
          </div>
        </div>
      ))}
    </div>
  );
}
