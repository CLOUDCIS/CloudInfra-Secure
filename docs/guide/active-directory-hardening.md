# Active Directory Hardening

Use the following steps when deploying this image as a domain controller. The server is shipped as an AD-ready Windows Server image, and the recommended workflow is to promote it to a domain controller first, then apply the CloudInfra Secure Domain Controller baseline.

Follow this sequence:

1. Launch the VM.
2. Sign in with the local administrator account.
3. Promote the server to a Domain Controller.
4. Reboot the server.
5. Sign in as the domain administrator.
6. Run the CloudInfra Secure Domain Controller baseline.
7. Correct any remaining domain-controller-specific failures.
8. Re-run verification until the DC baseline passes.

This sequence is the supported pattern for domain-controller-ready images.

## Why this workflow matters

This image is intended to be promoted to a domain controller after launch. Do not apply the Domain Controller hardening baseline before the server has completed AD DS promotion and is acting as a live domain controller.

Applying the baseline before promotion can leave the server in a mismatched state and may cause failed controls.

---

## 1. Launch the VM and sign in

### Step 1: Start the instance

1. Launch the marketplace image or cloud instance.
2. Wait for the VM to finish booting.
3. Connect to the server using the local administrative credentials.

### Step 2: Sign in locally

1. Sign in with the local administrator account.
2. Confirm that the server is a supported Windows Server edition.
3. Confirm the AD role is installed and the image is AD-ready.

At this stage, the server is not yet a domain controller. It is simply ready for promotion.

---

## 2. Promote the server to a Domain Controller

### Step 3: Open Server Manager

1. Click Start.
2. Open Server Manager.
3. In the dashboard, locate the AD DS promotion notification.
4. Select Promote this server to a domain controller.

### Step 4: Choose the installation option

Select one of the following options:

- Add a new forest
- Add a new child domain
- Add the server to an existing domain

For most deployments, the customer will either:

- create a new forest, or
- join an existing domain.

### Step 5: Enter the domain details

1. Enter the domain name or forest name.
2. Provide the Directory Services Restore Mode (DSRM) password.
3. Review the domain controller settings.
4. Click Next.

### Step 6: Review the configuration summary

1. Review the domain name, NetBIOS name, DNS settings, and site placement.
2. Confirm the database, log, and SYSVOL paths.
3. Click Next.

### Step 7: Complete the promotion

1. Review the prerequisites check.
2. Click Install.
3. Allow the server to complete the AD DS installation and promotion.
4. When prompted, reboot the machine.

---

## 3. Reboot and sign in as the domain administrator

### Step 8: Restart the server

1. Allow the VM to reboot after promotion.
2. Wait until the server returns to a healthy working state.

### Step 9: Sign in as the domain administrator

1. Sign in using the domain administrator account.
2. Verify the domain is available.
3. Open Active Directory Users and Computers to confirm the domain controller is functioning correctly.

At this point the server is a live domain controller and ready for the CloudInfra Secure Domain Controller hardening process.

---

## 4. Run the Domain Controller baseline

### Step 10: Open an elevated PowerShell session

1. Open Windows PowerShell as Administrator.
2. Confirm the session has elevated privileges.

### Step 11: Run the audit

```powershell
cd C:\CloudInfraSecure
.\CloudInfraSecure.ps1 audit -Baseline CloudInfraSecure-DomainController
```

This verifies the domain controller against the [CloudInfra Secure Domain Controller baseline](../reference/baselines/index.md#cloudinfra-secure-domain-controller-role-tier).

### Step 12: Review failed controls

If the audit reports failures, review the control IDs and messages. On a live domain controller, the most common remaining controls are:

- [WIN-ACCT-003 — Force Logoff When Logon Hours Expire](../reference/controls/index.md#win-acct-003)
- [WIN-SVC-001 — Disable Remote Registry Service](../reference/controls/index.md#win-svc-001)

### Step 13: Apply the DC baseline

Once the server is a functioning DC, run:

```powershell
cd C:\CloudInfraSecure
.\CloudInfraSecure.ps1 apply -Baseline CloudInfraSecure-DomainController
```

This applies the hardening baseline to the server and records the expected configuration for future verification.

---

## 5. Fix the GPO setting: Force logoff when logon hours expire

The control [WIN-ACCT-003 — Force Logoff When Logon Hours Expire](../reference/controls/index.md#win-acct-003) is a domain-level security policy. It requires the following effective value:

- Policy name: Network security: Force logoff when logon hours expire
- Expected state: Enabled
- SecEdit value: `ForceLogoffWhenHourExpire = 1`

This setting must be enforced in the domain policy applied to the domain controllers.

### Step 14: Open Group Policy Management

1. On the domain controller, open Server Manager.
2. Select Tools.
3. Choose Group Policy Management.

### Step 15: Create a new GPO

1. Expand the domain tree.
2. Right-click the domain.
3. Select Create a GPO in this domain, and Link it here.
4. Name the GPO clearly, for example:
   - CloudInfra Secure - Domain Controller Hardening
5. Click OK.

### Step 16: Edit the GPO

1. Right-click the new GPO.
2. Select Edit.

### Step 17: Navigate to the policy area

In the Group Policy Management Editor, browse to:

`Computer Configuration` > `Policies` > `Windows Settings` > `Security Settings` > `Local Policies` > `Security Options`

### Step 18: Find the relevant setting

Search for:

`Network security: Force logoff when logon hours expire`

### Step 19: Enable the policy

1. Double-click the policy.
2. Select Enabled.
3. Click Apply.
4. Click OK.

### Step 20: Link the GPO to the correct scope

Make sure the GPO is linked to the domain or the specific OU containing the domain controllers. Review the scope to confirm the domain controllers receive the policy.

### Step 21: Refresh the policy

Run the following command on the DC:

```powershell
gpupdate /force
```

Then verify the effective policy state:

```powershell
gpresult /r
```

### Step 22: Re-run the audit

```powershell
cd C:\CloudInfraSecure
.\CloudInfraSecure.ps1 audit -Baseline CloudInfraSecure-DomainController
```

If the control still fails, verify that the GPO is linked to the correct scope and that the policy was applied to the target DC.

---

## 6. Disable the Remote Registry service

The control [WIN-SVC-001 — Disable Remote Registry Service](../reference/controls/index.md#win-svc-001) requires that the Remote Registry service is both stopped and disabled.

This service should not be running on a hardened domain controller because it expands the remote attack surface and allows registry reconnaissance or remote configuration access.

### Step 23: Open the Services console

1. Press Windows Key + R.
2. Type `services.msc`.
3. Press Enter.

### Step 24: Locate the service

In the Services list, find:

`Remote Registry`

### Step 25: Stop the service

1. Right-click Remote Registry.
2. Select Stop.
3. Wait for the service to stop.

### Step 26: Change the startup type to Disabled

1. Right-click Remote Registry.
2. Select Properties.
3. In Startup type, choose Disabled.
4. Click Apply.
5. Click OK.

### Step 27: Confirm the service state

Run:

```powershell
Get-Service RemoteRegistry | Select-Object Name, Status, StartType
```

The expected result is:

- Status: Stopped
- StartType: Disabled

### Step 28: Use PowerShell to enforce it

You can also apply the setting using PowerShell:

```powershell
Stop-Service RemoteRegistry -Force
Set-Service RemoteRegistry -StartupType Disabled
Get-Service RemoteRegistry | Select-Object Name, Status, StartType
```

This ensures the service remains disabled and stopped after the change.

---

## 7. Generate a report if needed

To produce a compliance report for the domain controller, run:

```powershell
cd C:\CloudInfraSecure
.\CloudInfraSecure.ps1 report -Baseline CloudInfraSecure-DomainController -Format HTML
```

Reports are saved to:

```powershell
C:\CloudInfraSecure\Reports\
```

## 8. Verify the hardened state

To confirm the current Domain Controller state matches the expected hardened configuration, run:

```powershell
cd C:\CloudInfraSecure
.\CloudInfraSecure.ps1 verify -Baseline CloudInfraSecure-DomainController
```

If no failures remain, the domain controller is successfully hardened and ready for production use.

---

## 9. Recommended end-user workflow

The supported customer flow is:

1. Launch the VM.
2. Log in locally with the administrator account.
3. Promote the server to a domain controller.
4. Reboot the server.
5. Log in as the domain administrator.
6. Run the Domain Controller baseline.
7. Review and fix any remaining DC-specific failures.
8. Generate a report if needed.
9. Run verification to confirm the hardened state.

This is the supported deployment model for a hardened AD-ready image.

## Related information

- [CloudInfra Secure Domain Controller baseline](../reference/baselines/index.md#cloudinfra-secure-domain-controller-role-tier)
- [WIN-ACCT-003 — Force Logoff When Logon Hours Expire](../reference/controls/index.md#win-acct-003)
- [WIN-SVC-001 — Disable Remote Registry Service](../reference/controls/index.md#win-svc-001)
- [Reporting guide](reporting.md)
- [Drift Detection & Alerts](drift-and-alerts.md)
- [Commands reference](commands.md)
