"use client";

import Link from "next/link";
import { StarMark } from "@/components/Shared/StarMark";
import { usePreferences } from "@/components/providers/PreferencesProvider";
import CustomImage from "../CustomImage";

export default function Hero() {
  const { t } = usePreferences();

  return (
    <section id="about" className="relative py-[70px]">
      {/* ambient motif */}
      <span
        className="star8 pointer-events-none absolute top-0"
        style={{
          insetInlineEnd: -90,
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle at 50% 50%, var(--primary-soft), transparent 70%)",
          animation: "spinSlow 70s linear infinite",
        }}
        aria-hidden="true"
      />

      <div className="relative grid items-center gap-[54px] md:grid-cols-[1.45fr_1fr]">
        {/* Text column */}
        <div>
          <div
            className="mb-[22px] inline-flex items-center gap-[9px] rounded-full px-[14px] py-[7px] text-[0.82rem] font-bold"
            style={{
              background: "var(--primary-soft)",
              color: "var(--primary)",
              animation: "heroReveal .7s cubic-bezier(.2,.7,.2,1) both",
            }}
          >
            <StarMark size={13} />
            {t.sections.aboutKicker}
          </div>

          <h1
            className="m-0 mb-2 whitespace-nowrap font-[Cairo] text-[clamp(1.55rem,3.6vw,3.25rem)] font-black leading-[1.16] tracking-[-.01em]"
            style={{
              animation: "heroReveal .8s cubic-bezier(.2,.7,.2,1) both",
              animationDelay: ".08s",
            }}
          >
            {t.hero.name}
          </h1>

          <p
            className="m-0 mb-[18px] text-[1.1rem] font-bold"
            style={{
              animation: "heroReveal .8s cubic-bezier(.2,.7,.2,1) both",
              animationDelay: ".16s",
            }}
          >
            {t.role}
          </p>

          <p
            className="m-0 mb-7 max-w-[46ch] text-[1.04rem] leading-loose text-pretty"
            style={{
              color: "var(--muted)",
              animation: "heroReveal .85s cubic-bezier(.2,.7,.2,1) both",
              animationDelay: ".24s",
            }}
          >
            {t.hero.bio}
          </p>

          <div
            className="mb-[34px] flex flex-wrap gap-3.5"
            style={{
              animation: "heroReveal .85s cubic-bezier(.2,.7,.2,1) both",
              animationDelay: ".32s",
            }}
          >
            <a
              href="/Resume/Cv-english.pdf"
              className="inline-flex items-center  gap-[9px] rounded-[13px] px-[26px] py-3.5 font-extrabold transition-transform hover:translate-y-[-3px]"
              style={{
                background: "var(--primary)",
                color: "var(--on-primary)",
                boxShadow: "0 12px 28px -10px var(--primary)",
              }}
            >
              <span className="text-[1.1em]">↓</span> {t.resume}
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-[9px] rounded-[13px] px-[26px] py-3.5 font-extrabold transition-colors"
              style={{
                border: "1.5px solid var(--border)",
                color: "var(--fg)",
              }}
            >
              {t.viewWork}
            </Link>
          </div>

          <div
            className="flex flex-wrap gap-[30px]"
            style={{
              animation: "heroReveal .9s cubic-bezier(.2,.7,.2,1) both",
              animationDelay: ".4s",
            }}
          >
            {[
              { n: "+17", l: t.stats.years },
              { n: "11", l: t.stats.roles },
              { n: "10", l: t.stats.projects },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-[30px]">
                {i > 0 && (
                  <span
                    className="h-10 w-px"
                    style={{ background: "var(--border)" }}
                  />
                )}
                <div>
                  <div
                    className="font-[Cairo] text-[1.9rem] font-black"
                    style={{ color: "var(--primary)" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="text-[0.85rem] font-semibold"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.l}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div
          className="relative"
          style={{
            animation: "heroReveal .9s cubic-bezier(.2,.7,.2,1) both",
            animationDelay: ".3s",
          }}
        >
          <div
            className="relative grid aspect-4/5 place-items-center overflow-hidden rounded-[22px]"
            style={{
              border: "1px solid var(--border)",
              background:
                "repeating-linear-gradient(135deg, var(--surface2), var(--surface2) 13px, var(--surface) 13px, var(--surface) 26px)",
              boxShadow: "var(--shadow)",
            }}
          >
            {/* Replace with <Image> of the portrait when available */}
            <div className="text-center">
              <div
                className="font-mono text-[0.78rem] tracking-[.04em]"
                style={{ color: "var(--muted)" }}
              >
                <CustomImage
                  alt={t.hero.portraitAlt}
                  src="/assets/hero.jpg"
                  fill
                  priority
                  className="object-cover transition-all duration-500 hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
