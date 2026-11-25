import { EDUCATION_SUMMARY, EXPERIENCES } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section
      id="trajetoria"
      className="border-b border-[#DCD9CE] bg-[#F6F5F0] py-18 sm:py-24 dark:border-[#2E2E2A] dark:bg-[#141413]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-[#C4552D] uppercase dark:text-[#D96B43]">
              04 / Currículo Executivo
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] font-normal tracking-tight text-[#141413] sm:text-5xl dark:text-[#F4F3EE]">
              Experiência e formação
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#57564F] dark:text-[#9E9D96]">
            Trajetória contínua em sistemas arrecadatórios públicos, liderança
            técnica e formação acadêmica na Universidade Federal de Sergipe.
          </p>
        </div>

        {/* Editorial Horizontal-Rule Experience Table */}
        <div className="mt-12 divide-y divide-[#DCD9CE] border-y border-[#DCD9CE] dark:divide-[#2E2E2A] dark:border-[#2E2E2A]">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="grid grid-cols-1 gap-4 py-7 md:grid-cols-12 md:gap-8 sm:py-8"
            >
              {/* Left Period Column */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-medium tracking-wider text-[#141413] sm:text-sm dark:text-[#F4F3EE]">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="font-mono text-[10px] font-medium tracking-widest text-[#C4552D] uppercase dark:text-[#D96B43]">
                      • Atual
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-[#57564F] dark:text-[#9E9D96]">
                  {exp.location}
                </p>
              </div>

              {/* Right Role & Deliverables Column */}
              <div className="md:col-span-9">
                <h3 className="font-serif text-xl leading-snug font-normal tracking-[-0.015em] text-[#141413] sm:text-2xl dark:text-[#F4F3EE]">
                  {exp.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#57564F] dark:text-[#9E9D96]">
                  {exp.organization}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#57564F] dark:text-[#9E9D96]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C4552D] dark:bg-[#D96B43]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Compact Academic Formation & Languages Strip */}
        <div className="mt-12">
          <p className="font-mono text-xs tracking-widest text-[#57564F] uppercase dark:text-[#9E9D96]">
            Formação Acadêmica &amp; Idiomas
          </p>

          <div className="mt-5 grid grid-cols-1 divide-y divide-[#DCD9CE] rounded-xl border border-[#DCD9CE] bg-[#FFFFFF] md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-[#2E2E2A] dark:border-[#2E2E2A] dark:bg-[#1C1C1A]">
            {EDUCATION_SUMMARY.map((item) => (
              <div key={item.title} className="p-5 sm:p-6">
                <p className="font-mono text-xs text-[#C4552D] dark:text-[#D96B43]">
                  {item.period}
                </p>
                <h3 className="mt-2 font-serif text-lg leading-snug font-normal text-[#141413] dark:text-[#F4F3EE]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#57564F] dark:text-[#9E9D96]">
                  {item.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
