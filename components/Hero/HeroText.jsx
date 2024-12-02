"use client";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/animation";

import AnimatedDownloadButton from "./AnimatedDownloadButton";
import TextWriter from "../TextWriter";

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
      <motion.p
        variants={textVariant(1.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-xl py-5 mx-auto leading-8 tracking-normal font-[Lateef]  
              text-3xl text-slate-600  md:text-4xl"
      >
        <TextWriter text={heroDescriptions} delay={0.05} />
      </motion.p>
      <div className="text-right  md:text-center">
        <AnimatedDownloadButton />
      </div>
    </motion.div>
  );
}
