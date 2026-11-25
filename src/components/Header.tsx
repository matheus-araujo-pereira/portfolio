"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppIcon } from "@/components/BrandIcons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");

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
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#F8FAFC]/85 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-[#0F172A]/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] font-mono text-sm font-bold tracking-tight text-white shadow-xs ring-1 ring-slate-900/10 transition-transform group-hover:scale-[1.03] dark:bg-slate-800 dark:ring-blue-400/30">
            {PROFILE.initials}
            <span
              className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#F8FAFC] bg-[#059669] dark:border-[#0F172A] dark:bg-emerald-400"
              aria-hidden="true"
            />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              {PROFILE.shortName}
            </span>
            <span className="font-mono text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Full Stack &amp; UI/UX
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                  isActive
                    ? "bg-blue-50 text-[#2563EB] dark:bg-blue-500/15 dark:text-blue-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-[#0F172A] dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href={PROFILE.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-blue-500/50 hover:text-[#2563EB] dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 lg:hidden cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-slate-200 bg-[#F8FAFC] px-4 pt-3 pb-5 shadow-lg dark:border-slate-800 dark:bg-[#0F172A] lg:hidden"
        >
          <nav
            aria-label="Navegação mobile"
            className="flex flex-col space-y-1"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-[#2563EB] dark:bg-blue-500/15 dark:text-blue-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-200 pt-4 dark:border-slate-800">
            <a
              href={PROFILE.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Solicitar Orçamento (WhatsApp)</span>
            </a>
            <a
              href={PROFILE.resumePath}
              download
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Baixar Currículo (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
