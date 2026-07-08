# Commands

The entry point is `CloudInfraSecure.ps1`, run from `C:\CloudInfraSecure\`. Every
command supports `-OutputFormat JSON` for machine-readable output, and every
command returns a meaningful [exit code](#exit-codes) for automation.

```
baseline  list | show <id>
controls  list | show <id>
verify    [-Baseline <id>]
audit     [-Baseline <id>] [-Control <id>]
report    [-Baseline <id>] [-Control <id>] -Format HTML|JSON|CSV [-Path <file>]
apply     [-Baseline <id>] [-Control <id>] [-WhatIf]
rollback  [-Snapshot <id>] [-Control <id>] [-WhatIf]
drift     enable | disable | check [-Remediate]
snapshot  create | list | show <id>
config    export <path> | import <path> | set-smtp-password <user> | set-graph-secret
```

## What each command does

The most important column is **Changes server** — commands that only read the
system are always safe to run, at any time, on a production host.

| Command | Purpose | Changes server | Admin required | Creates snapshot | Exit codes |
|---|---|:---:|:---:|:---:|---|
| `verify` | Confirm integrity + posture + drift in one step | No | No | — | `0` `1` `2` |
| `audit` | Assess controls against their hardened state | No | No¹ | — | `0` `1` `2` |
| `report` | Generate an HTML / JSON / CSV report | No | No¹ | — | `0` `2` |
| `controls` | List or show control definitions | No | No | — | `0` `2` |
| `baseline` | List or show baseline definitions | No | No | — | `0` `2` |
| `apply` | Bring controls into their hardened state | **Yes** | Yes | Yes (auto) | `0` `1` `2` `3` |
| `rollback` | Revert to a previous snapshot | **Yes** | Yes | — | `0` `2` `3` |
| `drift` | Enable / disable / run the scheduled drift check | Config²  | Yes | — | `0` `2` `3` `4` |
| `snapshot` | Create or inspect configuration snapshots | Metadata | Yes | Yes (create) | `0` `2` `3` |
| `config` | Manage engine configuration and secrets | Config | Yes | — | `0` `2` |

¹ A few controls (audit policy, user-rights, security-policy) need elevation to
*read* their live state and will report `ERROR` if audited non-elevated. Registry
and service controls audit fine without elevation.
² `drift enable/disable` writes a scheduled task and configuration; it does not
change any security control. `drift check -Remediate` *does* change the server.

## Commands by intent

### Read only — always safe to run

`verify` · `audit` · `report` · `controls` · `baseline`

These never modify the server. Run them freely on production hosts, as often as
you like. Start here.

### Changes configuration — requires elevation

`apply` · `rollback`

These modify the server's security state. They require an elevated session,
auto-snapshot before making changes, and support `-WhatIf` to preview.

!!! warning "Marketplace image users — read before you `apply`"
    Your image is **already hardened**. Run `verify` and review the current
    baseline before applying a different baseline or individual controls. `apply`
    is for *adapting* the server (a new role, a stricter assurance level) — not a
    first step. Preview any change with `-WhatIf`, and remember every change is
    snapshotted and reversible.

### Continuous security

`drift`

Enables the scheduled drift check that re-audits the deployed baseline and alerts
on regressions. See [Drift & Alerts](drift-and-alerts.md).

### Administration

`config` · `snapshot`

Manage engine configuration, alert transport secrets, and the snapshot store. See
[Configuration](configuration.md).

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Success / compliant |
| `1` | One or more controls FAIL (or verify verdict FAIL) |
| `2` | Execution error |
| `3` | Not Administrator (mutating command) |
| `4` | Drift detected (`drift check`) |

## Elevation

Mutating commands — `apply`, `rollback`, `drift enable/disable`, and
`drift check -Remediate` — require an **elevated** session. Read-only commands do
not (with the audit-read caveat noted above).

## Examples

=== "Verify (start here)"

    ```powershell
    .\CloudInfraSecure.ps1 verify
    ```

=== "Audit a baseline (JSON)"

    ```powershell
    .\CloudInfraSecure.ps1 audit -Baseline CloudInfraSecure-Standard -OutputFormat JSON
    ```

=== "Show a control"

    ```powershell
    .\CloudInfraSecure.ps1 controls show WIN-SMB-001
    ```

=== "Preview one control before applying"

    ```powershell
    .\CloudInfraSecure.ps1 apply -Control WIN-SMB-001 -WhatIf
    ```

=== "Report to a specific path"

    ```powershell
    .\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format HTML -Path C:\Temp\report.html
    ```
