import ExperienceCard from "@/components/Experience/ExperienceCard";
import resumData from "@/data/experience";

export const metadata = {
  title: "الخبرات المهنية",

  url: "https://www.mohammedh.sa/experience",
};
export default function ExperiencePage() {
  return <ExperienceCard resumData={resumData} />;
}
