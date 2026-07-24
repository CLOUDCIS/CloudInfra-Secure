# Baselines

CloudInfra Secure ships 7 baseline profiles. Each is a curated collection of control IDs; the engine is baseline-agnostic. See the [Security Baseline Profiles guide](../../guide/baselines.md) for how to choose one.

## Profile comparison

<div class="cmpl-tablewrap" markdown="0">
<table class="cmpl-table">
  <thead><tr><th>Capability</th><th>DomainController</th><th>Enterprise</th><th>Essential</th><th>IISWebServer</th><th>RemoteDesktopServer</th><th>SQLServer</th><th>Standard</th></tr></thead>
  <tbody>
    <tr><td><strong>Total controls</strong></td><td>182</td><td>301</td><td>18</td><td>104</td><td>99</td><td>94</td><td>275</td></tr>
    <tr><td><strong>High / Critical severity</strong></td><td>36</td><td>47</td><td>15</td><td>32</td><td>28</td><td>32</td><td>40</td></tr>
    <tr><td><strong>Medium severity</strong></td><td>103</td><td>167</td><td>1</td><td>57</td><td>52</td><td>51</td><td>150</td></tr>
    <tr><td><strong>Low severity</strong></td><td>43</td><td>87</td><td>2</td><td>15</td><td>19</td><td>11</td><td>85</td></tr>
    <tr><td><strong>Require reboot</strong></td><td>19</td><td>20</td><td>5</td><td>14</td><td>10</td><td>16</td><td>15</td></tr>
    <tr><td><strong>Recommended for</strong></td><td>Active Directory Domain Controllers</td><td>Regulated / high-assurance</td><td>Any Windows Server workload</td><td>IIS web servers</td><td>Remote Desktop Session Hosts</td><td>Microsoft SQL Server hosts</td><td>General-purpose member servers</td></tr>
  </tbody>
</table>
</div>

## CloudInfra Secure Domain Controller - Role tier

Baseline for Active Directory Domain Controllers.

**ID:** `CloudInfraSecure-DomainController` &nbsp; **Recommended for:** Active Directory Domain Controllers

**Controls:** 182 &nbsp; **High/Critical:** 36 &nbsp; **Medium:** 103 &nbsp; **Low:** 43 &nbsp; **Require reboot:** 19

**Supported OS:** WindowsServer2022, WindowsServer2025

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
| [WIN-URA-029](../controls/index.md#win-ura-029) | Lock Pages in Memory = No One | Medium |
| [WIN-URA-036](../controls/index.md#win-ura-036) | Obtain an Impersonation Token for Another User = No One | Medium |
| [WIN-URA-037](../controls/index.md#win-ura-037) | Modify an Object Label = No One | Low |
| [WIN-LSA-013](../controls/index.md#win-lsa-013) | Digitally Encrypt Secure Channel Data (When Possible) | Medium |
| [WIN-LSA-014](../controls/index.md#win-lsa-014) | Digitally Sign Secure Channel Data (When Possible) | Medium |
| [WIN-LSA-015](../controls/index.md#win-lsa-015) | Do Not Disable Machine Account Password Changes | Medium |
| [WIN-LSA-016](../controls/index.md#win-lsa-016) | Maximum Machine Account Password Age (30 Days) | Low |
| [WIN-LSA-017](../controls/index.md#win-lsa-017) | Require Strong (Windows 2000 or Later) Session Key | Medium |
| [WIN-NTLM-004](../controls/index.md#win-ntlm-004) | Allow LocalSystem to Use Computer Identity for NTLM | Medium |
| [WIN-AUD-021](../controls/index.md#win-aud-021) | Force Audit Policy Subcategory Settings | Medium |
| [WIN-ACCT-002](../controls/index.md#win-acct-002) | Guest Account Disabled | Medium |
| [WIN-ACCT-003](../controls/index.md#win-acct-003) | Force Logoff When Logon Hours Expire | Low |
| [WIN-AUD-022](../controls/index.md#win-aud-022) | Audit Other Account Management Events | Medium |
| [WIN-AUD-023](../controls/index.md#win-aud-023) | Audit File Share | Medium |
| [WIN-AUD-024](../controls/index.md#win-aud-024) | Audit Authorization Policy Change | Medium |
| [WIN-AUD-025](../controls/index.md#win-aud-025) | Audit Other Policy Change Events | Low |
| [WIN-AUD-026](../controls/index.md#win-aud-026) | Audit IPsec Driver | Medium |
| [WIN-AUD-027](../controls/index.md#win-aud-027) | Audit Other System Events | Low |
| [WIN-AUD-028](../controls/index.md#win-aud-028) | Audit Security State Change | Medium |
| [WIN-AUD-029](../controls/index.md#win-aud-029) | Audit Security System Extension | Medium |
| [WIN-EVTLOG-001](../controls/index.md#win-evtlog-001) | Application Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-EVTLOG-002](../controls/index.md#win-evtlog-002) | Application Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-003](../controls/index.md#win-evtlog-003) | Security Event Log Maximum Size (>= 192 MB) | High |
| [WIN-EVTLOG-004](../controls/index.md#win-evtlog-004) | Security Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-005](../controls/index.md#win-evtlog-005) | Setup Event Log Maximum Size (>= 32 MB) | Low |
| [WIN-EVTLOG-006](../controls/index.md#win-evtlog-006) | Setup Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-007](../controls/index.md#win-evtlog-007) | System Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-EVTLOG-008](../controls/index.md#win-evtlog-008) | System Event Log Retention (Overwrite as Needed) | Low |
| [WIN-AUD-030](../controls/index.md#win-aud-030) | Include Command Line in Process Creation Events | Medium |
| [WIN-CREDDEL-001](../controls/index.md#win-creddel-001) | Encryption Oracle Remediation (Force Updated Clients) | High |
| [WIN-CREDDEL-002](../controls/index.md#win-creddel-002) | Remote Host Allows Delegation of Non-Exportable Credentials | Medium |
| [WIN-ELAM-001](../controls/index.md#win-elam-001) | Boot-Start Driver Initialization Policy | Medium |
| [WIN-GPO-001](../controls/index.md#win-gpo-001) | Registry Policy Processing: Apply During Background Refresh | Low |
| [WIN-GPO-002](../controls/index.md#win-gpo-002) | Registry Policy Processing: Process Even If Unchanged | Low |
| [WIN-GPO-003](../controls/index.md#win-gpo-003) | Disable Continue Experiences (Connected Devices Platform) | Low |
| [WIN-INET-001](../controls/index.md#win-inet-001) | Turn Off Downloading of Print Drivers Over HTTP | Low |
| [WIN-INET-002](../controls/index.md#win-inet-002) | Turn Off Printing Over HTTP | Low |
| [WIN-INET-003](../controls/index.md#win-inet-003) | Turn Off Windows Error Reporting | Low |
| [WIN-INET-004](../controls/index.md#win-inet-004) | Turn Off Windows Customer Experience Improvement Program | Low |
| [WIN-INET-005](../controls/index.md#win-inet-005) | Turn Off Internet Download for Web Publishing and Online Ordering | Low |
| [WIN-INET-006](../controls/index.md#win-inet-006) | Turn Off Internet Connection Wizard If URL Connection | Low |
| [WIN-INET-007](../controls/index.md#win-inet-007) | Turn Off Search Companion Content File Updates | Low |
| [WIN-LOGON-009](../controls/index.md#win-logon-009) | Do Not Enumerate Connected Users on Domain-Joined Computers | Medium |
| [WIN-LOGON-010](../controls/index.md#win-logon-010) | Do Not Enumerate Local Users on Domain-Joined Computers | Medium |
| [WIN-LOGON-011](../controls/index.md#win-logon-011) | Block User From Showing Account Details on Sign-In | Low |
| [WIN-LOGON-012](../controls/index.md#win-logon-012) | Do Not Display Network Selection UI | Low |
| [WIN-LOGON-013](../controls/index.md#win-logon-013) | Turn Off App Notifications on the Lock Screen | Low |
| [WIN-LOGON-014](../controls/index.md#win-logon-014) | Disable Convenience PIN Sign-In | Medium |
| [WIN-RPC-001](../controls/index.md#win-rpc-001) | Restrict Unauthenticated RPC Clients | Medium |
| [WIN-RPC-002](../controls/index.md#win-rpc-002) | Enable RPC Endpoint Mapper Client Authentication | Medium |
| [WIN-CREDUI-001](../controls/index.md#win-credui-001) | Do Not Display the Password Reveal Button | Low |
| [WIN-CREDUI-002](../controls/index.md#win-credui-002) | Do Not Enumerate Administrator Accounts on Elevation | Medium |
| [WIN-TELEM-001](../controls/index.md#win-telem-001) | Limit Diagnostic Data to Required or Less | Low |
| [WIN-TELEM-002](../controls/index.md#win-telem-002) | Disable OneSettings Downloads | Low |
| [WIN-SMARTSCREEN-001](../controls/index.md#win-smartscreen-001) | Configure Windows Defender SmartScreen | Medium |
| [WIN-WINRM-004](../controls/index.md#win-winrm-004) | Disable WinRM Service Basic Authentication | Medium |
| [WIN-WINRM-005](../controls/index.md#win-winrm-005) | Disallow WinRM Storing RunAs Credentials | Medium |
| [WIN-WINRM-006](../controls/index.md#win-winrm-006) | Disallow WinRM Client Unencrypted Traffic | Medium |
| [WIN-WINRS-001](../controls/index.md#win-winrs-001) | Disable Windows Remote Shell Access | Medium |
| [WIN-DEF-016](../controls/index.md#win-def-016) | Enable Defender File Hash Computation | Low |
| [WIN-NET-008](../controls/index.md#win-net-008) | Hardened UNC Path for SYSVOL | High |
| [WIN-NET-009](../controls/index.md#win-net-009) | Hardened UNC Path for NETLOGON | High |
| [WIN-NET-010](../controls/index.md#win-net-010) | Disable Font Providers | Low |
| [WIN-NET-011](../controls/index.md#win-net-011) | Turn Off Smart Multi-Homed Name Resolution | Medium |
| [WIN-NET-021](../controls/index.md#win-net-021) | TCP Maximum Data Retransmissions (IPv4) | Low |
| [WIN-NET-022](../controls/index.md#win-net-022) | TCP Maximum Data Retransmissions (IPv6) | Low |
| [WIN-EVTLOG-009](../controls/index.md#win-evtlog-009) | Security Log Near-Capacity Warning Threshold | Low |
| [WIN-SCRSVR-001](../controls/index.md#win-scrsvr-001) | Enable Screen Saver (Default Profile) | Low |
| [WIN-SCRSVR-002](../controls/index.md#win-scrsvr-002) | Password Protect the Screen Saver (Default Profile) | Medium |
| [WIN-SCRSVR-003](../controls/index.md#win-scrsvr-003) | Screen Saver Timeout (Default Profile) | Low |
| [WIN-LOGON-018](../controls/index.md#win-logon-018) | Logon Legal Notice Text | Low |
| [WIN-LOGON-019](../controls/index.md#win-logon-019) | Logon Legal Notice Title | Low |
| [WIN-SVC-002](../controls/index.md#win-svc-002) | Disable Print Spooler Service | Medium |

## CloudInfra Secure Enterprise - Enterprise tier

Comprehensive baseline for regulated and high-assurance environments.

**ID:** `CloudInfraSecure-Enterprise` &nbsp; **Recommended for:** Regulated / high-assurance

**Controls:** 301 &nbsp; **High/Critical:** 47 &nbsp; **Medium:** 167 &nbsp; **Low:** 87 &nbsp; **Require reboot:** 20

**Supported OS:** WindowsServer2022, WindowsServer2025

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
| [WIN-URA-017](../controls/index.md#win-ura-017) | Access This Computer From the Network = Administrators, Authenticated Users | High |
| [WIN-URA-018](../controls/index.md#win-ura-018) | Allow Log On Locally = Administrators | Medium |
| [WIN-URA-019](../controls/index.md#win-ura-019) | Allow Log On Through Remote Desktop Services = Administrators, Remote Desktop Users | Medium |
| [WIN-URA-020](../controls/index.md#win-ura-020) | Back Up Files and Directories = Administrators | Medium |
| [WIN-URA-021](../controls/index.md#win-ura-021) | Restore Files and Directories = Administrators | Medium |
| [WIN-URA-022](../controls/index.md#win-ura-022) | Change the System Time = Administrators, Local Service | Medium |
| [WIN-URA-023](../controls/index.md#win-ura-023) | Change the Time Zone = Administrators, Local Service, Users | Low |
| [WIN-URA-024](../controls/index.md#win-ura-024) | Create a Pagefile = Administrators | Low |
| [WIN-URA-025](../controls/index.md#win-ura-025) | Create Global Objects = Administrators and Service Accounts | Medium |
| [WIN-URA-026](../controls/index.md#win-ura-026) | Create Symbolic Links = Administrators | Medium |
| [WIN-URA-027](../controls/index.md#win-ura-027) | Adjust Memory Quotas for a Process = Administrators and Service Accounts | Low |
| [WIN-URA-028](../controls/index.md#win-ura-028) | Increase Scheduling Priority = Administrators, Window Manager | Low |
| [WIN-URA-029](../controls/index.md#win-ura-029) | Lock Pages in Memory = No One | Medium |
| [WIN-URA-030](../controls/index.md#win-ura-030) | Perform Volume Maintenance Tasks = Administrators | Medium |
| [WIN-URA-031](../controls/index.md#win-ura-031) | Profile Single Process = Administrators | Low |
| [WIN-URA-032](../controls/index.md#win-ura-032) | Replace a Process Level Token = Local Service, Network Service | Medium |
| [WIN-URA-033](../controls/index.md#win-ura-033) | Shut Down the System = Administrators | Low |
| [WIN-URA-034](../controls/index.md#win-ura-034) | Modify Firmware Environment Values = Administrators | Medium |
| [WIN-URA-035](../controls/index.md#win-ura-035) | Enable Accounts to Be Trusted for Delegation = No One | High |
| [WIN-URA-036](../controls/index.md#win-ura-036) | Obtain an Impersonation Token for Another User = No One | Medium |
| [WIN-URA-037](../controls/index.md#win-ura-037) | Modify an Object Label = No One | Low |
| [WIN-URA-038](../controls/index.md#win-ura-038) | Synchronize Directory Service Data = No One | Medium |
| [WIN-URA-039](../controls/index.md#win-ura-039) | Profile System Performance = Administrators, WdiServiceHost | Low |
| [WIN-LSA-013](../controls/index.md#win-lsa-013) | Digitally Encrypt Secure Channel Data (When Possible) | Medium |
| [WIN-LSA-014](../controls/index.md#win-lsa-014) | Digitally Sign Secure Channel Data (When Possible) | Medium |
| [WIN-LSA-015](../controls/index.md#win-lsa-015) | Do Not Disable Machine Account Password Changes | Medium |
| [WIN-LSA-016](../controls/index.md#win-lsa-016) | Maximum Machine Account Password Age (30 Days) | Low |
| [WIN-LSA-017](../controls/index.md#win-lsa-017) | Require Strong (Windows 2000 or Later) Session Key | Medium |
| [WIN-SMB-009](../controls/index.md#win-smb-009) | Digitally Sign Client Communications (If Server Agrees) | Low |
| [WIN-SMB-010](../controls/index.md#win-smb-010) | Digitally Sign Server Communications (If Client Agrees) | Low |
| [WIN-SMB-011](../controls/index.md#win-smb-011) | Idle Time Required Before Suspending an SMB Session (15 min) | Low |
| [WIN-SMB-012](../controls/index.md#win-smb-012) | Disconnect Clients When Logon Hours Expire | Low |
| [WIN-SMB-013](../controls/index.md#win-smb-013) | Server SPN Target Name Validation Level | Medium |
| [WIN-NTLM-004](../controls/index.md#win-ntlm-004) | Allow LocalSystem to Use Computer Identity for NTLM | Medium |
| [WIN-NTLM-005](../controls/index.md#win-ntlm-005) | Disallow PKU2U Online Identities | Medium |
| [WIN-NTLM-006](../controls/index.md#win-ntlm-006) | Audit Incoming NTLM Traffic | Low |
| [WIN-NTLM-007](../controls/index.md#win-ntlm-007) | Audit Outgoing NTLM Traffic to Remote Servers | Low |
| [WIN-LSA-018](../controls/index.md#win-lsa-018) | Do Not Store Passwords and Credentials for Network Authentication | High |
| [WIN-LOGON-007](../controls/index.md#win-logon-007) | Do Not Allow System to Be Shut Down Without Logging On | Low |
| [WIN-LSA-019](../controls/index.md#win-lsa-019) | Require Case Insensitivity for Non-Windows Subsystems | Low |
| [WIN-AUD-021](../controls/index.md#win-aud-021) | Force Audit Policy Subcategory Settings | Medium |
| [WIN-PRINT-003](../controls/index.md#win-print-003) | Prevent Users From Installing Printer Drivers | Medium |
| [WIN-ACCT-002](../controls/index.md#win-acct-002) | Guest Account Disabled | Medium |
| [WIN-ACCT-003](../controls/index.md#win-acct-003) | Force Logoff When Logon Hours Expire | Low |
| [WIN-UAC-008](../controls/index.md#win-uac-008) | Admin Approval Mode for the Built-in Administrator | Medium |
| [WIN-UAC-009](../controls/index.md#win-uac-009) | Virtualize File and Registry Write Failures to Per-User Locations | Low |
| [WIN-LOGON-008](../controls/index.md#win-logon-008) | Require Domain Controller Authentication to Unlock Workstation | Medium |
| [WIN-AUD-022](../controls/index.md#win-aud-022) | Audit Other Account Management Events | Medium |
| [WIN-AUD-023](../controls/index.md#win-aud-023) | Audit File Share | Medium |
| [WIN-AUD-024](../controls/index.md#win-aud-024) | Audit Authorization Policy Change | Medium |
| [WIN-AUD-025](../controls/index.md#win-aud-025) | Audit Other Policy Change Events | Low |
| [WIN-AUD-026](../controls/index.md#win-aud-026) | Audit IPsec Driver | Medium |
| [WIN-AUD-027](../controls/index.md#win-aud-027) | Audit Other System Events | Low |
| [WIN-AUD-028](../controls/index.md#win-aud-028) | Audit Security State Change | Medium |
| [WIN-AUD-029](../controls/index.md#win-aud-029) | Audit Security System Extension | Medium |
| [WIN-EVTLOG-001](../controls/index.md#win-evtlog-001) | Application Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-EVTLOG-002](../controls/index.md#win-evtlog-002) | Application Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-003](../controls/index.md#win-evtlog-003) | Security Event Log Maximum Size (>= 192 MB) | High |
| [WIN-EVTLOG-004](../controls/index.md#win-evtlog-004) | Security Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-005](../controls/index.md#win-evtlog-005) | Setup Event Log Maximum Size (>= 32 MB) | Low |
| [WIN-EVTLOG-006](../controls/index.md#win-evtlog-006) | Setup Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-007](../controls/index.md#win-evtlog-007) | System Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-EVTLOG-008](../controls/index.md#win-evtlog-008) | System Event Log Retention (Overwrite as Needed) | Low |
| [WIN-AUD-030](../controls/index.md#win-aud-030) | Include Command Line in Process Creation Events | Medium |
| [WIN-CREDDEL-001](../controls/index.md#win-creddel-001) | Encryption Oracle Remediation (Force Updated Clients) | High |
| [WIN-CREDDEL-002](../controls/index.md#win-creddel-002) | Remote Host Allows Delegation of Non-Exportable Credentials | Medium |
| [WIN-ELAM-001](../controls/index.md#win-elam-001) | Boot-Start Driver Initialization Policy | Medium |
| [WIN-GPO-001](../controls/index.md#win-gpo-001) | Registry Policy Processing: Apply During Background Refresh | Low |
| [WIN-GPO-002](../controls/index.md#win-gpo-002) | Registry Policy Processing: Process Even If Unchanged | Low |
| [WIN-GPO-003](../controls/index.md#win-gpo-003) | Disable Continue Experiences (Connected Devices Platform) | Low |
| [WIN-INET-001](../controls/index.md#win-inet-001) | Turn Off Downloading of Print Drivers Over HTTP | Low |
| [WIN-INET-002](../controls/index.md#win-inet-002) | Turn Off Printing Over HTTP | Low |
| [WIN-INET-003](../controls/index.md#win-inet-003) | Turn Off Windows Error Reporting | Low |
| [WIN-INET-004](../controls/index.md#win-inet-004) | Turn Off Windows Customer Experience Improvement Program | Low |
| [WIN-INET-005](../controls/index.md#win-inet-005) | Turn Off Internet Download for Web Publishing and Online Ordering | Low |
| [WIN-INET-006](../controls/index.md#win-inet-006) | Turn Off Internet Connection Wizard If URL Connection | Low |
| [WIN-INET-007](../controls/index.md#win-inet-007) | Turn Off Search Companion Content File Updates | Low |
| [WIN-LOGON-009](../controls/index.md#win-logon-009) | Do Not Enumerate Connected Users on Domain-Joined Computers | Medium |
| [WIN-LOGON-010](../controls/index.md#win-logon-010) | Do Not Enumerate Local Users on Domain-Joined Computers | Medium |
| [WIN-LOGON-011](../controls/index.md#win-logon-011) | Block User From Showing Account Details on Sign-In | Low |
| [WIN-LOGON-012](../controls/index.md#win-logon-012) | Do Not Display Network Selection UI | Low |
| [WIN-LOGON-013](../controls/index.md#win-logon-013) | Turn Off App Notifications on the Lock Screen | Low |
| [WIN-LOGON-014](../controls/index.md#win-logon-014) | Disable Convenience PIN Sign-In | Medium |
| [WIN-RA-001](../controls/index.md#win-ra-001) | Disable Solicited Remote Assistance | Medium |
| [WIN-RA-002](../controls/index.md#win-ra-002) | Disable Offer (Unsolicited) Remote Assistance | Medium |
| [WIN-RPC-001](../controls/index.md#win-rpc-001) | Restrict Unauthenticated RPC Clients | Medium |
| [WIN-RPC-002](../controls/index.md#win-rpc-002) | Enable RPC Endpoint Mapper Client Authentication | Medium |
| [WIN-CREDUI-001](../controls/index.md#win-credui-001) | Do Not Display the Password Reveal Button | Low |
| [WIN-CREDUI-002](../controls/index.md#win-credui-002) | Do Not Enumerate Administrator Accounts on Elevation | Medium |
| [WIN-CREDUI-003](../controls/index.md#win-credui-003) | Prevent Use of Security Questions for Local Accounts | Low |
| [WIN-TELEM-001](../controls/index.md#win-telem-001) | Limit Diagnostic Data to Required or Less | Low |
| [WIN-TELEM-002](../controls/index.md#win-telem-002) | Disable OneSettings Downloads | Low |
| [WIN-TELEM-003](../controls/index.md#win-telem-003) | Do Not Show Feedback Notifications | Low |
| [WIN-TELEM-004](../controls/index.md#win-telem-004) | Enable OneSettings Auditing | Low |
| [WIN-TELEM-005](../controls/index.md#win-telem-005) | Disable Windows Insider Preview Builds | Medium |
| [WIN-CLOUD-001](../controls/index.md#win-cloud-001) | Turn Off Microsoft Consumer Experiences | Low |
| [WIN-SMARTSCREEN-001](../controls/index.md#win-smartscreen-001) | Configure Windows Defender SmartScreen | Medium |
| [WIN-RDP-010](../controls/index.md#win-rdp-010) | Disable RDP COM Port Redirection | Low |
| [WIN-RDP-011](../controls/index.md#win-rdp-011) | Disable RDP LPT Port Redirection | Low |
| [WIN-RDP-012](../controls/index.md#win-rdp-012) | Disable RDP Plug and Play Device Redirection | Low |
| [WIN-RDP-013](../controls/index.md#win-rdp-013) | Require Secure RPC for Remote Desktop | Medium |
| [WIN-RDP-014](../controls/index.md#win-rdp-014) | Use Temporary Folders Per RDP Session | Low |
| [WIN-WINRM-004](../controls/index.md#win-winrm-004) | Disable WinRM Service Basic Authentication | Medium |
| [WIN-WINRM-005](../controls/index.md#win-winrm-005) | Disallow WinRM Storing RunAs Credentials | Medium |
| [WIN-WINRM-006](../controls/index.md#win-winrm-006) | Disallow WinRM Client Unencrypted Traffic | Medium |
| [WIN-WINRS-001](../controls/index.md#win-winrs-001) | Disable Windows Remote Shell Access | Medium |
| [WIN-AUTORUN-002](../controls/index.md#win-autorun-002) | Disallow Autoplay for Non-Volume Devices | Medium |
| [WIN-AUTORUN-003](../controls/index.md#win-autorun-003) | Set Default AutoRun Behavior to Do Not Execute | Medium |
| [WIN-INSTALL-002](../controls/index.md#win-install-002) | Disable User Control Over Windows Installer | Medium |
| [WIN-LOGON-015](../controls/index.md#win-logon-015) | Disable Automatic Restart Sign-On (ARSO) | Medium |
| [WIN-DEF-016](../controls/index.md#win-def-016) | Enable Defender File Hash Computation | Low |
| [WIN-NET-008](../controls/index.md#win-net-008) | Hardened UNC Path for SYSVOL | High |
| [WIN-NET-009](../controls/index.md#win-net-009) | Hardened UNC Path for NETLOGON | High |
| [WIN-NET-010](../controls/index.md#win-net-010) | Disable Font Providers | Low |
| [WIN-NET-011](../controls/index.md#win-net-011) | Turn Off Smart Multi-Homed Name Resolution | Medium |
| [WIN-NET-012](../controls/index.md#win-net-012) | Prohibit Installation of Network Bridge | Low |
| [WIN-NET-013](../controls/index.md#win-net-013) | Prohibit Internet Connection Sharing | Low |
| [WIN-NET-014](../controls/index.md#win-net-014) | Require Domain Users to Elevate When Setting Network Location | Low |
| [WIN-NET-015](../controls/index.md#win-net-015) | Minimize Simultaneous Internet and Domain Connections | Low |
| [WIN-NET-016](../controls/index.md#win-net-016) | Prohibit Non-Domain Networks When on Domain Network | Low |
| [WIN-NET-017](../controls/index.md#win-net-017) | Disable Windows Connect Now Registrars | Low |
| [WIN-NET-018](../controls/index.md#win-net-018) | Prohibit Access of Windows Connect Now Wizards | Low |
| [WIN-NET-019](../controls/index.md#win-net-019) | Turn Off Link-Layer Topology Mapper I/O Driver | Low |
| [WIN-NET-020](../controls/index.md#win-net-020) | Turn Off Link-Layer Topology Responder Driver | Low |
| [WIN-NET-021](../controls/index.md#win-net-021) | TCP Maximum Data Retransmissions (IPv4) | Low |
| [WIN-NET-022](../controls/index.md#win-net-022) | TCP Maximum Data Retransmissions (IPv6) | Low |
| [WIN-NET-023](../controls/index.md#win-net-023) | TCP Keep-Alive Time | Low |
| [WIN-NET-024](../controls/index.md#win-net-024) | Disable Dead Gateway Detection | Low |
| [WIN-EVTLOG-009](../controls/index.md#win-evtlog-009) | Security Log Near-Capacity Warning Threshold | Low |
| [WIN-LOGON-016](../controls/index.md#win-logon-016) | Screen Saver Grace Period | Low |
| [WIN-SCRSVR-001](../controls/index.md#win-scrsvr-001) | Enable Screen Saver (Default Profile) | Low |
| [WIN-SCRSVR-002](../controls/index.md#win-scrsvr-002) | Password Protect the Screen Saver (Default Profile) | Medium |
| [WIN-SCRSVR-003](../controls/index.md#win-scrsvr-003) | Screen Saver Timeout (Default Profile) | Low |
| [WIN-LOGON-017](../controls/index.md#win-logon-017) | Turn Off Toast Notifications on the Lock Screen (Default Profile) | Low |
| [WIN-DEF-017](../controls/index.md#win-def-017) | Notify Antivirus When Opening Attachments (Default Profile) | Medium |
| [WIN-LOGON-018](../controls/index.md#win-logon-018) | Logon Legal Notice Text | Low |
| [WIN-LOGON-019](../controls/index.md#win-logon-019) | Logon Legal Notice Title | Low |

## CloudInfra Secure Essential - Essential tier

Baseline of essential hardening controls suitable for any Windows Server workload.

**ID:** `CloudInfraSecure-Essential` &nbsp; **Recommended for:** Any Windows Server workload

**Controls:** 18 &nbsp; **High/Critical:** 15 &nbsp; **Medium:** 1 &nbsp; **Low:** 2 &nbsp; **Require reboot:** 5

**Supported OS:** WindowsServer2022, WindowsServer2025

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
| [WIN-LOGON-018](../controls/index.md#win-logon-018) | Logon Legal Notice Text | Low |
| [WIN-LOGON-019](../controls/index.md#win-logon-019) | Logon Legal Notice Title | Low |
| [WIN-SVC-002](../controls/index.md#win-svc-002) | Disable Print Spooler Service | Medium |

## CloudInfra Secure IIS Web Server - Role tier

Baseline for Internet Information Services (IIS) web servers.

**ID:** `CloudInfraSecure-IISWebServer` &nbsp; **Recommended for:** IIS web servers

**Controls:** 104 &nbsp; **High/Critical:** 32 &nbsp; **Medium:** 57 &nbsp; **Low:** 15 &nbsp; **Require reboot:** 14

**Supported OS:** WindowsServer2022, WindowsServer2025

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
| [WIN-URA-029](../controls/index.md#win-ura-029) | Lock Pages in Memory = No One | Medium |
| [WIN-URA-035](../controls/index.md#win-ura-035) | Enable Accounts to Be Trusted for Delegation = No One | High |
| [WIN-URA-036](../controls/index.md#win-ura-036) | Obtain an Impersonation Token for Another User = No One | Medium |
| [WIN-URA-037](../controls/index.md#win-ura-037) | Modify an Object Label = No One | Low |
| [WIN-URA-038](../controls/index.md#win-ura-038) | Synchronize Directory Service Data = No One | Medium |
| [WIN-SMB-009](../controls/index.md#win-smb-009) | Digitally Sign Client Communications (If Server Agrees) | Low |
| [WIN-SMB-010](../controls/index.md#win-smb-010) | Digitally Sign Server Communications (If Client Agrees) | Low |
| [WIN-SMB-013](../controls/index.md#win-smb-013) | Server SPN Target Name Validation Level | Medium |
| [WIN-LSA-018](../controls/index.md#win-lsa-018) | Do Not Store Passwords and Credentials for Network Authentication | High |
| [WIN-PRINT-003](../controls/index.md#win-print-003) | Prevent Users From Installing Printer Drivers | Medium |
| [WIN-ACCT-002](../controls/index.md#win-acct-002) | Guest Account Disabled | Medium |
| [WIN-AUD-023](../controls/index.md#win-aud-023) | Audit File Share | Medium |
| [WIN-EVTLOG-001](../controls/index.md#win-evtlog-001) | Application Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-EVTLOG-003](../controls/index.md#win-evtlog-003) | Security Event Log Maximum Size (>= 192 MB) | High |
| [WIN-EVTLOG-007](../controls/index.md#win-evtlog-007) | System Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-AUD-029](../controls/index.md#win-aud-029) | Audit Security System Extension | Medium |
| [WIN-AUD-030](../controls/index.md#win-aud-030) | Include Command Line in Process Creation Events | Medium |
| [WIN-CREDDEL-001](../controls/index.md#win-creddel-001) | Encryption Oracle Remediation (Force Updated Clients) | High |
| [WIN-INET-001](../controls/index.md#win-inet-001) | Turn Off Downloading of Print Drivers Over HTTP | Low |
| [WIN-INET-002](../controls/index.md#win-inet-002) | Turn Off Printing Over HTTP | Low |
| [WIN-RPC-001](../controls/index.md#win-rpc-001) | Restrict Unauthenticated RPC Clients | Medium |
| [WIN-RA-001](../controls/index.md#win-ra-001) | Disable Solicited Remote Assistance | Medium |
| [WIN-RA-002](../controls/index.md#win-ra-002) | Disable Offer (Unsolicited) Remote Assistance | Medium |
| [WIN-SMARTSCREEN-001](../controls/index.md#win-smartscreen-001) | Configure Windows Defender SmartScreen | Medium |
| [WIN-WINRM-004](../controls/index.md#win-winrm-004) | Disable WinRM Service Basic Authentication | Medium |
| [WIN-WINRM-005](../controls/index.md#win-winrm-005) | Disallow WinRM Storing RunAs Credentials | Medium |
| [WIN-WINRM-006](../controls/index.md#win-winrm-006) | Disallow WinRM Client Unencrypted Traffic | Medium |
| [WIN-WINRS-001](../controls/index.md#win-winrs-001) | Disable Windows Remote Shell Access | Medium |
| [WIN-DEF-016](../controls/index.md#win-def-016) | Enable Defender File Hash Computation | Low |
| [WIN-AUTORUN-002](../controls/index.md#win-autorun-002) | Disallow Autoplay for Non-Volume Devices | Medium |
| [WIN-NET-008](../controls/index.md#win-net-008) | Hardened UNC Path for SYSVOL | High |
| [WIN-NET-009](../controls/index.md#win-net-009) | Hardened UNC Path for NETLOGON | High |
| [WIN-NET-011](../controls/index.md#win-net-011) | Turn Off Smart Multi-Homed Name Resolution | Medium |
| [WIN-NET-021](../controls/index.md#win-net-021) | TCP Maximum Data Retransmissions (IPv4) | Low |
| [WIN-NET-024](../controls/index.md#win-net-024) | Disable Dead Gateway Detection | Low |
| [WIN-DEF-017](../controls/index.md#win-def-017) | Notify Antivirus When Opening Attachments (Default Profile) | Medium |
| [WIN-LOGON-018](../controls/index.md#win-logon-018) | Logon Legal Notice Text | Low |
| [WIN-LOGON-019](../controls/index.md#win-logon-019) | Logon Legal Notice Title | Low |
| [WIN-SVC-002](../controls/index.md#win-svc-002) | Disable Print Spooler Service | Medium |

## CloudInfra Secure Remote Desktop Server - Role tier

Baseline for Remote Desktop Session Host servers.

**ID:** `CloudInfraSecure-RemoteDesktopServer` &nbsp; **Recommended for:** Remote Desktop Session Hosts

**Controls:** 99 &nbsp; **High/Critical:** 28 &nbsp; **Medium:** 52 &nbsp; **Low:** 19 &nbsp; **Require reboot:** 10

**Supported OS:** WindowsServer2022, WindowsServer2025

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
| [WIN-URA-029](../controls/index.md#win-ura-029) | Lock Pages in Memory = No One | Medium |
| [WIN-URA-035](../controls/index.md#win-ura-035) | Enable Accounts to Be Trusted for Delegation = No One | High |
| [WIN-URA-036](../controls/index.md#win-ura-036) | Obtain an Impersonation Token for Another User = No One | Medium |
| [WIN-URA-037](../controls/index.md#win-ura-037) | Modify an Object Label = No One | Low |
| [WIN-URA-038](../controls/index.md#win-ura-038) | Synchronize Directory Service Data = No One | Medium |
| [WIN-URA-019](../controls/index.md#win-ura-019) | Allow Log On Through Remote Desktop Services = Administrators, Remote Desktop Users | Medium |
| [WIN-SMB-011](../controls/index.md#win-smb-011) | Idle Time Required Before Suspending an SMB Session (15 min) | Low |
| [WIN-LSA-018](../controls/index.md#win-lsa-018) | Do Not Store Passwords and Credentials for Network Authentication | High |
| [WIN-UAC-008](../controls/index.md#win-uac-008) | Admin Approval Mode for the Built-in Administrator | Medium |
| [WIN-ACCT-002](../controls/index.md#win-acct-002) | Guest Account Disabled | Medium |
| [WIN-PRINT-003](../controls/index.md#win-print-003) | Prevent Users From Installing Printer Drivers | Medium |
| [WIN-AUD-023](../controls/index.md#win-aud-023) | Audit File Share | Medium |
| [WIN-EVTLOG-003](../controls/index.md#win-evtlog-003) | Security Event Log Maximum Size (>= 192 MB) | High |
| [WIN-EVTLOG-007](../controls/index.md#win-evtlog-007) | System Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-AUD-028](../controls/index.md#win-aud-028) | Audit Security State Change | Medium |
| [WIN-AUD-029](../controls/index.md#win-aud-029) | Audit Security System Extension | Medium |
| [WIN-CREDDEL-001](../controls/index.md#win-creddel-001) | Encryption Oracle Remediation (Force Updated Clients) | High |
| [WIN-CREDDEL-002](../controls/index.md#win-creddel-002) | Remote Host Allows Delegation of Non-Exportable Credentials | Medium |
| [WIN-RA-001](../controls/index.md#win-ra-001) | Disable Solicited Remote Assistance | Medium |
| [WIN-RA-002](../controls/index.md#win-ra-002) | Disable Offer (Unsolicited) Remote Assistance | Medium |
| [WIN-LOGON-009](../controls/index.md#win-logon-009) | Do Not Enumerate Connected Users on Domain-Joined Computers | Medium |
| [WIN-RDP-010](../controls/index.md#win-rdp-010) | Disable RDP COM Port Redirection | Low |
| [WIN-RDP-011](../controls/index.md#win-rdp-011) | Disable RDP LPT Port Redirection | Low |
| [WIN-RDP-012](../controls/index.md#win-rdp-012) | Disable RDP Plug and Play Device Redirection | Low |
| [WIN-RDP-013](../controls/index.md#win-rdp-013) | Require Secure RPC for Remote Desktop | Medium |
| [WIN-RDP-014](../controls/index.md#win-rdp-014) | Use Temporary Folders Per RDP Session | Low |
| [WIN-SMARTSCREEN-001](../controls/index.md#win-smartscreen-001) | Configure Windows Defender SmartScreen | Medium |
| [WIN-SCRSVR-001](../controls/index.md#win-scrsvr-001) | Enable Screen Saver (Default Profile) | Low |
| [WIN-SCRSVR-002](../controls/index.md#win-scrsvr-002) | Password Protect the Screen Saver (Default Profile) | Medium |
| [WIN-SCRSVR-003](../controls/index.md#win-scrsvr-003) | Screen Saver Timeout (Default Profile) | Low |
| [WIN-LOGON-016](../controls/index.md#win-logon-016) | Screen Saver Grace Period | Low |
| [WIN-LOGON-017](../controls/index.md#win-logon-017) | Turn Off Toast Notifications on the Lock Screen (Default Profile) | Low |
| [WIN-DEF-017](../controls/index.md#win-def-017) | Notify Antivirus When Opening Attachments (Default Profile) | Medium |
| [WIN-LOGON-018](../controls/index.md#win-logon-018) | Logon Legal Notice Text | Low |
| [WIN-LOGON-019](../controls/index.md#win-logon-019) | Logon Legal Notice Title | Low |

## CloudInfra Secure SQL Server - Role tier

Baseline for Microsoft SQL Server hosts.

**ID:** `CloudInfraSecure-SQLServer` &nbsp; **Recommended for:** Microsoft SQL Server hosts

**Controls:** 94 &nbsp; **High/Critical:** 32 &nbsp; **Medium:** 51 &nbsp; **Low:** 11 &nbsp; **Require reboot:** 16

**Supported OS:** WindowsServer2022, WindowsServer2025

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
| [WIN-URA-029](../controls/index.md#win-ura-029) | Lock Pages in Memory = No One | Medium |
| [WIN-URA-035](../controls/index.md#win-ura-035) | Enable Accounts to Be Trusted for Delegation = No One | High |
| [WIN-URA-036](../controls/index.md#win-ura-036) | Obtain an Impersonation Token for Another User = No One | Medium |
| [WIN-URA-037](../controls/index.md#win-ura-037) | Modify an Object Label = No One | Low |
| [WIN-URA-038](../controls/index.md#win-ura-038) | Synchronize Directory Service Data = No One | Medium |
| [WIN-LSA-017](../controls/index.md#win-lsa-017) | Require Strong (Windows 2000 or Later) Session Key | Medium |
| [WIN-LSA-018](../controls/index.md#win-lsa-018) | Do Not Store Passwords and Credentials for Network Authentication | High |
| [WIN-NTLM-004](../controls/index.md#win-ntlm-004) | Allow LocalSystem to Use Computer Identity for NTLM | Medium |
| [WIN-AUD-021](../controls/index.md#win-aud-021) | Force Audit Policy Subcategory Settings | Medium |
| [WIN-ACCT-002](../controls/index.md#win-acct-002) | Guest Account Disabled | Medium |
| [WIN-AUD-023](../controls/index.md#win-aud-023) | Audit File Share | Medium |
| [WIN-EVTLOG-003](../controls/index.md#win-evtlog-003) | Security Event Log Maximum Size (>= 192 MB) | High |
| [WIN-EVTLOG-004](../controls/index.md#win-evtlog-004) | Security Event Log Retention (Overwrite as Needed) | Low |
| [WIN-AUD-024](../controls/index.md#win-aud-024) | Audit Authorization Policy Change | Medium |
| [WIN-AUD-029](../controls/index.md#win-aud-029) | Audit Security System Extension | Medium |
| [WIN-AUD-030](../controls/index.md#win-aud-030) | Include Command Line in Process Creation Events | Medium |
| [WIN-CREDDEL-001](../controls/index.md#win-creddel-001) | Encryption Oracle Remediation (Force Updated Clients) | High |
| [WIN-CREDDEL-002](../controls/index.md#win-creddel-002) | Remote Host Allows Delegation of Non-Exportable Credentials | Medium |
| [WIN-RPC-001](../controls/index.md#win-rpc-001) | Restrict Unauthenticated RPC Clients | Medium |
| [WIN-RPC-002](../controls/index.md#win-rpc-002) | Enable RPC Endpoint Mapper Client Authentication | Medium |
| [WIN-WINRM-004](../controls/index.md#win-winrm-004) | Disable WinRM Service Basic Authentication | Medium |
| [WIN-WINRM-005](../controls/index.md#win-winrm-005) | Disallow WinRM Storing RunAs Credentials | Medium |
| [WIN-WINRM-006](../controls/index.md#win-winrm-006) | Disallow WinRM Client Unencrypted Traffic | Medium |
| [WIN-WINRS-001](../controls/index.md#win-winrs-001) | Disable Windows Remote Shell Access | Medium |
| [WIN-DEF-016](../controls/index.md#win-def-016) | Enable Defender File Hash Computation | Low |
| [WIN-NET-008](../controls/index.md#win-net-008) | Hardened UNC Path for SYSVOL | High |
| [WIN-NET-009](../controls/index.md#win-net-009) | Hardened UNC Path for NETLOGON | High |
| [WIN-NET-021](../controls/index.md#win-net-021) | TCP Maximum Data Retransmissions (IPv4) | Low |
| [WIN-NET-022](../controls/index.md#win-net-022) | TCP Maximum Data Retransmissions (IPv6) | Low |
| [WIN-EVTLOG-009](../controls/index.md#win-evtlog-009) | Security Log Near-Capacity Warning Threshold | Low |
| [WIN-LOGON-018](../controls/index.md#win-logon-018) | Logon Legal Notice Text | Low |
| [WIN-LOGON-019](../controls/index.md#win-logon-019) | Logon Legal Notice Title | Low |
| [WIN-SVC-002](../controls/index.md#win-svc-002) | Disable Print Spooler Service | Medium |

## CloudInfra Secure Standard - Standard tier

Recommended baseline adding logging, auditing and access hardening on top of Essential.

**ID:** `CloudInfraSecure-Standard` &nbsp; **Recommended for:** General-purpose member servers

**Controls:** 275 &nbsp; **High/Critical:** 40 &nbsp; **Medium:** 150 &nbsp; **Low:** 85 &nbsp; **Require reboot:** 15

**Supported OS:** WindowsServer2022, WindowsServer2025

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
| [WIN-URA-017](../controls/index.md#win-ura-017) | Access This Computer From the Network = Administrators, Authenticated Users | High |
| [WIN-URA-018](../controls/index.md#win-ura-018) | Allow Log On Locally = Administrators | Medium |
| [WIN-URA-019](../controls/index.md#win-ura-019) | Allow Log On Through Remote Desktop Services = Administrators, Remote Desktop Users | Medium |
| [WIN-URA-020](../controls/index.md#win-ura-020) | Back Up Files and Directories = Administrators | Medium |
| [WIN-URA-021](../controls/index.md#win-ura-021) | Restore Files and Directories = Administrators | Medium |
| [WIN-URA-022](../controls/index.md#win-ura-022) | Change the System Time = Administrators, Local Service | Medium |
| [WIN-URA-023](../controls/index.md#win-ura-023) | Change the Time Zone = Administrators, Local Service, Users | Low |
| [WIN-URA-024](../controls/index.md#win-ura-024) | Create a Pagefile = Administrators | Low |
| [WIN-URA-025](../controls/index.md#win-ura-025) | Create Global Objects = Administrators and Service Accounts | Medium |
| [WIN-URA-026](../controls/index.md#win-ura-026) | Create Symbolic Links = Administrators | Medium |
| [WIN-URA-027](../controls/index.md#win-ura-027) | Adjust Memory Quotas for a Process = Administrators and Service Accounts | Low |
| [WIN-URA-028](../controls/index.md#win-ura-028) | Increase Scheduling Priority = Administrators, Window Manager | Low |
| [WIN-URA-029](../controls/index.md#win-ura-029) | Lock Pages in Memory = No One | Medium |
| [WIN-URA-030](../controls/index.md#win-ura-030) | Perform Volume Maintenance Tasks = Administrators | Medium |
| [WIN-URA-031](../controls/index.md#win-ura-031) | Profile Single Process = Administrators | Low |
| [WIN-URA-032](../controls/index.md#win-ura-032) | Replace a Process Level Token = Local Service, Network Service | Medium |
| [WIN-URA-033](../controls/index.md#win-ura-033) | Shut Down the System = Administrators | Low |
| [WIN-URA-034](../controls/index.md#win-ura-034) | Modify Firmware Environment Values = Administrators | Medium |
| [WIN-URA-035](../controls/index.md#win-ura-035) | Enable Accounts to Be Trusted for Delegation = No One | High |
| [WIN-URA-036](../controls/index.md#win-ura-036) | Obtain an Impersonation Token for Another User = No One | Medium |
| [WIN-URA-037](../controls/index.md#win-ura-037) | Modify an Object Label = No One | Low |
| [WIN-URA-038](../controls/index.md#win-ura-038) | Synchronize Directory Service Data = No One | Medium |
| [WIN-URA-039](../controls/index.md#win-ura-039) | Profile System Performance = Administrators, WdiServiceHost | Low |
| [WIN-LSA-013](../controls/index.md#win-lsa-013) | Digitally Encrypt Secure Channel Data (When Possible) | Medium |
| [WIN-LSA-014](../controls/index.md#win-lsa-014) | Digitally Sign Secure Channel Data (When Possible) | Medium |
| [WIN-LSA-015](../controls/index.md#win-lsa-015) | Do Not Disable Machine Account Password Changes | Medium |
| [WIN-LSA-016](../controls/index.md#win-lsa-016) | Maximum Machine Account Password Age (30 Days) | Low |
| [WIN-LSA-017](../controls/index.md#win-lsa-017) | Require Strong (Windows 2000 or Later) Session Key | Medium |
| [WIN-SMB-009](../controls/index.md#win-smb-009) | Digitally Sign Client Communications (If Server Agrees) | Low |
| [WIN-SMB-010](../controls/index.md#win-smb-010) | Digitally Sign Server Communications (If Client Agrees) | Low |
| [WIN-SMB-011](../controls/index.md#win-smb-011) | Idle Time Required Before Suspending an SMB Session (15 min) | Low |
| [WIN-SMB-012](../controls/index.md#win-smb-012) | Disconnect Clients When Logon Hours Expire | Low |
| [WIN-SMB-013](../controls/index.md#win-smb-013) | Server SPN Target Name Validation Level | Medium |
| [WIN-NTLM-004](../controls/index.md#win-ntlm-004) | Allow LocalSystem to Use Computer Identity for NTLM | Medium |
| [WIN-NTLM-005](../controls/index.md#win-ntlm-005) | Disallow PKU2U Online Identities | Medium |
| [WIN-NTLM-006](../controls/index.md#win-ntlm-006) | Audit Incoming NTLM Traffic | Low |
| [WIN-NTLM-007](../controls/index.md#win-ntlm-007) | Audit Outgoing NTLM Traffic to Remote Servers | Low |
| [WIN-LSA-018](../controls/index.md#win-lsa-018) | Do Not Store Passwords and Credentials for Network Authentication | High |
| [WIN-LOGON-007](../controls/index.md#win-logon-007) | Do Not Allow System to Be Shut Down Without Logging On | Low |
| [WIN-LSA-019](../controls/index.md#win-lsa-019) | Require Case Insensitivity for Non-Windows Subsystems | Low |
| [WIN-AUD-021](../controls/index.md#win-aud-021) | Force Audit Policy Subcategory Settings | Medium |
| [WIN-PRINT-003](../controls/index.md#win-print-003) | Prevent Users From Installing Printer Drivers | Medium |
| [WIN-ACCT-002](../controls/index.md#win-acct-002) | Guest Account Disabled | Medium |
| [WIN-ACCT-003](../controls/index.md#win-acct-003) | Force Logoff When Logon Hours Expire | Low |
| [WIN-UAC-008](../controls/index.md#win-uac-008) | Admin Approval Mode for the Built-in Administrator | Medium |
| [WIN-UAC-009](../controls/index.md#win-uac-009) | Virtualize File and Registry Write Failures to Per-User Locations | Low |
| [WIN-AUD-022](../controls/index.md#win-aud-022) | Audit Other Account Management Events | Medium |
| [WIN-AUD-023](../controls/index.md#win-aud-023) | Audit File Share | Medium |
| [WIN-AUD-024](../controls/index.md#win-aud-024) | Audit Authorization Policy Change | Medium |
| [WIN-AUD-025](../controls/index.md#win-aud-025) | Audit Other Policy Change Events | Low |
| [WIN-AUD-026](../controls/index.md#win-aud-026) | Audit IPsec Driver | Medium |
| [WIN-AUD-027](../controls/index.md#win-aud-027) | Audit Other System Events | Low |
| [WIN-AUD-028](../controls/index.md#win-aud-028) | Audit Security State Change | Medium |
| [WIN-AUD-029](../controls/index.md#win-aud-029) | Audit Security System Extension | Medium |
| [WIN-EVTLOG-001](../controls/index.md#win-evtlog-001) | Application Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-EVTLOG-002](../controls/index.md#win-evtlog-002) | Application Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-003](../controls/index.md#win-evtlog-003) | Security Event Log Maximum Size (>= 192 MB) | High |
| [WIN-EVTLOG-004](../controls/index.md#win-evtlog-004) | Security Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-005](../controls/index.md#win-evtlog-005) | Setup Event Log Maximum Size (>= 32 MB) | Low |
| [WIN-EVTLOG-006](../controls/index.md#win-evtlog-006) | Setup Event Log Retention (Overwrite as Needed) | Low |
| [WIN-EVTLOG-007](../controls/index.md#win-evtlog-007) | System Event Log Maximum Size (>= 32 MB) | Medium |
| [WIN-EVTLOG-008](../controls/index.md#win-evtlog-008) | System Event Log Retention (Overwrite as Needed) | Low |
| [WIN-AUD-030](../controls/index.md#win-aud-030) | Include Command Line in Process Creation Events | Medium |
| [WIN-CREDDEL-001](../controls/index.md#win-creddel-001) | Encryption Oracle Remediation (Force Updated Clients) | High |
| [WIN-CREDDEL-002](../controls/index.md#win-creddel-002) | Remote Host Allows Delegation of Non-Exportable Credentials | Medium |
| [WIN-ELAM-001](../controls/index.md#win-elam-001) | Boot-Start Driver Initialization Policy | Medium |
| [WIN-GPO-001](../controls/index.md#win-gpo-001) | Registry Policy Processing: Apply During Background Refresh | Low |
| [WIN-GPO-002](../controls/index.md#win-gpo-002) | Registry Policy Processing: Process Even If Unchanged | Low |
| [WIN-GPO-003](../controls/index.md#win-gpo-003) | Disable Continue Experiences (Connected Devices Platform) | Low |
| [WIN-INET-001](../controls/index.md#win-inet-001) | Turn Off Downloading of Print Drivers Over HTTP | Low |
| [WIN-INET-002](../controls/index.md#win-inet-002) | Turn Off Printing Over HTTP | Low |
| [WIN-INET-003](../controls/index.md#win-inet-003) | Turn Off Windows Error Reporting | Low |
| [WIN-INET-004](../controls/index.md#win-inet-004) | Turn Off Windows Customer Experience Improvement Program | Low |
| [WIN-INET-005](../controls/index.md#win-inet-005) | Turn Off Internet Download for Web Publishing and Online Ordering | Low |
| [WIN-INET-006](../controls/index.md#win-inet-006) | Turn Off Internet Connection Wizard If URL Connection | Low |
| [WIN-INET-007](../controls/index.md#win-inet-007) | Turn Off Search Companion Content File Updates | Low |
| [WIN-LOGON-009](../controls/index.md#win-logon-009) | Do Not Enumerate Connected Users on Domain-Joined Computers | Medium |
| [WIN-LOGON-010](../controls/index.md#win-logon-010) | Do Not Enumerate Local Users on Domain-Joined Computers | Medium |
| [WIN-LOGON-011](../controls/index.md#win-logon-011) | Block User From Showing Account Details on Sign-In | Low |
| [WIN-LOGON-012](../controls/index.md#win-logon-012) | Do Not Display Network Selection UI | Low |
| [WIN-LOGON-013](../controls/index.md#win-logon-013) | Turn Off App Notifications on the Lock Screen | Low |
| [WIN-LOGON-014](../controls/index.md#win-logon-014) | Disable Convenience PIN Sign-In | Medium |
| [WIN-RA-001](../controls/index.md#win-ra-001) | Disable Solicited Remote Assistance | Medium |
| [WIN-RA-002](../controls/index.md#win-ra-002) | Disable Offer (Unsolicited) Remote Assistance | Medium |
| [WIN-RPC-001](../controls/index.md#win-rpc-001) | Restrict Unauthenticated RPC Clients | Medium |
| [WIN-RPC-002](../controls/index.md#win-rpc-002) | Enable RPC Endpoint Mapper Client Authentication | Medium |
| [WIN-CREDUI-001](../controls/index.md#win-credui-001) | Do Not Display the Password Reveal Button | Low |
| [WIN-CREDUI-002](../controls/index.md#win-credui-002) | Do Not Enumerate Administrator Accounts on Elevation | Medium |
| [WIN-CREDUI-003](../controls/index.md#win-credui-003) | Prevent Use of Security Questions for Local Accounts | Low |
| [WIN-TELEM-001](../controls/index.md#win-telem-001) | Limit Diagnostic Data to Required or Less | Low |
| [WIN-TELEM-002](../controls/index.md#win-telem-002) | Disable OneSettings Downloads | Low |
| [WIN-TELEM-003](../controls/index.md#win-telem-003) | Do Not Show Feedback Notifications | Low |
| [WIN-TELEM-004](../controls/index.md#win-telem-004) | Enable OneSettings Auditing | Low |
| [WIN-TELEM-005](../controls/index.md#win-telem-005) | Disable Windows Insider Preview Builds | Medium |
| [WIN-CLOUD-001](../controls/index.md#win-cloud-001) | Turn Off Microsoft Consumer Experiences | Low |
| [WIN-SMARTSCREEN-001](../controls/index.md#win-smartscreen-001) | Configure Windows Defender SmartScreen | Medium |
| [WIN-RDP-010](../controls/index.md#win-rdp-010) | Disable RDP COM Port Redirection | Low |
| [WIN-RDP-011](../controls/index.md#win-rdp-011) | Disable RDP LPT Port Redirection | Low |
| [WIN-RDP-012](../controls/index.md#win-rdp-012) | Disable RDP Plug and Play Device Redirection | Low |
| [WIN-RDP-013](../controls/index.md#win-rdp-013) | Require Secure RPC for Remote Desktop | Medium |
| [WIN-RDP-014](../controls/index.md#win-rdp-014) | Use Temporary Folders Per RDP Session | Low |
| [WIN-WINRM-004](../controls/index.md#win-winrm-004) | Disable WinRM Service Basic Authentication | Medium |
| [WIN-WINRM-005](../controls/index.md#win-winrm-005) | Disallow WinRM Storing RunAs Credentials | Medium |
| [WIN-WINRM-006](../controls/index.md#win-winrm-006) | Disallow WinRM Client Unencrypted Traffic | Medium |
| [WIN-WINRS-001](../controls/index.md#win-winrs-001) | Disable Windows Remote Shell Access | Medium |
| [WIN-AUTORUN-002](../controls/index.md#win-autorun-002) | Disallow Autoplay for Non-Volume Devices | Medium |
| [WIN-AUTORUN-003](../controls/index.md#win-autorun-003) | Set Default AutoRun Behavior to Do Not Execute | Medium |
| [WIN-INSTALL-002](../controls/index.md#win-install-002) | Disable User Control Over Windows Installer | Medium |
| [WIN-LOGON-015](../controls/index.md#win-logon-015) | Disable Automatic Restart Sign-On (ARSO) | Medium |
| [WIN-DEF-016](../controls/index.md#win-def-016) | Enable Defender File Hash Computation | Low |
| [WIN-NET-008](../controls/index.md#win-net-008) | Hardened UNC Path for SYSVOL | High |
| [WIN-NET-009](../controls/index.md#win-net-009) | Hardened UNC Path for NETLOGON | High |
| [WIN-NET-010](../controls/index.md#win-net-010) | Disable Font Providers | Low |
| [WIN-NET-011](../controls/index.md#win-net-011) | Turn Off Smart Multi-Homed Name Resolution | Medium |
| [WIN-NET-012](../controls/index.md#win-net-012) | Prohibit Installation of Network Bridge | Low |
| [WIN-NET-013](../controls/index.md#win-net-013) | Prohibit Internet Connection Sharing | Low |
| [WIN-NET-014](../controls/index.md#win-net-014) | Require Domain Users to Elevate When Setting Network Location | Low |
| [WIN-NET-015](../controls/index.md#win-net-015) | Minimize Simultaneous Internet and Domain Connections | Low |
| [WIN-NET-016](../controls/index.md#win-net-016) | Prohibit Non-Domain Networks When on Domain Network | Low |
| [WIN-NET-017](../controls/index.md#win-net-017) | Disable Windows Connect Now Registrars | Low |
| [WIN-NET-018](../controls/index.md#win-net-018) | Prohibit Access of Windows Connect Now Wizards | Low |
| [WIN-NET-019](../controls/index.md#win-net-019) | Turn Off Link-Layer Topology Mapper I/O Driver | Low |
| [WIN-NET-020](../controls/index.md#win-net-020) | Turn Off Link-Layer Topology Responder Driver | Low |
| [WIN-NET-021](../controls/index.md#win-net-021) | TCP Maximum Data Retransmissions (IPv4) | Low |
| [WIN-NET-022](../controls/index.md#win-net-022) | TCP Maximum Data Retransmissions (IPv6) | Low |
| [WIN-NET-023](../controls/index.md#win-net-023) | TCP Keep-Alive Time | Low |
| [WIN-NET-024](../controls/index.md#win-net-024) | Disable Dead Gateway Detection | Low |
| [WIN-EVTLOG-009](../controls/index.md#win-evtlog-009) | Security Log Near-Capacity Warning Threshold | Low |
| [WIN-LOGON-016](../controls/index.md#win-logon-016) | Screen Saver Grace Period | Low |
| [WIN-SCRSVR-001](../controls/index.md#win-scrsvr-001) | Enable Screen Saver (Default Profile) | Low |
| [WIN-SCRSVR-002](../controls/index.md#win-scrsvr-002) | Password Protect the Screen Saver (Default Profile) | Medium |
| [WIN-SCRSVR-003](../controls/index.md#win-scrsvr-003) | Screen Saver Timeout (Default Profile) | Low |
| [WIN-LOGON-017](../controls/index.md#win-logon-017) | Turn Off Toast Notifications on the Lock Screen (Default Profile) | Low |
| [WIN-DEF-017](../controls/index.md#win-def-017) | Notify Antivirus When Opening Attachments (Default Profile) | Medium |
| [WIN-LOGON-018](../controls/index.md#win-logon-018) | Logon Legal Notice Text | Low |
| [WIN-LOGON-019](../controls/index.md#win-logon-019) | Logon Legal Notice Title | Low |
| [WIN-SVC-002](../controls/index.md#win-svc-002) | Disable Print Spooler Service | Medium |

