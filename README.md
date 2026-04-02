# downriver-gdw-modernization

Reusable monorepo starter for a `Next.js` UI and `Express` REST API with shared TypeScript and `zod` contracts, `PostgreSQL`, `Prisma`, and CI guardrails.

## Current Scope

The repository currently includes:

- root `pnpm` workspace
- `turbo` task orchestration
- shared `tsconfig` package
- shared `eslint-config` package
- shared `types` package with a starter `zod` contract
- `apps/ui` with Next.js, React, and TypeScript
- `apps/api` with Express and TypeScript

Implementation spec: [docs/implementation-spec.md](docs/implementation-spec.md)

## Planned Structure

```txt
apps/
  api/
  ui/

packages/
  eslint-config/
  tsconfig/
  types/
```

## Quickstart

```bash
pnpm install
pnpm build
pnpm lint
pnpm typecheck
```

## Local PostgreSQL

Run the guided local database setup:

```bash
pnpm local:postgres:setup
```

The script will:

- ask whether to use Docker or Podman
- ask for the local PostgreSQL port
- ask for the database name
- suggest a strong password and let you accept or replace it
- ask for the schema name, defaulting to `public`
- create the local PostgreSQL container
- generate `.env.local` with the connection settings

After setup, you can manage the container with:

```bash
pnpm local:postgres:start
pnpm local:postgres:stop
pnpm local:postgres:status
pnpm local:postgres:logs
pnpm local:postgres:remove
```

To run the apps locally:

```bash
pnpm --filter @repo/api dev
pnpm --filter @repo/ui dev
```

Default local ports:

- UI: `http://localhost:3100`
- API: `http://localhost:4100`

You can still override these when needed:

```bash
PORT=4200 pnpm --filter @repo/api dev
pnpm --filter @repo/ui dev -- --port 3200
```

## GitHub Pages Deployment

The current deployment strategy publishes only the statically exported UI from
`apps/ui/out` using a GitHub Actions Pages workflow.

- workflow: `.github/workflows/deploy-pages.yml`
- build target: `pnpm --filter @repo/ui build`
- deployable artifact: `apps/ui/out`
- API note: `apps/api` is not deployed to GitHub Pages
- prerequisite: enable GitHub Pages for the repository in GitHub Settings
  before expecting deployment runs to publish

See [docs/github-pages-deployment-strategy.md](docs/github-pages-deployment-strategy.md)
for the repository assumptions, Pages subpath handling, and deployment
tradeoffs.

## Static MVP Baseline

The current MVP is configured as a static export for the UI application.

- `apps/ui` builds with `next build` and writes a deployable static site to `apps/ui/out`
- the baseline requires no checked-in environment variables for the content-only MVP
- static hosting must serve the generated `apps/ui/out` assets directly
- GitHub Pages compatibility applies to the exported UI only; `apps/api` is not deployable there without separate hosting
- avoid server-only Next.js features such as dynamic rendering, request-time headers/cookies access, route handlers that require a server runtime, and image optimization that depends on the default Next.js image loader

See [docs/static-mvp-baseline.md](docs/static-mvp-baseline.md) for the full compatibility matrix, hosting constraints, and known GitHub Pages tradeoffs.
