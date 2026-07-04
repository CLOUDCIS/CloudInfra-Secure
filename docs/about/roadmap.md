# Roadmap

- **V1 (current)** — Windows Server 2022 / 2025. Audit, apply, snapshot, rollback, branded reporting, verify, drift monitoring with Graph/SMTP alerts, and a growing control library across 14 compliance standards.
- **Pre-GA** — Authenticode code signing + signed manifest; expanded control library toward comprehensive coverage; licensing / entitlement.
- **V2 — Linux** — new providers (`Sysctl`, `Systemd`, `FilePermission`) under the same control/baseline model.
- **V3 — SaaS compliance platform** — central ingestion of fleet results (structured JSON + stable log schema) for multi-VM, multi-cloud monitoring and reporting.

Every design decision assumes the product will eventually manage thousands of Windows and Linux VMs across Azure, AWS, and GCP.
