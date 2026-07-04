# Deployment (Packer / Marketplace)

CloudInfra Secure is built for golden-image pipelines. The product build and the image build are **two separate stages**.

## Stage A — Product release (CI)

Generate the integrity manifest (a SHA-256 hash of every shipped file). The `verify` command later recomputes these to detect tampering.

```powershell
.\Build\New-ProductManifest.ps1 -ProductVersion 1.0.0
```

The MVP ships a **hash-only** manifest. Authenticode code signing is a pre-GA addition designed to slot in without rework.

## Stage B — Image build (Packer)

A `powershell` provisioner installs the signed package and hardens the image:

```hcl
build {
  provisioner "powershell" {
    inline = [
      "$root = 'C:\\Program Files\\Cloud Infrastructure Services\\CloudInfra Secure'",
      # 1. Verify the deployed package is intact before hardening
      "& \"$root\\CloudInfraSecure.ps1\" verify",
      # 2. Apply the baseline (auto-snapshots, writes Baseline.json)
      "& \"$root\\CloudInfraSecure.ps1\" apply -Baseline CloudInfraSecure-Standard",
      # 3. Re-verify; fail the build on regressions
      "& \"$root\\CloudInfraSecure.ps1\" verify"
    ]
  }
}
```

## Integrity: two files, two jobs

| File | Created | Answers |
|---|---|---|
| `manifest.json` | Stage A (CI) | Are the product bits authentic / untampered? |
| `Baseline.json` | Stage B (`apply`) | What hardened state should this VM stay in? |

`verify` runs four checks — image integrity, security score, baseline compliance, and drift-since-deployment — and returns a single verdict, suitable as a marketplace image gate.
