"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { dict, type Dir, type Theme, type Labels } from "@/lib/i18n";

interface PreferencesValue {
  dir: Dir;
  theme: Theme;
  isRTL: boolean;
  t: Labels;
  setDir: (d: Dir) => void;
  setTheme: (t: Theme) => void;
  toggleDir: () => void;
  toggleTheme: () => void;
}

const PreferencesContext = createContext<PreferencesValue | null>(null);

const DIR_KEY = "pref-dir";
const THEME_KEY = "pref-theme";

export function PreferencesProvider({
  children,
  defaultDir = "rtl",
  defaultTheme = "light",
}: {
  children: ReactNode;
  defaultDir?: Dir;
  defaultTheme?: Theme;
}) {
  const pathname = usePathname();
  const [dir, setDirState] = useState<Dir>(defaultDir);
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // Hydrate from localStorage after mount (the inline script in <head> already
  // applied the attributes pre-paint to avoid a flash — see layout.tsx).
  useEffect(() => {
    const savedDir = localStorage.getItem(DIR_KEY) as Dir | null;
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const frame = requestAnimationFrame(() => {
      if (savedDir === "rtl" || savedDir === "ltr") setDirState(savedDir);
      if (savedTheme === "light" || savedTheme === "dark") setThemeState(savedTheme);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  // Reflect direction onto <html> + persist.
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", dir);
    html.setAttribute("lang", dir === "rtl" ? "ar" : "en");
    localStorage.setItem(DIR_KEY, dir);
  }, [dir]);

  useEffect(() => {
    const page = pathname.split("/")[1] as keyof Labels["pageTitles"];
    const title = dict[dir].pageTitles[page || "home"] ?? dict[dir].pageTitles.home;
    document.title = page ? `${title} | ${dict[dir].pageTitles.home}` : title;
  }, [dir, pathname]);

  // Reflect theme onto <html> (Tailwind `class` strategy) + persist.
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", theme === "dark");
    html.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const setDir = useCallback((d: Dir) => setDirState(d), []);
  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleDir = useCallback(
    () => setDirState((p) => (p === "rtl" ? "ltr" : "rtl")),
    []
  );
  const toggleTheme = useCallback(
    () => setThemeState((p) => (p === "light" ? "dark" : "light")),
    []
  );

  const value: PreferencesValue = {
    dir,
    theme,
    isRTL: dir === "rtl",
    t: dict[dir],
    setDir,
    setTheme,
    toggleDir,
    toggleTheme,
  };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences(): PreferencesValue {
  const ctx = useContext(PreferencesContext);
  if (!ctx)
    throw new Error("usePreferences must be used within <PreferencesProvider>");
  return ctx;
}
