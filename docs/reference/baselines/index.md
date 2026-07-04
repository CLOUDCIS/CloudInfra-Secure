# Baselines

CloudInfra Secure ships 7 baselines. Each is a curated collection of control IDs.

## CloudInfra Secure Domain Controller - Role tier

Baseline for Active Directory Domain Controllers.

**ID:** `CloudInfraSecure-DomainController` &nbsp; **Controls:** 64 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

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

## CloudInfra Secure Enterprise - Enterprise tier

Comprehensive baseline for regulated and high-assurance environments.

**ID:** `CloudInfraSecure-Enterprise` &nbsp; **Controls:** 84 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

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

**ID:** `CloudInfraSecure-IISWebServer` &nbsp; **Controls:** 30 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

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

## CloudInfra Secure Remote Desktop Server - Role tier

Baseline for Remote Desktop Session Host servers.

**ID:** `CloudInfraSecure-RemoteDesktopServer` &nbsp; **Controls:** 32 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

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

## CloudInfra Secure SQL Server - Role tier

Baseline for Microsoft SQL Server hosts.

**ID:** `CloudInfraSecure-SQLServer` &nbsp; **Controls:** 28 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

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

## CloudInfra Secure Standard - Standard tier

Recommended baseline adding logging, auditing and access hardening on top of Essential.

**ID:** `CloudInfraSecure-Standard` &nbsp; **Controls:** 73 &nbsp; **Supported OS:** WindowsServer2022, WindowsServer2025

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

