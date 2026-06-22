"use client";

import projectsData from "@/data/projects";
import ProjectItem from "./ProjectItem";
import { Reveal } from "@/components/Shared/Reveal";
import { StarMark } from "@/components/Shared/StarMark";
import { usePreferences } from "@/components/providers/PreferencesProvider";

export default function ProjectsGrid() {
  const { t } = usePreferences();

  return (
    <section id="work" className="py-16">
      <Reveal className="mb-10">
        <div
          className="mb-2.5 inline-flex items-center gap-[9px] text-[0.82rem] font-extrabold tracking-[.06em]"
          style={{ color: "var(--primary)" }}
        >
          <StarMark size={13} />
          {t.sections.workKicker}
        </div>
        <h2 className="m-0 font-[Cairo] text-[clamp(1.7rem,4vw,2.6rem)] font-black">
          {t.sections.workTitle}
        </h2>
        <p className="m-0 mt-2.5 max-w-[54ch] text-[1.02rem]" style={{ color: "var(--muted)" }}>
          {t.sections.workSub}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectItem key={project.id ?? index} {...project} />
        ))}
      </div>
    </section>
  );
}
