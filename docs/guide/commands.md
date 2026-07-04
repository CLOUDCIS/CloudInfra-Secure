# Commands

The entry point is `CloudInfraSecure.ps1`. Every command supports `-OutputFormat JSON` for machine-readable output.

```
baseline  list | show <id>
controls  list | show <id>
audit     [-Baseline <id>] [-Control <id>]
apply     [-Baseline <id>] [-Control <id>] [-WhatIf]
snapshot  create | list | show <id>
rollback  [-Snapshot <id>] [-Control <id>] [-WhatIf]
report    [-Baseline <id>] [-Control <id>] -Format HTML|JSON|CSV [-Path <file>]
verify    [-Baseline <id>]
drift     enable | disable | check [-Remediate]
config    export <path> | import <path> | set-smtp-password <user> | set-graph-secret
```

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Success / compliant |
| `1` | One or more controls FAIL (or verify verdict FAIL) |
| `2` | Execution error |
| `3` | Not Administrator (mutating command) |
| `4` | Drift detected (`drift check`) |

## Elevation

Mutating commands — `apply`, `rollback`, `drift enable/disable`, and `drift check -Remediate` — require an **elevated** session. Read-only commands do not.

## Examples

=== "Audit a baseline (JSON)"

    ```powershell
    .\CloudInfraSecure.ps1 audit -Baseline CloudInfraSecure-Standard -OutputFormat JSON
    ```

=== "Show a control"

    ```powershell
    .\CloudInfraSecure.ps1 controls show WIN-SMB-001
    ```

=== "Apply one control"

    ```powershell
    .\CloudInfraSecure.ps1 apply -Control WIN-SMB-001
    ```

=== "Report to a specific path"

    ```powershell
    .\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format HTML -Path C:\Temp\report.html
    ```
