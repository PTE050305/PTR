import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { leadership, profile, projects } from "@/data/content";
import { Journey } from "./Journey";
import { Stack } from "./Stack";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return <div className="section-heading"><span className="section-index">{index}</span><h2>— {title}</h2></div>;
}

export function AboutPreview() {
  return <section className="section" id="about"><div className="wrap"><SectionHeading index="01" title="about" /><div className="about-copy"><p>I&apos;m Peter Victor Dawis, a Bachelor of Science in Information Technology student at Bukidnon State University. My academic work spans console applications, games, web systems, and mobile concepts.</p><p>Three years in student leadership — as Technical Officer, Student Representative, and Public Relations Officer — taught me to make complex work understandable, organized, and useful to a team.</p><p>I&apos;m interested in the space where technology, people, and process meet: documentation that removes friction, QA that protects trust, and product work that keeps the user in view.</p></div><div className="role-list">{profile.roles.map((role) => <span className="chip" key={role}>{role}</span>)}</div></div></section>;
}

export function ProjectsPreview({ full = false }: { full?: boolean }) {
  const list = full ? projects : projects.slice(0, 4);
  return <section className="section" id="projects"><div className="wrap"><div className="section-topline"><SectionHeading index="02" title="projects" /><Link className="text-link" href="/projects">{full ? "back home ←" : "all projects →"}</Link></div><div className="project-list">{list.map((project) => <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.title}><div><div className="project-title">{project.title} {project.label && <span className="project-label">{project.label}</span>}</div><div className="project-description">{project.description}</div><div className="project-meta">{project.tech.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div></div><span className="project-arrow">↗</span></a>)}</div></div></section>;
}

export function JourneyPreview({ full = false }: { full?: boolean }) {
  return <Journey compact={!full} />;
}

export function StackPreview({ full = false }: { full?: boolean }) {
  return <Stack full={full} />;
}

export function LeadershipPreview() {
  return <section className="section" id="leadership"><div className="wrap"><div className="section-topline"><SectionHeading index="05" title="leadership" /><Link className="text-link" href="/leadership">see the work →</Link></div><div className="timeline">{leadership.map(([title, context, summary]) => <div className="timeline-row" key={title}><span className="year">role</span><strong>{title}</strong><span>{context} — {summary}</span></div>)}</div></div></section>;
}

export function ContactCta() {
  return <section className="section"><div className="wrap cta"><h2>good work starts with a clear conversation.</h2><Link className="button button-primary" href="/contact">say hello <ArrowUpRight size={14} /></Link></div></section>;
}
