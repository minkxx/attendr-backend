# API Reference

## Conventions

- **Base URL (local):** `http://localhost:3000`
- **Global prefix:** every route below is prefixed with `/api` **except** `/` and `/health`.
- **Auth:** Better Auth issues an HTTP-only session cookie on sign-in. Send it with every request to a protected route (e.g. `credentials: 'include'` in `fetch`, or a cookie jar in curl/Postman). Routes are protected **by default** — only `/` and `/health` are public.
- **Content-Type:** `application/json` for all request bodies.
- **Validation:** request bodies are validated with Zod. A failed validation returns `400 Bad Request` with the specific field error message (e.g. `"Name is too short."`).
- **Response shape:** most endpoints return `{ "message": "...", ...data }` — a human-readable message plus the relevant record(s).

---

## Auth (`/api/auth/*`)

Authentication is handled by **Better Auth**, not a hand-written controller — routes are generated automatically based on the config in `src/auth/auth.module.ts` (email/password enabled, Expo plugin enabled). The commonly used ones are:

| Method | Path | Body |
|---|---|---|
| POST | `/api/auth/sign-up/email` | `{ "name": string, "email": string, "password": string }` |
| POST | `/api/auth/sign-in/email` | `{ "email": string, "password": string }` |
| POST | `/api/auth/sign-out` | — |
| GET | `/api/auth/get-session` | — (reads the session cookie) |

> Exact available routes depend on the installed Better Auth version and enabled plugins. Sign-up triggers a verification email (see `email/email.service.ts`); check the [Better Auth docs](https://www.better-auth.com/docs) for the full, version-accurate route list and options.

---

## User

### Get my profile
```
GET /api/user
```
Auth required. Returns the current session's user object (no body needed).

**Response**
```json
{
  "id": "...",
  "name": "...",
  "email": "...",
  "emailVerified": true
  // ...other Better Auth user fields
}
```

---

## Rooms (`/api/rooms`)

### Create a room
```
POST /api/rooms/create
```
Creates a room and makes the caller its admin (auto-approved member).

**Body**
```json
{ "name": "CS-301 Morning Batch" }
```
| Field | Type | Rules |
|---|---|---|
| `name` | string | min length 2 |

**Response**
```json
{
  "message": "Room created successfully.",
  "room": { "id": "...", "name": "...", "inviteCode": "...", "adminId": "..." },
  "roomMember": { "roomId": "...", "userId": "...", "role": "ADMIN", "isApproved": true }
}
```

### Join a room
```
POST /api/rooms/join/:inviteCode
```
No request body — the invite code is a URL path parameter, e.g. `POST /api/rooms/join/AB12CD`.

**Response**
```json
{
  "message": "Room joined successfully.",
  "roomMember": { "roomId": "...", "userId": "...", "isApproved": false }
}
```
> New members are **not auto-approved** — a room admin must approve them (see below) before they can, e.g., vote in polls.

### Get a room
```
GET /api/rooms/:id
```
Caller must already be a member of the room.

**Response**
```json
{ "message": "Fetched room successfully.", "room": { "id": "...", "name": "...", "inviteCode": "...", "adminId": "..." } }
```

### Approve a member
```
PATCH /api/rooms/:roomId/members/:memberId/approve
```
Admin-only (must be the room's `adminId`). No request body.

**Response**
```json
{ "message": "Successfully approved member!", "member": { "roomId": "...", "userId": "...", "isApproved": true } }
```

---

## Timetable (`/api/rooms/:roomId/timetable`)

### Create a timetable entry
```
POST /api/rooms/:roomId/timetable
```
Admin-only (must be the room's admin).

**Body**
```json
{
  "subjectName": "Data Structures",
  "dayOfWeek": 2,
  "startTime": "09:00",
  "endTime": "10:00",
  "latitude": 26.1445,
  "longitude": 91.7362,
  "radius": 100
}
```
| Field | Type | Rules |
|---|---|---|
| `subjectName` | string | required, non-empty |
| `dayOfWeek` | int | 1–7 |
| `startTime` | string | required, non-empty |
| `endTime` | string | required, non-empty |
| `latitude` | float | optional — for geofenced attendance |
| `longitude` | float | optional — for geofenced attendance |
| `radius` | float | optional — geofence radius, used with lat/long |

**Response**
```json
{ "message": "Timetable created successfully.", "timetable": { "id": "...", "roomId": "...", "subjectName": "...", "..." } }
```

### List a room's timetable
```
GET /api/rooms/:roomId/timetable
```
Returns all timetable entries for the room. `404` if none exist.

**Response**
```json
{ "message": "Timetable fetched successfully.", "timetable": [ { "id": "...", "subjectName": "...", "dayOfWeek": 2 } ] }
```

---

## Attendance (`/api/attendance`)

### Get all my attendance records
```
GET /api/attendance/all
```
**Response**
```json
{ "message": "Attendances fetched successfully.", "attendances": [ { "id": "...", "timetableId": "...", "date": "...", "status": "PRESENT" } ] }
```

### Get my attendance for one timetable entry
```
GET /api/attendance/:timetableId
```
**Response**: same shape as above, filtered to that `timetableId`.

### Mark attendance
```
POST /api/attendance/:timetableId/mark
```
**Body**
```json
{
  "date": "2026-09-04T00:00:00.000Z",
  "status": "PRESENT",
  "isManual": false
}
```
| Field | Type | Rules |
|---|---|---|
| `date` | ISO datetime string | required |
| `status` | `"PRESENT" \| "ABSENT" \| "CANCELLED"` | optional |
| `isManual` | boolean | optional |

**Response**
```json
{ "message": "Attendance marked successfully.", "attendance": { "id": "...", "userId": "...", "timetableId": "...", "date": "...", "status": "PRESENT" } }
```

### Update attendance
```
POST /api/attendance/:timetableId/update
```
Same body shape as **Mark attendance** above. Updates the existing record for that user/timetable/date (and flags it as `isManual: true` server-side).

**Response**
```json
{ "message": "Attendance updated successfully.", "attendance": { "..." : "..." } }
```

---

## Bunk Polls — HTTP (`/api/polls`)

### Create a poll
```
POST /api/polls/:roomId/:timetableId
```
Admin-only (must be the room's admin).

**Body**
```json
{
  "date": "2026-09-04T00:00:00.000Z",
  "threshold": 60,
  "expiresAt": "2026-09-04T09:15:00.000Z"
}
```
| Field | Type | Rules |
|---|---|---|
| `date` | ISO datetime string | required |
| `threshold` | int | optional, 50–100 (% of approved members needed to lock the poll) |
| `expiresAt` | ISO datetime string | required |

**Response**
```json
{ "message": "Poll created successfully.", "poll": { "id": "...", "roomId": "...", "timetableId": "...", "threshold": 60, "expiresAt": "...", "isLocked": false } }
```

Once created, voting happens over **WebSocket**, not HTTP — see below.

---

## Bunk Polls — WebSocket (real-time voting)

- **Namespace:** `/polls`
- **Auth:** the socket handshake must carry a valid `better-auth.session_token` cookie (the same cookie set by HTTP sign-in). Connections without a valid session are rejected.
- **Connect with a query param** so the server can place you in the right room:

```js
const socket = io('http://localhost:3000/polls', {
  withCredentials: true,
  query: { roomId: '<roomId>' },
});
```

### Emit: `castVote`
Send this event to cast/update your vote on an active poll.

```json
{
  "roomId": "<roomId>",
  "pollId": "<pollId>",
  "supportsBunk": true
}
```
> Your identity is taken from your authenticated session server-side — you don't need to (and can't spoof) a `userId` field.

### Listen: `pollUpdated`
Broadcast to everyone in the room after any vote is cast.
```json
{ "pollId": "...", "totalVotes": 12, "classSkipCount": 8, "percentage": 67 }
```

### Listen: `pollLocked`
Broadcast once the vote threshold is reached — the poll is now closed.
```json
{ "pollId": "...", "message": "The pack has spoken. Class is skipped today." }
```

### Listen: `pollError`
Broadcast to the room if a vote can't be processed (poll doesn't exist, is already locked/expired, or the voter isn't an approved room member).
```json
{ "pollId": "...", "message": "Poll is either locked or expired." }
```

---

## Root / Health

These two routes are **not** under `/api` and are **public**.

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "message": "attendr-backend is running!" }` |
| GET | `/health` | `{ "message": "Server healthy!" }` |
