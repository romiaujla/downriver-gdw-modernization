import { StaticPageContentSchema } from "@repo/types";

import { aboutPageMedia, siteMediaLibrary } from "../media-library";

export const aboutPageContent = StaticPageContentSchema.parse({
  hero: {
    eyebrow: "About",
    title: "Shared background content for the Gurudwara story and mission.",
    description:
      "This module seeds the trust-building content needed for the About page so future page assembly can focus on layout and hierarchy instead of inline copy objects.",
    primaryAction: {
      href: "/contact",
      label: "Reach out to the Gurudwara",
    },
    secondaryAction: {
      href: "/punjabi-school",
      label: "Explore Punjabi School",
    },
    media: {
      assetId: aboutPageMedia.hero.id,
      role: "hero",
    },
  },
  sections: [
    {
      title: "Who we are",
      intro:
        "The About page should give first-time visitors a calm, accessible overview of the Gurudwara and its role in the community.",
      media: {
        assetId: siteMediaLibrary.shared.community[0]!.id,
        role: "section",
      },
      items: [
        {
          title: "Mission",
          body: "Share the Gurudwara's spiritual, cultural, and community purpose in plain language that works for both regular visitors and first-time guests.",
        },
        {
          title: "Community role",
          body: "Explain how the space supports gathering, learning, and seva without expanding into out-of-scope program or event systems.",
        },
      ],
    },
    {
      title: "Why this page matters",
      media: {
        assetId: aboutPageMedia.gallery[0]!.id,
        role: "gallery",
      },
      items: [
        {
          title: "Trust-building",
          body: "Visitors who are not ready to contact the Gurudwara yet should still be able to understand the organization and feel confident taking the next step later.",
        },
        {
          title: "Clear routing",
          body: "The About page should naturally guide action-oriented visitors toward the Contact page rather than introducing separate inquiry destinations.",
        },
      ],
    },
  ],
});
