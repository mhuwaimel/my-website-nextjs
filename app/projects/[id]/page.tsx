import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectGallery from "@/components/Projects/project-gallery";
import projectsData from "@/data/projects";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: ProjectDetailsProps): Promise<Metadata> => {
  const { id } = await params;
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  const title = project.Title.trim();
  const description = project.Description_All.trim();
  const path = `/projects/${id}`;

  return {
    title,
    description,
    keywords: project.keyWords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title,
      description,
      images: [`/api/og?projectId=${id}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?projectId=${id}`],
    },
  };
};

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { id } = await params;
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectGallery projectId={id} />;
}
