import Link from "next/link";
import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} Peter Victor D. Dawis</span>
        <span className="footer-links">
          <a href={`mailto:${profile.email}`}>email ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">github ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin ↗</a>
          <Link href="/contact">contact →</Link>
        </span>
      </div>
    </footer>
  );
}
