import { HealthResponseSchema } from "@repo/types";

import { homePageContent } from "../../content/pages";
import { StatusBadge } from "../features/status-badge";
import { Eyebrow } from "../ui/eyebrow";
import { InfoCard } from "../ui/info-card";
import { PageShell } from "../ui/page-shell";
import { SurfaceCard } from "../ui/surface-card";

const sampleContract = HealthResponseSchema.parse({
  status: "ok",
  timestamp: homePageContent.hero.contractTimestamp,
});

export function HomePage() {
  return (
    <PageShell>
      <section className="section-stack">
        <Eyebrow>{homePageContent.hero.eyebrow}</Eyebrow>

        <SurfaceCard className="hero-surface">
          <div className="split-layout split-layout-hero">
            <div className="hero-copy">
              <h1>{homePageContent.hero.title}</h1>
              <p>{homePageContent.hero.description}</p>
            </div>

            <aside className="stack-column">
              <StatusBadge label={homePageContent.hero.statusLabel} />

              <InfoCard title={homePageContent.hero.contractCardTitle}>
                <p>
                  <code>{JSON.stringify(sampleContract, null, 2)}</code>
                </p>
              </InfoCard>

              <InfoCard title={homePageContent.hero.nextStepTitle}>
                <p>{homePageContent.hero.nextStepBody}</p>
              </InfoCard>
            </aside>
          </div>

          <div className="card-grid">
            {homePageContent.foundationCards.map((item) => (
              <InfoCard key={item.title} title={item.title} tone="muted">
                <p>{item.body}</p>
              </InfoCard>
            ))}
          </div>
        </SurfaceCard>
      </section>
    </PageShell>
  );
}
