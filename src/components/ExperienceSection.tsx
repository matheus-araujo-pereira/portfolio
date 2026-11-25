import { Briefcase, ChevronRight, MapPin } from "lucide-react";
import { EXPERIENCES } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24 dark:border-slate-800/80 dark:bg-[#0D1426]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-widest text-[#2563EB] uppercase dark:text-blue-400">
            03 // Trajetória Executiva
          </p>
          <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]">
            Experiência Profissional
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Evolução contínua em engenharia de software corporativa, liderando
            entregas críticas no setor público fazendário e formando novos
            profissionais de tecnologia.
          </p>
        </div>

        {/* Executive Vertical Timeline */}
        <div className="relative mt-10 lg:mt-12">
          {/* Vertical Spine */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-4 w-px bg-slate-200 sm:left-5 dark:bg-slate-800"
          />

          <ol className="space-y-6 sm:space-y-8">
            {EXPERIENCES.map((exp) => (
              <li key={exp.id} className="relative pl-12 sm:pl-14">
                {/* Timeline Node */}
                <span
                  aria-hidden="true"
                  className={`absolute top-6 left-2 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white sm:left-3 dark:ring-[#0D1426] ${
                    exp.current
                      ? "bg-[#059669] dark:bg-emerald-400"
                      : "bg-[#2563EB] dark:bg-blue-400"
                  }`}
                >
                  {exp.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#059669] opacity-60 dark:bg-emerald-400" />
                  )}
                </span>

                {/* Timeline Card */}
                <article className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs transition-colors hover:border-[#2563EB]/40 sm:p-7 dark:border-slate-800 dark:bg-[#162033] dark:hover:border-blue-500/40">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold tracking-tight text-[#0F172A] sm:text-xl dark:text-[#F8FAFC]">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#059669] ring-1 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30">
                            Cargo Atual
                          </span>
                        )}
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <Briefcase
                            className="h-4 w-4 shrink-0 text-[#2563EB] dark:text-blue-400"
                            aria-hidden="true"
                          />
                          <span>{exp.organization}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 sm:text-sm dark:text-slate-400">
                          <MapPin
                            className="h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {exp.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <ChevronRight
                          className={`mt-1 h-4 w-4 shrink-0 ${
                            exp.current
                              ? "text-[#059669] dark:text-emerald-400"
                              : "text-[#2563EB] dark:text-blue-400"
                          }`}
                          aria-hidden="true"
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
      </div>
    </section>
  );
}
