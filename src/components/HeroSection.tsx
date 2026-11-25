import { ArrowUpRight, Download } from "lucide-react";
import { PROFILE } from "@/data/profile";
import {
  Freelas99Icon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { WorkspaceInspector } from "@/components/WorkspaceInspector";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="border-b border-[#DCD9CE] bg-[#F6F5F0] py-14 sm:py-20 lg:py-24 dark:border-[#2E2E2A] dark:bg-[#141413]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6">
            {/* Top Mono Metadata Line */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-wider text-[#57564F] uppercase dark:text-[#9E9D96]">
              <span>{PROFILE.heroEyebrow}</span>
              <span aria-hidden="true">/</span>
              <span>{PROFILE.locationShort}</span>
              <span aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#141413] dark:text-[#F4F3EE]">
                <span
                  className="h-2 w-2 rounded-full bg-[#4ADE80]"
                  aria-hidden="true"
                />
                <span>DISPONÍVEL</span>
              </span>
            </div>

            {/* Editorial Display Serif H1 */}
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] font-normal tracking-[-0.03em] text-[#141413] sm:text-6xl dark:text-[#F4F3EE]">
              Sistemas críticos e produtos digitais com rigor de engenharia e{" "}
              <em className="italic text-[#C4552D] dark:text-[#D96B43]">
                design autoral
              </em>
              .
            </h1>

            {/* Direct Positioning Paragraph */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#57564F] sm:text-lg dark:text-[#9E9D96]">
              {PROFILE.heroParagraph}
            </p>

            {/* Author Signature Line */}
            <p className="mt-4 font-mono text-xs text-[#57564F] dark:text-[#9E9D96]">
              <span className="text-[#141413] dark:text-[#F4F3EE]">
                {PROFILE.name}
              </span>{" "}
              — {PROFILE.role}
            </p>

            {/* Primary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#141413] px-5 py-3 text-sm font-medium text-[#F4F3EE] transition-colors hover:bg-[#232320] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:bg-[#F4F3EE] dark:text-[#141413] dark:hover:bg-[#E4E2D9] dark:focus-visible:outline-[#D96B43]"
              >
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-md border border-[#DCD9CE] bg-transparent px-5 py-3 font-mono text-xs font-medium text-[#141413] transition-colors hover:border-[#141413] hover:bg-[#FFFFFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:border-[#2E2E2A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE] dark:hover:bg-[#1C1C1A] dark:focus-visible:outline-[#D96B43]"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Baixar currículo (.pdf)</span>
              </a>
            </div>

            {/* 5 Platform Shortcut Squares */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Matheus Araujo Pereira"
                title="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#DCD9CE] bg-[#FFFFFF] text-[#57564F] transition-colors hover:border-[#141413] hover:text-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#9E9D96] dark:hover:border-[#F4F3EE] dark:hover:text-[#F4F3EE]"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Matheus Araujo Pereira"
                title="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#DCD9CE] bg-[#FFFFFF] text-[#57564F] transition-colors hover:border-[#141413] hover:text-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#9E9D96] dark:hover:border-[#F4F3EE] dark:hover:text-[#F4F3EE]"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>

              <a
                href={PROFILE.freelasUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no 99Freelas"
                title="99Freelas"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#DCD9CE] bg-[#FFFFFF] text-[#57564F] transition-colors hover:border-[#141413] hover:text-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#9E9D96] dark:hover:border-[#F4F3EE] dark:hover:text-[#F4F3EE]"
              >
                <Freelas99Icon className="h-5 w-5" />
              </a>

              <a
                href={PROFILE.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (79) 99998-4882"
                title={`WhatsApp ${PROFILE.whatsappDisplay}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#DCD9CE] bg-[#FFFFFF] text-[#57564F] transition-colors hover:border-[#141413] hover:text-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#9E9D96] dark:hover:border-[#F4F3EE] dark:hover:text-[#F4F3EE]"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>

              <CopyEmailButton variant="square" />
            </div>
          </div>

          {/* Right Interactive Engineering Workspace */}
          <div className="lg:col-span-6">
            <WorkspaceInspector />
          </div>
        </div>
      </div>
    </section>
  );
}
