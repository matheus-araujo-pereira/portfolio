import { ArrowUp, ArrowUpRight, Download, Mail } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "@/data/profile";
import {
  Freelas99Icon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function ContactFooterSection() {
  return (
    <footer
      id="contato"
      className="bg-[#ECEAE2]/50 pt-18 pb-12 sm:pt-24 dark:bg-[#171715]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Editorial Closing Statement */}
        <div className="grid grid-cols-1 items-end gap-10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#57564F] uppercase dark:text-[#9E9D96]">
              <span
                className="h-2 w-2 rounded-full bg-[#4ADE80]"
                aria-hidden="true"
              />
              <span>05 / Contato Direto • {PROFILE.locationShort}</span>
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-[1.06] font-normal tracking-[-0.03em] text-[#141413] sm:text-5xl lg:text-6xl dark:text-[#F4F3EE]">
              Vamos tirar seu próximo sistema ou site do papel?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#57564F] sm:text-base dark:text-[#9E9D96]">
              {PROFILE.status}. Envie uma mensagem direta com o contexto do seu
              projeto ou vaga para alinharmos escopo, prazos e arquitetura.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#141413] px-5 py-3 text-sm font-medium text-[#F4F3EE] transition-colors hover:bg-[#232320] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:bg-[#F4F3EE] dark:text-[#141413] dark:hover:bg-[#E4E2D9] dark:focus-visible:outline-[#D96B43]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp {PROFILE.whatsappDisplay}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-md border border-[#DCD9CE] bg-[#FFFFFF] px-5 py-3 font-mono text-xs font-medium text-[#141413] transition-colors hover:border-[#141413] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE] dark:focus-visible:outline-[#D96B43]"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Baixar currículo (.pdf)</span>
              </a>
            </div>
          </div>

          {/* Right Direct Channels */}
          <div className="space-y-3 lg:col-span-5">
            <CopyEmailButton variant="row" className="w-full" />

            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center justify-between gap-3 rounded-md border border-[#DCD9CE] bg-[#FFFFFF] px-4 py-3 text-sm font-medium text-[#141413] transition-colors hover:border-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE]"
            >
              <span className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 text-[#57564F] dark:text-[#9E9D96]"
                  aria-hidden="true"
                />
                <span>Abrir cliente de e-mail</span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 text-[#57564F] dark:text-[#9E9D96]"
                aria-hidden="true"
              />
            </a>

            <div className="grid grid-cols-3 gap-2.5">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-[#DCD9CE] bg-[#FFFFFF] px-3 py-3 font-mono text-xs text-[#141413] transition-colors hover:border-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE]"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-[#DCD9CE] bg-[#FFFFFF] px-3 py-3 font-mono text-xs text-[#141413] transition-colors hover:border-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE]"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE.freelasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-md border border-[#DCD9CE] bg-[#FFFFFF] px-3 py-3 font-mono text-xs text-[#141413] transition-colors hover:border-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE]"
              >
                <Freelas99Icon className="h-4 w-4" />
                <span>99Freelas</span>
              </a>
            </div>
          </div>
        </div>

        {/* Colophon Bar */}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-[#DCD9CE] pt-8 md:flex-row md:items-center dark:border-[#2E2E2A]">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-xl font-medium text-[#141413] dark:text-[#F4F3EE]">
              {PROFILE.monogram}
              <span className="text-[#C4552D] dark:text-[#D96B43]">.</span>
            </span>
            <span className="font-mono text-xs text-[#57564F] dark:text-[#9E9D96]">
              {PROFILE.name} — {PROFILE.location}
            </span>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-xs font-medium text-[#57564F] transition-colors hover:text-[#141413] dark:text-[#9E9D96] dark:hover:text-[#F4F3EE]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#inicio"
            aria-label="Voltar ao topo"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#57564F] transition-colors hover:text-[#141413] dark:text-[#9E9D96] dark:hover:text-[#F4F3EE]"
          >
            <span>Topo</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 font-mono text-[11px] text-[#57564F] sm:flex-row dark:text-[#9E9D96]">
          <p>© 2026 {PROFILE.name}. Todos os direitos reservados.</p>
          <p>Next.js • TypeScript • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
