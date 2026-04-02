import { ActionLink } from "../ui/action-link";
import { SurfaceCard } from "../ui/surface-card";

type ContactFunnelKey = "home" | "about" | "punjabiSchool" | "contact";

type ContactFunnelProps = {
  pageKey: ContactFunnelKey;
};

const funnelCopy: Record<
  ContactFunnelKey,
  {
    title: string;
    body: string;
    primaryAction: { href: string; label: string };
    secondaryAction?: { href: string; label: string };
  }
> = {
  home: {
    title: "Follow the main contact path",
    body: "Use Home to orient, explore About or Punjabi School if needed, and move into Contact when you are ready to ask a question or reach out.",
    primaryAction: {
      href: "/contact",
      label: "Go to Contact",
    },
    secondaryAction: {
      href: "/about",
      label: "Start with About",
    },
  },
  about: {
    title: "Ready for the next step?",
    body: "The About page should build trust first, then guide action-oriented visitors into Contact without introducing a competing inquiry path.",
    primaryAction: {
      href: "/contact",
      label: "Contact the Gurudwara",
    },
    secondaryAction: {
      href: "/punjabi-school",
      label: "Explore Punjabi School",
    },
  },
  punjabiSchool: {
    title: "Turn interest into contact",
    body: "Punjabi School stays informational in the MVP, so interested families should always be routed into Contact for follow-up.",
    primaryAction: {
      href: "/contact",
      label: "Ask about Punjabi School",
    },
    secondaryAction: {
      href: "/about",
      label: "Read About the Gurudwara",
    },
  },
  contact: {
    title: "You are at the destination page",
    body: "Contact is the terminal action surface for the MVP, absorbing general inquiries, join intent, and Punjabi School follow-up in one place.",
    primaryAction: {
      href: "/contact",
      label: "Review contact content",
    },
    secondaryAction: {
      href: "/",
      label: "Back to Home",
    },
  },
};

export function ContactFunnel({ pageKey }: ContactFunnelProps) {
  const content = funnelCopy[pageKey];

  return (
    <SurfaceCard className="contact-funnel-card" tone="soft">
      <div className="stack-column">
        <h2 className="card-title">{content.title}</h2>
        <p className="contact-funnel-copy">{content.body}</p>
        <div className="action-link-row">
          <ActionLink {...content.primaryAction} />
          {content.secondaryAction ? (
            <ActionLink {...content.secondaryAction} tone="secondary" />
          ) : null}
        </div>
      </div>
    </SurfaceCard>
  );
}
