"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  PORTFOLIO_CONTENT,
  PROFILE,
  buildWhatsAppUrl,
} from "@/data/profile";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const { locale } = useLanguage();
  const content = PORTFOLIO_CONTENT[locale];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const ids = ["servicos", "projetos", "trajetoria", "stack", "contato"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);
  const whatsappUrl = buildWhatsAppUrl(content.whatsappDefaultMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E4E7] bg-[#FFFFFF]/92 backdrop-blur-md transition-colors dark:border-[#27272A] dark:bg-[#09090B]/92">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-bold tracking-tight text-[#09090B] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] sm:gap-2 sm:text-base dark:text-[#FAFAFA] dark:focus-visible:outline-[#3B82F6]"
        >
          <span>{PROFILE.shortName}</span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-[#3B82F6]"
          />
        </a>

        {/* Center Navigation */}
        <nav
          aria-label={locale === "en" ? "Main navigation" : "Navegação principal"}
          className="hidden items-center gap-6 lg:flex"
        >
          {content.nav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] dark:focus-visible:outline-[#3B82F6] ${
                  isActive
                    ? "text-[#1D4ED8] dark:text-[#3B82F6]"
                    : "text-[#52525B] hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-[#FAFAFA]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageToggle />
          <ThemeToggle />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-lg bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:inline-flex dark:bg-[#3B82F6] dark:hover:bg-[#60A5FA] dark:focus-visible:outline-[#3B82F6]"
          >
            {content.header.cta}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={
              mobileMenuOpen
                ? content.header.closeMenu
                : content.header.openMenu
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] text-[#09090B] transition-colors hover:border-[#1D4ED8] lg:hidden dark:border-[#27272A] dark:bg-[#111114] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-[#E4E4E7] bg-[#FFFFFF] px-4 pt-3 pb-5 sm:px-6 lg:hidden dark:border-[#27272A] dark:bg-[#09090B]"
        >
          <nav
            aria-label={
              locale === "en" ? "Mobile navigation" : "Navegação mobile"
            }
            className="flex flex-col"
          >
            {content.nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center border-b border-[#E4E4E7] text-sm font-medium text-[#09090B] transition-colors hover:text-[#1D4ED8] dark:border-[#27272A] dark:text-[#FAFAFA] dark:hover:text-[#3B82F6]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E40AF] dark:bg-[#3B82F6] dark:hover:bg-[#60A5FA]"
            >
              {content.hero.primaryCta}
            </a>
            <a
              href={content.resume.href}
              download={content.resume.downloadName}
              onClick={closeMenu}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[#E4E4E7] bg-[#F8FAFC] px-4 py-2.5 text-sm font-medium text-[#09090B] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#FAFAFA]"
            >
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
