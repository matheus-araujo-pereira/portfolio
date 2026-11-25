"use client";

import Image from "next/image";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
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

export function HeroSection() {
  const { locale } = useLanguage();
  const content = PORTFOLIO_CONTENT[locale];
  const whatsappUrl = buildWhatsAppUrl(content.whatsappDefaultMessage);

  return (
    <section
      id="inicio"
      className="border-b border-[#E4E4E7] bg-[#FFFFFF] py-14 sm:py-20 lg:py-24 dark:border-[#27272A] dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (7 cols): Human Introduction & CTAs */}
          <div className="lg:col-span-7">
            {/* Discreet Blue Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1.5 text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#1D4ED8] dark:bg-[#3B82F6]"
              />
              <span>{content.hero.availability}</span>
            </div>

            {/* Strong Human Headline (40px to 56px) */}
            <h1 className="mt-6 text-[2.5rem] leading-[1.1] font-bold tracking-tight text-[#09090B] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06] dark:text-[#FAFAFA]">
              {content.hero.headline}
            </h1>

            {/* Direct Bio Paragraph */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#52525B] sm:text-lg dark:text-[#A1A1AA]">
              {content.hero.summary}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:text-base dark:bg-[#3B82F6] dark:hover:bg-[#60A5FA] dark:focus-visible:outline-[#3B82F6]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>{content.hero.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-5 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:text-base dark:border-[#27272A] dark:bg-[#111114] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6] dark:focus-visible:outline-[#3B82F6]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>{content.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Direct Clean Links with Icon + Label */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2 text-sm font-medium text-[#52525B] transition-colors hover:border-[#1D4ED8] hover:text-[#09090B] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#A1A1AA] dark:hover:border-[#3B82F6] dark:hover:text-[#FAFAFA]"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2 text-sm font-medium text-[#52525B] transition-colors hover:border-[#1D4ED8] hover:text-[#09090B] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#A1A1AA] dark:hover:border-[#3B82F6] dark:hover:text-[#FAFAFA]"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE.freelasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2 text-sm font-medium text-[#52525B] transition-colors hover:border-[#1D4ED8] hover:text-[#09090B] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#A1A1AA] dark:hover:border-[#3B82F6] dark:hover:text-[#FAFAFA]"
              >
                <Freelas99Icon className="h-4 w-4" />
                <span>99Freelas</span>
              </a>

              <CopyEmailButton variant="inline" />
            </div>
          </div>

          {/* Right Column (5 cols): Prominent Studio Portrait Card */}
          <div className="lg:col-span-5">
            <figure className="mx-auto w-full max-w-92 overflow-hidden rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] dark:border-[#27272A] dark:bg-[#111114]">
              <div className="flex items-end justify-center overflow-hidden bg-[#F1F5F9] dark:bg-[#18181B]">
                <Image
                  src={PROFILE.photoPath}
                  alt={PROFILE.name}
                  width={436}
                  height={436}
                  sizes="(max-width: 1024px) 368px, 368px"
                  loading="eager"
                  className="h-auto w-full object-contain object-bottom pt-4"
                />
              </div>

              <figcaption className="border-t border-[#E4E4E7] bg-[#FFFFFF] px-5 py-4 dark:border-[#27272A] dark:bg-[#111114]">
                <p className="text-base font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
                  {PROFILE.name}
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#1D4ED8] dark:text-[#3B82F6]">
                  {content.hero.photoRole}
                </p>
                <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-[#52525B] dark:text-[#A1A1AA]">
                  <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{content.hero.photoLocation}</span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
