import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SocialProofStackSection } from "@/components/SocialProofStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactFooterSection } from "@/components/ContactFooterSection";
import { PORTFOLIO_CONTENT, PROFILE } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  image: PROFILE.photoPath,
  jobTitle: "Engenheiro de Software Full Stack & UI/UX",
  description: PORTFOLIO_CONTENT.pt.hero.summary,
  email: `mailto:${PROFILE.email}`,
  telephone: "+55-79-99998-4882",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aracaju",
    addressRegion: "SE",
    addressCountry: "BR",
  },
  sameAs: [PROFILE.linkedinUrl, PROFILE.githubUrl, PROFILE.freelasUrl],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Federal de Sergipe",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Angular",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Oracle Database",
    "MySQL",
    "Docker",
    "Jenkins",
    "Figma",
    "UI/UX Design",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <SocialProofStackSection />
        <ExperienceSection />
      </main>
      <ContactFooterSection />
    </>
  );
}
