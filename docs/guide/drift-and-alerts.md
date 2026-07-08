# Continuous Drift Detection and Alerts

!!! abstract "Keep the image hardened"
    A server is hardened at deployment — but configuration changes over time, from
    updates, administrators, other tooling or misconfiguration. Drift detection
    watches for those changes and tells you the moment your hardened state
    regresses, so it can be reviewed, remediated or rolled back.

```
   Secure at deployment
            │
   Configuration changes  (update · admin · tooling · misconfig)
            │
     Drift detected        (a control regresses PASS -> FAIL)
            │
     Alert generated       (event log · log · optional email)
            │
   Review, remediate or roll back
```

After hardening, `apply` writes an expected-state `Baseline.json`. **Drift
monitoring** re-audits against it and alerts **only on regressions** (a control
that was `PASS` at deployment and is now `FAIL`).

```powershell
.\CloudInfraSecure.ps1 drift enable     # register a daily scheduled task
.\CloudInfraSecure.ps1 drift check      # run now
.\CloudInfraSecure.ps1 drift disable    # remove the task
```

## What counts as drift?

Drift is deliberately about **regression from the deployed baseline**, not any
change in the abstract:

| Situation | Counts as drift? |
|---|---|
| A control that was **PASS** at deployment is now **FAIL** | **Yes** — this is the core signal (exit `4`, alert raised) |
| A control moves from PASS to **WARNING** | Surfaced in the drift report, but not treated as a hard regression |
| A control that was already FAIL at deployment is still FAIL | No — it never regressed; it was never in the hardened set |
| A **new control** added by a product update | Evaluated on the next run; a new FAIL is reported so you can decide to apply it |
| A setting managed by **Group Policy** overrides the hardened value | Yes — it regresses to FAIL like any other control (GPO is a common drift source) |
| A control becomes **NOT APPLICABLE** (e.g. host left the domain) | No — excluded from scoring, reported as N/A rather than as drift |

`drift check` returns exit code `4` when drift is detected.

## Detection

The scheduled task (`drift enable`) re-audits the deployed baseline daily at
`drift.time`. `drift check` runs the same audit on demand. On drift it writes an
HTML drift report to the reports path and records the regressed controls.

## Notification

When drift is detected, CloudInfra Secure raises alerts through several channels
at once:

- A **Windows Event Log** entry (id `3000`) — pick it up with your SIEM or Azure
  Monitor.
- A **local log** line.
- An **HTML drift report** saved to the reports path.
- If configured, an **email alert** (see below).

## Remediation

Off by default. When enabled, drift re-applies **only the regressed controls**
(snapshotting first, so it remains reversible):

```powershell
.\CloudInfraSecure.ps1 drift check -Remediate      # one-off (elevated)
```

Or set `drift.autoRemediate: true` in config for the scheduled task to self-heal.

## Email alerts

Two transports are supported; choose per environment. When `graph.enabled` is
true it is used, otherwise `smtp`.

### Microsoft Graph (recommended for Microsoft 365 / Azure)

Graph sends over HTTPS as an **app** (OAuth2 client-credentials), so it works with
**Security Defaults / MFA enabled**, needs no port 25, and is not affected by
IP-reputation blocklists.

**One-time Entra app registration** ([entra.microsoft.com](https://entra.microsoft.com) → Identity → Applications → App registrations):

1. **New registration** → name it (e.g. "CloudInfra Secure Mailer").
2. **API permissions → Add → Microsoft Graph → Application permissions → `Mail.Send`** → **Grant admin consent** (green tick). *Application*, not Delegated.
3. **Certificates & secrets → New client secret** → copy the **Value**.
4. From **Overview** copy the **Application (client) ID** and **Directory (tenant) ID**; choose a licensed mailbox as `sender`.

Configure the `graph` block and store the secret (DPAPI-encrypted):

```json
"graph": {
  "enabled":  true,
  "tenantId": "<tenant-guid>",
  "clientId": "<app-client-id>",
  "sender":   "alerts@yourdomain.com",
  "to":       ["secops@yourdomain.com"]
}
```
```powershell
.\CloudInfraSecure.ps1 config set-graph-secret     # prompts for the client secret
.\Tests\Send-TestEmail.ps1                          # test delivery
```

### SMTP / Direct Send

For non-Microsoft relays or on-prem SMTP. Authenticated relays store the password
DPAPI-encrypted via `config set-smtp-password <user>`. For **Direct Send**
(anonymous, internal recipients only) leave `username` blank and point `server` at
your tenant's `*.mail.protection.outlook.com` endpoint on port 25.

!!! warning "Office 365 + basic SMTP"
    Microsoft 365 tenants with **Security Defaults** block basic-auth SMTP, and
    cloud-VM IPs are often blocklisted for Direct Send. Use **Graph** on those
    environments.

### Alert attachment

The drift email attaches a benign **CSV** by default (`drift.attachReport: "csv"`).
HTML attachments are commonly flagged/quarantined by antivirus and mail gateways
(inline JavaScript + embedded images look like "HTML smuggling"), so the full
interactive HTML report is **not** attached — it is always saved on the host, and
its path is shown in the email. Options: `"csv"` (default), `"none"`, `"html"`.

## Change attribution — "who changed it"

Drift reports show **when** drift was detected and the baseline was established. To
also capture **who** changed a setting, enable registry object-access auditing once
(elevated):

```powershell
.\Build\Enable-CisChangeAuditing.ps1            # enable (after an apply, so keys exist)
.\Build\Enable-CisChangeAuditing.ps1 -Disable   # remove later
```

This enables the Registry audit subcategory and sets audit SACLs on the controlled
keys, so changes raise Security event 4657, which `drift check` correlates to an
account. Attribution applies to **registry-backed** controls.
