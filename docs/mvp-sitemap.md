# MVP Sitemap And Page Inventory

This document captures the final MVP sitemap for `GRA-29` and defines the page
inventory that downstream navigation, CTA, content, and implementation work
should treat as in scope for launch.

## Goal

Provide a single agreed source of truth for:

- the MVP page inventory
- the intended route structure
- how primary pages relate to each other
- which content areas are intentionally excluded from the MVP

## Final MVP Page Inventory

| Page | Route | Purpose | Notes |
| --- | --- | --- | --- |
| Home | `/` | Primary landing page for first-time visitors and the main entry point for core calls to action. | Supports overview content, trust-building, and directional CTAs into the rest of the site. |
| About | `/about` | Explains the Gurudwara, mission, and core informational content beyond the homepage. | Anchors the MVP's general static content experience. |
| Punjabi School | `/punjabi-school` | Dedicated destination for Punjabi School information. | Informational page only for MVP; no registration workflow. |
| Contact | `/contact` | Primary contact and inquiry destination for the MVP. | Absorbs the WhatsApp/join CTA path instead of creating a separate WhatsApp page. |

## Sitemap Hierarchy

```txt
/
|-- /about
|-- /punjabi-school
`-- /contact
```

## Navigation Relationship Model

### Primary navigation

The MVP header should expose the complete page inventory directly:

- Home
- About
- Punjabi School
- Contact

This keeps the MVP navigation flat and avoids introducing category groupings or
multi-level menus before the content surface area requires them.

### Footer navigation

The footer can repeat the same page inventory and reinforce the Contact route as
the persistent action-oriented destination.

### CTA relationship

CTA strategy should treat the sitemap as a simple funnel:

- Home introduces the brand and routes visitors to About, Punjabi School, or Contact based on intent
- About supports trust-building and should route action-oriented users to Contact
- Punjabi School supports program-specific discovery and should route interested families to Contact
- Contact is the terminal conversion point for general inquiries and WhatsApp/join intent

## Page-Level Role In The MVP

### Home

- summarize the Gurudwara and current MVP offering
- highlight the primary next-step choices
- link into the three supporting pages

### About

- provide the core informational story for the organization
- support visitors who need background before reaching out

### Punjabi School

- provide a dedicated program overview
- keep the experience informational and static for the MVP

### Contact

- centralize contact details and inquiry actions
- absorb WhatsApp/join intent rather than splitting that flow into a separate route

## Explicit MVP Exclusions

The following are intentionally out of scope for this sitemap and should not be
added as MVP launch pages unless a new Jira issue expands scope:

- legacy page structure preservation
- events workflows
- booking flows
- donation flows
- membership flows
- registration workflows for Punjabi School
- admin or content-management tooling
- a separate WhatsApp page or standalone join route
- request-time or server-dependent features outside the static MVP baseline

## Downstream Implementation Guidance

This sitemap is intended to guide:

- header and footer navigation decisions in `GRA-30`
- CTA placement and contact funnel mapping in `GRA-31`
- page implementation work under the Homepage, About, Punjabi School, and Contact epics

If later work identifies another required MVP page, that should be treated as a
scope change and captured in Jira before the sitemap is expanded.
