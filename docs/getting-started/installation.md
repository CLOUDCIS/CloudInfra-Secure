# Installation

CloudInfra Secure is **native PowerShell** — no installer, no runtimes, no external modules.

## Requirements

- **Windows Server 2022 or 2025**
- **PowerShell 5.1** (built in)
- **Administrator** rights for mutating commands (`apply`, `rollback`, `drift enable/disable`); read-only commands (`audit`, `report`, `verify`) work unelevated

## Install

Copy the `CloudInfraSecure` folder to the server — e.g. `C:\Program Files\Cloud Infrastructure Services\CloudInfra Secure` — and run the entry script:

```powershell
# Allow the scripts to run for this session (unsigned during evaluation)
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force

.\CloudInfraSecure.ps1 audit -Baseline CloudInfraSecure-Standard
```

!!! tip "After a code update, start a new PowerShell window"
    Module-based PowerShell tools load their modules once per session. After updating the product, open a **new** PowerShell window so the new modules load. Scheduled/automated runs are always fresh processes, so this only affects interactive testing.

## Runtime locations

| What | Where |
|---|---|
| Config, logs, snapshots, `Baseline.json` | `C:\ProgramData\Cloud Infrastructure Services\CloudInfra Secure\` |
| **Reports** | `C:\CloudInfraSecure\Reports` (configurable via `reportsPath`) |
| Integrity manifest | `manifest.json` in the install folder |

## Verify the install

```powershell
.\CloudInfraSecure.ps1 baseline list
.\CloudInfraSecure.ps1 controls list
```

You should see the shipped baselines and the control library. Continue to the [Quickstart](quickstart.md).
