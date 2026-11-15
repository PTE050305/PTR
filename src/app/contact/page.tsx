import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { profile } from "@/data/content";

const contacts = [
  {
    label: "Gmail",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/peter-victor-dawis-846889408",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/PTE050305",
    href: profile.github,
    icon: FaGithub,
  },
];

export default function ContactPage() {
  return (
    <SiteChrome>
      <main>
        <div className="wrap page-hero">
          <div className="kicker">07 — contact</div>
          <h1>let&apos;s connect.</h1>
          <p>Find me through any of these channels.</p>
        </div>
        <section className="section">
          <div className="wrap">
            <div className="contact-links">
              {contacts.map(({ label, value, href, icon: Icon }) => (
                <a className="contact-link" href={href} target={label === "Gmail" ? undefined : "_blank"} rel={label === "Gmail" ? undefined : "noreferrer"} key={label}>
                  <span className="contact-link-icon" aria-hidden="true"><Icon size={18} /></span>
                  <span>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
