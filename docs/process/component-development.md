# Component Development

Use this document when a UI change introduces or updates reusable components in `apps/ui`.

## Component Tiers

### Primitives

- Location: `apps/ui/src/components/ui/`
- Purpose: reusable presentational building blocks

### Feature Components

- Location: `apps/ui/src/components/features/`
- Purpose: domain-aware assemblies used by one or more pages

### Page Components

- Location: `apps/ui/src/components/pages/`
- Purpose: page-scoped composition helpers that keep route files thin

## Decision Rules

Before creating a new component:

1. Search existing components in `apps/ui/src/components`.
2. Reuse or extend an existing component when it already matches the need.
3. Create a new primitive only when the pattern will be reused.
4. Keep route files in `apps/ui/src/app` focused on data wiring and composition.

## Implementation Rules

- Put reusable UI in `apps/ui/src/components`, not directly in route files.
- Keep styling aligned with repository design tokens and shared page styles.
- Prefer small, composable components over page-sized abstractions.
- Document component states in the related spec or PR when Storybook is not yet part of the repository.

