# Reporting

Generate professional, **self-contained** reports (no external requests — safe to archive or open offline).

```powershell
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format HTML
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format JSON
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-Standard -Format CSV
```

Reports are written to `C:\CloudInfraSecure\Reports` by default (configurable via `reportsPath`).

## HTML report

The branded HTML report includes:

- **CloudInfra Secure Security Score** gauge + posture
- A **compliance-alignment gauge per standard** (DISA STIG, NIST, PCI DSS, ISO 27001, Microsoft Security Baselines, UK Cyber Essentials, NIS2, …)
- **Baseline compliance** and **risk-by-severity** summaries
- **Filterable** control results (status / severity / framework)
- **Click-to-expand** control detail: description, rationale, remediation, expected/observed, compliance chips, references
- The non-certification disclaimer and a link back to Cloud Infrastructure Services

## JSON & CSV

- **JSON** — the full report model (score, summary, per-standard alignment, enriched results). Ideal for fleet aggregation and the future SaaS platform.
- **CSV** — flat control results (id, name, category, severity, status, observed, expected, message, remediation). Ideal for spreadsheets and record-keeping.

!!! tip "Machine-readable everywhere"
    `report ... -OutputFormat JSON` returns the output path and score as JSON, so pipelines can locate and act on the generated file.
