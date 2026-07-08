---
hide:
  - navigation
---

<div class="cis-banner" markdown>
![CloudInfra Secure](assets/banner.jpg)
</div>

# CloudInfra Secure

**Hardened Windows Server that stays hardened.**

CloudInfra Secure provides pre-hardened Windows Server 2022 and 2025 images for
Azure, AWS and Google Cloud. Every image includes the CloudInfra Secure security
engine to **verify** the deployed security state, generate detailed **reports**,
detect configuration **drift**, **alert** on regressions and safely **remediate**
or **roll back** changes.

[Just deployed? Verify your image :material-arrow-right:](getting-started/quickstart.md){ .md-button .md-button--primary }
[Browse the controls :material-shield-check:](reference/controls/index.md){ .md-button }

---

## Where do you want to start?

<div class="grid cards" markdown>

-   :material-rocket-launch: __Just deployed your image?__

    ---

    Verify the hardened state and generate your first report.

    [:material-arrow-right: Getting started](getting-started/quickstart.md)

-   :material-shield-search: __Want to understand what is secured?__

    ---

    Explore the 300+ technical security controls and the deployed baseline.

    [:material-arrow-right: Controls reference](reference/controls/index.md)

-   :material-radar: __Want continuous protection?__

    ---

    Enable drift detection and alerts to keep the image hardened over time.

    [:material-arrow-right: Drift & alerts](guide/drift-and-alerts.md)

</div>

---

## Why CloudInfra Secure

<div class="grid cards" markdown>

-   :material-shield-check: __Pre-Hardened from First Boot__

    ---

    The image is hardened against a security baseline **before publication**, so the server is protected from the moment it boots — no post-deployment hardening project required.

-   :material-clipboard-check: __Verify the Hardened State__

    ---

    One command confirms image integrity, the deployed baseline, the security posture, and any drift since deployment.

-   :material-format-list-numbered: __300+ Security Controls__

    ---

    A broad library of Windows Server controls — attack surface reduction, auditing, credential protection, TLS, user rights and more — each with a verified reference.

-   :material-radar: __Continuous Drift Detection__

    ---

    A scheduled check re-audits against the deployed baseline and alerts **only on regressions** — with optional automatic remediation.

-   :material-backup-restore: __Controlled and Reversible Changes__

    ---

    Every change auto-snapshots first; roll back a single control or a whole snapshot. The engine never reboots the server for you.

-   :material-chart-donut: __Compliance Alignment Reporting__

    ---

    Self-contained HTML reports with a security score, security-framework alignment, severity summaries, filters and drill-down control detail.

</div>

---

## How it works

CloudInfra Secure is a **declarative** engine: security controls are data, not
code, so content can be reviewed and can never execute arbitrary commands. The
engine evaluates each control against the live server, and — where you ask it to
— applies or reverts it through a small set of audited providers (registry,
security policy, audit policy, services). Every change is snapshotted first and
is fully reversible.

[Read the architecture :material-arrow-right:](about/architecture.md){ .md-button }

---

## Security framework alignment

CloudInfra Secure maps individual Windows Server technical controls to related
requirements in recognised security and compliance frameworks, surfaced as
alignment gauges and filters in every report:

`DISA STIG` · `NIST CSF` · `NIST SP 800-53 Rev 5` · `NIST SP 800-171` · `FedRAMP` · `Microsoft Cloud Security Benchmark` · `Microsoft Security Baselines` · `CMMC Level 2` · `PCI DSS v4.0` · `SOC 2` · `ISO/IEC 27001` · `HIPAA Security Rule` · `UK Cyber Essentials` · `NIS2`

!!! note "Compliance disclaimer"
    CloudInfra Secure is designed to assist organisations in implementing and assessing technical security controls that align with recognised cybersecurity and compliance frameworks. CloudInfra Secure is **not certified, approved, endorsed or authorised** by any standards body or framework owner. Compliance mappings are provided for informational purposes only and do not constitute certification, accreditation, audit evidence or a guarantee of compliance. Organisations remain responsible for validating their own compliance based on their specific environment, policies and operational controls.

---

<p style="text-align:center;color:var(--md-default-fg-color--light)">
CloudInfra Secure is a product of <strong>InfraSOS FZCO</strong>, provided by
<a href="https://cloudinfrastructureservices.co.uk/">Cloud Infrastructure Services</a>.
</p>
