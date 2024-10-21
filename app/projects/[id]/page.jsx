import ProjectGallery from "@/components/Projects/project-gallery";

export default function ProjectDetails({ params }) {
  return (
    <>
      <ProjectGallery projectId={params.id} />
    </>
  );
}
