"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUpCircleIcon } from "lucide-react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const jumpAnimation = {
    y: [0, -10, 0, -10, 0],
    transition: {
      y: {
        duration: 0.7,
        ease: "easeOut",
        repeat: 1,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-20 right-5 z-500  text-[#6936f5]"
    >
      {isVisible && (
        <motion.button
          whileHover={jumpAnimation}
          className={`... scrollToTopButton  ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top أعلى الصفحة"
        >
          <ChevronUpCircleIcon
            size={40}
            absoluteStrokeWidth={true}
            strokeWidth={2}
          />
        </motion.button>
      )}
    </motion.div>
  );
}
export default ScrollToTop;
