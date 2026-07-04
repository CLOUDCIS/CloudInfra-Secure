# Quickstart

This walks through the core lifecycle: **audit → apply → report → drift**. Run these in an **elevated** PowerShell on a test server first.

## 1. Audit

See how the server measures up against a baseline (read-only, changes nothing):

```powershell
.\CloudInfraSecure.ps1 audit -Baseline CloudInfraSecure-Standard
```

Each control returns `PASS`, `FAIL`, `WARNING`, `MANUAL`, `NOT APPLICABLE`, or `ERROR`, with a weighted **security score**.

## 2. Preview, then apply

Dry-run first, then harden (an automatic snapshot is taken before any change):

```powershell
.\CloudInfraSecure.ps1 apply -Baseline CloudInfraSecure-Standard -WhatIf
.\CloudInfraSecure.ps1 apply -Baseline CloudInfraSecure-Standard
```

Apply is **idempotent** (already-compliant controls are skipped) and **never reboots** — controls that need a reboot are flagged in the result.

## 3. Report

Generate a branded, self-contained HTML report:

```powershell
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format HTML
```

Open the newest file in `C:\CloudInfraSecure\Reports\`. Also available: `-Format JSON` and `-Format CSV`.

## 4. Verify

Marketplace-style assurance — integrity, score, baseline compliance, and drift since deployment:

```powershell
.\CloudInfraSecure.ps1 verify
```

## 5. Roll back (if needed)

```powershell
.\CloudInfraSecure.ps1 rollback -Control WIN-SMB-001   # single control
.\CloudInfraSecure.ps1 rollback                        # entire latest snapshot
```

## 6. Enable drift monitoring

Register a daily check that alerts only when a hardened control regresses:

```powershell
.\CloudInfraSecure.ps1 drift enable
.\CloudInfraSecure.ps1 drift check
```

See [Drift & Alerts](../guide/drift-and-alerts.md) to set up email notifications.

---

!!! success "Fleet-friendly"
    Add `-OutputFormat JSON` to any command for machine-readable output, and rely on exit codes (`0` success · `1` FAIL · `2` error · `3` not admin · `4` drift) for automation.
