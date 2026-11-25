import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SocialProofStackSection } from "@/components/SocialProofStackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactFooterSection } from "@/components/ContactFooterSection";
import { PROFILE } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  description: PROFILE.heroParagraph,
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
    "Java 21",
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
    "Design Systems",
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
        <ProcessSection />
        <ExperienceSection />
      </main>
      <ContactFooterSection />
    </>
  );
}
