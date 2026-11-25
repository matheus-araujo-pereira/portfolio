"use client";

import { GraduationCap, Languages, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_CONTENT } from "@/data/profile";

export function ExperienceSection() {
  const { locale } = useLanguage();
  const { experienceSection } = PORTFOLIO_CONTENT[locale];

  return (
    <section
      id="trajetoria"
      className="border-b border-[#E4E4E7] bg-[#FFFFFF] py-14 sm:py-20 lg:py-24 dark:border-[#27272A] dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-wider text-[#1D4ED8] uppercase dark:text-[#3B82F6]">
            {experienceSection.eyebrow}
          </p>
          <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-[#09090B] sm:text-4xl dark:text-[#FAFAFA]">
            {experienceSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
            {experienceSection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          {/* Left 8 Cols: Clean Vertical Timeline with Blue Markers */}
          <div className="relative min-w-0 lg:col-span-8">
            <div
              aria-hidden="true"
              className="absolute top-3 bottom-3 left-2 w-px bg-[#E4E4E7] sm:left-2.5 dark:bg-[#27272A]"
            />

            <ol className="space-y-5 sm:space-y-6">
              {experienceSection.items.map((exp) => (
                <li key={exp.id} className="relative pl-7 sm:pl-9">
                  {/* Blue Timeline Marker */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-6 left-0.5 h-3 w-3 rounded-full ring-4 ring-[#FFFFFF] sm:left-1 dark:ring-[#09090B] ${
                      exp.current
                        ? "bg-[#1D4ED8] dark:bg-[#3B82F6]"
                        : "border-2 border-[#1D4ED8] bg-[#FFFFFF] dark:border-[#3B82F6] dark:bg-[#09090B]"
                    }`}
                  />

                  <article className="min-w-0 rounded-2xl border border-[#E4E4E7] bg-[#F8FAFC] p-5 sm:p-6 dark:border-[#27272A] dark:bg-[#111114]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]">
                            {experienceSection.currentBadge}
                          </span>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-1 font-mono text-xs text-[#52525B] dark:text-[#A1A1AA]">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold tracking-tight text-[#09090B] sm:text-xl dark:text-[#FAFAFA]">
                      {exp.role}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#1D4ED8] dark:text-[#3B82F6]">
                      {exp.organization}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#52525B] dark:text-[#A1A1AA]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1D4ED8] dark:bg-[#3B82F6]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* Right 4 Cols: Academic Education & Languages Cards */}
          <div className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-4">
            {/* Education Card */}
            <div className="rounded-2xl border border-[#E4E4E7] bg-[#F8FAFC] p-5 sm:p-6 dark:border-[#27272A] dark:bg-[#111114]">
              <div className="flex items-center gap-2.5">
                <GraduationCap
                  className="h-5 w-5 text-[#1D4ED8] dark:text-[#3B82F6]"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
                  {experienceSection.educationTitle}
                </h3>
              </div>

              <div className="mt-5 space-y-4">
                {experienceSection.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-xl border border-[#E4E4E7] bg-[#FFFFFF] p-4 dark:border-[#27272A] dark:bg-[#09090B]"
                  >
                    <p className="font-mono text-xs font-medium text-[#1D4ED8] dark:text-[#3B82F6]">
                      {edu.period}
                    </p>
                    <h4 className="mt-1.5 text-sm font-bold text-[#09090B] dark:text-[#FAFAFA]">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
                      {edu.institution}
                    </p>
                    <span className="mt-2.5 inline-block rounded-md border border-[#E4E4E7] bg-[#F8FAFC] px-2 py-0.5 font-mono text-[11px] text-[#52525B] dark:border-[#27272A] dark:bg-[#18181B] dark:text-[#A1A1AA]">
                      {edu.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="rounded-2xl border border-[#E4E4E7] bg-[#F8FAFC] p-5 sm:p-6 dark:border-[#27272A] dark:bg-[#111114]">
              <div className="flex items-center gap-2.5">
                <Languages
                  className="h-5 w-5 text-[#1D4ED8] dark:text-[#3B82F6]"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
                  {experienceSection.languagesTitle}
                </h3>
              </div>

              <div className="mt-5 space-y-3">
                {experienceSection.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="rounded-xl border border-[#E4E4E7] bg-[#FFFFFF] p-4 dark:border-[#27272A] dark:bg-[#09090B]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-[#09090B] dark:text-[#FAFAFA]">
                        {lang.name}
                      </h4>
                      <span className="rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]">
                        {lang.level}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
                      {lang.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
