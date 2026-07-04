# Baselines

CloudInfra Secure ships 7 baselines. Each is a curated collection of control IDs.

## CloudInfra Secure Domain Controller - Role tier

Baseline for Active Directory Domain Controllers.

**ID:** `CloudInfraSecure-DomainController` &nbsp; **Controls:** 109 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

| Control | Name | Severity |
|---------|------|----------|
| [WIN-FW-001](../controls/index.md#win-fw-001) | Windows Firewall Enabled (All Profiles) | High |
| [WIN-SMB-001](../controls/index.md#win-smb-001) | Disable SMBv1 | High |
| [WIN-TLS-010](../controls/index.md#win-tls-010) | Disable TLS 1.0 (Server) | High |
| [WIN-TLS-011](../controls/index.md#win-tls-011) | Disable TLS 1.1 (Server) | High |
| [WIN-PWD-001](../controls/index.md#win-pwd-001) | Minimum Password Length | High |
| [WIN-PWD-002](../controls/index.md#win-pwd-002) | Password Complexity Enabled | High |
| [WIN-LOCK-001](../controls/index.md#win-lock-001) | Account Lockout Threshold | Medium |
| [WIN-AUD-001](../controls/index.md#win-aud-001) | Audit Logon Failures | Medium |
| [WIN-AUD-002](../controls/index.md#win-aud-002) | Audit Account Lockout Events | Medium |
| [WIN-UAC-001](../controls/index.md#win-uac-001) | User Account Control Enabled | High |
| [WIN-DEF-001](../controls/index.md#win-def-001) | Microsoft Defender Antivirus Enabled | High |
| [WIN-PWD-003](../controls/index.md#win-pwd-003) | Maximum Password Age | Medium |
| [WIN-PWD-004](../controls/index.md#win-pwd-004) | Minimum Password Age | Low |
| [WIN-PWD-005](../controls/index.md#win-pwd-005) | Enforce Password History | Medium |
| [WIN-PWD-006](../controls/index.md#win-pwd-006) | Disable Reversible Password Encryption | High |
| [WIN-LOCK-002](../controls/index.md#win-lock-002) | Account Lockout Duration | Medium |
| [WIN-LOCK-003](../controls/index.md#win-lock-003) | Reset Account Lockout Counter | Medium |
| [WIN-NTLM-001](../controls/index.md#win-ntlm-001) | LAN Manager Authentication Level (NTLMv2 Only) | High |
| [WIN-LSA-001](../controls/index.md#win-lsa-001) | Do Not Store LAN Manager Hash | High |
| [WIN-LSA-002](../controls/index.md#win-lsa-002) | Restrict Anonymous SID Enumeration | Medium |
| [WIN-WDIGEST-001](../controls/index.md#win-wdigest-001) | Disable WDigest Credential Caching | High |
| [WIN-LSA-003](../controls/index.md#win-lsa-003) | Enable LSASS Protection (RunAsPPL) | High |
| [WIN-AUD-004](../controls/index.md#win-aud-004) | Audit Credential Validation | Medium |
| [WIN-AUD-005](../controls/index.md#win-aud-005) | Audit Security Group Management | Medium |
| [WIN-AUD-003](../controls/index.md#win-aud-003) | Audit Process Creation | Medium |
| [WIN-SMB-004](../controls/index.md#win-smb-004) | Disable SMBv1 Client | High |
| [WIN-SMB-005](../controls/index.md#win-smb-005) | Require SMB Client Signing | Medium |
| [WIN-LDAP-001](../controls/index.md#win-ldap-001) | LDAP Client Signing | Medium |
| [WIN-NET-001](../controls/index.md#win-net-001) | Disable LLMNR | Medium |
| [WIN-TLS-012](../controls/index.md#win-tls-012) | Disable SSL 3.0 (Server) | High |
| [WIN-TLS-013](../controls/index.md#win-tls-013) | Disable SSL 2.0 (Server) | High |
| [WIN-LOGON-001](../controls/index.md#win-logon-001) | Machine Inactivity Limit | Medium |
| [WIN-LOGON-002](../controls/index.md#win-logon-002) | Do Not Display Last Signed-In User | Low |
| [WIN-AUD-006](../controls/index.md#win-aud-006) | Audit Special Logon | Medium |
| [WIN-AUD-007](../controls/index.md#win-aud-007) | Audit Sensitive Privilege Use | Medium |
| [WIN-AUD-008](../controls/index.md#win-aud-008) | Audit System Integrity | Medium |
| [WIN-SVC-001](../controls/index.md#win-svc-001) | Disable Remote Registry Service | Medium |
| [WIN-DEF-002](../controls/index.md#win-def-002) | Enable Potentially Unwanted Application (PUA) Protection | High |
| [WIN-DEF-003](../controls/index.md#win-def-003) | Enable Defender Real-Time Protection | High |
| [WIN-DEF-004](../controls/index.md#win-def-004) | Enable Cloud-Delivered Protection | Medium |
| [WIN-NET-002](../controls/index.md#win-net-002) | Disable IPv4 Source Routing | Medium |
| [WIN-NET-003](../controls/index.md#win-net-003) | Disable ICMP Redirects | Low |
| [WIN-NET-004](../controls/index.md#win-net-004) | Disable IPv6 Source Routing | Medium |
| [WIN-SMB-006](../controls/index.md#win-smb-006) | Restrict Anonymous Access to Named Pipes and Shares | Medium |
| [WIN-LSA-004](../controls/index.md#win-lsa-004) | Do Not Allow Anonymous Enumeration of SAM Accounts | Medium |
| [WIN-LSA-005](../controls/index.md#win-lsa-005) | Enable Structured Exception Handling Overwrite Protection (SEHOP) | Medium |
| [WIN-LOGON-003](../controls/index.md#win-logon-003) | Limit Number of Cached Logons | Medium |
| [WIN-UAC-004](../controls/index.md#win-uac-004) | Deny UAC Elevation Prompt for Standard Users | Medium |
| [WIN-UAC-005](../controls/index.md#win-uac-005) | UAC Switch to the Secure Desktop for Elevation | Medium |
| [WIN-AUD-009](../controls/index.md#win-aud-009) | Audit Logoff | Medium |
| [WIN-AUD-010](../controls/index.md#win-aud-010) | Audit Removable Storage | Medium |
| [WIN-AUD-011](../controls/index.md#win-aud-011) | Audit Authentication Policy Change | Medium |
| [WIN-AUD-012](../controls/index.md#win-aud-012) | Audit User Account Management | Medium |
| [WIN-AUD-013](../controls/index.md#win-aud-013) | Audit Computer Account Management | Medium |
| [WIN-AUD-014](../controls/index.md#win-aud-014) | Audit Audit Policy Change | Medium |
| [WIN-AUD-015](../controls/index.md#win-aud-015) | Audit Other Logon/Logoff Events | Medium |
| [WIN-AUD-016](../controls/index.md#win-aud-016) | Audit MPSSVC Rule-Level Policy Change | Medium |
| [WIN-NTLM-002](../controls/index.md#win-ntlm-002) | Minimum NTLM Session Security (Clients) | Medium |
| [WIN-NTLM-003](../controls/index.md#win-ntlm-003) | Minimum NTLM Session Security (Servers) | Medium |
| [WIN-LSA-006](../controls/index.md#win-lsa-006) | Digitally Encrypt or Sign Secure Channel Data (Always) | Medium |
| [WIN-LSA-007](../controls/index.md#win-lsa-007) | Do Not Apply Everyone Permissions to Anonymous Users | Medium |
| [WIN-LOGON-004](../controls/index.md#win-logon-004) | Require Ctrl+Alt+Del at Logon | Low |
| [WIN-WINRM-001](../controls/index.md#win-winrm-001) | Disable WinRM Client Basic Authentication | Medium |
| [WIN-WINRM-002](../controls/index.md#win-winrm-002) | Disallow WinRM Unencrypted Traffic | Medium |
| [WIN-LSA-008](../controls/index.md#win-lsa-008) | Restrict Clients Allowed to Make Remote SAM Calls | Medium |
| [WIN-LSA-009](../controls/index.md#win-lsa-009) | Limit Local Account Use of Blank Passwords | High |
| [WIN-LSA-010](../controls/index.md#win-lsa-010) | Sharing and Security Model for Local Accounts (Classic) | Medium |
| [WIN-KRB-001](../controls/index.md#win-krb-001) | Configure Kerberos Encryption Types (AES only) | Medium |
| [WIN-NET-005](../controls/index.md#win-net-005) | Ignore NetBIOS Name Release Requests | Low |
| [WIN-PSL-003](../controls/index.md#win-psl-003) | Enable PowerShell Transcription | Medium |
| [WIN-UAC-006](../controls/index.md#win-uac-006) | Only Elevate UIAccess Apps in Secure Locations | Medium |
| [WIN-LOGON-006](../controls/index.md#win-logon-006) | Disable Automatic Logon | Medium |
| [WIN-TLS-001](../controls/index.md#win-tls-001) | Enable TLS 1.2 (Server) | Medium |
| [WIN-TLS-002](../controls/index.md#win-tls-002) | Enable TLS 1.2 (Client) | Medium |
| [WIN-TLS-003](../controls/index.md#win-tls-003) | Disable RC4 128/128 Cipher | High |
| [WIN-TLS-004](../controls/index.md#win-tls-004) | Disable RC4 40/128 Cipher | High |
| [WIN-TLS-005](../controls/index.md#win-tls-005) | Disable Triple DES 168 Cipher | Medium |
| [WIN-FW-002](../controls/index.md#win-fw-002) | Block Inbound Connections by Default (Domain Profile) | Medium |
| [WIN-FW-003](../controls/index.md#win-fw-003) | Block Inbound Connections by Default (Private Profile) | Medium |
| [WIN-FW-004](../controls/index.md#win-fw-004) | Block Inbound Connections by Default (Public Profile) | Medium |
| [WIN-DEF-009](../controls/index.md#win-def-009) | Enable Defender Behavior Monitoring | High |
| [WIN-WINRM-003](../controls/index.md#win-winrm-003) | Disable WinRM Client Digest Authentication | Medium |
| [WIN-VBS-001](../controls/index.md#win-vbs-001) | Enable Virtualization Based Security | High |
| [WIN-VBS-002](../controls/index.md#win-vbs-002) | Require Secure Boot for VBS | Medium |
| [WIN-VBS-003](../controls/index.md#win-vbs-003) | Enable Memory Integrity (HVCI) | High |
| [WIN-CG-001](../controls/index.md#win-cg-001) | Enable Credential Guard | High |
| [WIN-TLS-006](../controls/index.md#win-tls-006) | Disable RC4 56/128 Cipher | High |
| [WIN-TLS-007](../controls/index.md#win-tls-007) | Disable RC4 64/128 Cipher | High |
| [WIN-TLS-008](../controls/index.md#win-tls-008) | Disable DES 56/56 Cipher | Medium |
| [WIN-TLS-009](../controls/index.md#win-tls-009) | Disable NULL Cipher | Medium |
| [WIN-ACCT-001](../controls/index.md#win-acct-001) | Block Microsoft Accounts | Medium |
| [WIN-UAC-007](../controls/index.md#win-uac-007) | Apply UAC Token Filtering to Remote Local Accounts | High |
| [WIN-AUD-017](../controls/index.md#win-aud-017) | Audit PNP Activity | Medium |
| [WIN-AUD-018](../controls/index.md#win-aud-018) | Audit Group Membership | Medium |
| [WIN-AUD-019](../controls/index.md#win-aud-019) | Audit Other Object Access Events | Medium |
| [WIN-AUD-020](../controls/index.md#win-aud-020) | Audit Detailed File Share | Medium |
| [WIN-LSA-011](../controls/index.md#win-lsa-011) | Disallow LocalSystem NULL Session Fallback | Medium |
| [WIN-LSA-012](../controls/index.md#win-lsa-012) | Strengthen Default Permissions of Internal System Objects | Low |
| [WIN-NET-007](../controls/index.md#win-net-007) | Enable Safe DLL Search Mode | Medium |
| [WIN-DEF-013](../controls/index.md#win-def-013) | Scan Downloaded Files and Attachments | High |
| [WIN-URA-001](../controls/index.md#win-ura-001) | Access Credential Manager as a Trusted Caller = No One | High |
| [WIN-URA-002](../controls/index.md#win-ura-002) | Act as Part of the Operating System = No One | High |
| [WIN-URA-003](../controls/index.md#win-ura-003) | Create a Token Object = No One | High |
| [WIN-URA-004](../controls/index.md#win-ura-004) | Create Permanent Shared Objects = No One | Medium |
| [WIN-URA-006](../controls/index.md#win-ura-006) | Deny Access to This Computer From the Network (includes Guests) | Medium |
| [WIN-URA-007](../controls/index.md#win-ura-007) | Deny Log On as a Batch Job (includes Guests) | Low |
| [WIN-URA-008](../controls/index.md#win-ura-008) | Deny Log On as a Service (includes Guests) | Low |
| [WIN-URA-009](../controls/index.md#win-ura-009) | Deny Log On Locally (includes Guests) | Medium |
| [WIN-URA-010](../controls/index.md#win-ura-010) | Deny Log On Through Remote Desktop Services (includes Guests) | Medium |

## CloudInfra Secure Enterprise - Enterprise tier

Comprehensive baseline for regulated and high-assurance environments.

**ID:** `CloudInfraSecure-Enterprise` &nbsp; **Controls:** 164 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

| Control | Name | Severity |
|---------|------|----------|
| [WIN-FW-001](../controls/index.md#win-fw-001) | Windows Firewall Enabled (All Profiles) | High |
| [WIN-SMB-001](../controls/index.md#win-smb-001) | Disable SMBv1 | High |
| [WIN-TLS-010](../controls/index.md#win-tls-010) | Disable TLS 1.0 (Server) | High |
| [WIN-TLS-011](../controls/index.md#win-tls-011) | Disable TLS 1.1 (Server) | High |
| [WIN-RDP-001](../controls/index.md#win-rdp-001) | Require Network Level Authentication for RDP | High |
| [WIN-PSL-001](../controls/index.md#win-psl-001) | Enable PowerShell Script Block Logging | Medium |
| [WIN-PSL-002](../controls/index.md#win-psl-002) | Enable PowerShell Module Logging | Medium |
| [WIN-PWD-001](../controls/index.md#win-pwd-001) | Minimum Password Length | High |
| [WIN-PWD-002](../controls/index.md#win-pwd-002) | Password Complexity Enabled | High |
| [WIN-LOCK-001](../controls/index.md#win-lock-001) | Account Lockout Threshold | Medium |
| [WIN-AUD-001](../controls/index.md#win-aud-001) | Audit Logon Failures | Medium |
| [WIN-AUD-002](../controls/index.md#win-aud-002) | Audit Account Lockout Events | Medium |
| [WIN-DEF-001](../controls/index.md#win-def-001) | Microsoft Defender Antivirus Enabled | High |
| [WIN-UAC-001](../controls/index.md#win-uac-001) | User Account Control Enabled | High |
| [WIN-PWD-003](../controls/index.md#win-pwd-003) | Maximum Password Age | Medium |
| [WIN-PWD-004](../controls/index.md#win-pwd-004) | Minimum Password Age | Low |
| [WIN-PWD-005](../controls/index.md#win-pwd-005) | Enforce Password History | Medium |
| [WIN-PWD-006](../controls/index.md#win-pwd-006) | Disable Reversible Password Encryption | High |
| [WIN-LOCK-002](../controls/index.md#win-lock-002) | Account Lockout Duration | Medium |
| [WIN-LOCK-003](../controls/index.md#win-lock-003) | Reset Account Lockout Counter | Medium |
| [WIN-SMB-003](../controls/index.md#win-smb-003) | Require SMB Signing (Server) | High |
| [WIN-NTLM-001](../controls/index.md#win-ntlm-001) | LAN Manager Authentication Level (NTLMv2 Only) | High |
| [WIN-LSA-001](../controls/index.md#win-lsa-001) | Do Not Store LAN Manager Hash | High |
| [WIN-LSA-002](../controls/index.md#win-lsa-002) | Restrict Anonymous SID Enumeration | Medium |
| [WIN-LSA-003](../controls/index.md#win-lsa-003) | Enable LSASS Protection (RunAsPPL) | High |
| [WIN-WDIGEST-001](../controls/index.md#win-wdigest-001) | Disable WDigest Credential Caching | High |
| [WIN-UAC-002](../controls/index.md#win-uac-002) | UAC Elevation Prompt for Administrators | Medium |
| [WIN-INSTALL-001](../controls/index.md#win-install-001) | Disable Always Install Elevated | High |
| [WIN-AUTORUN-001](../controls/index.md#win-autorun-001) | Disable AutoRun on All Drives | Medium |
| [WIN-AUD-003](../controls/index.md#win-aud-003) | Audit Process Creation | Medium |
| [WIN-AUD-004](../controls/index.md#win-aud-004) | Audit Credential Validation | Medium |
| [WIN-AUD-005](../controls/index.md#win-aud-005) | Audit Security Group Management | Medium |
| [WIN-SMB-004](../controls/index.md#win-smb-004) | Disable SMBv1 Client | High |
| [WIN-SMB-005](../controls/index.md#win-smb-005) | Require SMB Client Signing | Medium |
| [WIN-LDAP-001](../controls/index.md#win-ldap-001) | LDAP Client Signing | Medium |
| [WIN-NET-001](../controls/index.md#win-net-001) | Disable LLMNR | Medium |
| [WIN-TLS-012](../controls/index.md#win-tls-012) | Disable SSL 3.0 (Server) | High |
| [WIN-TLS-013](../controls/index.md#win-tls-013) | Disable SSL 2.0 (Server) | High |
| [WIN-RDP-002](../controls/index.md#win-rdp-002) | RDP Minimum Encryption Level (High) | Medium |
| [WIN-RDP-003](../controls/index.md#win-rdp-003) | RDP Security Layer (TLS) | Medium |
| [WIN-RDP-004](../controls/index.md#win-rdp-004) | Disable RDP Drive Redirection | Medium |
| [WIN-SVC-001](../controls/index.md#win-svc-001) | Disable Remote Registry Service | Medium |
| [WIN-LOGON-001](../controls/index.md#win-logon-001) | Machine Inactivity Limit | Medium |
| [WIN-LOGON-002](../controls/index.md#win-logon-002) | Do Not Display Last Signed-In User | Low |
| [WIN-UAC-003](../controls/index.md#win-uac-003) | UAC Detect Application Installations | Medium |
| [WIN-AUD-006](../controls/index.md#win-aud-006) | Audit Special Logon | Medium |
| [WIN-AUD-007](../controls/index.md#win-aud-007) | Audit Sensitive Privilege Use | Medium |
| [WIN-AUD-008](../controls/index.md#win-aud-008) | Audit System Integrity | Medium |
| [WIN-DEF-002](../controls/index.md#win-def-002) | Enable Potentially Unwanted Application (PUA) Protection | High |
| [WIN-DEF-003](../controls/index.md#win-def-003) | Enable Defender Real-Time Protection | High |
| [WIN-DEF-004](../controls/index.md#win-def-004) | Enable Cloud-Delivered Protection | Medium |
| [WIN-ASR-001](../controls/index.md#win-asr-001) | ASR: Block Credential Stealing from LSASS | High |
| [WIN-ASR-002](../controls/index.md#win-asr-002) | ASR: Block Office Apps Creating Child Processes | Medium |
| [WIN-ASR-003](../controls/index.md#win-asr-003) | ASR: Block Executable Content from Email and Webmail | Medium |
| [WIN-NET-002](../controls/index.md#win-net-002) | Disable IPv4 Source Routing | Medium |
| [WIN-NET-003](../controls/index.md#win-net-003) | Disable ICMP Redirects | Low |
| [WIN-NET-004](../controls/index.md#win-net-004) | Disable IPv6 Source Routing | Medium |
| [WIN-SMB-006](../controls/index.md#win-smb-006) | Restrict Anonymous Access to Named Pipes and Shares | Medium |
| [WIN-LSA-004](../controls/index.md#win-lsa-004) | Do Not Allow Anonymous Enumeration of SAM Accounts | Medium |
| [WIN-LSA-005](../controls/index.md#win-lsa-005) | Enable Structured Exception Handling Overwrite Protection (SEHOP) | Medium |
| [WIN-LOGON-003](../controls/index.md#win-logon-003) | Limit Number of Cached Logons | Medium |
| [WIN-UAC-004](../controls/index.md#win-uac-004) | Deny UAC Elevation Prompt for Standard Users | Medium |
| [WIN-UAC-005](../controls/index.md#win-uac-005) | UAC Switch to the Secure Desktop for Elevation | Medium |
| [WIN-AUD-009](../controls/index.md#win-aud-009) | Audit Logoff | Medium |
| [WIN-AUD-010](../controls/index.md#win-aud-010) | Audit Removable Storage | Medium |
| [WIN-AUD-011](../controls/index.md#win-aud-011) | Audit Authentication Policy Change | Medium |
| [WIN-ASR-004](../controls/index.md#win-asr-004) | ASR: Block Obfuscated Scripts | Medium |
| [WIN-ASR-005](../controls/index.md#win-asr-005) | ASR: Block Untrusted Processes from USB | Medium |
| [WIN-ASR-006](../controls/index.md#win-asr-006) | ASR: Block Process Creation from PSExec and WMI | Medium |
| [WIN-ASR-007](../controls/index.md#win-asr-007) | ASR: Advanced Protection Against Ransomware | High |
| [WIN-ASR-008](../controls/index.md#win-asr-008) | ASR: Block Office Apps Injecting Code into Other Processes | Medium |
| [WIN-ASR-009](../controls/index.md#win-asr-009) | ASR: Block Office Apps Creating Executable Content | Medium |
| [WIN-AUD-012](../controls/index.md#win-aud-012) | Audit User Account Management | Medium |
| [WIN-AUD-013](../controls/index.md#win-aud-013) | Audit Computer Account Management | Medium |
| [WIN-AUD-014](../controls/index.md#win-aud-014) | Audit Audit Policy Change | Medium |
| [WIN-AUD-015](../controls/index.md#win-aud-015) | Audit Other Logon/Logoff Events | Medium |
| [WIN-AUD-016](../controls/index.md#win-aud-016) | Audit MPSSVC Rule-Level Policy Change | Medium |
| [WIN-LOGON-004](../controls/index.md#win-logon-004) | Require Ctrl+Alt+Del at Logon | Low |
| [WIN-NTLM-002](../controls/index.md#win-ntlm-002) | Minimum NTLM Session Security (Clients) | Medium |
| [WIN-NTLM-003](../controls/index.md#win-ntlm-003) | Minimum NTLM Session Security (Servers) | Medium |
| [WIN-LSA-006](../controls/index.md#win-lsa-006) | Digitally Encrypt or Sign Secure Channel Data (Always) | Medium |
| [WIN-LSA-007](../controls/index.md#win-lsa-007) | Do Not Apply Everyone Permissions to Anonymous Users | Medium |
| [WIN-WINRM-001](../controls/index.md#win-winrm-001) | Disable WinRM Client Basic Authentication | Medium |
| [WIN-WINRM-002](../controls/index.md#win-winrm-002) | Disallow WinRM Unencrypted Traffic | Medium |
| [WIN-ASR-010](../controls/index.md#win-asr-010) | ASR: Block Persistence Through WMI Event Subscription | Medium |
| [WIN-ASR-011](../controls/index.md#win-asr-011) | ASR: Block Win32 API Calls from Office Macros | Medium |
| [WIN-ASR-012](../controls/index.md#win-asr-012) | ASR: Block Untrusted Executables by Prevalence, Age, or Trust | Medium |
| [WIN-ASR-013](../controls/index.md#win-asr-013) | ASR: Block Adobe Reader from Creating Child Processes | Medium |
| [WIN-LSA-008](../controls/index.md#win-lsa-008) | Restrict Clients Allowed to Make Remote SAM Calls | Medium |
| [WIN-LSA-009](../controls/index.md#win-lsa-009) | Limit Local Account Use of Blank Passwords | High |
| [WIN-LSA-010](../controls/index.md#win-lsa-010) | Sharing and Security Model for Local Accounts (Classic) | Medium |
| [WIN-KRB-001](../controls/index.md#win-krb-001) | Configure Kerberos Encryption Types (AES only) | Medium |
| [WIN-LOGON-005](../controls/index.md#win-logon-005) | Smart Card Removal Behavior (Lock Workstation) | Low |
| [WIN-LOGON-006](../controls/index.md#win-logon-006) | Disable Automatic Logon | Medium |
| [WIN-NET-005](../controls/index.md#win-net-005) | Ignore NetBIOS Name Release Requests | Low |
| [WIN-PSL-003](../controls/index.md#win-psl-003) | Enable PowerShell Transcription | Medium |
| [WIN-RDP-005](../controls/index.md#win-rdp-005) | Always Prompt for Password on RDP Connection | Medium |
| [WIN-RDP-006](../controls/index.md#win-rdp-006) | Disable RDP Clipboard Redirection | Low |
| [WIN-SMB-007](../controls/index.md#win-smb-007) | Disable SMB Client Insecure Guest Logons | Medium |
| [WIN-UAC-006](../controls/index.md#win-uac-006) | Only Elevate UIAccess Apps in Secure Locations | Medium |
| [WIN-DEF-005](../controls/index.md#win-def-005) | Enable Network Protection | Medium |
| [WIN-DEF-006](../controls/index.md#win-def-006) | Enable Controlled Folder Access | Medium |
| [WIN-DEF-007](../controls/index.md#win-def-007) | Scan Removable Drives During Full Scan | Low |
| [WIN-DEF-008](../controls/index.md#win-def-008) | Enable Block at First Sight | Medium |
| [WIN-DEF-009](../controls/index.md#win-def-009) | Enable Defender Behavior Monitoring | High |
| [WIN-TLS-001](../controls/index.md#win-tls-001) | Enable TLS 1.2 (Server) | Medium |
| [WIN-TLS-002](../controls/index.md#win-tls-002) | Enable TLS 1.2 (Client) | Medium |
| [WIN-TLS-003](../controls/index.md#win-tls-003) | Disable RC4 128/128 Cipher | High |
| [WIN-TLS-004](../controls/index.md#win-tls-004) | Disable RC4 40/128 Cipher | High |
| [WIN-TLS-005](../controls/index.md#win-tls-005) | Disable Triple DES 168 Cipher | Medium |
| [WIN-FW-002](../controls/index.md#win-fw-002) | Block Inbound Connections by Default (Domain Profile) | Medium |
| [WIN-FW-003](../controls/index.md#win-fw-003) | Block Inbound Connections by Default (Private Profile) | Medium |
| [WIN-FW-004](../controls/index.md#win-fw-004) | Block Inbound Connections by Default (Public Profile) | Medium |
| [WIN-FW-005](../controls/index.md#win-fw-005) | Log Dropped Packets (Public Profile) | Low |
| [WIN-SVC-002](../controls/index.md#win-svc-002) | Disable Print Spooler Service | Medium |
| [WIN-WINRM-003](../controls/index.md#win-winrm-003) | Disable WinRM Client Digest Authentication | Medium |
| [WIN-VBS-001](../controls/index.md#win-vbs-001) | Enable Virtualization Based Security | High |
| [WIN-VBS-002](../controls/index.md#win-vbs-002) | Require Secure Boot for VBS | Medium |
| [WIN-VBS-003](../controls/index.md#win-vbs-003) | Enable Memory Integrity (HVCI) | High |
| [WIN-CG-001](../controls/index.md#win-cg-001) | Enable Credential Guard | High |
| [WIN-TLS-006](../controls/index.md#win-tls-006) | Disable RC4 56/128 Cipher | High |
| [WIN-TLS-007](../controls/index.md#win-tls-007) | Disable RC4 64/128 Cipher | High |
| [WIN-TLS-008](../controls/index.md#win-tls-008) | Disable DES 56/56 Cipher | Medium |
| [WIN-TLS-009](../controls/index.md#win-tls-009) | Disable NULL Cipher | Medium |
| [WIN-RDP-007](../controls/index.md#win-rdp-007) | Set RDP Idle Session Time Limit | Low |
| [WIN-RDP-008](../controls/index.md#win-rdp-008) | Set RDP Disconnected Session Time Limit | Low |
| [WIN-RDP-009](../controls/index.md#win-rdp-009) | Do Not Allow Saved RDP Passwords | Medium |
| [WIN-UAC-007](../controls/index.md#win-uac-007) | Apply UAC Token Filtering to Remote Local Accounts | High |
| [WIN-ACCT-001](../controls/index.md#win-acct-001) | Block Microsoft Accounts | Medium |
| [WIN-NET-006](../controls/index.md#win-net-006) | Disable mDNS | Medium |
| [WIN-ASR-014](../controls/index.md#win-asr-014) | ASR: Block Webshell Creation for Servers | High |
| [WIN-ASR-015](../controls/index.md#win-asr-015) | ASR: Block Rebooting Machine in Safe Mode | Medium |
| [WIN-DEF-010](../controls/index.md#win-def-010) | Enable Email Scanning | Medium |
| [WIN-DEF-011](../controls/index.md#win-def-011) | Enable Archive Scanning | Medium |
| [WIN-DEF-012](../controls/index.md#win-def-012) | Scan Mapped Network Drives During Full Scan | Low |
| [WIN-DEF-013](../controls/index.md#win-def-013) | Scan Downloaded Files and Attachments | High |
| [WIN-DEF-014](../controls/index.md#win-def-014) | Disable Local Admin Merge of Defender Preferences | Medium |
| [WIN-DEF-015](../controls/index.md#win-def-015) | Enable Real-Time Script Scanning | Medium |
| [WIN-AUD-017](../controls/index.md#win-aud-017) | Audit PNP Activity | Medium |
| [WIN-AUD-018](../controls/index.md#win-aud-018) | Audit Group Membership | Medium |
| [WIN-AUD-019](../controls/index.md#win-aud-019) | Audit Other Object Access Events | Medium |
| [WIN-AUD-020](../controls/index.md#win-aud-020) | Audit Detailed File Share | Medium |
| [WIN-SMB-008](../controls/index.md#win-smb-008) | Do Not Send Unencrypted Password to Third-Party SMB Servers | Medium |
| [WIN-LSA-011](../controls/index.md#win-lsa-011) | Disallow LocalSystem NULL Session Fallback | Medium |
| [WIN-LSA-012](../controls/index.md#win-lsa-012) | Strengthen Default Permissions of Internal System Objects | Low |
| [WIN-NET-007](../controls/index.md#win-net-007) | Enable Safe DLL Search Mode | Medium |
| [WIN-PRINT-001](../controls/index.md#win-print-001) | Restrict Point and Print Driver Installation to Administrators | High |
| [WIN-PRINT-002](../controls/index.md#win-print-002) | Require Elevation for New Point and Print Connections | Medium |
| [WIN-URA-001](../controls/index.md#win-ura-001) | Access Credential Manager as a Trusted Caller = No One | High |
| [WIN-URA-002](../controls/index.md#win-ura-002) | Act as Part of the Operating System = No One | High |
| [WIN-URA-003](../controls/index.md#win-ura-003) | Create a Token Object = No One | High |
| [WIN-URA-004](../controls/index.md#win-ura-004) | Create Permanent Shared Objects = No One | Medium |
| [WIN-URA-005](../controls/index.md#win-ura-005) | Debug Programs = Administrators Only | High |
| [WIN-URA-006](../controls/index.md#win-ura-006) | Deny Access to This Computer From the Network (includes Guests) | Medium |
| [WIN-URA-007](../controls/index.md#win-ura-007) | Deny Log On as a Batch Job (includes Guests) | Low |
| [WIN-URA-008](../controls/index.md#win-ura-008) | Deny Log On as a Service (includes Guests) | Low |
| [WIN-URA-009](../controls/index.md#win-ura-009) | Deny Log On Locally (includes Guests) | Medium |
| [WIN-URA-010](../controls/index.md#win-ura-010) | Deny Log On Through Remote Desktop Services (includes Guests) | Medium |
| [WIN-URA-011](../controls/index.md#win-ura-011) | Force Shutdown From a Remote System = Administrators Only | Medium |
| [WIN-URA-012](../controls/index.md#win-ura-012) | Generate Security Audits = Local Service, Network Service | Medium |
| [WIN-URA-013](../controls/index.md#win-ura-013) | Impersonate a Client After Authentication = Service Accounts and Administrators | Medium |
| [WIN-URA-014](../controls/index.md#win-ura-014) | Load and Unload Device Drivers = Administrators Only | Medium |
| [WIN-URA-015](../controls/index.md#win-ura-015) | Manage Auditing and Security Log = Administrators Only | Medium |
| [WIN-URA-016](../controls/index.md#win-ura-016) | Take Ownership of Files or Other Objects = Administrators Only | Medium |

## CloudInfra Secure Essential - Essential tier

Baseline of essential hardening controls suitable for any Windows Server workload.

**ID:** `CloudInfraSecure-Essential` &nbsp; **Controls:** 15 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

| Control | Name | Severity |
|---------|------|----------|
| [WIN-FW-001](../controls/index.md#win-fw-001) | Windows Firewall Enabled (All Profiles) | High |
| [WIN-SMB-001](../controls/index.md#win-smb-001) | Disable SMBv1 | High |
| [WIN-TLS-010](../controls/index.md#win-tls-010) | Disable TLS 1.0 (Server) | High |
| [WIN-TLS-011](../controls/index.md#win-tls-011) | Disable TLS 1.1 (Server) | High |
| [WIN-UAC-001](../controls/index.md#win-uac-001) | User Account Control Enabled | High |
| [WIN-DEF-001](../controls/index.md#win-def-001) | Microsoft Defender Antivirus Enabled | High |
| [WIN-PWD-001](../controls/index.md#win-pwd-001) | Minimum Password Length | High |
| [WIN-PWD-002](../controls/index.md#win-pwd-002) | Password Complexity Enabled | High |
| [WIN-PWD-006](../controls/index.md#win-pwd-006) | Disable Reversible Password Encryption | High |
| [WIN-LSA-001](../controls/index.md#win-lsa-001) | Do Not Store LAN Manager Hash | High |
| [WIN-WDIGEST-001](../controls/index.md#win-wdigest-001) | Disable WDigest Credential Caching | High |
| [WIN-TLS-012](../controls/index.md#win-tls-012) | Disable SSL 3.0 (Server) | High |
| [WIN-TLS-013](../controls/index.md#win-tls-013) | Disable SSL 2.0 (Server) | High |
| [WIN-DEF-002](../controls/index.md#win-def-002) | Enable Potentially Unwanted Application (PUA) Protection | High |
| [WIN-DEF-003](../controls/index.md#win-def-003) | Enable Defender Real-Time Protection | High |

## CloudInfra Secure IIS Web Server - Role tier

Baseline for Internet Information Services (IIS) web servers.

**ID:** `CloudInfraSecure-IISWebServer` &nbsp; **Controls:** 65 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

| Control | Name | Severity |
|---------|------|----------|
| [WIN-FW-001](../controls/index.md#win-fw-001) | Windows Firewall Enabled (All Profiles) | High |
| [WIN-TLS-010](../controls/index.md#win-tls-010) | Disable TLS 1.0 (Server) | High |
| [WIN-TLS-011](../controls/index.md#win-tls-011) | Disable TLS 1.1 (Server) | High |
| [WIN-DEF-001](../controls/index.md#win-def-001) | Microsoft Defender Antivirus Enabled | High |
| [WIN-UAC-001](../controls/index.md#win-uac-001) | User Account Control Enabled | High |
| [WIN-PSL-001](../controls/index.md#win-psl-001) | Enable PowerShell Script Block Logging | Medium |
| [WIN-PSL-002](../controls/index.md#win-psl-002) | Enable PowerShell Module Logging | Medium |
| [WIN-SMB-003](../controls/index.md#win-smb-003) | Require SMB Signing (Server) | High |
| [WIN-NTLM-001](../controls/index.md#win-ntlm-001) | LAN Manager Authentication Level (NTLMv2 Only) | High |
| [WIN-LSA-001](../controls/index.md#win-lsa-001) | Do Not Store LAN Manager Hash | High |
| [WIN-WDIGEST-001](../controls/index.md#win-wdigest-001) | Disable WDigest Credential Caching | High |
| [WIN-INSTALL-001](../controls/index.md#win-install-001) | Disable Always Install Elevated | High |
| [WIN-AUTORUN-001](../controls/index.md#win-autorun-001) | Disable AutoRun on All Drives | Medium |
| [WIN-TLS-012](../controls/index.md#win-tls-012) | Disable SSL 3.0 (Server) | High |
| [WIN-TLS-013](../controls/index.md#win-tls-013) | Disable SSL 2.0 (Server) | High |
| [WIN-SMB-004](../controls/index.md#win-smb-004) | Disable SMBv1 Client | High |
| [WIN-NET-001](../controls/index.md#win-net-001) | Disable LLMNR | Medium |
| [WIN-SVC-001](../controls/index.md#win-svc-001) | Disable Remote Registry Service | Medium |
| [WIN-DEF-002](../controls/index.md#win-def-002) | Enable Potentially Unwanted Application (PUA) Protection | High |
| [WIN-DEF-003](../controls/index.md#win-def-003) | Enable Defender Real-Time Protection | High |
| [WIN-NET-002](../controls/index.md#win-net-002) | Disable IPv4 Source Routing | Medium |
| [WIN-NET-003](../controls/index.md#win-net-003) | Disable ICMP Redirects | Low |
| [WIN-NET-004](../controls/index.md#win-net-004) | Disable IPv6 Source Routing | Medium |
| [WIN-SMB-006](../controls/index.md#win-smb-006) | Restrict Anonymous Access to Named Pipes and Shares | Medium |
| [WIN-ASR-003](../controls/index.md#win-asr-003) | ASR: Block Executable Content from Email and Webmail | Medium |
| [WIN-NTLM-002](../controls/index.md#win-ntlm-002) | Minimum NTLM Session Security (Clients) | Medium |
| [WIN-NTLM-003](../controls/index.md#win-ntlm-003) | Minimum NTLM Session Security (Servers) | Medium |
| [WIN-WINRM-001](../controls/index.md#win-winrm-001) | Disable WinRM Client Basic Authentication | Medium |
| [WIN-WINRM-002](../controls/index.md#win-winrm-002) | Disallow WinRM Unencrypted Traffic | Medium |
| [WIN-AUD-016](../controls/index.md#win-aud-016) | Audit MPSSVC Rule-Level Policy Change | Medium |
| [WIN-LSA-008](../controls/index.md#win-lsa-008) | Restrict Clients Allowed to Make Remote SAM Calls | Medium |
| [WIN-NET-005](../controls/index.md#win-net-005) | Ignore NetBIOS Name Release Requests | Low |
| [WIN-PSL-003](../controls/index.md#win-psl-003) | Enable PowerShell Transcription | Medium |
| [WIN-SMB-007](../controls/index.md#win-smb-007) | Disable SMB Client Insecure Guest Logons | Medium |
| [WIN-UAC-006](../controls/index.md#win-uac-006) | Only Elevate UIAccess Apps in Secure Locations | Medium |
| [WIN-TLS-001](../controls/index.md#win-tls-001) | Enable TLS 1.2 (Server) | Medium |
| [WIN-TLS-002](../controls/index.md#win-tls-002) | Enable TLS 1.2 (Client) | Medium |
| [WIN-TLS-003](../controls/index.md#win-tls-003) | Disable RC4 128/128 Cipher | High |
| [WIN-TLS-004](../controls/index.md#win-tls-004) | Disable RC4 40/128 Cipher | High |
| [WIN-TLS-005](../controls/index.md#win-tls-005) | Disable Triple DES 168 Cipher | Medium |
| [WIN-FW-004](../controls/index.md#win-fw-004) | Block Inbound Connections by Default (Public Profile) | Medium |
| [WIN-FW-005](../controls/index.md#win-fw-005) | Log Dropped Packets (Public Profile) | Low |
| [WIN-DEF-009](../controls/index.md#win-def-009) | Enable Defender Behavior Monitoring | High |
| [WIN-TLS-006](../controls/index.md#win-tls-006) | Disable RC4 56/128 Cipher | High |
| [WIN-TLS-007](../controls/index.md#win-tls-007) | Disable RC4 64/128 Cipher | High |
| [WIN-TLS-008](../controls/index.md#win-tls-008) | Disable DES 56/56 Cipher | Medium |
| [WIN-TLS-009](../controls/index.md#win-tls-009) | Disable NULL Cipher | Medium |
| [WIN-NET-006](../controls/index.md#win-net-006) | Disable mDNS | Medium |
| [WIN-RDP-009](../controls/index.md#win-rdp-009) | Do Not Allow Saved RDP Passwords | Medium |
| [WIN-ASR-014](../controls/index.md#win-asr-014) | ASR: Block Webshell Creation for Servers | High |
| [WIN-DEF-010](../controls/index.md#win-def-010) | Enable Email Scanning | Medium |
| [WIN-DEF-011](../controls/index.md#win-def-011) | Enable Archive Scanning | Medium |
| [WIN-DEF-013](../controls/index.md#win-def-013) | Scan Downloaded Files and Attachments | High |
| [WIN-NET-007](../controls/index.md#win-net-007) | Enable Safe DLL Search Mode | Medium |
| [WIN-PRINT-001](../controls/index.md#win-print-001) | Restrict Point and Print Driver Installation to Administrators | High |
| [WIN-AUD-020](../controls/index.md#win-aud-020) | Audit Detailed File Share | Medium |
| [WIN-URA-001](../controls/index.md#win-ura-001) | Access Credential Manager as a Trusted Caller = No One | High |
| [WIN-URA-002](../controls/index.md#win-ura-002) | Act as Part of the Operating System = No One | High |
| [WIN-URA-003](../controls/index.md#win-ura-003) | Create a Token Object = No One | High |
| [WIN-URA-004](../controls/index.md#win-ura-004) | Create Permanent Shared Objects = No One | Medium |
| [WIN-URA-006](../controls/index.md#win-ura-006) | Deny Access to This Computer From the Network (includes Guests) | Medium |
| [WIN-URA-007](../controls/index.md#win-ura-007) | Deny Log On as a Batch Job (includes Guests) | Low |
| [WIN-URA-008](../controls/index.md#win-ura-008) | Deny Log On as a Service (includes Guests) | Low |
| [WIN-URA-009](../controls/index.md#win-ura-009) | Deny Log On Locally (includes Guests) | Medium |
| [WIN-URA-010](../controls/index.md#win-ura-010) | Deny Log On Through Remote Desktop Services (includes Guests) | Medium |

## CloudInfra Secure Remote Desktop Server - Role tier

Baseline for Remote Desktop Session Host servers.

**ID:** `CloudInfraSecure-RemoteDesktopServer` &nbsp; **Controls:** 64 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

| Control | Name | Severity |
|---------|------|----------|
| [WIN-RDP-001](../controls/index.md#win-rdp-001) | Require Network Level Authentication for RDP | High |
| [WIN-TLS-010](../controls/index.md#win-tls-010) | Disable TLS 1.0 (Server) | High |
| [WIN-TLS-011](../controls/index.md#win-tls-011) | Disable TLS 1.1 (Server) | High |
| [WIN-FW-001](../controls/index.md#win-fw-001) | Windows Firewall Enabled (All Profiles) | High |
| [WIN-DEF-001](../controls/index.md#win-def-001) | Microsoft Defender Antivirus Enabled | High |
| [WIN-LOCK-001](../controls/index.md#win-lock-001) | Account Lockout Threshold | Medium |
| [WIN-UAC-001](../controls/index.md#win-uac-001) | User Account Control Enabled | High |
| [WIN-NTLM-001](../controls/index.md#win-ntlm-001) | LAN Manager Authentication Level (NTLMv2 Only) | High |
| [WIN-LSA-001](../controls/index.md#win-lsa-001) | Do Not Store LAN Manager Hash | High |
| [WIN-WDIGEST-001](../controls/index.md#win-wdigest-001) | Disable WDigest Credential Caching | High |
| [WIN-UAC-002](../controls/index.md#win-uac-002) | UAC Elevation Prompt for Administrators | Medium |
| [WIN-INSTALL-001](../controls/index.md#win-install-001) | Disable Always Install Elevated | High |
| [WIN-AUTORUN-001](../controls/index.md#win-autorun-001) | Disable AutoRun on All Drives | Medium |
| [WIN-RDP-002](../controls/index.md#win-rdp-002) | RDP Minimum Encryption Level (High) | Medium |
| [WIN-RDP-003](../controls/index.md#win-rdp-003) | RDP Security Layer (TLS) | Medium |
| [WIN-RDP-004](../controls/index.md#win-rdp-004) | Disable RDP Drive Redirection | Medium |
| [WIN-TLS-012](../controls/index.md#win-tls-012) | Disable SSL 3.0 (Server) | High |
| [WIN-TLS-013](../controls/index.md#win-tls-013) | Disable SSL 2.0 (Server) | High |
| [WIN-NET-001](../controls/index.md#win-net-001) | Disable LLMNR | Medium |
| [WIN-LOGON-001](../controls/index.md#win-logon-001) | Machine Inactivity Limit | Medium |
| [WIN-DEF-002](../controls/index.md#win-def-002) | Enable Potentially Unwanted Application (PUA) Protection | High |
| [WIN-DEF-003](../controls/index.md#win-def-003) | Enable Defender Real-Time Protection | High |
| [WIN-UAC-004](../controls/index.md#win-uac-004) | Deny UAC Elevation Prompt for Standard Users | Medium |
| [WIN-UAC-005](../controls/index.md#win-uac-005) | UAC Switch to the Secure Desktop for Elevation | Medium |
| [WIN-LOGON-003](../controls/index.md#win-logon-003) | Limit Number of Cached Logons | Medium |
| [WIN-AUD-009](../controls/index.md#win-aud-009) | Audit Logoff | Medium |
| [WIN-LOGON-004](../controls/index.md#win-logon-004) | Require Ctrl+Alt+Del at Logon | Low |
| [WIN-NTLM-002](../controls/index.md#win-ntlm-002) | Minimum NTLM Session Security (Clients) | Medium |
| [WIN-NTLM-003](../controls/index.md#win-ntlm-003) | Minimum NTLM Session Security (Servers) | Medium |
| [WIN-WINRM-001](../controls/index.md#win-winrm-001) | Disable WinRM Client Basic Authentication | Medium |
| [WIN-WINRM-002](../controls/index.md#win-winrm-002) | Disallow WinRM Unencrypted Traffic | Medium |
| [WIN-AUD-015](../controls/index.md#win-aud-015) | Audit Other Logon/Logoff Events | Medium |
| [WIN-LOGON-005](../controls/index.md#win-logon-005) | Smart Card Removal Behavior (Lock Workstation) | Low |
| [WIN-RDP-005](../controls/index.md#win-rdp-005) | Always Prompt for Password on RDP Connection | Medium |
| [WIN-RDP-006](../controls/index.md#win-rdp-006) | Disable RDP Clipboard Redirection | Low |
| [WIN-PSL-003](../controls/index.md#win-psl-003) | Enable PowerShell Transcription | Medium |
| [WIN-SMB-007](../controls/index.md#win-smb-007) | Disable SMB Client Insecure Guest Logons | Medium |
| [WIN-TLS-001](../controls/index.md#win-tls-001) | Enable TLS 1.2 (Server) | Medium |
| [WIN-TLS-002](../controls/index.md#win-tls-002) | Enable TLS 1.2 (Client) | Medium |
| [WIN-TLS-003](../controls/index.md#win-tls-003) | Disable RC4 128/128 Cipher | High |
| [WIN-FW-004](../controls/index.md#win-fw-004) | Block Inbound Connections by Default (Public Profile) | Medium |
| [WIN-WINRM-003](../controls/index.md#win-winrm-003) | Disable WinRM Client Digest Authentication | Medium |
| [WIN-DEF-009](../controls/index.md#win-def-009) | Enable Defender Behavior Monitoring | High |
| [WIN-RDP-007](../controls/index.md#win-rdp-007) | Set RDP Idle Session Time Limit | Low |
| [WIN-RDP-008](../controls/index.md#win-rdp-008) | Set RDP Disconnected Session Time Limit | Low |
| [WIN-RDP-009](../controls/index.md#win-rdp-009) | Do Not Allow Saved RDP Passwords | Medium |
| [WIN-TLS-006](../controls/index.md#win-tls-006) | Disable RC4 56/128 Cipher | High |
| [WIN-TLS-007](../controls/index.md#win-tls-007) | Disable RC4 64/128 Cipher | High |
| [WIN-UAC-007](../controls/index.md#win-uac-007) | Apply UAC Token Filtering to Remote Local Accounts | High |
| [WIN-DEF-010](../controls/index.md#win-def-010) | Enable Email Scanning | Medium |
| [WIN-DEF-013](../controls/index.md#win-def-013) | Scan Downloaded Files and Attachments | High |
| [WIN-SMB-008](../controls/index.md#win-smb-008) | Do Not Send Unencrypted Password to Third-Party SMB Servers | Medium |
| [WIN-PRINT-001](../controls/index.md#win-print-001) | Restrict Point and Print Driver Installation to Administrators | High |
| [WIN-PRINT-002](../controls/index.md#win-print-002) | Require Elevation for New Point and Print Connections | Medium |
| [WIN-AUD-017](../controls/index.md#win-aud-017) | Audit PNP Activity | Medium |
| [WIN-URA-001](../controls/index.md#win-ura-001) | Access Credential Manager as a Trusted Caller = No One | High |
| [WIN-URA-002](../controls/index.md#win-ura-002) | Act as Part of the Operating System = No One | High |
| [WIN-URA-003](../controls/index.md#win-ura-003) | Create a Token Object = No One | High |
| [WIN-URA-004](../controls/index.md#win-ura-004) | Create Permanent Shared Objects = No One | Medium |
| [WIN-URA-006](../controls/index.md#win-ura-006) | Deny Access to This Computer From the Network (includes Guests) | Medium |
| [WIN-URA-007](../controls/index.md#win-ura-007) | Deny Log On as a Batch Job (includes Guests) | Low |
| [WIN-URA-008](../controls/index.md#win-ura-008) | Deny Log On as a Service (includes Guests) | Low |
| [WIN-URA-009](../controls/index.md#win-ura-009) | Deny Log On Locally (includes Guests) | Medium |
| [WIN-URA-010](../controls/index.md#win-ura-010) | Deny Log On Through Remote Desktop Services (includes Guests) | Medium |

## CloudInfra Secure SQL Server - Role tier

Baseline for Microsoft SQL Server hosts.

**ID:** `CloudInfraSecure-SQLServer` &nbsp; **Controls:** 61 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

| Control | Name | Severity |
|---------|------|----------|
| [WIN-FW-001](../controls/index.md#win-fw-001) | Windows Firewall Enabled (All Profiles) | High |
| [WIN-TLS-010](../controls/index.md#win-tls-010) | Disable TLS 1.0 (Server) | High |
| [WIN-TLS-011](../controls/index.md#win-tls-011) | Disable TLS 1.1 (Server) | High |
| [WIN-DEF-001](../controls/index.md#win-def-001) | Microsoft Defender Antivirus Enabled | High |
| [WIN-AUD-001](../controls/index.md#win-aud-001) | Audit Logon Failures | Medium |
| [WIN-AUD-002](../controls/index.md#win-aud-002) | Audit Account Lockout Events | Medium |
| [WIN-UAC-001](../controls/index.md#win-uac-001) | User Account Control Enabled | High |
| [WIN-SMB-003](../controls/index.md#win-smb-003) | Require SMB Signing (Server) | High |
| [WIN-NTLM-001](../controls/index.md#win-ntlm-001) | LAN Manager Authentication Level (NTLMv2 Only) | High |
| [WIN-LSA-001](../controls/index.md#win-lsa-001) | Do Not Store LAN Manager Hash | High |
| [WIN-WDIGEST-001](../controls/index.md#win-wdigest-001) | Disable WDigest Credential Caching | High |
| [WIN-LSA-002](../controls/index.md#win-lsa-002) | Restrict Anonymous SID Enumeration | Medium |
| [WIN-TLS-012](../controls/index.md#win-tls-012) | Disable SSL 3.0 (Server) | High |
| [WIN-TLS-013](../controls/index.md#win-tls-013) | Disable SSL 2.0 (Server) | High |
| [WIN-LDAP-001](../controls/index.md#win-ldap-001) | LDAP Client Signing | Medium |
| [WIN-NET-001](../controls/index.md#win-net-001) | Disable LLMNR | Medium |
| [WIN-SMB-004](../controls/index.md#win-smb-004) | Disable SMBv1 Client | High |
| [WIN-DEF-002](../controls/index.md#win-def-002) | Enable Potentially Unwanted Application (PUA) Protection | High |
| [WIN-DEF-003](../controls/index.md#win-def-003) | Enable Defender Real-Time Protection | High |
| [WIN-NET-002](../controls/index.md#win-net-002) | Disable IPv4 Source Routing | Medium |
| [WIN-NET-004](../controls/index.md#win-net-004) | Disable IPv6 Source Routing | Medium |
| [WIN-SMB-006](../controls/index.md#win-smb-006) | Restrict Anonymous Access to Named Pipes and Shares | Medium |
| [WIN-LSA-004](../controls/index.md#win-lsa-004) | Do Not Allow Anonymous Enumeration of SAM Accounts | Medium |
| [WIN-NTLM-002](../controls/index.md#win-ntlm-002) | Minimum NTLM Session Security (Clients) | Medium |
| [WIN-NTLM-003](../controls/index.md#win-ntlm-003) | Minimum NTLM Session Security (Servers) | Medium |
| [WIN-WINRM-001](../controls/index.md#win-winrm-001) | Disable WinRM Client Basic Authentication | Medium |
| [WIN-WINRM-002](../controls/index.md#win-winrm-002) | Disallow WinRM Unencrypted Traffic | Medium |
| [WIN-LSA-007](../controls/index.md#win-lsa-007) | Do Not Apply Everyone Permissions to Anonymous Users | Medium |
| [WIN-LSA-008](../controls/index.md#win-lsa-008) | Restrict Clients Allowed to Make Remote SAM Calls | Medium |
| [WIN-LSA-009](../controls/index.md#win-lsa-009) | Limit Local Account Use of Blank Passwords | High |
| [WIN-LSA-010](../controls/index.md#win-lsa-010) | Sharing and Security Model for Local Accounts (Classic) | Medium |
| [WIN-KRB-001](../controls/index.md#win-krb-001) | Configure Kerberos Encryption Types (AES only) | Medium |
| [WIN-PSL-003](../controls/index.md#win-psl-003) | Enable PowerShell Transcription | Medium |
| [WIN-TLS-001](../controls/index.md#win-tls-001) | Enable TLS 1.2 (Server) | Medium |
| [WIN-TLS-002](../controls/index.md#win-tls-002) | Enable TLS 1.2 (Client) | Medium |
| [WIN-TLS-003](../controls/index.md#win-tls-003) | Disable RC4 128/128 Cipher | High |
| [WIN-TLS-004](../controls/index.md#win-tls-004) | Disable RC4 40/128 Cipher | High |
| [WIN-TLS-005](../controls/index.md#win-tls-005) | Disable Triple DES 168 Cipher | Medium |
| [WIN-FW-002](../controls/index.md#win-fw-002) | Block Inbound Connections by Default (Domain Profile) | Medium |
| [WIN-DEF-009](../controls/index.md#win-def-009) | Enable Defender Behavior Monitoring | High |
| [WIN-TLS-006](../controls/index.md#win-tls-006) | Disable RC4 56/128 Cipher | High |
| [WIN-TLS-007](../controls/index.md#win-tls-007) | Disable RC4 64/128 Cipher | High |
| [WIN-TLS-008](../controls/index.md#win-tls-008) | Disable DES 56/56 Cipher | Medium |
| [WIN-TLS-009](../controls/index.md#win-tls-009) | Disable NULL Cipher | Medium |
| [WIN-VBS-001](../controls/index.md#win-vbs-001) | Enable Virtualization Based Security | High |
| [WIN-CG-001](../controls/index.md#win-cg-001) | Enable Credential Guard | High |
| [WIN-DEF-011](../controls/index.md#win-def-011) | Enable Archive Scanning | Medium |
| [WIN-DEF-013](../controls/index.md#win-def-013) | Scan Downloaded Files and Attachments | High |
| [WIN-LSA-011](../controls/index.md#win-lsa-011) | Disallow LocalSystem NULL Session Fallback | Medium |
| [WIN-LSA-012](../controls/index.md#win-lsa-012) | Strengthen Default Permissions of Internal System Objects | Low |
| [WIN-NET-007](../controls/index.md#win-net-007) | Enable Safe DLL Search Mode | Medium |
| [WIN-AUD-019](../controls/index.md#win-aud-019) | Audit Other Object Access Events | Medium |
| [WIN-URA-001](../controls/index.md#win-ura-001) | Access Credential Manager as a Trusted Caller = No One | High |
| [WIN-URA-002](../controls/index.md#win-ura-002) | Act as Part of the Operating System = No One | High |
| [WIN-URA-003](../controls/index.md#win-ura-003) | Create a Token Object = No One | High |
| [WIN-URA-004](../controls/index.md#win-ura-004) | Create Permanent Shared Objects = No One | Medium |
| [WIN-URA-006](../controls/index.md#win-ura-006) | Deny Access to This Computer From the Network (includes Guests) | Medium |
| [WIN-URA-007](../controls/index.md#win-ura-007) | Deny Log On as a Batch Job (includes Guests) | Low |
| [WIN-URA-008](../controls/index.md#win-ura-008) | Deny Log On as a Service (includes Guests) | Low |
| [WIN-URA-009](../controls/index.md#win-ura-009) | Deny Log On Locally (includes Guests) | Medium |
| [WIN-URA-010](../controls/index.md#win-ura-010) | Deny Log On Through Remote Desktop Services (includes Guests) | Medium |

## CloudInfra Secure Standard - Standard tier

Recommended baseline adding logging, auditing and access hardening on top of Essential.

**ID:** `CloudInfraSecure-Standard` &nbsp; **Controls:** 138 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

| Control | Name | Severity |
|---------|------|----------|
| [WIN-FW-001](../controls/index.md#win-fw-001) | Windows Firewall Enabled (All Profiles) | High |
| [WIN-SMB-001](../controls/index.md#win-smb-001) | Disable SMBv1 | High |
| [WIN-TLS-010](../controls/index.md#win-tls-010) | Disable TLS 1.0 (Server) | High |
| [WIN-TLS-011](../controls/index.md#win-tls-011) | Disable TLS 1.1 (Server) | High |
| [WIN-RDP-001](../controls/index.md#win-rdp-001) | Require Network Level Authentication for RDP | High |
| [WIN-PSL-001](../controls/index.md#win-psl-001) | Enable PowerShell Script Block Logging | Medium |
| [WIN-PSL-002](../controls/index.md#win-psl-002) | Enable PowerShell Module Logging | Medium |
| [WIN-PWD-001](../controls/index.md#win-pwd-001) | Minimum Password Length | High |
| [WIN-PWD-002](../controls/index.md#win-pwd-002) | Password Complexity Enabled | High |
| [WIN-LOCK-001](../controls/index.md#win-lock-001) | Account Lockout Threshold | Medium |
| [WIN-AUD-001](../controls/index.md#win-aud-001) | Audit Logon Failures | Medium |
| [WIN-AUD-002](../controls/index.md#win-aud-002) | Audit Account Lockout Events | Medium |
| [WIN-DEF-001](../controls/index.md#win-def-001) | Microsoft Defender Antivirus Enabled | High |
| [WIN-UAC-001](../controls/index.md#win-uac-001) | User Account Control Enabled | High |
| [WIN-PWD-003](../controls/index.md#win-pwd-003) | Maximum Password Age | Medium |
| [WIN-PWD-004](../controls/index.md#win-pwd-004) | Minimum Password Age | Low |
| [WIN-PWD-005](../controls/index.md#win-pwd-005) | Enforce Password History | Medium |
| [WIN-PWD-006](../controls/index.md#win-pwd-006) | Disable Reversible Password Encryption | High |
| [WIN-LOCK-002](../controls/index.md#win-lock-002) | Account Lockout Duration | Medium |
| [WIN-LOCK-003](../controls/index.md#win-lock-003) | Reset Account Lockout Counter | Medium |
| [WIN-SMB-003](../controls/index.md#win-smb-003) | Require SMB Signing (Server) | High |
| [WIN-NTLM-001](../controls/index.md#win-ntlm-001) | LAN Manager Authentication Level (NTLMv2 Only) | High |
| [WIN-LSA-001](../controls/index.md#win-lsa-001) | Do Not Store LAN Manager Hash | High |
| [WIN-LSA-002](../controls/index.md#win-lsa-002) | Restrict Anonymous SID Enumeration | Medium |
| [WIN-WDIGEST-001](../controls/index.md#win-wdigest-001) | Disable WDigest Credential Caching | High |
| [WIN-UAC-002](../controls/index.md#win-uac-002) | UAC Elevation Prompt for Administrators | Medium |
| [WIN-INSTALL-001](../controls/index.md#win-install-001) | Disable Always Install Elevated | High |
| [WIN-AUTORUN-001](../controls/index.md#win-autorun-001) | Disable AutoRun on All Drives | Medium |
| [WIN-AUD-003](../controls/index.md#win-aud-003) | Audit Process Creation | Medium |
| [WIN-AUD-004](../controls/index.md#win-aud-004) | Audit Credential Validation | Medium |
| [WIN-AUD-005](../controls/index.md#win-aud-005) | Audit Security Group Management | Medium |
| [WIN-SMB-004](../controls/index.md#win-smb-004) | Disable SMBv1 Client | High |
| [WIN-SMB-005](../controls/index.md#win-smb-005) | Require SMB Client Signing | Medium |
| [WIN-LDAP-001](../controls/index.md#win-ldap-001) | LDAP Client Signing | Medium |
| [WIN-NET-001](../controls/index.md#win-net-001) | Disable LLMNR | Medium |
| [WIN-TLS-012](../controls/index.md#win-tls-012) | Disable SSL 3.0 (Server) | High |
| [WIN-TLS-013](../controls/index.md#win-tls-013) | Disable SSL 2.0 (Server) | High |
| [WIN-RDP-002](../controls/index.md#win-rdp-002) | RDP Minimum Encryption Level (High) | Medium |
| [WIN-RDP-003](../controls/index.md#win-rdp-003) | RDP Security Layer (TLS) | Medium |
| [WIN-RDP-004](../controls/index.md#win-rdp-004) | Disable RDP Drive Redirection | Medium |
| [WIN-SVC-001](../controls/index.md#win-svc-001) | Disable Remote Registry Service | Medium |
| [WIN-LOGON-001](../controls/index.md#win-logon-001) | Machine Inactivity Limit | Medium |
| [WIN-LOGON-002](../controls/index.md#win-logon-002) | Do Not Display Last Signed-In User | Low |
| [WIN-UAC-003](../controls/index.md#win-uac-003) | UAC Detect Application Installations | Medium |
| [WIN-AUD-006](../controls/index.md#win-aud-006) | Audit Special Logon | Medium |
| [WIN-AUD-008](../controls/index.md#win-aud-008) | Audit System Integrity | Medium |
| [WIN-DEF-002](../controls/index.md#win-def-002) | Enable Potentially Unwanted Application (PUA) Protection | High |
| [WIN-DEF-003](../controls/index.md#win-def-003) | Enable Defender Real-Time Protection | High |
| [WIN-DEF-004](../controls/index.md#win-def-004) | Enable Cloud-Delivered Protection | Medium |
| [WIN-NET-002](../controls/index.md#win-net-002) | Disable IPv4 Source Routing | Medium |
| [WIN-NET-003](../controls/index.md#win-net-003) | Disable ICMP Redirects | Low |
| [WIN-NET-004](../controls/index.md#win-net-004) | Disable IPv6 Source Routing | Medium |
| [WIN-SMB-006](../controls/index.md#win-smb-006) | Restrict Anonymous Access to Named Pipes and Shares | Medium |
| [WIN-LSA-004](../controls/index.md#win-lsa-004) | Do Not Allow Anonymous Enumeration of SAM Accounts | Medium |
| [WIN-LSA-005](../controls/index.md#win-lsa-005) | Enable Structured Exception Handling Overwrite Protection (SEHOP) | Medium |
| [WIN-LOGON-003](../controls/index.md#win-logon-003) | Limit Number of Cached Logons | Medium |
| [WIN-UAC-004](../controls/index.md#win-uac-004) | Deny UAC Elevation Prompt for Standard Users | Medium |
| [WIN-UAC-005](../controls/index.md#win-uac-005) | UAC Switch to the Secure Desktop for Elevation | Medium |
| [WIN-AUD-009](../controls/index.md#win-aud-009) | Audit Logoff | Medium |
| [WIN-AUD-010](../controls/index.md#win-aud-010) | Audit Removable Storage | Medium |
| [WIN-AUD-011](../controls/index.md#win-aud-011) | Audit Authentication Policy Change | Medium |
| [WIN-AUD-012](../controls/index.md#win-aud-012) | Audit User Account Management | Medium |
| [WIN-AUD-013](../controls/index.md#win-aud-013) | Audit Computer Account Management | Medium |
| [WIN-AUD-014](../controls/index.md#win-aud-014) | Audit Audit Policy Change | Medium |
| [WIN-AUD-015](../controls/index.md#win-aud-015) | Audit Other Logon/Logoff Events | Medium |
| [WIN-AUD-016](../controls/index.md#win-aud-016) | Audit MPSSVC Rule-Level Policy Change | Medium |
| [WIN-LOGON-004](../controls/index.md#win-logon-004) | Require Ctrl+Alt+Del at Logon | Low |
| [WIN-NTLM-002](../controls/index.md#win-ntlm-002) | Minimum NTLM Session Security (Clients) | Medium |
| [WIN-NTLM-003](../controls/index.md#win-ntlm-003) | Minimum NTLM Session Security (Servers) | Medium |
| [WIN-LSA-006](../controls/index.md#win-lsa-006) | Digitally Encrypt or Sign Secure Channel Data (Always) | Medium |
| [WIN-LSA-007](../controls/index.md#win-lsa-007) | Do Not Apply Everyone Permissions to Anonymous Users | Medium |
| [WIN-WINRM-001](../controls/index.md#win-winrm-001) | Disable WinRM Client Basic Authentication | Medium |
| [WIN-WINRM-002](../controls/index.md#win-winrm-002) | Disallow WinRM Unencrypted Traffic | Medium |
| [WIN-LSA-008](../controls/index.md#win-lsa-008) | Restrict Clients Allowed to Make Remote SAM Calls | Medium |
| [WIN-LSA-009](../controls/index.md#win-lsa-009) | Limit Local Account Use of Blank Passwords | High |
| [WIN-LSA-010](../controls/index.md#win-lsa-010) | Sharing and Security Model for Local Accounts (Classic) | Medium |
| [WIN-KRB-001](../controls/index.md#win-krb-001) | Configure Kerberos Encryption Types (AES only) | Medium |
| [WIN-LOGON-006](../controls/index.md#win-logon-006) | Disable Automatic Logon | Medium |
| [WIN-NET-005](../controls/index.md#win-net-005) | Ignore NetBIOS Name Release Requests | Low |
| [WIN-PSL-003](../controls/index.md#win-psl-003) | Enable PowerShell Transcription | Medium |
| [WIN-RDP-005](../controls/index.md#win-rdp-005) | Always Prompt for Password on RDP Connection | Medium |
| [WIN-SMB-007](../controls/index.md#win-smb-007) | Disable SMB Client Insecure Guest Logons | Medium |
| [WIN-UAC-006](../controls/index.md#win-uac-006) | Only Elevate UIAccess Apps in Secure Locations | Medium |
| [WIN-DEF-007](../controls/index.md#win-def-007) | Scan Removable Drives During Full Scan | Low |
| [WIN-DEF-008](../controls/index.md#win-def-008) | Enable Block at First Sight | Medium |
| [WIN-DEF-009](../controls/index.md#win-def-009) | Enable Defender Behavior Monitoring | High |
| [WIN-TLS-001](../controls/index.md#win-tls-001) | Enable TLS 1.2 (Server) | Medium |
| [WIN-TLS-002](../controls/index.md#win-tls-002) | Enable TLS 1.2 (Client) | Medium |
| [WIN-TLS-003](../controls/index.md#win-tls-003) | Disable RC4 128/128 Cipher | High |
| [WIN-TLS-004](../controls/index.md#win-tls-004) | Disable RC4 40/128 Cipher | High |
| [WIN-TLS-005](../controls/index.md#win-tls-005) | Disable Triple DES 168 Cipher | Medium |
| [WIN-FW-002](../controls/index.md#win-fw-002) | Block Inbound Connections by Default (Domain Profile) | Medium |
| [WIN-FW-003](../controls/index.md#win-fw-003) | Block Inbound Connections by Default (Private Profile) | Medium |
| [WIN-FW-004](../controls/index.md#win-fw-004) | Block Inbound Connections by Default (Public Profile) | Medium |
| [WIN-FW-005](../controls/index.md#win-fw-005) | Log Dropped Packets (Public Profile) | Low |
| [WIN-WINRM-003](../controls/index.md#win-winrm-003) | Disable WinRM Client Digest Authentication | Medium |
| [WIN-TLS-006](../controls/index.md#win-tls-006) | Disable RC4 56/128 Cipher | High |
| [WIN-TLS-007](../controls/index.md#win-tls-007) | Disable RC4 64/128 Cipher | High |
| [WIN-TLS-008](../controls/index.md#win-tls-008) | Disable DES 56/56 Cipher | Medium |
| [WIN-TLS-009](../controls/index.md#win-tls-009) | Disable NULL Cipher | Medium |
| [WIN-RDP-007](../controls/index.md#win-rdp-007) | Set RDP Idle Session Time Limit | Low |
| [WIN-RDP-008](../controls/index.md#win-rdp-008) | Set RDP Disconnected Session Time Limit | Low |
| [WIN-RDP-009](../controls/index.md#win-rdp-009) | Do Not Allow Saved RDP Passwords | Medium |
| [WIN-UAC-007](../controls/index.md#win-uac-007) | Apply UAC Token Filtering to Remote Local Accounts | High |
| [WIN-ACCT-001](../controls/index.md#win-acct-001) | Block Microsoft Accounts | Medium |
| [WIN-NET-006](../controls/index.md#win-net-006) | Disable mDNS | Medium |
| [WIN-DEF-010](../controls/index.md#win-def-010) | Enable Email Scanning | Medium |
| [WIN-DEF-011](../controls/index.md#win-def-011) | Enable Archive Scanning | Medium |
| [WIN-DEF-012](../controls/index.md#win-def-012) | Scan Mapped Network Drives During Full Scan | Low |
| [WIN-DEF-013](../controls/index.md#win-def-013) | Scan Downloaded Files and Attachments | High |
| [WIN-DEF-014](../controls/index.md#win-def-014) | Disable Local Admin Merge of Defender Preferences | Medium |
| [WIN-DEF-015](../controls/index.md#win-def-015) | Enable Real-Time Script Scanning | Medium |
| [WIN-AUD-017](../controls/index.md#win-aud-017) | Audit PNP Activity | Medium |
| [WIN-AUD-018](../controls/index.md#win-aud-018) | Audit Group Membership | Medium |
| [WIN-AUD-019](../controls/index.md#win-aud-019) | Audit Other Object Access Events | Medium |
| [WIN-AUD-020](../controls/index.md#win-aud-020) | Audit Detailed File Share | Medium |
| [WIN-SMB-008](../controls/index.md#win-smb-008) | Do Not Send Unencrypted Password to Third-Party SMB Servers | Medium |
| [WIN-LSA-011](../controls/index.md#win-lsa-011) | Disallow LocalSystem NULL Session Fallback | Medium |
| [WIN-LSA-012](../controls/index.md#win-lsa-012) | Strengthen Default Permissions of Internal System Objects | Low |
| [WIN-NET-007](../controls/index.md#win-net-007) | Enable Safe DLL Search Mode | Medium |
| [WIN-PRINT-001](../controls/index.md#win-print-001) | Restrict Point and Print Driver Installation to Administrators | High |
| [WIN-PRINT-002](../controls/index.md#win-print-002) | Require Elevation for New Point and Print Connections | Medium |
| [WIN-URA-001](../controls/index.md#win-ura-001) | Access Credential Manager as a Trusted Caller = No One | High |
| [WIN-URA-002](../controls/index.md#win-ura-002) | Act as Part of the Operating System = No One | High |
| [WIN-URA-003](../controls/index.md#win-ura-003) | Create a Token Object = No One | High |
| [WIN-URA-004](../controls/index.md#win-ura-004) | Create Permanent Shared Objects = No One | Medium |
| [WIN-URA-005](../controls/index.md#win-ura-005) | Debug Programs = Administrators Only | High |
| [WIN-URA-006](../controls/index.md#win-ura-006) | Deny Access to This Computer From the Network (includes Guests) | Medium |
| [WIN-URA-007](../controls/index.md#win-ura-007) | Deny Log On as a Batch Job (includes Guests) | Low |
| [WIN-URA-008](../controls/index.md#win-ura-008) | Deny Log On as a Service (includes Guests) | Low |
| [WIN-URA-009](../controls/index.md#win-ura-009) | Deny Log On Locally (includes Guests) | Medium |
| [WIN-URA-010](../controls/index.md#win-ura-010) | Deny Log On Through Remote Desktop Services (includes Guests) | Medium |
| [WIN-URA-011](../controls/index.md#win-ura-011) | Force Shutdown From a Remote System = Administrators Only | Medium |
| [WIN-URA-012](../controls/index.md#win-ura-012) | Generate Security Audits = Local Service, Network Service | Medium |
| [WIN-URA-013](../controls/index.md#win-ura-013) | Impersonate a Client After Authentication = Service Accounts and Administrators | Medium |
| [WIN-URA-014](../controls/index.md#win-ura-014) | Load and Unload Device Drivers = Administrators Only | Medium |
| [WIN-URA-015](../controls/index.md#win-ura-015) | Manage Auditing and Security Log = Administrators Only | Medium |
| [WIN-URA-016](../controls/index.md#win-ura-016) | Take Ownership of Files or Other Objects = Administrators Only | Medium |

