"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_CONTENT, PROFILE } from "@/data/profile";

interface CopyEmailButtonProps {
  variant?: "inline" | "card";
  className?: string;
}

export function CopyEmailButton({
  variant = "inline",
  className = "",
}: CopyEmailButtonProps) {
  const { locale } = useLanguage();
  const content = PORTFOLIO_CONTENT[locale];
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PROFILE.email);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = PROFILE.email;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        success = true;
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setCopied(false), 2200);
    }
  };

  if (variant === "card") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className={`group flex min-h-11 w-full items-center justify-between gap-2.5 rounded-xl border px-3.5 py-3 text-left transition-colors sm:gap-3 sm:px-4 sm:py-3.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] dark:focus-visible:outline-[#3B82F6] ${
          copied
            ? "border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]"
            : "border-[#E4E4E7] bg-[#FFFFFF] text-[#09090B] hover:border-[#1D4ED8] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#FAFAFA] dark:hover:border-[#3B82F6]"
        } ${className}`}
      >
        <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          {copied ? (
            <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <Mail
              className="h-4 w-4 shrink-0 text-[#52525B] dark:text-[#A1A1AA]"
              aria-hidden="true"
            />
          )}
          <span className="min-w-0">
            <span className="block text-xs text-[#52525B] dark:text-[#A1A1AA]">
              {content.footer.copyEmailPrompt}
            </span>
            <span className="block truncate font-mono text-xs font-medium sm:text-sm">
              {PROFILE.email}
            </span>
          </span>
        </span>

        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
            copied
              ? "bg-[#1D4ED8] text-white dark:bg-[#3B82F6]"
              : "bg-[#F1F5F9] text-[#52525B] group-hover:bg-[#1D4ED8] group-hover:text-white dark:bg-[#18181B] dark:text-[#A1A1AA] dark:group-hover:bg-[#3B82F6] dark:group-hover:text-white"
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{content.footer.copiedLabel}</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{content.footer.copyButton}</span>
            </>
          )}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      title={PROFILE.email}
      className={`inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] dark:focus-visible:outline-[#3B82F6] ${
        copied
          ? "border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#172554]/50 dark:text-[#60A5FA]"
          : "border-[#E4E4E7] bg-[#FFFFFF] text-[#52525B] hover:border-[#1D4ED8] hover:text-[#09090B] dark:border-[#27272A] dark:bg-[#111114] dark:text-[#A1A1AA] dark:hover:border-[#3B82F6] dark:hover:text-[#FAFAFA]"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{content.hero.copiedLabel}</span>
        </>
      ) : (
        <>
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{content.hero.copyEmailLabel}</span>
        </>
      )}
    </button>
  );
}
