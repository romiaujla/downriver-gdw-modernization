import { HealthResponseSchema } from "@repo/types";

import { homePageContent } from "../../content/pages";
import { ContactFunnel } from "../features/contact-funnel";
import { ActionLink } from "../ui/action-link";
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
              <div className="action-link-row">
                {homePageContent.hero.primaryAction ? (
                  <ActionLink
                    href={homePageContent.hero.primaryAction.href}
                    label={homePageContent.hero.primaryAction.label}
                  />
                ) : null}
                {homePageContent.hero.secondaryAction ? (
                  <ActionLink
                    href={homePageContent.hero.secondaryAction.href}
                    label={homePageContent.hero.secondaryAction.label}
                    tone="secondary"
                  />
                ) : null}
              </div>
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
            {homePageContent.quickPathCards.map((item) => (
              <InfoCard key={item.title} title={item.title} tone="muted">
                <p>{item.body}</p>
              </InfoCard>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <div className="stack-column">
            <Eyebrow>Trust-Building Overview</Eyebrow>
            <InfoCard title={homePageContent.trustSection.title} tone="soft">
              <div className="stack-column">
                {homePageContent.trustSection.intro ? (
                  <p>{homePageContent.trustSection.intro}</p>
                ) : null}
                {homePageContent.trustSection.items.map((item) => (
                  <div key={item.title} className="stack-column">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <div className="stack-column">
            <Eyebrow>Homepage Section Guide</Eyebrow>
            <div className="card-grid card-grid-outline">
              {homePageContent.outlineSections.map((section) => (
                <InfoCard key={section.title} title={section.title} tone="soft">
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
          </div>
        </SurfaceCard>

        <ContactFunnel pageKey="home" />
      </section>
    </PageShell>
  );
}
