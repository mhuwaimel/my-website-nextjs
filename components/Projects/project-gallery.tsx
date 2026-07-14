"use client";

import projectsData from "@/data/projects";

import GalleryCarousel from "./GalleryCarousel";
import ProjectTechStack from "./ProjectTechStack";
import { usePreferences } from "@/components/providers/PreferencesProvider";
import { getLocalizedProject } from "@/lib/localized-content";

const ProjectGallery = ({ projectId }: { projectId: string }) => {
  const { dir, t } = usePreferences();
  const sourceProject = projectsData.find((project) => project.id === projectId);
  if (!sourceProject) return <div>{t.project.notFound}</div>;
  const project = getLocalizedProject(sourceProject, dir);

  return (
    <div>
      <div className="container mx-auto">
        {/* Header */}
        <div>
          <p
            className="md:text-3xl font-bold text-right font-[Cairo] text-xl 
         text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
          >
            {project.Title}
          </p>
        </div>
        <div className="mt-8 ">
          <div className="w-full ">
            {/* Single project client details */}
            <div className="mb-7">
              <p className="mb-2 md:text-2xl text-xl  font-[tajawal] tracking-tighter text-secondary-dark dark:text-secondary-light">
                {project.Description_All}
              </p>
            </div>
            <div className="mb-7">
              <p className="mb-2 text-xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
                {t.project.technologies}
              </p>
              <div className="flex text-xl font-general-regular ">
                <div className="mb-7">
                  <ProjectTechStack project={project} />
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
