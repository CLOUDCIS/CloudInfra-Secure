# Roadmap

- **V1 (current)** — Windows Server 2022 / 2025. Pre-hardened marketplace images with 300+ technical security controls; audit, apply, snapshot, rollback, branded reporting, verify, and drift monitoring with Graph/SMTP alerts; framework-alignment mapping across recognised standards.
- **In progress** — Authenticode code signing + signed integrity manifest on published images (see [Architecture › Software integrity and trust](architecture.md)); marketplace publishing across Azure, AWS and Google Cloud; licensing / entitlement.
- **V2 — Linux** — new providers (`Sysctl`, `Systemd`, `FilePermission`) under the same control/baseline model.
- **V3 — SaaS compliance platform** — central ingestion of fleet results (structured JSON + stable log schema) for multi-VM, multi-cloud monitoring and reporting.

Every design decision assumes the product will eventually manage thousands of Windows and Linux VMs across Azure, AWS, and GCP.
