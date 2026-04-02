import type { ReactNode } from "react";

import { SurfaceCard } from "./surface-card";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  tone?: "soft" | "muted";
};

export function InfoCard({
  title,
  children,
  tone = "soft",
}: InfoCardProps) {
  return (
    <SurfaceCard tone={tone}>
      <h2 className="card-title">{title}</h2>
      <div className="card-body">{children}</div>
    </SurfaceCard>
  );
}
