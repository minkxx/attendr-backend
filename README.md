# Attendr Backend

> [!WARNING]
>
> This project is in early development and not yet functional.

## Overview

**Attendr Backend** is a high-performance, multi-tenant backend API designed to power smart academic attendance systems.

Built with a modern TypeScript backend stack, it combines real-time communication, secure authentication, geofenced attendance validation, distributed background processing, and intelligent attendance analytics.

The project focuses on solving common classroom attendance challenges by enabling automated attendance tracking, collaborative bunk/leave decisions, schedule management, and scalable deployment.

## What is this?

This is a backend service for a class-attendance and "should we skip class" coordination app:

- Students create or join a **Room** (a class group) using an invite code.
- A room admin defines a **Timetable** — the recurring schedule of subjects/classes for that room.
- Members mark or review their **Attendance** per class.
- Any admin can start a live **Bunk Poll** ("should we skip today's class?"). Members vote in real time over WebSockets, and once enough members agree (the `threshold`), the poll auto-locks and the outcome is broadcast to everyone in the room.

## Tech Stack at a Glance

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white) ![BullMq](https://img.shields.io/badge/BullMQ-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) ![Better-Auth](https://img.shields.io/badge/Better%20Auth-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Zod](https://img.shields.io/badge/-Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Where to Go Next

1. **[SETUP.md](./docs/SETUP.md)** — Get the project running on your machine (Node, Docker, env vars, database, first run).
2. **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** — How the codebase is organized, the tech stack, and how a request flows through the system.
3. **[CONCEPTS.md](./docs/CONCEPTS.md)** — The core domain concepts (Rooms, Timetables, Attendance, Bunk Polls) and how the trickier parts (real-time voting, background sync) actually work.
4. **[API.md](./docs/API.md)** — Every HTTP endpoint and WebSocket event, with URL formats, required JSON bodies, and example responses.
5. **[GIT_WORKFLOW.md](./docs/GIT_WORKFLOW.md)** — Branch naming, commit conventions, and how to get your code merged safely.

## License

[AGPL-3.0-only](./LICENSE)

---

<p align="center">Made with ❤️ by Minkxx</p>
