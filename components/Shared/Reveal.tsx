"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealTag = "div" | "li";

/**
 * Scroll-reveal helper. Adds `data-visible="true"` once the element scrolls
 * into view. Pairs with the `.reveal` CSS utility in globals (opacity +
 * translateY transition). Respects prefers-reduced-motion automatically because
 * the CSS transition is what animates — disable it there if desired.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
}) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const el = Tag === "li" ? listRef.current : divRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      el?.setAttribute("data-visible", "true");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "true");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [Tag]);

  const props = {
    className: `reveal ${className}`,
    style: { transitionDelay: `${delay}s` },
  };

  return Tag === "li" ? (
    <li ref={listRef} {...props}>{children}</li>
  ) : (
    <div ref={divRef} {...props}>{children}</div>
  );
}
