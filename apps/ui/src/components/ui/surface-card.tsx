import type { HTMLAttributes, ReactNode } from "react";

type SurfaceTone = "default" | "soft" | "muted";

type SurfaceCardProps = {
  children: ReactNode;
  tone?: SurfaceTone;
} & HTMLAttributes<HTMLElement>;

const toneClassName: Record<SurfaceTone, string> = {
  default: "surface-card",
  soft: "surface-card surface-card-soft",
  muted: "surface-card surface-card-muted",
};

export function SurfaceCard({
  children,
  className,
  tone = "default",
  ...props
}: SurfaceCardProps) {
  return (
    <article
      className={[toneClassName[tone], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </article>
  );
}
