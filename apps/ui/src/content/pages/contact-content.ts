import { StaticPageContentSchema } from "@repo/types";

export const contactPageContent = StaticPageContentSchema.parse({
  hero: {
    eyebrow: "Contact",
    title: "Centralized inquiry content for the MVP contact destination.",
    description:
      "This module seeds the single contact page that should absorb general questions, join intent, and WhatsApp-style outreach for the static MVP.",
    primaryAction: {
      href: "/contact",
      label: "Contact details",
    },
    secondaryAction: {
      href: "/about",
      label: "Learn more first",
    },
  },
  sections: [
    {
      title: "Primary contact information",
      intro:
        "The Contact page should centralize the details visitors need without depending on request-time integrations.",
      items: [
        {
          title: "Core details",
          body: "Hold the Gurudwara's primary contact channels, physical location guidance, and basic expectations for how visitors can reach out.",
        },
        {
          title: "Static-first delivery",
          body: "Keep the MVP content suitable for a static site baseline so future integrations can replace these seeded values without restructuring the page.",
        },
      ],
    },
    {
      title: "Conversion role",
      items: [
        {
          title: "Unified inquiry path",
          body: "General inquiries, join intent, and Punjabi School follow-up should all resolve through this page instead of branching into separate routes.",
        },
      ],
    },
  ],
});
