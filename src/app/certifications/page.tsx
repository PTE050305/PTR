import { SiteChrome } from "@/components/layout/SiteChrome";
import { certifications } from "@/data/content";

export default function CertificationsPage() {
  return (
    <SiteChrome>
      <main>
        <div className="wrap page-hero">
          <div className="kicker">06 — certifications</div>
          <h1>always in progress.</h1>
          <p>My strongest credentials are built through repeated practice: writing, testing, shipping, and learning in public.</p>
        </div>
        <section className="section">
          <div className="wrap">
            {certifications.length > 0 ? (
              <div className="timeline">
                {certifications.map(([year, title, summary]) => (
                  <div className="timeline-row" key={title}>
                    <span className="year">{year}</span>
                    <strong>{title}</strong>
                    <span>{summary}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span className="kicker">coming soon</span>
                <h2>certifications will be listed here.</h2>
                <p>No certifications have been added yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
