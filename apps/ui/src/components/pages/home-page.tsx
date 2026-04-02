import { HealthResponseSchema } from "@repo/types";

import { StatusBadge } from "../features/status-badge";
import { Eyebrow } from "../ui/eyebrow";
import { InfoCard } from "../ui/info-card";
import { PageShell } from "../ui/page-shell";
import { SurfaceCard } from "../ui/surface-card";

const sampleContract = HealthResponseSchema.parse({
  status: "ok",
  timestamp: new Date("2026-03-30T00:00:00.000Z").toISOString(),
});

const stackItems = [
  {
    title: "UI",
    body: "Next.js App Router, React, TypeScript, and shared contracts.",
  },
  {
    title: "API",
    body: (
      <>
        Express REST app with a versioned health route at
        <code> /api/v1/health</code>.
      </>
    ),
  },
  {
    title: "Contracts",
    body: (
      <>
        Hand-authored TypeScript and <code>zod</code> schemas shared across the
        monorepo.
      </>
    ),
  },
] as const;

export function HomePage() {
  return (
    <PageShell>
      <section className="section-stack">
        <Eyebrow>React Application Bootstrap</Eyebrow>

        <SurfaceCard className="hero-surface">
          <div className="split-layout split-layout-hero">
            <div className="hero-copy">
              <h1>Monorepo foundation, now with real apps.</h1>
              <p>
                Phase 2 scaffolds a deployable Next.js UI and an Express REST
                API on top of the shared workspace. Shared contracts live in
                <code> packages/types </code>
                and are already wired into both applications.
              </p>
            </div>

            <aside className="stack-column">
              <StatusBadge label="Shared health contract ready" />

              <InfoCard title="Starter contract">
                <p>
                  <code>{JSON.stringify(sampleContract, null, 2)}</code>
                </p>
              </InfoCard>

              <InfoCard title="Next step">
                <p>
                  Add Prisma, PostgreSQL, and test layers on top of this
                  scaffold in the next phases.
                </p>
              </InfoCard>
            </aside>
          </div>

          <div className="card-grid">
            {stackItems.map((item) => (
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
