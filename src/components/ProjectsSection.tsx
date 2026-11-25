import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section
      id="cases"
      className="border-b border-[#DCD9CE] bg-[#ECEAE2]/50 py-18 sm:py-24 dark:border-[#2E2E2A] dark:bg-[#171715]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-[#C4552D] uppercase dark:text-[#D96B43]">
              02 / Projetos Selecionados
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] font-normal tracking-tight text-[#141413] sm:text-5xl dark:text-[#F4F3EE]">
              Entregas reais em produção
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#57564F] dark:text-[#9E9D96]">
            Sistemas governamentais de alta criticidade, plataforma clínica
            universitária, design system comercial e engenharia documental.
          </p>
        </div>

        {/* 2x2 Browser / Document Window Showcase */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#DCD9CE] bg-[#FFFFFF] transition-colors hover:border-[#141413]/50 dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:hover:border-[#F4F3EE]/35"
            >
              <div>
                {/* Browser / Document Window Chrome */}
                <div className="flex items-center justify-between gap-3 border-b border-[#DCD9CE] bg-[#F6F5F0] px-4 py-2.5 dark:border-[#2E2E2A] dark:bg-[#232320]">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div
                      className="flex shrink-0 items-center gap-1.5"
                      aria-hidden="true"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#DCD9CE] dark:bg-[#3B3B36]" />
                      <span className="h-2 w-2 rounded-full bg-[#DCD9CE] dark:bg-[#3B3B36]" />
                      <span className="h-2 w-2 rounded-full bg-[#DCD9CE] dark:bg-[#3B3B36]" />
                    </div>
                    <span className="truncate font-mono text-[11px] text-[#57564F] dark:text-[#9E9D96]">
                      {project.windowLabel}
                    </span>
                  </div>

                  <span className="shrink-0 font-mono text-[11px] text-[#57564F] dark:text-[#9E9D96]">
                    {project.year}
                  </span>
                </div>

                {/* Case Content */}
                <div className="p-6 sm:p-7">
                  <span className="font-mono text-[11px] font-medium tracking-wider text-[#C4552D] uppercase dark:text-[#D96B43]">
                    {project.metricBadge}
                  </span>

                  <h3 className="mt-3 font-serif text-2xl leading-[1.2] font-normal tracking-[-0.02em] text-[#141413] dark:text-[#F4F3EE]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#C4552D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:hover:text-[#D96B43] dark:focus-visible:outline-[#D96B43]"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <p className="mt-3.5 text-sm leading-relaxed text-[#57564F] sm:text-[15px] dark:text-[#9E9D96]">
                    {project.problemSolved}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[#DCD9CE] bg-[#F6F5F0] px-2 py-0.5 font-mono text-[11px] text-[#57564F] dark:border-[#2E2E2A] dark:bg-[#232320] dark:text-[#9E9D96]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Action Row */}
              <div className="flex items-center justify-between border-t border-[#DCD9CE] px-6 py-4 sm:px-7 dark:border-[#2E2E2A]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#141413] transition-colors hover:text-[#C4552D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4552D] dark:text-[#F4F3EE] dark:hover:text-[#D96B43] dark:focus-visible:outline-[#D96B43]"
                >
                  <span>{project.linkLabel}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
