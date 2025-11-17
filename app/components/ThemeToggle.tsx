"use client";
import React, { useEffect, useState } from "react";

type ThemeKey = "ocean" | "sunset" | "nord";

const THEMES: { key: ThemeKey; label: string; preview: [string, string] }[] = [
  { key: "ocean", label: "Ocean", preview: ["#00b3c4", "#6ee7b7"] },
  { key: "sunset", label: "Sunset", preview: ["#f97316", "#a78bfa"] },
  { key: "nord", label: "Nord", preview: ["#88c0d0", "#b48ead"] },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeKey>("ocean");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as ThemeKey | null) ?? undefined;
    const initial = stored ?? (document.documentElement.dataset.theme as ThemeKey) ?? "ocean";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-full glass-effect border border-white/10">
      {THEMES.map((t) => (
        <button
          key={t.key}
          aria-label={`Thème ${t.label}`}
          onClick={() => setTheme(t.key)}
          className={`relative h-8 px-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
            theme === t.key ? "bg-white/10" : "hover:bg-white/5"
          }`}
        >
          <span
            className="w-4 h-4 rounded-full"
            style={{
              backgroundImage: `linear-gradient(90deg, ${t.preview[0]} 0%, ${t.preview[1]} 100%)`,
            }}
          />
          <span className="text-sm text-gray-200">{t.label}</span>
        </button>
      ))}
    </div>
  );
}
