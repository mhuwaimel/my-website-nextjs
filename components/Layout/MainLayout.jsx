"use client";
import React, { Component, useState } from "react";

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
  m,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { animations } from "@/utils/animations";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/NavBar";
const variants = {
  out: {
    opacity: 0,
    transition: {},
  },
  in: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};
export default function MainLayout({ children }) {
  const startIndex = 0;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(false);
  const pathname = usePathname();
  return (
    <div className="px-1 w-fill sm:px-10">
      <header className="sticky top-0 z-10 ">
        <Navbar />
      </header>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode={!exitBefore}>
          <motion.div
            key={pathname.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            <div className="relative main-container">{children}</div>
          </motion.div>
        </AnimatePresence>
      </LazyMotion>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
