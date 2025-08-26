import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon, PhoneIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import videoFile from "/assets/404.mp4"; // ✅ replace with your video path

export default function NotFound() {
  const navigate = useNavigate();
  const [stage, setStage] = useState("logo"); // logo → content

  // Step control
  useEffect(() => {
    if (stage === "logo") {
      const timer = setTimeout(() => setStage("content"), 2000); // logo lasts 2s
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-black overflow-hidden">
      {/* STEP 1: Logo animation */}
      <AnimatePresence>
        {stage === "logo" && (
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src="/ayatiworks_logo.svg"
            alt="Logo"
            className="h-32 w-32 z-20"
          />
        )}
      </AnimatePresence>

      {/* STEP 2: Looping video (no opacity animation) */}
      {stage === "content" && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* STEP 3: 404 Content on top of video */}
      {stage === "content" && (
        <div className="relative z-20 flex flex-col items-center text-center p-6">
          <br /><br />

          {/* Navigation icons */}
          <div className="flex gap-8 mt-6">
            <button
              onClick={() => navigate("/")}
              className="flex flex-col items-center text-primary hover:text-blue-400 transition"
            >
              <HomeIcon className="h-8 w-8" />
              <span className="text-sm mt-1">Home</span>
            </button>

            <button
              onClick={() => navigate("/services")}
              className="flex flex-col items-center text-primary hover:text-blue-400 transition"
            >
              <BriefcaseIcon className="h-8 w-8" />
              <span className="text-sm mt-1">Services</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="flex flex-col items-center text-primary hover:text-blue-400 transition"
            >
              <PhoneIcon className="h-8 w-8" />
              <span className="text-sm mt-1">Contact</span>
            </button>
          </div>

          {/* Back to Home button */}
          <motion.button
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            onClick={() => navigate("/")}
            className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 transition"
          >
            Go Back Home
          </motion.button>
        </div>
      )}
    </div>
  );
}
