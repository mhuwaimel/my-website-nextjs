import type { MetadataRoute } from "next";
import projectsData from "@/data/projects";
import { siteConfig } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticRoutes = ["", "/experience", "/projects", "/contact", "/github"];

  const projectsURL = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projectsURL,
  ];
}
