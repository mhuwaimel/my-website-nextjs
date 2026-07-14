"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
  exact?: boolean;
  onClick?: () => void;
}

/**
 * Token-aware active link with an animated underline. Uses logical positioning
 * (inset-inline-start) so the underline anchors to the correct edge in both
 * RTL and LTR.
 */
export default function ActiveLink({
  href,
  children,
  exact = false,
  onClick,
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : exact
      ? pathname === href
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative block rounded-[10px] px-[15px] py-[9px] text-[0.95rem] font-bold transition-colors duration-200"
      style={{ color: isActive ? "var(--primary)" : "var(--muted)" }}
    >
      <span
        className="absolute inset-0 rounded-[10px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: "var(--primary-soft)" }}
        aria-hidden="true"
      />
      <span
        className="relative transition-colors duration-200 group-hover:text-(--primary)!"
        style={{ color: isActive ? "var(--primary)" : "var(--muted)" }}
      >
        {children}
      </span>
      <span
        className="absolute bottom-[3px] h-[2px] rounded-full transition-all duration-300"
        style={{
          insetInlineStart: "15px",
          width: isActive ? "calc(100% - 30px)" : 0,
          background: "var(--primary)",
        }}
        aria-hidden="true"
      />
    </Link>
  );
}
