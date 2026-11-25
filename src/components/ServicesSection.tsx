"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_CONTENT, buildWhatsAppUrl } from "@/data/profile";

export function ServicesSection() {
  const { locale } = useLanguage();
  const { servicesSection } = PORTFOLIO_CONTENT[locale];

  return (
    <section
      id="servicos"
      className="border-b border-[#E4E4E7] bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 dark:border-[#27272A] dark:bg-[#111114]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-wider text-[#1D4ED8] uppercase dark:text-[#3B82F6]">
            {servicesSection.eyebrow}
          </p>
          <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-[#09090B] sm:text-4xl dark:text-[#FAFAFA]">
            {servicesSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
            {servicesSection.subtitle}
          </p>
        </div>

        {/* Clean 2x2 Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12">
          {servicesSection.items.map((service, index) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] p-6 transition-colors hover:border-[#1D4ED8] sm:p-7 dark:border-[#27272A] dark:bg-[#09090B] dark:hover:border-[#3B82F6]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-md border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-0.5 font-mono text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#52525B] sm:text-[15px] dark:text-[#A1A1AA]">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#09090B] dark:text-[#FAFAFA]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-[#3B82F6]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#E4E4E7] bg-[#F8FAFC] px-2.5 py-1 font-mono text-xs text-[#52525B] dark:border-[#27272A] dark:bg-[#18181B] dark:text-[#A1A1AA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#E4E4E7] pt-5 dark:border-[#27272A]">
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] transition-colors hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] dark:text-[#3B82F6] dark:hover:text-[#60A5FA] dark:focus-visible:outline-[#3B82F6]"
                >
                  <span>{servicesSection.ctaLabel}</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
