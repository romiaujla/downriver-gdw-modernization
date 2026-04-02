import type { HTMLAttributes, ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function PageShell({
  children,
  className,
  ...props
}: PageShellProps) {
  return (
    <main
      className={["page-shell", className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className="page-container">{children}</div>
    </main>
  );
}
