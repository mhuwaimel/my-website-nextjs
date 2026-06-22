"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavItems } from "./Menu";

export default function MobileMenu({
  setMobileMenu,
}: {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const items = useNavItems();
  const pathname = usePathname();

  return (
    <ul
      className="absolute start-0 end-0 top-[64px] flex h-[calc(100vh-64px)] w-full flex-col gap-1 p-4 md:hidden"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      {items.map((item) => {
        const isActive = item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);
        return (
          <li key={item.id}>
            <Link
              href={item.url}
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-3 rounded-xl px-5 py-4 text-lg font-bold transition-colors"
              style={{
                color: isActive ? "var(--primary)" : "var(--fg)",
                background: isActive ? "var(--primary-soft)" : "transparent",
              }}
            >
              <span
                className="star8 inline-block"
                style={{
                  width: 14,
                  height: 14,
                  background: isActive ? "var(--primary)" : "var(--border)",
                }}
                aria-hidden="true"
              />
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
