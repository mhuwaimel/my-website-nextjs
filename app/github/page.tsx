import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import GitHubProjectList from "@/components/GitHub/ProjectList";
import { siteConfig } from "@/config/seo";
import { ENV } from "@/lib/constant";

export const metadata = {
  title: "مشاريعي GitHub",
  url: "https://www.mohammedh.sa/github/",
  openGraph: {
    type: "website",
    url: siteConfig.url + "/github",
    title: "مشاريعي GitHub",
    description: "مشاريعي GitHub مشاريع محمد الهويمل mhuwaimel",
    images: `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og`,
  },
};

export default function GitHubPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse py-5 mx-auto lg:flex-row">
        <Suspense fallback={<LoadingSpinner />}>
          <GitHubProjectList />
        </Suspense>
      </div>
    </div>
  );
}
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Loader2 className="w-12 h-12 animate-spin text-[#6936f5]" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
