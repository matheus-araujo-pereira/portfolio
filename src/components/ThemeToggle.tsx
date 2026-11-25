"use client";

import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_CONTENT } from "@/data/profile";

export function ThemeToggle() {
  const { locale } = useLanguage();
  const label = PORTFOLIO_CONTENT[locale].header.toggleTheme;

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
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] text-[#52525B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#A1A1AA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6] dark:focus-visible:outline-[#3B82F6] cursor-pointer"
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="block h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
