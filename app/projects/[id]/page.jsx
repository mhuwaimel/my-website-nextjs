import ProjectGallery from "@/components/Projects/project-gallery";
import projectsData from "@/data/projects";
import { ENV } from "@/lib/constant";

export const generateMetadata = async ({ params }) => {
  // read route params

  const { id } = await params;

  const project = projectsData.filter((project) => project.id === id);

  return {
    title: project[0].Title,
    description: project[0].Description_All,

    url: `${ENV.NEXT_PUBLIC_WEBSITE_URL}/projects/${id}`,
    twitterCard: "summary",

    openGraph: {
      type: "website",
      url: `/projects/${id}`,
      title: project[0].Title,
      description: project[0].Description_All,

      images: `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og`,
    },
  };
};

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  return <ProjectGallery projectId={id} />;
}
