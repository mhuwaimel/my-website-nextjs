import ProjectsGrid from "@/components/Projects/project-grid";

export const metadata = {
  title: "المشاريع",
  description:
    "مشاريع وأنظمة ويب تعليمية وتقنية طورها محمد عبدالعزيز الهويمل لخدمة التعليم والإشراف وتحسين العمليات الرقمية.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "المشاريع | محمد الهويمل",
    description:
      "نماذج من المشاريع التقنية وأنظمة الويب التعليمية التي طورها محمد عبدالعزيز الهويمل.",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "المشاريع | محمد الهويمل",
    description:
      "نماذج من المشاريع التقنية وأنظمة الويب التعليمية التي طورها محمد عبدالعزيز الهويمل.",
  },
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
