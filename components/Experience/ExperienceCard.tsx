"use client";

import type { ExperienceItem } from "@/data/experience";
import { Reveal } from "@/components/Shared/Reveal";
import { StarMark } from "@/components/Shared/StarMark";
import { usePreferences } from "@/components/providers/PreferencesProvider";

export default function ExperienceCard({
  resumeData,
}: {
  resumeData: ExperienceItem[];
}) {
  const { t } = usePreferences();

  return (
    <section id="experience" className="py-16">
      <Reveal className="mb-11">
        <div
          className="mb-2.5 inline-flex items-center gap-[9px] text-[0.82rem] font-extrabold tracking-[.06em]"
          style={{ color: "var(--primary)" }}
        >
          <StarMark size={13} />
          {t.sections.expKicker}
        </div>
        <h2 className="m-0 font-[Cairo] text-[clamp(1.7rem,4vw,2.6rem)] font-black">
          {t.sections.expTitle}
        </h2>
        {/* <p className="m-0 mt-2.5 max-w-[54ch] text-[1.02rem]" style={{ color: "var(--muted)" }}>
          {t.sections.expSub}
        </p> */}
      </Reveal>

      {/* Timeline — the spine sits on the inline-start edge, so it mirrors
          automatically: right side in RTL, left side in LTR. */}
      <ol
        className="relative m-0 list-none p-0"
        style={{ borderInlineStart: "2px solid var(--border)" }}
      >
        {resumeData.map((job, i) => (
          <Reveal as="li" key={job.Id} delay={Math.min(i, 6) * 0.05}>
            <div className="relative mb-[34px] ps-[38px]">
              <span
                className="absolute top-[5px] h-4 w-4 rounded-full"
                style={{
                  insetInlineStart: -9,
                  background: "var(--primary)",
                  boxShadow: "0 0 0 5px var(--bg), 0 0 0 6px var(--border)",
                }}
              />
              <span
                dir="ltr"
                className="mb-[9px] inline-block rounded-full px-3 py-1 text-[0.8rem] font-extrabold"
                style={{
                  color: "var(--primary)",
                  background: "var(--primary-soft)",
                }}
              >
                {job.Start} — {job.EndJob}
              </span>
              <h3 className="m-0 mb-[5px] font-[Cairo] text-[1.18rem] font-extrabold">
                {job.position}
              </h3>
              <p
                className="m-0 max-w-[60ch] text-[0.98rem] leading-[1.75]"
                style={{ color: "var(--muted)" }}
              >
                {job.Place && `${job.Place} — `}
                {job.Description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
