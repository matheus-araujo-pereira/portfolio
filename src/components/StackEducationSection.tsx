import {
  Award,
  Code2,
  Database,
  GraduationCap,
  Languages,
  Layers,
  ShieldCheck,
} from "lucide-react";
import {
  EDUCATION,
  LANGUAGES,
  STACK_CATEGORIES,
  type StackIconName,
} from "@/data/profile";

function StackCategoryIcon({ name }: { name: StackIconName }) {
  switch (name) {
    case "code":
      return <Code2 className="h-5 w-5" aria-hidden="true" />;
    case "layers":
      return <Layers className="h-5 w-5" aria-hidden="true" />;
    case "database":
      return <Database className="h-5 w-5" aria-hidden="true" />;
    case "shield":
      return <ShieldCheck className="h-5 w-5" aria-hidden="true" />;
  }
}

export function StackEducationSection() {
  return (
    <section
      id="stack"
      className="border-b border-slate-200/80 bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 dark:border-slate-800/80 dark:bg-[#0F172A]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-widest text-[#2563EB] uppercase dark:text-blue-400">
            04 // Competências &amp; Formação
          </p>
          <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]">
            Competências Técnicas &amp; Formação Acadêmica
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Base sólida em ciência da computação, engenharia de software e stack
            moderna para backend corporativo, interfaces web e entrega contínua.
          </p>
        </div>

        {/* Technical Stack Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12">
          {STACK_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-colors hover:border-[#2563EB]/40 sm:p-7 dark:border-slate-800 dark:bg-[#162033] dark:hover:border-blue-500/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-200/70 dark:bg-blue-500/15 dark:text-blue-400 dark:ring-blue-500/30">
                  <StackCategoryIcon name={category.icon} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                  {category.title}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-[#2563EB]/40 hover:text-[#2563EB] dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-400/50 dark:hover:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Education & Languages */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Formação Acadêmica */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-7 lg:col-span-7 dark:border-slate-800 dark:bg-[#162033]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#059669] ring-1 ring-emerald-200/70 dark:bg-emerald-500/15 dark:text-emerald-400 dark:ring-emerald-500/30">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                  Formação Acadêmica
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Universidade Federal de Sergipe (UFS)
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-4 sm:p-5 dark:border-slate-700/80 dark:bg-slate-800/60"
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="inline-flex w-fit shrink-0 items-center rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                      {edu.period}
                    </span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#059669] dark:text-emerald-400">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-7 lg:col-span-5 dark:border-slate-800 dark:bg-[#162033]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] ring-1 ring-blue-200/70 dark:bg-blue-500/15 dark:text-blue-400 dark:ring-blue-500/30">
                <Languages className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                  Idiomas
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Comunicação técnica e corporativa
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.language}
                  className="rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-4 sm:p-5 dark:border-slate-700/80 dark:bg-slate-800/60"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                      {lang.language}
                    </h4>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#059669] ring-1 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30">
                      {lang.level}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {lang.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
