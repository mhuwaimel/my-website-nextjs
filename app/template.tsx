"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import useScrollProgress from "@/hooks/useScrollProgress";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.46 }}
    >
      {children}
    </motion.div>
  );
}
