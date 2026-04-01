# Engineering Constitution

## Purpose

This document is the canonical engineering policy for the Downriver GDW modernization repository. It defines mandatory standards for coding, branching, commits, Jira hygiene, review, and release behavior.

## Scope

Applies to all contributors, human and AI, across all repository directories.

## Core Principles

- Ship in small, reviewable increments.
- Keep planning and implementation traceable to Jira work items.
- Prefer deterministic, automated quality gates over manual checks.
- Treat standards as defaults; exceptions require explicit documented rationale.

## Coding Standards

- Use TypeScript strict mode for new code where applicable.
- Keep shared contract shapes, schemas, and inferred types in `@repo/types` instead of duplicating them across `apps/api` and `apps/ui`.
- Validate external input with `zod` before business logic.
- Keep modules cohesive and avoid hidden cross-package coupling.
- Add tests for behavior changes at the right level for the change.
- Do not commit generated build artifacts unless explicitly required.
- Prefer additive changes over broad rewrites unless the Jira issue explicitly calls for refactoring.

## Branching Standard (Mandatory)

Branch naming maps to Jira issue type:

- Task -> `chore/GRA-<id>-<slug>`
- Story -> `feat/GRA-<id>-<slug>`
- Bug -> `fix/GRA-<id>-<slug>`
- Hotfix -> `hotfix/GRA-<id>-<slug>`

## Commit Standard (Mandatory)

Commit format:

- `<type>: GRA-<id> - <message>`

Type mapping derives from branch prefix:

- `chore` branch -> `chore` commit prefix
- `feat` branch -> `feat` commit prefix
- `fix` branch -> `fix` commit prefix
- `hotfix` branch -> `hotfix` commit prefix

## Jira Standard (Mandatory)

For all non-subtask issues, use the Lean template:

- `## Problem`
- `## Goal`
- `## User Story`
- `## Acceptance Criteria`

Implementation details belong in repository docs and should be linked from Jira when they matter.

## Planning Gate (Mandatory for Major Features)

Before implementation of major features, complete the Spec Kit artifacts:

1. `/constitution`
2. `/specify`
3. `/plan`
4. `/tasks`

PRs for major features must reference these artifacts.

## Pull Request Standard

- When squash merge is used, the PR title must match the commit format exactly: `<type>: GRA-<id> - <message>`.
- PR title format is release-significant because squash merge uses the PR title as the commit subject on `main`.
- PR description includes summary, Jira linkage, and validation notes.
- Required checks must pass before merge.
- Keep PR scope aligned with Jira scope; split when scope drifts.

## Release and Versioning Standard

- Trunk branch is `main`.
- Versions and release process should reflect what shipped to `main`, not work that merely started on a feature branch.

## Ownership and Change Control

- Primary owner: repository maintainers and engineering leads for process and governance.
- Any change to this constitution requires a Jira issue and a PR with rationale.

## Precedence

Order of precedence for repository rules:

1. This constitution (`docs/process/engineering-constitution.md`)
2. `AGENTS.md`
3. `docs/process/spec-kit-workflow.md`
4. CI and hook automation rules

