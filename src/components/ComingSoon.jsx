import { useRef } from "react";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import videoBg from "/assets/comingsoon.mp4";

export default function ComingSoon() {
  const videoRef = useRef(null);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-center">
      {/* 🔹 Video Background (Infinite Loop) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        muted
        playsInline
        loop   // ✅ this makes it play infinitely
      />
=
    </div>
  );
}
