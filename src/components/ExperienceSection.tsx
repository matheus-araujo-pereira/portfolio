import Image from "next/image";
import { EDUCATION_SUMMARY, EXPERIENCES, PROFILE } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section
      id="trajetoria"
      className="border-b border-[#DCD9CE] bg-[#F6F5F0] py-18 sm:py-24 dark:border-[#2E2E2A] dark:bg-[#141413]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Executive Column: Heading + Studio Portrait Card + UFS Summary */}
          <div className="lg:sticky lg:top-24 lg:col-span-4">
            <p className="font-mono text-xs tracking-widest text-[#C4552D] uppercase dark:text-[#D96B43]">
              04 / Currículo Executivo
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] font-normal tracking-tight text-[#141413] sm:text-5xl dark:text-[#F4F3EE]">
              Experiência e formação
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#57564F] dark:text-[#9E9D96]">
              Trajetória contínua em sistemas arrecadatórios públicos, liderança
              técnica e formação acadêmica na Universidade Federal de Sergipe.
            </p>

            {/* Editorial Studio Portrait Card */}
            <figure className="mt-7 w-full max-w-60 overflow-hidden rounded-xl border border-[#DCD9CE] bg-[#E8E5DC] dark:border-[#2E2E2A] dark:bg-[#1C1C1A]">
              <div className="flex aspect-square w-full items-end justify-center overflow-hidden bg-[#E8E5DC] dark:bg-[#1C1C1A]">
                <Image
                  src={PROFILE.photoPath}
                  alt={`Retrato editorial de ${PROFILE.name}`}
                  width={436}
                  height={436}
                  sizes="240px"
                  className="h-full w-full object-contain object-bottom pt-3"
                />
              </div>

              <figcaption className="flex items-center justify-between gap-2 border-t border-[#DCD9CE] bg-[#F6F5F0] px-3.5 py-2.5 font-mono text-[11px] tracking-wider text-[#141413] uppercase dark:border-[#2E2E2A] dark:bg-[#141413] dark:text-[#F4F3EE]">
                <span>MATHEUS A. PEREIRA</span>
                <span
                  title="Disponível para projetos e oportunidades"
                  aria-label="Disponível"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#4ADE80]"
                />
              </figcaption>
            </figure>

            {/* Compact Academic Formation & Languages Summary */}
            <div className="mt-8">
              <p className="font-mono text-[11px] tracking-widest text-[#57564F] uppercase dark:text-[#9E9D96]">
                Formação Acadêmica &amp; Idiomas
              </p>

              <div className="mt-3 divide-y divide-[#DCD9CE] rounded-xl border border-[#DCD9CE] bg-[#FFFFFF] dark:divide-[#2E2E2A] dark:border-[#2E2E2A] dark:bg-[#1C1C1A]">
                {EDUCATION_SUMMARY.map((item) => (
                  <div key={item.title} className="p-4">
                    <p className="font-mono text-[11px] text-[#C4552D] dark:text-[#D96B43]">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-serif text-base leading-snug font-normal text-[#141413] dark:text-[#F4F3EE]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#57564F] dark:text-[#9E9D96]">
                      {item.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Editorial Horizontal-Rule Experience Table */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[#DCD9CE] border-y border-[#DCD9CE] dark:divide-[#2E2E2A] dark:border-[#2E2E2A]">
              {EXPERIENCES.map((exp) => (
                <article
                  key={exp.id}
                  className="grid grid-cols-1 gap-4 py-7 sm:py-8 md:grid-cols-12 md:gap-6"
                >
                  {/* Period Column */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-2">
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

                  {/* Role & Deliverables Column */}
                  <div className="md:col-span-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
