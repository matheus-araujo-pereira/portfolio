import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="border-b border-slate-200/80 bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 dark:border-slate-800/80 dark:bg-[#0F172A]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-widest text-[#2563EB] uppercase dark:text-blue-400">
            02 // Portfólio &amp; Cases
          </p>
          <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]">
            Portfólio &amp; Cases em Destaque
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Projetos reais entregues em produção governamental, pesquisa clínica
            universitária, consultoria freelance e engenharia documental.
          </p>
        </div>

        {/* 4 Project Case Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12">
          {PROJECTS.map((project) => {
            const isEmerald = project.accent === "emerald";
            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/50 hover:shadow-md dark:border-slate-800 dark:bg-[#162033] dark:hover:border-blue-500/50"
              >
                {/* Top Accent Strip */}
                <div
                  aria-hidden="true"
                  className={`h-1 w-full ${
                    isEmerald
                      ? "bg-gradient-to-r from-[#059669] via-emerald-500 to-teal-400"
                      : "bg-gradient-to-r from-[#2563EB] via-blue-500 to-sky-400"
                  }`}
                />

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
                        {project.category}
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold ${
                          isEmerald
                            ? "bg-emerald-50 text-[#059669] ring-1 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30"
                            : "bg-blue-50 text-[#2563EB] ring-1 ring-blue-200 dark:bg-blue-500/15 dark:text-blue-300 dark:ring-blue-500/30"
                        }`}
                      >
                        {project.highlightBadge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold tracking-tight text-[#0F172A] transition-colors group-hover:text-[#2563EB] sm:text-xl dark:text-[#F8FAFC] dark:group-hover:text-blue-400">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px] dark:text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span>{project.linkLabel}</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
