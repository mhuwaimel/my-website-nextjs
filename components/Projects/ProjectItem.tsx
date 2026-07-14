"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { StarMark } from "@/components/Shared/StarMark";
import { usePreferences } from "@/components/providers/PreferencesProvider";

export default function ProjectItem(props: Project) {
  const { t } = usePreferences();

  return (
    <Link
      href={`/projects/${props.id}`}
      className="reveal group flex flex-col overflow-hidden rounded-[20px] no-underline transition-all duration-300 hover:translate-y-[-7px]"
      data-visible="true"
      style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--fg)" }}
    >
      {/* Cover */}
      <div className="relative aspect-16/10 overflow-hidden" style={{ background: "var(--surface2)" }}>
        <Image
          src={props.Image}
          alt={props.Title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.07]"
        />
        <span
          dir="ltr"
          className="absolute inline-flex items-center gap-1.5 rounded-full px-[11px] py-[5px] font-[Cairo] text-[0.78rem] font-black"
          style={{ top: 13, insetInlineStart: 13, background: "color-mix(in srgb, var(--bg) 82%, transparent)", backdropFilter: "blur(6px)", color: "var(--primary)" }}
        >
          <StarMark size={11} />
          {props.num}
        </span>
        {props.techStack?.[0] && (
          <span
            className="absolute rounded-full px-[11px] py-[5px] text-[0.72rem] font-extrabold"
            style={{ top: 13, insetInlineEnd: 13, background: "color-mix(in srgb, var(--primary) 92%, transparent)", color: "var(--on-primary)" }}
          >
            {props.techStack[0].name}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-[19px] px-[21px]">
        <h3 className="m-0 mb-2 line-clamp-2 font-[Cairo] text-[1.08rem] font-extrabold leading-[1.4]">
          {props.Title}
        </h3>
        <p className="m-0 mb-4 line-clamp-3 flex-1 text-[0.92rem] leading-[1.7]" style={{ color: "var(--muted)" }}>
          {props.Description}
        </p>
        <div className="mb-3.5 flex flex-wrap gap-[7px]">
          {props.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              dir="ltr"
              className="rounded-[7px] px-2.5 py-1 text-[0.72rem] font-bold"
              style={{ color: "var(--muted)", background: "var(--surface2)" }}
            >
              {tech.name}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-[7px] text-[0.9rem] font-extrabold" style={{ color: "var(--primary)" }}>
          {t.viewProject}
          <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:rtl:-translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
