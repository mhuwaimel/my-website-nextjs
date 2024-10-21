"use client";

import projectsData from "@/data/projects";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Link2 } from "lucide-react";
import Link from "next/link";

const ProjectGallery = ({ projectId }) => {
  const project = projectsData.filter((project) => project.id === projectId);
  //   if (!project) return <div>No project found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div>
          <p
            className="md:text-3xl font-bold text-right font-[Cairo] text-xl 
         text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
          >
            {project[0].Title}
          </p>
        </div>
        <div className="mt-8 ">
          <div className="w-full ">
            {/* Single project client details */}
            <div className="mb-7">
              <p className="mb-2 md:text-2xl text-xl  font-[tajawal] tracking-tighter text-secondary-dark dark:text-secondary-light">
                {project[0].Description}
              </p>
            </div>
            <div className="mb-7">
              <p className="mb-2 text-xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
                Technologies
              </p>
              <div className="flex text-xl font-general-regular ">
                <div className="mb-7">
                  <ul className="flex gap-2">
                    {project[0].techStack.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex mb-2 text-[11.5px] font-bold md:font-light md:text-lg font-general-regular text-[#6936f5] dark:text-ternary-light "
                        >
                          {item.name}
                          {index !== project[0].techStack.length - 1 && ","}
                        </li>
                      );
                    })}
                    {project[0].link && project[0].link !== "" ? (
                      <Link
                        target="_blank"
                        className="mr-4 text-left"
                        href={project[0].link}
                        title="Project Link"
                      >
                        <Link2
                          color="#000"
                          className="text-3xl font-extrabold "
                        ></Link2>
                      </Link>
                    ) : (
                      <p></p>
                    )}
                  </ul>
                </div>
              </div>
              {/* <div className="">
                {project[0].link && project[0].link !== "" ? (
                  <Link href={project[0].link} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[44px] h-[44px] rounded-full bg-white/5 ">
                          <ArrowUpLeft className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[70px] h-[70px] rounded-full bg-gray-300 flex justify-center items-center cursor-not-allowed">
                    <ArrowUpLeft className="text-3xl text-gray-500" />
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipContent>
                          <p>GitHub repository not available</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div dir="ltr" className="mt-12 mb-10 sm:mb-0">
          {projectsData
            .filter((project) => project.id === projectId)
            .map((filterarray, index) => (
              <div className="" key={index}>
                <Carousel className="">
                  <CarouselContent>
                    {filterarray.imgs.map((filter, idxx) => (
                      <CarouselItem key={"images" + idxx}>
                        <img
                          src={filter.img}
                          width="1920"
                          height="1080"
                          className="object-cover w-full h-full aspect-video"
                          alt={"project " + " " + idxx}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-4" />
                  <CarouselPrevious className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-4" />

                  <div className="absolute space-x-2 transform -translate-x-1/2 bottom-4 left-1/2" />
                </Carousel>
              </div>
            ))}
        </div>

        {/* Info */}
      </div>
    </motion.div>
  );
};

export default ProjectGallery;
