import Hero from "@/components/Hero/hero";
import { siteConfig } from "@/config/seo";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "محمد عبدالعزيز الهويمل",
    alternateName: "Mohammed AlHuwimmel",
    url: siteConfig.url,
    jobTitle: "مبرمج ومشرف تربوي",
    sameAs: [
      "https://github.com/mhuwaimel",
      "https://www.linkedin.com/in/mhuwimmel/",
    ],
    knowsAbout: [
      "البرمجة",
      "تطوير أنظمة الويب",
      "التعليم",
      "الإشراف التربوي",
      "قيادة الفرق التعليمية",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
    </>
  );
}
