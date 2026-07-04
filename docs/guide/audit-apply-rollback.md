# Audit, Apply & Rollback

## Audit (read-only)

Audit never changes anything. It resolves the target controls, runs each provider's `Test()`, and returns a status per control plus a weighted **security score**.

```powershell
.\CloudInfraSecure.ps1 audit -Baseline CloudInfraSecure-Standard
.\CloudInfraSecure.ps1 audit -Control  WIN-SMB-001
.\CloudInfraSecure.ps1 audit                     # all controls
```

Statuses: `PASS`, `FAIL`, `WARNING`, `MANUAL`, `NOT APPLICABLE`, `ERROR`.

## Apply (hardening)

Apply is the safety-critical path. For each run it:

1. Asserts **Administrator** (exit `3` if not).
2. Runs a **pre-flight audit**.
3. Creates an automatic **snapshot**.
4. Applies each control, then **re-tests to verify**, logging old and new values.
5. **Never reboots** — controls needing a reboot are flagged in the result.

```powershell
.\CloudInfraSecure.ps1 apply -Baseline CloudInfraSecure-Standard -WhatIf   # dry run
.\CloudInfraSecure.ps1 apply -Baseline CloudInfraSecure-Standard           # apply
```

!!! info "Idempotent"
    Controls already compliant are **skipped** ("Already compliant; no change"). Providers that cannot auto-apply (e.g. Microsoft Defender, governed by platform policy) are reported as **MANUAL** and never abort the run.

Apply also writes an expected-state `Baseline.json` used by `verify` and `drift`.

## Snapshots

Every apply auto-snapshots first; you can also snapshot manually. Snapshots capture per-control prior values, firewall/service state, and full `auditpol`/`secedit` backups — timestamped and **integrity-hashed** (the capture is verified before rollback trusts it).

```powershell
.\CloudInfraSecure.ps1 snapshot create
.\CloudInfraSecure.ps1 snapshot list
.\CloudInfraSecure.ps1 snapshot show 20260704-030000
```

## Rollback

Restore a whole snapshot or a single control, through the same providers used to apply:

```powershell
.\CloudInfraSecure.ps1 rollback -Control WIN-SMB-001          # one control, latest snapshot
.\CloudInfraSecure.ps1 rollback -Snapshot 20260704-030000     # a specific snapshot
.\CloudInfraSecure.ps1 rollback                               # entire latest snapshot
```

Rollback correctly restores a control's **prior state**, including reverting a value to *absent* if it did not exist before hardening.
