"use client";

import { motion } from "framer-motion";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const heroContent = {
  heroImage: "img/hero/dark.jpg",
  heroMobileImage: "img-mobile",
  heroTitleName: "محمد بن عبدالعزيز الهويمل",
  heroDesignation: "أب لـــ (ليان – عبدالعزيز – زياد - سعود - ديم)",
  heroDescriptions: `انطلقت رحلتي بست سنوات في عالم البرمجة ....
  ثم مثلها في محاضن التربية والتعليم معلماً......
  والآن منذ خمس سنوات وأنا أمارس دوري القيادي والإشرافي التعليمي......`,
  heroBtn: " Resume المزيد",
};
export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col items-center min-h-[80dhv] mt-5 sm:justify-between sm:flex-row md:mt-2"
    >
      <div className="w-full text-right md:text-right md:w-2/3">
        <HeroText
          heroDescriptions={heroContent.heroDescriptions}
          heroTitleName={heroContent.heroTitleName}
          heroDesignation={heroContent.heroDesignation}
        />
      </div>

      <div className="w-full text-center md:w-1/3 md:text-right">
        <HeroImage />
      </div>
    </motion.section>
  );
}
