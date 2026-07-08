# Assess and Change Security Controls Safely

CloudInfra Secure separates *knowing* your security state from *changing* it, and
makes every change reversible. Start from what you are trying to do:

| I want to… | Use |
|---|---|
| **Check** the current security state (change nothing) | [Audit](#audit-check-only) |
| **Make a change** to the server's hardening | [Preview with `-WhatIf`, then Apply](#apply-make-a-change) |
| **Undo** a change — something broke | [Rollback](#rollback-something-broke) |

!!! success "Hardening without losing control"
    Every change auto-snapshots first, is previewable with `-WhatIf`, is verified
    after it runs, and is fully reversible. The engine **never reboots the server
    for you** — controls needing a reboot are flagged, and you choose when.

## Audit — check only

Audit never changes anything. It resolves the target controls, runs each
provider's `Test()`, and returns a status per control plus a weighted **security
score**.

```powershell
.\CloudInfraSecure.ps1 audit -Baseline CloudInfraSecure-Standard
.\CloudInfraSecure.ps1 audit -Control  WIN-SMB-001
.\CloudInfraSecure.ps1 audit                     # all controls
```

Statuses: `PASS`, `FAIL`, `WARNING`, `MANUAL`, `NOT APPLICABLE`, `ERROR`.

## Apply — make a change

Apply is the safety-critical path. For each run it:

1. Asserts **Administrator** (exit `3` if not).
2. Runs a **pre-flight audit**.
3. Creates an automatic **snapshot**.
4. Applies each control, then **re-tests to verify**, logging old and new values.
5. **Never reboots** — controls needing a reboot are flagged in the result.

Always preview first:

```powershell
.\CloudInfraSecure.ps1 apply -Baseline CloudInfraSecure-Standard -WhatIf   # dry run
.\CloudInfraSecure.ps1 apply -Baseline CloudInfraSecure-Standard           # apply
```

!!! info "Idempotent"
    Controls already compliant are **skipped** ("Already compliant; no change").
    Providers that cannot auto-apply (e.g. Microsoft Defender, governed by
    platform policy) are reported as **MANUAL** and never abort the run.

Apply also writes an expected-state `Baseline.json` used by `verify` and `drift`.

!!! question "What if a security setting breaks my application?"
    This is the right question to ask before hardening anything — and the whole
    apply/rollback model exists to answer it:

    - **Preview everything.** `-WhatIf` shows exactly which controls would change,
      and to what, without touching the server. Run it, review it, then decide.
    - **Every change is snapshotted first.** Before apply modifies anything, it
      captures the prior state of every affected control (see below).
    - **Roll back in seconds.** If an application misbehaves after a change, revert
      the single responsible control — or the entire snapshot — through the same
      providers used to apply it (see [Rollback](#rollback-something-broke)).
    - **Nothing reboots without you.** Controls that need a restart to take effect
      are flagged; the engine leaves the timing to you.
    - **Scope tightly.** Apply one control at a time (`-Control WIN-SMB-001`) when
      validating impact on a sensitive workload, rather than a whole baseline.

    The safe pattern is always: **audit → `-WhatIf` → apply a small scope → test
    the application → widen or roll back.**

## Snapshots

Every apply auto-snapshots first; you can also snapshot manually. Snapshots
capture per-control prior values, firewall/service state, and full
`auditpol`/`secedit` backups — timestamped and **integrity-hashed** (the capture
is verified before rollback trusts it).

```powershell
.\CloudInfraSecure.ps1 snapshot create
.\CloudInfraSecure.ps1 snapshot list
.\CloudInfraSecure.ps1 snapshot show 20260704-030000
```

## Rollback — something broke

Restore a whole snapshot or a single control, through the same providers used to
apply:

```powershell
.\CloudInfraSecure.ps1 rollback -Control WIN-SMB-001          # one control, latest snapshot
.\CloudInfraSecure.ps1 rollback -Snapshot 20260704-030000     # a specific snapshot
.\CloudInfraSecure.ps1 rollback                               # entire latest snapshot
```

Rollback correctly restores a control's **prior state**, including reverting a
value to *absent* if it did not exist before hardening.
