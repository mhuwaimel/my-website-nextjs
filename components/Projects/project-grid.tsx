import projectsData from "@/data/projects";
import ProjectSingle from "./project-single";

import ProjectItem from "./ProjectItem";
const ProjectsGrid = () => {
  return (
    <section className="py-4 mt-3 sm:py-10 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium font-[Mada] text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          معرض الأعمال
        </p>
      </div>

      {/* <div className="mt-10 sm:mt-16">
        <h3 className="mb-3 text-center font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-xl"></h3>
      </div> */}

      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        {projectsData &&
          projectsData.map((project, index) => (
            // <ProjectSingle key={index} {...project} />
            <ProjectItem key={index} {...project} />
          ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
