import type { SiteRouteKey, StaticPageContent } from "@repo/types";

import { ContactFunnel } from "../features/contact-funnel";
import { ActionLink } from "../ui/action-link";
import { Eyebrow } from "../ui/eyebrow";
import { InfoCard } from "../ui/info-card";
import { PageShell } from "../ui/page-shell";
import { SurfaceCard } from "../ui/surface-card";

type StaticContentPageProps = {
  content: StaticPageContent;
  pageKey: SiteRouteKey;
};

export function StaticContentPage({
  content,
  pageKey,
}: StaticContentPageProps) {
  return (
    <PageShell>
      <section className="section-stack">
        <Eyebrow>{content.hero.eyebrow}</Eyebrow>

        <SurfaceCard className="hero-surface">
          <div className="split-layout split-layout-hero">
            <div className="hero-copy">
              <h1>{content.hero.title}</h1>
              <p>{content.hero.description}</p>
              <div className="action-link-row">
                {content.hero.primaryAction ? (
                  <ActionLink
                    href={content.hero.primaryAction.href}
                    label={content.hero.primaryAction.label}
                  />
                ) : null}
                {content.hero.secondaryAction ? (
                  <ActionLink
                    href={content.hero.secondaryAction.href}
                    label={content.hero.secondaryAction.label}
                    tone="secondary"
                  />
                ) : null}
              </div>
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

        <ContactFunnel pageKey={pageKey} />
      </section>
    </PageShell>
  );
}
