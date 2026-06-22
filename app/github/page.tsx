import GitHubProjectList from "@/components/GitHub/ProjectList";

export const metadata = {
  title: "مشاريع GitHub",
  description:
    "مستودعات ومشاريع محمد عبدالعزيز الهويمل المفتوحة المصدر ونماذج من أعماله البرمجية على GitHub.",
  alternates: { canonical: "/github" },
  openGraph: {
    title: "مشاريع GitHub | محمد الهويمل",
    description:
      "استعراض لمستودعات ومشاريع محمد عبدالعزيز الهويمل البرمجية المفتوحة المصدر.",
    url: "/github",
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاريع GitHub | محمد الهويمل",
    description:
      "استعراض لمستودعات ومشاريع محمد عبدالعزيز الهويمل البرمجية المفتوحة المصدر.",
  },
};

export default function GitHubPage() {
  return <GitHubProjectList />;
}
