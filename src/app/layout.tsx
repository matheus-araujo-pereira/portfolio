import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://matheus-araujo-pereira.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Matheus Araujo Pereira | Engenheiro de Software Full Stack & UI/UX Designer",
    template: "%s | Matheus Araujo Pereira",
  },
  description:
    "Engenheiro de Software Full Stack & UI/UX Designer em Aracaju, SE. Desenvolvimento de sistemas corporativos de alta criticidade (Java/Spring Boot, Angular, Next.js), APIs REST, PIX tributário e interfaces digitais de alta conversão.",
  keywords: [
    "Matheus Araujo Pereira",
    "Engenheiro de Software",
    "Desenvolvedor Full Stack",
    "Java",
    "Spring Boot",
    "Angular",
    "Next.js",
    "TypeScript",
    "UI/UX Designer",
    "Aracaju",
    "Sergipe",
    "UFS",
    "SEMFAZ Aracaju",
    "Sistemas Corporativos",
    "APIs REST",
    "Landing Pages",
    "Freelancer",
  ],
  authors: [
    {
      name: "Matheus Araujo Pereira",
      url: "https://www.linkedin.com/in/matheus-araujo-pereira",
    },
  ],
  creator: "Matheus Araujo Pereira",
  publisher: "Matheus Araujo Pereira",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Matheus Araujo Pereira — Engenharia de Software & UI/UX",
    title:
      "Matheus Araujo Pereira | Engenheiro de Software Full Stack & UI/UX Designer",
    description:
      "Sistemas corporativos de alta criticidade, aplicações web sob medida, APIs REST e interfaces digitais de alta conversão. Atuação em sistemas arrecadatórios via PIX, Java/Spring Boot, Angular e Next.js.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Matheus Araujo Pereira | Engenheiro de Software Full Stack & UI/UX Designer",
    description:
      "Desenvolvimento de sistemas corporativos, aplicações web sob medida, APIs REST e UI/UX Design. Disponível para projetos freelance e oportunidades em Engenharia de Software.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored === 'dark' || (!stored && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0F172A] dark:text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
