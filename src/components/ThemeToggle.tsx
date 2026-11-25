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
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#DCD9CE] bg-transparent text-[#57564F] transition-colors hover:border-[#141413] hover:text-[#141413] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:border-[#2E2E2A] dark:text-[#9E9D96] dark:hover:border-[#F4F3EE] dark:hover:text-[#F4F3EE] dark:focus-visible:outline-[#D96B43] cursor-pointer"
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="block h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
