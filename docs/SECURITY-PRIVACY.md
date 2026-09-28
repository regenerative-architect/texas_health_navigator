# Security and Privacy Model

## Data classes

### Local sensitive/personal

Examples: medications, diagnoses entered by the user, appointment information, insurance context and household access plans. These remain in browser IndexedDB by default and are excluded from multiplayer sync.

### Shareable project coordination

Examples: county/service-area problem statements, tasks, evidence citations, non-identifying comments and decisions. These may be synchronized if the user explicitly connects a collaboration room.

## Controls

- No embedded API credentials.
- No hidden analytics or third-party trackers.
- JSON import is parsed and limited; imported HTML is not intentionally executed.
- External links use safe-target patterns in the original application.
- Collaboration API request bodies are limited to 1 MB.
- Server payload top-level fields are allowlisted.
- Access keys are stored only as SHA-256 hashes by the bundled server.
- Client room access keys are held in `sessionStorage`, not long-term localStorage.
- API responses are `no-store` and are excluded from the service worker.
- Server sets defensive HTTP headers and a CSP compatible with the optional WebLLM CDN/model downloads.

## Important limitations

SHA-256 access-key hashing is not a substitute for a full identity system. Room keys can be shared, copied or stolen. The bundled multiplayer service has no user revocation model, MFA, enterprise auditing or per-record permissions.

Do not store PHI in multiplayer rooms. Do not deploy to production clinical workflows without security/privacy/legal review.

## Integrity

Application/backup SHA-256 hashes show whether bytes changed. They do not establish authorship, identity or original creation time.
