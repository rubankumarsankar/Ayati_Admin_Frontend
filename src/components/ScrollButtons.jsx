// components/ScrollToggleButton.jsx
import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ScrollToggleButton() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Show up arrow if scrolled down at least 200px
      setShowUp(scrollTop > 200);

      // Show down arrow if not at bottom
      setShowDown(scrollTop + windowHeight < fullHeight - 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={showUp ? scrollToTop : scrollToBottom}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-blue-800 transition-all z-50"
    >
      {showUp ? (
        <ChevronUp className="w-6 h-6" />
      ) : showDown ? (
        <ChevronDown className="w-6 h-6" />
      ) : null}
    </button>
  );
}
