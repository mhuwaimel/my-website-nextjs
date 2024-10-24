"use client";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/animation";
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
        {heroTitleName}
      </h2>
      <motion.h3
        variants={textVariant(1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        layout="position"
        className="py-2 text-lg tracking-tight md:text-3xl font-[cairo]"
      >
        {heroDesignation}
      </motion.h3>
      <motion.p
        variants={textVariant(1.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-xl py-5 mx-auto leading-8 tracking-normal font-[Lateef]  
              text-3xl text-slate-600 dark:text-slate-500 md:text-4xl"
      >
        {heroDescriptions}
      </motion.p>
    </motion.div>
  );
}
