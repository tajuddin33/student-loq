export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: 'SaaS & Web' | 'Mobile Apps' | 'Design Systems' | 'Fintech';
  year: string;
  client: string;
  role: string;
  duration: string;
  image: string;
  overview: string;
  problem: string;
  researchInsights: string[];
  solution: string;
  keyFeatures: { title: string; description: string }[];
  metrics: { value: string; label: string; context: string }[];
  designTokens: {
    primaryColor: string;
    typography: string;
    spacing: string;
    radius: string;
  };
}

export interface Specialty {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  coreSkills: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  summary: string;
  activities: string[];
  outcome: string;
}

export const PORTFOLIO_INFO = {
  name: 'Tajuddin',
  tagline: 'Designing intuitive experiences',
  role: 'UI/UX & Product Designer',
  location: 'Available Worldwide · Remote',
  email: 'tajuddin.design@example.com',
  bio: 'Specializing in digital product design, complex software workflows, accessible design systems, and mobile interactions. Guided by empirical user research, rigorous typographic hierarchy, and craftsmanship in every interaction state.',
  approachOverview: 'Good design eliminates cognitive friction. My methodology bridges qualitative user discovery with systematic design engineering—translating ambiguous user needs into clear, scalable, and delightful interfaces that drive measurable outcomes.',
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'product-design',
    number: '01',
    title: 'Product & SaaS Interface Design',
    tagline: 'Transforming complex data and operational density into frictionless software.',
    description: 'Specializing in enterprise dashboards, high-volume workflow tools, and SaaS platforms. I organize dense multi-step workflows into intuitive mental models with zero cognitive fatigue.',
    coreSkills: [
      'Information Architecture',
      'Complex Workflow Simplification',
      'Data Visualization & Tabular UI',
      'Cognitive Load Optimization',
      'B2B / B2C User Journeys',
    ],
    deliverables: [
      'Interactive Figma Prototypes',
      'End-to-End User Flows',
      'Wireframes & Architecture Maps',
      'Production UI Specifications',
    ],
  },
  {
    id: 'design-systems',
    number: '02',
    title: 'Design Systems & Token Architecture',
    tagline: 'Scalable component libraries unified by semantic design tokens.',
    description: 'Architecting cohesive design systems that bridge Figma and production frontends. Focused on strict semantic tokens, accessible color math, nested radius scales, and zero-redundancy component modularity.',
    coreSkills: [
      'Design Token Architecture (W3C standard)',
      'Figma Auto-Layout & Variables',
      'Multi-Brand Scalability',
      'Component State Matrix (Hover, Active, Error, Empty)',
      'Cross-Functional Developer Handoff',
    ],
    deliverables: [
      'Comprehensive Component Libraries',
      'Design Token JSON / CSS Schemas',
      'Pattern & Usage Guidelines',
      'Accessibility Audit Reports (WCAG AA)',
    ],
  },
  {
    id: 'mobile-ux',
    number: '03',
    title: 'Mobile Interaction & Ergonomics',
    tagline: 'Native iOS & Android ergonomics optimized for one-handed reach.',
    description: 'Crafting responsive mobile applications with obsessive attention to thumb-zone reachability, haptic cues, fluid gestures, and instant feedback loops under 200ms.',
    coreSkills: [
      'iOS Human Interface Guidelines (HIG)',
      'Android Material 3 Standards',
      'Thumb-Zone Reachability Mapping',
      'Micro-Transitions & Spatial Motion',
      'Offline-First Fallback UX',
    ],
    deliverables: [
      'Native Mobile Screen Flows',
      'High-Fidelity Touch Prototypes',
      'Gesture Choreography Specs',
      'Edge Case & Error Recovery States',
    ],
  },
  {
    id: 'ux-research',
    number: '04',
    title: 'Usability Research & Rapid Prototyping',
    tagline: 'De-risking product hypotheses with empirical user evidence.',
    description: 'Grounding design decisions in structured qualitative interviews, moderated usability sessions, heuristic audits, and rapid interactive testing before engineering commit.',
    coreSkills: [
      'Moderated & Unmoderated Usability Testing',
      'Heuristic Evaluations (Nielsen Norman)',
      'Jobs-To-Be-Done (JTBD) Mapping',
      'Card Sorting & Tree Testing',
      'A/B Concept Testing & Task Completion Metrics',
    ],
    deliverables: [
      'Usability Test Synthesis Reports',
      'User Journey & Empathy Maps',
      'Clickable Validation Prototypes',
      'Actionable UX Improvement Backlogs',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'Discover & Understand',
    summary: 'Deep dive into stakeholder goals, user mental models, and operational constraints.',
    activities: [
      'User interviews & JTBD analysis',
      'Competitive & heuristic landscape audit',
      'Persona & friction point mapping',
      'Success metric definition (task success, time-to-value)',
    ],
    outcome: 'Clear problem framing, design principles, and validated requirements.',
  },
  {
    number: '02',
    phase: 'Structure & Wireframe',
    summary: 'Architecting information hierarchy and evaluating navigation concepts low-fidelity.',
    activities: [
      'Information architecture & site maps',
      'Low-fidelity wireframing & task flows',
      'Content modeling & layout stress-testing',
      'Rapid feedback loops with product managers',
    ],
    outcome: 'Structural validation without premature visual bias.',
  },
  {
    number: '03',
    phase: 'Refine & Craft High-Fidelity UI',
    summary: 'Applying typography math, token-based color palettes, and micro-interaction states.',
    activities: [
      'Systematic type scale & 4/8pt spacing grid',
      'Accessible contrast check (WCAG AA/AAA)',
      'Interactive prototype assembly',
      'Complete edge case & state design (loading, empty, error)',
    ],
    outcome: 'Production-ready visual designs and interactive prototype.',
  },
  {
    number: '04',
    phase: 'Validate & Deliver',
    summary: 'Usability testing, handoff documentation, and engineering collaboration.',
    activities: [
      'Task-based usability test sessions',
      'Figma-to-code token alignment & spec sheets',
      'Asset export & animation choreography',
      'Design QA review during sprint implementation',
    ],
    outcome: 'Polished shipped product aligned 1:1 with design intent.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-analytics',
    title: 'Apex Analytics',
    tagline: 'Enterprise Telemetry & Incident Observability Platform',
    category: 'SaaS & Web',
    year: '2025',
    client: 'Apex Enterprise Software',
    role: 'Lead UI/UX Designer',
    duration: '4 Months',
    image: '/src/assets/images/case_study_analytics_dashboard_1791858491271.jpg',
    overview: 'Apex Analytics is a mission-critical observability platform used by cloud infrastructure engineers. The redesign overhauled complex metric queries, consolidated fragmented incident logs into a unified timeline, and drastically decreased time-to-detection.',
    problem: 'Engineers struggled with cognitive fatigue during system outages due to disconnected charts, unclear anomaly indicators, and deep nested menus requiring 6+ clicks to locate the root cause.',
    researchInsights: [
      '84% of surveyed SREs prioritize timeline correlation over aggregate vanity totals.',
      'Average incident resolution was delayed 4.2 minutes solely due to navigation friction across disconnected tools.',
      'Users required custom preset views that preserve filter state across multiple monitors.',
    ],
    solution: 'Designed a unified dark-mode command workspace centered around a synchronous multi-metric timeline, intelligent anomaly badges, and zero-latency contextual inspector panels.',
    keyFeatures: [
      {
        title: 'Synchronous Multi-Metric Timeline',
        description: 'Scrubbing any metric chart synchronously highlights telemetry across all correlated system events.',
      },
      {
        title: 'Contextual Node Inspector',
        description: 'Single-click side sheet revealing stack traces, pod health, and error logs without navigating away.',
      },
      {
        title: 'High-Density Tabular Views',
        description: 'Tabular-num alignment, customizable column pinning, and instant keyboard shortcuts for power users.',
      },
    ],
    metrics: [
      { value: '38%', label: 'Reduction in Time-to-Root-Cause', context: 'From 6.8 mins to 4.2 mins average' },
      { value: '+44%', label: 'Daily Active Workflow Efficiency', context: 'Measured across 2,400 beta engineers' },
      { value: '94/100', label: 'System Usability Score (SUS)', context: 'Up from 62/100 on legacy version' },
    ],
    designTokens: {
      primaryColor: '#2563EB (Electric Cobalt)',
      typography: 'Plus Jakarta Sans (Display) + JetBrains Mono (Data)',
      spacing: '4px base / 8px grid hierarchy',
      radius: '8px (Cards) / 6px (Controls)',
    },
  },
  {
    id: 'veloce-health',
    title: 'Veloce Health',
    tagline: 'Patient-First Telehealth & Virtual Consultation Mobile Experience',
    category: 'Mobile Apps',
    year: '2025',
    client: 'Veloce Digital Health Inc.',
    role: 'Senior Product Designer',
    duration: '3 Months',
    image: '/src/assets/images/case_study_mobile_telehealth_1791858492531.jpg',
    overview: 'A native iOS and Android application connecting patients with specialists in under 3 minutes. Built with empathetic ergonomics, high-contrast accessible typography, and one-tap video consultation entry.',
    problem: 'Existing healthcare apps were clinical, intimidating, and cumbersome—plagued by multi-page intake forms that caused a 48% drop-off rate among elderly and anxious patients.',
    researchInsights: [
      'Patients undergoing acute symptoms exhibit severely diminished short-term working memory.',
      'One-handed reachability is paramount as patients frequently hold thermometers, medication, or childcare items.',
      'Status transparency (e.g. "Doctor is reviewing your notes — 2 mins remaining") reduced abandonment by 62%.',
    ],
    solution: 'Engineered a progressive disclosure appointment flow with bottom-sheet ergonomics, clear visual state cards, and conversational intake modules.',
    keyFeatures: [
      {
        title: 'One-Thumb Bottom Sheet Flow',
        description: 'All primary booking selections remain within natural thumb reach on 6.7" screens.',
      },
      {
        title: 'Empathetic Status Tracker',
        description: 'Real-time linear milestone indicators that remove queue anxiety before consultation.',
      },
      {
        title: 'Dynamic Prescription Locker',
        description: 'High-contrast medicine schedule cards with time-stamped dose checkboxes and pharmacy maps.',
      },
    ],
    metrics: [
      { value: '72%', label: 'Increase in Booking Completion', context: 'Drop-off reduced from 48% to 13%' },
      { value: '2.1m', label: 'Average Time from Launch to Doctor', context: 'Industry average is 8.5 minutes' },
      { value: '4.9★', label: 'App Store Rating', context: 'Over 14,000 verified reviews' },
    ],
    designTokens: {
      primaryColor: '#0D9488 (Clinical Teal) & #2563EB (Action)',
      typography: 'Plus Jakarta Sans (Generous 1.6 line height)',
      spacing: '8px base rhythm with 24px comfortable gutters',
      radius: '16px (Cards) / 12px (Interactive Buttons)',
    },
  },
  {
    id: 'prism-design-system',
    title: 'Prism System',
    tagline: 'Multi-Product Token Architecture & Enterprise Component Library',
    category: 'Design Systems',
    year: '2024',
    client: 'Global FinTech Collective',
    role: 'Design Systems Architect',
    duration: '6 Months',
    image: '/src/assets/images/case_study_design_system_1791858492739.jpg',
    overview: 'Prism is a unified design system supporting 6 digital products and 40+ engineering contributors. Created to eliminate UI inconsistency, accelerate sprint velocity, and ensure strict WCAG 2.1 AA compliance.',
    problem: 'Inconsistent button heights, 14 conflicting shades of gray across codebases, and duplicate engineering efforts were delaying feature shipping by an estimated 22 business days per quarter.',
    researchInsights: [
      'Component fragmentation stemmed from designers overriding detached Figma components.',
      'Developers lacked clear semantic token names (`color-surface-subtle` vs raw hex `#1a1a1a`).',
      'Accessibility contrast failures occurred in 31% of legacy form inputs during user testing.',
    ],
    solution: 'Formulated a comprehensive design token hierarchy with strict layer separation (Global -> Semantic -> Component) and built 45 production components with zero breaking regressions.',
    keyFeatures: [
      {
        title: '3-Tier Semantic Token Pipeline',
        description: 'Tokens exported automatically via Style Dictionary into CSS variables and TypeScript constants.',
      },
      {
        title: 'State Exhaustion Matrix',
        description: 'Every component explicitly defines default, hover, active, focused, disabled, and loading states.',
      },
      {
        title: 'Built-in Accessibility Guardrails',
        description: '4.5:1 text contrast and 3:1 graphical element contrast mathematically verified at token level.',
      },
    ],
    metrics: [
      { value: '45+', label: 'Production Components Documented', context: '100% test coverage across Figma & React' },
      { value: '3.5x', label: 'Faster Feature Design & Handoff', context: 'Measured across 8 sprint cycles' },
      { value: '0', label: 'WCAG AA Accessibility Violations', context: 'Audited across all 6 core company products' },
    ],
    designTokens: {
      primaryColor: '#2563EB (Core Brand) & #475569 (Structural Neutral)',
      typography: 'Modular type scale (1.250 Major Third)',
      spacing: 'Strict 4px/8px geometric progression',
      radius: '4px, 8px, 12px, 16px mathematically nested',
    },
  },
  {
    id: 'loom-wealth',
    title: 'Loom Wealth',
    tagline: 'Precision Portfolio Rebalancing & Wealth Management Interface',
    category: 'Fintech',
    year: '2024',
    client: 'Loom Capital Management',
    role: 'Lead UI/UX Designer',
    duration: '3.5 Months',
    image: '/src/assets/images/case_study_finance_dashboard_1791858493897.jpg',
    overview: 'Loom Wealth balances intricate financial asset modeling with modern visual calm. The interface empowers wealth managers to simulate tax-efficient rebalancing strategies across client accounts.',
    problem: 'Portfolio managers were using dense spreadsheet exports and antiquated legacy software, making tax-loss harvesting simulations slow, error-prone, and difficult to present to clients.',
    researchInsights: [
      'Wealth managers need to compare "Current vs. Proposed" asset allocations side-by-side in real time.',
      'Micro-changes in percentages must update visual charts in under 100ms without full-screen page reloads.',
      'Clients required an elegant, jargon-free summary export for quarterly performance meetings.',
    ],
    solution: 'Designed an interactive scenario sandbox with real-time donut allocation delta previews, tabular asset drill-downs with monospace figures, and one-click PDF tear-sheet generation.',
    keyFeatures: [
      {
        title: 'Real-Time Allocation Sandbox',
        description: 'Sliders and direct tabular inputs that recalculate risk exposure and projected yields on the fly.',
      },
      {
        title: 'Monospace Tabular Rigor',
        description: 'All values aligned with tabular numerals (`tabular-nums`) for immediate visual comparison down columns.',
      },
      {
        title: 'Dual Persona Modes',
        description: 'Instant toggle between "Advisor Deep Dive" (dense telemetry) and "Client Presentation Mode" (clean high-level visual).',
      },
    ],
    metrics: [
      { value: '$420M+', label: 'Assets Managed Through Interface', context: 'During first 6 months post-deployment' },
      { value: '65%', label: 'Reduction in Simulation Prep Time', context: 'From 45 minutes down to 15 minutes' },
      { value: '98%', label: 'Advisor Adoption Rate', context: 'Zero churn among piloted wealth advisors' },
    ],
    designTokens: {
      primaryColor: '#2563EB (Accent) & #1E293B (Deep Slate)',
      typography: 'Plus Jakarta Sans (UI) + JetBrains Mono (Financials)',
      spacing: '6px micro-grid / 12px card interiors',
      radius: '10px (Containers) / 6px (Badges & Buttons)',
    },
  },
];
