"use client";
import ProjectsGrid from "@/components/Projects/project-grid";
import { siteConfig } from "@/utils/seo";
import { motion } from "framer-motion";

export default function ProjectPage() {
  return (
    <>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.1,
          }}
          className="flex flex-col-reverse py-5 mx-auto lg:flex-row"
        >
          <ProjectsGrid></ProjectsGrid>
        </motion.div>
      </div>
    </>
  );
}
