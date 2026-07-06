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

| Setting | Purpose |
|---|---|
| `defaultBaseline` | Baseline used by `verify` and `drift` |
| `reportsPath` | Where reports are written (point at a share if you like) |
| `drift.time` | Daily drift-check time (`HH:mm`) |
| `drift.autoRemediate` | Auto re-apply regressed controls on drift |
| `drift.attachReport` | Email attachment: `csv` (default), `none`, `html` |
| `graph` / `smtp` | Email transport (see [Drift & Alerts](drift-and-alerts.md)) |

## Secrets

Passwords and client secrets are **never stored in plaintext**. They are DPAPI-encrypted at machine scope (so the SYSTEM scheduled task can decrypt them) via:

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
