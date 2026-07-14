"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { usePreferences } from "@/components/providers/PreferencesProvider";

const socials = [
  {
    href: "https://www.linkedin.com/in/mhuwimmel/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "https://github.com/mhuwaimel", label: "GitHub", Icon: Github },
  {
    href: "http://instagram.com/mhuwaimel",
    label: "Instagram",
    Icon: Instagram,
  },
];

export default function Footer() {
  const { t } = usePreferences();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
      className="footer-container"
    >
      <div className=" flex   items-center justify-between gap-5 px-6 py-2">
        <small style={{ color: "var(--muted)" }}>{t.rights}</small>
        <p className="icons">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/mhuwimmel/"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-xl font-bold text-cyan-600 hover:text-2xl hover:text-cyan-950" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/mhuwaimel"
            aria-label="GitHub"
          >
            <Github className="text-2xl font-bold hover:text-3xl" />
          </Link>
          <Link
            target="_blank"
            href="http://instagram.com/mhuwaimel"
            aria-label="Instagram"
          >
            <Instagram className="text-2xl text-amber-700 hover:text-rose-900 hover:text-3xl" />
          </Link>
        </p>
      </div>
    </footer>
  );
}
