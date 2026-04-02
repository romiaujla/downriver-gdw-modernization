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
    title: "A welcoming spiritual home with a clearer path into the MVP experience.",
    description:
      "Using the current site as a reference, the MVP homepage should keep the warm welcome, community focus, and clear next steps while removing noisy or out-of-scope sections.",
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
    statusLabel: "Homepage outline aligned to current site",
    contractCardTitle: "Reference baseline",
    contractTimestamp: "2026-04-02T00:00:00.000Z",
    nextStepTitle: "MVP focus",
    nextStepBody:
      "Keep the homepage centered on welcome, trust-building, Punjabi School discovery, and the contact path while excluding events, bookings, donations, memberships, news, and gallery sprawl.",
  },
  quickPathCards: [
    {
      title: "Learn About the Gurudwara",
      body: "Start with the Gurudwara story, mission, and community role if you want background before taking action.",
      media: {
        assetId: aboutPageMedia.hero.id,
        role: "section",
      },
    },
    {
      title: "Explore Punjabi School",
      body: "Families looking for program information should have a clear path into Punjabi School without encountering registration workflow noise.",
      media: {
        assetId: punjabiSchoolPageMedia.hero.id,
        role: "section",
      },
    },
    {
      title: "Reach Out",
      body: "Make Contact the fastest route for questions, visit intent, and follow-up so the homepage always points to a single action destination.",
      media: {
        assetId: contactPageMedia.hero.id,
        role: "section",
      },
    },
  ],
  trustSection: {
    title: "A grounded introduction to the Gurudwara",
    intro:
      "The current site includes a longer About block. For the MVP homepage, that should become a concise trust-building section that explains who the Gurudwara serves and why the space matters.",
    media: {
      assetId: homePageMedia.gallery[0]!.id,
      role: "gallery",
    },
    items: [
      {
        title: "Spiritual and cultural home",
        body: "Present the Gurudwara as a welcoming place for worship, unity, seva, and cultural connection in the Downriver area.",
      },
      {
        title: "Open and approachable",
        body: "Reassure first-time visitors and families that they can learn more through About, explore Punjabi School, or go directly to Contact depending on what they need next.",
      },
    ],
  },
  outlineSections: [
    {
      title: "Implemented hero",
      intro:
        "The homepage core experience now starts with a stronger hero built from the current-site welcome and reframed for the MVP.",
      items: [
        {
          title: "Hero message",
          body: "Open with a spiritual and community-centered welcome that introduces the Gurudwara as a home for worship, unity, and seva.",
        },
        {
          title: "Primary action",
          body: "Surface Contact as the clearest next step for visitors who are ready to reach out immediately.",
        },
      ],
    },
    {
      title: "Implemented primary sections",
      intro:
        "The primary homepage body should stay focused on the strongest next-step choices and a short trust-building story.",
      items: [
        {
          title: "Quick path cards",
          body: "Use three concise cards to route visitors into About, Punjabi School, or Contact.",
        },
        {
          title: "Trust-building overview",
          body: "Follow the quick paths with a short grounding section that explains the Gurudwara's role before visitors move deeper into the site.",
        },
      ],
    },
    {
      title: "What to exclude from the MVP homepage",
      intro:
        "The current site mixes in several sections that are useful references but do not belong in the launch MVP structure.",
      items: [
        {
          title: "Out-of-scope sections",
          body: "Do not carry forward event calendars, booking flows, donation asks, memberships, recent news, external conference content, shopping cart elements, or oversized gallery/news blocks.",
        },
        {
          title: "Reason for exclusion",
          body: "These sections add noise, pull attention away from the core contact funnel, or introduce flows that the MVP sitemap intentionally excludes.",
        },
      ],
    },
  ],
});
