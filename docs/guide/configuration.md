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
