# Configuration

Runtime state lives under `C:\ProgramData\Cloud Infrastructure Services\CloudInfra Secure\`. The main file is `config.json`.

## Config is preserved

`audit`, `apply`, `report`, and `verify` **never overwrite your values**. `config.json` is only written when:

- it is first **seeded** (initial run),
- you run `config import`, `drift enable/disable`, or `config set-*-password`/`set-graph-secret`.

When the product adds new settings, they are **automatically backfilled** into your existing `config.json` on the next run (with defaults), leaving your edits untouched.

## Managing config

```powershell
.\CloudInfraSecure.ps1 config export C:\CloudInfraSecure\config-backup.json
.\CloudInfraSecure.ps1 config import C:\CloudInfraSecure\config-backup.json
```

## Key settings

```json
{
  "defaultBaseline": "CloudInfraSecure-Standard",
  "reportsPath": "C:\\CloudInfraSecure\\Reports",
  "drift": {
    "enabled": false,
    "scheduledTaskName": "CloudInfraSecure-DriftCheck",
    "time": "03:00",
    "autoRemediate": false,
    "attachReport": "csv"
  },
  "graph": { "enabled": false, "tenantId": "", "clientId": "", "sender": "", "to": [] },
  "smtp":  { "enabled": false, "server": "", "port": 25, "from": "", "to": [], "useSsl": true, "username": "" }
}
```

## Configuration reference

"Restart required" means the drift **scheduled task** must be re-registered
(`drift disable` then `drift enable`) for the change to take effect — it never
means a server reboot.

### General

| Setting | Type | Default | Description | Restart required |
|---|---|---|---|:---:|
| `defaultBaseline` | string | `CloudInfraSecure-Standard` | Baseline used by `verify` and `drift` | No |
| `reportsPath` | string (path) | `C:\CloudInfraSecure\Reports` | Where reports are written; point at a file share to collect fleet-wide | No |

### Drift schedule & automatic remediation

| Setting | Type | Default | Description | Restart required |
|---|---|---|---|:---:|
| `drift.enabled` | bool | `false` | Whether the scheduled drift check is registered | Yes |
| `drift.scheduledTaskName` | string | `CloudInfraSecure-DriftCheck` | Name of the Windows scheduled task | Yes |
| `drift.time` | string (`HH:mm`) | `03:00` | Daily drift-check time | Yes |
| `drift.autoRemediate` | bool | `false` | Auto re-apply regressed controls when drift is detected | No |
| `drift.attachReport` | enum | `csv` | Email attachment: `csv`, `none`, `html` | No |

### Microsoft Graph transport

| Setting | Type | Default | Description | Restart required |
|---|---|---|---|:---:|
| `graph.enabled` | bool | `false` | Use Graph for alert email (takes priority over SMTP) | No |
| `graph.tenantId` | string (GUID) | `""` | Entra directory (tenant) ID | No |
| `graph.clientId` | string (GUID) | `""` | Entra application (client) ID | No |
| `graph.sender` | string (email) | `""` | Licensed mailbox that sends the alert | No |
| `graph.to` | string[] | `[]` | Alert recipients | No |

### SMTP transport

| Setting | Type | Default | Description | Restart required |
|---|---|---|---|:---:|
| `smtp.enabled` | bool | `false` | Use SMTP for alert email | No |
| `smtp.server` | string (host) | `""` | SMTP relay / Direct Send endpoint | No |
| `smtp.port` | int | `25` | SMTP port | No |
| `smtp.from` | string (email) | `""` | Envelope-from address | No |
| `smtp.to` | string[] | `[]` | Alert recipients | No |
| `smtp.useSsl` | bool | `true` | Use STARTTLS / SSL | No |
| `smtp.username` | string | `""` | Relay username (blank = anonymous Direct Send) | No |

See [Drift & Alerts](drift-and-alerts.md) for the full email-transport setup, and
[Logging](#logging-and-runtime-state) below for where runtime output goes.

## Logging and runtime state

Runtime files live under
`C:\ProgramData\Cloud Infrastructure Services\CloudInfra Secure\`:

| Item | Location |
|---|---|
| Configuration | `config.json` |
| Logs | `Logs\` |
| Snapshots | `Snapshots\` |
| Expected-state baseline | `Baseline.json` |
| Integrity manifest | `manifest.json` |

## Secrets

Passwords and client secrets are **never stored in plaintext**. Secrets are
encrypted using **Windows DPAPI** and are bound to **LocalMachine scope** — that
is, they can be decrypted only on the same machine, by any process on it,
including the **SYSTEM** account that runs the scheduled drift task. (Machine
scope is required precisely so the SYSTEM task can decrypt them; user-scope
secrets would be unreadable to it.) Because the binding is to the machine, a
secret encrypted on one host cannot be decrypted on another — re-run these
commands per host:

```powershell
.\CloudInfraSecure.ps1 config set-smtp-password <user>
.\CloudInfraSecure.ps1 config set-graph-secret
```

## Customising a control's applied value — e.g. the logon banner

A few controls audit that a setting is **present**, not that it equals a specific
value — the interactive logon **legal notice banner** is the main one. The audit
passes on *any* non-empty text, so you can use your organisation's own wording.

The controls are:

| Control | Setting | What it is |
|---|---|---|
| `WIN-LOGON-018` | `LegalNoticeText` | The warning message body shown before sign-in |
| `WIN-LOGON-019` | `LegalNoticeCaption` | The title bar of that message |

The default banner that **apply** installs is:

> **Authorized Use Only**
> This system is for the use of authorized users only. Activity on this system is
> monitored and recorded. Unauthorized access is prohibited and may be subject to
> prosecution.

### Option A — ship your own wording with the control

Edit the `apply.set.value` field in the control file, then apply it. Your text
travels with the control (and into any golden image built from it):

```jsonc
// Controls\WIN-LOGON-018.json
"apply": { "set": { "value": "YOUR ORGANISATION'S AUTHORISED-USE WARNING" } }
```

```powershell
.\CloudInfraSecure.ps1 apply -Control WIN-LOGON-018
.\CloudInfraSecure.ps1 apply -Control WIN-LOGON-019
```

Log off and reconnect — the banner appears before the credential prompt on both
the console and Remote Desktop.

### Option B — set it yourself (Group Policy or registry)

Because the audit only checks for a non-empty value, anything you set elsewhere
makes the control pass:

- **Group Policy:** *Computer Configuration → Windows Settings → Security Settings
  → Local Policies → Security Options →* **Interactive logon: Message text / title
  for users attempting to log on**.
- **Registry** (`REG_SZ`, under
  `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System`):
  `LegalNoticeText` and `LegalNoticeCaption`.

!!! warning "Get the wording approved"
    A logon warning is a legal notice. Have the exact text reviewed by your legal
    and HR representatives before deploying it, especially in a published image.
