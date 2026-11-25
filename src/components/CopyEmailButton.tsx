"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

interface CopyEmailButtonProps {
  variant?: "pill" | "inline" | "card";
  surface?: "default" | "dark";
  className?: string;
}

export function CopyEmailButton({
  variant = "pill",
  surface = "default",
  className = "",
}: CopyEmailButtonProps) {
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
    const isDarkSurface = surface === "dark";
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
          copied
            ? isDarkSurface
              ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-200"
              : "border-[#059669]/60 bg-[#059669]/10 text-[#059669] dark:border-emerald-400/50 dark:bg-emerald-500/15 dark:text-emerald-300"
            : isDarkSurface
              ? "border-slate-700/80 bg-slate-900/75 text-slate-100 hover:border-blue-400/60 hover:bg-slate-900"
              : "border-slate-200 bg-white text-slate-800 hover:border-[#2563EB]/50 hover:shadow-sm dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-blue-400/50"
        } ${className}`}
      >
        <span className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
              copied
                ? "bg-[#059669] text-white"
                : isDarkSurface
                  ? "bg-blue-500/15 text-blue-400"
                  : "bg-blue-50 text-[#2563EB] dark:bg-blue-500/15 dark:text-blue-400"
            }`}
          >
            {copied ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Mail className="h-4 w-4" aria-hidden="true" />
            )}
          </span>
          <span className="min-w-0">
            <span
              className={`block text-xs font-medium ${
                isDarkSurface
                  ? "text-slate-400"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              E-mail direto
            </span>
            <span className="block truncate font-mono text-sm font-semibold">
              {PROFILE.email}
            </span>
          </span>
        </span>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
            copied
              ? "bg-[#059669] text-white"
              : isDarkSurface
                ? "bg-slate-800 text-slate-200 group-hover:bg-[#2563EB] group-hover:text-white"
                : "bg-slate-100 text-slate-600 group-hover:bg-[#2563EB] group-hover:text-white dark:bg-slate-700/80 dark:text-slate-300"
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              Copiar
            </>
          )}
        </span>
      </button>
    );
  }

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
          copied
            ? "border-[#059669]/50 bg-[#059669]/10 text-[#059669] dark:border-emerald-400/40 dark:bg-emerald-500/15 dark:text-emerald-300"
            : "border-slate-200 bg-slate-50 text-slate-700 hover:border-[#2563EB]/40 hover:text-[#2563EB] dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
        } ${className}`}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Copiado!</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="font-mono">{PROFILE.email}</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      title={`Copiar e-mail: ${PROFILE.email}`}
      className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
        copied
          ? "border-[#059669]/50 bg-[#059669]/10 text-[#059669] dark:border-emerald-400/50 dark:bg-emerald-500/15 dark:text-emerald-300"
          : "border-slate-200 bg-white text-slate-700 hover:border-[#2563EB]/50 hover:text-[#2563EB] dark:border-slate-700/80 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Copiado!</span>
        </>
      ) : (
        <>
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Copiar E-mail</span>
        </>
      )}
    </button>
  );
}
