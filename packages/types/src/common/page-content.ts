import { z } from "zod";

export const PageCallToActionSchema = z.object({
  href: z.string().min(1),
  label: z.string().min(1),
});

export type PageCallToAction = z.infer<typeof PageCallToActionSchema>;

export const PageHeroSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  primaryAction: PageCallToActionSchema.optional(),
  secondaryAction: PageCallToActionSchema.optional(),
});

export type PageHero = z.infer<typeof PageHeroSchema>;

export const ContentCardSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export type ContentCard = z.infer<typeof ContentCardSchema>;

export const ContentSectionSchema = z.object({
  title: z.string().min(1),
  intro: z.string().min(1).optional(),
  items: z.array(ContentCardSchema).min(1),
});

export type ContentSection = z.infer<typeof ContentSectionSchema>;

export const HomePageContentSchema = z.object({
  hero: PageHeroSchema.extend({
    statusLabel: z.string().min(1),
    contractCardTitle: z.string().min(1),
    contractTimestamp: z.string().datetime(),
    nextStepTitle: z.string().min(1),
    nextStepBody: z.string().min(1),
  }),
  foundationCards: z.array(ContentCardSchema).min(1),
});

export type HomePageContent = z.infer<typeof HomePageContentSchema>;

export const StaticPageContentSchema = z.object({
  hero: PageHeroSchema,
  sections: z.array(ContentSectionSchema).min(1),
});

export type StaticPageContent = z.infer<typeof StaticPageContentSchema>;
