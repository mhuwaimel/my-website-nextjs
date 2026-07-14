import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectGallery from "@/components/Projects/project-gallery";
import { siteConfig } from "@/config/seo";
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
  const description = project.metaDescription.trim();
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

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.Title.trim(),
    description: project.Description_All.trim(),
    url: `${siteConfig.url}/projects/${id}`,
    image: `${siteConfig.url}/api/og?projectId=${id}`,
    keywords: project.keyWords.join(", "),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectGallery projectId={id} />
    </>
  );
}
