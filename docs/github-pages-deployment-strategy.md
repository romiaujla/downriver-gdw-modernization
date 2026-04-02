# GitHub Pages Deployment Strategy

This document defines the implementation-ready GitHub Pages deployment strategy
for the current static MVP tracked by `GRA-54`.

## Decision

Use GitHub Actions Pages deployment to publish only the exported UI artifact
from `apps/ui/out`.

The repository will not use branch-based Pages publishing from `/` or `/docs`.
Instead, the deployment pipeline will:

1. install workspace dependencies
2. build the static Next.js UI in `apps/ui`
3. upload `apps/ui/out` as the Pages artifact
4. deploy that artifact to GitHub Pages

## Build Artifact

The deployment artifact is the static export produced by `next build` in
`apps/ui`.

- input application: `apps/ui`
- build command: `pnpm --filter @repo/ui build`
- artifact directory: `apps/ui/out`
- hosted surface: static HTML, CSS, JavaScript, fonts, and image assets only

`apps/api` is intentionally excluded because GitHub Pages cannot host the
Express runtime.

## Repository And Hosting Assumptions

This strategy assumes:

- GitHub Pages is enabled for the repository
- deployment uses GitHub Actions as the Pages source
- the default public URL is the GitHub Pages project-site URL for this
  repository
- the repository may be served from a subpath such as
  `/<owner>/<repository>/`
- no custom domain is required for the current MVP

Because project sites are served from a repository subpath, the UI build must
emit route and asset links that include that subpath during Pages builds.

## Next.js Configuration Decision

The UI keeps `output: "export"` and adds a Pages-aware base path decision only
for GitHub Pages builds.

- local development remains on root-relative paths
- standard local builds remain unchanged
- GitHub Pages builds derive the repository name from `GITHUB_REPOSITORY`
- the Pages build sets `basePath` and `assetPrefix` to `/<repository>`

This keeps local development simple while making the exported site compatible
with GitHub Pages project-site hosting.

## Tradeoffs

Benefits:

- avoids copying `apps/ui/out` into `/docs`
- keeps deployment aligned with the monorepo package layout
- publishes the exact static artifact produced by the UI package
- isolates GitHub Pages behavior to the UI path only

Constraints:

- the Pages deployment is valid only for the static UI
- any future server runtime, secrets, authenticated requests, or Express-hosted
  API behavior requires infrastructure outside GitHub Pages
- a future custom domain decision may allow removing the repository subpath
  configuration from the Pages build path

## Follow-Up Expectations

Future deployment and documentation work should preserve these rules:

- treat `apps/ui/out` as the canonical Pages artifact
- do not route GitHub Pages traffic to `apps/api`
- keep the UI compatible with static export constraints
- document any future custom domain or external API hosting decision before
  changing the Pages build assumptions
