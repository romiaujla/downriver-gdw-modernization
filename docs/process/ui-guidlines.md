# UI Guidelines

This document captures the baseline UI expectations for the Gurudwara website modernization work.

## Core Principles

- Prioritize clarity, warmth, and accessibility.
- Preserve a cohesive visual language across pages.
- Design mobile-first, then expand thoughtfully for larger screens.
- Favor reusable patterns over one-off page styling.

## Implementation Guidance

- Use semantic HTML structure in App Router pages and components.
- Keep typography, spacing, color, and layout decisions consistent across the app.
- Prefer CSS variables and shared styles over repeated literals.
- Consider loading, empty, error, and success states when a feature introduces data or interaction.
- Avoid burying reusable UI inside `apps/ui/src/app/*` when it belongs in `apps/ui/src/components/*`.

## Wireframe Requirement

For Jira-scoped UI work under `--speckit GRA-<id>`, save the wireframe spec to `specs/GRA-<id>/wireframe.md`.

