# Roadmap

- **V1 (current)** — Windows Server 2022 / 2025. Pre-hardened marketplace images with 300+ technical security controls; audit, apply, snapshot, rollback, branded reporting, verify, and drift monitoring with Graph/SMTP alerts; framework-alignment mapping across recognised standards; **Authenticode code signing of all product scripts (InfraSOS FZCO), plus a SHA-256 integrity manifest covering every file** (see [Architecture › Software integrity and trust](architecture.md)).
- **In progress** — marketplace publishing across Azure, AWS and Google Cloud; licensing / entitlement.
- **V2 — Linux** — new providers (`Sysctl`, `Systemd`, `FilePermission`) under the same control/baseline model.
- **V3 — SaaS compliance platform** — central ingestion of fleet results (structured JSON + stable log schema) for multi-VM, multi-cloud monitoring and reporting.

Every design decision assumes the product will eventually manage thousands of Windows and Linux VMs across Azure, AWS, and GCP.
