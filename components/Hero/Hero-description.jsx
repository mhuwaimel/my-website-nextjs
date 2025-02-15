"use client";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/animation";
import TextWriter from "../TextWriter";
function HeroDescription({ heroDescriptions }) {
  return (
    <motion.p
      variants={textVariant(1.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-xl py-5 mx-auto leading-8 tracking-normal font-[Lateef]  
              text-3xl text-slate-600  md:text-3xl"
    >
      <TextWriter text={heroDescriptions} delay={0.037} />
    </motion.p>
  );
}

export default HeroDescription;