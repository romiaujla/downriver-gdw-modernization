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
  foundationCards: [
    {
      title: "Welcome hero",
      body: "Lead with a warm welcome, brief spiritual framing, and one obvious contact-oriented action.",
      media: {
        assetId: homePageMedia.gallery[0]!.id,
        role: "gallery",
      },
    },
    {
      title: "Quick paths",
      body: "Preserve the strongest action choices from the current site, but condense them into a simple set of next-step routes that fit the MVP page inventory.",
      media: {
        assetId: aboutPageMedia.hero.id,
        role: "section",
      },
    },
    {
      title: "Trust-building overview",
      body: "Keep a concise Gurudwara introduction that explains the role of the community and directs deeper readers into About.",
      media: {
        assetId: punjabiSchoolPageMedia.hero.id,
        role: "section",
      },
    },
    {
      title: "Contact funnel",
      body: "Make Contact the persistent destination for inquiries, join intent, and Punjabi School follow-up instead of scattering those actions across separate flows.",
      media: {
        assetId: contactPageMedia.hero.id,
        role: "section",
      },
    },
  ],
  outlineSections: [
    {
      title: "Welcome and introduction",
      intro:
        "The current site opens with a greeting, welcome language, and immediate action links. The MVP should keep that welcoming first impression but simplify it into a stronger lead section.",
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
      title: "Core next-step choices",
      intro:
        "The current site exposes many action tiles. The MVP should narrow that into the most useful routes for launch.",
      items: [
        {
          title: "About path",
          body: "Guide visitors who want background, mission, and community context into About.",
        },
        {
          title: "Punjabi School path",
          body: "Keep Punjabi School visible as a dedicated informational route for families exploring the program.",
        },
        {
          title: "Contact path",
          body: "Route all direct outreach, join intent, and general questions into Contact instead of separate event, booking, or WhatsApp funnels.",
        },
      ],
    },
    {
      title: "Trust-building story",
      intro:
        "The current homepage includes an About block describing the Gurudwara's history and role. The MVP homepage should keep a shorter version of that story as a bridge into About.",
      items: [
        {
          title: "Community role",
          body: "Summarize the Gurudwara as a spiritual and cultural anchor for the Downriver Sikh community.",
        },
        {
          title: "Inclusive welcome",
          body: "Reinforce that the space is welcoming to families, first-time visitors, and anyone seeking connection or support.",
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
