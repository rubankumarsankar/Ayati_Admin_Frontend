import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeIcon, PhoneIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-6">
      {/* ✅ Logo */}
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        src="/logo.png"
        alt="Logo"
        className="h-16 w-16 mb-6 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* ✅ 404 Text */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl font-bold text-primary"
      >
        404
      </motion.h1>

      <p className="text-gray-600 text-lg mt-2">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* ✅ Navigation Icons */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center text-gray-700 hover:text-primary transition"
        >
          <HomeIcon className="h-8 w-8" />
          <span className="text-sm mt-1">Home</span>
        </button>

        <button
          onClick={() => navigate("/services")}
          className="flex flex-col items-center text-gray-700 hover:text-primary transition"
        >
          <BriefcaseIcon className="h-8 w-8" />
          <span className="text-sm mt-1">Services</span>
        </button>

        <button
          onClick={() => navigate("/contact")}
          className="flex flex-col items-center text-gray-700 hover:text-primary transition"
        >
          <PhoneIcon className="h-8 w-8" />
          <span className="text-sm mt-1">Contact</span>
        </button>
      </div>

      {/* ✅ Back to Home Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        onClick={() => navigate("/")}
        className="mt-8 bg-primary text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition"
      >
        Go Back Home
      </motion.button>
    </div>
  );
}
