"use client";

import { ArrowUp, ArrowUpRight, Download, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  PORTFOLIO_CONTENT,
  PROFILE,
  buildWhatsAppUrl,
} from "@/data/profile";
import {
  Freelas99Icon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function ContactFooterSection() {
  const { locale } = useLanguage();
  const content = PORTFOLIO_CONTENT[locale];
  const whatsappUrl = buildWhatsAppUrl(content.whatsappDefaultMessage);

  return (
    <footer
      id="contato"
      className="bg-[#F8FAFC] pt-14 pb-12 sm:pt-20 dark:bg-[#111114]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 pb-14 lg:grid-cols-12">
          {/* Left Call to Action */}
          <div className="min-w-0 lg:col-span-7">
            <p className="font-mono text-xs font-medium tracking-wider text-[#1D4ED8] uppercase dark:text-[#3B82F6]">
              {content.footer.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#09090B] sm:text-4xl dark:text-[#FAFAFA]">
              {content.footer.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
              {content.footer.subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:w-auto sm:px-5 sm:text-base dark:bg-[#3B82F6] dark:hover:bg-[#60A5FA] dark:focus-visible:outline-[#3B82F6]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>
                  {content.footer.whatsappCta} — {PROFILE.whatsappDisplay}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.resumePath}
                download
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-4 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:w-auto sm:px-5 sm:text-base dark:border-[#27272A] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6] dark:focus-visible:outline-[#3B82F6]"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{content.footer.resumeCta}</span>
              </a>
            </div>
          </div>

          {/* Right Direct Channels */}
          <div className="min-w-0 space-y-3 lg:col-span-5">
            <CopyEmailButton variant="card" />

            <a
              href={`mailto:${PROFILE.email}`}
              className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF] px-3.5 py-3 text-sm font-medium text-[#09090B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] sm:px-4 sm:py-3.5 dark:border-[#27272A] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6]"
            >
              <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <Mail
                  className="h-4 w-4 shrink-0 text-[#52525B] dark:text-[#A1A1AA]"
                  aria-hidden="true"
                />
                <span className="truncate">
                  {content.footer.openMailClient}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 min-w-28 flex-1 items-center justify-center gap-2 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2.5 text-sm font-medium text-[#09090B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] dark:border-[#27272A] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6]"
              >
                <GitHubIcon className="h-4 w-4 shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 min-w-28 flex-1 items-center justify-center gap-2 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2.5 text-sm font-medium text-[#09090B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] dark:border-[#27272A] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6]"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE.freelasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 min-w-28 flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2.5 text-sm font-medium text-[#09090B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] dark:border-[#27272A] dark:bg-[#09090B] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6]"
              >
                <Freelas99Icon className="h-4 w-4 shrink-0" />
                <span>99Freelas</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#E4E4E7] pt-8 md:flex-row md:items-center dark:border-[#27272A]">
          <div>
            <p className="text-sm font-bold text-[#09090B] dark:text-[#FAFAFA]">
              {PROFILE.name}
            </p>
            <p className="mt-0.5 text-xs text-[#52525B] dark:text-[#A1A1AA]">
              © 2026 {PROFILE.name}. {content.footer.rights}
            </p>
          </div>

          <nav
            aria-label={
              locale === "en" ? "Footer navigation" : "Navegação do rodapé"
            }
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {content.nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="inline-flex min-h-9 items-center text-xs font-medium text-[#52525B] transition-colors hover:text-[#1D4ED8] dark:text-[#A1A1AA] dark:hover:text-[#3B82F6]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#inicio"
            className="inline-flex min-h-9 items-center gap-1.5 text-xs font-medium text-[#52525B] transition-colors hover:text-[#1D4ED8] dark:text-[#A1A1AA] dark:hover:text-[#3B82F6]"
          >
            <span>{content.footer.backToTop}</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
