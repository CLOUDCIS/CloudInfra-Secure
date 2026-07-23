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

Providers in V1: `Registry`, `SecEdit`, `AuditPol`, `Service`, `Firewall`, `Defender`, `Manual`, and `Custom`. Adding a new setting type = one new provider, written once. Adding a control = one JSON file, zero engine changes.

!!! info "The `Custom` provider is not an arbitrary-code escape hatch"
    Standard control content is **declarative** and cannot execute arbitrary code
    — a control JSON file describes desired state and is interpreted by a typed
    provider; it is never `Invoke-Expression`'d. The `Custom` provider exists for
    the rare control whose logic cannot be expressed declaratively, but that logic
    is **part of the signed product codebase**, reviewed and shipped with the
    engine — it is **not** executable content supplied through control JSON. In
    other words, no control file can introduce new executable behaviour; it can
    only select and parameterise logic that already ships, signed, in the product.

## Content model

- **Control** (`Controls/<ID>.json`) — full metadata + provider parameters + optional informational `complianceMappings`. Exists exactly once; referenced by many baselines.
- **Baseline** (`Baselines/<id>.json`) — name, tier, supported OS, and a list of control IDs.

Both are validated at load time against JSON schemas.

## Software integrity and trust

CloudInfra Secure runs with administrative privilege on a hardened server, so the
integrity of the product itself is part of the security model. Two independent
mechanisms establish that trust:

**Authenticode code signing.** The product's PowerShell code — every `.ps1`,
`.psm1` and `.psd1` — is Authenticode-signed by the publisher, **InfraSOS FZCO**,
with a trusted timestamp. The signature binds the executable content to a verified
publisher identity and proves it has not been altered since signing; it cannot be
forged without the publisher's key. You can inspect any file's signature directly:

```powershell
Get-AuthenticodeSignature .\Modules\Core.psm1 |
    Format-List Status, @{ n = 'Signer'; e = { $_.SignerCertificate.Subject } }
```

A `Valid` status with the `INFRASOS - FZCO` signer is the expected result on a
genuine published image. (`Format-List` with the signer subject avoids the
console truncating the certificate details.)

**SHA-256 integrity manifest.** Every product file — the signed code *and* the
declarative control and baseline JSON — is listed in a SHA-256 `manifest.json`.
The `verify` command recomputes each file's hash and compares it to the manifest,
detecting any addition, removal or modification of product content. This extends
tamper detection to the non-executable data files that Authenticode does not
cover. What `verify` checks:

- all product files are present and unmodified (hashes match the manifest);
- the deployed baseline is intact;
- the current security posture and any drift since publication.

**If a file is modified**, its recomputed hash no longer matches the manifest and
`verify` reports the mismatch; if the file is signed and tampered, its Authenticode
status also ceases to be `Valid`. Either signal tells you the product on disk is no
longer the published, trusted content.

**Update trust model.** Product updates ship as newly signed content with an
updated manifest, so the same two checks — signature and manifest — re-establish
trust after every update. Trust is never assumed; it is re-verifiable at any time
with one command.

!!! note "Signing status"
    Product releases are Authenticode code-signed by **InfraSOS FZCO** with a
    trusted timestamp, so on a published image `Get-AuthenticodeSignature` returns
    `Valid` with that signer. A copy you build yourself from source is unsigned
    until you sign it — the SHA-256 integrity manifest applies either way.

## Forward compatibility

- Every control carries `platform` + `supportedOS`; providers are platform-scoped. **V2 (Linux)** adds new providers under the same model — no engine rewrite.
- JSON-everywhere output + a stable log schema means **V3 (SaaS)** can ingest fleet results without an agent rewrite.
