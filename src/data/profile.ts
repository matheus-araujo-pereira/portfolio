export const PROFILE = {
  name: "Matheus Araujo Pereira",
  shortName: "Matheus Araujo",
  initials: "MA",
  role: "Engenheiro de Software Full Stack & UI/UX Designer",
  badge: "Engenharia de Software • Full Stack • UI/UX",
  headline:
    "Rigor de sistemas críticos aliado à agilidade na entrega de produtos digitais.",
  positioning:
    "Desenvolvimento de sistemas corporativos de alta criticidade, aplicações web sob medida, APIs REST e interfaces digitais de alta conversão.",
  summary:
    "Engenheiro de Software com foco no ecossistema Java/Spring Boot e Angular/TypeScript desde 2020, atuação em sistemas arrecadatórios de larga escala na SEMFAZ Aracaju (liquidação instantânea via PIX e integrações governamentais), mestrando em Ciência da Computação e graduando em Engenharia de Computação pela UFS.",
  location: "Aracaju, SE – Brasil",
  status:
    "Disponível para projetos freelance e oportunidades em Engenharia de Software",
  email: "matharaupere@gmail.com",
  whatsappDisplay: "(79) 99998-4882",
  whatsappNumber: "5579999984882",
  whatsappDefaultUrl:
    "https://wa.me/5579999984882?text=Ol%C3%A1%2C%20Matheus!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
  githubUrl: "https://github.com/matheus-araujo-pereira",
  linkedinUrl: "https://www.linkedin.com/in/matheus-araujo-pereira",
  resumePath: "/curriculo-matheus-araujo-pereira.pdf",
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Experiência", href: "#experiencia", id: "experiencia" },
  { label: "Stack & Formação", href: "#stack", id: "stack" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export interface HeroMetric {
  value: string;
  label: string;
  detail: string;
}

export const HERO_METRICS: HeroMetric[] = [
  {
    value: "2020+",
    label: "Anos no ecossistema Java & Web",
    detail: "Base sólida em engenharia de software",
  },
  {
    value: "PIX & Gov",
    label: "Liquidação tributária em tempo real",
    detail: "Missão crítica na SEMFAZ Aracaju",
  },
  {
    value: "5.0 ★",
    label: "Avaliação em entregas freelance",
    detail: "Compromisso com prazo e acabamento",
  },
  {
    value: "100%",
    label: "Foco em qualidade, testes e arquitetura",
    detail: "Quality gates, CI/CD e código limpo",
  },
];

export type ServiceIconName = "server" | "globe" | "shopping-bag" | "palette";

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  icon: ServiceIconName;
  whatsappMessage: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "sistemas-web",
    title: "Sistemas Web Full Stack & APIs Corporativas",
    subtitle: "Arquitetura robusta & regras de negócio",
    description:
      "Desenvolvimento de plataformas completas, painéis administrativos, controle de acesso por perfis (RBAC/JWT), regras de negócio complexas, relatórios gerenciais e integração com bancos relacionais.",
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "React/Next.js",
      "PostgreSQL",
      "MySQL",
      "Oracle",
    ],
    icon: "server",
    whatsappMessage:
      "Olá, Matheus! Vi sua Carta de Serviços e gostaria de solicitar uma proposta para Sistemas Web Full Stack & APIs Corporativas.",
  },
  {
    id: "landing-pages",
    title: "Landing Pages & Sites Institucionais de Alta Conversão",
    subtitle: "Performance, SEO técnico & captação",
    description:
      "Criação de páginas rápidas, responsivas e sob medida para empresas, clínicas, escritórios e lançamentos, com foco em SEO técnico, performance e captação de clientes via WhatsApp.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design", "SEO"],
    icon: "globe",
    whatsappMessage:
      "Olá, Matheus! Vi sua Carta de Serviços e gostaria de solicitar uma proposta para Landing Pages & Sites Institucionais de Alta Conversão.",
  },
  {
    id: "lojas-virtuais",
    title: "Lojas Virtuais, Catálogos & Plataformas Digitais",
    subtitle: "Checkout integrado & gestão autônoma",
    description:
      "E-commerces para produtos físicos ou digitais (PDFs, infoprodutos, assinaturas) com checkout integrado (Pix e Cartão), área restrita do cliente e painel autônomo para gestão sem depender de programação.",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Storage Privado",
      "Gateways de Pagamento",
    ],
    icon: "shopping-bag",
    whatsappMessage:
      "Olá, Matheus! Vi sua Carta de Serviços e gostaria de solicitar uma proposta para Lojas Virtuais, Catálogos & Plataformas Digitais.",
  },
  {
    id: "ui-ux-diagramacao",
    title: "UI/UX Design, Identidade Visual & Diagramação Técnica",
    subtitle: "Design systems & rigor editorial",
    description:
      "Protótipos navegáveis no Figma, design systems, identidade visual para marcas/startups e diagramação rigorosa de documentos acadêmicos e técnicos nas normas da ABNT e LaTeX.",
    stack: ["Figma", "Design Systems", "LaTeX / abnTeX2", "GIMP"],
    icon: "palette",
    whatsappMessage:
      "Olá, Matheus! Vi sua Carta de Serviços e gostaria de solicitar uma proposta para UI/UX Design, Identidade Visual & Diagramação Técnica.",
  },
];

export interface ProjectItem {
  id: string;
  category: string;
  highlightBadge: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  accent: "blue" | "emerald";
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "sigea",
    category: "Engenharia de Software • Saúde & Pesquisa",
    highlightBadge: "100% Cobertura de Testes",
    title: "SIGEA — Sistema Inteligente de Gestão de Eventos Adversos (UFS)",
    description:
      "Plataforma educacional e clínica interdisciplinar (DCOMP e Enfermagem/UFS) baseada na metodologia IHI-GTT (6 módulos e 53 gatilhos), classificação NCC MERP, ferramentas de qualidade hospitalar (Ishikawa 6M, PDCA, GUT, SWOT, 5W2H), dashboards epidemiológicos e Quality Gate de 100% de cobertura de testes.",
    tags: [
      "Java 21",
      "Spring Boot 3.3",
      "PostgreSQL 16 (JSONB)",
      "Angular 18+",
      "TailwindCSS",
      "JWT/RBAC",
    ],
    link: "https://github.com/matheus-araujo-pereira/SIGEA",
    linkLabel: "Ver repositório no GitHub",
    accent: "blue",
  },
  {
    id: "thomas-clay",
    category: "UI/UX Design & Front-end • Freelance",
    highlightBadge: "Avaliação 5,0 ★",
    title: "Thomas Clay — Catálogo Web, Design System & Guia de Marca",
    description:
      "Projeto completo entregue com avaliação 5,0: arquitetura de identidade visual, design system no Figma, protótipo web responsivo com filtros dinâmicos e tabela de medidas, além de Guia Editorial de Uso em 7 pranchas A4.",
    tags: ["UI/UX Design", "Figma", "HTML5/CSS3/JS", "Design System", "Vercel"],
    link: "https://thomas-clay-design.vercel.app/",
    linkLabel: "Abrir projeto publicado",
    accent: "emerald",
  },
  {
    id: "semfaz-pix",
    category: "Sistemas Governamentais • Alta Criticidade",
    highlightBadge: "Produção em Larga Escala",
    title:
      "Arrecadação Tributária via PIX & Integrações Governamentais (SEMFAZ Aracaju)",
    description:
      "Participação ativa na engenharia, implantação e sustentação da liquidação financeira instantânea via PIX para a totalidade dos tributos municipais de Aracaju (IPTU, ITBI, ISS, taxas e certidões) e barramentos de integração (REDESIM, GOV.BR, SEFAZ, 1Doc, Correios).",
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
    accent: "blue",
  },
  {
    id: "diagramacao-latex",
    category: "Engenharia Documental • ABNT & LaTeX",
    highlightBadge: "Rigor Tipográfico ABNT",
    title: "Diagramação Editorial & Engenharia Documental (ABNT / LaTeX)",
    description:
      "Estruturação de documentação técnica e científica de alta complexidade com geração automatizada de sumários, tabelas, diagramas de Gantt, normas ABNT e rigor tipográfico.",
    tags: ["LaTeX", "abnTeX2", "Normas ABNT", "Documentação Técnica"],
    link: "https://github.com/matheus-araujo-pereira/SIGEA/blob/main/projeto_departamental/projeto_departamental.pdf",
    linkLabel: "Visualizar documento PDF",
    accent: "emerald",
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  current?: boolean;
  organization: string;
  location: string;
  summary: string;
  deliverables: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "lider-semfaz",
    role: "Analista de Redes Júnior (Atuação como Engenheiro de Software)",
    period: "2026 – Atual",
    current: true,
    organization:
      "Líder Locação de Mão de Obra LTDA | Alocado na Secretaria Municipal da Fazenda (SEMFAZ)",
    location: "Aracaju, SE",
    summary:
      "Atuação na evolução arquitetural e regras fiscais críticas dos sistemas arrecadatórios municipais.",
    deliverables: [
      "Levantamento técnico e definição de regras de negócio em sistemas arrecadatórios críticos (IPTU e ITBI).",
      "Arquitetura de serviços assíncronos e emissão de demonstrativos fiscais via JasperSoft.",
      "Modelagem relacional, elaboração de diagramas UML e homologação contínua via Jenkins.",
      "Mentoria técnica de estagiários e condução de entregas em cerimônias ágeis.",
    ],
  },
  {
    id: "inovatec-semfaz",
    role: "Programador de Sistemas de Computador Júnior",
    period: "2025 – 2026",
    organization:
      "Agência de Inovação Tecnológica de João Pessoa (InovatecJP) | Alocado na SEMFAZ",
    location: "Aracaju, SE",
    summary:
      "Engenharia de integrações governamentais, desenvolvimento full stack e performance de bancos relacionais.",
    deliverables: [
      "Implementação de barramentos de integração e suítes de testes para órgãos externos (REDESIM, STM, ITBI, IPTU, SEFAZ, GOV.BR, 1Doc, Asterisk, PAFE, MAPAJU e Correios).",
      "Treinamento técnico de estagiários posteriormente efetivados no time.",
      "Desenvolvimento full stack em Java, Spring Boot e Angular/TypeScript.",
      "Otimização de consultas e estruturas em Oracle DB, PostgreSQL e MySQL.",
    ],
  },
  {
    id: "estagio-semfaz",
    role: "Estagiário de Desenvolvimento de Software",
    period: "2023 – 2025",
    organization: "Secretaria Municipal da Fazenda de Aracaju (SEMFAZ)",
    location: "Aracaju, SE",
    summary:
      "Modernização digital da fazenda municipal e implantação da liquidação tributária em tempo real.",
    deliverables: [
      "Concepção e implantação da liquidação financeira em tempo real via PIX para todos os tributos municipais (IPTU, ITBI, ISS, TLF, certidões e taxas).",
      "Modernização de sistemas legados de atendimento e requerimentos digitais.",
      "Construção de suítes de testes automatizados com TestNG e análise de cobertura com JaCoCo.",
    ],
  },
  {
    id: "softeam",
    role: "Diretor de Tecnologia & Engenheiro de Software",
    period: "2022 – 2025",
    organization: "SOFTEAM – Empresa Júnior de Computação (UFS)",
    location: "São Cristóvão, SE",
    summary:
      "Gestão tecnológica, formação de novos engenheiros e entregas premiadas nacionalmente.",
    deliverables: [
      "Liderança da diretoria de tecnologia com definição de padrões de arquitetura e qualidade.",
      "Capacitação técnica full stack de membros em Java, Spring Boot, PostgreSQL e Angular.",
      "Desenvolvimento de sistemas em Java 17 e portais institucionais, culminando na premiação nacional \"EJ Foguete\" do Movimento Empresa Júnior.",
    ],
  },
];

export type StackIconName = "code" | "layers" | "database" | "shield";

export interface StackCategory {
  id: string;
  title: string;
  icon: StackIconName;
  items: string[];
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    id: "backend",
    title: "Backend & Arquitetura",
    icon: "code",
    items: [
      "Java (8, 11, 17, 21)",
      "Spring Boot (2.x e 3.x)",
      "Spring Data JPA",
      "Spring Security",
      "APIs RESTful",
      "Microsserviços",
      "JasperReports",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Design",
    icon: "layers",
    items: [
      "Angular (7+ a 18+)",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Figma",
    ],
  },
  {
    id: "database",
    title: "Bancos de Dados",
    icon: "database",
    items: [
      "PostgreSQL",
      "Oracle Database",
      "MySQL",
      "Modelagem relacional",
      "Indexação & Tuning",
      "JSONB",
    ],
  },
  {
    id: "devops",
    title: "Qualidade, DevOps & Métodos",
    icon: "shield",
    items: [
      "JUnit 4/5",
      "TestNG",
      "JaCoCo",
      "Jenkins (CI/CD)",
      "Git",
      "GitHub",
      "Docker",
      "Linux (Fedora)",
      "UML",
      "Scrum / Kanban",
    ],
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export const EDUCATION: EducationItem[] = [
  {
    id: "mestrado-ufs",
    degree: "Mestrado em Ciência da Computação (M.Sc.)",
    institution: "Universidade Federal de Sergipe (UFS)",
    period: "2026 – Atual",
    status: "Em andamento",
  },
  {
    id: "graduacao-ufs",
    degree: "Bacharelado em Engenharia de Computação",
    institution: "Universidade Federal de Sergipe (UFS)",
    period: "2022 – 2027 (Previsão)",
    status: "Em andamento",
  },
];

export const LANGUAGES = [
  {
    language: "Português",
    level: "Nativo",
    detail: "Comunicação técnica, corporativa e redação científica (ABNT)",
  },
  {
    language: "Inglês",
    level: "Intermediário",
    detail: "Wizard: módulos W2, W4 e W6 concluídos; cursando W8",
  },
] as const;
