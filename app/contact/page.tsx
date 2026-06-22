import ContactForm from "@/components/Contact/Contact-Form";

export const metadata = {
  title: "التواصل",
  description:
    "تواصل مع محمد عبدالعزيز الهويمل بشأن المشاريع التقنية، أنظمة الويب التعليمية، أو فرص التعاون المهني.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "التواصل | محمد الهويمل",
    description:
      "قناة التواصل مع محمد عبدالعزيز الهويمل للمشاريع التقنية والتعاون المهني.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "التواصل | محمد الهويمل",
    description:
      "قناة التواصل مع محمد عبدالعزيز الهويمل للمشاريع التقنية والتعاون المهني.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
