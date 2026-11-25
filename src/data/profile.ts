import type { Locale } from "@/context/LanguageContext";

export const PROFILE = {
  name: "Matheus Araujo Pereira",
  shortName: "Matheus Araujo",
  email: "matharaupere@gmail.com",
  whatsappDisplay: "(79) 99998-4882",
  whatsappNumber: "5579999984882",
  githubUrl: "https://github.com/matheus-araujo-pereira",
  linkedinUrl: "https://www.linkedin.com/in/matheus-araujo-pereira",
  freelasUrl: "https://www.99freelas.com.br",
  resumePath: "/curriculo-matheus-araujo-pereira.pdf",
  photoPath: "/matheus-araujo.png",
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
  whatsappMessage: string;
}

export interface ProjectItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
}

export interface StackCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  current?: boolean;
  role: string;
  organization: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  status: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  detail: string;
}

export interface PortfolioContent {
  nav: NavItem[];
  header: {
    cta: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
  };
  whatsappDefaultMessage: string;
  hero: {
    availability: string;
    headline: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    copyEmailLabel: string;
    copiedLabel: string;
    photoRole: string;
    photoLocation: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    items: ServiceItem[];
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  reviewAndStack: {
    reviewEyebrow: string;
    reviewTitle: string;
    reviewBadge: string;
    quote: string;
    author: string;
    authorRole: string;
    reviewOriginNote: string;
    prototypeCta: string;
    prototypeUrl: string;
    stackEyebrow: string;
    stackTitle: string;
    stackSubtitle: string;
    categories: StackCategory[];
  };
  experienceSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    currentBadge: string;
    items: ExperienceItem[];
    educationTitle: string;
    education: EducationItem[];
    languagesTitle: string;
    languages: LanguageItem[];
  };
  footer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    whatsappCta: string;
    resumeCta: string;
    copyEmailPrompt: string;
    copiedLabel: string;
    copyButton: string;
    openMailClient: string;
    backToTop: string;
    rights: string;
  };
}

export const PORTFOLIO_CONTENT: Record<Locale, PortfolioContent> = {
  pt: {
    nav: [
      { label: "Serviços", href: "#servicos", id: "servicos" },
      { label: "Projetos", href: "#projetos", id: "projetos" },
      { label: "Trajetória", href: "#trajetoria", id: "trajetoria" },
      { label: "Stack", href: "#stack", id: "stack" },
      { label: "Contato", href: "#contato", id: "contato" },
    ],
    header: {
      cta: "Contato",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      toggleTheme: "Alternar tema claro e escuro",
    },
    whatsappDefaultMessage:
      "Olá, Matheus! Vi seu site e gostaria de conversar sobre um projeto.",
    hero: {
      availability: "Disponível para projetos e oportunidades",
      headline: "Engenharia de software e produtos digitais sob medida.",
      summary:
        "Sou Matheus Araujo Pereira, Engenheiro de Software Full Stack com atuação desde 2020 em Java, Spring Boot, Angular, Next.js e bancos relacionais — com experiência comprovada na implantação da arrecadação tributária via PIX na SEMFAZ Aracaju, mestrando em Ciência da Computação e graduando em Engenharia de Computação pela UFS.",
      primaryCta: "Solicitar orçamento",
      secondaryCta: "Baixar currículo (PDF)",
      copyEmailLabel: "Copiar e-mail",
      copiedLabel: "Copiado!",
      photoRole: "Engenheiro de Software • UI/UX",
      photoLocation: "Aracaju, SE — Brasil",
    },
    servicesSection: {
      eyebrow: "Carta de Serviços",
      title: "Soluções sob medida para o seu projeto",
      subtitle:
        "Do planejamento técnico e design de interface ao deploy em produção, com foco em estabilidade, clareza e resultado.",
      ctaLabel: "Solicitar proposta",
      items: [
        {
          id: "sistemas-web",
          title: "Sistemas Web Full Stack & APIs",
          description:
            "Desenvolvimento de plataformas completas, APIs REST seguras, painéis administrativos, controle de acesso por perfis (RBAC/JWT), relatórios gerenciais e integração com bancos relacionais.",
          deliverables: [
            "Arquitetura backend escalável e regras de negócio complexas",
            "Painéis administrativos modernos e responsivos",
            "Modelagem relacional, otimização SQL e testes automatizados",
          ],
          tags: [
            "Java",
            "Spring Boot",
            "Angular",
            "Next.js",
            "PostgreSQL",
            "Oracle DB",
          ],
          whatsappMessage:
            "Olá, Matheus! Gostaria de solicitar uma proposta para Sistemas Web Full Stack & APIs.",
        },
        {
          id: "sites-landing",
          title: "Sites Institucionais & Landing Pages",
          description:
            "Páginas rápidas, modernas e responsivas para empresas, escritórios, clínicas e especialistas — projetadas com SEO técnico, performance e foco direto em conversão.",
          deliverables: [
            "Layout sob medida pensado para credibilidade e leitura",
            "SEO técnico, metadados sociais (OpenGraph) e carregamento rápido",
            "Captação direta via WhatsApp e canais de atendimento",
          ],
          tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "SEO Técnico",
            "Alta Conversão",
          ],
          whatsappMessage:
            "Olá, Matheus! Gostaria de solicitar uma proposta para Sites Institucionais & Landing Pages.",
        },
        {
          id: "lojas-plataformas",
          title: "Lojas Virtuais & Plataformas Digitais",
          description:
            "E-commerces e plataformas para produtos físicos ou digitais com checkout integrado (Pix e Cartão), área restrita do cliente, entrega segura de arquivos e gestão autônoma.",
          deliverables: [
            "Checkout integrado com Pix e Cartão de Crédito",
            "Área do cliente com proteção de arquivos digitais",
            "Painel administrativo intuitivo sem depender de código",
          ],
          tags: [
            "Next.js",
            "PostgreSQL",
            "Checkout Pix/Cartão",
            "Storage Privado",
          ],
          whatsappMessage:
            "Olá, Matheus! Gostaria de solicitar uma proposta para Lojas Virtuais & Plataformas Digitais.",
        },
        {
          id: "design-abnt",
          title: "UI/UX Design, Identidade Visual & Diagramação ABNT",
          description:
            "Protótipos navegáveis, bibliotecas de componentes no Figma, identidade visual para marcas e diagramação rigorosa de documentos técnicos e acadêmicos em LaTeX.",
          deliverables: [
            "Design Systems e protótipos navegáveis no Figma",
            "Identidade visual e guia prático de uso da marca",
            "Diagramação técnica e científica nas normas ABNT com abnTeX2",
          ],
          tags: ["Figma", "Design Systems", "Identidade Visual", "LaTeX / abnTeX2"],
          whatsappMessage:
            "Olá, Matheus! Gostaria de solicitar uma proposta para UI/UX Design, Identidade Visual & Diagramação ABNT.",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Portfólio",
      title: "Projetos em destaque",
      subtitle:
        "Cases reais entregues em produção governamental, pesquisa universitária, consultoria freelance e engenharia documental.",
      items: [
        {
          id: "sigea",
          category: "Pesquisa & Saúde • UFS",
          badge: "100% Cobertura de Testes",
          title:
            "SIGEA — Sistema Inteligente de Gestão de Eventos Adversos (UFS)",
          description:
            "Plataforma educacional e clínica interdisciplinar (DCOMP e Enfermagem/UFS) baseada na metodologia IHI-GTT (6 módulos e 53 gatilhos), classificação NCC MERP, ferramentas de qualidade hospitalar (Ishikawa 6M, PDCA, GUT, SWOT, 5W2H), dashboards epidemiológicos e Quality Gate de 100% de cobertura.",
          tags: [
            "Java 21",
            "Spring Boot 3.3",
            "PostgreSQL 16 (JSONB)",
            "Angular 18+",
            "Tailwind CSS",
            "JWT/RBAC",
          ],
          link: "https://github.com/matheus-araujo-pereira/SIGEA",
          linkLabel: "Ver repositório no GitHub",
        },
        {
          id: "thomas-clay",
          category: "UI/UX & Catálogo Web • Freelance",
          badge: "Avaliação 5,0 ★",
          title: "Thomas Clay — Catálogo Web, Design System & Guia Editorial",
          description:
            "Entrega completa com avaliação 5,0 estrelas: arquitetura de identidade visual, biblioteca de componentes no Figma, protótipo web responsivo com filtros dinâmicos e tabela de medidas, além de Guia Editorial de Uso em 7 pranchas A4.",
          tags: [
            "UI/UX Design",
            "Figma",
            "HTML5/CSS3/JS",
            "Design System",
            "Vercel",
          ],
          link: "https://thomas-clay-design.vercel.app/",
          linkLabel: "Abrir projeto na Vercel",
        },
        {
          id: "semfaz-pix",
          category: "Setor Público • Alta Criticidade",
          badge: "Produção em Larga Escala",
          title:
            "Arrecadação Tributária via PIX & Integrações Governamentais (SEMFAZ Aracaju)",
          description:
            "Participação ativa na engenharia, implantação e sustentação da liquidação financeira instantânea via PIX para a totalidade dos tributos municipais de Aracaju (IPTU, ITBI, ISS, taxas e certidões) e barramentos de integração (REDESIM, GOV.BR, SEFAZ, 1Doc e Correios).",
          tags: [
            "Java",
            "Spring Boot",
            "Oracle DB",
            "Microsserviços",
            "JasperReports",
            "Jenkins",
          ],
          link: "https://www.linkedin.com/in/matheus-araujo-pereira",
          linkLabel: "Ver histórico no LinkedIn",
        },
        {
          id: "diagramacao-latex",
          category: "Engenharia Documental • ABNT",
          badge: "LaTeX / abnTeX2",
          title: "Diagramação Técnica & Científica (ABNT / LaTeX)",
          description:
            "Estruturação de documentação técnica e científica de alta complexidade com geração automatizada de sumários, referências, tabelas, diagramas de Gantt e rigor tipográfico integral nas normas ABNT.",
          tags: [
            "LaTeX",
            "abnTeX2",
            "Normas ABNT",
            "Documentação Técnica",
          ],
          link: "https://github.com/matheus-araujo-pereira/SIGEA/blob/main/projeto_departamental/projeto_departamental.pdf",
          linkLabel: "Abrir PDF no GitHub",
        },
      ],
    },
    reviewAndStack: {
      reviewEyebrow: "Avaliação de Cliente",
      reviewTitle: "O que dizem sobre meu trabalho",
      reviewBadge: "5,0 ★ no 99Freelas",
      quote:
        "Contratei o Matheus para desenhar o site de catálogo da minha marca de vestuário, com briefing detalhado e seis páginas. Ele entregou antes do prazo que eu tinha estabelecido e antecipou o cronograma. Ouviu cada alteração que pedi e aplicou tudo prontamente, demonstrando entendimento perfeito. A comunicação foi clara do começo ao fim, e o Figma veio como pedi: biblioteca de componentes e um guia prático para uso no dia a dia.",
      author: "Márcio R.",
      authorRole: "Fundador, Thomas Clay",
      reviewOriginNote: "Avaliação original verificada no 99Freelas",
      prototypeCta: "Ver protótipo publicado",
      prototypeUrl: "https://thomas-clay-design.vercel.app/",
      stackEyebrow: "Competências Técnicas",
      stackTitle: "Stack tecnológica e ferramentas",
      stackSubtitle:
        "Experiência prática em todo o ciclo de desenvolvimento, de backends financeiros críticos a interfaces web modernas.",
      categories: [
        {
          id: "backend",
          title: "Backend & APIs",
          description:
            "Sistemas corporativos, regras fiscais críticas e serviços assíncronos.",
          items: [
            "Java (8, 11, 17, 21)",
            "Spring Boot (2.x / 3.x)",
            "Spring Data JPA",
            "Spring Security",
            "APIs RESTful",
            "Microsserviços",
            "JasperReports",
          ],
        },
        {
          id: "frontend",
          title: "Frontend & UI/UX",
          description:
            "Aplicações responsivas, design systems e interfaces focadas em conversão.",
          items: [
            "Angular (7+ a 18+)",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML5 & CSS3",
            "Figma",
          ],
        },
        {
          id: "databases",
          title: "Bancos de Dados",
          description:
            "Modelagem relacional, indexação, tuning de consultas e documentos JSONB.",
          items: [
            "PostgreSQL",
            "Oracle Database",
            "MySQL",
            "Modelagem Relacional",
            "Tuning SQL",
            "JSONB",
          ],
        },
        {
          id: "quality",
          title: "Qualidade, DevOps & Engenharia",
          description:
            "Testes automatizados, pipelines de entrega contínua e documentação rigorosa.",
          items: [
            "JUnit 4/5",
            "TestNG",
            "JaCoCo",
            "Jenkins (CI/CD)",
            "Docker",
            "Git & GitHub",
            "Linux (Fedora)",
            "UML",
            "Scrum / Kanban",
            "LaTeX / abnTeX2",
          ],
        },
      ],
    },
    experienceSection: {
      eyebrow: "Trajetória & Formação",
      title: "Experiência profissional e formação acadêmica",
      subtitle:
        "Atuação progressiva em engenharia de software no setor público fazendário, liderança tecnológica e pesquisa acadêmica.",
      currentBadge: "Atual",
      items: [
        {
          id: "lider-semfaz",
          period: "2026 – Atual",
          current: true,
          role: "Analista de Redes Júnior (Atuação como Engenheiro de Software)",
          organization:
            "Líder Locação de Mão de Obra LTDA • Alocado na SEMFAZ Aracaju",
          location: "Aracaju, SE",
          highlights: [
            "Levantamento técnico e definição de regras de negócio em sistemas arrecadatórios críticos (IPTU e ITBI).",
            "Arquitetura de serviços assíncronos e emissão de demonstrativos fiscais via JasperSoft.",
            "Modelagem relacional, diagramas UML, homologação via Jenkins, mentoria técnica de estagiários e cerimônias ágeis.",
          ],
        },
        {
          id: "inovatec-semfaz",
          period: "2025 – 2026",
          role: "Programador de Sistemas de Computador Júnior",
          organization: "InovatecJP • Alocado na SEMFAZ Aracaju",
          location: "Aracaju, SE",
          highlights: [
            "Implementação de barramentos de integração e suítes de testes para órgãos externos (REDESIM, STM, ITBI, IPTU, SEFAZ, GOV.BR, 1Doc, Asterisk, PAFE, MAPAJU e Correios).",
            "Desenvolvimento full stack em Java, Spring Boot e Angular/TypeScript e treinamento de estagiários efetivados.",
            "Otimização de consultas e estruturas em Oracle DB, PostgreSQL e MySQL.",
          ],
        },
        {
          id: "estagio-semfaz",
          period: "2023 – 2025",
          role: "Estagiário de Desenvolvimento de Software",
          organization:
            "Secretaria Municipal da Fazenda de Aracaju (SEMFAZ)",
          location: "Aracaju, SE",
          highlights: [
            "Concepção e implantação da liquidação financeira em tempo real via PIX para todos os tributos municipais (IPTU, ITBI, ISS, TLF, certidões e taxas).",
            "Modernização de sistemas legados de atendimento e requerimentos digitais.",
            "Suítes de testes automatizados com TestNG e cobertura de código com JaCoCo.",
          ],
        },
        {
          id: "softeam",
          period: "2022 – 2025",
          role: "Diretor de Tecnologia & Engenheiro de Software",
          organization: "SOFTEAM — Empresa Júnior de Computação (UFS)",
          location: "São Cristóvão, SE",
          highlights: [
            "Liderança da diretoria de tecnologia e capacitação full stack em Java, Spring Boot, PostgreSQL e Angular.",
            "Desenvolvimento de sistemas em Java 17 e portais institucionais, culminando na premiação nacional \"EJ Foguete\" do Movimento Empresa Júnior.",
          ],
        },
      ],
      educationTitle: "Formação Acadêmica",
      education: [
        {
          id: "mestrado-ufs",
          period: "2026 – Atual",
          degree: "Mestrado em Ciência da Computação (M.Sc.)",
          institution: "Universidade Federal de Sergipe (UFS)",
          status: "Em andamento",
        },
        {
          id: "graduacao-ufs",
          period: "2022 – 2027 (Previsão)",
          degree: "Bacharelado em Engenharia de Computação",
          institution: "Universidade Federal de Sergipe (UFS)",
          status: "Em andamento",
        },
      ],
      languagesTitle: "Idiomas",
      languages: [
        {
          name: "Português",
          level: "Nativo",
          detail: "Comunicação técnica, executiva e redação científica ABNT",
        },
        {
          name: "Inglês",
          level: "Intermediário",
          detail: "Wizard — módulos W2, W4 e W6 concluídos; cursando W8",
        },
      ],
    },
    footer: {
      eyebrow: "Contato Direto",
      title: "Vamos conversar sobre seu próximo projeto ou oportunidade?",
      subtitle:
        "Atendo empresas, recrutadores e empreendedores com foco em comunicação clara, arquitetura sólida e entregas no prazo.",
      whatsappCta: "Chamar no WhatsApp",
      resumeCta: "Baixar currículo (PDF)",
      copyEmailPrompt: "E-mail direto",
      copiedLabel: "Copiado!",
      copyButton: "Copiar",
      openMailClient: "Abrir no aplicativo de e-mail",
      backToTop: "Voltar ao topo",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: [
      { label: "Services", href: "#servicos", id: "servicos" },
      { label: "Projects", href: "#projetos", id: "projetos" },
      { label: "Experience", href: "#trajetoria", id: "trajetoria" },
      { label: "Stack", href: "#stack", id: "stack" },
      { label: "Contact", href: "#contato", id: "contato" },
    ],
    header: {
      cta: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toggleTheme: "Toggle light and dark theme",
    },
    whatsappDefaultMessage:
      "Hi Matheus! I visited your portfolio and would like to talk about a project.",
    hero: {
      availability: "Available for projects & opportunities",
      headline: "Software engineering and bespoke digital products.",
      summary:
        "I am Matheus Araujo Pereira, a Full Stack Software Engineer working since 2020 with Java, Spring Boot, Angular, Next.js, and relational databases — with proven experience deploying real-time PIX tax collection at SEMFAZ Aracaju, currently pursuing an M.Sc. in Computer Science and a B.Eng. in Computer Engineering at UFS.",
      primaryCta: "Request a quote",
      secondaryCta: "Download resume (PDF)",
      copyEmailLabel: "Copy email",
      copiedLabel: "Copied!",
      photoRole: "Software Engineer • UI/UX",
      photoLocation: "Aracaju, SE — Brazil",
    },
    servicesSection: {
      eyebrow: "Services",
      title: "Tailored engineering and design solutions",
      subtitle:
        "From technical architecture and interface design to production deployment, focused on reliability, clarity, and business impact.",
      ctaLabel: "Request a proposal",
      items: [
        {
          id: "sistemas-web",
          title: "Full Stack Web Systems & APIs",
          description:
            "End-to-end web platforms, secure REST APIs, administrative dashboards, role-based access control (RBAC/JWT), management reports, and relational database integrations.",
          deliverables: [
            "Scalable backend architecture and complex domain rules",
            "Clean, responsive administrative interfaces",
            "Relational data modeling, SQL tuning, and automated testing",
          ],
          tags: [
            "Java",
            "Spring Boot",
            "Angular",
            "Next.js",
            "PostgreSQL",
            "Oracle DB",
          ],
          whatsappMessage:
            "Hi Matheus! I would like to request a proposal for Full Stack Web Systems & APIs.",
        },
        {
          id: "sites-landing",
          title: "Corporate Websites & Landing Pages",
          description:
            "Fast, modern, responsive websites for companies, offices, clinics, and specialists — built with technical SEO, high performance, and a clear path to conversion.",
          deliverables: [
            "Bespoke layout designed for trust and readability",
            "Technical SEO, OpenGraph previews, and fast load times",
            "Direct lead capture via WhatsApp and contact flows",
          ],
          tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Technical SEO",
            "High Conversion",
          ],
          whatsappMessage:
            "Hi Matheus! I would like to request a proposal for Corporate Websites & Landing Pages.",
        },
        {
          id: "lojas-plataformas",
          title: "E-Commerce & Digital Platforms",
          description:
            "Online stores and platforms for physical or digital products with integrated checkout (Pix & Card), private customer area, protected file delivery, and self-service admin panel.",
          deliverables: [
            "Integrated Pix and Credit Card checkout flows",
            "Customer area with secure digital file delivery",
            "Intuitive admin panel requiring zero code to manage",
          ],
          tags: [
            "Next.js",
            "PostgreSQL",
            "Pix/Card Checkout",
            "Private Storage",
          ],
          whatsappMessage:
            "Hi Matheus! I would like to request a proposal for E-Commerce & Digital Platforms.",
        },
        {
          id: "design-abnt",
          title: "UI/UX Design, Visual Identity & Technical Typesetting",
          description:
            "Interactive prototypes, Figma component libraries, brand visual identity, and rigorous typesetting of technical and academic documents using LaTeX and ABNT standards.",
          deliverables: [
            "Figma Design Systems and interactive prototypes",
            "Visual identity and practical brand usage guide",
            "Academic and technical typesetting with LaTeX / abnTeX2",
          ],
          tags: ["Figma", "Design Systems", "Visual Identity", "LaTeX / abnTeX2"],
          whatsappMessage:
            "Hi Matheus! I would like to request a proposal for UI/UX Design, Visual Identity & Technical Typesetting.",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Portfolio",
      title: "Featured projects",
      subtitle:
        "Real-world work delivered across government finance, university clinical research, freelance product design, and document engineering.",
      items: [
        {
          id: "sigea",
          category: "Research & Healthcare • UFS",
          badge: "100% Test Coverage",
          title:
            "SIGEA — Intelligent Adverse Event Management System (UFS)",
          description:
            "Interdisciplinary clinical and educational platform (Computer Science & Nursing departments at UFS) built on the IHI-GTT methodology (6 modules, 53 triggers), NCC MERP classification, hospital quality tools (Ishikawa 6M, PDCA, GUT, SWOT, 5W2H), epidemiological dashboards, and a 100% test coverage Quality Gate.",
          tags: [
            "Java 21",
            "Spring Boot 3.3",
            "PostgreSQL 16 (JSONB)",
            "Angular 18+",
            "Tailwind CSS",
            "JWT/RBAC",
          ],
          link: "https://github.com/matheus-araujo-pereira/SIGEA",
          linkLabel: "View repository on GitHub",
        },
        {
          id: "thomas-clay",
          category: "UI/UX & Web Catalog • Freelance",
          badge: "5.0 ★ Rating",
          title: "Thomas Clay — Web Catalog, Design System & Brand Guide",
          description:
            "End-to-end delivery rated 5.0 stars: visual identity architecture, modular Figma component library, responsive web prototype with dynamic filters and size chart, plus a 7-sheet A4 Editorial Brand Guide.",
          tags: [
            "UI/UX Design",
            "Figma",
            "HTML5/CSS3/JS",
            "Design System",
            "Vercel",
          ],
          link: "https://thomas-clay-design.vercel.app/",
          linkLabel: "Open live project on Vercel",
        },
        {
          id: "semfaz-pix",
          category: "GovTech • Mission-Critical",
          badge: "Large-Scale Production",
          title:
            "PIX Municipal Tax Collection & Government Integrations (SEMFAZ Aracaju)",
          description:
            "Key contributor to engineering, launching, and maintaining real-time PIX financial settlement across all municipal taxes in Aracaju (IPTU, ITBI, ISS, fees, and certificates), alongside integration buses for REDESIM, GOV.BR, SEFAZ, 1Doc, and Correios.",
          tags: [
            "Java",
            "Spring Boot",
            "Oracle DB",
            "Microservices",
            "JasperReports",
            "Jenkins",
          ],
          link: "https://www.linkedin.com/in/matheus-araujo-pereira",
          linkLabel: "View career details on LinkedIn",
        },
        {
          id: "diagramacao-latex",
          category: "Document Engineering • ABNT",
          badge: "LaTeX / abnTeX2",
          title: "Technical & Scientific Typesetting (ABNT / LaTeX)",
          description:
            "Structured complex technical and academic documentation with automated tables of contents, citations, tables, Gantt charts, and strict typographic compliance with ABNT standards.",
          tags: [
            "LaTeX",
            "abnTeX2",
            "ABNT Standards",
            "Technical Documentation",
          ],
          link: "https://github.com/matheus-araujo-pereira/SIGEA/blob/main/projeto_departamental/projeto_departamental.pdf",
          linkLabel: "Open PDF on GitHub",
        },
      ],
    },
    reviewAndStack: {
      reviewEyebrow: "Client Review",
      reviewTitle: "What clients say",
      reviewBadge: "5.0 ★ on 99Freelas",
      quote:
        "I hired Matheus to design the catalog website for my clothing brand, based on a detailed six-page brief. He delivered ahead of the deadline I had set and stayed ahead of schedule. He listened to every change I requested and applied everything promptly with complete understanding. Communication was clear from start to finish, and the Figma handoff came exactly as requested: a component library and a practical guide for everyday use.",
      author: "Márcio R.",
      authorRole: "Founder, Thomas Clay",
      reviewOriginNote:
        "Translated from the original verified 5.0 ★ review in Portuguese on 99Freelas",
      prototypeCta: "View live prototype",
      prototypeUrl: "https://thomas-clay-design.vercel.app/",
      stackEyebrow: "Technical Skills",
      stackTitle: "Tech stack & engineering tools",
      stackSubtitle:
        "Hands-on experience across the full delivery lifecycle, from mission-critical financial backends to modern web interfaces.",
      categories: [
        {
          id: "backend",
          title: "Backend & APIs",
          description:
            "Enterprise systems, mission-critical tax rules, and asynchronous services.",
          items: [
            "Java (8, 11, 17, 21)",
            "Spring Boot (2.x / 3.x)",
            "Spring Data JPA",
            "Spring Security",
            "RESTful APIs",
            "Microservices",
            "JasperReports",
          ],
        },
        {
          id: "frontend",
          title: "Frontend & UI/UX",
          description:
            "Responsive web apps, design systems, and conversion-focused interfaces.",
          items: [
            "Angular (7+ to 18+)",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML5 & CSS3",
            "Figma",
          ],
        },
        {
          id: "databases",
          title: "Databases",
          description:
            "Relational modeling, indexing, SQL query tuning, and JSONB workflows.",
          items: [
            "PostgreSQL",
            "Oracle Database",
            "MySQL",
            "Relational Modeling",
            "SQL Tuning",
            "JSONB",
          ],
        },
        {
          id: "quality",
          title: "Quality, DevOps & Engineering",
          description:
            "Automated testing, CI/CD delivery pipelines, and structured documentation.",
          items: [
            "JUnit 4/5",
            "TestNG",
            "JaCoCo",
            "Jenkins (CI/CD)",
            "Docker",
            "Git & GitHub",
            "Linux (Fedora)",
            "UML",
            "Scrum / Kanban",
            "LaTeX / abnTeX2",
          ],
        },
      ],
    },
    experienceSection: {
      eyebrow: "Experience & Education",
      title: "Professional journey and academic background",
      subtitle:
        "Steady progression across public-sector financial engineering, technical leadership, and computer science research.",
      currentBadge: "Current",
      items: [
        {
          id: "lider-semfaz",
          period: "2026 – Present",
          current: true,
          role: "Junior Network Analyst (Working as Software Engineer)",
          organization:
            "Líder Locação de Mão de Obra LTDA • Assigned to SEMFAZ Aracaju",
          location: "Aracaju, SE",
          highlights: [
            "Technical discovery and business-rule definition for mission-critical municipal tax systems (IPTU and ITBI).",
            "Asynchronous service architecture and tax statement generation using JasperSoft.",
            "Relational modeling, UML diagrams, Jenkins staging deployments, intern mentorship, and agile ceremonies.",
          ],
        },
        {
          id: "inovatec-semfaz",
          period: "2025 – 2026",
          role: "Junior Computer Systems Programmer",
          organization: "InovatecJP • Assigned to SEMFAZ Aracaju",
          location: "Aracaju, SE",
          highlights: [
            "Built integration buses and test suites for external public agencies (REDESIM, STM, ITBI, IPTU, SEFAZ, GOV.BR, 1Doc, Asterisk, PAFE, MAPAJU, and Correios).",
            "Full stack development with Java, Spring Boot, and Angular/TypeScript, plus technical onboarding of interns later hired full-time.",
            "Query tuning and schema optimization across Oracle DB, PostgreSQL, and MySQL.",
          ],
        },
        {
          id: "estagio-semfaz",
          period: "2023 – 2025",
          role: "Software Development Intern",
          organization:
            "Municipal Treasury Department of Aracaju (SEMFAZ)",
          location: "Aracaju, SE",
          highlights: [
            "Designed and launched real-time PIX financial settlement for all municipal taxes (IPTU, ITBI, ISS, TLF, certificates, and fees).",
            "Modernized legacy citizen-service and digital request portals.",
            "Built automated test suites with TestNG and code coverage analysis with JaCoCo.",
          ],
        },
        {
          id: "softeam",
          period: "2022 – 2025",
          role: "Director of Technology & Software Engineer",
          organization: "SOFTEAM — Computer Science Junior Enterprise (UFS)",
          location: "São Cristóvão, SE",
          highlights: [
            "Led the technology board and full stack training programs in Java, Spring Boot, PostgreSQL, and Angular.",
            "Delivered Java 17 applications and institutional portals, earning the national \"EJ Foguete\" award from Brazil's Junior Enterprise Movement.",
          ],
        },
      ],
      educationTitle: "Academic Education",
      education: [
        {
          id: "mestrado-ufs",
          period: "2026 – Present",
          degree: "M.Sc. in Computer Science",
          institution: "Federal University of Sergipe (UFS)",
          status: "In progress",
        },
        {
          id: "graduacao-ufs",
          period: "2022 – 2027 (Expected)",
          degree: "B.Eng. in Computer Engineering",
          institution: "Federal University of Sergipe (UFS)",
          status: "In progress",
        },
      ],
      languagesTitle: "Languages",
      languages: [
        {
          name: "Portuguese",
          level: "Native",
          detail: "Technical, executive, and scientific writing (ABNT)",
        },
        {
          name: "English",
          level: "Intermediate",
          detail: "Wizard — W2, W4, and W6 completed; currently studying W8",
        },
      ],
    },
    footer: {
      eyebrow: "Direct Contact",
      title: "Ready to start your next project or discuss an opportunity?",
      subtitle:
        "I work with companies, recruiters, and founders who value clear communication, solid architecture, and on-time delivery.",
      whatsappCta: "Chat on WhatsApp",
      resumeCta: "Download resume (PDF)",
      copyEmailPrompt: "Direct email",
      copiedLabel: "Copied!",
      copyButton: "Copy",
      openMailClient: "Open in email app",
      backToTop: "Back to top",
      rights: "All rights reserved.",
    },
  },
};
