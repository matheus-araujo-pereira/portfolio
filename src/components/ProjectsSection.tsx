"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_CONTENT } from "@/data/profile";

export function ProjectsSection() {
  const { locale } = useLanguage();
  const { projectsSection } = PORTFOLIO_CONTENT[locale];

  return (
    <section
      id="projetos"
      className="border-b border-[#E4E4E7] bg-[#FFFFFF] py-14 sm:py-20 lg:py-24 dark:border-[#27272A] dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-wider text-[#1D4ED8] uppercase dark:text-[#3B82F6]">
            {projectsSection.eyebrow}
          </p>
          <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-[#09090B] sm:text-4xl dark:text-[#FAFAFA]">
            {projectsSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
            {projectsSection.subtitle}
          </p>
        </div>

        {/* Clean 2x2 Featured Cases Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-12">
          {projectsSection.items.map((project) => (
            <article
              key={project.id}
              className="group flex min-w-0 flex-col justify-between rounded-2xl border border-[#E4E4E7] bg-[#F8FAFC] p-5 transition-colors hover:border-[#1D4ED8] sm:p-7 dark:border-[#27272A] dark:bg-[#111114] dark:hover:border-[#3B82F6]"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[#52525B] dark:text-[#A1A1AA]">
                    {project.category}
                  </span>
                  <span className="inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-0.5 font-mono text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] dark:hover:text-[#3B82F6] dark:focus-visible:outline-[#3B82F6]"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#52525B] sm:text-[15px] dark:text-[#A1A1AA]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-2.5 py-1 font-mono text-xs text-[#52525B] dark:border-[#27272A] dark:bg-[#18181B] dark:text-[#A1A1AA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#E4E4E7] pt-4 dark:border-[#27272A]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] transition-colors hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] dark:text-[#3B82F6] dark:hover:text-[#60A5FA] dark:focus-visible:outline-[#3B82F6]"
                >
                  <span>{project.linkLabel}</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
