# Local Setup Guide

This guide gets `attendr-backend` running on your machine from a clean clone.

## 1. Prerequisites

Install these before you start:

| Tool | Notes |
|---|---|
| **Node.js** | LTS version recommended (18+). Not pinned in `package.json` — ask the team if the project requires an exact version. |
| **pnpm** | This project uses **pnpm**, not npm or yarn (`pnpm-workspace.yaml` is present, and scripts internally call `pnpm run ...`). Install via `npm install -g pnpm` if you don't have it. |
| **Docker + Docker Compose** | Used to run PostgreSQL and Redis locally so you don't have to install them natively. |
| **Git** | For version control (see [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) once you're set up). |

## 2. Clone and Install

```bash
git clone https://github.com/minkxx/attendr-backend
cd attendr-backend
pnpm install
```

`pnpm install` will also run the `prepare` script, which sets up Husky git hooks (linting/formatting on commit — see [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)).

## 3. Environment Variables

The app validates its environment on boot (`src/common/config/env.config.ts`) — if a required variable is missing, **the app will refuse to start** and print exactly which variable is wrong.

Create a **`.env.local`** file in the project root with the following:

```env
# --- Used by docker-compose.yml to init the local Postgres container ---
POSTGRES_USER=attendr
POSTGRES_PASSWORD=change-me

# --- App config ---
NODE_ENV=development
APP_NAME=Attendr
PORT=3000
BASE_URL=http://localhost:3000

# Must match the URL your frontend/mobile app runs on (used for CORS/trusted origins)
FRONTEND_URL=attendr://

# Any long random string — used to sign auth sessions
BETTER_AUTH_SECRET=replace-with-a-long-random-string
BETTER_AUTH_URL=http://localhost:3000/api/auth

# Local Postgres, matching the docker-compose service + credentials above
DATABASE_URL=postgresql://attendr:change-me@localhost:5432/attendr?sslmode=disable

# Local Redis
REDIS_URL=redis://localhost:6379

# Transactional email (verification emails) — sent via Brevo's API
BREVO_API_KEY=your-brevo-api-key
SMTP_MAIL_FROM=no-reply@yourdomain.com
```

**Reference table** (full list, from `env.config.ts`):

| Variable | Required? | Default | Purpose |
|---|---|---|---|
| `NODE_ENV` | No | `development` | `development` \| `production` \| `test` |
| `APP_NAME` | No | `Attendr` | Used in outgoing email templates |
| `BASE_URL` | No | `http://localhost:3000` | Public base URL of this API |
| `PORT` | No | `3000` | Port the HTTP server listens on |
| `FRONTEND_URL` | **Yes** | — | Trusted origin for CORS / Better Auth |
| `BETTER_AUTH_SECRET` | **Yes** | — | Secret used to sign session tokens |
| `BETTER_AUTH_URL` | No | `http://localhost:3000/api/auth` | Base URL Better Auth mounts itself on |
| `DATABASE_URL` | **Yes** | — | Postgres connection string |
| `REDIS_URL` | **Yes** | — | Redis connection string (cache, BullMQ, Socket.IO adapter) |
| `BREVO_API_KEY` | **Yes** | — | API key for [Brevo](https://www.brevo.com/) transactional email |
| `SMTP_MAIL_FROM` | **Yes** | — | "From" address for verification emails |

> **Note on `.env.dev` / `.env.prod`:** The app also loads `.env.dev` (or `.env.prod` in production) alongside `.env.local` — see `db:migrate:dev` / `db:migrate:prod` in `package.json`. These are typically used for shared/deployed environments, not needed for pure local work. For local development, `.env.local` alone is enough as long as it contains every required variable above.

Ask a teammate or check your team's secrets manager for real values of `BETTER_AUTH_SECRET` and `BREVO_API_KEY` if you need working email verification — the app will still boot with placeholder values, but sign-up emails won't actually send.

## 4. Start Postgres & Redis

The repo ships a `docker-compose.yml` with Postgres 17 and Redis 7:

```bash
docker compose up -d
```

This starts:
- `attendr_postgres` on `localhost:5432`
- `attendr_redis` on `localhost:6379`

Check they're healthy:

```bash
docker compose ps
```

## 5. Run Database Migrations

Apply the Prisma schema to your local database:

```bash
pnpm run db:migrate:local
```

This runs `prisma migrate dev` against `.env.local`. If you just need to sync the schema without creating a migration file (e.g., quick prototyping), use:

```bash
pnpm run db:push:local
```

## 6. Generate prisma client

```bash
pnpm prisma generate
```

## 7. Start the Dev Server

```bash
pnpm run start:dev
```

This runs in watch mode (auto-restarts on file changes). By default the server listens on `http://localhost:3000`.

## 8. Verify It's Working

```bash
curl http://localhost:3000/health
```

You should get:

```json
{ "message": "Server healthy!" }
```

> Note: `/` and `/health` are the only routes **not** prefixed with `/api` (see `main.ts`). Every other route lives under `/api/...` — for example, the actual endpoint is `/api/rooms/create`, not `/rooms/create`.

You're now ready to hit the API — see [API.md](./API.md) for the full endpoint reference.

## Other Useful Scripts

| Command | What it does |
|---|---|
| `pnpm run lint` | Lint + auto-fix with ESLint |
| `pnpm run format` | Format the whole repo with Prettier |
| `pnpm test` | Run unit tests (Jest) |
| `pnpm run test:watch` | Unit tests in watch mode |
| `pnpm run test:cov` | Unit tests with coverage report |
| `pnpm run test:e2e` | Run end-to-end tests |
| `pnpm run build` | Compile TypeScript to `dist/` |
| `pnpm run start:prod` | Run the compiled build (`dist/main.js`) |

## Troubleshooting

- **"Environment validation failed" on boot** — the console output lists exactly which variable is missing/invalid. Fix your `.env.local` and restart.
- **Prisma client errors about a missing generated client** — run `pnpm run db:push:local` or `pnpm run db:migrate:local` at least once; Prisma generates its client (`src/common/generated/prisma/`) as part of the install/migrate flow.
- **Port already in use** — either stop whatever's on port 3000/5432/6379, or change `PORT` in `.env.local` (and the Docker port mappings if needed).
