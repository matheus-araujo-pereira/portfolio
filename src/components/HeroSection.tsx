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
      className="border-b border-[#E4E4E7] bg-[#FFFFFF] py-12 sm:py-20 lg:py-24 dark:border-[#27272A] dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (7 cols): Human Introduction & CTAs */}
          <div className="min-w-0 lg:col-span-7">
            {/* Discreet Blue Availability Badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1.5 text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-[#3B82F6]"
              />
              <span>{content.hero.availability}</span>
            </div>

            {/* Strong Human Headline */}
            <h1 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight text-[#09090B] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] xl:text-[3.5rem] dark:text-[#FAFAFA]">
              {content.hero.headline}
            </h1>

            {/* Direct Bio Paragraph */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#52525B] sm:mt-6 sm:text-lg dark:text-[#A1A1AA]">
              {content.hero.summary}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:w-auto sm:text-base dark:bg-[#3B82F6] dark:hover:bg-[#60A5FA] dark:focus-visible:outline-[#3B82F6]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>{content.hero.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={content.resume.href}
                download={content.resume.downloadName}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-5 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] sm:w-auto sm:text-base dark:border-[#27272A] dark:bg-[#111114] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6] dark:focus-visible:outline-[#3B82F6]"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{content.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Direct Clean Links with Icon + Label */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-7">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2 text-sm font-medium text-[#52525B] transition-colors hover:border-[#1D4ED8] hover:text-[#09090B] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#A1A1AA] dark:hover:border-[#3B82F6] dark:hover:text-[#FAFAFA]"
              >
                <GitHubIcon className="h-4 w-4 shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2 text-sm font-medium text-[#52525B] transition-colors hover:border-[#1D4ED8] hover:text-[#09090B] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#A1A1AA] dark:hover:border-[#3B82F6] dark:hover:text-[#FAFAFA]"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE.freelasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-[#E4E4E7] bg-[#FFFFFF] px-3 py-2 text-sm font-medium text-[#52525B] transition-colors hover:border-[#1D4ED8] hover:text-[#09090B] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#A1A1AA] dark:hover:border-[#3B82F6] dark:hover:text-[#FAFAFA]"
              >
                <Freelas99Icon className="h-4 w-4 shrink-0" />
                <span>99Freelas</span>
              </a>

              <CopyEmailButton variant="inline" />
            </div>
          </div>

          {/* Right Column (5 cols): Circular High-Sharpness Portrait Card */}
          <div className="min-w-0 lg:col-span-5">
            <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] dark:border-[#27272A] dark:bg-[#111114]">
              <div className="bg-[#F8FAFC] px-6 pt-8 pb-6 dark:bg-[#111114]">
                <div className="mx-auto flex h-56 w-56 items-end justify-center overflow-hidden rounded-full border-2 border-white bg-zinc-200 pt-6 ring-2 ring-blue-600/35 sm:h-60 sm:w-60 dark:border-zinc-900 dark:bg-zinc-800 dark:ring-blue-500/45">
                  <Image
                    src={PROFILE.photoPath}
                    alt={PROFILE.name}
                    width={436}
                    height={436}
                    quality={100}
                    priority
                    sizes="(min-width: 640px) 240px, 224px"
                    className="h-full w-full object-contain object-bottom"
                  />
                </div>
              </div>

              <figcaption className="border-t border-[#E4E4E7] bg-[#FFFFFF] px-5 py-4 text-center dark:border-[#27272A] dark:bg-[#111114]">
                <p className="text-base font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
                  {PROFILE.name}
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#1D4ED8] dark:text-[#3B82F6]">
                  {content.hero.photoRole}
                </p>
                <p className="mt-2 flex items-center justify-center gap-1.5 font-mono text-xs text-[#52525B] dark:text-[#A1A1AA]">
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
