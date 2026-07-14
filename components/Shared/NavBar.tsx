"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignLeft, Languages, Moon, Sun, X } from "lucide-react";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { usePreferences } from "@/components/providers/PreferencesProvider";
import Image from "next/image";

export default function Navbar() {
  const { dir, theme, t, toggleDir, toggleTheme } = usePreferences();
  const [mobileMenu, setMobileMenu] = useState(false);
  const isDark = theme === "dark";

  return (
    <nav
      className="w-full"
      style={{
        background: "color-mix(in srgb, var(--bg) 78%, transparent)",
        backdropFilter: "saturate(140%) blur(14px)",
        WebkitBackdropFilter: "saturate(140%) blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between gap-4 px-6 md:h-[74px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[11px]"
          style={{ color: "var(--fg)" }}
        >
          <span className="relative grid h-[34px] w-[34px] place-items-center">
            <Image
              src="/assets/logo32.png"
              alt={t.aria.logo}
              priority
              width={32}
              height={32}
              className="aspect-auto"
            />
          </span>
          <span
            style={{ fontFamily: "vibes", fontSize: "1.5rem" }}
            className=" text-[1.12rem] font-extrabold tracking-[.01em]"
          >
            {t.hero.nickname}
          </span>
        </Link>

        {/* Desktop nav */}
        <Menu />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={
              dir === "rtl" ? t.aria.switchToEnglish : t.aria.switchToArabic
            }
            title={
              dir === "rtl" ? t.aria.switchToEnglish : t.aria.switchToArabic
            }
            onClick={toggleDir}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-(--surface2)"
            style={{
              color: "var(--fg)",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <Languages size={19} aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label={isDark ? t.aria.switchToLight : t.aria.switchToDark}
            title={isDark ? t.aria.switchToLight : t.aria.switchToDark}
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-(--surface2)"
            style={{
              color: "var(--fg)",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            {isDark ? (
              <Sun size={19} aria-hidden="true" />
            ) : (
              <Moon size={19} aria-hidden="true" />
            )}
          </button>

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl px-5 py-[11px] text-[0.92rem] font-extrabold transition-transform hover:-translate-y-0.5 md:inline-flex"
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              boxShadow: "0 8px 22px -8px var(--primary)",
            }}
          >
            {t.getInTouch}
          </Link>

          <button
            type="button"
            aria-label={t.aria.menu}
            onClick={() => setMobileMenu((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors md:hidden"
            style={{ color: "var(--fg)" }}
          >
            {mobileMenu ? <X size={22} /> : <AlignLeft size={24} />}
          </button>
        </div>
      </div>

      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
    </nav>
  );
}
