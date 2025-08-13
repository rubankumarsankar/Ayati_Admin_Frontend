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



  </>
  


}
