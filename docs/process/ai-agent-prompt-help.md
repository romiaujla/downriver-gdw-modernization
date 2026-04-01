# AI-Agent Prompt Help Registry

Use `--help` to discover the repository-supported AI-agent prompt patterns without scanning multiple files.

## Contract

- `--help` is the canonical discovery command for repository AI-agent prompts.
- The help surface is a registry: add new documented prompt patterns here instead of redefining the contract in multiple files.
- Workflow semantics for each prompt remain governed by `AGENTS.md`, `docs/process/spec-kit-workflow.md`, and `docs/process/engineering-constitution.md`.

## Supported Prompt Patterns

| Prompt pattern                   | Behavior                                                                                                                                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--help`                         | Show this help registry so engineers can discover the supported repository AI-agent prompts.                                                                                                                             |
| `--speckit GRA-<id>`             | Start the full Spec Kit delivery path for the Jira issue: resolve the issue, update from `main`, create or validate the Jira-linked branch, then proceed through `/specify`, `/plan`, `/tasks`, implementation, and PR creation. |
| `--implement GRA-<id>`           | Start the implementation-only path for the Jira issue: resolve the issue, update from `main`, create or validate the Jira-linked branch, then skip `/specify`, `/plan`, and `/tasks` and proceed directly to implementation. |
| `--audit GRA-<id>`               | Audit the current branch or working tree against the Jira issue and report covered scope, missing acceptance-criteria coverage, validation gaps, and any implementation that appears out of scope for the issue.      |
| `--clean-code-api`               | Audit only `apps/api` for clean-code and coding-standard issues using repository process guidance, then return findings first with concrete file references and actionable violations or risks.                          |
| `--clean-code-web`               | Audit only `apps/ui` for clean-code and coding-standard issues using repository process guidance, then return findings first with concrete file references and actionable violations or risks.                           |
| `--sync-to-jira GRA-<id>`        | Append branch-derived scope increases, validation evidence, and implementation notes back into Jira without widening scope beyond the current branch.                                                                    |
| `--sync-from-jira GRA-<id>`      | Pull Jira scope or acceptance-criteria changes into the active branch when the branch is still in flight; if the prior Jira-linked branch already merged to `main`, create a follow-up issue instead.                  |
| `--resolve-pr-comments [NUMBER]` | Inspect review comments for the current branch PR or the specified PR, apply safe straightforward fixes, and reply with rationale when changes are not safe.                                                           |
| `--review [NUMBER]`              | Review the current branch PR or specified PR for scoped bugs, regressions, missing tests, and policy drift, then report findings in priority order.                                                                    |
| `--refresh-pr [NUMBER]`          | Refresh the active PR or specified PR with the latest scope summary, validation evidence, linked Jira context, and any newly completed review follow-up that should be reflected in the PR body.                       |
| `--status [GRA-<id>]`            | Report the current delivery state for the active branch or Jira issue, including branch/Jira alignment, completed validation, and whether the work is ready for handoff or PR creation.                                 |
| `--handoff GRA-<id>`             | Prepare a concise handoff summary for the Jira-scoped work that captures implemented behavior, remaining risks, validation evidence, and the next expected operator action.                                             |
| `--reconcile GRA-<id>`           | Reconcile Jira, branch, PR, and local implementation state; identify drift between them; and recommend the smallest safe corrective action before more work proceeds.                                                  |
| `--test-fix [TARGET]`            | Run the relevant failing validation target, make the smallest scoped fix that addresses the failure, and report the cause, code change, and rerun result without widening scope unnecessarily.                          |
| `--scope-drift GRA-<id>`         | Evaluate whether current changes still match the Jira issue scope, highlight scope growth or unrelated edits, and recommend trim-back, Jira sync, or follow-up issue creation before merge.                            |

## Extending The Registry

When a new prompt pattern is introduced:

1. Add the prompt pattern and short behavior description to this registry.
2. Update the governing workflow and policy documents only where the prompt changes actual behavior.

