# Multiplayer / Collaboration Architecture

## Purpose

The multiplayer layer supports cross-domain health-access work by teams such as public health, clinics, EMS, schools, community health workers, transportation, housing, food/water systems, utilities, accessibility specialists, researchers and local government.

It synchronizes **project coordination data only**:

- workspace metadata;
- disciplines and objective;
- tasks;
- comments;
- decisions;
- evidence records.

It does **not** synchronize the original personal stores for medications, diagnoses, appointments, insurance details or household health plans.

## Modes

### Local-only

IndexedDB stores workspace records. `BroadcastChannel` informs other tabs on the same origin/device about changes. This requires no server.

### Remote multiplayer

`server/server.mjs` provides a small REST synchronization API with:

- random/user-defined room IDs;
- access keys hashed with SHA-256 at rest;
- bearer-key authentication;
- optimistic concurrency through integer revisions and `If-Match`;
- 1 MB request limit;
- a shared-payload allowlist;
- atomic JSON persistence;
- same-origin static hosting.

The client pulls a room, merges records by ID/update timestamp, applies the merged state locally and pushes using the latest revision. Revision conflicts trigger a merge/retry cycle.

## API

- `GET /api/health`
- `POST /api/rooms`
- `GET /api/rooms/:roomId`
- `PUT /api/rooms/:roomId` with `If-Match: <revision>`

## Production hardening

The bundled server is deliberately dependency-free and useful for prototypes/pilots. Before regulated or institutional production use, add:

- HTTPS/TLS termination;
- organizational SSO/OIDC;
- role/attribute authorization;
- server-side audit logs and retention policy;
- database-level encryption/backups;
- rate limiting and abuse controls;
- secret rotation/revocation;
- security testing and dependency/process monitoring;
- formal privacy impact assessment;
- legal/compliance review appropriate to the actual data and use case.

Do not claim the bundled server is HIPAA compliant.
