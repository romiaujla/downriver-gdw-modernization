import Link from "next/link";

type ActionLinkProps = {
  href: string;
  label: string;
  tone?: "primary" | "secondary";
};

export function ActionLink({
  href,
  label,
  tone = "primary",
}: ActionLinkProps) {
  return (
    <Link
      className={[
        "action-link",
        tone === "secondary" ? "action-link-secondary" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
    >
      {label}
    </Link>
  );
}
