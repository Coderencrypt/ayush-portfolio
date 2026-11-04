/**
 * All portfolio copy and data lives here so sections stay presentational.
 * Edit this file to update projects, case studies, skills and links.
 */

export const profile = {
  name: "Ayush Dubey",
  firstName: "Ayush",
  role: "Frontend Engineer",
  secondaryRole: "Product Design Enthusiast",
  education: {
    degree: "B.Tech, Computer Science Engineering",
    school: "Parul University",
  },
  availability: "Open to UI / Frontend Engineer Opportunities",
  links: {
    github: "https://github.com/Coderencrypt",
    githubHandle: "Coderencrypt",
    linkedin: "https://linkedin.com/in/ayush-dubey-1348ay/",
    linkedinHandle: "ayush-dubey-1348ay",
  },
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "case-studies", label: "Case Studies" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type NavId = (typeof navItems)[number]["id"];

export const aboutFacts = [
  {
    title: "Education",
    body: "B.Tech, Computer Science Engineering at Parul University.",
  },
  {
    title: "Engineering",
    body: "Building responsive, accessible interfaces with React, TypeScript and Tailwind CSS.",
  },
  {
    title: "Design",
    body: "Exploring UI/UX — layout, typography, interaction and the systems that hold them together.",
  },
] as const;

export type PreviewKind = "builder" | "interview" | "simulator";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  stack: string[];
  preview: PreviewKind;
  github: string;
  live?: string;
  caseStudyHref: string;
};

// Previews are illustrative mockups until real screenshots are provided.
export const projects: Project[] = [
  {
    slug: "genweb",
    title: "Genweb.ai",
    tagline: "AI Website Builder",
    summary:
      "An AI-powered website builder with a React-based interface, dashboard, and pricing experience.",
    category: "AI · Web App",
    stack: ["React", "Vite", "Tailwind CSS", "Express", "MongoDB"],
    preview: "builder",
    github: "https://github.com/Coderencrypt/WebsiteBuilder.ai",
    caseStudyHref: "#case-studies",
  },
  {
    slug: "codeconnect",
    title: "CodeConnect",
    tagline: "Online Interview Platform",
    summary:
      "A real-time online interview platform built using the MERN stack, WebRTC, and Socket.io.",
    category: "Real-time · MERN",
    stack: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io"],
    preview: "interview",
    github: "https://github.com/Coderencrypt/CodeConnect",
    live: "https://codeconnect-1-h9vi.onrender.com",
    caseStudyHref: "#case-studies",
  },
  {
    slug: "ai-interview-simulator",
    title: "AI Interview Simulator",
    tagline: "Mock Interview Practice",
    summary:
      "An AI-powered mock interview application designed to help candidates practice interviews and receive feedback.",
    category: "AI · Practice Tool",
    stack: ["React", "Vite", "Python"],
    preview: "simulator",
    github: "https://github.com/Coderencrypt/AI-Interview-Simulator",
    caseStudyHref: "#case-studies",
  },
];

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  label: string;
  problem: string;
  approach: string;
  focus: string[];
};

// Self-initiated concept studies — replace or expand with real work.
export const caseStudies: CaseStudy[] = [
  {
    slug: "b2b-dashboard",
    index: "01",
    title: "Making account data scannable for busy B2B teams",
    label: "Concept · Dashboard UX",
    problem: "Dense account tables make it hard to see which accounts need attention right now.",
    approach:
      "Restructured the layout around priority signals, progressive disclosure and filters that stay visible while scrolling.",
    focus: ["Information architecture", "Data visualisation", "Responsive tables"],
  },
  {
    slug: "onboarding",
    index: "02",
    title: "Rethinking SaaS onboarding as a guided first win",
    label: "Concept · Onboarding Flow",
    problem:
      "Long setup forms ask for everything up front, before users understand the product's value.",
    approach:
      "Split setup into short, skippable steps with inline guidance and a clear progress indicator.",
    focus: ["User flows", "Microcopy", "Prototyping"],
  },
  {
    slug: "accessible-forms",
    index: "03",
    title: "Accessible form patterns that reduce errors",
    label: "Concept · Accessibility",
    problem:
      "Validation that only appears on submit leaves keyboard and screen‑reader users guessing.",
    approach:
      "Designed inline, announced validation with visible focus states, clear labels and colour‑independent cues.",
    focus: ["WCAG", "Interaction design", "Semantic HTML"],
  },
];

export const skillGroups = [
  {
    title: "Engineering",
    description: "Building fast, accessible interfaces.",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Design",
    description: "Shaping how products look and feel.",
    items: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Typography", "Accessibility"],
  },
  {
    title: "Tooling",
    description: "Shipping with a clean workflow.",
    items: ["Git & GitHub", "Vite", "Framer Motion", "VS Code", "Chrome DevTools", "npm"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Start with the people and the problem — goals, constraints and the job to be done.",
  },
  {
    step: "02",
    title: "Define",
    description:
      "Map flows and information architecture so the structure is right before the pixels.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Wireframe, then refine visuals with a consistent system of type, spacing and colour.",
  },
  {
    step: "04",
    title: "Build",
    description: "Translate designs into reusable, typed, accessible components that scale.",
  },
  {
    step: "05",
    title: "Refine",
    description: "Test, gather feedback and polish the details — motion, states and edge cases.",
  },
] as const;
