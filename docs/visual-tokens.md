# MVP Visual Tokens And Typographic Scale

This document defines the baseline visual token system for `GRA-25`.

## Goal

Provide a compact MVP-ready design baseline for:

- color usage
- typography roles and scale
- spacing rhythm
- border radius and surface treatment
- shadow and visual depth

This baseline is intentionally lightweight. It should support consistent shared
component and page implementation without introducing a full multi-theme design
system yet.

## MVP Design Direction

The MVP should feel:

- warm
- calm
- grounded
- readable

The visual system leans on soft neutrals, earthy accent tones, generous spacing,
and serif-led display typography paired with straightforward body copy.

## Color Tokens

### Foundation

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-bg-canvas` | `#f5efe4` | Primary page background |
| `--color-bg-canvas-accent` | `#e4d3b5` | Secondary background tone for gradients and warmth |
| `--color-surface` | `rgba(255, 255, 255, 0.86)` | Elevated main cards and large content panels |
| `--color-surface-soft` | `rgba(255, 255, 255, 0.72)` | Secondary panels and nested surfaces |
| `--color-surface-muted` | `rgba(255, 255, 255, 0.58)` | Tertiary surfaces and supporting tiles |

### Text

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-text-strong` | `#1d160f` | Primary headings and body text |
| `--color-text-muted` | `#5f5346` | Supporting copy and lower-emphasis text |

### Borders And Focus

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-border-subtle` | `rgba(76, 53, 23, 0.16)` | Card, panel, and section borders |
| `--color-focus-ring` | `rgba(122, 78, 33, 0.34)` | Focus and interactive outline treatment |

### Status Accent

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-accent-success-bg` | `rgba(79, 126, 61, 0.1)` | Positive status background |
| `--color-accent-success-text` | `#24451b` | Positive status text |
| `--color-accent-success-dot` | `#4f7e3d` | Positive status indicator |

## Typography Tokens

### Font families

| Token | Value | Purpose |
| --- | --- | --- |
| `--font-family-display` | `Georgia, "Times New Roman", serif` | Display headlines and key branded text |
| `--font-family-body` | `Georgia, "Times New Roman", serif` | Body copy for the current MVP baseline |
| `--font-family-mono` | `"SFMono-Regular", Menlo, Monaco, Consolas, monospace` | Code and technical inline content |

### Type scale

| Token | Value | Role |
| --- | --- | --- |
| `--font-size-display` | `clamp(2.75rem, 7vw, 5.75rem)` | Hero headline |
| `--font-size-h1` | `clamp(2.2rem, 5vw, 4rem)` | Primary page heading |
| `--font-size-h2` | `1.5rem` | Section heading |
| `--font-size-h3` | `1.1rem` | Card heading or compact section title |
| `--font-size-body-lg` | `1.05rem` | Large body copy |
| `--font-size-body` | `1rem` | Default body copy |
| `--font-size-body-sm` | `0.95rem` | Supporting text |
| `--font-size-label` | `0.85rem` | Eyebrow and compact labels |

### Line-height roles

| Token | Value | Role |
| --- | --- | --- |
| `--line-height-tight` | `0.94` | Display headlines |
| `--line-height-heading` | `1.1` | Standard headings |
| `--line-height-body` | `1.7` | Long-form readable copy |
| `--line-height-compact` | `1.6` | Cards and supporting text |

### Letter spacing roles

| Token | Value | Role |
| --- | --- | --- |
| `--letter-spacing-eyebrow` | `0.18em` | Uppercase eyebrow text |

## Spacing Tokens

The MVP should follow a simple spacing rhythm:

| Token | Value | Purpose |
| --- | --- | --- |
| `--space-3` | `0.75rem` | Tight inline spacing |
| `--space-4` | `1rem` | Small component spacing |
| `--space-5` | `1.25rem` | Card padding rhythm |
| `--space-6` | `1.5rem` | Standard section gaps |
| `--space-8` | `2rem` | Large section gaps |
| `--space-12` | `3rem` | Page padding and generous layout spacing |

## Radius Tokens

| Token | Value | Purpose |
| --- | --- | --- |
| `--radius-pill` | `999px` | Pills and badges |
| `--radius-lg` | `20px` | Nested cards and panels |
| `--radius-xl` | `28px` | Primary large containers |

## Elevation Tokens

| Token | Value | Purpose |
| --- | --- | --- |
| `--shadow-soft` | `0 24px 80px rgba(55, 37, 12, 0.12)` | Primary elevated surface shadow |

## MVP Simplifications

The current baseline intentionally does not define:

- dark mode tokens
- multiple semantic color families beyond the current surface and success needs
- a separate sans-serif body type system
- a full component-state token matrix

Those can be added later if a future Jira issue expands the design system scope.

## Downstream Guidance

This baseline should guide:

- shared layout primitives in `GRA-26`
- shared header and footer implementation in `GRA-27`
- page styling decisions so they reuse named tokens rather than one-off values
