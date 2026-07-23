# Getting Started With Your CloudInfra Secure Image

You deployed a **pre-hardened** CloudInfra Secure Windows Server image from your
cloud marketplace. The security baseline was applied **before publication**, so
the server is protected from first boot. Nothing to install — this page shows you
what is already on the image and how to confirm its security state.

## What is already on the image

| Component | Purpose |
|---|---|
| **CloudInfra Secure engine** | The PowerShell security engine (`CloudInfraSecure.ps1`) and modules |
| **Control library** | The full library of Windows Server security controls |
| **Deployed baseline definition** | `Baseline.json` — the exact baseline applied to this image before publication |
| **Integrity manifest** | `manifest.json` — SHA-256 hashes of every product file, used by `verify` |
| **Configuration directory** | `C:\ProgramData\Cloud Infrastructure Services\CloudInfra Secure\` (config, logs, snapshots) |
| **Report directory** | `C:\CloudInfraSecure\Reports\` (configurable) |

The engine is located at **`C:\CloudInfraSecure\`**. Open an **elevated**
PowerShell there to run any command:

```powershell
cd C:\CloudInfraSecure
```

## Verify the product installation

Confirm the product files are intact (integrity), and see the deployed baseline,
security posture, and any drift since the image was published:

```powershell
.\CloudInfraSecure.ps1 verify
```

## Confirm the deployed baseline

`verify` reports which baseline was deployed. View that baseline's full
definition:

```powershell
.\CloudInfraSecure.ps1 baseline list
.\CloudInfraSecure.ps1 baseline show <deployed-baseline-id>
```

## Generate your first report

```powershell
.\CloudInfraSecure.ps1 report -Format HTML
```

Open the newest file in `C:\CloudInfraSecure\Reports\`. See
[Reporting](../guide/reporting.md) for how to read it.

## Software integrity

Every product file is listed in a SHA-256 **integrity manifest**, and `verify`
recomputes those hashes to detect any modification. Published marketplace images
are **Authenticode code-signed** by the publisher (**InfraSOS FZCO**); you can
inspect a signature at any time:

```powershell
# One file's signature — Status should be Valid, signer INFRASOS - FZCO:
Get-AuthenticodeSignature .\Modules\Core.psm1 |
    Format-List Status, @{ n = 'Signer'; e = { $_.SignerCertificate.Subject } }

# Confirm every product script at once (expect a single row: Valid):
Get-ChildItem . -Recurse -Include *.ps1, *.psm1, *.psd1 |
    Get-AuthenticodeSignature | Group-Object Status | Select-Object Name, Count
```

`Format-List` keeps the signer subject on its own line so it isn't truncated. For
the complete picture — all product files against the SHA-256 manifest — run
`.\CloudInfraSecure.ps1 verify`, which reports `Image integrity : PASS`. See
[Architecture › Software integrity and trust](../about/architecture.md) for the
full trust model.

## Cloud-specific notes

=== "Azure"

    - **Connect:** RDP to the VM (or use Azure Bastion). Network Level Authentication is enforced.
    - **Where it is installed:** `C:\CloudInfraSecure\`.
    - **Baseline applied:** run `verify` to see the deployed baseline for this image.
    - **Entitlement:** managed through your Azure Marketplace subscription for the VM offer.
    - **Before changing the server role:** review [Baselines](../guide/baselines.md) — do **not** apply a different baseline just because it sounds more secure. Verify first, then choose a role-appropriate profile.

=== "AWS"

    - **Connect:** RDP to the instance using the key pair / password from the EC2 console.
    - **Where it is installed:** `C:\CloudInfraSecure\`.
    - **Baseline applied:** run `verify` to see the deployed baseline for this image.
    - **Entitlement:** managed through your AWS Marketplace subscription for the AMI.
    - **Before changing the server role:** review [Baselines](../guide/baselines.md) and confirm the profile suits the workload before applying anything.

=== "Google Cloud"

    - **Connect:** RDP to the VM using the Windows password generated in the Compute Engine console.
    - **Where it is installed:** `C:\CloudInfraSecure\`.
    - **Baseline applied:** run `verify` to see the deployed baseline for this image.
    - **Entitlement:** managed through your Google Cloud Marketplace subscription.
    - **Before changing the server role:** review [Baselines](../guide/baselines.md) and pick a role-appropriate profile rather than the strictest one.

---

Continue to the [Quickstart — Your First 10 Minutes](quickstart.md).
