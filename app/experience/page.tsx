import ExperienceCard from "@/components/Experience/ExperienceCard";
import resumeData from "@/data/experience";

export const metadata = {
  title: "الخبرات المهنية",

  url: "https://www.mohammedh.sa/experience",
  keywords:['رئيس الفريق التنفيذي للعمليات الإشرافية', 'مدير قسم أداء التعليم', 'مساعد مدير المكتب للشؤون التعليمية', 'عضو لجنة التنمية المحلية ', 'مشرف تربوي ', 'معلم حاسب آلي', 'مبرمج حاسب آلي ', ' مهندس حاسب آلي ', 'اخصائي نظم معلومات ', 'اخصائي تقنية معلومات', 'محمد الهويمل', 'محمد الهويمل ويب', 'محمد الهويمل موقع ويب'],
  

};
export default function ExperiencePage() {
  return <ExperienceCard resumeData={resumeData} />;
}
