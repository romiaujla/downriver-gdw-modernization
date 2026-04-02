import { z } from "zod";

export const SiteRouteKeySchema = z.enum([
  "home",
  "about",
  "punjabiSchool",
  "contact",
]);

export type SiteRouteKey = z.infer<typeof SiteRouteKeySchema>;

export const SiteNavigationItemSchema = z.object({
  href: z.string().min(1),
  label: z.string().min(1),
  routeKey: SiteRouteKeySchema,
  emphasize: z.boolean().optional(),
});

export type SiteNavigationItem = z.infer<typeof SiteNavigationItemSchema>;

export const SiteReferenceSchema = z.object({
  href: z.string().min(1),
  label: z.string().min(1),
  summary: z.string().min(1),
});

export type SiteReference = z.infer<typeof SiteReferenceSchema>;

export const SiteSettingsSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  shellName: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
});

export type SiteSettings = z.infer<typeof SiteSettingsSchema>;

export const SiteConfigSchema = z.object({
  settings: SiteSettingsSchema,
  navigation: z.object({
    header: z.array(SiteNavigationItemSchema).min(1),
    footer: z.array(SiteNavigationItemSchema).min(1),
  }),
  references: z.object({
    routes: z.record(SiteRouteKeySchema, SiteReferenceSchema),
    primaryContactRoute: SiteRouteKeySchema,
  }),
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;
