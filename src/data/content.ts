export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  featured?: boolean;
  label?: string;
};

export const profile = {
  name: "Peter Victor D. Dawis",
  shortName: "PVD",
  eyebrow: "IT student / builder / documenter",
  intro:
    "I turn messy requirements into clear documentation and reliable, user-centered software.",
  detail:
    "A BS Information Technology student at Bukidnon State University positioning for technical writing, software QA, technical project management, and product management roles.",
  email: "pvdawis@gmail.com",
  github: "https://github.com/PTE050305",
  linkedin: "https://linkedin.com/in/peter-victor-dawis-846889408",
  stats: [
    ["03", "yrs student leadership"],
    ["04", "th year BSIT"],
    ["05", "projects on GitHub"],
  ],
  roles: ["Technical Writer", "Project Manager", "QA Tester", "Student Leader"],
};

export const projects: Project[] = [
  {
    title: "OncoCare",
    description:
      "A DenseNet121-based breast cancer detection system with a web dashboard. I led the technical writing and documentation.",
    tech: ["Python", "DenseNet121", "Web dashboard"],
    href: "https://github.com/PTE050305",
    featured: true,
    label: "Capstone",
  },
  {
    title: "Flying-bee",
    description: "A focused game project exploring interaction, rules, and feedback.",
    tech: ["C#", "Game development"],
    href: "https://github.com/PTE050305/Flying-bee",
  },
  {
    title: "Job Order Management",
    description: "A workflow for tracking requests, assignments, and job order progress.",
    tech: ["PHP", "MySQL", "CRUD"],
    href: "https://github.com/PTE050305/Job_order_management",
  },
  {
    title: "ShelfMate",
    description: "An inventory concept designed around discoverability and everyday use.",
    tech: ["Web", "Database", "UX"],
    href: "https://github.com/PTE050305/ShelfMate",
  },
  {
    title: "BarangayMed",
    description: "A community health information system for more organized records.",
    tech: ["Web app", "Records", "Research"],
    href: "https://github.com/PTE050305/BarangayMed",
  },
  {
    title: "MediQueue",
    description: "A queueing flow that makes waiting-room operations easier to follow.",
    tech: ["Mobile", "Workflow", "QA"],
    href: "https://github.com/PTE050305/MediQueue",
  },
];

export const journey = [
  ["01", "First year", "Foundations", "C, Java, and the logic behind dependable systems."],
  ["02", "Second year", "Building", "Web and mobile systems shaped my product thinking."],
  ["03", "Third year", "Leadership", "Technical Officer and student representative roles."],
  ["04", "Fourth year", "Direction", "Capstone work, documentation, and quality assurance."],
];

export const stack = [
  ["write", "Technical writing", "Requirements, user stories, API notes, and project documentation."],
  ["test", "Software QA", "Test cases, acceptance criteria, exploratory testing, and bug reports."],
  ["ship", "Project delivery", "Agile planning, coordination, prioritization, and clear handoffs."],
  ["learn", "Tools & tech", "GitHub, Java, C, Python, PHP, SQL, and modern web workflows."],
];

export const certifications = [
  ["2025", "Academic and project-based practice", "Documentation, system analysis, and software testing."],
  ["ongoing", "Continuous learning", "Building a practical foundation for technology roles."],
];

export const leadership = [
  ["Technical Officer", "Student body organization", "Kept technical work moving and made information easier to access."],
  ["Student Representative", "Bukidnon State University", "Connected student needs with organized, actionable communication."],
  ["Public Relations Officer", "Student body organization", "Translated updates into clear messages for a wider community."],
];
