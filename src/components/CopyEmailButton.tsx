"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

interface CopyEmailButtonProps {
  variant?: "square" | "row";
  className?: string;
}

export function CopyEmailButton({
  variant = "square",
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

  if (variant === "square") {
    return (
      <div className="relative inline-flex items-center">
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copiar e-mail ${PROFILE.email}`}
          title={copied ? "Copiado!" : `Copiar e-mail (${PROFILE.email})`}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:focus-visible:outline-[#D96B43] ${
            copied
              ? "border-[#C4552D] bg-[#C4552D]/10 text-[#C4552D] dark:border-[#D96B43] dark:bg-[#D96B43]/15 dark:text-[#D96B43]"
              : "border-[#DCD9CE] bg-[#FFFFFF] text-[#57564F] hover:border-[#141413] hover:text-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#9E9D96] dark:hover:border-[#F4F3EE] dark:hover:text-[#F4F3EE]"
          } ${className}`}
        >
          {copied ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Mail className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        {copied && (
          <span
            role="status"
            aria-live="polite"
            className="ml-2 font-mono text-xs font-medium text-[#C4552D] dark:text-[#D96B43]"
          >
            Copiado!
          </span>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={`group inline-flex items-center justify-between gap-4 rounded-md border px-4 py-3 text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4552D] dark:focus-visible:outline-[#D96B43] ${
        copied
          ? "border-[#C4552D] bg-[#C4552D]/10 text-[#C4552D] dark:border-[#D96B43] dark:bg-[#D96B43]/15 dark:text-[#D96B43]"
          : "border-[#DCD9CE] bg-[#FFFFFF] text-[#141413] hover:border-[#141413] dark:border-[#2E2E2A] dark:bg-[#1C1C1A] dark:text-[#F4F3EE] dark:hover:border-[#F4F3EE]"
      } ${className}`}
    >
      <span className="flex min-w-0 items-center gap-3">
        {copied ? (
          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
        ) : (
          <Mail
            className="h-4 w-4 shrink-0 text-[#57564F] dark:text-[#9E9D96]"
            aria-hidden="true"
          />
        )}
        <span className="truncate font-mono text-sm">{PROFILE.email}</span>
      </span>

      <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
        {copied ? (
          <span>Copiado!</span>
        ) : (
          <>
            <Copy
              className="h-3.5 w-3.5 text-[#57564F] transition-colors group-hover:text-[#141413] dark:text-[#9E9D96] dark:group-hover:text-[#F4F3EE]"
              aria-hidden="true"
            />
            <span className="text-[#57564F] group-hover:text-[#141413] dark:text-[#9E9D96] dark:group-hover:text-[#F4F3EE]">
              Copiar
            </span>
          </>
        )}
      </span>
    </button>
  );
}
