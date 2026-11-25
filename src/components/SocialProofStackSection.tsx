"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_CONTENT } from "@/data/profile";

export function SocialProofStackSection() {
  const { locale } = useLanguage();
  const { reviewAndStack } = PORTFOLIO_CONTENT[locale];

  return (
    <section
      id="stack"
      className="border-b border-[#E4E4E7] bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 dark:border-[#27272A] dark:bg-[#111114]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Client Review Highlight Card */}
        <div className="rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 dark:border-[#27272A] dark:bg-[#09090B]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-xs font-medium tracking-wider text-[#1D4ED8] uppercase dark:text-[#3B82F6]">
              {reviewAndStack.reviewEyebrow}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1 font-mono text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]">
              <Star
                className="h-3.5 w-3.5 fill-current"
                aria-hidden="true"
              />
              <span>{reviewAndStack.reviewBadge}</span>
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#09090B] sm:text-3xl dark:text-[#FAFAFA]">
            {reviewAndStack.reviewTitle}
          </h2>

          <blockquote className="mt-5">
            <p className="text-base leading-relaxed text-[#09090B] sm:text-lg sm:leading-relaxed dark:text-[#FAFAFA]">
              “{reviewAndStack.quote}”
            </p>
          </blockquote>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-[#E4E4E7] pt-5 sm:flex-row sm:items-center dark:border-[#27272A]">
            <div>
              <p className="text-sm font-bold text-[#09090B] dark:text-[#FAFAFA]">
                {reviewAndStack.author}{" "}
                <span className="font-normal text-[#52525B] dark:text-[#A1A1AA]">
                  — {reviewAndStack.authorRole}
                </span>
              </p>
              <p className="mt-0.5 font-mono text-xs text-[#52525B] dark:text-[#A1A1AA]">
                {reviewAndStack.reviewOriginNote}
              </p>
            </div>

            <a
              href={reviewAndStack.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#E4E4E7] bg-[#F8FAFC] px-4 py-2 text-sm font-semibold text-[#09090B] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6] dark:hover:text-[#3B82F6]"
            >
              <span>{reviewAndStack.prototypeCta}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Technical Competencies (4 Clear Blocks) */}
        <div className="mt-14 lg:mt-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-wider text-[#1D4ED8] uppercase dark:text-[#3B82F6]">
              {reviewAndStack.stackEyebrow}
            </p>
            <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-[#09090B] sm:text-4xl dark:text-[#FAFAFA]">
              {reviewAndStack.stackTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
              {reviewAndStack.stackSubtitle}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {reviewAndStack.categories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] p-6 dark:border-[#27272A] dark:bg-[#09090B]"
              >
                <h3 className="text-lg font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  {category.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#E4E4E7] bg-[#F8FAFC] px-2.5 py-1 font-mono text-xs text-[#09090B] dark:border-[#27272A] dark:bg-[#18181B] dark:text-[#FAFAFA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
