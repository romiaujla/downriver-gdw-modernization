# AGENTS.md

## Mandatory Policy

All AI agents working in this repository must follow:

- `docs/process/engineering-constitution.md`
- `docs/process/ui-guidlines.md`
- `docs/process/development-workflow.md`
- `docs/process/component-development.md`

This is mandatory for code changes, branch naming, commits, Jira issue updates, pull requests, and release-related work.

## Required Workflow

- Use Jira-linked branches and commits per constitution.
- Keep issue descriptions aligned with the Lean Jira template.
- Use tagged workflow commands to select delivery mode:
  - `--help` for prompt discovery and supported command lookup
  - `--speckit GRA-<id>` for full Spec Kit delivery
  - `--implement GRA-<id>` for implementation-only delivery
- Use documented workflow-helper prompts from `docs/process/ai-agent-prompt-help.md` for audit, Jira sync, PR comment resolution, PR refresh, status, handoff, reconcile, test-fix, review, and scope-drift loops.
- Use `--clean-code-api` and `--clean-code-web` for workspace-scoped clean-code audits only; these prompts do not authorize implementation changes unless the user explicitly asks for them.
- Keep the prompt help registry in `docs/process/ai-agent-prompt-help.md` aligned with any documented prompt behavior changes.

## Prompt-Driven Start Workflow

When a user prompt is in the form `--speckit GRA-<id>` or `--implement GRA-<id>`:

1. Resolve the Jira issue first and use that issue as the only delivery scope unless the user explicitly broadens it.
2. Use `docs/process/engineering-constitution.md` as the governing policy for branch naming, commits, pull requests, and release-safe metadata.
3. Before creating a new Jira-linked branch, run `git checkout main && git pull`, then create the Jira-linked branch that matches the issue type; if the Jira-linked branch already exists, validate and use that existing branch before editing files.
4. When a Jira-linked branch is created for the issue, transition that issue to `In Progress`.
5. If the prompt is `--implement GRA-<id>`, skip `/specify`, `/plan`, and `/tasks` and proceed directly to implementation.
6. If the prompt is `--speckit GRA-<id>`, begin with `/specify`, then continue in this order only: `/plan`, `/tasks`, implementation, and pull request creation.
7. For UI-related features under `--speckit`, enforce the full development workflow from `docs/process/development-workflow.md`.
8. After completing `/specify`, `/plan`, `/tasks`, and implementation, commit and push that phase before moving to the next phase when no unresolved clarification remains.
9. Pause for user clarification instead of auto-advancing when scope, requirements, repository state, validation evidence, or Jira-to-branch alignment are ambiguous or blocked.
10. Create the final pull request only after implementation is complete, committed, and pushed, and include Jira linkage, links to `spec.md`, `plan.md`, `tasks.md`, and `wireframe.md` when the Spec Kit phases were used for UI work, a scope statement, and validation notes in the PR description.
11. When a Jira-linked pull request is created for the issue, transition that issue to `In Review`.

When a user prompt is `--help`:

1. Use `docs/process/ai-agent-prompt-help.md` as the source-of-truth registry for supported repository AI-agent prompt patterns.
2. Return the documented prompt patterns with concise behavior descriptions.
3. Keep the response limited to prompts that are actually documented in the repository.

When a user prompt matches a documented workflow-helper command such as `--audit`, `--sync-to-jira`, `--sync-from-jira`, `--resolve-pr-comments`, `--review`, `--refresh-pr`, `--status`, `--handoff`, `--reconcile`, `--test-fix`, or `--scope-drift`:

1. Treat the current Jira-linked branch or specified PR/Jira issue as the working scope unless the documented command explicitly requires a follow-up Jira issue.
2. Preserve branch, commit, Jira, and PR metadata required by `docs/process/engineering-constitution.md`.
3. Use `--audit` to report Jira coverage, gaps, validation debt, and out-of-scope changes without silently rewriting scope.
4. Use `--sync-to-jira` only to append structured implementation notes, validation evidence, and accepted scope increases back into Jira.
5. Use `--sync-from-jira` only to pull Jira changes into an in-flight branch; if the prior Jira-linked branch already merged to `main`, create a follow-up Jira issue instead of reopening merged work.
6. Use `--resolve-pr-comments` to inspect the current branch PR or a specified PR, make safe straightforward fixes, reply when automation should not change behavior, and resolve completed conversations when supported.
7. Use `--review`, `--refresh-pr`, `--status`, `--handoff`, `--reconcile`, `--test-fix`, and `--scope-drift` only for delivery-maintenance work that stays aligned with the Jira-linked branch and PR.
8. Pause for clarification or create a follow-up issue when a helper command reveals scope drift that should not be merged under the current Jira issue.

When a user prompt is `--clean-code-api` or `--clean-code-web`:

1. Treat the request as a review-only coding-standards audit, not an implementation task, unless the user explicitly asks for code changes.
2. Scope `--clean-code-api` to files under `apps/api` only.
3. Scope `--clean-code-web` to files under `apps/ui` only.
4. Evaluate findings against `docs/process/engineering-constitution.md` and any relevant engineering/process guidance referenced by the repository workflow documents.
5. Report findings first, before summaries, with concrete file references and clear coding-standard violations or maintainability risks.
6. Do not widen the audit into unrelated repository areas, feature design changes, or speculative implementation work.

## UI/UX Development Workflow (Mandatory for UI Features)

All UI-related features must follow the ordered development flow defined in `docs/process/development-workflow.md`:

1. API contract (if applicable)
2. UI wireframe spec generation -> saved to `specs/GRA-<id>/wireframe.md`
3. Reusable component identification and creation per `docs/process/component-development.md`
4. Page assembly using reusable components
5. Implementation (API integration, state management, business logic)
6. PR creation with pre-PR UI validation

## Operational Rules

- Do not bypass repository hooks, CI checks, or branch protection requirements.
- Do not widen PR scope beyond the Jira issue(s) named in the branch/PR.
- Prefer additive, reviewable commits and explicit rationale for policy exceptions.

