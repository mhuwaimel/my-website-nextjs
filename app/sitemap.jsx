import projectsData from "@/data/projects";

export default function sitemap() {
  const BASE_URL = "https://mohammedh.sa";

  const projectsURL = projectsData.map((prj) => ({
    url: `${BASE_URL}/projects/${prj?.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  return [
    {
      url: "https://mohammedh.sa",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mohammedh.sa/experience",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mohammedh.sa/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.mohammedh.sa/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mohammedh.sa/github",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectsURL,
  ];
}
