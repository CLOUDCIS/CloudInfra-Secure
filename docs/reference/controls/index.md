# Controls

The CloudInfra Secure control library (116 controls). Each control exists once and may be used by many baselines.

!!! note "Compliance disclaimer"
    CloudInfra Secure controls are designed to help organisations implement technical security requirements commonly found in recognised security standards. They do not constitute certification or proof of compliance.

## Coverage summary

| ID | Name | Severity | Category | Provider | Reboot |
|----|------|----------|----------|----------|--------|
| [WIN-ASR-001](#win-asr-001) | ASR: Block Credential Stealing from LSASS | High | Attack Surface Reduction | Registry | No |
| [WIN-ASR-002](#win-asr-002) | ASR: Block Office Apps Creating Child Processes | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-003](#win-asr-003) | ASR: Block Executable Content from Email and Webmail | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-004](#win-asr-004) | ASR: Block Obfuscated Scripts | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-005](#win-asr-005) | ASR: Block Untrusted Processes from USB | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-006](#win-asr-006) | ASR: Block Process Creation from PSExec and WMI | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-007](#win-asr-007) | ASR: Advanced Protection Against Ransomware | High | Attack Surface Reduction | Registry | No |
| [WIN-ASR-008](#win-asr-008) | ASR: Block Office Apps Injecting Code into Other Processes | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-009](#win-asr-009) | ASR: Block Office Apps Creating Executable Content | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-010](#win-asr-010) | ASR: Block Persistence Through WMI Event Subscription | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-011](#win-asr-011) | ASR: Block Win32 API Calls from Office Macros | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-012](#win-asr-012) | ASR: Block Untrusted Executables by Prevalence, Age, or Trust | Medium | Attack Surface Reduction | Registry | No |
| [WIN-ASR-013](#win-asr-013) | ASR: Block Adobe Reader from Creating Child Processes | Medium | Attack Surface Reduction | Registry | No |
| [WIN-AUD-001](#win-aud-001) | Audit Logon Failures | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-002](#win-aud-002) | Audit Account Lockout Events | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-003](#win-aud-003) | Audit Process Creation | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-004](#win-aud-004) | Audit Credential Validation | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-005](#win-aud-005) | Audit Security Group Management | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-006](#win-aud-006) | Audit Special Logon | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-007](#win-aud-007) | Audit Sensitive Privilege Use | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-008](#win-aud-008) | Audit System Integrity | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-009](#win-aud-009) | Audit Logoff | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-010](#win-aud-010) | Audit Removable Storage | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-011](#win-aud-011) | Audit Authentication Policy Change | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-012](#win-aud-012) | Audit User Account Management | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-013](#win-aud-013) | Audit Computer Account Management | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-014](#win-aud-014) | Audit Audit Policy Change | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-015](#win-aud-015) | Audit Other Logon/Logoff Events | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUD-016](#win-aud-016) | Audit MPSSVC Rule-Level Policy Change | Medium | Logging and Monitoring | AuditPol | No |
| [WIN-AUTORUN-001](#win-autorun-001) | Disable AutoRun on All Drives | Medium | Attack Surface Reduction | Registry | No |
| [WIN-DEF-001](#win-def-001) | Microsoft Defender Antivirus Enabled | High | Endpoint Protection | Defender | No |
| [WIN-DEF-002](#win-def-002) | Enable Potentially Unwanted Application (PUA) Protection | High | Endpoint Protection | Registry | No |
| [WIN-DEF-003](#win-def-003) | Enable Defender Real-Time Protection | High | Endpoint Protection | Registry | No |
| [WIN-DEF-004](#win-def-004) | Enable Cloud-Delivered Protection | Medium | Endpoint Protection | Registry | No |
| [WIN-DEF-005](#win-def-005) | Enable Network Protection | Medium | Endpoint Protection | Registry | No |
| [WIN-DEF-006](#win-def-006) | Enable Controlled Folder Access | Medium | Endpoint Protection | Registry | No |
| [WIN-DEF-007](#win-def-007) | Scan Removable Drives During Full Scan | Low | Endpoint Protection | Registry | No |
| [WIN-DEF-008](#win-def-008) | Enable Block at First Sight | Medium | Endpoint Protection | Registry | No |
| [WIN-DEF-009](#win-def-009) | Enable Defender Behavior Monitoring | High | Endpoint Protection | Registry | No |
| [WIN-FW-001](#win-fw-001) | Windows Firewall Enabled (All Profiles) | High | Host Firewall | Firewall | No |
| [WIN-FW-002](#win-fw-002) | Block Inbound Connections by Default (Domain Profile) | Medium | Host Firewall | Registry | No |
| [WIN-FW-003](#win-fw-003) | Block Inbound Connections by Default (Private Profile) | Medium | Host Firewall | Registry | No |
| [WIN-FW-004](#win-fw-004) | Block Inbound Connections by Default (Public Profile) | Medium | Host Firewall | Registry | No |
| [WIN-FW-005](#win-fw-005) | Log Dropped Packets (Public Profile) | Low | Host Firewall | Registry | No |
| [WIN-INSTALL-001](#win-install-001) | Disable Always Install Elevated | High | Privilege Management | Registry | No |
| [WIN-KRB-001](#win-krb-001) | Configure Kerberos Encryption Types (AES only) | Medium | Authentication | Registry | No |
| [WIN-LDAP-001](#win-ldap-001) | LDAP Client Signing | Medium | Authentication | Registry | No |
| [WIN-LOCK-001](#win-lock-001) | Account Lockout Threshold | Medium | Account Policy | SecEdit | No |
| [WIN-LOCK-002](#win-lock-002) | Account Lockout Duration | Medium | Account Policy | SecEdit | No |
| [WIN-LOCK-003](#win-lock-003) | Reset Account Lockout Counter | Medium | Account Policy | SecEdit | No |
| [WIN-LOGON-001](#win-logon-001) | Machine Inactivity Limit | Medium | Access Control | Registry | No |
| [WIN-LOGON-002](#win-logon-002) | Do Not Display Last Signed-In User | Low | Access Control | Registry | No |
| [WIN-LOGON-003](#win-logon-003) | Limit Number of Cached Logons | Medium | Access Control | Registry | No |
| [WIN-LOGON-004](#win-logon-004) | Require Ctrl+Alt+Del at Logon | Low | Access Control | Registry | No |
| [WIN-LOGON-005](#win-logon-005) | Smart Card Removal Behavior (Lock Workstation) | Low | Access Control | Registry | No |
| [WIN-LOGON-006](#win-logon-006) | Disable Automatic Logon | Medium | Access Control | Registry | No |
| [WIN-LSA-001](#win-lsa-001) | Do Not Store LAN Manager Hash | High | Credential Protection | Registry | No |
| [WIN-LSA-002](#win-lsa-002) | Restrict Anonymous SID Enumeration | Medium | Access Control | Registry | No |
| [WIN-LSA-003](#win-lsa-003) | Enable LSASS Protection (RunAsPPL) | High | Credential Protection | Registry | Yes |
| [WIN-LSA-004](#win-lsa-004) | Do Not Allow Anonymous Enumeration of SAM Accounts | Medium | Access Control | Registry | No |
| [WIN-LSA-005](#win-lsa-005) | Enable Structured Exception Handling Overwrite Protection (SEHOP) | Medium | Exploit Protection | Registry | No |
| [WIN-LSA-006](#win-lsa-006) | Digitally Encrypt or Sign Secure Channel Data (Always) | Medium | Authentication | Registry | No |
| [WIN-LSA-007](#win-lsa-007) | Do Not Apply Everyone Permissions to Anonymous Users | Medium | Access Control | Registry | No |
| [WIN-LSA-008](#win-lsa-008) | Restrict Clients Allowed to Make Remote SAM Calls | Medium | Access Control | Registry | No |
| [WIN-LSA-009](#win-lsa-009) | Limit Local Account Use of Blank Passwords | High | Access Control | Registry | No |
| [WIN-LSA-010](#win-lsa-010) | Sharing and Security Model for Local Accounts (Classic) | Medium | Access Control | Registry | No |
| [WIN-NET-001](#win-net-001) | Disable LLMNR | Medium | Network Protocols | Registry | No |
| [WIN-NET-002](#win-net-002) | Disable IPv4 Source Routing | Medium | Network Protocols | Registry | No |
| [WIN-NET-003](#win-net-003) | Disable ICMP Redirects | Low | Network Protocols | Registry | No |
| [WIN-NET-004](#win-net-004) | Disable IPv6 Source Routing | Medium | Network Protocols | Registry | No |
| [WIN-NET-005](#win-net-005) | Ignore NetBIOS Name Release Requests | Low | Network Protocols | Registry | No |
| [WIN-NTLM-001](#win-ntlm-001) | LAN Manager Authentication Level (NTLMv2 Only) | High | Authentication | Registry | No |
| [WIN-NTLM-002](#win-ntlm-002) | Minimum NTLM Session Security (Clients) | Medium | Authentication | Registry | No |
| [WIN-NTLM-003](#win-ntlm-003) | Minimum NTLM Session Security (Servers) | Medium | Authentication | Registry | No |
| [WIN-PSL-001](#win-psl-001) | Enable PowerShell Script Block Logging | Medium | Logging and Monitoring | Registry | No |
| [WIN-PSL-002](#win-psl-002) | Enable PowerShell Module Logging | Medium | Logging and Monitoring | Registry | No |
| [WIN-PSL-003](#win-psl-003) | Enable PowerShell Transcription | Medium | Logging and Monitoring | Registry | No |
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
| [WIN-RDP-005](#win-rdp-005) | Always Prompt for Password on RDP Connection | Medium | Remote Access | Registry | No |
| [WIN-RDP-006](#win-rdp-006) | Disable RDP Clipboard Redirection | Low | Remote Access | Registry | No |
| [WIN-SMB-001](#win-smb-001) | Disable SMBv1 | High | Network Protocols | Registry | No |
| [WIN-SMB-003](#win-smb-003) | Require SMB Signing (Server) | High | Network Protocols | Registry | No |
| [WIN-SMB-004](#win-smb-004) | Disable SMBv1 Client | High | Network Protocols | Registry | No |
| [WIN-SMB-005](#win-smb-005) | Require SMB Client Signing | Medium | Network Protocols | Registry | No |
| [WIN-SMB-006](#win-smb-006) | Restrict Anonymous Access to Named Pipes and Shares | Medium | Network Protocols | Registry | No |
| [WIN-SMB-007](#win-smb-007) | Disable SMB Client Insecure Guest Logons | Medium | Network Protocols | Registry | No |
| [WIN-SVC-001](#win-svc-001) | Disable Remote Registry Service | Medium | Attack Surface Reduction | Service | No |
| [WIN-SVC-002](#win-svc-002) | Disable Print Spooler Service | Medium | Attack Surface Reduction | Service | No |
| [WIN-TLS-001](#win-tls-001) | Enable TLS 1.2 (Server) | Medium | Cryptography | Registry | Yes |
| [WIN-TLS-002](#win-tls-002) | Enable TLS 1.2 (Client) | Medium | Cryptography | Registry | Yes |
| [WIN-TLS-003](#win-tls-003) | Disable RC4 128/128 Cipher | High | Cryptography | Registry | Yes |
| [WIN-TLS-004](#win-tls-004) | Disable RC4 40/128 Cipher | High | Cryptography | Registry | Yes |
| [WIN-TLS-005](#win-tls-005) | Disable Triple DES 168 Cipher | Medium | Cryptography | Registry | Yes |
| [WIN-TLS-010](#win-tls-010) | Disable TLS 1.0 (Server) | High | Cryptography | Registry | Yes |
| [WIN-TLS-011](#win-tls-011) | Disable TLS 1.1 (Server) | High | Cryptography | Registry | Yes |
| [WIN-TLS-012](#win-tls-012) | Disable SSL 3.0 (Server) | High | Cryptography | Registry | Yes |
| [WIN-TLS-013](#win-tls-013) | Disable SSL 2.0 (Server) | High | Cryptography | Registry | Yes |
| [WIN-UAC-001](#win-uac-001) | User Account Control Enabled | High | Privilege Management | Registry | Yes |
| [WIN-UAC-002](#win-uac-002) | UAC Elevation Prompt for Administrators | Medium | Privilege Management | Registry | No |
| [WIN-UAC-003](#win-uac-003) | UAC Detect Application Installations | Medium | Privilege Management | Registry | No |
| [WIN-UAC-004](#win-uac-004) | Deny UAC Elevation Prompt for Standard Users | Medium | Privilege Management | Registry | No |
| [WIN-UAC-005](#win-uac-005) | UAC Switch to the Secure Desktop for Elevation | Medium | Privilege Management | Registry | No |
| [WIN-UAC-006](#win-uac-006) | Only Elevate UIAccess Apps in Secure Locations | Medium | Privilege Management | Registry | No |
| [WIN-WDIGEST-001](#win-wdigest-001) | Disable WDigest Credential Caching | High | Credential Protection | Registry | No |
| [WIN-WINRM-001](#win-winrm-001) | Disable WinRM Client Basic Authentication | Medium | Remote Management | Registry | No |
| [WIN-WINRM-002](#win-winrm-002) | Disallow WinRM Unencrypted Traffic | Medium | Remote Management | Registry | No |
| [WIN-WINRM-003](#win-winrm-003) | Disable WinRM Client Digest Authentication | Medium | Remote Management | Registry | No |

## Control reference

### WIN-ASR-001 - ASR: Block Credential Stealing from LSASS { #win-asr-001 }

**Severity:** High &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

The Attack Surface Reduction rule blocking credential theft from the LSASS process must be enabled in block mode.

**Rationale.** Credential theft from LSASS enables lateral movement and privilege escalation.

**Remediation.** Enable ASR rule 9e6c4e1f-7d60-472f-ba1a-a39ef669e4b2 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-002 - ASR: Block Office Apps Creating Child Processes { #win-asr-002 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

The Attack Surface Reduction rule blocking Office applications from creating child processes must be enabled.

**Rationale.** Office child-process creation is a common malware/macro execution technique.

**Remediation.** Enable ASR rule d4f940ab-401b-4efc-aadc-ad5f3c50688a in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-003 - ASR: Block Executable Content from Email and Webmail { #win-asr-003 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

The Attack Surface Reduction rule blocking executable content from email and webmail must be enabled.

**Rationale.** Executable email attachments are a primary malware delivery vector.

**Remediation.** Enable ASR rule be9ba2d9-53ea-4cdc-84e5-9b1eeee46550 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-004 - ASR: Block Obfuscated Scripts { #win-asr-004 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block execution of potentially obfuscated scripts, a common malware evasion technique.

**Rationale.** Obfuscated scripts hide malicious behaviour from analysis and detection.

**Remediation.** Enable ASR rule 5beb7efe-fd9a-4556-801d-275e5ffc04cc in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-005 - ASR: Block Untrusted Processes from USB { #win-asr-005 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block untrusted and unsigned executables from running from USB removable media.

**Rationale.** Removable media is a common malware ingress vector.

**Remediation.** Enable ASR rule b2b3f03d-6a65-4f7b-a9c7-1c7ef74a9ba4 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-006 - ASR: Block Process Creation from PSExec and WMI { #win-asr-006 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block processes created via PsExec and WMI commands, commonly used for lateral movement.

**Rationale.** PsExec/WMI process creation enables remote code execution and lateral movement.

**Remediation.** Enable ASR rule d1e49aac-8f56-4280-b9ba-993a6d77406c in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-007 - ASR: Advanced Protection Against Ransomware { #win-asr-007 }

**Severity:** High &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Enable advanced heuristic and cloud protection against ransomware.

**Rationale.** Ransomware can rapidly encrypt data across the host and network.

**Remediation.** Enable ASR rule c1db55ab-c21a-4637-bb3f-a12568109d35 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-008 - ASR: Block Office Apps Injecting Code into Other Processes { #win-asr-008 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block Office applications from injecting code into other processes.

**Rationale.** Code injection from Office lets malware masquerade as trusted processes.

**Remediation.** Enable ASR rule 75668c1f-73b5-4cf0-bb93-3ecf5cb7cc84 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-009 - ASR: Block Office Apps Creating Executable Content { #win-asr-009 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block Office applications from writing executable content to disk.

**Rationale.** Office-dropped executables are used for persistence and payload delivery.

**Remediation.** Enable ASR rule 3b576869-a4ec-4529-8536-b80a7769e899 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-010 - ASR: Block Persistence Through WMI Event Subscription { #win-asr-010 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block malware from establishing persistence via WMI event subscription.

**Rationale.** WMI event subscriptions are a stealthy, fileless persistence mechanism.

**Remediation.** Enable ASR rule e6db77e5-3df2-4cf1-b95a-636979351e5b in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-011 - ASR: Block Win32 API Calls from Office Macros { #win-asr-011 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block Office macros from calling Win32 APIs.

**Rationale.** Macro Win32 API calls are used to download and execute malware.

**Remediation.** Enable ASR rule 92e97fa1-2edf-4476-bdd6-9dd0b4dddc7b in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-012 - ASR: Block Untrusted Executables by Prevalence, Age, or Trust { #win-asr-012 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block executable files from running unless they meet a prevalence, age, or trusted-list criterion.

**Rationale.** Newly seen, low-prevalence executables are frequently malware.

**Remediation.** Enable ASR rule 01443614-cd74-433a-b99e-2ecdc07bfc25 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-013 - ASR: Block Adobe Reader from Creating Child Processes { #win-asr-013 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block Adobe Reader from spawning child processes.

**Rationale.** Malicious PDFs abuse Adobe Reader to launch payloads.

**Remediation.** Enable ASR rule 7674ba52-37eb-4a4f-a9a1-f0f9a1619a2c in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

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

### WIN-AUD-009 - Audit Logoff { #win-aud-009 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Logoff events must be audited to correlate session activity.

**Rationale.** Unaudited logoffs leave gaps in the session timeline.

**Remediation.** Enable success auditing for the Logoff subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-logoff](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-logoff)

### WIN-AUD-010 - Audit Removable Storage { #win-aud-010 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Access to removable storage must be audited to detect data exfiltration.

**Rationale.** Unaudited removable-storage use hides data theft.

**Remediation.** Enable success and failure auditing for the Removable Storage subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-removable-storage](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-removable-storage)

### WIN-AUD-011 - Audit Authentication Policy Change { #win-aud-011 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to authentication policy must be audited.

**Rationale.** Unaudited authentication-policy changes hide tampering with security controls.

**Remediation.** Enable success auditing for the Authentication Policy Change subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-authentication-policy-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-authentication-policy-change)

### WIN-AUD-012 - Audit User Account Management { #win-aud-012 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to user accounts (create, delete, enable, password reset) must be audited.

**Rationale.** Unaudited account changes hide account creation and privilege abuse.

**Remediation.** Enable success and failure auditing for the User Account Management subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-user-account-management](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-user-account-management)

### WIN-AUD-013 - Audit Computer Account Management { #win-aud-013 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to computer accounts must be audited.

**Rationale.** Unaudited computer-account changes hide rogue machine joins and tampering.

**Remediation.** Enable success auditing for the Computer Account Management subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-computer-account-management](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-computer-account-management)

### WIN-AUD-014 - Audit Audit Policy Change { #win-aud-014 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to the audit policy itself must be audited.

**Rationale.** Unaudited audit-policy changes let an attacker disable logging undetected.

**Remediation.** Enable success and failure auditing for the Audit Policy Change subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-audit-policy-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-audit-policy-change)

### WIN-AUD-015 - Audit Other Logon/Logoff Events { #win-aud-015 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Other logon/logoff events (RDP reconnects, workstation lock/unlock) must be audited.

**Rationale.** These events reveal remote-session and screen-lock activity useful for detection.

**Remediation.** Enable success and failure auditing for the Other Logon/Logoff Events subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-logonlogoff-events](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-logonlogoff-events)

### WIN-AUD-016 - Audit MPSSVC Rule-Level Policy Change { #win-aud-016 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to Windows Firewall rules must be audited.

**Rationale.** Unaudited firewall-rule changes hide attempts to open the host to attack.

**Remediation.** Enable success and failure auditing for the MPSSVC Rule-Level Policy Change subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-mpssvc-rule-level-policy-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-mpssvc-rule-level-policy-change)

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

### WIN-DEF-002 - Enable Potentially Unwanted Application (PUA) Protection { #win-def-002 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

Microsoft Defender must block potentially unwanted applications (PUA) such as adware and bundled software.

**Rationale.** PUAs degrade performance and can be a foothold for further compromise.

**Remediation.** Set Windows Defender PUAProtection policy value to 1 (block).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-003 - Enable Defender Real-Time Protection { #win-def-003 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

Microsoft Defender real-time protection must not be disabled by policy.

**Rationale.** Disabling real-time protection removes continuous malware scanning.

**Remediation.** Ensure Real-Time Protection DisableRealtimeMonitoring is 0 (or absent).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-004 - Enable Cloud-Delivered Protection { #win-def-004 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Microsoft Defender cloud-delivered protection (MAPS) must be enabled for faster protection against new threats.

**Rationale.** Without cloud protection, response to emerging threats is slower.

**Remediation.** Set Windows Defender Spynet SpynetReporting to 2 (Advanced MAPS).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-005 - Enable Network Protection { #win-def-005 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Enable Defender network protection to block connections to dangerous domains and IP addresses.

**Rationale.** Without network protection, users and processes can reach phishing and exploit domains.

**Remediation.** Set Exploit Guard Network Protection EnableNetworkProtection to 1 (block mode). On Windows Server, AllowNetworkProtectionOnWinServer must also be enabled.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/enable-network-protection](https://learn.microsoft.com/en-us/defender-endpoint/enable-network-protection)

### WIN-DEF-006 - Enable Controlled Folder Access { #win-def-006 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Enable controlled folder access to protect key folders from unauthorized changes by untrusted apps (ransomware).

**Rationale.** Ransomware can encrypt files in unprotected folders.

**Remediation.** Set Exploit Guard Controlled Folder Access EnableControlledFolderAccess to 1 (block mode).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/controlled-folder-access-configure](https://learn.microsoft.com/en-us/defender-endpoint/controlled-folder-access-configure)

### WIN-DEF-007 - Scan Removable Drives During Full Scan { #win-def-007 }

**Severity:** Low &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Scan removable drives (such as USB) during a full antivirus scan.

**Rationale.** Malware on removable media can go undetected if such drives are skipped.

**Remediation.** Set Windows Defender Scan DisableRemovableDriveScanning to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-008 - Enable Block at First Sight { #win-def-008 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Enable Defender block-at-first-sight rapid cloud verdicts for newly seen files.

**Rationale.** Novel malware may execute before traditional signatures are available.

**Remediation.** Set Windows Defender Spynet DisableBlockAtFirstSeen to 0 (requires cloud-delivered protection).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-009 - Enable Defender Behavior Monitoring { #win-def-009 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Enable Defender behavior monitoring to detect malicious activity by behaviour, not just signatures.

**Rationale.** Disabling behaviour monitoring removes detection of fileless and living-off-the-land attacks.

**Remediation.** Set Windows Defender Real-Time Protection DisableBehaviorMonitoring to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

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

### WIN-FW-002 - Block Inbound Connections by Default (Domain Profile) { #win-fw-002 }

**Severity:** Medium &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The domain firewall profile must block inbound connections that do not match a rule.

**Rationale.** A permissive default inbound action exposes unlisted services to the network.

**Remediation.** Set WindowsFirewall DomainProfile DefaultInboundAction to 1 (Block).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-FW-003 - Block Inbound Connections by Default (Private Profile) { #win-fw-003 }

**Severity:** Medium &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The private firewall profile must block inbound connections that do not match a rule.

**Rationale.** A permissive default inbound action exposes unlisted services to the network.

**Remediation.** Set WindowsFirewall StandardProfile DefaultInboundAction to 1 (Block).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-FW-004 - Block Inbound Connections by Default (Public Profile) { #win-fw-004 }

**Severity:** Medium &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The public firewall profile must block inbound connections that do not match a rule.

**Rationale.** A permissive default inbound action exposes unlisted services on untrusted networks.

**Remediation.** Set WindowsFirewall PublicProfile DefaultInboundAction to 1 (Block).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-FW-005 - Log Dropped Packets (Public Profile) { #win-fw-005 }

**Severity:** Low &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The public firewall profile must log dropped packets for troubleshooting and detection.

**Rationale.** Without firewall logging, blocked-connection attempts leave no forensic trail.

**Remediation.** Set WindowsFirewall PublicProfile Logging LogDroppedPackets to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

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

### WIN-KRB-001 - Configure Kerberos Encryption Types (AES only) { #win-krb-001 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Allow only AES (and future) encryption types for Kerberos, disabling weak DES and RC4.

**Rationale.** Weak Kerberos ciphers (DES, RC4) are susceptible to Kerberoasting and cracking.

**Remediation.** Set Kerberos Parameters SupportedEncryptionTypes to 2147483640 (AES128, AES256, future types).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-configure-encryption-types-allowed-for-kerberos](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-configure-encryption-types-allowed-for-kerberos)

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

### WIN-LOGON-003 - Limit Number of Cached Logons { #win-logon-003 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The number of cached domain logon credentials must be limited to reduce offline credential-theft exposure.

**Rationale.** Cached credentials can be extracted and cracked offline.

**Remediation.** Set Winlogon CachedLogonsCount to 4 or fewer.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-number-of-previous-logons-to-cache-in-case-domain-controller-is-not-available](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-number-of-previous-logons-to-cache-in-case-domain-controller-is-not-available)

### WIN-LOGON-004 - Require Ctrl+Alt+Del at Logon { #win-logon-004 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Users must press Ctrl+Alt+Del before signing in to guarantee a trusted logon path.

**Rationale.** Without the secure attention sequence, credential-harvesting spoofed logon screens are possible.

**Remediation.** Set Policies System DisableCAD to 0 (require Ctrl+Alt+Del).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-do-not-require-ctrl-alt-del](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-do-not-require-ctrl-alt-del)

### WIN-LOGON-005 - Smart Card Removal Behavior (Lock Workstation) { #win-logon-005 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Lock the workstation when a logged-on user removes their smart card.

**Rationale.** An unlocked, unattended session after card removal is open to misuse.

**Remediation.** Set Winlogon ScRemoveOption to 1 (Lock Workstation).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-smart-card-removal-behavior](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-smart-card-removal-behavior)

### WIN-LOGON-006 - Disable Automatic Logon { #win-logon-006 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Disable automatic logon, which stores a plaintext password in the registry.

**Rationale.** AutoAdminLogon stores credentials in cleartext and logs in without authentication.

**Remediation.** Set Winlogon AutoAdminLogon to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

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

### WIN-LSA-004 - Do Not Allow Anonymous Enumeration of SAM Accounts { #win-lsa-004 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Anonymous users must not be able to enumerate SAM accounts.

**Rationale.** Anonymous SAM enumeration aids account discovery and password attacks.

**Remediation.** Set Lsa RestrictAnonymousSAM to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-anonymous-enumeration-of-sam-accounts](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-anonymous-enumeration-of-sam-accounts)

### WIN-LSA-005 - Enable Structured Exception Handling Overwrite Protection (SEHOP) { #win-lsa-005 }

**Severity:** Medium &nbsp; **Category:** Exploit Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

SEHOP must be enabled to block Structured Exception Handler overwrite exploitation.

**Rationale.** SEH overwrite is a common memory-corruption exploitation technique.

**Remediation.** Ensure Session Manager kernel DisableExceptionChainValidation is 0 (SEHOP enabled).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-LSA-006 - Digitally Encrypt or Sign Secure Channel Data (Always) { #win-lsa-006 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

All domain secure-channel traffic must be signed or encrypted.

**Rationale.** Unsigned secure-channel traffic is vulnerable to tampering and replay.

**Remediation.** Set Netlogon Parameters RequireSignOrSeal to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-digitally-encrypt-or-sign-secure-channel-data-always](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-digitally-encrypt-or-sign-secure-channel-data-always)

### WIN-LSA-007 - Do Not Apply Everyone Permissions to Anonymous Users { #win-lsa-007 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Everyone SID must not be applied to anonymous connections.

**Rationale.** Applying Everyone permissions to anonymous users grants broad unauthenticated access.

**Remediation.** Set Lsa EveryoneIncludesAnonymous to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-let-everyone-permissions-apply-to-anonymous-users](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-let-everyone-permissions-apply-to-anonymous-users)

### WIN-LSA-008 - Restrict Clients Allowed to Make Remote SAM Calls { #win-lsa-008 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Restrict remote SAM (SAMRPC) enumeration to the local Administrators group.

**Rationale.** Remote SAM enumeration lets low-privilege attackers map users, groups, and admins.

**Remediation.** Set Lsa RestrictRemoteSam to the SDDL O:SYG:SYD:(A;;RC;;;BA) (Administrators only).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-restrict-clients-allowed-to-make-remote-sam-calls](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-restrict-clients-allowed-to-make-remote-sam-calls)

### WIN-LSA-009 - Limit Local Account Use of Blank Passwords { #win-lsa-009 }

**Severity:** High &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Restrict local accounts with blank passwords to console logon only (no remote/network logon).

**Rationale.** Blank-password local accounts allow trivial remote access if guessed or known.

**Remediation.** Set Lsa LimitBlankPasswordUse to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/accounts-limit-local-account-use-of-blank-passwords-to-console-logon-only](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/accounts-limit-local-account-use-of-blank-passwords-to-console-logon-only)

### WIN-LSA-010 - Sharing and Security Model for Local Accounts (Classic) { #win-lsa-010 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Local accounts authenticate as themselves (Classic), not mapped to Guest.

**Rationale.** The Guest-only model weakens access control by treating all local network logons equally.

**Remediation.** Set Lsa ForceGuest to 0 (Classic - local users authenticate as themselves).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-sharing-and-security-model-for-local-accounts](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-sharing-and-security-model-for-local-accounts)

### WIN-NET-001 - Disable LLMNR { #win-net-001 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Link-Local Multicast Name Resolution (LLMNR) must be disabled to prevent name-resolution poisoning and credential capture.

**Rationale.** LLMNR enables responder-style spoofing and NTLM credential theft.

**Remediation.** Set DNSClient EnableMulticast to 0 to disable LLMNR.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-002 - Disable IPv4 Source Routing { #win-net-002 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

IPv4 source routing must be disabled to prevent source-routed packet spoofing.

**Rationale.** Source routing lets attackers dictate the network path of packets, aiding spoofing.

**Remediation.** Set Tcpip Parameters DisableIPSourceRouting to 2 (highest protection).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-003 - Disable ICMP Redirects { #win-net-003 }

**Severity:** Low &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

ICMP redirects must not override OSPF-generated routes.

**Rationale.** ICMP redirects can be abused to reroute traffic through an attacker.

**Remediation.** Set Tcpip Parameters EnableICMPRedirect to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-004 - Disable IPv6 Source Routing { #win-net-004 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

IPv6 source routing must be disabled to prevent source-routed packet spoofing.

**Rationale.** IPv6 source routing enables path manipulation and spoofing.

**Remediation.** Set Tcpip6 Parameters DisableIPSourceRouting to 2.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-005 - Ignore NetBIOS Name Release Requests { #win-net-005 }

**Severity:** Low &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Ignore NetBIOS name-release requests except from WINS servers.

**Rationale.** Malicious name-release requests enable NetBIOS denial-of-service and spoofing.

**Remediation.** Set Netbt Parameters NoNameReleaseOnDemand to 1.

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

### WIN-NTLM-002 - Minimum NTLM Session Security (Clients) { #win-ntlm-002 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

NTLM SSP clients must require NTLMv2 session security and 128-bit encryption.

**Rationale.** Weak NTLM session security is vulnerable to downgrade and man-in-the-middle attacks.

**Remediation.** Set Lsa MSV1_0 NTLMMinClientSec to 537395200 (require NTLMv2 and 128-bit).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-minimum-session-security-for-ntlm-ssp-based-including-secure-rpc-clients](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-minimum-session-security-for-ntlm-ssp-based-including-secure-rpc-clients)

### WIN-NTLM-003 - Minimum NTLM Session Security (Servers) { #win-ntlm-003 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

NTLM SSP servers must require NTLMv2 session security and 128-bit encryption.

**Rationale.** Weak NTLM session security is vulnerable to downgrade and man-in-the-middle attacks.

**Remediation.** Set Lsa MSV1_0 NTLMMinServerSec to 537395200 (require NTLMv2 and 128-bit).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-minimum-session-security-for-ntlm-ssp-based-including-secure-rpc-servers](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-minimum-session-security-for-ntlm-ssp-based-including-secure-rpc-servers)

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

### WIN-PSL-003 - Enable PowerShell Transcription { #win-psl-003 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Capture a transcript of every PowerShell session.

**Rationale.** Transcripts provide a forensic record of interactive and scripted PowerShell use.

**Remediation.** Set PowerShell Transcription EnableTranscripting to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

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

### WIN-RDP-005 - Always Prompt for Password on RDP Connection { #win-rdp-005 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Require Remote Desktop clients to provide a password at connection time.

**Rationale.** Saved credentials let a stolen client session reconnect without authentication.

**Remediation.** Set Terminal Services fPromptForPassword to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-006 - Disable RDP Clipboard Redirection { #win-rdp-006 }

**Severity:** Low &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Disable clipboard redirection in Remote Desktop sessions.

**Rationale.** Clipboard redirection can exfiltrate data between the session and the client.

**Remediation.** Set Terminal Services fDisableClip to 1.

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

### WIN-SMB-006 - Restrict Anonymous Access to Named Pipes and Shares { #win-smb-006 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Anonymous (null session) access to named pipes and shares must be restricted.

**Rationale.** Null sessions can enumerate and access shares without authentication.

**Remediation.** Set LanmanServer Parameters RestrictNullSessAccess to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-restrict-anonymous-access-to-named-pipes-and-shares](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-restrict-anonymous-access-to-named-pipes-and-shares)

### WIN-SMB-007 - Disable SMB Client Insecure Guest Logons { #win-smb-007 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent the SMB client from making insecure guest logons to file servers.

**Rationale.** Insecure guest access exposes clients to rogue/man-in-the-middle SMB servers.

**Remediation.** Set LanmanWorkstation AllowInsecureGuestAuth to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-SVC-001 - Disable Remote Registry Service { #win-svc-001 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Service &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Remote Registry service must be stopped and disabled to reduce remote attack surface.

**Rationale.** Remote Registry enables remote reconnaissance and modification of the registry.

**Remediation.** Stop and disable the RemoteRegistry service.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-SVC-002 - Disable Print Spooler Service { #win-svc-002 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Service &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

The Print Spooler service must be stopped and disabled on servers that do not print (PrintNightmare mitigation).

**Rationale.** The Print Spooler has a history of critical remote code execution vulnerabilities.

**Remediation.** Stop and disable the Spooler service. Do not apply to print servers.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-TLS-001 - Enable TLS 1.2 (Server) { #win-tls-001 }

**Severity:** Medium &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Explicitly enable the TLS 1.2 SCHANNEL server endpoint.

**Rationale.** If TLS 1.2 is not enabled, services may negotiate weaker or no encryption.

**Remediation.** Set SCHANNEL TLS 1.2 Server Enabled to 1. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-002 - Enable TLS 1.2 (Client) { #win-tls-002 }

**Severity:** Medium &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Explicitly enable the TLS 1.2 SCHANNEL client endpoint.

**Rationale.** If TLS 1.2 is not enabled, outbound connections may negotiate weaker encryption.

**Remediation.** Set SCHANNEL TLS 1.2 Client Enabled to 1. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-003 - Disable RC4 128/128 Cipher { #win-tls-003 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the weak RC4 128/128 SCHANNEL cipher.

**Rationale.** RC4 is a broken stream cipher vulnerable to practical attacks.

**Remediation.** Set SCHANNEL Ciphers RC4 128/128 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-004 - Disable RC4 40/128 Cipher { #win-tls-004 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the weak RC4 40/128 SCHANNEL cipher.

**Rationale.** RC4 40-bit is trivially breakable.

**Remediation.** Set SCHANNEL Ciphers RC4 40/128 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-005 - Disable Triple DES 168 Cipher { #win-tls-005 }

**Severity:** Medium &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the legacy Triple DES 168 SCHANNEL cipher.

**Rationale.** 3DES is vulnerable to birthday (Sweet32) attacks and is deprecated.

**Remediation.** Set SCHANNEL Ciphers Triple DES 168 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

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

### WIN-UAC-004 - Deny UAC Elevation Prompt for Standard Users { #win-uac-004 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Standard users must not be prompted to elevate; elevation requests are automatically denied.

**Rationale.** Prompting standard users to elevate encourages credential sharing and misuse.

**Remediation.** Set Policies System ConsentPromptBehaviorUser to 0 (automatically deny).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-behavior-of-the-elevation-prompt-for-standard-users](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-behavior-of-the-elevation-prompt-for-standard-users)

### WIN-UAC-005 - UAC Switch to the Secure Desktop for Elevation { #win-uac-005 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Elevation prompts must be shown on the secure desktop to resist spoofing.

**Rationale.** Elevation prompts on the interactive desktop can be spoofed to capture credentials.

**Remediation.** Set Policies System PromptOnSecureDesktop to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-switch-to-the-secure-desktop-when-prompting-for-elevation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-switch-to-the-secure-desktop-when-prompting-for-elevation)

### WIN-UAC-006 - Only Elevate UIAccess Apps in Secure Locations { #win-uac-006 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only allow UIAccess applications installed in secure file-system locations to elevate.

**Rationale.** UIAccess apps outside secure paths can bypass UI privilege isolation.

**Remediation.** Set Policies System EnableSecureUIAPaths to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-only-elevate-uiaccess-applications-that-are-installed-in-secure-locations](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-only-elevate-uiaccess-applications-that-are-installed-in-secure-locations)

### WIN-WDIGEST-001 - Disable WDigest Credential Caching { #win-wdigest-001 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

WDigest must not cache plaintext credentials in memory.

**Rationale.** WDigest plaintext credential caching enables credential theft.

**Remediation.** Set SecurityProviders WDigest UseLogonCredential to 0 to disable plaintext caching.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-WINRM-001 - Disable WinRM Client Basic Authentication { #win-winrm-001 }

**Severity:** Medium &nbsp; **Category:** Remote Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The WinRM client must not allow Basic authentication.

**Rationale.** WinRM Basic auth transmits credentials with weak protection.

**Remediation.** Set Policies Microsoft Windows WinRM Client AllowBasic to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-WINRM-002 - Disallow WinRM Unencrypted Traffic { #win-winrm-002 }

**Severity:** Medium &nbsp; **Category:** Remote Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The WinRM service must not allow unencrypted traffic.

**Rationale.** Unencrypted WinRM traffic exposes management data and credentials.

**Remediation.** Set Policies Microsoft Windows WinRM Service AllowUnencryptedTraffic to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-WINRM-003 - Disable WinRM Client Digest Authentication { #win-winrm-003 }

**Severity:** Medium &nbsp; **Category:** Remote Management &nbsp; **Provider:** Registry &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The WinRM client must not use Digest authentication.

**Rationale.** Digest authentication is weaker than Kerberos/Negotiate and can expose credentials.

**Remediation.** Set Policies Microsoft Windows WinRM Client AllowDigest to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

