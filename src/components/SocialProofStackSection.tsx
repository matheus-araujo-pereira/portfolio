import { ArrowUpRight } from "lucide-react";
import {
  COMPLEMENTARY_TECH,
  STACK_TILES,
  TESTIMONIAL,
} from "@/data/profile";

export function SocialProofStackSection() {
  return (
    <section className="border-b border-[#DCD9CE] bg-[#F6F5F0] py-18 sm:py-24 dark:border-[#2E2E2A] dark:bg-[#141413]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Top Part: Real Editorial Client Testimonial */}
        <div className="max-w-4xl">
          <p className="font-mono text-xs tracking-widest text-[#C4552D] uppercase dark:text-[#D96B43]">
            Avaliação Real • 99Freelas
          </p>

          <blockquote className="mt-6">
            <p className="font-serif text-2xl leading-[1.35] font-normal tracking-[-0.015em] text-[#141413] sm:text-3xl dark:text-[#F4F3EE]">
              “{TESTIMONIAL.quote}”
            </p>
          </blockquote>

          <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="font-mono text-xs text-[#57564F] sm:text-sm dark:text-[#9E9D96]">
              <span className="font-medium text-[#141413] dark:text-[#F4F3EE]">
                {TESTIMONIAL.author}
              </span>{" "}
              — {TESTIMONIAL.role}
            </p>

            <a
              href={TESTIMONIAL.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#DCD9CE] bg-[#FFFFFF] px-4 py-2 font-mono text-xs font-medium text-[#141413] transition-colors hover:border-[#141413] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE] dark:focus-visible:outline-[#D96B43]"
            >
              <span>Ver protótipo publicado</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Structural 1px Editorial Divider */}
        <div className="my-16 border-t border-[#DCD9CE] sm:my-20 dark:border-[#2E2E2A]" />

        {/* Bottom Part: Asymmetric 12-Col Technical Ecosystem */}
        <div
          id="stack"
          className="grid grid-cols-1 items-center gap-10 scroll-mt-24 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left 7 Columns: Elevated Rounded Panel with 3x4 Minimalist Grid */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#DCD9CE] bg-[#FFFFFF] p-4 sm:p-6 dark:border-[#2E2E2A] dark:bg-[#1C1C1A]">
              <div className="mb-4 flex items-center justify-between border-b border-[#DCD9CE] pb-3 dark:border-[#2E2E2A]">
                <span className="font-mono text-[11px] tracking-widest text-[#57564F] uppercase dark:text-[#9E9D96]">
                  Ecossistema Principal
                </span>
                <span className="font-mono text-[11px] text-[#57564F] dark:text-[#9E9D96]">
                  12 tecnologias
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                {STACK_TILES.map((tile) => (
                  <div
                    key={tile.name}
                    className="group flex flex-col justify-between rounded-lg border border-[#DCD9CE] bg-[#F6F5F0] p-3.5 transition-colors hover:border-[#C4552D] dark:border-[#2E2E2A] dark:bg-[#232320] dark:hover:border-[#D96B43]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-medium tracking-wider text-[#C4552D] dark:text-[#D96B43]">
                        {tile.code}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#DCD9CE] transition-colors group-hover:bg-[#C4552D] dark:bg-[#3A3A35] dark:group-hover:bg-[#D96B43]"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-semibold tracking-tight text-[#141413] dark:text-[#F4F3EE]">
                        {tile.name}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] text-[#57564F] dark:text-[#9E9D96]">
                        {tile.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Editorial Stack Narrative */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs tracking-widest text-[#C4552D] uppercase dark:text-[#D96B43]">
              Stack &amp; Arquitetura
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-[1.1] font-normal tracking-tight text-[#141413] sm:text-4xl dark:text-[#F4F3EE]">
              Stack consolidada em sistemas financeiros e produtos web.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-[#57564F] sm:text-base dark:text-[#9E9D96]">
              Transito com fluência entre backends corporativos de alta
              criticidade, bancos relacionais com modelagem e tuning fino
              (PostgreSQL, Oracle DB e MySQL) e interfaces web modernas em
              Angular, Next.js e Figma — sustentados por testes automatizados,
              CI/CD e código pensado para durar.
            </p>

            <div className="mt-6 border-t border-[#DCD9CE] pt-5 dark:border-[#2E2E2A]">
              <p className="font-mono text-[11px] tracking-widest text-[#57564F] uppercase dark:text-[#9E9D96]">
                Ferramentas &amp; Práticas Complementares
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {COMPLEMENTARY_TECH.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-[#DCD9CE] bg-[#FFFFFF] px-2 py-0.5 font-mono text-[11px] text-[#57564F] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#9E9D96]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
