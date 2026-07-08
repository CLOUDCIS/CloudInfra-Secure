# Reporting

Generate professional, **self-contained** reports (no external requests — safe to
archive or open offline).

```powershell
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format HTML
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format JSON
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format CSV
```

Reports are written to `C:\CloudInfraSecure\Reports` by default (configurable via
`reportsPath`).

## What is in the HTML report

The branded, single-file HTML report is organised top-to-bottom as:

1. **Header** — product identity, host name, OS, deployed baseline, timestamp.
2. **Security Score** gauge + overall posture band.
3. **Baseline Compliance** — pass/fail against the deployed baseline.
4. **Framework Alignment** gauges — one per mapped framework.
5. **Risk by severity** — counts of failing controls weighted by severity.
6. **Control results** — filterable (status / severity / category / framework),
   each row **click-to-expand** into description, rationale, remediation,
   expected vs observed value, framework mapping chips and references.
7. **Footer** — non-certification disclaimer and a link back to Cloud
   Infrastructure Services.

## How the scores are calculated

Getting these numbers right matters more than any single control, so it is worth
being precise about what each one means.

### Security Score

A single weighted percentage summarising posture. Each control contributes
according to its **severity** (a failing High-severity control costs more than a
failing Low-severity one), so the score reflects *risk*, not a raw pass count.

- Only controls that were actually **evaluated** count toward the score.
- **NOT APPLICABLE** controls are **excluded from the denominator** — a domain-only
  control on a standalone server neither helps nor hurts the score.
- **MANUAL** controls (the engine cannot assess them automatically) are reported
  and surfaced for review, but do not inflate or deflate the automated score.
- **ERROR** results (e.g. a control that needs elevation and was run without it)
  are flagged separately so they are not silently counted as passes.

### Baseline Compliance

A straightforward view of how many controls **in the deployed baseline** are in
their hardened state right now — the "am I still where I was at deployment?"
number that pairs with drift detection.

### Framework Alignment gauges

Each gauge shows the proportion of **CloudInfra Secure controls mapped to that
framework** that passed their technical assessment. Read the number carefully:

> An 86% NIST SP 800-53 alignment score means that 86% of CloudInfra Secure
> controls mapped to NIST SP 800-53 passed their technical assessment. It does
> **not** mean that the organisation is 86% compliant with NIST SP 800-53.

Compliance with a framework depends on people, process, documentation and
controls that no tool can evaluate. These gauges measure the technical slice
CloudInfra Secure can test — nothing more.

## Sharing reports safely

- **Self-contained & offline.** The HTML report embeds its own styling and makes
  no external requests, so it is safe to email, archive, or open on an air-gapped
  host.
- **No secrets in reports.** Reports contain control results and configuration
  *state*, not credentials. SMTP passwords and Graph client secrets are DPAPI-
  encrypted in configuration and are **never** written into any report.
- **Review before wide distribution.** Reports do include host name, OS build and
  the specific settings that are failing — useful to an administrator, and also
  useful to an attacker. Treat a full report as internal by default.

## Comparing over time

Reports are timestamped per file, so keeping them builds an audit trail:

- Point `reportsPath` at a protected file share to collect reports fleet-wide.
- Generate on a schedule (e.g. alongside the drift check) to capture posture at
  regular intervals.
- Diff the **JSON** reports (below) between two dates to see exactly which
  controls changed state — far more precise than eyeballing two HTML files.

## JSON & CSV for automation

- **JSON** — the full report model (score, summary, per-framework alignment,
  enriched per-control results). Ideal for fleet aggregation, dashboards and
  diffing posture over time.
- **CSV** — flat control results (id, name, category, severity, status, observed,
  expected, message, remediation). Ideal for spreadsheets and record-keeping.

```powershell
# Locate and act on the generated file from a pipeline
$r = .\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format JSON -OutputFormat JSON | ConvertFrom-Json
Write-Host "Score $($r.score)% - report at $($r.path)"

# Fleet roll-up: collect every host's CSV into one place
.\CloudInfraSecure.ps1 report -Format CSV -Path \\fileserver\posture\$env:COMPUTERNAME.csv
```

!!! tip "Machine-readable everywhere"
    `report ... -OutputFormat JSON` returns the output path and score as JSON, so
    pipelines can locate and act on the generated file.

---

!!! note "Compliance disclaimer"
    CloudInfra Secure is designed to assist organisations in implementing and assessing technical security controls that align with recognised cybersecurity and compliance frameworks. CloudInfra Secure is **not certified, approved, endorsed or authorised** by any standards body or framework owner. Compliance mappings are provided for informational purposes only and do not constitute certification, accreditation, audit evidence or a guarantee of compliance. Organisations remain responsible for validating their own compliance based on their specific environment, policies and operational controls.
