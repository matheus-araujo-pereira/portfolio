import { ArrowUp, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "@/data/profile";
import {
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function ContactFooterSection() {
  return (
    <>
      <section
        id="contato"
        className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-[#0D1426]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0F172A] p-7 text-white shadow-lg sm:p-10 lg:p-12 dark:border-slate-800 dark:bg-[#131D33]">
            {/* Subtle radial glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#2563EB]/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#059669]/20 blur-3xl"
            />

            <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              {/* Left CTA Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{PROFILE.status}</span>
                </div>

                <p className="mt-5 font-mono text-xs font-semibold tracking-widest text-blue-400 uppercase">
                  05 // Vamos Conversar
                </p>

                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Pronto para tirar seu projeto do papel ou fortalecer seu time
                  de engenharia?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  Atendo empresas, recrutadores e empreendedores com foco em
                  arquitetura limpa, comunicação transparente e entregas que
                  funcionam em produção. Fale diretamente pelo WhatsApp ou
                  envie um e-mail para alinharmos escopo, prazos ou
                  oportunidades.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={PROFILE.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#059669] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:text-base"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    <span>WhatsApp: {PROFILE.whatsappDisplay}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href={PROFILE.resumePath}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600/80 bg-slate-800/80 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:text-base"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    <span>Baixar Currículo (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Right Direct Channels */}
              <div className="space-y-3 lg:col-span-5">
                <CopyEmailButton variant="card" surface="dark" />

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-700/80 bg-slate-900/75 px-4 py-3.5 text-slate-100 transition-colors hover:border-blue-400/60 hover:bg-slate-900"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium text-slate-400">
                        Abrir cliente de e-mail
                      </span>
                      <span className="block text-sm font-semibold text-white">
                        Enviar mensagem para {PROFILE.email}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                </a>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-700/80 bg-slate-900/75 px-4 py-3.5 text-slate-100 transition-colors hover:border-blue-400/60 hover:bg-slate-900"
                  >
                    <span className="flex items-center gap-2.5">
                      <LinkedInIcon className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-semibold">LinkedIn</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-slate-400"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-700/80 bg-slate-900/75 px-4 py-3.5 text-slate-100 transition-colors hover:border-blue-400/60 hover:bg-slate-900"
                  >
                    <span className="flex items-center gap-2.5">
                      <GitHubIcon className="h-5 w-5 text-slate-200" />
                      <span className="text-sm font-semibold">GitHub</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-slate-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Footer */}
      <footer className="border-t border-slate-200/80 bg-[#F8FAFC] py-10 dark:border-slate-800/80 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                {PROFILE.name}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {PROFILE.location} • {PROFILE.role}
                </span>
              </p>
            </div>

            <nav
              aria-label="Navegação do rodapé"
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-xs font-medium text-slate-600 transition-colors hover:text-[#2563EB] dark:text-slate-400 dark:hover:text-blue-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#inicio"
              aria-label="Voltar ao topo da página"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-[#2563EB]/50 hover:text-[#2563EB] dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Topo</span>
            </a>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center dark:border-slate-800/80 dark:text-slate-400">
            <p>
              © 2026 {PROFILE.name}. Todos os direitos reservados.
            </p>
            <p className="font-mono text-[11px]">
              Next.js • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
