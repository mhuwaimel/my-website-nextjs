"use client";

import ActiveLink from "./active-link";
import { usePreferences } from "@/components/providers/PreferencesProvider";

export interface NavItem {
  id: number;
  label: string;
  url: string;
}

export function useNavItems(): NavItem[] {
  const { t } = usePreferences();
  return [
    { id: 1, label: t.nav.about, url: "/" },
    { id: 2, label: t.nav.experience, url: "/experience" },
    { id: 3, label: t.nav.work, url: "/projects" },
    { id: 4, label: t.nav.github, url: "/github" },
    { id: 5, label: t.nav.contact, url: "/contact" },
  ];
}

export default function Menu() {
  const items = useNavItems();
  return (
    <ul className="hidden items-center gap-1.5 md:flex">
      {items.map((item) => (
        <li key={item.id}>
          <ActiveLink href={item.url} exact={item.url === "/experience" ? false : item.url === "/"}>
            {item.label}
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
}
