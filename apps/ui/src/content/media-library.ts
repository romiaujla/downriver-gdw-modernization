import { SiteMediaLibrarySchema } from "@repo/types";

export const siteMediaLibrary = SiteMediaLibrarySchema.parse({
  assumptions: [
    "Mock assets live under /media/<category>/<name>.<ext> so static page content can reference stable public paths.",
    "Branding assets are shared across layout components, while page assets are grouped by the MVP route they support.",
    "Page modules should reference assets by id and role instead of hardcoding raw file paths in components.",
  ],
  branding: {
    mark: {
      id: "branding-mark",
      category: "branding",
      src: "/media/branding/dg-mark.svg",
      alt: "Downriver Gurudwara monogram mark",
      format: "svg",
    },
    wordmark: {
      id: "branding-wordmark",
      category: "branding",
      src: "/media/branding/dg-wordmark.svg",
      alt: "Downriver Gurudwara wordmark",
      format: "svg",
    },
  },
  pages: {
    home: {
      hero: {
        id: "home-hero-sangat",
        category: "page",
        src: "/media/pages/home/home-hero-sangat.webp",
        alt: "Congregation gathering inside the Gurudwara prayer hall",
        format: "webp",
      },
      gallery: [
        {
          id: "home-community-welcome",
          category: "page",
          src: "/media/pages/home/home-community-welcome.webp",
          alt: "Visitors greeting one another in a welcoming community space",
          format: "webp",
        },
      ],
    },
    about: {
      hero: {
        id: "about-hero-sanctuary",
        category: "page",
        src: "/media/pages/about/about-hero-sanctuary.webp",
        alt: "Prayer hall imagery that supports the Gurudwara story",
        format: "webp",
      },
      gallery: [
        {
          id: "about-community-service",
          category: "page",
          src: "/media/pages/about/about-community-service.webp",
          alt: "Community service imagery representing seva and gathering",
          format: "webp",
        },
      ],
    },
    punjabiSchool: {
      hero: {
        id: "punjabi-school-hero-learning",
        category: "page",
        src: "/media/pages/punjabi-school/punjabi-school-hero-learning.webp",
        alt: "Students gathered for Punjabi language and cultural learning",
        format: "webp",
      },
      gallery: [
        {
          id: "punjabi-school-classroom",
          category: "page",
          src: "/media/pages/punjabi-school/punjabi-school-classroom.webp",
          alt: "Classroom-style mock imagery for Punjabi School content",
          format: "webp",
        },
      ],
    },
    contact: {
      hero: {
        id: "contact-hero-exterior",
        category: "page",
        src: "/media/pages/contact/contact-hero-exterior.webp",
        alt: "Exterior or entry imagery that helps visitors recognize the location",
        format: "webp",
      },
      gallery: [
        {
          id: "contact-location-detail",
          category: "page",
          src: "/media/pages/contact/contact-location-detail.webp",
          alt: "Location detail imagery supporting the contact and visit experience",
          format: "webp",
        },
      ],
    },
  },
  shared: {
    community: [
      {
        id: "shared-community-langar",
        category: "shared",
        src: "/media/shared/community-langar.webp",
        alt: "Shared community gathering imagery for reuse across MVP pages",
        format: "webp",
      },
    ],
  },
});

export const homePageMedia = siteMediaLibrary.pages.home!;
export const aboutPageMedia = siteMediaLibrary.pages.about!;
export const punjabiSchoolPageMedia = siteMediaLibrary.pages.punjabiSchool!;
export const contactPageMedia = siteMediaLibrary.pages.contact!;
