"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const handleToggle = () => {
    const root = document.documentElement;
    const isCurrentlyDark = root.classList.contains("dark");
    const nextIsDark = !isCurrentlyDark;
    root.classList.toggle("dark", nextIsDark);
    root.style.colorScheme = nextIsDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      // Ignore storage access errors in restricted browsing modes
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Alternar tema claro e escuro"
      title="Alternar tema claro e escuro"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:border-blue-500/50 hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-400/50 dark:hover:text-blue-400 cursor-pointer"
    >
      <Sun className="hidden h-4.5 w-4.5 dark:block" aria-hidden="true" />
      <Moon className="block h-4.5 w-4.5 dark:hidden" aria-hidden="true" />
    </button>
  );
}
