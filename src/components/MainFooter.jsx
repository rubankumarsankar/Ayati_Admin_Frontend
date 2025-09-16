import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function MainFooter() {
  const linkClass = ({ isActive }) =>
    [
      "relative px-1 transition font-secondary",
      isActive
        ? // active styles
          "text-primary font-semibold  decoration-2"
        : // idle + hover
          "text-black/70 hover:text-primary",
    ].join(" ");

  return (
    <footer className="bg-white border-t font-secondary border-gray-300 px-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left - Logo & Links */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 text-lg text-center md:text-left gap-2">
          <img src="/ayatiworks_logo.svg" alt="Ayatiworks" className="h-8" />

          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <NavLink to="/privacy-policy" className={linkClass} end>
              Privacy Policy
            </NavLink>
            <span className="text-black/70">|</span>
            <NavLink to="/terms-and-conditions" className={linkClass} end>
              Terms &amp; Conditions
            </NavLink>
          </div>

          <p className="text-black/80">Copyright © 2025 - All rights reserved</p>
        </div>

        {/* Right - Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5"
        >
          {[
            { icon: <FaLinkedinIn />, link: "https://linkedin.com/company/ayatiworks" },
            { icon: <FaFacebookF />, link: "https://facebook.com/Ayatiworksindia/" },
            { icon: <FaInstagram />, link: "https://instagram.com/ayatiworks/" },
            { icon: <FaYoutube />, link: "https://youtube.com/@ayatiworks" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/70 rounded-full p-2 text-black/70 hover:text-white hover:bg-primary hover:border-none transition"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
