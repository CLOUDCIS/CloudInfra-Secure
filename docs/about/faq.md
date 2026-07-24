# FAQ

### I deployed a marketplace image — do I need to run `apply`?

No. Your image was **hardened before publication**, so it is protected from first
boot. Start with `verify` to confirm the hardened state, then review the deployed
baseline and a report. `apply` is only for *adapting* the server later (a new
role, a stricter assurance level) — see [Assess and Change Safely](../guide/audit-apply-rollback.md).

### How do I know the product on the image is genuine and untampered?

Two independent checks. Every product file is listed in a SHA-256 integrity
manifest that `verify` recomputes, and published images are Authenticode
code-signed by the publisher (**InfraSOS FZCO**). Inspect a signature with
`Get-AuthenticodeSignature .\Modules\Core.psm1`. See
[Architecture › Software integrity and trust](architecture.md).

### I can't sign in to my newly deployed VM — RDP connects but rejects my password.

The image enforces a **14-character minimum password**. Most clouds let you enter
a shorter password at VM creation (Azure allows 12), but if the VM was created with
fewer than 14 characters the guest cannot apply it during provisioning, so sign-in
fails even though the RDP screen appears. Reset the administrator password to **14+
characters** with your cloud's password-reset tooling — for Azure:

```bash
az vm user update -g <rg> -n <vm> -u <admin> -p '<14-plus-char password>'
```

Then sign in as `.\<admin>`. Deploy future VMs with a 14+ character password to
avoid this. (Also try the `.\<admin>` username form first — a bare username is
sometimes treated as a domain account and rejected.)

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
