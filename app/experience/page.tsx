import ExperienceCard from "@/components/Experience/ExperienceCard";
import resumeData from "@/data/experience";

export const metadata = {
  title: "الخبرات المهنية",
  description:
    "خبرات محمد عبدالعزيز الهويمل المهنية في البرمجة، التعليم، الإشراف التربوي، وقيادة المبادرات الرقمية.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "الخبرات المهنية | محمد الهويمل",
    description:
      "مسيرة مهنية تجمع بين تطوير البرمجيات والعمل التعليمي والإشراف التربوي.",
    url: "/experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "الخبرات المهنية | محمد الهويمل",
    description:
      "مسيرة مهنية تجمع بين تطوير البرمجيات والعمل التعليمي والإشراف التربوي.",
  },
};

export default function ExperiencePage() {
  return <ExperienceCard resumeData={resumeData} />;
}
