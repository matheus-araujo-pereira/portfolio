"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { PROCESS_STEPS } from "@/data/profile";

export function ProcessSection() {
  const [openStep, setOpenStep] = useState<string | null>(
    PROCESS_STEPS[0].number
  );

  const toggleStep = (stepNumber: string) => {
    setOpenStep((current) => (current === stepNumber ? null : stepNumber));
  };

  return (
    <section
      id="processo"
      className="border-b border-[#DCD9CE] bg-[#ECEAE2]/50 py-18 sm:py-24 dark:border-[#2E2E2A] dark:bg-[#171715]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tracking-widest text-[#C4552D] uppercase dark:text-[#D96B43]">
              03 / Método de Trabalho
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] font-normal tracking-tight text-[#141413] sm:text-5xl dark:text-[#F4F3EE]">
              Do escopo ao deploy sem ruído
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#57564F] dark:text-[#9E9D96]">
              Processo enxuto e previsível, com decisões arquiteturais claras e
              visibilidade real em cada etapa da entrega.
            </p>
          </div>

          {/* Interactive Numbered Accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[#DCD9CE] border-y border-[#DCD9CE] dark:divide-[#2E2E2A] dark:border-[#2E2E2A]">
              {PROCESS_STEPS.map((step) => {
                const isOpen = openStep === step.number;
                return (
                  <div key={step.number}>
                    <button
                      type="button"
                      onClick={() => toggleStep(step.number)}
                      aria-expanded={isOpen}
                      aria-controls={`process-panel-${step.number}`}
                      className="group flex w-full items-center justify-between gap-4 py-6 text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:focus-visible:outline-[#D96B43]"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={`font-mono text-xs font-medium tracking-widest transition-colors ${
                            isOpen
                              ? "text-[#C4552D] dark:text-[#D96B43]"
                              : "text-[#57564F] dark:text-[#9E9D96]"
                          }`}
                        >
                          {step.number}
                        </span>
                        <div>
                          <h3 className="font-serif text-xl font-normal tracking-[-0.015em] text-[#141413] transition-colors group-hover:text-[#C4552D] sm:text-2xl dark:text-[#F4F3EE] dark:group-hover:text-[#D96B43]">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm text-[#57564F] dark:text-[#9E9D96]">
                            {step.summary}
                          </p>
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-[#141413] bg-[#141413] text-[#F4F3EE] dark:border-[#F4F3EE] dark:bg-[#F4F3EE] dark:text-[#141413]"
                            : "border-[#DCD9CE] bg-transparent text-[#57564F] group-hover:border-[#141413] group-hover:text-[#141413] dark:border-[#2E2E2A] dark:text-[#9E9D96] dark:group-hover:border-[#F4F3EE] dark:group-hover:text-[#F4F3EE]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`process-panel-${step.number}`}
                        className="pb-7 pl-8 sm:pl-12"
                      >
                        <p className="max-w-2xl text-sm leading-relaxed text-[#57564F] sm:text-[15px] dark:text-[#9E9D96]">
                          {step.details}
                        </p>

                        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                          {step.outputs.map((output) => (
                            <li
                              key={output}
                              className="rounded-md border border-[#DCD9CE] bg-[#FFFFFF] px-3.5 py-2.5 font-mono text-xs leading-relaxed text-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE]"
                            >
                              {output}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
