import { SiteConfigSchema } from "@repo/types";

const routeReferences = {
  home: {
    href: "/",
    label: "Home",
    summary:
      "Primary landing page for first-time visitors and the main entry point for core calls to action.",
  },
  about: {
    href: "/about",
    label: "About",
    summary:
      "Core informational story for the Gurudwara that helps visitors build trust before reaching out.",
  },
  punjabiSchool: {
    href: "/punjabi-school",
    label: "Punjabi School",
    summary:
      "Dedicated informational destination for Punjabi School details in the MVP.",
  },
  contact: {
    href: "/contact",
    label: "Contact",
    summary:
      "Primary inquiry destination that absorbs general contact, join intent, and WhatsApp-style outreach for the MVP.",
  },
} as const;

export const siteConfig = SiteConfigSchema.parse({
  settings: {
    name: "Downriver Gurudwara",
    shortName: "DG",
    shellName: "Downriver Gurudwara Modernization MVP",
    subtitle: "Modernization MVP",
    description:
      "Static MVP shell for Downriver Gurudwara with centralized site settings, navigation, and shared route references.",
  },
  navigation: {
    header: [
      {
        href: routeReferences.home.href,
        label: routeReferences.home.label,
        routeKey: "home",
      },
      {
        href: routeReferences.about.href,
        label: routeReferences.about.label,
        routeKey: "about",
      },
      {
        href: routeReferences.punjabiSchool.href,
        label: routeReferences.punjabiSchool.label,
        routeKey: "punjabiSchool",
      },
      {
        href: routeReferences.contact.href,
        label: routeReferences.contact.label,
        routeKey: "contact",
        emphasize: true,
      },
    ],
    footer: [
      {
        href: routeReferences.home.href,
        label: routeReferences.home.label,
        routeKey: "home",
      },
      {
        href: routeReferences.about.href,
        label: routeReferences.about.label,
        routeKey: "about",
      },
      {
        href: routeReferences.punjabiSchool.href,
        label: routeReferences.punjabiSchool.label,
        routeKey: "punjabiSchool",
      },
      {
        href: routeReferences.contact.href,
        label: routeReferences.contact.label,
        routeKey: "contact",
      },
    ],
  },
  references: {
    routes: routeReferences,
    primaryContactRoute: "contact",
  },
});
