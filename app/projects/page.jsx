import ProjectsGrid from "@/components/Projects/project-grid";
import { siteConfig } from "@/config/seo";
import { ENV } from "@/lib/constant";

export const metadata = {
  title: "مشاريعي",

  canonical: "/projects",
  url: "https://mohammedh.sa/projects/",

  openGraph: {
    type: "website",
    url: siteConfig.url + "/projects",
    title: "مشاريعي",
    description: "مشاريع موقعي والتي تمتلكها محمد الهويمل",
    images: `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og`,
  },
};
export default function ProjectPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse py-5 mx-auto lg:flex-row">
        <ProjectsGrid></ProjectsGrid>
      </div>
    </div>
  );
}
