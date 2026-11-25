"use client";

import { useState } from "react";
import { ArrowUpRight, FileCode2, Layers, PenTool } from "lucide-react";
import { WORKSPACE_TABS } from "@/data/profile";

function TabIcon({ id }: { id: string }) {
  if (id === "semfaz-pix") {
    return <FileCode2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
  }
  if (id === "sigea-ufs") {
    return <Layers className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
  }
  return <PenTool className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
}

export function WorkspaceInspector() {
  const [activeId, setActiveId] = useState<string>(WORKSPACE_TABS[0].id);

  const activeTab =
    WORKSPACE_TABS.find((tab) => tab.id === activeId) ?? WORKSPACE_TABS[0];

  return (
    <div
      aria-label="Inspetor técnico de arquitetura"
      className="overflow-hidden rounded-xl border border-[#DCD9CE] bg-[#FFFFFF] dark:border-[#2E2E2A] dark:bg-[#1C1C1A]"
    >
      {/* Minimalist IDE Window Header */}
      <div className="flex items-center justify-between gap-3 border-b border-[#DCD9CE] bg-[#ECEAE2]/75 px-4 py-2.5 dark:border-[#2E2E2A] dark:bg-[#232320]">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full border border-[#C6C2B5] bg-[#DCD9CE] dark:border-[#42423D] dark:bg-[#2E2E2A]" />
            <span className="h-2.5 w-2.5 rounded-full border border-[#C6C2B5] bg-[#DCD9CE] dark:border-[#42423D] dark:bg-[#2E2E2A]" />
            <span className="h-2.5 w-2.5 rounded-full border border-[#C6C2B5] bg-[#DCD9CE] dark:border-[#42423D] dark:bg-[#2E2E2A]" />
          </div>
          <span className="truncate font-mono text-[11px] text-[#57564F] dark:text-[#9E9D96]">
            {activeTab.path}
          </span>
        </div>

        <span className="hidden shrink-0 font-mono text-[11px] text-[#57564F] sm:inline dark:text-[#9E9D96]">
          {activeTab.language}
        </span>
      </div>

      {/* Split Workbench: File Explorer + Technical Viewer */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left File Sidebar */}
        <div className="border-b border-[#DCD9CE] bg-[#F6F5F0]/80 md:col-span-4 md:border-r md:border-b-0 dark:border-[#2E2E2A] dark:bg-[#171715]">
          <div className="border-b border-[#DCD9CE]/70 px-3.5 py-2 font-mono text-[10px] font-medium tracking-widest text-[#57564F] uppercase dark:border-[#2E2E2A]/80 dark:text-[#9E9D96]">
            Explorer
          </div>

          <div
            role="tablist"
            aria-label="Arquivos do workspace"
            className="flex flex-row overflow-x-auto md:flex-col md:overflow-x-visible"
          >
            {WORKSPACE_TABS.map((tab) => {
              const isSelected = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`flex shrink-0 items-center gap-2 border-b-2 px-3.5 py-3 text-left font-mono text-xs transition-colors md:w-full md:border-b-0 md:border-l-2 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#C4552D] dark:focus-visible:outline-[#D96B43] ${
                    isSelected
                      ? "border-[#C4552D] bg-[#FFFFFF] font-medium text-[#141413] dark:border-[#D96B43] dark:bg-[#232320] dark:text-[#F4F3EE]"
                      : "border-transparent text-[#57564F] hover:bg-[#ECEAE2]/70 hover:text-[#141413] dark:text-[#9E9D96] dark:hover:bg-[#1C1C1A] dark:hover:text-[#F4F3EE]"
                  }`}
                >
                  <TabIcon id={tab.id} />
                  <span className="truncate">{tab.fileName}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden border-t border-[#DCD9CE]/70 px-3.5 py-4 md:block dark:border-[#2E2E2A]/80">
            <p className="font-mono text-[10px] tracking-widest text-[#57564F] uppercase dark:text-[#9E9D96]">
              Diretório
            </p>
            <p className="mt-1 font-mono text-xs text-[#141413] dark:text-[#F4F3EE]">
              /{activeTab.folder}
            </p>
          </div>
        </div>

        {/* Right Technical Inspection Panel */}
        <div
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="flex flex-col justify-between p-5 md:col-span-8"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-medium tracking-wider text-[#C4552D] uppercase dark:text-[#D96B43]">
                {activeTab.statusLabel}
              </span>
              <span className="font-mono text-[11px] text-[#57564F] dark:text-[#9E9D96]">
                UTF-8 • LF
              </span>
            </div>

            <h2 className="mt-2.5 font-serif text-xl font-medium tracking-tight text-[#141413] sm:text-2xl dark:text-[#F4F3EE]">
              {activeTab.title}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-[#57564F] dark:text-[#9E9D96]">
              {activeTab.summary}
            </p>

            {/* Architectural Spec Block */}
            <div className="mt-4 rounded-lg border border-[#DCD9CE] bg-[#F6F5F0] p-3.5 font-mono text-xs dark:border-[#2E2E2A] dark:bg-[#141413]">
              <div className="space-y-2">
                {activeTab.architectureLines.map((line, index) => (
                  <div
                    key={line.label}
                    className="grid grid-cols-[1.5rem_auto] items-baseline gap-2"
                  >
                    <span className="select-none text-[#9E9D96] dark:text-[#57564F]">
                      0{index + 1}
                    </span>
                    <div className="min-w-0 leading-relaxed">
                      <span className="text-[#C4552D] dark:text-[#D96B43]">
                        {line.label}
                      </span>
                      <span className="text-[#57564F] dark:text-[#9E9D96]">
                        :{" "}
                      </span>
                      <span className="text-[#141413] dark:text-[#F4F3EE]">
                        {line.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scale & Quality Metrics */}
            <div className="mt-4 grid grid-cols-3 divide-x divide-[#DCD9CE] rounded-lg border border-[#DCD9CE] dark:divide-[#2E2E2A] dark:border-[#2E2E2A]">
              {activeTab.metrics.map((metric) => (
                <div key={metric.label} className="px-3 py-2.5">
                  <p className="font-mono text-[10px] tracking-wider text-[#57564F] uppercase dark:text-[#9E9D96]">
                    {metric.label}
                  </p>
                  <p className="mt-1 font-mono text-xs font-medium text-[#141413] sm:text-sm dark:text-[#F4F3EE]">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Tags & Direct Link */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#DCD9CE] pt-4 dark:border-[#2E2E2A]">
            <div className="flex flex-wrap gap-1.5">
              {activeTab.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[#DCD9CE] bg-[#F6F5F0] px-2 py-0.5 font-mono text-[11px] text-[#57564F] dark:border-[#2E2E2A] dark:bg-[#232320] dark:text-[#9E9D96]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={activeTab.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[#141413] transition-colors hover:text-[#C4552D] dark:text-[#F4F3EE] dark:hover:text-[#D96B43]"
            >
              <span>{activeTab.linkLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
