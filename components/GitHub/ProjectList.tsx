"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { StarMark } from "@/components/Shared/StarMark";
import { Reveal } from "@/components/Shared/Reveal";
import { usePreferences } from "@/components/providers/PreferencesProvider";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "Jupyter Notebook": "#DA5B0B",
  Vue: "#41b883",
  Shell: "#89e051",
};

export default function GitHubProjectList() {
  const { t } = usePreferences();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("https://api.github.com/users/mhuwaimel/repos?sort=updated&per_page=12");
        if (!res.ok) throw new Error("fetch failed");
        const data = (await res.json()) as GitHubRepo[];
        if (!cancelled) setRepos(data);
      } catch {
        if (!cancelled) setError(t.repos.error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="github" className="py-16">
      <Reveal className="mb-10">
        <div
          className="mb-2.5 inline-flex items-center gap-[9px] text-[0.82rem] font-extrabold tracking-[.06em]"
          style={{ color: "var(--primary)" }}
        >
          <StarMark size={13} />
          {t.sections.ghKicker}
        </div>
        <h2 className="m-0 font-[Cairo] text-[clamp(1.7rem,4vw,2.6rem)] font-black">
          {t.sections.ghTitle}
        </h2>
        <p className="m-0 mt-2.5 max-w-[54ch] text-[1.02rem]" style={{ color: "var(--muted)" }}>
          {t.sections.ghSub}
        </p>
      </Reveal>

      {loading && (
        <p className="py-8 text-center text-sm" style={{ color: "var(--muted)" }}>
          {t.repos.loading}
        </p>
      )}
      {error && (
        <p className="py-8 text-center text-sm" style={{ color: "#ef4444" }}>
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <Link
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            aria-label={t.viewOnGithub}
            className="reveal group flex flex-col gap-[13px] rounded-2xl p-[22px] no-underline transition-all duration-300 hover:-translate-y-[5px]"
            data-visible="true"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--fg)", transitionDelay: `${Math.min(i, 6) * 0.05}s` }}
          >
            <div className="flex items-center gap-2.5">
              <StarMark size={18} gradient />
              <span
                dir="ltr"
                className="break-all font-[Cairo] text-[1rem] font-extrabold [unicode-bidi:isolate]"
                style={{ color: "var(--primary)" }}
              >
                {repo.name}
              </span>
            </div>
            <p className="m-0 flex-1 text-[0.9rem] leading-[1.7]" style={{ color: "var(--muted)" }}>
              {repo.description || "—"}
            </p>
            <div className="flex items-center gap-[18px] text-[0.83rem] font-semibold" style={{ color: "var(--muted)" }}>
              {repo.language && (
                <span className="inline-flex items-center gap-[7px]">
                  <span
                    className="h-[11px] w-[11px] rounded-full"
                    style={{ background: LANG_COLORS[repo.language] ?? "var(--muted)" }}
                  />
                  {repo.language}
                </span>
              )}
              <span dir="ltr" className="inline-flex items-center gap-1.5">
                <Star size={13} /> {repo.stargazers_count}
              </span>
              <span dir="ltr" className="inline-flex items-center gap-1.5">
                <GitFork size={13} /> {repo.forks_count}
              </span>
              <ExternalLink size={14} className="ms-auto opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
