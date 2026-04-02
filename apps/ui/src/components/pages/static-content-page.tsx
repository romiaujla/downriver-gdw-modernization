import type { StaticPageContent } from "@repo/types";

import { Eyebrow } from "../ui/eyebrow";
import { InfoCard } from "../ui/info-card";
import { PageShell } from "../ui/page-shell";
import { SurfaceCard } from "../ui/surface-card";

type StaticContentPageProps = {
  content: StaticPageContent;
};

export function StaticContentPage({ content }: StaticContentPageProps) {
  return (
    <PageShell>
      <section className="section-stack">
        <Eyebrow>{content.hero.eyebrow}</Eyebrow>

        <SurfaceCard className="hero-surface">
          <div className="split-layout split-layout-hero">
            <div className="hero-copy">
              <h1>{content.hero.title}</h1>
              <p>{content.hero.description}</p>
            </div>
          </div>

          <div className="card-grid">
            {content.sections.map((section) => (
              <InfoCard key={section.title} title={section.title} tone="muted">
                <div className="stack-column">
                  {section.intro ? <p>{section.intro}</p> : null}

                  {section.items.map((item) => (
                    <div key={item.title} className="stack-column">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
            ))}
          </div>
        </SurfaceCard>
      </section>
    </PageShell>
  );
}
