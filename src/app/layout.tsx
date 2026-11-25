import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      "Matheus Araujo Pereira — Engenheiro de Software Full Stack & UI/UX",
    template: "%s | Matheus Araujo Pereira",
  },
  description:
    "Engenharia de software e produtos digitais sob medida em Aracaju, SE. Java, Spring Boot, Angular, Next.js, bancos relacionais e UI/UX Design.",
  keywords: [
    "Matheus Araujo Pereira",
    "Engenheiro de Software",
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Angular",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Oracle DB",
    "UI/UX Design",
    "Figma",
    "Aracaju",
    "Sergipe",
    "UFS",
    "SEMFAZ Aracaju",
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
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "Matheus Araujo Pereira",
    title:
      "Matheus Araujo Pereira — Engenheiro de Software Full Stack & UI/UX",
    description:
      "Engenharia de software e produtos digitais sob medida. Java, Spring Boot, Angular, Next.js, PIX tributário na SEMFAZ Aracaju e UI/UX Design.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Matheus Araujo Pereira — Engenheiro de Software Full Stack & UI/UX",
    description:
      "Software engineering and bespoke digital products. Java, Spring Boot, Angular, Next.js, PostgreSQL, Oracle DB & UI/UX Design.",
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
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

const initScript = `
(function() {
  try {
    var storedTheme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    var storedLang = localStorage.getItem('portfolio-lang');
    if (storedLang === 'en') {
      document.documentElement.lang = 'en';
    }
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
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip bg-[#FFFFFF] text-[#09090B] dark:bg-[#09090B] dark:text-[#FAFAFA]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
