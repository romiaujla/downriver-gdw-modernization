import type { HTMLAttributes, ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

export function Eyebrow({ children, className, ...props }: EyebrowProps) {
  return (
    <p className={["eyebrow", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </p>
  );
}
