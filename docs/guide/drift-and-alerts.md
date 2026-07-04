# Drift & Alerts

After hardening, `apply` writes an expected-state `Baseline.json`. **Drift monitoring** re-audits against it and alerts **only on regressions** (a control that was `PASS` at deployment and is now `FAIL`).

```powershell
.\CloudInfraSecure.ps1 drift enable     # register a daily scheduled task
.\CloudInfraSecure.ps1 drift check      # run now
.\CloudInfraSecure.ps1 drift disable    # remove the task
```

`drift check` returns exit code `4` when drift is detected. On drift it writes an HTML drift report, a Windows Event Log entry (id 3000), a local log line, and — if configured — an **email alert**.

## Automatic remediation (opt-in)

Off by default. When enabled, drift re-applies **only the regressed controls** (snapshotting first):

```powershell
.\CloudInfraSecure.ps1 drift check -Remediate      # one-off (elevated)
```
Or set `drift.autoRemediate: true` in config for the scheduled task to self-heal.

## Email alerts

Two transports are supported; choose per environment. When `graph.enabled` is true it is used, otherwise `smtp`.

### Microsoft Graph (recommended for Microsoft 365 / Azure)

Graph sends over HTTPS as an **app** (OAuth2 client-credentials), so it works with **Security Defaults / MFA enabled**, needs no port 25, and is not affected by IP-reputation blocklists.

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

For non-Microsoft relays or on-prem SMTP. Authenticated relays store the password DPAPI-encrypted via `config set-smtp-password <user>`. For **Direct Send** (anonymous, internal recipients only) leave `username` blank and point `server` at your tenant's `*.mail.protection.outlook.com` endpoint on port 25.

!!! warning "Office 365 + basic SMTP"
    Microsoft 365 tenants with **Security Defaults** block basic-auth SMTP, and cloud-VM IPs are often blocklisted for Direct Send. Use **Graph** on those environments.

## Alert attachment

The drift email attaches a benign **CSV** by default (`drift.attachReport: "csv"`). HTML attachments are commonly flagged/quarantined by antivirus and mail gateways (inline JavaScript + embedded images look like "HTML smuggling"), so the full interactive HTML report is **not** attached — it is always saved on the host, and its path is shown in the email. Options: `"csv"` (default), `"none"`, `"html"`.

## Change attribution — "who changed it"

Drift reports show **when** drift was detected and the baseline was established. To also capture **who** changed a setting, enable registry object-access auditing once (elevated):

```powershell
.\Build\Enable-CisChangeAuditing.ps1            # enable (after an apply, so keys exist)
.\Build\Enable-CisChangeAuditing.ps1 -Disable   # remove later
```

This enables the Registry audit subcategory and sets audit SACLs on the controlled keys, so changes raise Security event 4657, which `drift check` correlates to an account. Attribution applies to **registry-backed** controls.
