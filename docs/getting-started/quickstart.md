# Your First 10 Minutes

Your image is **already hardened**. This journey is about *confirming* that state,
understanding it, and keeping it — not re-hardening. Run the commands in an
**elevated** PowerShell from `C:\CloudInfraSecure\`.

!!! tip "Marketplace image users"
    Start with **verify**, not `apply`. Your server was hardened before
    publication; `apply` is only for *adapting* the server later (see step 7).

## 1. Verify

Confirm image integrity, the deployed baseline, the current security posture, and
whether anything has drifted since the image was published:

```powershell
.\CloudInfraSecure.ps1 verify
```

## 2. View the deployed baseline

Understand exactly what was applied to your image:

```powershell
.\CloudInfraSecure.ps1 baseline list
.\CloudInfraSecure.ps1 baseline show <deployed-baseline-id>
```

## 3. Generate your first report

Create the self-contained HTML security and framework-alignment report:

```powershell
.\CloudInfraSecure.ps1 report -Format HTML
```

Open the newest file in `C:\CloudInfraSecure\Reports\`. `-Format JSON` and
`-Format CSV` are also available for automation.

## 4. Review exceptions

In the report (or a `verify`/`audit` run), look at anything that is **not** a
plain PASS:

- **FAIL** — a control not in its hardened state (investigate; may be intended for your environment).
- **WARNING** — needs attention but not a hard failure.
- **MANUAL** — requires human verification; the engine cannot assess it automatically.
- **NOT APPLICABLE** — doesn't apply to this host (for example, a domain-only control on a standalone server). Excluded from scoring.

See [Reporting](../guide/reporting.md) for how the security score treats each of these.

## 5. Enable drift monitoring

Protect the hardened state — a scheduled check re-audits against the deployed
baseline and flags any control that **regresses** (was PASS at deployment, now
FAIL):

```powershell
.\CloudInfraSecure.ps1 drift enable
.\CloudInfraSecure.ps1 drift check
```

## 6. Configure alerts

Be notified when drift is detected, via **Microsoft Graph** or **SMTP**:

```powershell
.\CloudInfraSecure.ps1 config import <your-config.json>   # set graph or smtp
```

See [Drift & Alerts](../guide/drift-and-alerts.md) for the full setup.

## 7. Adapt the server if required

Only if your server has a **specific role** (Domain Controller, IIS, SQL, RDS) or
you need a different assurance level should you consider a different baseline.
**Verify and review first**, preview with `-WhatIf`, and remember every change is
snapshotted and reversible:

```powershell
.\CloudInfraSecure.ps1 apply -Baseline <role-baseline> -WhatIf   # preview only
.\CloudInfraSecure.ps1 apply -Baseline <role-baseline>           # apply
.\CloudInfraSecure.ps1 rollback                                  # undo the last snapshot
```

See [Baselines](../guide/baselines.md) for choosing the right profile and
[Audit, Apply & Rollback](../guide/audit-apply-rollback.md) for the safety model.

---

!!! success "Fleet-friendly"
    Add `-OutputFormat JSON` to any command for machine-readable output, and rely
    on exit codes (`0` success · `1` FAIL · `2` error · `3` not admin · `4` drift)
    for automation across many servers.
