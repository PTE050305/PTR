import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { journey, leadership, profile, projects, stack } from "@/data/content";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return <div className="section-heading"><span className="section-index">{index}</span><h2>— {title}</h2></div>;
}

export function Hero() {
  return <section className="hero"><div className="wrap hero-grid"><div>
    <div className="kicker">{profile.eyebrow}</div>
    <h1>{profile.name}</h1>
    <p className="hero-intro">{profile.intro}</p>
    <p className="hero-detail">{profile.detail}</p>
    <div className="hero-links">
      <a href={profile.github} target="_blank" rel="noreferrer">github ↗</a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin ↗</a>
      <a href={`mailto:${profile.email}`}>email ↗</a>
    </div>
    <div className="hero-actions"><a className="button button-primary" href="/resume.pdf" download>download resume <ArrowUpRight size={14} /></a><Link className="button" href="/contact">get in touch <ArrowUpRight size={14} /></Link></div>
  </div><div><Image className="portrait" src="/profile-placeholder.svg" alt="Profile image placeholder" width={164} height={164} priority /><div className="stats">{profile.stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></div></section>;
}

export function AboutPreview() {
  return <section className="section" id="about"><div className="wrap"><SectionHeading index="01" title="about" /><div className="about-copy"><p>I&apos;m Peter Victor Dawis, a Bachelor of Science in Information Technology student at Bukidnon State University. My academic work spans console applications, games, web systems, and mobile concepts.</p><p>Three years in student leadership — as Technical Officer, Student Representative, and Public Relations Officer — taught me to make complex work understandable, organized, and useful to a team.</p><p>I&apos;m interested in the space where technology, people, and process meet: documentation that removes friction, QA that protects trust, and product work that keeps the user in view.</p></div><div className="role-list">{profile.roles.map((role) => <span className="chip" key={role}>{role}</span>)}</div></div></section>;
}

export function ProjectsPreview({ full = false }: { full?: boolean }) {
  const list = full ? projects : projects.slice(0, 4);
  return <section className="section" id="projects"><div className="wrap"><div className="section-topline"><SectionHeading index="02" title="projects" /><Link className="text-link" href="/projects">{full ? "back home ←" : "all projects →"}</Link></div><div className="project-list">{list.map((project) => <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.title}><div><div className="project-title">{project.title} {project.label && <span className="project-label">{project.label}</span>}</div><div className="project-description">{project.description}</div><div className="project-meta">{project.tech.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div></div><span className="project-arrow">↗</span></a>)}</div></div></section>;
}

export function JourneyPreview({ full = false }: { full?: boolean }) {
  return <section className="section" id="journey"><div className="wrap"><div className="section-topline"><SectionHeading index="03" title="journey" /><Link className="text-link" href="/journey">{full ? "back home ←" : "full history →"}</Link></div><div className="timeline">{journey.map(([year, title, context, summary]) => <div className="timeline-row" key={year}><span className="year">{year}</span><strong>{title}</strong><span>{context} — {summary}</span></div>)}</div></div></section>;
}

export function StackPreview({ full = false }: { full?: boolean }) {
  return <section className="section" id="stack"><div className="wrap"><div className="section-topline"><SectionHeading index="04" title="stack" /><Link className="text-link" href="/stack">{full ? "back home ←" : "what I use →"}</Link></div><div className="grid-list">{stack.map(([num, title, description]) => <div className="grid-item" key={title}><span className="item-num">{num}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>;
}

export function LeadershipPreview() {
  return <section className="section" id="leadership"><div className="wrap"><div className="section-topline"><SectionHeading index="05" title="leadership" /><Link className="text-link" href="/leadership">see the work →</Link></div><div className="timeline">{leadership.map(([title, context, summary]) => <div className="timeline-row" key={title}><span className="year">role</span><strong>{title}</strong><span>{context} — {summary}</span></div>)}</div></div></section>;
}

export function ContactCta() {
  return <section className="section"><div className="wrap cta"><h2>good work starts with a clear conversation.</h2><Link className="button button-primary" href="/contact">say hello <ArrowUpRight size={14} /></Link></div></section>;
}
