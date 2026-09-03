# Git Workflow

## The Golden Rule

> **Never push directly to `main`.** All day-to-day work is branched off of, and merged into, **`dev`**. `main` is reserved for releases.

```
main   ← release-only, updated via the release process, not direct pushes
 └── dev   ← integration branch, all feature/fix work merges here
      ├── feat/room-invite-links
      ├── fix/poll-vote-race-condition
      └── docs/update-api-reference
```

## 1. Start From an Up-to-Date `dev`

```bash
git checkout dev
git pull origin dev
```

## 2. Create Your Branch

Name branches as `<type>/<short-kebab-case-description>`:

| Prefix | Use for |
|---|---|
| `feat/` | A new feature or capability |
| `fix/` | A bug fix |
| `docs/` | Documentation-only changes |
| `refactor/` | Code change that neither fixes a bug nor adds a feature |
| `test/` | Adding or fixing tests |
| `chore/` | Tooling, dependency bumps, config — no production code change |
| `perf/` | A performance improvement |
| `ci/` | CI/CD pipeline changes |

```bash
git checkout -b feat/bunk-poll-reminders
```

Keep the description short and specific — `fix/attendance-date-timezone` beats `fix/bug`.

## 3. Commit Your Work

This repo uses **Commitlint** with the [Conventional Commits](https://www.conventionalcommits.org/) spec (`@commitlint/config-conventional`), enforced via a Husky git hook. Format your commit messages as:

```
<type>(optional-scope): <short summary>

[optional longer description]
```

Examples:
```
feat(poll): broadcast pollError when voter isn't approved
fix(attendance): use UTC when comparing attendance dates
docs(api): document the castVote websocket payload
```

Valid `type`s line up with the branch prefixes above (`feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `ci`, plus `style` and `build`). A malformed commit message will be rejected by the commit hook — fix the message and commit again.

Before committing, `lint-staged` automatically runs ESLint (`--fix`) and Prettier on your staged `.js`/`.ts`/`.tsx` files, so most style issues are caught for you.

## 4. Push and Open a Pull Request — Into `dev`, Not `main`

```bash
git push -u origin feat/bunk-poll-reminders
```

Open a PR with **`dev`** as the base branch (**not** `main`). In the PR description, briefly explain:
- What changed and why
- How to test it manually (if not obvious)
- Any related issue/ticket

## 5. Keep Your Branch Current

If `dev` has moved on while you were working, rebase (preferred, for a clean linear history) or merge:

```bash
git fetch origin
git rebase origin/dev
# resolve any conflicts, then:
git push --force-with-lease
```

## 6. Before Requesting Review

```bash
pnpm run lint
pnpm run format
pnpm test
```

Fix anything that fails — don't rely solely on CI to catch it.

## Releases (`main`)

`main` only moves forward via the release process — this repo uses `standard-version` (see `pnpm run release`, `release:minor`, `release:patch` in `package.json`), which bumps the version, generates a changelog from your Conventional Commit messages, and tags the release. This is why commit message discipline matters: a messy commit history means a messy changelog. Releases to `main` are typically handled by a maintainer/lead, not by opening a feature PR directly against it.

## Quick Checklist

- [ ] Branched off the latest `dev`
- [ ] Branch name follows `<type>/<description>`
- [ ] Commits follow Conventional Commits
- [ ] `pnpm run lint`, `pnpm run format`, `pnpm test` all pass
- [ ] PR opened against `dev` (never `main`)
