"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function AnimatedDownloadButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const openResume = () => {
    setIsAnimating(true);
    // Simulate download process
    setTimeout(() => setIsAnimating(false), 2000);
    const link = `/Resume/Cv-english.pdf`;

    window.location.href = link;
  };
  return (
    <div className="flex items-center justify-center ">
      <motion.button
        id="download-resume"
        data-umami-event="Download resume"
        onClick={openResume}
        className="flex items-center justify-center px-6 py-3 font-semibold text-white rounded-full focus:outline-none"
        style={{ backgroundColor: "#6936f5" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isAnimating ? { y: [0, -5, 0] } : {}}
        transition={{ duration: 0.2 }}
      >
        <motion.span className="mr-2">
          {isAnimating ? "Downloading..." : "Download CV"}
        </motion.span>
        <motion.div
          animate={isAnimating ? { rotate: 360 } : {}}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Download className="w-5 h-5 mr-2" />
        </motion.div>
      </motion.button>
    </div>
  );
}
