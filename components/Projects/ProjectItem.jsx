"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = (props) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="p-4 bg-white shadow-lg cursor-pointer animate_top rounded-xl hover:shadow-xl pb-9 shadow-solid-8 dark:bg-blacksection"
    >
      <Link
        href={`/projects/${props.id}`}
        className="relative block aspect-[368/239]"
      >
        <Image
          src={props.Image}
          alt={props.Title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="px-4">
        <h3 className="mb-1 mt-7.5 line-clamp-2 text-base font-[cairo] font-bold text-ternary-dark dark:text-ternary-light inline-block  duration-300 hover:text-primary  dark:hover:text-primary ">
          <Link href={`/projects/${props.id}`}>
            {`${props.Title.slice(0, 42)}...`}
          </Link>
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
