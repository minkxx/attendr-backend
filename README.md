# Attendr Backend

> [!WARNING]
>
> This project is in early development and not yet functional.

---

> Scalable backend infrastructure for modern academic attendance management.

## Overview

**Attendr Backend** is a high-performance, multi-tenant backend API designed to power smart academic attendance systems for schools, colleges, and learning institutions.

Built with a modern TypeScript backend stack, it combines real-time communication, secure authentication, geofenced attendance validation, distributed background processing, and intelligent attendance analytics.

The project focuses on solving common classroom attendance challenges by enabling automated attendance tracking, collaborative bunk/leave decisions, schedule management, and scalable institution-wide deployment.

---

## Core Features

### Authentication & User Management

- Secure authentication powered by Better Auth
- Expo mobile authentication integration

### Attendance Management

- Create and manage attendance records
- Manual attendance updates
- Attendance status tracking

### Room / Classroom Management

- Create academic rooms/classes
- Invite code based room joining
- Admin & member role system
- Member approval workflow
- Multi-tenant architecture for isolated classroom environments

### Timetable System

- Subject scheduling
- Timetable management
- Subject-based attendance mapping

### Smart Attendance Validation

- Geofence-based attendance validation
- Automatic attendance verification logic

### Real-Time Collaborative Polling

- WebSocket powered live communication
- Consensus-based bunk polls
- Threshold-based attendance decision engine

---

## Tech Stack

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white) ![BullMq](https://img.shields.io/badge/BullMQ-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) ![Better-Auth](https://img.shields.io/badge/Better%20Auth-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Zod](https://img.shields.io/badge/-Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

## Setup

### 1. Clone Repository

```bash
git clone https://github.com/minkxx/attendr-backend.git
cd attendr-backend
```

### 2. Install pnpm

```bash
npm install -g pnpm@latest
pnpm -v
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Configure Environment Variables

```bash
cp .env.example .env
```

Fill required secrets:

- APP_NAME
- BASE_URL
- FRONTEND_URL
- BETTER_AUTH_SECRET
- BETTER_AUTH_URL
- DATABASE_URL
- REDIS_HOST
- REDIS_PORT
- SMTP_MAIL_HOST
- SMTP_MAIL_PORT
- SMTP_MAIL_USER
- SMTP_MAIL_PASS
- SMTP_MAIL_FROM

### 5. Start Infrastructure

```bash
docker compose up -d
```

### 6. Run Database Migration

```bash
pnpm dlx prisma migrate dev --name init
```

### 7. Generate Prisma Client

```bash
pnpm dlx prisma generate
```

### 8. Start Development Server

```bash
pnpm start:dev
```

---

## Development Commands

```bash
pnpm build
pnpm start:dev
pnpm test
pnpm test:cov
pnpm lint
pnpm format
```

---

## Health Check

```http
GET /health
```

Response:

```json
{
  "message": "Server healthy!"
}
```

---

## Current Status

⚠️ Project is currently under active development.

Planned improvements:

- Predictive attendance analytics
- Advanced reporting dashboard
- Push notifications
- Automated attendance reminders
- AI-powered attendance insights

---

## License

[AGPL-3.0-only](/LICENSE)

---

Built for scalable academic infrastructure.
