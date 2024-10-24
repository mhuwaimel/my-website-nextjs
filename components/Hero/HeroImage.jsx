"use client";
import { motion } from "framer-motion";
import CustomImage from "../CustomImage";
import { zoomIn } from "@/utils/animation";
export default function HeroImage() {
  return (
    <motion.div
      variants={zoomIn(0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative mx-auto mt-10 overflow-hidden rounded-full shadow-xl h-52 w-52 bg-gradient-to-b from-teal-500 md:h-96 md:w-96"
    >
      <CustomImage
        alt="image"
        src="/assets/hero.jpg"
        layout="fill"
        className="object-cover transition-all duration-500 hover:scale-125"
      />
    </motion.div>
  );
}
