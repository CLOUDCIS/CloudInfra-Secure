# Controls

The CloudInfra Secure control library (48 controls). Each control exists once and may be used by many baselines.

!!! note "Compliance disclaimer"
    CloudInfra Secure controls are designed to help organisations implement technical security requirements commonly found in recognised security standards. They do not constitute certification or proof of compliance.

## Coverage summary

| ID | Name | Severity | Category | Provider | Reboot |
|----|------|----------|----------|----------|--------|
| [WIN-AUD-001](#win-aud-001) | Audit Logon Failures | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-002](#win-aud-002) | Audit Account Lockout Events | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-003](#win-aud-003) | Audit Process Creation | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-004](#win-aud-004) | Audit Credential Validation | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-005](#win-aud-005) | Audit Security Group Management | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-006](#win-aud-006) | Audit Special Logon | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-007](#win-aud-007) | Audit Sensitive Privilege Use | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-008](#win-aud-008) | Audit System Integrity | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUTORUN-001](#win-autorun-001) | Disable AutoRun on All Drives | Medium | Attack Surface Reduction | Registry | No |
| [WIN-DEF-001](#win-def-001) | Microsoft Defender Antivirus Enabled | High | Endpoint Protection | Defender | No |
| [WIN-FW-001](#win-fw-001) | Windows Firewall Enabled (All Profiles) | High | Host Firewall | Firewall | No |
| [WIN-INSTALL-001](#win-install-001) | Disable Always Install Elevated | High | Privilege Management | Registry | No |
| [WIN-LDAP-001](#win-ldap-001) | LDAP Client Signing | Medium | Authentication | Registry | No |
| [WIN-LOCK-001](#win-lock-001) | Account Lockout Threshold | Medium | Account Policy | SecEdit | No |
| [WIN-LOCK-002](#win-lock-002) | Account Lockout Duration | Medium | Account Policy | SecEdit | No |
| [WIN-LOCK-003](#win-lock-003) | Reset Account Lockout Counter | Medium | Account Policy | SecEdit | No |
| [WIN-LOGON-001](#win-logon-001) | Machine Inactivity Limit | Medium | Access Control | Registry | No |
| [WIN-LOGON-002](#win-logon-002) | Do Not Display Last Signed-In User | Low | Access Control | Registry | No |
| [WIN-LSA-001](#win-lsa-001) | Do Not Store LAN Manager Hash | High | Credential Protection | Registry | No |
| [WIN-LSA-002](#win-lsa-002) | Restrict Anonymous SID Enumeration | Medium | Access Control | Registry | No |
| [WIN-LSA-003](#win-lsa-003) | Enable LSASS Protection (RunAsPPL) | High | Credential Protection | Registry | Yes |
| [WIN-NET-001](#win-net-001) | Disable LLMNR | Medium | Network Protocols | Registry | No |
| [WIN-NTLM-001](#win-ntlm-001) | LAN Manager Authentication Level (NTLMv2 Only) | High | Authentication | Registry | No |
| [WIN-PSL-001](#win-psl-001) | Enable PowerShell Script Block Logging | Medium | Logging and Monitoring | Registry | No |
| [WIN-PSL-002](#win-psl-002) | Enable PowerShell Module Logging | Medium | Logging and Monitoring | Registry | No |
| [WIN-PWD-001](#win-pwd-001) | Minimum Password Length | High | Account Policy | SecEdit | No |
| [WIN-PWD-002](#win-pwd-002) | Password Complexity Enabled | High | Account Policy | SecEdit | No |
| [WIN-PWD-003](#win-pwd-003) | Maximum Password Age | Medium | Account Policy | SecEdit | No |
| [WIN-PWD-004](#win-pwd-004) | Minimum Password Age | Low | Account Policy | SecEdit | No |
| [WIN-PWD-005](#win-pwd-005) | Enforce Password History | Medium | Account Policy | SecEdit | No |
| [WIN-PWD-006](#win-pwd-006) | Disable Reversible Password Encryption | High | Account Policy | SecEdit | No |
| [WIN-RDP-001](#win-rdp-001) | Require Network Level Authentication for RDP | High | Remote Access | Registry | No |
| [WIN-RDP-002](#win-rdp-002) | RDP Minimum Encryption Level (High) | Medium | Remote Access | Registry | No |
| [WIN-RDP-003](#win-rdp-003) | RDP Security Layer (TLS) | Medium | Remote Access | Registry | No |
| [WIN-RDP-004](#win-rdp-004) | Disable RDP Drive Redirection | Medium | Remote Access | Registry | No |
| [WIN-SMB-001](#win-smb-001) | Disable SMBv1 | High | Network Protocols | Registry | No |
| [WIN-SMB-003](#win-smb-003) | Require SMB Signing (Server) | High | Network Protocols | Registry | No |
| [WIN-SMB-004](#win-smb-004) | Disable SMBv1 Client | High | Network Protocols | Registry | No |
| [WIN-SMB-005](#win-smb-005) | Require SMB Client Signing | Medium | Network Protocols | Registry | No |
| [WIN-SVC-001](#win-svc-001) | Disable Remote Registry Service | Medium | Attack Surface Reduction | Service | No |
| [WIN-TLS-010](#win-tls-010) | Disable TLS 1.0 (Server) | High | Cryptography | Registry | Yes |
| [WIN-TLS-011](#win-tls-011) | Disable TLS 1.1 (Server) | High | Cryptography | Registry | Yes |
| [WIN-TLS-012](#win-tls-012) | Disable SSL 3.0 (Server) | High | Cryptography | Registry | Yes |
| [WIN-TLS-013](#win-tls-013) | Disable SSL 2.0 (Server) | High | Cryptography | Registry | Yes |
| [WIN-UAC-001](#win-uac-001) | User Account Control Enabled | High | Privilege Management | Registry | Yes |
| [WIN-UAC-002](#win-uac-002) | UAC Elevation Prompt for Administrators | Medium | Privilege Management | Registry | No |
| [WIN-UAC-003](#win-uac-003) | UAC Detect Application Installations | Medium | Privilege Management | Registry | No |
| [WIN-WDIGEST-001](#win-wdigest-001) | Disable WDigest Credential Caching | High | Credential Protection | Registry | No |

## Control reference

### WIN-AUD-001 - Audit Logon Failures { #win-aud-001 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The advanced audit policy must log failed logon events (subcategory 'Logon') to support detection of unauthorized access attempts.

**Rationale.** Failed authentication attempts go unrecorded, hindering intrusion detection.

**Remediation.** Enable failure auditing for the Logon subcategory (auditpol /set /subcategory:Logon /failure:enable).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-logon](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-logon)

### WIN-AUD-002 - Audit Account Lockout Events { #win-aud-002 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The advanced audit policy must log account lockout events (subcategory 'Account Lockout') to support detection of brute-force activity.

**Rationale.** Account lockouts from attacks go unrecorded.

**Remediation.** Enable failure auditing for the Account Lockout subcategory via auditpol (subcategory Account Lockout, failure enable).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-account-lockout](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-account-lockout)

### WIN-AUD-003 - Audit Process Creation { #win-aud-003 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Process creation events must be audited to support detection and forensic investigation.

**Rationale.** Without process auditing, malicious execution is hard to detect or investigate.

**Remediation.** Enable success auditing for the Process Creation subcategory (Detailed Tracking).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-process-creation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-process-creation)

### WIN-AUD-004 - Audit Credential Validation { #win-aud-004 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Credential validation events must be audited to detect authentication attacks.

**Rationale.** Unaudited credential validation hides brute-force and password-spray activity.

**Remediation.** Enable success and failure auditing for the Credential Validation subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-credential-validation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-credential-validation)

### WIN-AUD-005 - Audit Security Group Management { #win-aud-005 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to security groups must be audited to detect privilege escalation via group membership.

**Rationale.** Unaudited group changes hide privilege escalation and persistence.

**Remediation.** Enable success auditing for the Security Group Management subcategory (Account Management).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-security-group-management](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-security-group-management)

### WIN-AUD-006 - Audit Special Logon { #win-aud-006 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Special logon events (privileged logons) must be audited.

**Rationale.** Unaudited privileged logons hide administrative and attacker activity.

**Remediation.** Enable success auditing for the Special Logon subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-special-logon](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-special-logon)

### WIN-AUD-007 - Audit Sensitive Privilege Use { #win-aud-007 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Use of sensitive privileges must be audited to detect privilege abuse.

**Rationale.** Unaudited sensitive privilege use hides privilege-escalation and abuse.

**Remediation.** Enable success and failure auditing for the Sensitive Privilege Use subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-sensitive-privilege-use](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-sensitive-privilege-use)

### WIN-AUD-008 - Audit System Integrity { #win-aud-008 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

System integrity events (audit subsystem failures, driver issues) must be audited.

**Rationale.** Unaudited integrity events hide tampering with the audit subsystem.

**Remediation.** Enable success and failure auditing for the System Integrity subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-system-integrity](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-system-integrity)

### WIN-AUTORUN-001 - Disable AutoRun on All Drives { #win-autorun-001 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

AutoRun/AutoPlay must be disabled on all drive types to prevent automatic execution from removable media.

**Rationale.** AutoRun can automatically execute malware from removable or network media.

**Remediation.** Set Policies Explorer NoDriveTypeAutoRun to 255 to disable AutoRun on all drives.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-DEF-001 - Microsoft Defender Antivirus Enabled { #win-def-001 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Defender &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

Microsoft Defender Antivirus must be enabled and providing real-time protection.

**Rationale.** Absence of endpoint antivirus protection allows malware execution.

**Remediation.** Ensure Microsoft Defender Antivirus is enabled with real-time protection. Managed by platform/AV policy; enable via Windows Security or Group Policy (not auto-applied by CloudInfra Secure).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-FW-001 - Windows Firewall Enabled (All Profiles) { #win-fw-001 }

**Severity:** High &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Firewall &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

The Windows Defender Firewall must be enabled for the Domain, Private and Public profiles to enforce host-based network filtering.

**Rationale.** Unrestricted inbound network access if the host firewall is disabled.

**Remediation.** Enable Windows Defender Firewall on the Domain, Private and Public profiles (Set-NetFirewallProfile -Enabled True).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `CMMC Level 2` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-INSTALL-001 - Disable Always Install Elevated { #win-install-001 }

**Severity:** High &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Windows Installer must not install packages with elevated privileges for standard users.

**Rationale.** AlwaysInstallElevated lets any user install software as SYSTEM - a privilege-escalation path.

**Remediation.** Ensure Installer AlwaysInstallElevated is 0 (or absent). Remove any policy enabling it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-LDAP-001 - LDAP Client Signing { #win-ldap-001 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The LDAP client must negotiate signing to protect directory queries from tampering and relay.

**Rationale.** Unsigned LDAP traffic is vulnerable to man-in-the-middle and relay attacks.

**Remediation.** Set Services LDAP LDAPClientIntegrity to 1 (negotiate signing).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-ldap-client-signing-requirements](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-ldap-client-signing-requirements)

### WIN-LOCK-001 - Account Lockout Threshold { #win-lock-001 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The account lockout threshold must be set to a non-zero value of 5 or fewer invalid logon attempts to resist password guessing.

**Rationale.** Unlimited logon attempts enable brute-force password attacks.

**Remediation.** Set the account lockout threshold to a non-zero value of 5 or fewer invalid attempts (Account Policies, Account Lockout Policy).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/account-lockout-threshold](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/account-lockout-threshold)

### WIN-LOCK-002 - Account Lockout Duration { #win-lock-002 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

A locked account should remain locked long enough to slow automated password guessing.

**Rationale.** A short lockout duration lets attackers resume guessing quickly.

**Remediation.** Set the account lockout duration to 15 minutes or more.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/account-lockout-duration](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/account-lockout-duration)

### WIN-LOCK-003 - Reset Account Lockout Counter { #win-lock-003 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The failed-logon counter should persist long enough to make lockout thresholds effective.

**Rationale.** A short reset window weakens the lockout threshold against slow guessing.

**Remediation.** Set the reset account lockout counter to 15 minutes or more.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/reset-account-lockout-counter-after](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/reset-account-lockout-counter-after)

### WIN-LOGON-001 - Machine Inactivity Limit { #win-logon-001 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The machine must lock after a period of inactivity to protect unattended sessions.

**Rationale.** Unattended, unlocked sessions can be hijacked by anyone with physical or console access.

**Remediation.** Set Policies System InactivityTimeoutSecs to 900 (15 minutes) or fewer.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-machine-inactivity-limit](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-machine-inactivity-limit)

### WIN-LOGON-002 - Do Not Display Last Signed-In User { #win-logon-002 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The last signed-in username must not be displayed at the logon screen.

**Rationale.** Displaying the last user discloses a valid account name to attackers.

**Remediation.** Set Policies System DontDisplayLastUserName to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-do-not-display-last-user-name](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-do-not-display-last-user-name)

### WIN-LSA-001 - Do Not Store LAN Manager Hash { #win-lsa-001 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

The weak LAN Manager hash of passwords must not be stored on next password change.

**Rationale.** LM hashes are easily cracked, exposing account passwords.

**Remediation.** Set Lsa NoLMHash to 1 so LM hashes are not stored.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-do-not-store-lan-manager-hash-value-on-next-password-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-do-not-store-lan-manager-hash-value-on-next-password-change)

### WIN-LSA-002 - Restrict Anonymous SID Enumeration { #win-lsa-002 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Anonymous users must not be able to enumerate SIDs and account names.

**Rationale.** Anonymous enumeration aids reconnaissance and targeted attacks.

**Remediation.** Set Lsa RestrictAnonymous to 1 to restrict anonymous enumeration.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-anonymous-enumeration-of-sam-accounts-and-shares](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-anonymous-enumeration-of-sam-accounts-and-shares)

### WIN-LSA-003 - Enable LSASS Protection (RunAsPPL) { #win-lsa-003 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Enterprise

LSASS must run as a protected process (PPL) to resist credential theft tools.

**Rationale.** Unprotected LSASS memory can be dumped to steal credentials.

**Remediation.** Set Lsa RunAsPPL to 1 to run LSASS as a protected process. Requires a reboot.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-001 - Disable LLMNR { #win-net-001 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Link-Local Multicast Name Resolution (LLMNR) must be disabled to prevent name-resolution poisoning and credential capture.

**Rationale.** LLMNR enables responder-style spoofing and NTLM credential theft.

**Remediation.** Set DNSClient EnableMulticast to 0 to disable LLMNR.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NTLM-001 - LAN Manager Authentication Level (NTLMv2 Only) { #win-ntlm-001 }

**Severity:** High &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The system must send NTLMv2 responses only and refuse LM and NTLM, resisting downgrade and relay attacks.

**Rationale.** Legacy LM/NTLM authentication is vulnerable to cracking and relay.

**Remediation.** Set Lsa LmCompatibilityLevel to 5 (send NTLMv2 only, refuse LM and NTLM).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-lan-manager-authentication-level](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-lan-manager-authentication-level)

### WIN-PSL-001 - Enable PowerShell Script Block Logging { #win-psl-001 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

PowerShell Script Block Logging must be enabled to record the content of executed script blocks for detection and forensics.

**Rationale.** Reduced visibility of malicious PowerShell activity.

**Remediation.** Enable PowerShell Script Block Logging by setting EnableScriptBlockLogging to 1 under the ScriptBlockLogging policy key.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows)

### WIN-PSL-002 - Enable PowerShell Module Logging { #win-psl-002 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

PowerShell Module Logging must be enabled to record pipeline execution details of PowerShell modules.

**Rationale.** Reduced visibility of malicious PowerShell module activity.

**Remediation.** Enable PowerShell Module Logging by setting EnableModuleLogging to 1 under the ModuleLogging policy key.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows)

### WIN-PWD-001 - Minimum Password Length { #win-pwd-001 }

**Severity:** High &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

The local security policy must require a minimum password length of at least 14 characters.

**Rationale.** Short passwords are susceptible to brute-force and guessing attacks.

**Remediation.** Set the minimum password length policy to 14 or greater (Local Security Policy, Account Policies, Password Policy).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/minimum-password-length](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/minimum-password-length)

### WIN-PWD-002 - Password Complexity Enabled { #win-pwd-002 }

**Severity:** High &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

The local security policy must enforce password complexity requirements.

**Rationale.** Simple passwords are susceptible to guessing and dictionary attacks.

**Remediation.** Enable the password complexity requirements policy (PasswordComplexity = 1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements)

### WIN-PWD-003 - Maximum Password Age { #win-pwd-003 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Passwords must expire within a defined period so that compromised credentials have a limited useful lifetime.

**Rationale.** Passwords that never expire remain valid indefinitely if leaked.

**Remediation.** Set the maximum password age to 365 days or fewer (but not 0) in the account policy.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/maximum-password-age](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/maximum-password-age)

### WIN-PWD-004 - Minimum Password Age { #win-pwd-004 }

**Severity:** Low &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

A minimum password age prevents users from cycling rapidly through passwords to defeat history enforcement.

**Rationale.** Without a minimum age, users can bypass password history by changing passwords repeatedly.

**Remediation.** Set the minimum password age to at least 1 day in the account policy.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/minimum-password-age](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/minimum-password-age)

### WIN-PWD-005 - Enforce Password History { #win-pwd-005 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Remembering previous passwords prevents reuse of recently used credentials.

**Rationale.** Password reuse increases exposure if an old password is compromised.

**Remediation.** Set the enforce password history policy to 24 or more remembered passwords.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/enforce-password-history](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/enforce-password-history)

### WIN-PWD-006 - Disable Reversible Password Encryption { #win-pwd-006 }

**Severity:** High &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

Storing passwords using reversible encryption is equivalent to storing plaintext passwords and must be disabled.

**Rationale.** Reversibly encrypted passwords can be trivially recovered to plaintext.

**Remediation.** Disable the store-passwords-using-reversible-encryption policy (set to 0).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/store-passwords-using-reversible-encryption](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/store-passwords-using-reversible-encryption)

### WIN-RDP-001 - Require Network Level Authentication for RDP { #win-rdp-001 }

**Severity:** High &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Remote Desktop connections must require Network Level Authentication (NLA) so users authenticate before a session is established.

**Rationale.** Pre-authentication exposure of the RDP session host to unauthenticated attackers.

**Remediation.** Require Network Level Authentication for RDP by setting UserAuthentication to 1 on the RDP-Tcp WinStation.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-002 - RDP Minimum Encryption Level (High) { #win-rdp-002 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Remote Desktop sessions must use a High minimum encryption level.

**Rationale.** Weak RDP encryption exposes session data to interception.

**Remediation.** Set the RDP-Tcp MinEncryptionLevel to 3 (High).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-003 - RDP Security Layer (TLS) { #win-rdp-003 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Remote Desktop must use the SSL/TLS security layer for connection security.

**Rationale.** The legacy RDP security layer is susceptible to man-in-the-middle attacks.

**Remediation.** Set the RDP-Tcp SecurityLayer to 2 (SSL/TLS).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-004 - Disable RDP Drive Redirection { #win-rdp-004 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Client drive redirection over RDP must be disabled to prevent data exfiltration and malware ingress.

**Rationale.** Drive redirection allows files to move between client and server, aiding exfiltration.

**Remediation.** Set the RDP-Tcp fDisableCdm value to 1 to disable client drive redirection.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-SMB-001 - Disable SMBv1 { #win-smb-001 }

**Severity:** High &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

SMBv1 is a deprecated protocol vulnerable to EternalBlue-class remote code execution and lateral movement. It must be disabled on the server.

**Rationale.** Remote code execution and lateral movement via legacy SMB protocol.

**Remediation.** Disable the SMBv1 server by setting the LanmanServer Parameters value SMB1 to 0. CloudInfra Secure applies this automatically; reboot to fully remove the SMBv1 driver.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3)

### WIN-SMB-003 - Require SMB Signing (Server) { #win-smb-003 }

**Severity:** High &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The SMB server must require packet signing to prevent tampering and man-in-the-middle attacks on file traffic.

**Rationale.** Unsigned SMB traffic can be intercepted or modified in transit.

**Remediation.** Set LanmanServer Parameters RequireSecuritySignature to 1 to require SMB signing.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-digitally-sign-communications-always](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-digitally-sign-communications-always)

### WIN-SMB-004 - Disable SMBv1 Client { #win-smb-004 }

**Severity:** High &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The SMBv1 client driver (mrxsmb10) must be disabled to prevent the host connecting over the vulnerable SMBv1 protocol.

**Rationale.** SMBv1 client use exposes the host to EternalBlue-class and downgrade attacks.

**Remediation.** Set the mrxsmb10 service Start value to 4 (disabled) to disable the SMBv1 client driver.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3)

### WIN-SMB-005 - Require SMB Client Signing { #win-smb-005 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The SMB client must require packet signing to protect outbound file traffic from tampering.

**Rationale.** Unsigned SMB client traffic can be intercepted or modified.

**Remediation.** Set LanmanWorkstation Parameters RequireSecuritySignature to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-client-digitally-sign-communications-always](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-client-digitally-sign-communications-always)

### WIN-SVC-001 - Disable Remote Registry Service { #win-svc-001 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Service &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Remote Registry service must be stopped and disabled to reduce remote attack surface.

**Rationale.** Remote Registry enables remote reconnaissance and modification of the registry.

**Remediation.** Stop and disable the RemoteRegistry service.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-TLS-010 - Disable TLS 1.0 (Server) { #win-tls-010 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

TLS 1.0 is a deprecated protocol with known weaknesses. The SCHANNEL server endpoint for TLS 1.0 must be disabled.

**Rationale.** Downgrade and cryptographic attacks against legacy TLS.

**Remediation.** Disable the TLS 1.0 server endpoint by setting the SCHANNEL TLS 1.0 Server Enabled value to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-011 - Disable TLS 1.1 (Server) { #win-tls-011 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

TLS 1.1 is a deprecated protocol. The SCHANNEL server endpoint for TLS 1.1 must be disabled.

**Rationale.** Downgrade and cryptographic attacks against legacy TLS.

**Remediation.** Disable the TLS 1.1 server endpoint by setting the SCHANNEL TLS 1.1 Server Enabled value to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-012 - Disable SSL 3.0 (Server) { #win-tls-012 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

The deprecated SSL 3.0 protocol must be disabled on the SCHANNEL server endpoint.

**Rationale.** SSL 3.0 is vulnerable to POODLE and other attacks.

**Remediation.** Set the SCHANNEL SSL 3.0 Server Enabled value to 0. Requires a reboot.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-013 - Disable SSL 2.0 (Server) { #win-tls-013 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

The obsolete SSL 2.0 protocol must be disabled on the SCHANNEL server endpoint.

**Rationale.** SSL 2.0 is fundamentally insecure and must not be offered.

**Remediation.** Set the SCHANNEL SSL 2.0 Server Enabled value to 0. Requires a reboot.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-UAC-001 - User Account Control Enabled { #win-uac-001 }

**Severity:** High &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

User Account Control (UAC) must be enabled (EnableLUA = 1) to enforce administrative elevation prompts.

**Rationale.** Disabling UAC allows silent privilege escalation by malicious code.

**Remediation.** Enable User Account Control by setting EnableLUA to 1 under the CurrentVersion Policies System key. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-run-all-administrators-in-admin-approval-mode](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-run-all-administrators-in-admin-approval-mode)

### WIN-UAC-002 - UAC Elevation Prompt for Administrators { #win-uac-002 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Administrator elevation must prompt for consent on the secure desktop.

**Rationale.** Weak elevation prompts allow silent or spoofed privilege escalation.

**Remediation.** Set Policies System ConsentPromptBehaviorAdmin to 2 (prompt for consent on the secure desktop).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-behavior-of-the-elevation-prompt-for-administrators-in-admin-approval-mode](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-behavior-of-the-elevation-prompt-for-administrators-in-admin-approval-mode)

### WIN-UAC-003 - UAC Detect Application Installations { #win-uac-003 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

UAC must detect application installations and prompt for elevation.

**Rationale.** Silent installer elevation allows privilege escalation via installers.

**Remediation.** Set Policies System EnableInstallerDetection to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-detect-application-installations-and-prompt-for-elevation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-detect-application-installations-and-prompt-for-elevation)

### WIN-WDIGEST-001 - Disable WDigest Credential Caching { #win-wdigest-001 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

WDigest must not cache plaintext credentials in memory.

**Rationale.** WDigest plaintext credential caching enables credential theft.

**Remediation.** Set SecurityProviders WDigest UseLogonCredential to 0 to disable plaintext caching.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

