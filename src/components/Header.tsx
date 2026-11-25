"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

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

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCD9CE] bg-[#F6F5F0]/92 backdrop-blur-md transition-colors dark:border-[#2E2E2A] dark:bg-[#141413]/92">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        {/* Typographic Serif Monogram */}
        <a
          href="#inicio"
          onClick={closeMenu}
          aria-label="Matheus Araujo Pereira — Voltar ao início"
          className="font-serif text-2xl font-medium tracking-tight text-[#141413] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4552D] dark:text-[#F4F3EE] dark:focus-visible:outline-[#D96B43]"
        >
          {PROFILE.monogram}
          <span className="text-[#C4552D] dark:text-[#D96B43]">.</span>
        </a>

        {/* Clean Center Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4552D] dark:focus-visible:outline-[#D96B43] ${
                  isActive
                    ? "text-[#141413] underline decoration-[#C4552D] decoration-1 underline-offset-8 dark:text-[#F4F3EE] dark:decoration-[#D96B43]"
                    : "text-[#57564F] hover:text-[#141413] dark:text-[#9E9D96] dark:hover:text-[#F4F3EE]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href={PROFILE.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md bg-[#141413] px-4 py-2 text-sm font-medium text-[#F4F3EE] transition-colors hover:bg-[#232320] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] sm:inline-flex dark:bg-[#F4F3EE] dark:text-[#141413] dark:hover:bg-[#E4E2D9] dark:focus-visible:outline-[#D96B43]"
          >
            <span>Iniciar projeto</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#DCD9CE] text-[#141413] transition-colors hover:border-[#141413] md:hidden dark:border-[#2E2E2A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-[#DCD9CE] bg-[#F6F5F0] px-5 pt-4 pb-6 md:hidden dark:border-[#2E2E2A] dark:bg-[#141413]"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-[#DCD9CE]/70 py-3 text-sm font-medium text-[#141413] transition-colors hover:text-[#C4552D] dark:border-[#2E2E2A]/80 dark:text-[#F4F3EE] dark:hover:text-[#D96B43]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href={PROFILE.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-[#141413] px-4 py-3 text-sm font-medium text-[#F4F3EE] dark:bg-[#F4F3EE] dark:text-[#141413]"
            >
              <span>Iniciar projeto</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.resumePath}
              download
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-md border border-[#DCD9CE] px-4 py-2.5 font-mono text-xs font-medium text-[#141413] dark:border-[#2E2E2A] dark:text-[#F4F3EE]"
            >
              Baixar currículo (.pdf)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
