import { HomePageContentSchema } from "@repo/types";

import {
  aboutPageMedia,
  contactPageMedia,
  homePageMedia,
  punjabiSchoolPageMedia,
} from "../media-library";

export const homePageContent = HomePageContentSchema.parse({
  hero: {
    eyebrow: "Downriver Gurudwara",
    title: "A welcoming MVP foundation for visitors and future content.",
    description:
      "The static site shell now has centralized settings, navigation, and seeded page content so MVP pages can be assembled without burying copy inside layout code.",
    primaryAction: {
      href: "/contact",
      label: "Contact the Gurudwara",
    },
    secondaryAction: {
      href: "/about",
      label: "Learn more about us",
    },
    media: {
      assetId: homePageMedia.hero.id,
      role: "hero",
    },
    statusLabel: "Shared content modules ready",
    contractCardTitle: "Starter contract",
    contractTimestamp: "2026-04-02T00:00:00.000Z",
    nextStepTitle: "Next step",
    nextStepBody:
      "Use the seeded page modules to assemble the About, Punjabi School, and Contact pages while keeping content and layout concerns separate.",
  },
  foundationCards: [
    {
      title: "Home",
      body: "Introduces the Gurudwara, builds trust, and routes visitors to the most important next steps.",
      media: {
        assetId: homePageMedia.gallery[0]!.id,
        role: "gallery",
      },
    },
    {
      title: "About",
      body: "Holds mission-oriented background content that supports visitors who want context before reaching out.",
      media: {
        assetId: aboutPageMedia.hero.id,
        role: "section",
      },
    },
    {
      title: "Punjabi School",
      body: "Captures the program overview as an informational MVP page without adding registration workflow scope.",
      media: {
        assetId: punjabiSchoolPageMedia.hero.id,
        role: "section",
      },
    },
    {
      title: "Contact",
      body: "Centralizes inquiry details so join and WhatsApp-style outreach resolve through a single page.",
      media: {
        assetId: contactPageMedia.hero.id,
        role: "section",
      },
    },
  ],
});
