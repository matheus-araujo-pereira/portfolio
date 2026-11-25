import { ArrowRight } from "lucide-react";
import { SERVICES, buildWhatsAppUrl, type ServiceTone } from "@/data/profile";

function getCardToneClasses(tone: ServiceTone) {
  switch (tone) {
    case "dark":
      return {
        card: "border-[#141413] bg-[#141413] text-[#F4F3EE] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE]",
        number: "text-[#D96B43]",
        description: "text-[#B8B7B0] dark:text-[#9E9D96]",
        deliverable: "text-[#E5E3DB] dark:text-[#D9D8D0]",
        bullet: "bg-[#D96B43]",
        tag: "border-[#2E2E2A] bg-[#232320] text-[#D9D8D0]",
        divider: "border-[#2E2E2A]",
        link: "text-[#F4F3EE] hover:text-[#D96B43]",
      };
    case "paper":
      return {
        card: "border-[#DCD9CE] bg-[#FFFFFF] text-[#141413] dark:border-[#2E2E2A] dark:bg-[#232320] dark:text-[#F4F3EE]",
        number: "text-[#C4552D] dark:text-[#D96B43]",
        description: "text-[#57564F] dark:text-[#9E9D96]",
        deliverable: "text-[#141413] dark:text-[#E5E3DB]",
        bullet: "bg-[#141413] dark:bg-[#F4F3EE]",
        tag: "border-[#DCD9CE] bg-[#F6F5F0] text-[#57564F] dark:border-[#363632] dark:bg-[#1C1C1A] dark:text-[#9E9D96]",
        divider: "border-[#DCD9CE] dark:border-[#363632]",
        link: "text-[#141413] hover:text-[#C4552D] dark:text-[#F4F3EE] dark:hover:text-[#D96B43]",
      };
    case "muted":
      return {
        card: "border-[#DCD9CE] bg-[#ECEAE2] text-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE]",
        number: "text-[#C4552D] dark:text-[#D96B43]",
        description: "text-[#57564F] dark:text-[#9E9D96]",
        deliverable: "text-[#141413] dark:text-[#E5E3DB]",
        bullet: "bg-[#57564F] dark:bg-[#9E9D96]",
        tag: "border-[#DCD9CE] bg-[#F6F5F0] text-[#57564F] dark:border-[#2E2E2A] dark:bg-[#232320] dark:text-[#9E9D96]",
        divider: "border-[#DCD9CE] dark:border-[#2E2E2A]",
        link: "text-[#141413] hover:text-[#C4552D] dark:text-[#F4F3EE] dark:hover:text-[#D96B43]",
      };
    case "accent":
      return {
        card: "border-[#C4552D] bg-[#FFFFFF] text-[#141413] dark:border-[#D96B43] dark:bg-[#1C1C1A] dark:text-[#F4F3EE]",
        number: "text-[#C4552D] dark:text-[#D96B43]",
        description: "text-[#57564F] dark:text-[#9E9D96]",
        deliverable: "text-[#141413] dark:text-[#E5E3DB]",
        bullet: "bg-[#C4552D] dark:bg-[#D96B43]",
        tag: "border-[#DCD9CE] bg-[#F6F5F0] text-[#57564F] dark:border-[#2E2E2A] dark:bg-[#232320] dark:text-[#9E9D96]",
        divider: "border-[#DCD9CE] dark:border-[#2E2E2A]",
        link: "text-[#C4552D] hover:text-[#141413] dark:text-[#D96B43] dark:hover:text-[#F4F3EE]",
      };
  }
}

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="border-b border-[#DCD9CE] bg-[#F6F5F0] py-18 sm:py-24 dark:border-[#2E2E2A] dark:bg-[#141413]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-[#C4552D] uppercase dark:text-[#D96B43]">
              01 / Carta de Serviços
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] font-normal tracking-tight text-[#141413] sm:text-5xl dark:text-[#F4F3EE]">
              Como posso ajudar no seu projeto
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#57564F] dark:text-[#9E9D96]">
            Escopos fechados ou atuação dedicada, unindo engenharia de backend
            corporativa e interfaces editoriais sob medida.
          </p>
        </div>

        {/* 2x2 High-Contrast Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map((service) => {
            const tone = getCardToneClasses(service.tone);
            return (
              <article
                key={service.id}
                className={`group flex flex-col justify-between rounded-xl border p-7 transition-colors sm:p-8 ${tone.card}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-mono text-xs font-medium tracking-widest ${tone.number}`}
                    >
                      {service.number}
                    </span>
                    <span className="font-mono text-[11px] uppercase opacity-60">
                      Sob medida
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl leading-[1.18] font-normal tracking-[-0.02em] sm:text-[1.75rem]">
                    {service.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed sm:text-[15px] ${tone.description}`}
                  >
                    {service.description}
                  </p>

                  {/* Concrete Deliverables */}
                  <ul className="mt-6 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-3 text-sm leading-relaxed ${tone.deliverable}`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-1 w-1 shrink-0 rounded-full ${tone.bullet}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mono Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded border px-2 py-0.5 font-mono text-[11px] ${tone.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className={`mt-8 border-t pt-5 ${tone.divider}`}>
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4552D] dark:focus-visible:outline-[#D96B43] ${tone.link}`}
                  >
                    <span>Solicitar proposta para este escopo</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
