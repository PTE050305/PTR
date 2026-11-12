export type HeroStat = {
  value: number;
  display: string;
  label: string;
};

export type HeroBadge = {
  text: string;
  position: "top" | "bottom";
  accent?: boolean;
};

export const hero = {
  eyebrow: "OPEN TO OPPORTUNITIES",
  eyebrowDetail: "IT STUDENT & ASPIRING TECH PROFESSIONAL",
  headlineParts: [
    { text: "Building better", accent: false },
    { text: "digital experiences.", accent: true },
  ],
  introLead: "Hi, I'm",
  introName: "Peter Victor D. Dawis.",
  description:
    "Ensuring product quality through structured project delivery. Specialized in Agile management, QA testing, and technical documentation.",
  buttons: {
    resume: "Download résumé",
    contact: "Get in touch",
  },
  stats: [
    { value: 4, display: "04", label: "Years of learning" },
    { value: 3, display: "03", label: "Years in student leadership" },
    { value: 6, display: "06", label: "Featured academic projects" },
  ] satisfies HeroStat[],
  badges: [
    { text: "✦ DETAIL-ORIENTED", position: "top" },
    { text: "DESIGN · BUILD · IMPROVE", position: "bottom", accent: true },
  ] satisfies HeroBadge[],
  skills: [
    "TECHNICAL DOCUMENTATION",
    "SOFTWARE QUALITY",
    "PROJECT COORDINATION",
    "PRODUCT THINKING",
  ],
  photoUrl: "/profile-pic.jfif",
} as const;
