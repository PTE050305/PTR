export type DevelopmentJourney = {
  number: string;
  tag: string;
  title: string;
  description: string;
};

export type LeadershipEntry = {
  years: string;
  role: string;
  description: string;
};

export type Interest = {
  number: string;
  title: string;
};

export const developmentJourney: DevelopmentJourney[] = [
  {
    number: "01",
    tag: "IT fundamentals",
    title: "First Year — Foundations",
    description:
      "C programming, HCI and UI/UX, HTML, CSS, JavaScript, and a console-based POS system.",
  },
  {
    number: "02",
    tag: "Java & PHP",
    title: "Second Year — Programming",
    description:
      "Object-oriented programming, data structures, MySQL, a Java game, PHP job-order monitoring, and networking fundamentals.",
  },
  {
    number: "03",
    tag: "Laravel & documentation",
    title: "Third Year — Applications",
    description:
      "Networking 2, a student-body borrowing system, Laravel multi-tenancy, project coordination, and initial OncoCare requirements.",
  },
  {
    number: "04",
    tag: "Capstone",
    title: "Fourth Year — Technical Leadership",
    description:
      "Lead technical writer and documenter for OncoCare; continued growth in software quality, research, and project coordination.",
  },
];

export const leadership: LeadershipEntry[] = [
  {
    years: "2024–2025",
    role: "Technical Officer",
    description: "Supported technical operations and organizational initiatives.",
  },
  {
    years: "2025–2026",
    role: "Third Year Student Representative",
    description: "Represented student concerns and coordinated communication and participation.",
  },
  {
    years: "2026–2027",
    role: "Public Relations Officer",
    description: "Oversees communication, transparency, announcements, and student engagement.",
  },
];

export const interests: Interest[] = [
  { number: "01", title: "Technical Writing & Documentation" },
  { number: "02", title: "Software Quality Assurance" },
  { number: "03", title: "Technical Project Management" },
  { number: "04", title: "Product Management" },
];
