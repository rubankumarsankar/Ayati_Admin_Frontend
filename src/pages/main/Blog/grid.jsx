import React from "react";

const imgs1 = [
  { src: "/assets/boy.png", heading: "Heading" },
   { src: "/assets/dubai.png", heading: "Heading" },
  { src: "/assets/flower.png", heading: "Heading" },
  
];

const imgs2 = [
 { src: "/assets/hand.png", heading: "Heading"},
  { src: "/assets/center.png", heading: "Heading" },
  { src: "/assets/happy.png", heading: "Heading" },
  
]
export default function GridSection() {
  return (
    <>
    

      {/* New Block Grid */}
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Block 1 */}
  <div className="space-y-4">
    {/* Top Image */}
    <div className="relative">
      <img
        src={imgs1[0].src}
        alt={imgs1[0].heading}
        className="w-full h-64 md:h-96 object-cover"
      />
      <span className="absolute bottom-2 left-2 bg-white text-blue-600 font-bold px-3 py-1 text-sm shadow">
        {imgs1[0].heading}
      </span>
    </div>

    {/* Bottom Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {imgs1.slice(1).map((img, index) => (
        <div key={index} className="relative">
          <img
            src={img.src}
            alt={img.heading}
            className="w-full h-100 object-cover"
          />
          <span className="absolute bottom-2 left-2 bg-white text-blue-600 font-bold px-3 py-1 text-sm shadow">
            {img.heading}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Block 2 */}
  <div className="space-y-4">
    {/* Top Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {imgs2.slice(1).map((img, index) => (
        <div key={index} className="relative">
          <img
            src={img.src}
            alt={img.heading}
            className="w-full h-100 object-cover"
          />
          <span className="absolute bottom-2 left-2 bg-white text-blue-600 font-bold px-3 py-1 text-sm shadow">
            {img.heading}
          </span>
        </div>
      ))}
    </div>

    {/* Bottom Image */}
    <div className="relative">
      <img
        src={imgs2[0].src}
        alt={imgs2[0].heading}
        className="w-full h-64 md:h-96 object-cover"
      />
      <span className="absolute bottom-2 left-2 bg-white text-blue-600 font-bold px-3 py-1 text-sm shadow">
        {imgs2[0].heading}
      </span>
    </div>
  </div>
</div>

    
    </>
  );
}
