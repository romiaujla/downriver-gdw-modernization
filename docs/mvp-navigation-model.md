# MVP Header And Footer Navigation Model

This document captures the final navigation model for `GRA-30` and translates
the MVP sitemap into implementation-ready header and footer decisions.

## Goal

Define:

- the exact MVP header links
- the exact MVP footer links
- how the primary CTA relates to navigation
- how the navigation should behave across desktop and mobile layouts

## Governing Inputs

This navigation model is based on the final MVP sitemap in
`docs/mvp-sitemap.md`.

## Final Header Navigation

### Primary links

The header should expose the full MVP page inventory as top-level links:

- Home
- About
- Punjabi School
- Contact

### Header CTA

The header should treat `Contact` as both:

- a primary navigation destination
- the highest-priority action path for visitors who are ready to reach out

For the MVP, no separate header CTA button is required if the shared site shell
keeps `Contact` visually prominent within the navigation treatment. This avoids
introducing a second competing action before `GRA-31` defines the broader CTA
placement strategy in detail.

### Desktop behavior

On desktop widths, the header should:

- present the brand/home link on the left
- present the four primary links in a single visible row
- avoid dropdowns, nested groups, or utility-link clutter
- keep `Contact` visually emphasized relative to the other links

### Mobile behavior

On mobile widths, the header should:

- keep the brand/home link visible in the top bar
- collapse the navigation links into a simple menu trigger
- expose the same four destinations inside the mobile menu
- preserve `Contact` as the most visually prominent action within the mobile menu

The mobile menu should not introduce new destinations that do not exist in the
desktop header.

## Final Footer Navigation

### Footer links

The footer should repeat the same MVP destinations for consistency:

- Home
- About
- Punjabi School
- Contact

### Footer role

The footer is not a second information-architecture surface. Its purpose in the
MVP is to:

- reinforce the same core destinations from the header
- give visitors a reliable navigation exit at the bottom of each page
- keep `Contact` easily available after informational content

For the MVP, the footer should stay intentionally lean and should not introduce
secondary link groups for excluded or future-scope areas.

## Header Vs Footer Differences

The differences between header and footer should be explicit:

- the header acts as the primary wayfinding surface at page entry
- the footer acts as a repeated navigation safety net at page exit
- both surfaces share the same destination set
- the header should visually emphasize `Contact` more strongly than the footer

## CTA Relationship To Navigation

The navigation model should support the broader CTA strategy without replacing
it:

- navigation exists for wayfinding first
- `Contact` is the navigation-linked conversion destination
- page-level CTAs can point to `Contact`, but they should not require a separate navigation destination
- WhatsApp/join intent continues to resolve through the Contact page rather than a standalone route

## Explicit Non-Goals

The MVP navigation model does not include:

- dropdown navigation groups
- utility links such as donations, events, or member workflows
- a standalone WhatsApp navigation item
- separate desktop and mobile destination sets
- additional footer-only informational pages

## Implementation Readiness Notes

This decision should be specific enough for downstream shared shell
implementation to build:

- a reusable header component with a flat four-link navigation model
- a reusable footer component that mirrors the same destination set
- responsive behavior that preserves destination parity between desktop and mobile

If implementation work requires a new link or route beyond this model, treat it
as a Jira scope change rather than an implementation-time assumption.
