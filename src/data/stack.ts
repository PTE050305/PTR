export type StackIconKey =
  | "html5"
  | "css3"
  | "javascript"
  | "c"
  | "java"
  | "php"
  | "laravel"
  | "mysql"
  | "database"
  | "documentation"
  | "qa"
  | "coordination"
  | "agile"
  | "communication"
  | "leadership"
  | "requirements"
  | "collaboration";

export type StackItem = {
  label: string;
  icon: StackIconKey;
  color?: string;
  darkColor?: string;
  lightColor?: string;
};

export type StackGroup = {
  id: string;
  number: string;
  title: string;
  description: string;
  items: StackItem[];
};

export const stackGroups: StackGroup[] = [
  {
    id: "write",
    number: "01",
    title: "Technical writing",
    description: "Requirements, user stories, API notes, and project documentation.",
    items: [
      { label: "HTML", icon: "html5", color: "#E34F26" },
      { label: "CSS", icon: "css3", color: "#1572B6" },
      { label: "JavaScript", icon: "javascript", color: "#F7DF1E", lightColor: "#9B8500" },
      { label: "C", icon: "c", color: "#A8B9CC" },
      { label: "Java", icon: "java", color: "#ED8B00" },
      { label: "PHP", icon: "php", color: "#777BB4" },
    ],
  },
  {
    id: "test",
    number: "02",
    title: "Software QA",
    description: "Test cases, acceptance criteria, exploratory testing, and bug reports.",
    items: [
      { label: "Laravel", icon: "laravel", color: "#FF2D20" },
      { label: "MySQL", icon: "mysql", color: "#4479A1" },
      { label: "Database fundamentals", icon: "database" },
    ],
  },
  {
    id: "ship",
    number: "03",
    title: "Project delivery",
    description: "Agile planning, coordination, prioritization, and clear handoffs.",
    items: [
      { label: "Technical documentation", icon: "documentation" },
      { label: "QA fundamentals", icon: "qa" },
      { label: "Project coordination", icon: "coordination" },
      { label: "Agile principles", icon: "agile" },
    ],
  },
  {
    id: "learn",
    number: "04",
    title: "Tools & tech",
    description: "GitHub, Java, C, Python, PHP, SQL, and modern web workflows.",
    items: [
      { label: "Communication", icon: "communication" },
      { label: "Leadership", icon: "leadership" },
      { label: "Requirements analysis", icon: "requirements" },
      { label: "Collaboration", icon: "collaboration" },
    ],
  },
];
