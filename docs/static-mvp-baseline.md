# Static MVP Baseline

This document defines the environment and build configuration baseline for the
content-only MVP tracked in `GRA-23`.

## Goal

Keep the UI deployable as a static site with no required runtime server
dependencies and no required environment variables.

## Required Environment Variables

None for the current MVP.

Rationale:

- the current UI renders content that is known at build time
- no API calls are required for the MVP baseline
- removing environment setup from the initial path keeps local setup and static
  hosting predictable

## Build Behavior

The UI build is intentionally configured for static export in
`apps/ui/next.config.ts`.

- `output: "export"` makes `next build` emit static assets into `apps/ui/out`
- `images.unoptimized: true` avoids reliance on the default Next.js image
  optimization server
- `trailingSlash: true` keeps the output compatible with straightforward static
  hosting setups that map directories to `index.html`

Expected workflow:

1. Run `pnpm install`
2. Run `pnpm build`
3. Deploy the generated contents of `apps/ui/out` to the chosen static host

## Constraints To Preserve

The MVP should avoid configuration that reintroduces request-time or server-only
behavior.

Avoid:

- request-time rendering paths that require a running Next.js server
- server actions or route handlers for content that can be generated at build
  time
- request-bound APIs such as `cookies()`, `headers()`, or other dynamic server
  features in the static UI path
- default Next.js image optimization, which assumes a server runtime
- introducing secrets or server-only environment variables for UI-only static
  pages

Allowed with review:

- `NEXT_PUBLIC_*` variables for true compile-time public configuration
- API integration work only when the related Jira scope explicitly calls for
  moving beyond the content-only static MVP

## Hosting Notes

This baseline assumes a static host that can:

- serve prebuilt HTML, CSS, JavaScript, and asset files
- map trailing-slash routes to generated `index.html` files
- host the site without a persistent Node.js server
