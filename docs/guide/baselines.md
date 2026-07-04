# Baselines

A **baseline** is a proprietary CloudInfra Secure collection of control IDs. The engine is baseline-agnostic — a baseline simply tells it which controls to run. A single control can belong to many baselines; its implementation exists exactly once.

See the [Baselines reference](../reference/baselines/index.md) for the exact control list of each baseline (auto-generated from the product).

## Shipped baselines

| Baseline | Tier | Purpose |
|---|---|---|
| `CloudInfraSecure-Essential` | Essential | Core hardening suitable for any Windows Server workload |
| `CloudInfraSecure-Standard` | Standard | Recommended baseline: logging, auditing, access hardening |
| `CloudInfraSecure-Enterprise` | Enterprise | Comprehensive baseline for regulated / high-assurance environments |
| `CloudInfraSecure-DomainController` | Role | Active Directory Domain Controllers |
| `CloudInfraSecure-IISWebServer` | Role | Internet Information Services web servers |
| `CloudInfraSecure-SQLServer` | Role | Microsoft SQL Server hosts |
| `CloudInfraSecure-RemoteDesktopServer` | Role | Remote Desktop Session Host servers |

## Working with baselines

```powershell
.\CloudInfraSecure.ps1 baseline list
.\CloudInfraSecure.ps1 baseline show CloudInfraSecure-Standard
.\CloudInfraSecure.ps1 audit  -Baseline CloudInfraSecure-Standard
.\CloudInfraSecure.ps1 apply  -Baseline CloudInfraSecure-Standard
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format HTML
```

## Creating your own baseline

A baseline is a small JSON manifest — a list of control IDs and nothing executable:

```json
{
  "schemaVersion": "1.0",
  "id": "CloudInfraSecure-MyRole",
  "name": "CloudInfra Secure My Role",
  "description": "Baseline for the My Role workload.",
  "version": "1.0.0",
  "tier": "Role",
  "supportedOS": ["WindowsServer2022", "WindowsServer2025"],
  "controls": ["WIN-FW-001", "WIN-SMB-001", "WIN-TLS-010", "WIN-TLS-011"]
}
```

Drop it into the `Baselines/` folder and it is available immediately — no engine changes.
