# Static MVP Baseline

This document defines the environment and build configuration baseline for the
content-only MVP tracked in `GRA-23`, plus the GitHub Pages compatibility
constraints validated in `GRA-24`.

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

## Chosen Deployment Model

The validated GitHub Pages deployment model for this repository is:

- publish only the statically exported UI from `apps/ui/out`
- treat `apps/api` as out of scope for GitHub Pages hosting
- keep the MVP compatible with a host that serves prebuilt files without a
  persistent Node.js runtime

This means the current stack is compatible with GitHub Pages only for the
static UI portion of the monorepo. The Express API can remain in the repository,
but it cannot be deployed on GitHub Pages as part of the same static hosting
path.

## Compatibility Matrix

| Area | Status | Notes |
| --- | --- | --- |
| `apps/ui` static pages and layouts | Compatible | `next build` with `output: "export"` emits deployable files into `apps/ui/out`. |
| App Router Server Components that resolve at build time | Compatible | Build-time rendering is allowed as long as the component does not depend on request-time data. |
| Client Components and browser-side interactivity | Compatible | Hydrated client behavior works after static export. |
| Build-time data fetching for public content | Compatible | Data must be available during `next build`; there is no request-time server fallback on GitHub Pages. |
| Static asset hosting for HTML, CSS, JavaScript, fonts, and images | Compatible | GitHub Pages can serve prebuilt static assets directly. |
| `apps/api` Express server | Incompatible | GitHub Pages does not host a persistent Node.js server. Any API runtime must be deployed elsewhere. |
| Request-time Next.js features such as `cookies()`, `headers()`, or other dynamic server functions | Incompatible | These require request context that does not exist in a static export. |
| Dynamic routes without `generateStaticParams()` | Incompatible | Route output must be known at build time. |
| Rewrites, redirects, proxying, ISR, draft mode, and server actions | Incompatible | These features depend on runtime behavior that static hosting does not provide. |
| `next/image` with the default loader | Incompatible | Default image optimization assumes a server runtime. |
| Route handlers that only emit static `GET` output during build | Compatible with review | Static export can emit build-time files from `GET` handlers, but any handler that needs the incoming request is incompatible. |

## Constraints To Preserve

The MVP should avoid configuration that reintroduces request-time or server-only
behavior.

Avoid:

- request-time rendering paths that require a running Next.js server
- server actions or route handlers that require request-time execution
- request-bound APIs such as `cookies()`, `headers()`, or other dynamic server
  features in the static UI path
- default Next.js image optimization, which assumes a server runtime
- introducing secrets or server-only environment variables for UI-only static
  pages

Allowed with review:

- `NEXT_PUBLIC_*` variables for true compile-time public configuration
- API integration work only when the related Jira scope explicitly calls for
  moving beyond the content-only static MVP
- static route handlers that generate files at build time without depending on
  request data

## Known Risks And Workaround Areas

- GitHub Pages project sites are commonly served from a repository subpath such
  as `/<owner>/<repository>/`. If this repository is deployed that way, the UI
  may need a build-time `basePath` decision or a custom domain strategy.
- GitHub Pages branch publishing only supports `/` or `/docs` as the publishing
  source. Because this repository emits deployable assets to `apps/ui/out`, a
  GitHub Actions deployment workflow is the cleaner fit unless the output is
  copied into a supported publish path.
- The static export is safe for content-first UI work, but any future
  authentication, protected server logic, write operations, or private secrets
  will require infrastructure outside GitHub Pages.
- `NEXT_PUBLIC_*` values are embedded at build time and should be treated as
  public. They are not a substitute for server-side secrets.

## Downstream Guidance

Safe for upcoming implementation work:

- static pages, routes, and reusable UI components
- client-side interactions that do not require secrets
- public compile-time configuration
- build-time content generation

Requires a follow-up deployment or architecture decision:

- hosting the Express API
- introducing request-time personalization or authenticated server behavior
- relying on runtime rewrites, redirects, or image optimization
- deploying under a repository subpath without confirming `basePath`

## Hosting Notes

This baseline assumes a static host that can:

- serve prebuilt HTML, CSS, JavaScript, and asset files
- map trailing-slash routes to generated `index.html` files
- host the site without a persistent Node.js server
