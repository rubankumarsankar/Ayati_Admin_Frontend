import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function StickyContact() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-[100px] right-6 z-50 flex items-center cursor-pointer">
      {/* Text Card with Smooth Floating Animation */}
      <motion.span
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -8, 0, 8, 0], opacity: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => navigate("/contact")}
        className="px-4 py-2 mr-2 font-semibold text-black text-sm bg-white rounded-full shadow-md border border-gray-300"
      >
        Get in touch with us
      </motion.span>

      {/* Blue Quote Icon with Pulse Animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => navigate("/contact")}
        className="bg-secondary flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
      >
        <FaQuoteRight className="text-white text-xl" />
      </motion.div>
    </div>
  );
}
