"use client";

import projectsData from "@/data/projects";

import GalleryCarousel from "./GalleryCarousel";
import ProjectTechStack from "./ProjectTechStack";

const ProjectGallery = ({ projectId }) => {
  const project = projectsData.filter((project) => project.id === projectId);
  //   if (!project) return <div>No project found</div>;

  return (
    <div>
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
                {project[0].Description_All}
              </p>
            </div>
            <div className="mb-7">
              <p className="mb-2 text-xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
                Technologies
              </p>
              <div className="flex text-xl font-general-regular ">
                <div className="mb-7">
                  <ProjectTechStack project={project[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <GalleryCarousel projectId={projectId} />
        {/* Info */}
      </div>
    </div>
  );
};

export default ProjectGallery;
