import GitHubProjectList from "@/components/GitHub/ProjectList";

export const revalidate = 86_400;

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

export default async function GitHubPage() {
  let repositories = [];

  try {
    const response = await fetch(
      "https://api.github.com/users/mhuwaimel/repos?sort=updated&per_page=12",
      { next: { revalidate } },
    );

    if (response.ok) {
      repositories = await response.json();
    }
  } catch {
    // The component renders a stable fallback when GitHub is unavailable.
  }

  return <GitHubProjectList repositories={repositories} />;
}
