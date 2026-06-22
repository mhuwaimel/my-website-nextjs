"use client";

import { usePreferences } from "@/components/providers/PreferencesProvider";

function Segment({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        border: "none",
        cursor: "pointer",
        padding: "7px 15px",
        borderRadius: 999,
        fontSize: "12.5px",
        fontWeight: 800,
        lineHeight: 1,
        transition: "all .25s ease",
        background: active ? "var(--primary)" : "transparent",
        color: active ? "var(--on-primary)" : "var(--muted)",
      }}
    >
      {children}
    </button>
  );
}

/**
 * Floating preferences control: direction (RTL/LTR) + theme (light/dark).
 * Always laid out LTR so the control itself doesn't flip when toggling.
 */
export default function PreferenceToggle() {
  const { dir, theme, setDir, setTheme } = usePreferences();

  return (
    <div
      dir="ltr"
      style={{
        position: "fixed",
        bottom: 22,
        insetInlineEnd: 22,
        zIndex: 300,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 18,
        boxShadow: "var(--shadow)",
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        fontFamily: "Tajawal, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".14em", color: "var(--muted)" }}>
          DIRECTION
        </span>
        <div style={{ display: "flex", background: "var(--surface2)", borderRadius: 999, padding: 3, gap: 2 }}>
          <Segment active={dir === "rtl"} onClick={() => setDir("rtl")}>RTL ع</Segment>
          <Segment active={dir === "ltr"} onClick={() => setDir("ltr")}>LTR A</Segment>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".14em", color: "var(--muted)" }}>
          THEME
        </span>
        <div style={{ display: "flex", background: "var(--surface2)", borderRadius: 999, padding: 3, gap: 2 }}>
          <Segment active={theme === "light"} onClick={() => setTheme("light")}>Light</Segment>
          <Segment active={theme === "dark"} onClick={() => setTheme("dark")}>Dark</Segment>
        </div>
      </div>
    </div>
  );
}
