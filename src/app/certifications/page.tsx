import { SiteChrome } from "@/components/layout/SiteChrome";
import { certifications } from "@/data/content";
import Image from "next/image";

export default function CertificationsPage() {
  return (
    <SiteChrome>
      <main>
        <div className="wrap page-hero">
          <div className="kicker">06 — certifications</div>
          <h1>always in progress.</h1>
          <p>_</p>
        </div>
        <section className="section">
          <div className="wrap">
            <div className="certificate-grid">
              {certifications.map((certification) => (
                <article className="certificate-card" key={certification.file}>
                  <div className="certificate-preview">
                    <Image
                      src={certification.file}
                      title={`${certification.title} preview`}
                      alt={`${certification.title} from ${certification.issuer}`}
                      fill
                      sizes="(max-width: 720px) 100vw, 30vw"
                    />
                  </div>
                  <div className="certificate-info">
                    <div>
                      <h2>{certification.title}</h2>
                      <p>{certification.issuer}</p>
                    </div>
                    <a
                      className="button"
                      href={certification.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      open certificate
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
