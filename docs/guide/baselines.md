# Security Baseline Profiles

A **baseline** is a CloudInfra Secure profile — a named collection of control IDs.
The engine is baseline-agnostic: a baseline simply tells it which controls to run.
A single control can belong to many baselines; its implementation exists exactly
once.

See the [Baselines reference](../reference/baselines/index.md) for the exact
control list, severity breakdown and control counts of each profile
(auto-generated from the product).

## Key concepts

**Deployed baseline** — the profile that was applied to *your* marketplace image
before publication. This is your server's current hardened state. Find it with:

```powershell
.\CloudInfraSecure.ps1 verify
```

**Available baseline profiles** — the full set of profiles shipped with the
engine (below). You can *audit* against any of them at any time to see how your
server compares — that is read-only and always safe.

**Workload compatibility** — role profiles (Domain Controller, IIS, SQL, RDS)
harden settings that are specific to that role. Applying a role profile to a
server that does **not** run that role can restrict or break functionality without
adding real security. Match the profile to the workload.

## Shipped profiles

| Profile | Tier | Intended for |
|---|---|---|
| `CloudInfraSecure-Essential` | Essential | Core hardening suitable for any Windows Server workload |
| `CloudInfraSecure-Standard` | Standard | **Recommended** general-purpose baseline: logging, auditing, access hardening |
| `CloudInfraSecure-Enterprise` | Enterprise | Comprehensive hardening for regulated / high-assurance environments |
| `CloudInfraSecure-DomainController` | Role | Active Directory Domain Controllers |
| `CloudInfraSecure-IISWebServer` | Role | Internet Information Services web servers |
| `CloudInfraSecure-SQLServer` | Role | Microsoft SQL Server hosts |
| `CloudInfraSecure-RemoteDesktopServer` | Role | Remote Desktop Session Host servers |

## Which profile should I use?

| Your server | Recommended profile |
|---|---|
| General-purpose member server | `CloudInfraSecure-Standard` |
| Regulated / high-assurance environment | `CloudInfraSecure-Enterprise` |
| Active Directory Domain Controller | `CloudInfraSecure-DomainController` |
| IIS web server | `CloudInfraSecure-IISWebServer` |
| Microsoft SQL Server host | `CloudInfraSecure-SQLServer` |
| Remote Desktop Session Host | `CloudInfraSecure-RemoteDesktopServer` |

!!! warning "Do not pick a profile because it sounds more secure"
    Role profiles are **not** a strictness ladder. `CloudInfraSecure-SQLServer` is
    not "more hardened" than `CloudInfraSecure-Standard` — it is *different*,
    hardening SQL-specific settings that are meaningless (and potentially
    disruptive) on a server that does not run SQL. Applying the Domain Controller
    profile to a standalone server, or the RDS profile to a host with no session
    role, can disable or restrict features you depend on. **Choose the profile
    that matches the workload**, not the one with the most impressive name.

## Working with baselines

```powershell
.\CloudInfraSecure.ps1 baseline list
.\CloudInfraSecure.ps1 baseline show CloudInfraSecure-Standard
.\CloudInfraSecure.ps1 audit  -Baseline CloudInfraSecure-Standard   # read-only, safe
.\CloudInfraSecure.ps1 apply  -Baseline CloudInfraSecure-Standard -WhatIf   # preview
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format HTML
```

Audit against a profile before you apply it — that shows exactly what would change
without touching the server.

## Creating your own baseline

A baseline is a small JSON manifest — a list of control IDs and nothing
executable:

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

Drop it into the `Baselines/` folder and it is available immediately — no engine
changes.
