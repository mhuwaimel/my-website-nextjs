import ProjectsGrid from "@/components/Projects/project-grid";

export default function ProjectPage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse py-5 mx-auto lg:flex-row">
          <ProjectsGrid></ProjectsGrid>
        </div>
      </div>
    </>
  );
}
