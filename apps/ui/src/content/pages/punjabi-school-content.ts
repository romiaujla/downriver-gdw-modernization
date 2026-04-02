import { StaticPageContentSchema } from "@repo/types";

import { punjabiSchoolPageMedia } from "../media-library";

export const punjabiSchoolPageContent = StaticPageContentSchema.parse({
  hero: {
    eyebrow: "Punjabi School",
    title: "Seeded program content for a clear, informational MVP page.",
    description:
      "This module captures the static overview needed for Punjabi School without introducing registration or enrollment workflows.",
    primaryAction: {
      href: "/contact",
      label: "Ask about Punjabi School",
    },
    secondaryAction: {
      href: "/about",
      label: "Read about the Gurudwara",
    },
    media: {
      assetId: punjabiSchoolPageMedia.hero.id,
      role: "hero",
    },
  },
  sections: [
    {
      title: "Program overview",
      intro:
        "The Punjabi School page should help families quickly understand the purpose and fit of the program.",
      media: {
        assetId: punjabiSchoolPageMedia.gallery[0]!.id,
        role: "gallery",
      },
      items: [
        {
          title: "Learning focus",
          body: "Describe the program as a space for Punjabi language, cultural connection, and values-oriented learning in a way that stays useful even before detailed schedules are added.",
        },
        {
          title: "MVP scope",
          body: "Keep the page informational for launch and avoid implying online registration, applications, or class-management tooling.",
        },
      ],
    },
    {
      title: "Inquiry path",
      items: [
        {
          title: "Single action destination",
          body: "Interested families should be routed to Contact for next steps rather than a separate school-specific form or workflow.",
        },
      ],
    },
  ],
});
