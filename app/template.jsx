"use client";

import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";
export default function Template({ children }) {
  const completion = useScrollProgress();
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.46 }}
    >
      {children}
      <span
        className="fixed z-50 bg-[#6936f5] w-2 top-0 right-0 bottom-0 transition-all duration-700"
        style={{ transform: `translateY(${completion - 100}%)` }}
      ></span>
    </motion.div>
  );
}
