# FAQ

### Does CloudInfra Secure require any external dependencies?

No. It is native PowerShell 5.1 using only built-in Windows tooling (Registry, `auditpol`, `secedit`, `schtasks`, `Get-Service`, NetSecurity, Defender cmdlets). No Python, Go, Node.js, SQL, web server, or third-party PowerShell modules.

### Does it reboot my server?

Never automatically. Controls that require a reboot to take full effect are flagged in the apply result and report; you choose when to reboot.

### Is it safe to run `apply` more than once?

Yes — apply is **idempotent**. Controls already compliant are skipped, and every apply snapshots first so you can always roll back.

### Are the compliance mappings a certification?

No. They are **informational** and indicate which recognised standards' technical requirements a control may help implement. CloudInfra Secure is not certified, approved, endorsed, or officially compliant with any standard.

### Why does a control show ERROR?

Usually because the command was run **without elevation** (SecEdit/AuditPol controls need Administrator), or a subsystem was unavailable. Run in an elevated session.

### Why does Microsoft Defender show as MANUAL on apply?

Defender enablement is governed by platform/AV policy and Tamper Protection, which a hardening tool should not silently flip — so it is flagged for manual/platform action rather than auto-applied.

### My config edits disappeared during testing — why?

`Tests\Reset-TestState.ps1` deletes all ProgramData, including `config.json`. Normal commands never overwrite your config. See [Configuration](../guide/configuration.md).

### Email alerts fail on Office 365 — what do I use?

Tenants with Security Defaults block basic-auth SMTP, and Direct Send from cloud VMs is often IP-blocklisted. Use the **Microsoft Graph** transport (app-based OAuth) — see [Drift & Alerts](../guide/drift-and-alerts.md).

### After updating the product, a command says a function isn't recognised.

Open a **new** PowerShell window. Module-based tools load modules once per session; a session opened before the update keeps the old modules.
