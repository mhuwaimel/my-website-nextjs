import type { CSSProperties } from "react";

/**
 * Eight-pointed Arabic geometric star (khatam motif) drawn with a CSS clip-path
 * — no SVG. Used as a recurring accent throughout the redesign. Pair `gradient`
 * for the primary→primary2 fill, otherwise solid `--primary`.
 */
export function StarMark({
  size = 14,
  gradient = false,
  className = "",
  style,
}: {
  size?: number;
  gradient?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`star8 inline-block shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: gradient
          ? "linear-gradient(135deg,var(--primary),var(--primary2))"
          : "var(--primary)",
        ...style,
      }}
    />
  );
}
