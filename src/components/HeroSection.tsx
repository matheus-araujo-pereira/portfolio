import {
  ArrowUpRight,
  Building2,
  Download,
  GraduationCap,
  MapPin,
  Terminal,
} from "lucide-react";
import { HERO_METRICS, PROFILE } from "@/data/profile";
import {
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] bg-engineering-grid pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24 dark:border-slate-800/80 dark:bg-[#0F172A]"
    >
      {/* Subtle architectural radial washes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 h-110 w-110 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-85 w-85 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/10"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status & Location strip */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#059669]/30 bg-emerald-50/90 px-3.5 py-1.5 text-xs font-semibold text-[#059669] shadow-xs sm:text-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#059669] opacity-75 dark:bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#059669] dark:bg-emerald-400" />
            </span>
            <span>{PROFILE.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-slate-300">
            <MapPin
              className="h-3.5 w-3.5 text-[#2563EB] dark:text-blue-400"
              aria-hidden="true"
            />
            <span>{PROFILE.location}</span>
          </div>
        </div>

        {/* Main 2-column executive layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200/80 bg-blue-50/90 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-[#2563EB] dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
              <span>{PROFILE.badge}</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.15rem] lg:leading-[1.09] dark:text-[#F8FAFC]">
              Rigor de{" "}
              <span className="text-[#2563EB] dark:text-blue-400">
                sistemas críticos
              </span>{" "}
              aliado à agilidade na entrega de produtos digitais.
            </h1>

            <p className="mt-5 text-lg font-semibold text-slate-800 sm:text-xl dark:text-slate-100">
              {PROFILE.name}{" "}
              <span className="font-normal text-slate-400 dark:text-slate-500">
                —
              </span>{" "}
              <span className="text-[#2563EB] dark:text-blue-400">
                {PROFILE.role}
              </span>
            </p>

            <p className="mt-3 text-base leading-relaxed font-medium text-slate-700 sm:text-lg dark:text-slate-200">
              {PROFILE.positioning}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {PROFILE.summary}
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={PROFILE.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-base"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                <span>Solicitar Orçamento (WhatsApp)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.resumePath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-[#0F172A] shadow-xs transition-all hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-base dark:border-slate-700 dark:bg-slate-800/80 dark:text-[#F8FAFC] dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Baixar Currículo PDF</span>
              </a>
            </div>

            {/* Social & Direct Email Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Matheus Araujo Pereira"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-[#2563EB]/50 hover:text-[#2563EB] dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Matheus Araujo Pereira"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-[#2563EB]/50 hover:text-[#2563EB] dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <CopyEmailButton variant="pill" />
            </div>
          </div>

          {/* Right Column: Executive Engineering Dossier Card */}
          <aside
            aria-label="Resumo executivo do perfil"
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-slate-800 dark:bg-[#162033]">
              {/* Top Executive Banner */}
              <div className="border-b border-slate-200/80 bg-[#0F172A] px-6 py-5 text-white dark:border-slate-800 dark:bg-slate-900/90">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#2563EB] to-blue-700 font-mono text-base font-bold text-white shadow-inner ring-1 ring-white/15">
                      {PROFILE.initials}
                    </div>
                    <div>
                      <p className="text-base font-bold tracking-tight text-white">
                        {PROFILE.name}
                      </p>
                      <p className="text-xs font-medium text-blue-300">
                        Full Stack Engineer &amp; UI/UX
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online
                  </span>
                </div>
              </div>

              {/* Structured Credentials */}
              <div className="divide-y divide-slate-100 px-6 py-2 dark:divide-slate-800">
                <div className="flex items-start gap-3.5 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] dark:bg-blue-500/15 dark:text-blue-400">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      Atuação em Produção
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#0F172A] dark:text-slate-100">
                      SEMFAZ Aracaju — Sistemas Arrecadatórios
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                      IPTU, ITBI, liquidação instantânea via PIX e barramentos
                      governamentais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#059669] dark:bg-emerald-500/15 dark:text-emerald-400">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      Formação Acadêmica (UFS)
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#0F172A] dark:text-slate-100">
                      Mestrado em Ciência da Computação (M.Sc.)
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                      Bacharelando em Engenharia de Computação • 2022 – 2027
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    <Terminal className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      Stack Principal
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {[
                        "Java 21",
                        "Spring Boot",
                        "Angular",
                        "Next.js",
                        "PostgreSQL",
                        "Oracle DB",
                        "Figma",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 bg-slate-50/80 px-6 py-3.5 dark:border-slate-800 dark:bg-slate-900/50">
                <CopyEmailButton variant="inline" />
                <a
                  href={PROFILE.whatsappDefaultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-[#059669] transition-colors hover:underline dark:text-emerald-400"
                >
                  {PROFILE.whatsappDisplay}
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Quick Metrics Strip */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.value}
              className="group rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-xs transition-all hover:border-[#2563EB]/40 hover:shadow-sm dark:border-slate-800 dark:bg-[#162033]/95 dark:hover:border-blue-500/40"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-2xl font-bold tracking-tight text-[#059669] sm:text-3xl dark:text-emerald-400">
                  {metric.value}
                </span>
                <span
                  className="h-2 w-2 rounded-full bg-[#2563EB]/40 transition-colors group-hover:bg-[#2563EB] dark:bg-blue-400/40 dark:group-hover:bg-blue-400"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                {metric.label}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
