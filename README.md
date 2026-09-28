# Texas Health Access Navigator OS v3.0.0

A public-ready, local-first Texas healthcare-access navigation and multidisciplinary coordination suite. It is designed for individuals, caregivers, community navigators, schools, nonprofits, public-health teams, researchers, emergency planners, municipalities and cross-domain partners.

## Safety boundary

This project supports healthcare access navigation, education, planning and public-health coordination. It does **not** diagnose, prescribe, change medication dosing, guarantee eligibility, replace clinicians or delay emergency care. Call 911 for a life-threatening emergency in the U.S.; call/text 988 for suicide or mental-health crisis support.

The bundled multiplayer server is a project-collaboration prototype. It is **not** a HIPAA-compliant EHR, clinical messaging system or patient portal. Do not place PHI or other sensitive personal-health data in shared rooms.

## What changed in v3

- Preserved the original Texas Health Access Navigator modules, calculators, records tools, evidence library and local data model.
- Added a sourced Texas Health System Snapshot with official Texas/federal resources.
- Added environmental/occupational health and school-health collaboration modules.
- Added a cross-domain dependency map linking health to housing, food, water, energy, mobility, connectivity, education and resilience.
- Added multidisciplinary workspaces, task boards, decision logs, comments and collaborative evidence records.
- Added same-device `BroadcastChannel` collaboration.
- Added a zero-dependency Node multiplayer server using authenticated room keys, revision numbers and conflict detection.
- Added optional WebLLM/WebGPU local-inference integration using the official MLC AI CDN entry point. Model/code downloads are online-only; inference occurs in the browser after loading.
- Added a versioned service worker, installable PWA manifest, offline fallback and explicit live/cached/offline distinctions.
- Added source registry, current operational facts, schemas, data documentation and validation tests.
- Added import migration tolerance for older backups.

## Bundle tree

```text
texas_health_navigator_os_bundle/
├── index.html
├── config.js
├── manifest.webmanifest
├── sw.js
├── offline.html
├── package.json
├── README.md
├── CHANGELOG.md
├── LICENSE
├── assets/
│   └── suite.css
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── modules/
│   ├── collab-client.js
│   ├── suite-enhancements.js
│   └── webllm-adapter.js
├── data/
│   ├── cross-domain-system.json
│   ├── source-registry.json
│   └── texas-health-facts.json
├── schemas/
│   ├── backup.schema.json
│   └── workspace.schema.json
├── server/
│   ├── package.json
│   ├── server.mjs
│   └── data/workspaces.json
├── docs/
│   ├── DATA-SOURCES.md
│   ├── MULTIPLAYER.md
│   ├── SECURITY-PRIVACY.md
│   └── WEBLLM.md
├── tests/
│   └── validate.mjs
└── legacy/
    └── texas-health-access-navigator-os-2026-09-27.html
```

## Fastest local start

Requires Node 20+.

```bash
npm start
```

Then open `http://127.0.0.1:8787/`.

This starts both the static web app and the collaboration API. No npm dependencies are required.

### Standalone `file://`

You can open `index.html` directly for many local educational tools, calculators and IndexedDB features. However:

- service workers do not run under `file://`;
- the PWA cannot install normally from `file://`;
- server multiplayer is unavailable unless you separately run the server and enter its URL;
- WebLLM package/model discovery requires network access and browser support;
- live external directories and current official resources are online-only.

## Multiplayer

1. Run or deploy the bundled Node server.
2. Open **Collaboration Workspace**.
3. Create a local workspace.
4. Generate a room ID/access key.
5. Select **Create remote room**.
6. Share the server URL, room ID and access key only with intended collaborators.
7. Collaborators create/join the same workspace and use **Sync now** or **Start auto-sync**.

The server stores only the collaboration payload: workspace metadata, tasks, comments, decisions and evidence records. The client does not synchronize the personal records, medications, appointments or health-profile stores.

The server is intentionally minimal. Production deployments should add organization-grade identity, TLS termination, authorization policies, audit retention, encrypted backups, rate limiting and formal security review.

## WebLLM

The Local WebLLM Copilot dynamically imports the official WebLLM package from `https://esm.run/@mlc-ai/web-llm` only after the user chooses to discover/load models. WebGPU is required. The first model load can be large and slow because model artifacts are downloaded and cached by the browser/WebLLM. See `docs/WEBLLM.md`.

Do not use the copilot for diagnosis, prescribing, medication changes or eligibility determinations. Treat outputs as drafts requiring evidence verification.

## Offline behavior

The service worker precaches the app shell and bundled local data. It never caches collaboration API responses and deliberately leaves WebLLM/model caching to WebLLM itself. Live official websites and APIs are not represented as available offline.

## Data sovereignty

The original application stores structured personal/local data in IndexedDB and lightweight preferences in localStorage. v3 adds collaboration stores and keeps old backup imports migration-tolerant.

Users can export JSON backups and create SHA-256 hashes. SHA-256 demonstrates byte integrity, not authorship, identity or creation date.

## Evidence model

- A — authoritative measured/administrative data
- B — peer-reviewed evidence
- C — institutional analysis
- D — preliminary evidence
- E — model/scenario
- F — hypothesis/concept

Planning outputs should additionally label FACT, INFERENCE, MODEL, SCENARIO or HYPOTHESIS when relevant.

## Testing

Run:

```bash
npm test
```

The included static validator checks required files, manifest JSON, key index references and service-worker versioning. See the delivery note for additional tests actually executed during packaging.

## Deployment

For a simple Node deployment:

```bash
HOST=0.0.0.0 PORT=8787 npm start
```

Place the service behind HTTPS for production. Service workers require HTTPS except on localhost. Persist `server/data/workspaces.json` on durable storage or replace the file adapter with a production database.

If hosting only the static PWA, collaboration falls back to local IndexedDB and `BroadcastChannel`; remote multiplayer will not function.

## Accessibility

The application targets WCAG 2.2 AA practices with keyboard navigation, visible focus, scalable type, reduced-motion support, accessible forms, large targets and print styles. This is not a formal accessibility certification.

## Attribution

Systems architecture/concept: **Foster + Navi / Planetary Restoration Archive**.

External agencies, datasets, WebLLM and linked resources remain under their own terms and licenses. No proprietary third-party source code is copied into this bundle. The WebLLM package is loaded from its documented CDN at runtime when explicitly requested.
