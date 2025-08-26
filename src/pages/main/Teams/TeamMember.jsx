"use client";
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Upendran Nandakumar",
    title: "Founder & CEO",
    img: "/assets/teams/upendran.svg",
    highlight: true,
  },
  { name: "Anbu", title: "Business Head", img: "/assets/teams/anbu.svg" },
  {
    name: "Solomon",
    title: "Chief Creative Officer",
    img: "/assets/teams/solomon.svg",
  },
  {
    name: "Tasmin",
    title: "Brand Services Director",
    img: "/assets/teams/tasmin.svg",
  },
  {
    name: "Gopi",
    title: "Assistant Vice President",
    img: "/assets/teams/gopinath.png",
  },
  { name: "Selva", title: "Content - Head", img: "/assets/teams/selva.svg" },
  {
    name: "Terence",
    title: "Chief Human Resource Officer",
    img: "/assets/teams/terence.png",
  },
  {
    name: "Rajan",
    title: "Sr. Art Director",
    img: "/assets/teams/rajan.png",
  },
  {
    name: "Daniel Joseph",
    title: "Senior SEO Content Strategist & Writer",
    img: "/assets/teams/daniel.png",
  },
  {
    name: "Palani Muthukumaran",
    title: "SEO Manager",
    img: "/assets/teams/palani.png",
  },
  {
    name: "Hari",
    title: "Accounts and Financer",
    img: "/assets/teams/hari.png",
  },
  {
    name: "Sridhar",
    title: "Digital Marketing Manager",
    img: "/assets/teams/male.png",
  },
  {
    name: "Jamal",
    title: "Digital Marketing Associate",
    img: "/assets/teams/jamal.png",
  },
  {
    name: "Srirangan M",
    title: "Senior Graphic Designer",
    img: "/assets/teams/srirangan.png",
  },
  {
    name: "Gopi R",
    title: "Senior Graphic Designer",
    img: "/assets/teams/gopi-r.png",
  },
  {
    name: "Srinath",
    title: "Junior UI/UX Designer",
    img: "/assets/teams/male.png",
  },
  {
    name: "Rufus",
    title: "Production Member",
    img: "/assets/teams/male.png",
  },
  {
    name: "Ramya",
    title: "Web Developer",
    img: "/assets/teams/female.png",
  },
  {
    name: "Rubankumar S",
    title: "Full stack Devloper ",
    img: "/assets/teams/ruban.png",
  },
  {
    name: "Pushpa",
    title: "Junior Digital Marketing Associate",
    img: "/assets/teams/pushpa.png",
  },
  // {
  //   name: "",
  //   title: "",
  //   img: "/assets/teams/.png",
  // },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function TeamMember() {
  return (
    <section className="bg-white section">
      <div className="section-container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col text-center shadow-xl overflow-hidden transition-all duration-300 h-full bg-white"
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white group-hover:bg-primary transition-all duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="p-3 bg-primary text-white group-hover:bg-white group-hover:text-primary transition-all duration-500">
                <h3 className="font-primary font-medium text-lg sm:text-xl">
                  {member.name}
                </h3>
                <p className="text-sm font-secondary">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}