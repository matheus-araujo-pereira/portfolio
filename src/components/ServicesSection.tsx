import {
  ArrowUpRight,
  Globe,
  Palette,
  Server,
  ShoppingBag,
} from "lucide-react";
import {
  SERVICES,
  buildWhatsAppUrl,
  type ServiceIconName,
} from "@/data/profile";
import { WhatsAppIcon } from "@/components/BrandIcons";

function ServiceIcon({ name }: { name: ServiceIconName }) {
  switch (name) {
    case "server":
      return <Server className="h-5 w-5" aria-hidden="true" />;
    case "globe":
      return <Globe className="h-5 w-5" aria-hidden="true" />;
    case "shopping-bag":
      return <ShoppingBag className="h-5 w-5" aria-hidden="true" />;
    case "palette":
      return <Palette className="h-5 w-5" aria-hidden="true" />;
  }
}

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24 dark:border-slate-800/80 dark:bg-[#0D1426]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-widest text-[#2563EB] uppercase dark:text-blue-400">
            01 // Carta de Serviços
          </p>
          <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]">
            Soluções Sob Medida
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Do planejamento de arquitetura e design de interfaces até o deploy
            em produção — entregas orientadas a estabilidade, performance e
            resultado de negócio.
          </p>
        </div>

        {/* 4 Structured Service Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/50 hover:bg-white hover:shadow-md sm:p-7 dark:border-slate-800 dark:bg-[#162033] dark:hover:border-blue-500/50 dark:hover:bg-[#1A263D]"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-200/70 transition-colors group-hover:bg-[#2563EB] group-hover:text-white dark:bg-blue-500/15 dark:text-blue-400 dark:ring-blue-500/30 dark:group-hover:bg-[#2563EB] dark:group-hover:text-white">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-[#0F172A] sm:text-xl dark:text-[#F8FAFC]">
                  {service.title}
                </h3>
                <p className="mt-1 font-mono text-xs font-medium text-[#059669] dark:text-emerald-400">
                  {service.subtitle}
                </p>

                <p className="mt-3.5 text-sm leading-relaxed text-slate-600 sm:text-[15px] dark:text-slate-300">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200/80 pt-5 dark:border-slate-700/70">
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#2563EB]/25 bg-blue-50/70 px-4 py-3 text-sm font-semibold text-[#2563EB] transition-all hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:w-auto dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-[#2563EB] dark:hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Solicitar Proposta</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
