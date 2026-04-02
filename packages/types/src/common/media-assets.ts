import { z } from "zod";

import { SiteRouteKeySchema } from "./site-config.js";

export const MediaAssetCategorySchema = z.enum([
  "branding",
  "page",
  "shared",
]);

export type MediaAssetCategory = z.infer<typeof MediaAssetCategorySchema>;

export const MediaAssetFormatSchema = z.enum(["svg", "png", "jpg", "webp"]);

export type MediaAssetFormat = z.infer<typeof MediaAssetFormatSchema>;

export const MediaAssetSchema = z.object({
  id: z.string().min(1),
  category: MediaAssetCategorySchema,
  src: z.string().min(1),
  alt: z.string().min(1),
  format: MediaAssetFormatSchema,
});

export type MediaAsset = z.infer<typeof MediaAssetSchema>;

export const MediaAssetReferenceSchema = z.object({
  assetId: z.string().min(1),
  role: z.enum(["logo", "hero", "section", "gallery"]),
});

export type MediaAssetReference = z.infer<typeof MediaAssetReferenceSchema>;

export const SiteMediaLibrarySchema = z.object({
  assumptions: z.array(z.string().min(1)).min(1),
  branding: z.object({
    mark: MediaAssetSchema,
    wordmark: MediaAssetSchema,
  }),
  pages: z.record(
    SiteRouteKeySchema,
    z.object({
      hero: MediaAssetSchema,
      gallery: z.array(MediaAssetSchema),
    }),
  ),
  shared: z.object({
    community: z.array(MediaAssetSchema),
  }),
});

export type SiteMediaLibrary = z.infer<typeof SiteMediaLibrarySchema>;
