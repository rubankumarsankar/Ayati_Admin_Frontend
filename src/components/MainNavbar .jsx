import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ServicesMegaMenu from "./ServicesMegaMenu"; // ✅ import dropdown

const AnimatedNavbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // ✅ Close Navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50" ref={navRef}>
      {/* ✅ Logo Button (Toggle) */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`bg-white shadow-xl rounded-full p-4 hover:scale-105 transition ${
          open ? "hidden" : "block"
        }`}
      >
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
      </button>

      {/* ✅ Smooth Animated Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white shadow-xl rounded-full px-8 py-3 flex space-x-8 items-center relative"
          >
            <NavLink
              to="/"
              className="hover:text-blue-600 font-medium transition"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/crew"
              className="hover:text-blue-600 font-medium transition"
              onClick={() => setOpen(false)}
            >
              Crew & Clues
            </NavLink>

            <ServicesMegaMenu />

            <NavLink
              to="/work"
              className="hover:text-blue-600 font-medium transition"
              onClick={() => setOpen(false)}
            >
              Our Work
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-blue-600 font-medium transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedNavbar;
