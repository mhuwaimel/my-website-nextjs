"use client";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/animation";

import AnimatedDownloadButton from "./AnimatedDownloadButton";
import TextWriter from "../TextWriter";
import HeroDescription from "./Hero-description";

export default function HeroText({
  heroTitleName,
  heroDesignation,
  heroDescriptions,
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="p-6 overflow-hidden text-center "
    >
      <h2
        className="py-2 text-4xl font-[Rakkas]  text-[#6936f5]
              md:text-5xl"
      >
        <TextWriter
          text={heroTitleName}
          className="py-2 text-4xl font-[Rakkas]  text-[#6936f5]
              md:text-5xl"
          delay={0.1}
        />
      </h2>
      <h3 className="py-2 text-lg tracking-tight md:text-3xl font-[cairo]">
        <TextWriter text={heroDesignation} delay={0.1} />
      </h3>
      <HeroDescription heroDescriptions={heroDescriptions} />
      <div className="text-right  md:text-center">
        <AnimatedDownloadButton />
      </div>
    </motion.div>
  );
}
