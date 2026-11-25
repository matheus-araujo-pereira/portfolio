export const PROFILE = {
  name: "Matheus Araujo Pereira",
  shortName: "Matheus Araujo",
  monogram: "MAP",
  role: "Engenheiro de Software Full Stack & UI/UX Designer",
  location: "Aracaju, SE – Brasil",
  locationShort: "ARACAJU, SE",
  status:
    "Disponível para projetos freelance e oportunidades em Engenharia de Software",
  heroEyebrow: "ENGENHARIA DE SOFTWARE",
  heroParagraph:
    "Atuação desde 2020 no ecossistema Java/Spring Boot, Angular e Next.js — da arquitetura de liquidação tributária via PIX na SEMFAZ Aracaju à criação de plataformas web, sistemas corporativos e interfaces digitais sob medida.",
  email: "matharaupere@gmail.com",
  whatsappDisplay: "(79) 99998-4882",
  whatsappNumber: "5579999984882",
  whatsappDefaultUrl:
    "https://wa.me/5579999984882?text=Ol%C3%A1%2C%20Matheus!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
  githubUrl: "https://github.com/matheus-araujo-pereira",
  linkedinUrl: "https://www.linkedin.com/in/matheus-araujo-pereira",
  freelasUrl: "https://www.99freelas.com.br",
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
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Cases", href: "#cases", id: "cases" },
  { label: "Processo", href: "#processo", id: "processo" },
  { label: "Trajetória", href: "#trajetoria", id: "trajetoria" },
  { label: "Stack", href: "#stack", id: "stack" },
];

export interface WorkspaceTab {
  id: string;
  fileName: string;
  folder: string;
  path: string;
  language: string;
  statusLabel: string;
  title: string;
  summary: string;
  architectureLines: { label: string; value: string }[];
  metrics: { label: string; value: string }[];
  tags: string[];
  link: string;
  linkLabel: string;
}

export const WORKSPACE_TABS: WorkspaceTab[] = [
  {
    id: "semfaz-pix",
    fileName: "semfaz-pix-engine.java",
    folder: "gov-arrecadacao",
    path: "workspace / gov-arrecadacao / semfaz-pix-engine.java",
    language: "Java / Spring Boot",
    statusLabel: "PRODUÇÃO • SEMFAZ",
    title: "Liquidação Tributária Instantânea via PIX",
    summary:
      "Engenharia, implantação e sustentação da liquidação financeira via PIX para toda a matriz de tributos municipais de Aracaju (IPTU, ITBI, ISS, TLF, certidões e taxas), com barramentos de integração governamentais.",
    architectureLines: [
      { label: "tributos", value: "IPTU • ITBI • ISS • TLF • Certidões" },
      {
        label: "barramentos",
        value: "REDESIM, GOV.BR, SEFAZ, 1Doc, Correios",
      },
      {
        label: "core_stack",
        value: "Java, Spring Boot, Oracle DB, JasperReports",
      },
      { label: "pipeline", value: "TestNG, JaCoCo, Jenkins CI/CD" },
    ],
    metrics: [
      { label: "Liquidação", value: "Tempo real" },
      { label: "Integrações", value: "10+ órgãos" },
      { label: "Criticidade", value: "Fiscal / Gov" },
    ],
    tags: ["Java", "Spring Boot", "Oracle DB", "Microsserviços", "Jenkins"],
    link: "https://www.linkedin.com/in/matheus-araujo-pereira",
    linkLabel: "Ver histórico completo",
  },
  {
    id: "sigea-ufs",
    fileName: "sigea-ufs-platform.ts",
    folder: "pesquisa-ufs",
    path: "workspace / pesquisa-ufs / sigea-ufs-platform.ts",
    language: "Full Stack / IHI-GTT",
    statusLabel: "QUALITY GATE 100%",
    title: "SIGEA — Gestão de Eventos Adversos (UFS)",
    summary:
      "Plataforma clínica e educacional interdisciplinar (DCOMP e Enfermagem/UFS) baseada na metodologia IHI-GTT (6 módulos, 53 gatilhos) e classificação NCC MERP com dashboards epidemiológicos.",
    architectureLines: [
      { label: "backend", value: "Java 21 + Spring Boot 3.3 + JWT/RBAC" },
      { label: "database", value: "PostgreSQL 16 com documentos JSONB" },
      {
        label: "qualidade",
        value: "Ishikawa 6M, PDCA, GUT, SWOT e 5W2H",
      },
      { label: "cobertura", value: "100% Quality Gate validado via JaCoCo" },
    ],
    metrics: [
      { label: "Gatilhos", value: "53 IHI-GTT" },
      { label: "Cobertura", value: "100% JaCoCo" },
      { label: "Frontend", value: "Angular 18+" },
    ],
    tags: ["Java 21", "Spring Boot 3.3", "PostgreSQL 16", "Angular 18"],
    link: "https://github.com/matheus-araujo-pereira/SIGEA",
    linkLabel: "Abrir repositório",
  },
  {
    id: "thomas-clay",
    fileName: "thomas-clay-system.fig",
    folder: "design-systems",
    path: "workspace / design-systems / thomas-clay-system.fig",
    language: "UI/UX / Design System",
    statusLabel: "AVALIAÇÃO 5,0 ★",
    title: "Thomas Clay — Catálogo Web & Guia de Marca",
    summary:
      "Entrega completa de direção visual e produto digital: identidade visual, biblioteca modular de componentes no Figma, protótipo web responsivo com filtros dinâmicos e Guia Editorial de 7 pranchas A4.",
    architectureLines: [
      { label: "escopo", value: "6 páginas + filtros dinâmicos + medidas" },
      {
        label: "design_sys",
        value: "Tokens, tipografia e componentes Figma",
      },
      { label: "editorial", value: "Guia Prático de Uso em 7 pranchas A4" },
      { label: "entrega", value: "Prazo antecipado • Nota 5,0 no 99Freelas" },
    ],
    metrics: [
      { label: "Avaliação", value: "5,0 ★" },
      { label: "Guia Editorial", value: "7 pranchas A4" },
      { label: "Deploy", value: "Vercel" },
    ],
    tags: ["Figma", "Design System", "HTML5/CSS3/JS", "UI/UX"],
    link: "https://thomas-clay-design.vercel.app/",
    linkLabel: "Abrir protótipo publicado",
  },
];

export type ServiceTone = "dark" | "paper" | "muted" | "accent";

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  stack: string[];
  tone: ServiceTone;
  whatsappMessage: string;
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    id: "sistemas-web",
    title: "Sistemas Web Full Stack & APIs Corporativas",
    description:
      "Arquitetura e desenvolvimento de plataformas robustas sob medida para operações com regras de negócio exigentes, controle de acesso granular e integração com bancos corporativos.",
    deliverables: [
      "APIs RESTful seguras com autenticação JWT e perfis RBAC",
      "Painéis administrativos, relatórios gerenciais e fluxos assíncronos",
      "Modelagem relacional, tuning de consultas e testes automatizados",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "Next.js",
      "PostgreSQL",
      "Oracle DB",
      "RBAC/JWT",
    ],
    tone: "dark",
    whatsappMessage:
      "Olá, Matheus! Vi sua Carta de Serviços e gostaria de solicitar uma proposta para Sistemas Web Full Stack & APIs Corporativas.",
  },
  {
    number: "02",
    id: "sites-landing",
    title: "Sites Institucionais & Landing Pages Sob Medida",
    description:
      "Interfaces autorais, rápidas e responsivas projetadas para empresas, clínicas, escritórios e especialistas que exigem presença digital diferenciada e alta conversão.",
    deliverables: [
      "Design autoral sem templates genéricos, alinhado à identidade da marca",
      "SEO técnico completo, OpenGraph e performance otimizada em produção",
      "Fluxos diretos de captação via WhatsApp e formulários qualificados",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX Autoral", "SEO"],
    tone: "paper",
    whatsappMessage:
      "Olá, Matheus! Vi sua Carta de Serviços e gostaria de solicitar uma proposta para Sites Institucionais & Landing Pages Sob Medida.",
  },
  {
    number: "03",
    id: "lojas-plataformas",
    title: "Lojas Virtuais, Catálogos & Plataformas Digitais",
    description:
      "E-commerces e plataformas para produtos físicos ou digitais com experiência de compra fluida, entrega segura de arquivos e autonomia operacional para sua equipe.",
    deliverables: [
      "Checkout integrado com Pix e Cartão via gateways confiáveis",
      "Área restrita do cliente e entrega protegida de arquivos digitais",
      "Painel administrativo autônomo para gestão sem depender de código",
    ],
    stack: [
      "Next.js",
      "PostgreSQL",
      "Checkout Pix/Cartão",
      "Storage Privado",
    ],
    tone: "muted",
    whatsappMessage:
      "Olá, Matheus! Vi sua Carta de Serviços e gostaria de solicitar uma proposta para Lojas Virtuais, Catálogos & Plataformas Digitais.",
  },
  {
    number: "04",
    id: "design-diagramacao",
    title: "UI/UX Design, Identidade Visual & Diagramação ABNT",
    description:
      "Direção visual estratégica para produtos digitais e marcas, combinada ao rigor tipográfico para documentos técnicos, científicos e editoriais complexos.",
    deliverables: [
      "Protótipos navegáveis e bibliotecas de componentes (Design Systems) no Figma",
      "Identidade visual consistente e manuais editoriais de aplicação de marca",
      "Diagramação técnica e acadêmica nas normas ABNT com LaTeX / abnTeX2",
    ],
    stack: [
      "Figma",
      "Design Systems",
      "Identidade Visual",
      "LaTeX / abnTeX2",
      "GIMP",
    ],
    tone: "accent",
    whatsappMessage:
      "Olá, Matheus! Vi sua Carta de Serviços e gostaria de solicitar uma proposta para UI/UX Design, Identidade Visual & Diagramação ABNT.",
  },
];

export interface ProjectItem {
  id: string;
  windowLabel: string;
  year: string;
  metricBadge: string;
  title: string;
  problemSolved: string;
  tags: string[];
  link: string;
  linkLabel: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "sigea",
    windowLabel: "github.com / matheus-araujo-pereira / SIGEA",
    year: "2025 – 2026",
    metricBadge: "100% Cobertura JaCoCo",
    title: "SIGEA — Sistema Inteligente de Gestão de Eventos Adversos (UFS)",
    problemSolved:
      "Unifica o rastreamento clínico e educacional de eventos adversos hospitalares (DCOMP e Enfermagem/UFS) sob a metodologia IHI-GTT (6 módulos e 53 gatilhos) e classificação NCC MERP, integrando ferramentas de qualidade (Ishikawa 6M, PDCA, GUT, SWOT, 5W2H), dashboards epidemiológicos e Quality Gate de 100% de cobertura de testes.",
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
  },
  {
    id: "thomas-clay",
    windowLabel: "thomas-clay-design.vercel.app",
    year: "2026",
    metricBadge: "Nota 5,0 ★ • 99Freelas",
    title: "Thomas Clay — Catálogo Web, Design System & Guia de Marca",
    problemSolved:
      "Estruturou toda a presença digital da marca de vestuário a partir de um briefing de seis páginas: identidade visual, biblioteca modular de componentes no Figma, protótipo web responsivo com filtros dinâmicos e tabela de medidas, além de um Guia Editorial de Uso em 7 pranchas A4 — entregue antes do prazo.",
    tags: ["UI/UX Design", "Figma", "HTML5/CSS3/JS", "Design System", "Vercel"],
    link: "https://thomas-clay-design.vercel.app/",
    linkLabel: "Abrir protótipo publicado",
  },
  {
    id: "semfaz-pix",
    windowLabel: "semfaz.aracaju.se.gov.br / arrecadacao-pix",
    year: "2023 – Atual",
    metricBadge: "Produção Governamental",
    title:
      "Arrecadação Tributária via PIX & Integrações Governamentais (SEMFAZ Aracaju)",
    problemSolved:
      "Eliminou a latência de compensação bancária tradicional através da engenharia e sustentação da liquidação instantânea via PIX para a totalidade dos tributos municipais de Aracaju (IPTU, ITBI, ISS, taxas e certidões), além de barramentos de integração com REDESIM, GOV.BR, SEFAZ, 1Doc e Correios.",
    tags: [
      "Java",
      "Spring Boot",
      "Oracle DB",
      "Microsserviços",
      "JasperReports",
      "Jenkins",
    ],
    link: "https://www.linkedin.com/in/matheus-araujo-pereira",
    linkLabel: "Ver trajetória no LinkedIn",
  },
  {
    id: "diagramacao-latex",
    windowLabel: "docs / projeto_departamental.pdf",
    year: "2025",
    metricBadge: "Normas ABNT / LaTeX",
    title: "Diagramação Editorial & Engenharia Documental (ABNT / LaTeX)",
    problemSolved:
      "Sistematizou documentação técnica e científica de alta complexidade com geração automatizada de sumários, referências, tabelas, cronogramas de Gantt e rigor tipográfico em conformidade integral com as normas ABNT via abnTeX2.",
    tags: ["LaTeX", "abnTeX2", "Normas ABNT", "Engenharia Documental"],
    link: "https://github.com/matheus-araujo-pereira/SIGEA/blob/main/projeto_departamental/projeto_departamental.pdf",
    linkLabel: "Visualizar PDF técnico",
  },
];

export const TESTIMONIAL = {
  quote:
    "Contratei o Matheus para desenhar o site de catálogo da minha marca de vestuário, com briefing detalhado e seis páginas. Ele entregou antes do prazo que eu tinha estabelecido e antecipou o cronograma. Ouviu cada alteração que pedi e aplicou tudo prontamente, demonstrando entendimento perfeito. A comunicação foi clara do começo ao fim, e o Figma veio como pedi: biblioteca de componentes e um guia prático para uso no dia a dia.",
  author: "Márcio R.",
  role: "Fundador, Thomas Clay (Avaliação 5,0 ★ no 99Freelas)",
  projectUrl: "https://thomas-clay-design.vercel.app/",
} as const;

export interface StackTile {
  code: string;
  name: string;
  category: string;
}

export const STACK_TILES: StackTile[] = [
  { code: "JV", name: "Java 21", category: "Core Backend" },
  { code: "SB", name: "Spring Boot", category: "APIs & Security" },
  { code: "NG", name: "Angular", category: "Enterprise UI" },
  { code: "NX", name: "Next.js", category: "Web & SSR" },
  { code: "TS", name: "TypeScript", category: "Type-Safe" },
  { code: "PG", name: "PostgreSQL", category: "SQL & JSONB" },
  { code: "OR", name: "Oracle DB", category: "Tuning Fiscal" },
  { code: "MY", name: "MySQL", category: "Relacional" },
  { code: "DK", name: "Docker", category: "Containers" },
  { code: "JK", name: "Jenkins", category: "CI / CD" },
  { code: "FG", name: "Figma", category: "Design System" },
  { code: "FD", name: "Linux Fedora", category: "Ambiente" },
];

export const COMPLEMENTARY_TECH = [
  "Java 8 / 11 / 17 / 21",
  "Spring Data JPA",
  "Spring Security",
  "JUnit 4/5",
  "TestNG",
  "JaCoCo",
  "JasperReports",
  "Tailwind CSS",
  "Git & GitHub",
  "UML",
  "Scrum / Kanban",
  "LaTeX / abnTeX2",
] as const;

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  outputs: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Levantamento Técnico & Arquitetura",
    summary: "Clareza de negócio, riscos e modelagem antes da primeira linha de código.",
    details:
      "Mapeio requisitos funcionais e não funcionais, regras críticas de domínio, integrações externas e modelagem de dados. O escopo sai documentado com cronograma realista, arquitetura definida e critérios objetivos de aceite.",
    outputs: [
      "Especificação funcional e arquitetura de sistema",
      "Modelagem relacional e contratos de API",
      "Cronograma transparente por entregas",
    ],
  },
  {
    number: "02",
    title: "Protótipo Navegável & Direção Visual",
    summary: "Interface validada visualmente antes de investir horas de engenharia.",
    details:
      "Construo a direção de arte, fluxos de navegação e biblioteca de componentes no Figma com foco em legibilidade, hierarquia editorial e conversão — garantindo alinhamento completo antes da implementação.",
    outputs: [
      "Design System e componentes reutilizáveis no Figma",
      "Protótipo navegável desktop e mobile",
      "Revisões rápidas com comunicação direta",
    ],
  },
  {
    number: "03",
    title: "Desenvolvimento Full Stack & Testes Automatizados",
    summary: "Código limpo, tipagem estrita e qualidade verificada em pipeline.",
    details:
      "Implemento backend, banco de dados e frontend com padrões de arquitetura sustentável, controle de acesso seguro (JWT/RBAC), suítes de testes automatizados (JUnit, TestNG, JaCoCo) e validação contínua de performance.",
    outputs: [
      "Entregas parciais demonstráveis em ambiente de homologação",
      "Testes automatizados e revisão de consultas SQL",
      "SEO técnico, acessibilidade e responsividade completa",
    ],
  },
  {
    number: "04",
    title: "Publicação, Documentação & Suporte Pós-Entrega",
    summary: "Deploy assistido em produção e autonomia para a sua equipe evoluir.",
    details:
      "Realizo a publicação em produção (Vercel, Docker ou infraestrutura corporativa), entrego documentação técnica objetiva e guias práticos de uso, além de acompanhamento próximo após o lançamento.",
    outputs: [
      "Deploy configurado com domínio, SSL e metadados sociais",
      "Documentação técnica e guia operacional de uso",
      "Acompanhamento pós-go-live e evolução contínua",
    ],
  },
];

export interface ExperienceItem {
  id: string;
  period: string;
  current?: boolean;
  role: string;
  organization: string;
  location: string;
  highlights: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "lider-semfaz",
    period: "2026 – Atual",
    current: true,
    role: "Analista de Redes Júnior (Atuação como Engenheiro de Software)",
    organization:
      "Líder Locação de Mão de Obra LTDA | Alocado na SEMFAZ Aracaju",
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
    organization: "InovatecJP | Alocado na SEMFAZ Aracaju",
    location: "Aracaju, SE",
    highlights: [
      "Implementação de barramentos de integração e suítes de testes para órgãos externos (REDESIM, STM, ITBI, IPTU, SEFAZ, GOV.BR, 1Doc, Asterisk, PAFE, MAPAJU e Correios).",
      "Desenvolvimento full stack em Java, Spring Boot e Angular/TypeScript, com treinamento técnico de estagiários efetivados.",
      "Otimização de queries e modelagem em Oracle DB, PostgreSQL e MySQL.",
    ],
  },
  {
    id: "estagio-semfaz",
    period: "2023 – 2025",
    role: "Estagiário de Desenvolvimento de Software",
    organization: "Secretaria Municipal da Fazenda de Aracaju (SEMFAZ)",
    location: "Aracaju, SE",
    highlights: [
      "Concepção e implantação da liquidação financeira em tempo real via PIX para todos os tributos municipais (IPTU, ITBI, ISS, TLF, certidões e taxas).",
      "Modernização de sistemas legados de atendimento e requerimentos digitais.",
      "Testes automatizados com TestNG e métricas de cobertura com JaCoCo.",
    ],
  },
  {
    id: "softeam",
    period: "2022 – 2025",
    role: "Diretor de Tecnologia & Engenheiro de Software",
    organization:
      "SOFTEAM (Empresa Júnior de Computação – UFS, Prêmio EJ Foguete)",
    location: "São Cristóvão, SE",
    highlights: [
      "Liderança da diretoria de tecnologia e capacitação full stack em Java, Spring Boot, PostgreSQL e Angular.",
      "Desenvolvimento de sistemas em Java 17 e portais institucionais, culminando na premiação nacional \"EJ Foguete\" do Movimento Empresa Júnior.",
    ],
  },
];

export const EDUCATION_SUMMARY = [
  {
    period: "2026 – Atual",
    title: "Mestrado em Ciência da Computação (M.Sc.)",
    institution: "Universidade Federal de Sergipe (UFS)",
  },
  {
    period: "2022 – 2027",
    title: "Bacharelado em Engenharia de Computação",
    institution: "Universidade Federal de Sergipe (UFS)",
  },
  {
    period: "Idiomas",
    title: "Português Nativo • Inglês Intermediário",
    institution: "Wizard — módulos W2, W4 e W6 concluídos; cursando W8",
  },
] as const;
