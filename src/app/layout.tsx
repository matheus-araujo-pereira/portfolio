import type { Metadata, Viewport } from "next";
import {
  JetBrains_Mono,
  Newsreader,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

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
      "Matheus Araujo Pereira — Engenheiro de Software Full Stack & UI/UX Designer",
    template: "%s | Matheus Araujo Pereira",
  },
  description:
    "Engenharia de software e design autoral em Aracaju, SE. Sistemas críticos em Java/Spring Boot, Angular e Next.js, liquidação tributária via PIX na SEMFAZ e produtos web sob medida.",
  keywords: [
    "Matheus Araujo Pereira",
    "Engenheiro de Software",
    "Desenvolvedor Full Stack",
    "Java 21",
    "Spring Boot",
    "Angular",
    "Next.js",
    "TypeScript",
    "UI/UX Designer",
    "Design System",
    "Aracaju",
    "Sergipe",
    "UFS",
    "SEMFAZ Aracaju",
    "SIGEA",
    "Thomas Clay",
    "99Freelas",
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
    siteName: "Matheus Araujo Pereira — Engenharia de Software & Design",
    title:
      "Matheus Araujo Pereira — Engenheiro de Software Full Stack & UI/UX Designer",
    description:
      "Sistemas críticos e produtos digitais com rigor de engenharia e design autoral. Java/Spring Boot, Angular, Next.js, PostgreSQL, Oracle DB e Figma.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Matheus Araujo Pereira — Engenheiro de Software Full Stack & UI/UX Designer",
    description:
      "Sistemas críticos e produtos digitais com rigor de engenharia e design autoral. Disponível para projetos freelance e oportunidades em Engenharia de Software.",
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
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
    { media: "(prefers-color-scheme: light)", color: "#F6F5F0" },
  ],
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored !== 'light';
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
      className={`dark ${newsreader.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6F5F0] text-[#141413] dark:bg-[#141413] dark:text-[#F4F3EE]">
        {children}
      </body>
    </html>
  );
}
