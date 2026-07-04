# Architecture

CloudInfra Secure is **control-centric** and **baseline-agnostic**. The engine's only vocabulary is controls; baselines are manifests that list control IDs.

## Principles

- **Control-centric, baseline-agnostic** — the engine has no knowledge of any baseline or standard.
- **Content / engine separation** — the engine is fixed PowerShell; controls and baselines are versioned **data** (content packs), shippable independently.
- **Declarative, no arbitrary code** — a control describes desired state as **data**; typed **Providers** interpret it. Content is never `Invoke-Expression`'d.
- **Fleet-first** — non-interactive, structured JSON output, meaningful exit codes.
- **Idempotent & reversible** — apply is safe to re-run; every change is snapshotted and individually reversible.
- **Fail safe, fail loud** — strict mode, JSON-schema validation of content, full audit logging, never auto-reboots.

## The Provider model

Each control names a `provider` and supplies provider-specific `check` / `apply` / `rollback` parameter blocks — **data, not code**. Providers implement `Test()`, `Apply()`, `Restore()`, and `Capture()`.

Providers in V1: `Registry`, `SecEdit`, `AuditPol`, `Service`, `Firewall`, `Defender`, `Manual`, and `Custom` (a signed escape hatch). Adding a new setting type = one new provider, written once. Adding a control = one JSON file, zero engine changes.

## Content model

- **Control** (`Controls/<ID>.json`) — full metadata + provider parameters + optional informational `complianceMappings`. Exists exactly once; referenced by many baselines.
- **Baseline** (`Baselines/<id>.json`) — name, tier, supported OS, and a list of control IDs.

Both are validated at load time against JSON schemas.

## Forward compatibility

- Every control carries `platform` + `supportedOS`; providers are platform-scoped. **V2 (Linux)** adds new providers under the same model — no engine rewrite.
- JSON-everywhere output + a stable log schema means **V3 (SaaS)** can ingest fleet results without an agent rewrite.
