"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Selecionar idioma / Select language"
      className="inline-flex h-9 items-center rounded-lg border border-[#E4E4E7] bg-[#F8FAFC] p-0.5 font-mono text-xs dark:border-[#27272A] dark:bg-[#111114]"
    >
      <button
        type="button"
        onClick={() => setLocale("pt")}
        aria-pressed={locale === "pt"}
        className={`rounded-md px-2 py-1 font-medium transition-colors cursor-pointer ${
          locale === "pt"
            ? "bg-[#FFFFFF] text-[#09090B] shadow-xs dark:bg-[#18181B] dark:text-[#FAFAFA]"
            : "text-[#52525B] hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-[#FAFAFA]"
        }`}
      >
        PT
      </button>
      <span
        aria-hidden="true"
        className="px-0.5 text-[#E4E4E7] dark:text-[#27272A]"
      >
        |
      </span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-md px-2 py-1 font-medium transition-colors cursor-pointer ${
          locale === "en"
            ? "bg-[#FFFFFF] text-[#09090B] shadow-xs dark:bg-[#18181B] dark:text-[#FAFAFA]"
            : "text-[#52525B] hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-[#FAFAFA]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
