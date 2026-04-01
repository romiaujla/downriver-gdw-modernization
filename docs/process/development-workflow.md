# Development Workflow

This document defines the required order for UI-oriented feature delivery in this repository.

## Governing Documents

| Document | Purpose |
| --- | --- |
| `docs/process/engineering-constitution.md` | Branching, commits, PRs, release gates |
| `docs/process/component-development.md` | Reusable component decision rules |
| `docs/process/ui-guidlines.md` | UI consistency, accessibility, and implementation expectations |

## Required UI Flow

For UI features delivered through `--speckit GRA-<id>`, work in this order:

1. Confirm API contract needs, if any.
2. Create or update the wireframe spec at `specs/GRA-<id>/wireframe.md`.
3. Identify reusable components before page-level implementation.
4. Build or update reusable components under `apps/ui/src/components`.
5. Assemble routes and pages under `apps/ui/src/app`.
6. Run validation and prepare the PR.

## Wireframe Spec Requirements

Each UI wireframe spec must cover:

- layout structure
- action hierarchy
- loading, empty, error, and success states when applicable
- accessibility expectations
- responsive behavior
- component reuse decisions

## Pre-PR UI Validation

Before PR creation for UI features:

- confirm `specs/GRA-<id>/wireframe.md` exists for Spec Kit-driven UI work
- confirm reusable UI was not built directly inside page files unless it is intentionally page-local
- confirm responsive behavior has been validated at mobile and desktop widths
- confirm accessibility basics such as semantic structure, focus states, and contrast were considered

