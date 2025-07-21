import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function MainFooter() {
  return (
    <footer className="bg-white border-t font-secondary border-gray-300 px-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 
        flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Left - Logo & Links */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 text-gray-600 text-sm text-center md:text-left gap-2">
          <img src="/ayatiworks_logo.svg" alt="Ayatiworks" className="h-6" />
          <div className="flex flex-wrap gap-2 font-secondary justify-center md:gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-primary font-secondary transition"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              to="/terms-conditions"
              className="hover:text-primary font-secondary transition"
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="text-gray-500 text-center font-secondary">Copyright © 2025 – All rights reserved</p>
        </div>

        {/* Right - Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5"
        >
          {[
            { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
            { icon: <FaFacebookF />, link: "https://facebook.com" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaYoutube />, link: "https://youtube.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 rounded-full p-2 text-gray-600 hover:text-white hover:bg-primary transition"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
