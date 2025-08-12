import React from "react";

const teamMembers = [
  {
    name: "Upendran Nandakumar",
    title: "Founder & CEO",
    img: "/assets/upendran.svg",
    highlight: true,
  },
  { name: "Anbu", title: "Business Head", img: "/assets/anbu.svg" },
  { name: "Solomon", title: "Chief Creative Officer", img: "/assets/solomon.svg" },
  { name: "Tasmin", title: "Brand Services Director", img: "/assets/tasmin.svg" },
  { name: "Gopi", title: "Assistant Vice President", img: "/assets/gopitl.svg" },
  { name: "Selva", title: "Content - Head", img: "/assets/selva.svg" },
  { name: "Terence", title: "Chief Human Resource Officer", img: "/assets/terence.svg" },
];

export default function TeamMember() {
  return <>
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto">
    {/* First row */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
      {teamMembers.slice(0, 4).map((member, idx) => (
        <div
          key={idx}
          className="group flex flex-col text-center shadow-lg rounded overflow-hidden transition-all duration-300 h-full"
        >
          {/* Fixed aspect ratio for images */}
          <div className="relative bg-white group-hover:bg-blue-600 transition-all duration-300 aspect-[3/4] flex items-center justify-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Text area */}
          <div className="p-3 bg-blue-700 text-white group-hover:bg-white group-hover:text-blue-700 transition-all duration-300">
            <h3 className="font-semibold text-sm">{member.name}</h3>
            <p className="text-xs">{member.title}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Second row */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {teamMembers.slice(4).map((member, idx) => (
        <div
          key={idx}
          className="group flex flex-col text-center shadow-lg rounded overflow-hidden transition-all duration-300 h-full"
        >
          <div className="relative bg-white group-hover:bg-blue-600 transition-all duration-300 aspect-[3/4] flex items-center justify-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <div className="p-3 bg-blue-700 text-white group-hover:bg-white group-hover:text-blue-700 transition-all duration-300">
            <h3 className="font-semibold text-sm">{member.name}</h3>
            <p className="text-xs">{member.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="bg-white text-center py-16 px-4">
  {/* Subtitle */}
  <p className="text-xs tracking-widest text-gray-500 mb-2">
    LET CURIOSITY LEAD THE WAY
  </p>

  {/* Title */}
  <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
    Open Inbox, Open Possibilities
  </h2>

  {/* Description */}
  <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm sm:text-base">
    Got questions, goals, or big ideas? Let’s talk strategy, scale, and digital moves. 
    Drop us a message and we’ll get back faster than your next scroll.
  </p>

  {/* Button */}
  <button className="bg-[#17A3DC] hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
    SPARK A CONNECTION
  </button>
</div>

  </>
  


}
