# Controls

The CloudInfra Secure control library (227 controls). Each control exists once and may be used by many baselines.

!!! note "Compliance disclaimer"
    CloudInfra Secure controls are designed to help organisations implement technical security requirements commonly found in recognised security standards. They do not constitute certification or proof of compliance.

## Coverage summary

Controls tagged **GPO** are delivered through a Group Policy registry value that a domain policy can override; the rest are direct system settings.

<div class="cmpl-toolbar">
  <label for="ctlDelivery"><strong>Filter by delivery:</strong></label>
  <select id="ctlDelivery">
    <option value="__all">All controls (227)</option>
    <option value="gpo">Group Policy-backed (73)</option>
    <option value="direct">Direct system setting (154)</option>
  </select>
  <span class="cmpl-count" id="ctlCount">Showing 227 of 227 controls</span>
</div>

<div class="cmpl-tablewrap" markdown="0">
<table class="cmpl-table" id="ctlTable">
  <thead><tr><th class="cmpl-num">#</th><th>ID</th><th>Name</th><th>Severity</th><th>Category</th><th>Provider</th><th>Delivery</th></tr></thead>
  <tbody>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-acct-001">WIN-ACCT-001</a></td><td>Block Microsoft Accounts</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-acct-002">WIN-ACCT-002</a></td><td>Guest Account Disabled</td><td>Medium</td><td>Access Control</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-acct-003">WIN-ACCT-003</a></td><td>Force Logoff When Logon Hours Expire</td><td>Low</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-001">WIN-ASR-001</a></td><td>ASR: Block Credential Stealing from LSASS</td><td>High</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-002">WIN-ASR-002</a></td><td>ASR: Block Office Apps Creating Child Processes</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-003">WIN-ASR-003</a></td><td>ASR: Block Executable Content from Email and Webmail</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-004">WIN-ASR-004</a></td><td>ASR: Block Obfuscated Scripts</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-005">WIN-ASR-005</a></td><td>ASR: Block Untrusted Processes from USB</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-006">WIN-ASR-006</a></td><td>ASR: Block Process Creation from PSExec and WMI</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-007">WIN-ASR-007</a></td><td>ASR: Advanced Protection Against Ransomware</td><td>High</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-008">WIN-ASR-008</a></td><td>ASR: Block Office Apps Injecting Code into Other Processes</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-009">WIN-ASR-009</a></td><td>ASR: Block Office Apps Creating Executable Content</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-010">WIN-ASR-010</a></td><td>ASR: Block Persistence Through WMI Event Subscription</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-011">WIN-ASR-011</a></td><td>ASR: Block Win32 API Calls from Office Macros</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-012">WIN-ASR-012</a></td><td>ASR: Block Untrusted Executables by Prevalence, Age, or Trust</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-013">WIN-ASR-013</a></td><td>ASR: Block Adobe Reader from Creating Child Processes</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-014">WIN-ASR-014</a></td><td>ASR: Block Webshell Creation for Servers</td><td>High</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-asr-015">WIN-ASR-015</a></td><td>ASR: Block Rebooting Machine in Safe Mode</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-001">WIN-AUD-001</a></td><td>Audit Logon Failures</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-002">WIN-AUD-002</a></td><td>Audit Account Lockout Events</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-003">WIN-AUD-003</a></td><td>Audit Process Creation</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-004">WIN-AUD-004</a></td><td>Audit Credential Validation</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-005">WIN-AUD-005</a></td><td>Audit Security Group Management</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-006">WIN-AUD-006</a></td><td>Audit Special Logon</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-007">WIN-AUD-007</a></td><td>Audit Sensitive Privilege Use</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-008">WIN-AUD-008</a></td><td>Audit System Integrity</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-009">WIN-AUD-009</a></td><td>Audit Logoff</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-010">WIN-AUD-010</a></td><td>Audit Removable Storage</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-011">WIN-AUD-011</a></td><td>Audit Authentication Policy Change</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-012">WIN-AUD-012</a></td><td>Audit User Account Management</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-013">WIN-AUD-013</a></td><td>Audit Computer Account Management</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-014">WIN-AUD-014</a></td><td>Audit Audit Policy Change</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-015">WIN-AUD-015</a></td><td>Audit Other Logon/Logoff Events</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-016">WIN-AUD-016</a></td><td>Audit MPSSVC Rule-Level Policy Change</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-017">WIN-AUD-017</a></td><td>Audit PNP Activity</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-018">WIN-AUD-018</a></td><td>Audit Group Membership</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-019">WIN-AUD-019</a></td><td>Audit Other Object Access Events</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-020">WIN-AUD-020</a></td><td>Audit Detailed File Share</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-021">WIN-AUD-021</a></td><td>Force Audit Policy Subcategory Settings</td><td>Medium</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-022">WIN-AUD-022</a></td><td>Audit Other Account Management Events</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-023">WIN-AUD-023</a></td><td>Audit File Share</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-024">WIN-AUD-024</a></td><td>Audit Authorization Policy Change</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-025">WIN-AUD-025</a></td><td>Audit Other Policy Change Events</td><td>Low</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-026">WIN-AUD-026</a></td><td>Audit IPsec Driver</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-027">WIN-AUD-027</a></td><td>Audit Other System Events</td><td>Low</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-028">WIN-AUD-028</a></td><td>Audit Security State Change</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-aud-029">WIN-AUD-029</a></td><td>Audit Security System Extension</td><td>Medium</td><td>Logging and Monitoring</td><td>AuditPol</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-autorun-001">WIN-AUTORUN-001</a></td><td>Disable AutoRun on All Drives</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-cg-001">WIN-CG-001</a></td><td>Enable Credential Guard</td><td>High</td><td>Credential Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-def-001">WIN-DEF-001</a></td><td>Microsoft Defender Antivirus Enabled</td><td>High</td><td>Endpoint Protection</td><td>Defender</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-002">WIN-DEF-002</a></td><td>Enable Potentially Unwanted Application (PUA) Protection</td><td>High</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-003">WIN-DEF-003</a></td><td>Enable Defender Real-Time Protection</td><td>High</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-004">WIN-DEF-004</a></td><td>Enable Cloud-Delivered Protection</td><td>Medium</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-005">WIN-DEF-005</a></td><td>Enable Network Protection</td><td>Medium</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-006">WIN-DEF-006</a></td><td>Enable Controlled Folder Access</td><td>Medium</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-007">WIN-DEF-007</a></td><td>Scan Removable Drives During Full Scan</td><td>Low</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-008">WIN-DEF-008</a></td><td>Enable Block at First Sight</td><td>Medium</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-009">WIN-DEF-009</a></td><td>Enable Defender Behavior Monitoring</td><td>High</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-010">WIN-DEF-010</a></td><td>Enable Email Scanning</td><td>Medium</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-011">WIN-DEF-011</a></td><td>Enable Archive Scanning</td><td>Medium</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-012">WIN-DEF-012</a></td><td>Scan Mapped Network Drives During Full Scan</td><td>Low</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-013">WIN-DEF-013</a></td><td>Scan Downloaded Files and Attachments</td><td>High</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-014">WIN-DEF-014</a></td><td>Disable Local Admin Merge of Defender Preferences</td><td>Medium</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-def-015">WIN-DEF-015</a></td><td>Enable Real-Time Script Scanning</td><td>Medium</td><td>Endpoint Protection</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-evtlog-001">WIN-EVTLOG-001</a></td><td>Application Event Log Maximum Size (&gt;= 32 MB)</td><td>Medium</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-evtlog-002">WIN-EVTLOG-002</a></td><td>Application Event Log Retention (Overwrite as Needed)</td><td>Low</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-evtlog-003">WIN-EVTLOG-003</a></td><td>Security Event Log Maximum Size (&gt;= 192 MB)</td><td>High</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-evtlog-004">WIN-EVTLOG-004</a></td><td>Security Event Log Retention (Overwrite as Needed)</td><td>Low</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-evtlog-005">WIN-EVTLOG-005</a></td><td>Setup Event Log Maximum Size (&gt;= 32 MB)</td><td>Low</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-evtlog-006">WIN-EVTLOG-006</a></td><td>Setup Event Log Retention (Overwrite as Needed)</td><td>Low</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-evtlog-007">WIN-EVTLOG-007</a></td><td>System Event Log Maximum Size (&gt;= 32 MB)</td><td>Medium</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-evtlog-008">WIN-EVTLOG-008</a></td><td>System Event Log Retention (Overwrite as Needed)</td><td>Low</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-fw-001">WIN-FW-001</a></td><td>Windows Firewall Enabled (All Profiles)</td><td>High</td><td>Host Firewall</td><td>Firewall</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-fw-002">WIN-FW-002</a></td><td>Block Inbound Connections by Default (Domain Profile)</td><td>Medium</td><td>Host Firewall</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-fw-003">WIN-FW-003</a></td><td>Block Inbound Connections by Default (Private Profile)</td><td>Medium</td><td>Host Firewall</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-fw-004">WIN-FW-004</a></td><td>Block Inbound Connections by Default (Public Profile)</td><td>Medium</td><td>Host Firewall</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-fw-005">WIN-FW-005</a></td><td>Log Dropped Packets (Public Profile)</td><td>Low</td><td>Host Firewall</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-install-001">WIN-INSTALL-001</a></td><td>Disable Always Install Elevated</td><td>High</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-krb-001">WIN-KRB-001</a></td><td>Configure Kerberos Encryption Types (AES only)</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ldap-001">WIN-LDAP-001</a></td><td>LDAP Client Signing</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lock-001">WIN-LOCK-001</a></td><td>Account Lockout Threshold</td><td>Medium</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lock-002">WIN-LOCK-002</a></td><td>Account Lockout Duration</td><td>Medium</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lock-003">WIN-LOCK-003</a></td><td>Reset Account Lockout Counter</td><td>Medium</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-logon-001">WIN-LOGON-001</a></td><td>Machine Inactivity Limit</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-logon-002">WIN-LOGON-002</a></td><td>Do Not Display Last Signed-In User</td><td>Low</td><td>Access Control</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-logon-003">WIN-LOGON-003</a></td><td>Limit Number of Cached Logons</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-logon-004">WIN-LOGON-004</a></td><td>Require Ctrl+Alt+Del at Logon</td><td>Low</td><td>Access Control</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-logon-005">WIN-LOGON-005</a></td><td>Smart Card Removal Behavior (Lock Workstation)</td><td>Low</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-logon-006">WIN-LOGON-006</a></td><td>Disable Automatic Logon</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-logon-007">WIN-LOGON-007</a></td><td>Do Not Allow System to Be Shut Down Without Logging On</td><td>Low</td><td>Access Control</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-logon-008">WIN-LOGON-008</a></td><td>Require Domain Controller Authentication to Unlock Workstation</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-001">WIN-LSA-001</a></td><td>Do Not Store LAN Manager Hash</td><td>High</td><td>Credential Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-002">WIN-LSA-002</a></td><td>Restrict Anonymous SID Enumeration</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-003">WIN-LSA-003</a></td><td>Enable LSASS Protection (RunAsPPL)</td><td>High</td><td>Credential Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-004">WIN-LSA-004</a></td><td>Do Not Allow Anonymous Enumeration of SAM Accounts</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-005">WIN-LSA-005</a></td><td>Enable Structured Exception Handling Overwrite Protection (SEHOP)</td><td>Medium</td><td>Exploit Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-006">WIN-LSA-006</a></td><td>Digitally Encrypt or Sign Secure Channel Data (Always)</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-007">WIN-LSA-007</a></td><td>Do Not Apply Everyone Permissions to Anonymous Users</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-008">WIN-LSA-008</a></td><td>Restrict Clients Allowed to Make Remote SAM Calls</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-009">WIN-LSA-009</a></td><td>Limit Local Account Use of Blank Passwords</td><td>High</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-010">WIN-LSA-010</a></td><td>Sharing and Security Model for Local Accounts (Classic)</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-011">WIN-LSA-011</a></td><td>Disallow LocalSystem NULL Session Fallback</td><td>Medium</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-012">WIN-LSA-012</a></td><td>Strengthen Default Permissions of Internal System Objects</td><td>Low</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-013">WIN-LSA-013</a></td><td>Digitally Encrypt Secure Channel Data (When Possible)</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-014">WIN-LSA-014</a></td><td>Digitally Sign Secure Channel Data (When Possible)</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-015">WIN-LSA-015</a></td><td>Do Not Disable Machine Account Password Changes</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-016">WIN-LSA-016</a></td><td>Maximum Machine Account Password Age (30 Days)</td><td>Low</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-017">WIN-LSA-017</a></td><td>Require Strong (Windows 2000 or Later) Session Key</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-018">WIN-LSA-018</a></td><td>Do Not Store Passwords and Credentials for Network Authentication</td><td>High</td><td>Credential Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-lsa-019">WIN-LSA-019</a></td><td>Require Case Insensitivity for Non-Windows Subsystems</td><td>Low</td><td>Access Control</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-net-001">WIN-NET-001</a></td><td>Disable LLMNR</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-net-002">WIN-NET-002</a></td><td>Disable IPv4 Source Routing</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-net-003">WIN-NET-003</a></td><td>Disable ICMP Redirects</td><td>Low</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-net-004">WIN-NET-004</a></td><td>Disable IPv6 Source Routing</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-net-005">WIN-NET-005</a></td><td>Ignore NetBIOS Name Release Requests</td><td>Low</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-net-006">WIN-NET-006</a></td><td>Disable mDNS</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-net-007">WIN-NET-007</a></td><td>Enable Safe DLL Search Mode</td><td>Medium</td><td>Exploit Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ntlm-001">WIN-NTLM-001</a></td><td>LAN Manager Authentication Level (NTLMv2 Only)</td><td>High</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ntlm-002">WIN-NTLM-002</a></td><td>Minimum NTLM Session Security (Clients)</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ntlm-003">WIN-NTLM-003</a></td><td>Minimum NTLM Session Security (Servers)</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ntlm-004">WIN-NTLM-004</a></td><td>Allow LocalSystem to Use Computer Identity for NTLM</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ntlm-005">WIN-NTLM-005</a></td><td>Disallow PKU2U Online Identities</td><td>Medium</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ntlm-006">WIN-NTLM-006</a></td><td>Audit Incoming NTLM Traffic</td><td>Low</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ntlm-007">WIN-NTLM-007</a></td><td>Audit Outgoing NTLM Traffic to Remote Servers</td><td>Low</td><td>Authentication</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-print-001">WIN-PRINT-001</a></td><td>Restrict Point and Print Driver Installation to Administrators</td><td>High</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-print-002">WIN-PRINT-002</a></td><td>Require Elevation for New Point and Print Connections</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-print-003">WIN-PRINT-003</a></td><td>Prevent Users From Installing Printer Drivers</td><td>Medium</td><td>Attack Surface Reduction</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-psl-001">WIN-PSL-001</a></td><td>Enable PowerShell Script Block Logging</td><td>Medium</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-psl-002">WIN-PSL-002</a></td><td>Enable PowerShell Module Logging</td><td>Medium</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-psl-003">WIN-PSL-003</a></td><td>Enable PowerShell Transcription</td><td>Medium</td><td>Logging and Monitoring</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-pwd-001">WIN-PWD-001</a></td><td>Minimum Password Length</td><td>High</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-pwd-002">WIN-PWD-002</a></td><td>Password Complexity Enabled</td><td>High</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-pwd-003">WIN-PWD-003</a></td><td>Maximum Password Age</td><td>Medium</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-pwd-004">WIN-PWD-004</a></td><td>Minimum Password Age</td><td>Low</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-pwd-005">WIN-PWD-005</a></td><td>Enforce Password History</td><td>Medium</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-pwd-006">WIN-PWD-006</a></td><td>Disable Reversible Password Encryption</td><td>High</td><td>Account Policy</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-rdp-001">WIN-RDP-001</a></td><td>Require Network Level Authentication for RDP</td><td>High</td><td>Remote Access</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-rdp-002">WIN-RDP-002</a></td><td>RDP Minimum Encryption Level (High)</td><td>Medium</td><td>Remote Access</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-rdp-003">WIN-RDP-003</a></td><td>RDP Security Layer (TLS)</td><td>Medium</td><td>Remote Access</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-rdp-004">WIN-RDP-004</a></td><td>Disable RDP Drive Redirection</td><td>Medium</td><td>Remote Access</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-rdp-005">WIN-RDP-005</a></td><td>Always Prompt for Password on RDP Connection</td><td>Medium</td><td>Remote Access</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-rdp-006">WIN-RDP-006</a></td><td>Disable RDP Clipboard Redirection</td><td>Low</td><td>Remote Access</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-rdp-007">WIN-RDP-007</a></td><td>Set RDP Idle Session Time Limit</td><td>Low</td><td>Remote Access</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-rdp-008">WIN-RDP-008</a></td><td>Set RDP Disconnected Session Time Limit</td><td>Low</td><td>Remote Access</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-rdp-009">WIN-RDP-009</a></td><td>Do Not Allow Saved RDP Passwords</td><td>Medium</td><td>Remote Access</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-001">WIN-SMB-001</a></td><td>Disable SMBv1</td><td>High</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-003">WIN-SMB-003</a></td><td>Require SMB Signing (Server)</td><td>High</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-004">WIN-SMB-004</a></td><td>Disable SMBv1 Client</td><td>High</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-005">WIN-SMB-005</a></td><td>Require SMB Client Signing</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-006">WIN-SMB-006</a></td><td>Restrict Anonymous Access to Named Pipes and Shares</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-smb-007">WIN-SMB-007</a></td><td>Disable SMB Client Insecure Guest Logons</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-008">WIN-SMB-008</a></td><td>Do Not Send Unencrypted Password to Third-Party SMB Servers</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-009">WIN-SMB-009</a></td><td>Digitally Sign Client Communications (If Server Agrees)</td><td>Low</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-010">WIN-SMB-010</a></td><td>Digitally Sign Server Communications (If Client Agrees)</td><td>Low</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-011">WIN-SMB-011</a></td><td>Idle Time Required Before Suspending an SMB Session (15 min)</td><td>Low</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-012">WIN-SMB-012</a></td><td>Disconnect Clients When Logon Hours Expire</td><td>Low</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-smb-013">WIN-SMB-013</a></td><td>Server SPN Target Name Validation Level</td><td>Medium</td><td>Network Protocols</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-svc-001">WIN-SVC-001</a></td><td>Disable Remote Registry Service</td><td>Medium</td><td>Attack Surface Reduction</td><td>Service</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-svc-002">WIN-SVC-002</a></td><td>Disable Print Spooler Service</td><td>Medium</td><td>Attack Surface Reduction</td><td>Service</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-001">WIN-TLS-001</a></td><td>Enable TLS 1.2 (Server)</td><td>Medium</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-002">WIN-TLS-002</a></td><td>Enable TLS 1.2 (Client)</td><td>Medium</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-003">WIN-TLS-003</a></td><td>Disable RC4 128/128 Cipher</td><td>High</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-004">WIN-TLS-004</a></td><td>Disable RC4 40/128 Cipher</td><td>High</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-005">WIN-TLS-005</a></td><td>Disable Triple DES 168 Cipher</td><td>Medium</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-006">WIN-TLS-006</a></td><td>Disable RC4 56/128 Cipher</td><td>High</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-007">WIN-TLS-007</a></td><td>Disable RC4 64/128 Cipher</td><td>High</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-008">WIN-TLS-008</a></td><td>Disable DES 56/56 Cipher</td><td>Medium</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-009">WIN-TLS-009</a></td><td>Disable NULL Cipher</td><td>Medium</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-010">WIN-TLS-010</a></td><td>Disable TLS 1.0 (Server)</td><td>High</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-011">WIN-TLS-011</a></td><td>Disable TLS 1.1 (Server)</td><td>High</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-012">WIN-TLS-012</a></td><td>Disable SSL 3.0 (Server)</td><td>High</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-tls-013">WIN-TLS-013</a></td><td>Disable SSL 2.0 (Server)</td><td>High</td><td>Cryptography</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-001">WIN-UAC-001</a></td><td>User Account Control Enabled</td><td>High</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-002">WIN-UAC-002</a></td><td>UAC Elevation Prompt for Administrators</td><td>Medium</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-003">WIN-UAC-003</a></td><td>UAC Detect Application Installations</td><td>Medium</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-004">WIN-UAC-004</a></td><td>Deny UAC Elevation Prompt for Standard Users</td><td>Medium</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-005">WIN-UAC-005</a></td><td>UAC Switch to the Secure Desktop for Elevation</td><td>Medium</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-006">WIN-UAC-006</a></td><td>Only Elevate UIAccess Apps in Secure Locations</td><td>Medium</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-007">WIN-UAC-007</a></td><td>Apply UAC Token Filtering to Remote Local Accounts</td><td>High</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-008">WIN-UAC-008</a></td><td>Admin Approval Mode for the Built-in Administrator</td><td>Medium</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-uac-009">WIN-UAC-009</a></td><td>Virtualize File and Registry Write Failures to Per-User Locations</td><td>Low</td><td>Privilege Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-001">WIN-URA-001</a></td><td>Access Credential Manager as a Trusted Caller = No One</td><td>High</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-002">WIN-URA-002</a></td><td>Act as Part of the Operating System = No One</td><td>High</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-003">WIN-URA-003</a></td><td>Create a Token Object = No One</td><td>High</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-004">WIN-URA-004</a></td><td>Create Permanent Shared Objects = No One</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-005">WIN-URA-005</a></td><td>Debug Programs = Administrators Only</td><td>High</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-006">WIN-URA-006</a></td><td>Deny Access to This Computer From the Network (includes Guests)</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-007">WIN-URA-007</a></td><td>Deny Log On as a Batch Job (includes Guests)</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-008">WIN-URA-008</a></td><td>Deny Log On as a Service (includes Guests)</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-009">WIN-URA-009</a></td><td>Deny Log On Locally (includes Guests)</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-010">WIN-URA-010</a></td><td>Deny Log On Through Remote Desktop Services (includes Guests)</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-011">WIN-URA-011</a></td><td>Force Shutdown From a Remote System = Administrators Only</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-012">WIN-URA-012</a></td><td>Generate Security Audits = Local Service, Network Service</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-013">WIN-URA-013</a></td><td>Impersonate a Client After Authentication = Service Accounts and Administrators</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-014">WIN-URA-014</a></td><td>Load and Unload Device Drivers = Administrators Only</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-015">WIN-URA-015</a></td><td>Manage Auditing and Security Log = Administrators Only</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-016">WIN-URA-016</a></td><td>Take Ownership of Files or Other Objects = Administrators Only</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-017">WIN-URA-017</a></td><td>Access This Computer From the Network = Administrators, Authenticated Users</td><td>High</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-018">WIN-URA-018</a></td><td>Allow Log On Locally = Administrators</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-019">WIN-URA-019</a></td><td>Allow Log On Through Remote Desktop Services = Administrators, Remote Desktop Users</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-020">WIN-URA-020</a></td><td>Back Up Files and Directories = Administrators</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-021">WIN-URA-021</a></td><td>Restore Files and Directories = Administrators</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-022">WIN-URA-022</a></td><td>Change the System Time = Administrators, Local Service</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-023">WIN-URA-023</a></td><td>Change the Time Zone = Administrators, Local Service, Users</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-024">WIN-URA-024</a></td><td>Create a Pagefile = Administrators</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-025">WIN-URA-025</a></td><td>Create Global Objects = Administrators and Service Accounts</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-026">WIN-URA-026</a></td><td>Create Symbolic Links = Administrators</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-027">WIN-URA-027</a></td><td>Adjust Memory Quotas for a Process = Administrators and Service Accounts</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-028">WIN-URA-028</a></td><td>Increase Scheduling Priority = Administrators, Window Manager</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-029">WIN-URA-029</a></td><td>Lock Pages in Memory = No One</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-030">WIN-URA-030</a></td><td>Perform Volume Maintenance Tasks = Administrators</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-031">WIN-URA-031</a></td><td>Profile Single Process = Administrators</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-032">WIN-URA-032</a></td><td>Replace a Process Level Token = Local Service, Network Service</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-033">WIN-URA-033</a></td><td>Shut Down the System = Administrators</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-034">WIN-URA-034</a></td><td>Modify Firmware Environment Values = Administrators</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-035">WIN-URA-035</a></td><td>Enable Accounts to Be Trusted for Delegation = No One</td><td>High</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-036">WIN-URA-036</a></td><td>Obtain an Impersonation Token for Another User = No One</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-037">WIN-URA-037</a></td><td>Modify an Object Label = No One</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-038">WIN-URA-038</a></td><td>Synchronize Directory Service Data = No One</td><td>Medium</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-ura-039">WIN-URA-039</a></td><td>Profile System Performance = Administrators, WdiServiceHost</td><td>Low</td><td>User Rights Assignment</td><td>SecEdit</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-vbs-001">WIN-VBS-001</a></td><td>Enable Virtualization Based Security</td><td>High</td><td>Credential Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-vbs-002">WIN-VBS-002</a></td><td>Require Secure Boot for VBS</td><td>Medium</td><td>Credential Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-vbs-003">WIN-VBS-003</a></td><td>Enable Memory Integrity (HVCI)</td><td>High</td><td>Exploit Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="direct"><td class="cmpl-num"></td><td><a href="#win-wdigest-001">WIN-WDIGEST-001</a></td><td>Disable WDigest Credential Caching</td><td>High</td><td>Credential Protection</td><td>Registry</td><td><span class="muted-badge">Direct</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-winrm-001">WIN-WINRM-001</a></td><td>Disable WinRM Client Basic Authentication</td><td>Medium</td><td>Remote Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-winrm-002">WIN-WINRM-002</a></td><td>Disallow WinRM Unencrypted Traffic</td><td>Medium</td><td>Remote Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
    <tr data-delivery="gpo"><td class="cmpl-num"></td><td><a href="#win-winrm-003">WIN-WINRM-003</a></td><td>Disable WinRM Client Digest Authentication</td><td>Medium</td><td>Remote Management</td><td>Registry</td><td><span class="gpo-badge" title="Delivered via a Group Policy registry value; a domain GPO can override it">GPO</span></td></tr>
  </tbody>
</table>
</div>

## Control reference

### WIN-ACCT-001 - Block Microsoft Accounts { #win-acct-001 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent users from adding or logging on with Microsoft accounts. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Consumer Microsoft accounts on servers bypass enterprise identity controls and complicate auditing.

**Remediation.** Set Policies System NoConnectedUser to 3 (users cannot add or log on with Microsoft accounts).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/accounts-block-microsoft-accounts](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/accounts-block-microsoft-accounts)

### WIN-ACCT-002 - Guest Account Disabled { #win-acct-002 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The built-in Guest account must be disabled.

**Rationale.** An enabled Guest account permits anonymous, unattributed access.

**Remediation.** Disable the built-in Guest account (EnableGuestAccount = 0).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/accounts-guest-account-status](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/accounts-guest-account-status)

### WIN-ACCT-003 - Force Logoff When Logon Hours Expire { #win-acct-003 }

**Severity:** Low &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Force users to log off when their logon hours expire.

**Rationale.** Sessions outliving permitted hours bypass time-based access controls.

**Remediation.** Enable Force logoff when logon hours expire (ForceLogoffWhenHourExpire = 1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-force-logoff-when-logon-hours-expire](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-force-logoff-when-logon-hours-expire)

### WIN-ASR-001 - ASR: Block Credential Stealing from LSASS { #win-asr-001 }

**Severity:** High &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

The Attack Surface Reduction rule blocking credential theft from the LSASS process must be enabled in block mode. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Credential theft from LSASS enables lateral movement and privilege escalation.

**Remediation.** Enable ASR rule 9e6c4e1f-7d60-472f-ba1a-a39ef669e4b2 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-002 - ASR: Block Office Apps Creating Child Processes { #win-asr-002 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

The Attack Surface Reduction rule blocking Office applications from creating child processes must be enabled. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Office child-process creation is a common malware/macro execution technique.

**Remediation.** Enable ASR rule d4f940ab-401b-4efc-aadc-ad5f3c50688a in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-003 - ASR: Block Executable Content from Email and Webmail { #win-asr-003 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

The Attack Surface Reduction rule blocking executable content from email and webmail must be enabled. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Executable email attachments are a primary malware delivery vector.

**Remediation.** Enable ASR rule be9ba2d9-53ea-4cdc-84e5-9b1eeee46550 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-004 - ASR: Block Obfuscated Scripts { #win-asr-004 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block execution of potentially obfuscated scripts, a common malware evasion technique. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Obfuscated scripts hide malicious behaviour from analysis and detection.

**Remediation.** Enable ASR rule 5beb7efe-fd9a-4556-801d-275e5ffc04cc in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-005 - ASR: Block Untrusted Processes from USB { #win-asr-005 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block untrusted and unsigned executables from running from USB removable media. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Removable media is a common malware ingress vector.

**Remediation.** Enable ASR rule b2b3f03d-6a65-4f7b-a9c7-1c7ef74a9ba4 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-006 - ASR: Block Process Creation from PSExec and WMI { #win-asr-006 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block processes created via PsExec and WMI commands, commonly used for lateral movement. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** PsExec/WMI process creation enables remote code execution and lateral movement.

**Remediation.** Enable ASR rule d1e49aac-8f56-4280-b9ba-993a6d77406c in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-007 - ASR: Advanced Protection Against Ransomware { #win-asr-007 }

**Severity:** High &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Enable advanced heuristic and cloud protection against ransomware. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Ransomware can rapidly encrypt data across the host and network.

**Remediation.** Enable ASR rule c1db55ab-c21a-4637-bb3f-a12568109d35 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-008 - ASR: Block Office Apps Injecting Code into Other Processes { #win-asr-008 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block Office applications from injecting code into other processes. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Code injection from Office lets malware masquerade as trusted processes.

**Remediation.** Enable ASR rule 75668c1f-73b5-4cf0-bb93-3ecf5cb7cc84 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-009 - ASR: Block Office Apps Creating Executable Content { #win-asr-009 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block Office applications from writing executable content to disk. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Office-dropped executables are used for persistence and payload delivery.

**Remediation.** Enable ASR rule 3b576869-a4ec-4529-8536-b80a7769e899 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-010 - ASR: Block Persistence Through WMI Event Subscription { #win-asr-010 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block malware from establishing persistence via WMI event subscription. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** WMI event subscriptions are a stealthy, fileless persistence mechanism.

**Remediation.** Enable ASR rule e6db77e5-3df2-4cf1-b95a-636979351e5b in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-011 - ASR: Block Win32 API Calls from Office Macros { #win-asr-011 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block Office macros from calling Win32 APIs. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Macro Win32 API calls are used to download and execute malware.

**Remediation.** Enable ASR rule 92e97fa1-2edf-4476-bdd6-9dd0b4dddc7b in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-012 - ASR: Block Untrusted Executables by Prevalence, Age, or Trust { #win-asr-012 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block executable files from running unless they meet a prevalence, age, or trusted-list criterion. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Newly seen, low-prevalence executables are frequently malware.

**Remediation.** Enable ASR rule 01443614-cd74-433a-b99e-2ecdc07bfc25 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-013 - ASR: Block Adobe Reader from Creating Child Processes { #win-asr-013 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block Adobe Reader from spawning child processes. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Malicious PDFs abuse Adobe Reader to launch payloads.

**Remediation.** Enable ASR rule 7674ba52-37eb-4a4f-a9a1-f0f9a1619a2c in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-014 - ASR: Block Webshell Creation for Servers { #win-asr-014 }

**Severity:** High &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block the creation of web shells on server roles (e.g. Exchange, IIS). Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Web shells give attackers persistent remote command execution on internet-facing servers.

**Remediation.** Enable ASR rule a8f5898e-1dc8-49a9-9878-85004b8a61e6 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-ASR-015 - ASR: Block Rebooting Machine in Safe Mode { #win-asr-015 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Block attempts to reboot the machine into Safe Mode to bypass security tooling. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Attackers reboot to Safe Mode to disable endpoint protection that does not load there.

**Remediation.** Enable ASR rule 33ddedf1-c6e0-47cb-833e-de6133960387 in block mode (1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference](https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference)

### WIN-AUD-001 - Audit Logon Failures { #win-aud-001 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The advanced audit policy must log failed logon events (subcategory 'Logon') to support detection of unauthorized access attempts.

**Rationale.** Failed authentication attempts go unrecorded, hindering intrusion detection.

**Remediation.** Enable failure auditing for the Logon subcategory (auditpol /set /subcategory:Logon /failure:enable).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-logon](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-logon)

### WIN-AUD-002 - Audit Account Lockout Events { #win-aud-002 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The advanced audit policy must log account lockout events (subcategory 'Account Lockout') to support detection of brute-force activity.

**Rationale.** Account lockouts from attacks go unrecorded.

**Remediation.** Enable failure auditing for the Account Lockout subcategory via auditpol (subcategory Account Lockout, failure enable).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-account-lockout](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-account-lockout)

### WIN-AUD-003 - Audit Process Creation { #win-aud-003 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Process creation events must be audited to support detection and forensic investigation.

**Rationale.** Without process auditing, malicious execution is hard to detect or investigate.

**Remediation.** Enable success auditing for the Process Creation subcategory (Detailed Tracking).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-process-creation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-process-creation)

### WIN-AUD-004 - Audit Credential Validation { #win-aud-004 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Credential validation events must be audited to detect authentication attacks.

**Rationale.** Unaudited credential validation hides brute-force and password-spray activity.

**Remediation.** Enable success and failure auditing for the Credential Validation subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-credential-validation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-credential-validation)

### WIN-AUD-005 - Audit Security Group Management { #win-aud-005 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to security groups must be audited to detect privilege escalation via group membership.

**Rationale.** Unaudited group changes hide privilege escalation and persistence.

**Remediation.** Enable success auditing for the Security Group Management subcategory (Account Management).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-security-group-management](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-security-group-management)

### WIN-AUD-006 - Audit Special Logon { #win-aud-006 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Special logon events (privileged logons) must be audited.

**Rationale.** Unaudited privileged logons hide administrative and attacker activity.

**Remediation.** Enable success auditing for the Special Logon subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-special-logon](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-special-logon)

### WIN-AUD-007 - Audit Sensitive Privilege Use { #win-aud-007 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Use of sensitive privileges must be audited to detect privilege abuse.

**Rationale.** Unaudited sensitive privilege use hides privilege-escalation and abuse.

**Remediation.** Enable success and failure auditing for the Sensitive Privilege Use subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-sensitive-privilege-use](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-sensitive-privilege-use)

### WIN-AUD-008 - Audit System Integrity { #win-aud-008 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

System integrity events (audit subsystem failures, driver issues) must be audited.

**Rationale.** Unaudited integrity events hide tampering with the audit subsystem.

**Remediation.** Enable success and failure auditing for the System Integrity subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-system-integrity](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-system-integrity)

### WIN-AUD-009 - Audit Logoff { #win-aud-009 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Logoff events must be audited to correlate session activity.

**Rationale.** Unaudited logoffs leave gaps in the session timeline.

**Remediation.** Enable success auditing for the Logoff subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-logoff](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-logoff)

### WIN-AUD-010 - Audit Removable Storage { #win-aud-010 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Access to removable storage must be audited to detect data exfiltration.

**Rationale.** Unaudited removable-storage use hides data theft.

**Remediation.** Enable success and failure auditing for the Removable Storage subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-removable-storage](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-removable-storage)

### WIN-AUD-011 - Audit Authentication Policy Change { #win-aud-011 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to authentication policy must be audited.

**Rationale.** Unaudited authentication-policy changes hide tampering with security controls.

**Remediation.** Enable success auditing for the Authentication Policy Change subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-authentication-policy-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-authentication-policy-change)

### WIN-AUD-012 - Audit User Account Management { #win-aud-012 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to user accounts (create, delete, enable, password reset) must be audited.

**Rationale.** Unaudited account changes hide account creation and privilege abuse.

**Remediation.** Enable success and failure auditing for the User Account Management subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-user-account-management](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-user-account-management)

### WIN-AUD-013 - Audit Computer Account Management { #win-aud-013 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to computer accounts must be audited.

**Rationale.** Unaudited computer-account changes hide rogue machine joins and tampering.

**Remediation.** Enable success auditing for the Computer Account Management subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-computer-account-management](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-computer-account-management)

### WIN-AUD-014 - Audit Audit Policy Change { #win-aud-014 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to the audit policy itself must be audited.

**Rationale.** Unaudited audit-policy changes let an attacker disable logging undetected.

**Remediation.** Enable success and failure auditing for the Audit Policy Change subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-audit-policy-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-audit-policy-change)

### WIN-AUD-015 - Audit Other Logon/Logoff Events { #win-aud-015 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Other logon/logoff events (RDP reconnects, workstation lock/unlock) must be audited.

**Rationale.** These events reveal remote-session and screen-lock activity useful for detection.

**Remediation.** Enable success and failure auditing for the Other Logon/Logoff Events subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-logonlogoff-events](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-logonlogoff-events)

### WIN-AUD-016 - Audit MPSSVC Rule-Level Policy Change { #win-aud-016 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Changes to Windows Firewall rules must be audited.

**Rationale.** Unaudited firewall-rule changes hide attempts to open the host to attack.

**Remediation.** Enable success and failure auditing for the MPSSVC Rule-Level Policy Change subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-mpssvc-rule-level-policy-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-mpssvc-rule-level-policy-change)

### WIN-AUD-017 - Audit PNP Activity { #win-aud-017 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit when Plug and Play detects an external device (e.g. USB).

**Rationale.** Unaudited device attachment hides data-exfiltration and rogue-hardware events.

**Remediation.** Enable success auditing for the Plug and Play Events subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-pnp-activity](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-pnp-activity)

### WIN-AUD-018 - Audit Group Membership { #win-aud-018 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Record the group memberships in each logon token.

**Rationale.** Without group-membership auditing it is harder to detect privileged-group logons.

**Remediation.** Enable success auditing for the Group Membership subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-group-membership](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-group-membership)

### WIN-AUD-019 - Audit Other Object Access Events { #win-aud-019 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit scheduled-task and COM+ object operations.

**Rationale.** Scheduled tasks and COM+ objects are common persistence mechanisms.

**Remediation.** Enable success and failure auditing for the Other Object Access Events subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-object-access-events](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-object-access-events)

### WIN-AUD-020 - Audit Detailed File Share { #win-aud-020 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit failed attempts to access files and folders on shared folders.

**Rationale.** Failed share-access attempts can indicate reconnaissance or unauthorized access.

**Remediation.** Enable failure auditing for the Detailed File Share subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-detailed-file-share](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-detailed-file-share)

### WIN-AUD-021 - Force Audit Policy Subcategory Settings { #win-aud-021 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Force advanced audit subcategory settings to override legacy category-level audit policy.

**Rationale.** Without this, granular advanced audit policy may not take effect.

**Remediation.** Set Lsa SCENoApplyLegacyAuditPolicy to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/audit-force-audit-policy-subcategory-settings-to-override](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/audit-force-audit-policy-subcategory-settings-to-override)

### WIN-AUD-022 - Audit Other Account Management Events { #win-aud-022 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit account-management events not covered by the other account-management subcategories.

**Rationale.** Some account-management actions would otherwise go unrecorded.

**Remediation.** Enable success and failure auditing for the Other Account Management Events subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-account-management-events](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-account-management-events)

### WIN-AUD-023 - Audit File Share { #win-aud-023 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit creation, deletion, modification, and access of network shares.

**Rationale.** Share tampering and unauthorized share access would go undetected.

**Remediation.** Enable success and failure auditing for the File Share subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-file-share](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-file-share)

### WIN-AUD-024 - Audit Authorization Policy Change { #win-aud-024 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit changes to authorization policy, including user-rights assignment changes.

**Rationale.** Unaudited authorization-policy changes hide privilege tampering.

**Remediation.** Enable success auditing for the Authorization Policy Change subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-authorization-policy-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-authorization-policy-change)

### WIN-AUD-025 - Audit Other Policy Change Events { #win-aud-025 }

**Severity:** Low &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit failures applying security policy and cryptographic (CNG) operations.

**Rationale.** Failed policy application and crypto errors would go unrecorded.

**Remediation.** Enable failure auditing for the Other Policy Change Events subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-policy-change-events](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-policy-change-events)

### WIN-AUD-026 - Audit IPsec Driver { #win-aud-026 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit IPsec driver activities such as dropped packets and integrity failures.

**Rationale.** IPsec failures and attacks against IPsec would go undetected.

**Remediation.** Enable success and failure auditing for the IPsec Driver subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-ipsec-driver](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-ipsec-driver)

### WIN-AUD-027 - Audit Other System Events { #win-aud-027 }

**Severity:** Low &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit other system events such as Windows Firewall service state and start/stop.

**Rationale.** Firewall service state changes would otherwise go unrecorded.

**Remediation.** Enable success and failure auditing for the Other System Events subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-system-events](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-other-system-events)

### WIN-AUD-028 - Audit Security State Change { #win-aud-028 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit changes in the security state of the system, such as startup and shutdown.

**Rationale.** System start/stop and time changes would go unrecorded.

**Remediation.** Enable success auditing for the Security State Change subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-security-state-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-security-state-change)

### WIN-AUD-029 - Audit Security System Extension { #win-aud-029 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** AuditPol &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Audit the loading of authentication/security packages and service installations.

**Rationale.** Malicious security packages and service installs are critical events to detect.

**Remediation.** Enable success auditing for the Security System Extension subcategory.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-security-system-extension](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/audit-security-system-extension)

### WIN-AUTORUN-001 - Disable AutoRun on All Drives { #win-autorun-001 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

AutoRun/AutoPlay must be disabled on all drive types to prevent automatic execution from removable media. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** AutoRun can automatically execute malware from removable or network media.

**Remediation.** Set Policies Explorer NoDriveTypeAutoRun to 255 to disable AutoRun on all drives.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-CG-001 - Enable Credential Guard { #win-cg-001 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Enterprise

Enable Credential Guard (with UEFI lock) to isolate and protect NTLM hashes and Kerberos tickets in VBS.

**Rationale.** Without Credential Guard, tools like Mimikatz can extract domain credentials from LSASS.

**Remediation.** Set Control Lsa LsaCfgFlags to 1 (Credential Guard with UEFI lock). Requires VBS and a reboot.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/configure](https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/configure)

### WIN-DEF-001 - Microsoft Defender Antivirus Enabled { #win-def-001 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Defender &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

Microsoft Defender Antivirus must be enabled and providing real-time protection.

**Rationale.** Absence of endpoint antivirus protection allows malware execution.

**Remediation.** Ensure Microsoft Defender Antivirus is enabled with real-time protection. Managed by platform/AV policy; enable via Windows Security or Group Policy (not auto-applied by CloudInfra Secure).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-002 - Enable Potentially Unwanted Application (PUA) Protection { #win-def-002 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

Microsoft Defender must block potentially unwanted applications (PUA) such as adware and bundled software. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** PUAs degrade performance and can be a foothold for further compromise.

**Remediation.** Set Windows Defender PUAProtection policy value to 1 (block).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-003 - Enable Defender Real-Time Protection { #win-def-003 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

Microsoft Defender real-time protection must not be disabled by policy. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Disabling real-time protection removes continuous malware scanning.

**Remediation.** Ensure Real-Time Protection DisableRealtimeMonitoring is 0 (or absent).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-004 - Enable Cloud-Delivered Protection { #win-def-004 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Microsoft Defender cloud-delivered protection (MAPS) must be enabled for faster protection against new threats. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Without cloud protection, response to emerging threats is slower.

**Remediation.** Set Windows Defender Spynet SpynetReporting to 2 (Advanced MAPS).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-005 - Enable Network Protection { #win-def-005 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Enable Defender network protection to block connections to dangerous domains and IP addresses. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Without network protection, users and processes can reach phishing and exploit domains.

**Remediation.** Set Exploit Guard Network Protection EnableNetworkProtection to 1 (block mode). On Windows Server, AllowNetworkProtectionOnWinServer must also be enabled.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/enable-network-protection](https://learn.microsoft.com/en-us/defender-endpoint/enable-network-protection)

### WIN-DEF-006 - Enable Controlled Folder Access { #win-def-006 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Enable controlled folder access to protect key folders from unauthorized changes by untrusted apps (ransomware). Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Ransomware can encrypt files in unprotected folders.

**Remediation.** Set Exploit Guard Controlled Folder Access EnableControlledFolderAccess to 1 (block mode).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/controlled-folder-access-configure](https://learn.microsoft.com/en-us/defender-endpoint/controlled-folder-access-configure)

### WIN-DEF-007 - Scan Removable Drives During Full Scan { #win-def-007 }

**Severity:** Low &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Scan removable drives (such as USB) during a full antivirus scan. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Malware on removable media can go undetected if such drives are skipped.

**Remediation.** Set Windows Defender Scan DisableRemovableDriveScanning to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-008 - Enable Block at First Sight { #win-def-008 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Enable Defender block-at-first-sight rapid cloud verdicts for newly seen files. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Novel malware may execute before traditional signatures are available.

**Remediation.** Set Windows Defender Spynet DisableBlockAtFirstSeen to 0 (requires cloud-delivered protection).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-009 - Enable Defender Behavior Monitoring { #win-def-009 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Enable Defender behavior monitoring to detect malicious activity by behaviour, not just signatures. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Disabling behaviour monitoring removes detection of fileless and living-off-the-land attacks.

**Remediation.** Set Windows Defender Real-Time Protection DisableBehaviorMonitoring to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-010 - Enable Email Scanning { #win-def-010 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Scan email bodies and attachments for malware. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Malware delivered by email can go undetected if email scanning is off.

**Remediation.** Set Windows Defender Scan DisableEmailScanning to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-011 - Enable Archive Scanning { #win-def-011 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Scan inside archive files (such as .zip and .rar) for malware. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Malware hidden in archives evades scanning if archive scanning is off.

**Remediation.** Set Windows Defender Scan DisableArchiveScanning to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-012 - Scan Mapped Network Drives During Full Scan { #win-def-012 }

**Severity:** Low &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Include mapped network drives when running a full antivirus scan. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Malware staged on mapped drives can be missed by full scans.

**Remediation.** Set Windows Defender Scan DisableScanningMappedNetworkDrivesForFullScan to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-013 - Scan Downloaded Files and Attachments { #win-def-013 }

**Severity:** High &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Scan downloaded files and attachments in real time (IOAV protection). Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Disabling IOAV protection lets downloaded malware execute unscanned.

**Remediation.** Set Windows Defender Real-Time Protection DisableIOAVProtection to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-014 - Disable Local Admin Merge of Defender Preferences { #win-def-014 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent local administrators from merging their own Defender exclusions and preferences with policy. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Local admin merge lets an attacker with local admin hide exclusions from central policy.

**Remediation.** Set Windows Defender DisableLocalAdminMerge to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-DEF-015 - Enable Real-Time Script Scanning { #win-def-015 }

**Severity:** Medium &nbsp; **Category:** Endpoint Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Scan scripts as they run (real-time script scanning). Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Malicious scripts execute unscanned when script scanning is disabled.

**Remediation.** Set Windows Defender Real-Time Protection DisableScriptScanning to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)

### WIN-EVTLOG-001 - Application Event Log Maximum Size (>= 32 MB) { #win-evtlog-001 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Application event log must be at least 32,768 KB so events are retained long enough to investigate. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** A small log wraps quickly and loses evidence of an incident.

**Remediation.** Set EventLog Application MaxSize to at least 32768 (KB).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-EVTLOG-002 - Application Event Log Retention (Overwrite as Needed) { #win-evtlog-002 }

**Severity:** Low &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Application event log must overwrite oldest events when full rather than halting logging. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** A non-overwriting full log can stop new events or the system.

**Remediation.** Set EventLog Application Retention to 0 (overwrite events as needed).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-EVTLOG-003 - Security Event Log Maximum Size (>= 192 MB) { #win-evtlog-003 }

**Severity:** High &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Security event log must be at least 196,608 KB given its high event volume. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** A small Security log wraps quickly and loses critical audit evidence.

**Remediation.** Set EventLog Security MaxSize to at least 196608 (KB).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-EVTLOG-004 - Security Event Log Retention (Overwrite as Needed) { #win-evtlog-004 }

**Severity:** Low &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Security event log must overwrite oldest events when full rather than halting logging. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** A non-overwriting full Security log can stop new events or the system.

**Remediation.** Set EventLog Security Retention to 0 (overwrite events as needed).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-EVTLOG-005 - Setup Event Log Maximum Size (>= 32 MB) { #win-evtlog-005 }

**Severity:** Low &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Setup event log must be at least 32,768 KB. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** A small Setup log loses servicing and setup history.

**Remediation.** Set EventLog Setup MaxSize to at least 32768 (KB).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-EVTLOG-006 - Setup Event Log Retention (Overwrite as Needed) { #win-evtlog-006 }

**Severity:** Low &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Setup event log must overwrite oldest events when full rather than halting logging. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** A non-overwriting full Setup log can stop new events.

**Remediation.** Set EventLog Setup Retention to 0 (overwrite events as needed).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-EVTLOG-007 - System Event Log Maximum Size (>= 32 MB) { #win-evtlog-007 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The System event log must be at least 32,768 KB. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** A small System log wraps quickly and loses evidence.

**Remediation.** Set EventLog System MaxSize to at least 32768 (KB).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-EVTLOG-008 - System Event Log Retention (Overwrite as Needed) { #win-evtlog-008 }

**Severity:** Low &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The System event log must overwrite oldest events when full rather than halting logging. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** A non-overwriting full System log can stop new events or the system.

**Remediation.** Set EventLog System Retention to 0 (overwrite events as needed).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-FW-001 - Windows Firewall Enabled (All Profiles) { #win-fw-001 }

**Severity:** High &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Firewall &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

The Windows Defender Firewall must be enabled for the Domain, Private and Public profiles to enforce host-based network filtering.

**Rationale.** Unrestricted inbound network access if the host firewall is disabled.

**Remediation.** Enable Windows Defender Firewall on the Domain, Private and Public profiles (Set-NetFirewallProfile -Enabled True).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `CMMC Level 2` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-FW-002 - Block Inbound Connections by Default (Domain Profile) { #win-fw-002 }

**Severity:** Medium &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The domain firewall profile must block inbound connections that do not match a rule. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** A permissive default inbound action exposes unlisted services to the network.

**Remediation.** Set WindowsFirewall DomainProfile DefaultInboundAction to 1 (Block).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-FW-003 - Block Inbound Connections by Default (Private Profile) { #win-fw-003 }

**Severity:** Medium &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The private firewall profile must block inbound connections that do not match a rule. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** A permissive default inbound action exposes unlisted services to the network.

**Remediation.** Set WindowsFirewall StandardProfile DefaultInboundAction to 1 (Block).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-FW-004 - Block Inbound Connections by Default (Public Profile) { #win-fw-004 }

**Severity:** Medium &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The public firewall profile must block inbound connections that do not match a rule. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** A permissive default inbound action exposes unlisted services on untrusted networks.

**Remediation.** Set WindowsFirewall PublicProfile DefaultInboundAction to 1 (Block).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-FW-005 - Log Dropped Packets (Public Profile) { #win-fw-005 }

**Severity:** Low &nbsp; **Category:** Host Firewall &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The public firewall profile must log dropped packets for troubleshooting and detection. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Without firewall logging, blocked-connection attempts leave no forensic trail.

**Remediation.** Set WindowsFirewall PublicProfile Logging LogDroppedPackets to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)

### WIN-INSTALL-001 - Disable Always Install Elevated { #win-install-001 }

**Severity:** High &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Windows Installer must not install packages with elevated privileges for standard users. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** AlwaysInstallElevated lets any user install software as SYSTEM - a privilege-escalation path.

**Remediation.** Ensure Installer AlwaysInstallElevated is 0 (or absent). Remove any policy enabling it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-KRB-001 - Configure Kerberos Encryption Types (AES only) { #win-krb-001 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Allow only AES (and future) encryption types for Kerberos, disabling weak DES and RC4. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Weak Kerberos ciphers (DES, RC4) are susceptible to Kerberoasting and cracking.

**Remediation.** Set Kerberos Parameters SupportedEncryptionTypes to 2147483640 (AES128, AES256, future types).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-configure-encryption-types-allowed-for-kerberos](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-configure-encryption-types-allowed-for-kerberos)

### WIN-LDAP-001 - LDAP Client Signing { #win-ldap-001 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The LDAP client must negotiate signing to protect directory queries from tampering and relay.

**Rationale.** Unsigned LDAP traffic is vulnerable to man-in-the-middle and relay attacks.

**Remediation.** Set Services LDAP LDAPClientIntegrity to 1 (negotiate signing).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-ldap-client-signing-requirements](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-ldap-client-signing-requirements)

### WIN-LOCK-001 - Account Lockout Threshold { #win-lock-001 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The account lockout threshold must be set to a non-zero value of 5 or fewer invalid logon attempts to resist password guessing.

**Rationale.** Unlimited logon attempts enable brute-force password attacks.

**Remediation.** Set the account lockout threshold to a non-zero value of 5 or fewer invalid attempts (Account Policies, Account Lockout Policy).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/account-lockout-threshold](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/account-lockout-threshold)

### WIN-LOCK-002 - Account Lockout Duration { #win-lock-002 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

A locked account should remain locked long enough to slow automated password guessing.

**Rationale.** A short lockout duration lets attackers resume guessing quickly.

**Remediation.** Set the account lockout duration to 15 minutes or more.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/account-lockout-duration](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/account-lockout-duration)

### WIN-LOCK-003 - Reset Account Lockout Counter { #win-lock-003 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The failed-logon counter should persist long enough to make lockout thresholds effective.

**Rationale.** A short reset window weakens the lockout threshold against slow guessing.

**Remediation.** Set the reset account lockout counter to 15 minutes or more.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/reset-account-lockout-counter-after](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/reset-account-lockout-counter-after)

### WIN-LOGON-001 - Machine Inactivity Limit { #win-logon-001 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The machine must lock after a period of inactivity to protect unattended sessions. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Unattended, unlocked sessions can be hijacked by anyone with physical or console access.

**Remediation.** Set Policies System InactivityTimeoutSecs to 900 (15 minutes) or fewer.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-machine-inactivity-limit](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-machine-inactivity-limit)

### WIN-LOGON-002 - Do Not Display Last Signed-In User { #win-logon-002 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The last signed-in username must not be displayed at the logon screen. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Displaying the last user discloses a valid account name to attackers.

**Remediation.** Set Policies System DontDisplayLastUserName to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-do-not-display-last-user-name](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-do-not-display-last-user-name)

### WIN-LOGON-003 - Limit Number of Cached Logons { #win-logon-003 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The number of cached domain logon credentials must be limited to reduce offline credential-theft exposure.

**Rationale.** Cached credentials can be extracted and cracked offline.

**Remediation.** Set Winlogon CachedLogonsCount to 4 or fewer.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-number-of-previous-logons-to-cache-in-case-domain-controller-is-not-available](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-number-of-previous-logons-to-cache-in-case-domain-controller-is-not-available)

### WIN-LOGON-004 - Require Ctrl+Alt+Del at Logon { #win-logon-004 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Users must press Ctrl+Alt+Del before signing in to guarantee a trusted logon path. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Without the secure attention sequence, credential-harvesting spoofed logon screens are possible.

**Remediation.** Set Policies System DisableCAD to 0 (require Ctrl+Alt+Del).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-do-not-require-ctrl-alt-del](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-do-not-require-ctrl-alt-del)

### WIN-LOGON-005 - Smart Card Removal Behavior (Lock Workstation) { #win-logon-005 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Lock the workstation when a logged-on user removes their smart card.

**Rationale.** An unlocked, unattended session after card removal is open to misuse.

**Remediation.** Set Winlogon ScRemoveOption to 1 (Lock Workstation).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-smart-card-removal-behavior](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-smart-card-removal-behavior)

### WIN-LOGON-006 - Disable Automatic Logon { #win-logon-006 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Disable automatic logon, which stores a plaintext password in the registry.

**Rationale.** AutoAdminLogon stores credentials in cleartext and logs in without authentication.

**Remediation.** Set Winlogon AutoAdminLogon to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-LOGON-007 - Do Not Allow System to Be Shut Down Without Logging On { #win-logon-007 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Require authentication before the system can be shut down. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Unauthenticated shutdown from the logon screen enables denial of service.

**Remediation.** Set Policies System ShutdownWithoutLogon to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/shutdown-allow-system-to-be-shut-down-without-having-to-log-on](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/shutdown-allow-system-to-be-shut-down-without-having-to-log-on)

### WIN-LOGON-008 - Require Domain Controller Authentication to Unlock Workstation { #win-logon-008 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Require a domain controller to authenticate the account when unlocking a locked session.

**Rationale.** Cached-credential unlock ignores recent account disable/lockout changes.

**Remediation.** Set Winlogon ForceUnlockLogon to 1 (best paired with cached logons = 0).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-require-domain-controller-authentication-to-unlock-workstation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/interactive-logon-require-domain-controller-authentication-to-unlock-workstation)

### WIN-LSA-001 - Do Not Store LAN Manager Hash { #win-lsa-001 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

The weak LAN Manager hash of passwords must not be stored on next password change.

**Rationale.** LM hashes are easily cracked, exposing account passwords.

**Remediation.** Set Lsa NoLMHash to 1 so LM hashes are not stored.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-do-not-store-lan-manager-hash-value-on-next-password-change](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-do-not-store-lan-manager-hash-value-on-next-password-change)

### WIN-LSA-002 - Restrict Anonymous SID Enumeration { #win-lsa-002 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Anonymous users must not be able to enumerate SIDs and account names.

**Rationale.** Anonymous enumeration aids reconnaissance and targeted attacks.

**Remediation.** Set Lsa RestrictAnonymous to 1 to restrict anonymous enumeration.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-anonymous-enumeration-of-sam-accounts-and-shares](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-anonymous-enumeration-of-sam-accounts-and-shares)

### WIN-LSA-003 - Enable LSASS Protection (RunAsPPL) { #win-lsa-003 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Enterprise

LSASS must run as a protected process (PPL) to resist credential theft tools.

**Rationale.** Unprotected LSASS memory can be dumped to steal credentials.

**Remediation.** Set Lsa RunAsPPL to 1 to run LSASS as a protected process. Requires a reboot.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-LSA-004 - Do Not Allow Anonymous Enumeration of SAM Accounts { #win-lsa-004 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Anonymous users must not be able to enumerate SAM accounts.

**Rationale.** Anonymous SAM enumeration aids account discovery and password attacks.

**Remediation.** Set Lsa RestrictAnonymousSAM to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-anonymous-enumeration-of-sam-accounts](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-anonymous-enumeration-of-sam-accounts)

### WIN-LSA-005 - Enable Structured Exception Handling Overwrite Protection (SEHOP) { #win-lsa-005 }

**Severity:** Medium &nbsp; **Category:** Exploit Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

SEHOP must be enabled to block Structured Exception Handler overwrite exploitation.

**Rationale.** SEH overwrite is a common memory-corruption exploitation technique.

**Remediation.** Ensure Session Manager kernel DisableExceptionChainValidation is 0 (SEHOP enabled).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-LSA-006 - Digitally Encrypt or Sign Secure Channel Data (Always) { #win-lsa-006 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

All domain secure-channel traffic must be signed or encrypted.

**Rationale.** Unsigned secure-channel traffic is vulnerable to tampering and replay.

**Remediation.** Set Netlogon Parameters RequireSignOrSeal to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-digitally-encrypt-or-sign-secure-channel-data-always](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-digitally-encrypt-or-sign-secure-channel-data-always)

### WIN-LSA-007 - Do Not Apply Everyone Permissions to Anonymous Users { #win-lsa-007 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Everyone SID must not be applied to anonymous connections.

**Rationale.** Applying Everyone permissions to anonymous users grants broad unauthenticated access.

**Remediation.** Set Lsa EveryoneIncludesAnonymous to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-let-everyone-permissions-apply-to-anonymous-users](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-let-everyone-permissions-apply-to-anonymous-users)

### WIN-LSA-008 - Restrict Clients Allowed to Make Remote SAM Calls { #win-lsa-008 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Restrict remote SAM (SAMRPC) enumeration to the local Administrators group.

**Rationale.** Remote SAM enumeration lets low-privilege attackers map users, groups, and admins.

**Remediation.** Set Lsa RestrictRemoteSam to the SDDL O:SYG:SYD:(A;;RC;;;BA) (Administrators only).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-restrict-clients-allowed-to-make-remote-sam-calls](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-restrict-clients-allowed-to-make-remote-sam-calls)

### WIN-LSA-009 - Limit Local Account Use of Blank Passwords { #win-lsa-009 }

**Severity:** High &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Restrict local accounts with blank passwords to console logon only (no remote/network logon).

**Rationale.** Blank-password local accounts allow trivial remote access if guessed or known.

**Remediation.** Set Lsa LimitBlankPasswordUse to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/accounts-limit-local-account-use-of-blank-passwords-to-console-logon-only](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/accounts-limit-local-account-use-of-blank-passwords-to-console-logon-only)

### WIN-LSA-010 - Sharing and Security Model for Local Accounts (Classic) { #win-lsa-010 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Local accounts authenticate as themselves (Classic), not mapped to Guest.

**Rationale.** The Guest-only model weakens access control by treating all local network logons equally.

**Remediation.** Set Lsa ForceGuest to 0 (Classic - local users authenticate as themselves).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-sharing-and-security-model-for-local-accounts](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-sharing-and-security-model-for-local-accounts)

### WIN-LSA-011 - Disallow LocalSystem NULL Session Fallback { #win-lsa-011 }

**Severity:** Medium &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent LocalSystem services from falling back to unprotected NULL-session authentication.

**Rationale.** NULL-session fallback transmits data with a well-known key, providing no confidentiality or integrity.

**Remediation.** Set Lsa MSV1_0 AllowNullSessionFallback to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-allow-localsystem-null-session-fallback](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-allow-localsystem-null-session-fallback)

### WIN-LSA-012 - Strengthen Default Permissions of Internal System Objects { #win-lsa-012 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Strengthen the default DACL on shared system objects so non-administrators cannot modify objects they did not create.

**Rationale.** Weak default object permissions enable symbolic-link and predictable-name attacks.

**Remediation.** Set Session Manager ProtectionMode to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/system-objects-strengthen-default-permissions-of-internal-system-objects](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/system-objects-strengthen-default-permissions-of-internal-system-objects)

### WIN-LSA-013 - Digitally Encrypt Secure Channel Data (When Possible) { #win-lsa-013 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Encrypt domain secure-channel traffic whenever the domain controller supports it.

**Rationale.** Unencrypted secure-channel data can be read in transit.

**Remediation.** Set Netlogon Parameters SealSecureChannel to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-digitally-encrypt-secure-channel-data-when-possible](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-digitally-encrypt-secure-channel-data-when-possible)

### WIN-LSA-014 - Digitally Sign Secure Channel Data (When Possible) { #win-lsa-014 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Sign domain secure-channel traffic whenever the domain controller supports it.

**Rationale.** Unsigned secure-channel data can be tampered with in transit.

**Remediation.** Set Netlogon Parameters SignSecureChannel to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-digitally-sign-secure-channel-data-when-possible](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-digitally-sign-secure-channel-data-when-possible)

### WIN-LSA-015 - Do Not Disable Machine Account Password Changes { #win-lsa-015 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Allow periodic machine-account password changes.

**Rationale.** A static machine-account password is easier to compromise and replay.

**Remediation.** Set Netlogon Parameters DisablePasswordChange to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-disable-machine-account-password-changes](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-disable-machine-account-password-changes)

### WIN-LSA-016 - Maximum Machine Account Password Age (30 Days) { #win-lsa-016 }

**Severity:** Low &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The machine-account password must be rotated at least every 30 days.

**Rationale.** Infrequent rotation extends the window for a stolen machine password.

**Remediation.** Set Netlogon Parameters MaximumPasswordAge to 30.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-maximum-machine-account-password-age](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-maximum-machine-account-password-age)

### WIN-LSA-017 - Require Strong (Windows 2000 or Later) Session Key { #win-lsa-017 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Require a strong 128-bit secure-channel session key.

**Rationale.** Weak 64-bit session keys are more vulnerable to eavesdropping and hijacking.

**Remediation.** Set Netlogon Parameters RequireStrongKey to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-require-strong-windows-2000-or-later-session-key](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/domain-member-require-strong-windows-2000-or-later-session-key)

### WIN-LSA-018 - Do Not Store Passwords and Credentials for Network Authentication { #win-lsa-018 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent caching of network-authentication passwords and credentials.

**Rationale.** Cached network credentials can be harvested from a compromised host.

**Remediation.** Set Lsa DisableDomainCreds to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-storage-of-passwords-and-credentials-for-network-authentication](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-do-not-allow-storage-of-passwords-and-credentials-for-network-authentication)

### WIN-LSA-019 - Require Case Insensitivity for Non-Windows Subsystems { #win-lsa-019 }

**Severity:** Low &nbsp; **Category:** Access Control &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Enforce case insensitivity for all subsystems, including POSIX.

**Rationale.** Case-sensitive object names can be used to bypass name-based access checks.

**Remediation.** Set Session Manager Kernel ObCaseInsensitive to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/system-objects-require-case-insensitivity-for-non-windows-subsystems](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/system-objects-require-case-insensitivity-for-non-windows-subsystems)

### WIN-NET-001 - Disable LLMNR { #win-net-001 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Link-Local Multicast Name Resolution (LLMNR) must be disabled to prevent name-resolution poisoning and credential capture. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** LLMNR enables responder-style spoofing and NTLM credential theft.

**Remediation.** Set DNSClient EnableMulticast to 0 to disable LLMNR.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-002 - Disable IPv4 Source Routing { #win-net-002 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

IPv4 source routing must be disabled to prevent source-routed packet spoofing.

**Rationale.** Source routing lets attackers dictate the network path of packets, aiding spoofing.

**Remediation.** Set Tcpip Parameters DisableIPSourceRouting to 2 (highest protection).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-003 - Disable ICMP Redirects { #win-net-003 }

**Severity:** Low &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

ICMP redirects must not override OSPF-generated routes.

**Rationale.** ICMP redirects can be abused to reroute traffic through an attacker.

**Remediation.** Set Tcpip Parameters EnableICMPRedirect to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-004 - Disable IPv6 Source Routing { #win-net-004 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

IPv6 source routing must be disabled to prevent source-routed packet spoofing.

**Rationale.** IPv6 source routing enables path manipulation and spoofing.

**Remediation.** Set Tcpip6 Parameters DisableIPSourceRouting to 2.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-005 - Ignore NetBIOS Name Release Requests { #win-net-005 }

**Severity:** Low &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Ignore NetBIOS name-release requests except from WINS servers.

**Rationale.** Malicious name-release requests enable NetBIOS denial-of-service and spoofing.

**Remediation.** Set Netbt Parameters NoNameReleaseOnDemand to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-006 - Disable mDNS { #win-net-006 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Disable multicast DNS (mDNS) name resolution.

**Rationale.** mDNS, like LLMNR, can be abused for name-resolution spoofing and credential harvesting.

**Remediation.** Set Dnscache Parameters EnableMDNS to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NET-007 - Enable Safe DLL Search Mode { #win-net-007 }

**Severity:** Medium &nbsp; **Category:** Exploit Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Use safe DLL search order so system locations are searched before the current directory.

**Rationale.** Unsafe DLL search order enables DLL-planting (DLL hijacking) attacks.

**Remediation.** Set Session Manager SafeDllSearchMode to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-NTLM-001 - LAN Manager Authentication Level (NTLMv2 Only) { #win-ntlm-001 }

**Severity:** High &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The system must send NTLMv2 responses only and refuse LM and NTLM, resisting downgrade and relay attacks.

**Rationale.** Legacy LM/NTLM authentication is vulnerable to cracking and relay.

**Remediation.** Set Lsa LmCompatibilityLevel to 5 (send NTLMv2 only, refuse LM and NTLM).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-lan-manager-authentication-level](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-lan-manager-authentication-level)

### WIN-NTLM-002 - Minimum NTLM Session Security (Clients) { #win-ntlm-002 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

NTLM SSP clients must require NTLMv2 session security and 128-bit encryption.

**Rationale.** Weak NTLM session security is vulnerable to downgrade and man-in-the-middle attacks.

**Remediation.** Set Lsa MSV1_0 NTLMMinClientSec to 537395200 (require NTLMv2 and 128-bit).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-minimum-session-security-for-ntlm-ssp-based-including-secure-rpc-clients](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-minimum-session-security-for-ntlm-ssp-based-including-secure-rpc-clients)

### WIN-NTLM-003 - Minimum NTLM Session Security (Servers) { #win-ntlm-003 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

NTLM SSP servers must require NTLMv2 session security and 128-bit encryption.

**Rationale.** Weak NTLM session security is vulnerable to downgrade and man-in-the-middle attacks.

**Remediation.** Set Lsa MSV1_0 NTLMMinServerSec to 537395200 (require NTLMv2 and 128-bit).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-minimum-session-security-for-ntlm-ssp-based-including-secure-rpc-servers](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-minimum-session-security-for-ntlm-ssp-based-including-secure-rpc-servers)

### WIN-NTLM-004 - Allow LocalSystem to Use Computer Identity for NTLM { #win-ntlm-004 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

LocalSystem services authenticate with the computer identity instead of anonymously.

**Rationale.** Anonymous LocalSystem NTLM weakens session security.

**Remediation.** Set Lsa UseMachineId to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-allow-local-system-to-use-computer-identity-for-ntlm](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-allow-local-system-to-use-computer-identity-for-ntlm)

### WIN-NTLM-005 - Disallow PKU2U Online Identities { #win-ntlm-005 }

**Severity:** Medium &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent PKU2U from using online identities to authenticate to this server (on-premises environments).

**Rationale.** PKU2U online identities can bypass domain-defined access controls.

**Remediation.** Set Lsa pku2u AllowOnlineID to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-allow-pku2u-authentication-requests-to-this-computer-to-use-online-identities](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-allow-pku2u-authentication-requests-to-this-computer-to-use-online-identities)

### WIN-NTLM-006 - Audit Incoming NTLM Traffic { #win-ntlm-006 }

**Severity:** Low &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Log all incoming NTLM authentication so NTLM usage can be measured before restriction.

**Rationale.** Without auditing, NTLM dependence is invisible and hard to eliminate.

**Remediation.** Set Lsa MSV1_0 AuditReceivingNTLMTraffic to 2 (all accounts).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-restrict-ntlm-audit-incoming-ntlm-traffic](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-restrict-ntlm-audit-incoming-ntlm-traffic)

### WIN-NTLM-007 - Audit Outgoing NTLM Traffic to Remote Servers { #win-ntlm-007 }

**Severity:** Low &nbsp; **Category:** Authentication &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Log all outgoing NTLM authentication to remote servers.

**Rationale.** Unmeasured outgoing NTLM makes it hard to move to Kerberos.

**Remediation.** Set Lsa MSV1_0 RestrictSendingNTLMTraffic to 1 (Audit all).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-restrict-ntlm-outgoing-ntlm-traffic-to-remote-servers](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-security-restrict-ntlm-outgoing-ntlm-traffic-to-remote-servers)

### WIN-PRINT-001 - Restrict Point and Print Driver Installation to Administrators { #win-print-001 }

**Severity:** High &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only administrators may install printer drivers via Point and Print. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Unrestricted Point and Print driver installation was the basis of the PrintNightmare RCE.

**Remediation.** Set Printers PointAndPrint RestrictDriverInstallationToAdministrators to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-PRINT-002 - Require Elevation for New Point and Print Connections { #win-print-002 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Warn and require elevation when installing drivers for a new Point and Print connection. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Silent driver installation lets a malicious print server push a driver without prompting.

**Remediation.** Set Printers PointAndPrint NoWarningNoElevationOnInstall to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-PRINT-003 - Prevent Users From Installing Printer Drivers { #win-print-003 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only administrators may install printer drivers when adding a network printer.

**Rationale.** User-installed printer drivers can introduce untrusted kernel code on servers.

**Remediation.** Set Print Providers LanMan Print Services Servers AddPrinterDrivers to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/devices-prevent-users-from-installing-printer-drivers](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/devices-prevent-users-from-installing-printer-drivers)

### WIN-PSL-001 - Enable PowerShell Script Block Logging { #win-psl-001 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

PowerShell Script Block Logging must be enabled to record the content of executed script blocks for detection and forensics. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Reduced visibility of malicious PowerShell activity.

**Remediation.** Enable PowerShell Script Block Logging by setting EnableScriptBlockLogging to 1 under the ScriptBlockLogging policy key.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows)

### WIN-PSL-002 - Enable PowerShell Module Logging { #win-psl-002 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

PowerShell Module Logging must be enabled to record pipeline execution details of PowerShell modules. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Reduced visibility of malicious PowerShell module activity.

**Remediation.** Enable PowerShell Module Logging by setting EnableModuleLogging to 1 under the ModuleLogging policy key.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows)

### WIN-PSL-003 - Enable PowerShell Transcription { #win-psl-003 }

**Severity:** Medium &nbsp; **Category:** Logging and Monitoring &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Capture a transcript of every PowerShell session. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Transcripts provide a forensic record of interactive and scripted PowerShell use.

**Remediation.** Set PowerShell Transcription EnableTranscripting to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `SOC 2` `ISO/IEC 27001` `Microsoft Security Baselines` `NIS2`

**References:**
- [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows)

### WIN-PWD-001 - Minimum Password Length { #win-pwd-001 }

**Severity:** High &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

The local security policy must require a minimum password length of at least 14 characters.

**Rationale.** Short passwords are susceptible to brute-force and guessing attacks.

**Remediation.** Set the minimum password length policy to 14 or greater (Local Security Policy, Account Policies, Password Policy).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/minimum-password-length](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/minimum-password-length)

### WIN-PWD-002 - Password Complexity Enabled { #win-pwd-002 }

**Severity:** High &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

The local security policy must enforce password complexity requirements.

**Rationale.** Simple passwords are susceptible to guessing and dictionary attacks.

**Remediation.** Enable the password complexity requirements policy (PasswordComplexity = 1).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements)

### WIN-PWD-003 - Maximum Password Age { #win-pwd-003 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Passwords must expire within a defined period so that compromised credentials have a limited useful lifetime.

**Rationale.** Passwords that never expire remain valid indefinitely if leaked.

**Remediation.** Set the maximum password age to 365 days or fewer (but not 0) in the account policy.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/maximum-password-age](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/maximum-password-age)

### WIN-PWD-004 - Minimum Password Age { #win-pwd-004 }

**Severity:** Low &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

A minimum password age prevents users from cycling rapidly through passwords to defeat history enforcement.

**Rationale.** Without a minimum age, users can bypass password history by changing passwords repeatedly.

**Remediation.** Set the minimum password age to at least 1 day in the account policy.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/minimum-password-age](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/minimum-password-age)

### WIN-PWD-005 - Enforce Password History { #win-pwd-005 }

**Severity:** Medium &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Remembering previous passwords prevents reuse of recently used credentials.

**Rationale.** Password reuse increases exposure if an old password is compromised.

**Remediation.** Set the enforce password history policy to 24 or more remembered passwords.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/enforce-password-history](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/enforce-password-history)

### WIN-PWD-006 - Disable Reversible Password Encryption { #win-pwd-006 }

**Severity:** High &nbsp; **Category:** Account Policy &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

Storing passwords using reversible encryption is equivalent to storing plaintext passwords and must be disabled.

**Rationale.** Reversibly encrypted passwords can be trivially recovered to plaintext.

**Remediation.** Disable the store-passwords-using-reversible-encryption policy (set to 0).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/store-passwords-using-reversible-encryption](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/store-passwords-using-reversible-encryption)

### WIN-RDP-001 - Require Network Level Authentication for RDP { #win-rdp-001 }

**Severity:** High &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Remote Desktop connections must require Network Level Authentication (NLA) so users authenticate before a session is established.

**Rationale.** Pre-authentication exposure of the RDP session host to unauthenticated attackers.

**Remediation.** Require Network Level Authentication for RDP by setting UserAuthentication to 1 on the RDP-Tcp WinStation.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-002 - RDP Minimum Encryption Level (High) { #win-rdp-002 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Remote Desktop sessions must use a High minimum encryption level.

**Rationale.** Weak RDP encryption exposes session data to interception.

**Remediation.** Set the RDP-Tcp MinEncryptionLevel to 3 (High).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-003 - RDP Security Layer (TLS) { #win-rdp-003 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Remote Desktop must use the SSL/TLS security layer for connection security.

**Rationale.** The legacy RDP security layer is susceptible to man-in-the-middle attacks.

**Remediation.** Set the RDP-Tcp SecurityLayer to 2 (SSL/TLS).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-004 - Disable RDP Drive Redirection { #win-rdp-004 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Client drive redirection over RDP must be disabled to prevent data exfiltration and malware ingress.

**Rationale.** Drive redirection allows files to move between client and server, aiding exfiltration.

**Remediation.** Set the RDP-Tcp fDisableCdm value to 1 to disable client drive redirection.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-005 - Always Prompt for Password on RDP Connection { #win-rdp-005 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Require Remote Desktop clients to provide a password at connection time. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Saved credentials let a stolen client session reconnect without authentication.

**Remediation.** Set Terminal Services fPromptForPassword to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-006 - Disable RDP Clipboard Redirection { #win-rdp-006 }

**Severity:** Low &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

Disable clipboard redirection in Remote Desktop sessions. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Clipboard redirection can exfiltrate data between the session and the client.

**Remediation.** Set Terminal Services fDisableClip to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-007 - Set RDP Idle Session Time Limit { #win-rdp-007 }

**Severity:** Low &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

End idle Remote Desktop sessions after a time limit (15 minutes). Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Abandoned idle sessions can be hijacked at the console or over the network.

**Remediation.** Set Terminal Services MaxIdleTime to 900000 (15 minutes, in milliseconds).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-008 - Set RDP Disconnected Session Time Limit { #win-rdp-008 }

**Severity:** Low &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

End disconnected Remote Desktop sessions after a time limit (1 minute). Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Disconnected sessions retain a logged-on context that can be resumed by others.

**Remediation.** Set Terminal Services MaxDisconnectionTime to 60000 (1 minute, in milliseconds).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-RDP-009 - Do Not Allow Saved RDP Passwords { #win-rdp-009 }

**Severity:** Medium &nbsp; **Category:** Remote Access &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent Remote Desktop clients from saving passwords. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Saved RDP credentials let a stolen client reconnect without authentication.

**Remediation.** Set Terminal Services DisablePasswordSaving to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-SMB-001 - Disable SMBv1 { #win-smb-001 }

**Severity:** High &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

SMBv1 is a deprecated protocol vulnerable to EternalBlue-class remote code execution and lateral movement. It must be disabled on the server.

**Rationale.** Remote code execution and lateral movement via legacy SMB protocol.

**Remediation.** Disable the SMBv1 server by setting the LanmanServer Parameters value SMB1 to 0. CloudInfra Secure applies this automatically; reboot to fully remove the SMBv1 driver.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3)

### WIN-SMB-003 - Require SMB Signing (Server) { #win-smb-003 }

**Severity:** High &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The SMB server must require packet signing to prevent tampering and man-in-the-middle attacks on file traffic.

**Rationale.** Unsigned SMB traffic can be intercepted or modified in transit.

**Remediation.** Set LanmanServer Parameters RequireSecuritySignature to 1 to require SMB signing.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-digitally-sign-communications-always](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-digitally-sign-communications-always)

### WIN-SMB-004 - Disable SMBv1 Client { #win-smb-004 }

**Severity:** High &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The SMBv1 client driver (mrxsmb10) must be disabled to prevent the host connecting over the vulnerable SMBv1 protocol.

**Rationale.** SMBv1 client use exposes the host to EternalBlue-class and downgrade attacks.

**Remediation.** Set the mrxsmb10 service Start value to 4 (disabled) to disable the SMBv1 client driver.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3)

### WIN-SMB-005 - Require SMB Client Signing { #win-smb-005 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The SMB client must require packet signing to protect outbound file traffic from tampering.

**Rationale.** Unsigned SMB client traffic can be intercepted or modified.

**Remediation.** Set LanmanWorkstation Parameters RequireSecuritySignature to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-client-digitally-sign-communications-always](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-client-digitally-sign-communications-always)

### WIN-SMB-006 - Restrict Anonymous Access to Named Pipes and Shares { #win-smb-006 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Anonymous (null session) access to named pipes and shares must be restricted.

**Rationale.** Null sessions can enumerate and access shares without authentication.

**Remediation.** Set LanmanServer Parameters RestrictNullSessAccess to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-restrict-anonymous-access-to-named-pipes-and-shares](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/network-access-restrict-anonymous-access-to-named-pipes-and-shares)

### WIN-SMB-007 - Disable SMB Client Insecure Guest Logons { #win-smb-007 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent the SMB client from making insecure guest logons to file servers. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Insecure guest access exposes clients to rogue/man-in-the-middle SMB servers.

**Remediation.** Set LanmanWorkstation AllowInsecureGuestAuth to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-SMB-008 - Do Not Send Unencrypted Password to Third-Party SMB Servers { #win-smb-008 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Prevent the SMB client from sending plaintext passwords to non-Microsoft SMB servers.

**Rationale.** Plaintext passwords on the wire can be captured by a network eavesdropper.

**Remediation.** Set LanmanWorkstation Parameters EnablePlainTextPassword to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-client-send-unencrypted-password-to-third-party-smb-servers](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-client-send-unencrypted-password-to-third-party-smb-servers)

### WIN-SMB-009 - Digitally Sign Client Communications (If Server Agrees) { #win-smb-009 }

**Severity:** Low &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The SMB client negotiates signing whenever the server supports it.

**Rationale.** Unsigned SMB sessions are vulnerable to tampering and relay.

**Remediation.** Set LanmanWorkstation Parameters EnableSecuritySignature to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-client-digitally-sign-communications-if-server-agrees](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-client-digitally-sign-communications-if-server-agrees)

### WIN-SMB-010 - Digitally Sign Server Communications (If Client Agrees) { #win-smb-010 }

**Severity:** Low &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The SMB server negotiates signing whenever the client supports it.

**Rationale.** Unsigned SMB sessions are vulnerable to tampering and relay.

**Remediation.** Set LanmanServer Parameters EnableSecuritySignature to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-digitally-sign-communications-if-client-agrees](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-digitally-sign-communications-if-client-agrees)

### WIN-SMB-011 - Idle Time Required Before Suspending an SMB Session (15 min) { #win-smb-011 }

**Severity:** Low &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Suspend idle SMB sessions after 15 minutes.

**Rationale.** Idle sessions consume resources and can be resumed by an attacker.

**Remediation.** Set LanmanServer Parameters AutoDisconnect to 15.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-amount-of-idle-time-required-before-suspending-session](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-amount-of-idle-time-required-before-suspending-session)

### WIN-SMB-012 - Disconnect Clients When Logon Hours Expire { #win-smb-012 }

**Severity:** Low &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Force-disconnect SMB clients when their logon hours expire.

**Rationale.** Sessions that outlive logon hours bypass time-based access controls.

**Remediation.** Set LanmanServer Parameters EnableForcedLogOff to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-disconnect-clients-when-logon-hours-expire](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-disconnect-clients-when-logon-hours-expire)

### WIN-SMB-013 - Server SPN Target Name Validation Level { #win-smb-013 }

**Severity:** Medium &nbsp; **Category:** Network Protocols &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Validate the SPN provided by SMB clients to mitigate SMB relay attacks.

**Rationale.** Without SPN validation, SMB is exposed to relay attacks.

**Remediation.** Set LanmanServer Parameters SmbServerNameHardeningLevel to 1 (Accept if provided by client).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-server-spn-target-name-validation-level](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/microsoft-network-server-server-spn-target-name-validation-level)

### WIN-SVC-001 - Disable Remote Registry Service { #win-svc-001 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Service &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The Remote Registry service must be stopped and disabled to reduce remote attack surface.

**Rationale.** Remote Registry enables remote reconnaissance and modification of the registry.

**Remediation.** Stop and disable the RemoteRegistry service.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-SVC-002 - Disable Print Spooler Service { #win-svc-002 }

**Severity:** Medium &nbsp; **Category:** Attack Surface Reduction &nbsp; **Provider:** Service &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Enterprise

The Print Spooler service must be stopped and disabled on servers that do not print (PrintNightmare mitigation).

**Rationale.** The Print Spooler has a history of critical remote code execution vulnerabilities.

**Remediation.** Stop and disable the Spooler service. Do not apply to print servers.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-TLS-001 - Enable TLS 1.2 (Server) { #win-tls-001 }

**Severity:** Medium &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Explicitly enable the TLS 1.2 SCHANNEL server endpoint.

**Rationale.** If TLS 1.2 is not enabled, services may negotiate weaker or no encryption.

**Remediation.** Set SCHANNEL TLS 1.2 Server Enabled to 1. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-002 - Enable TLS 1.2 (Client) { #win-tls-002 }

**Severity:** Medium &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Explicitly enable the TLS 1.2 SCHANNEL client endpoint.

**Rationale.** If TLS 1.2 is not enabled, outbound connections may negotiate weaker encryption.

**Remediation.** Set SCHANNEL TLS 1.2 Client Enabled to 1. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-003 - Disable RC4 128/128 Cipher { #win-tls-003 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the weak RC4 128/128 SCHANNEL cipher.

**Rationale.** RC4 is a broken stream cipher vulnerable to practical attacks.

**Remediation.** Set SCHANNEL Ciphers RC4 128/128 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-004 - Disable RC4 40/128 Cipher { #win-tls-004 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the weak RC4 40/128 SCHANNEL cipher.

**Rationale.** RC4 40-bit is trivially breakable.

**Remediation.** Set SCHANNEL Ciphers RC4 40/128 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-005 - Disable Triple DES 168 Cipher { #win-tls-005 }

**Severity:** Medium &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the legacy Triple DES 168 SCHANNEL cipher.

**Rationale.** 3DES is vulnerable to birthday (Sweet32) attacks and is deprecated.

**Remediation.** Set SCHANNEL Ciphers Triple DES 168 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-006 - Disable RC4 56/128 Cipher { #win-tls-006 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the weak RC4 56/128 SCHANNEL cipher.

**Rationale.** RC4 is a broken stream cipher vulnerable to practical attacks.

**Remediation.** Set SCHANNEL Ciphers RC4 56/128 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-007 - Disable RC4 64/128 Cipher { #win-tls-007 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the weak RC4 64/128 SCHANNEL cipher.

**Rationale.** RC4 is a broken stream cipher vulnerable to practical attacks.

**Remediation.** Set SCHANNEL Ciphers RC4 64/128 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-008 - Disable DES 56/56 Cipher { #win-tls-008 }

**Severity:** Medium &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the legacy DES 56/56 SCHANNEL cipher.

**Rationale.** Single DES with a 56-bit key is trivially breakable.

**Remediation.** Set SCHANNEL Ciphers DES 56/56 Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-009 - Disable NULL Cipher { #win-tls-009 }

**Severity:** Medium &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Standard

Disable the SCHANNEL NULL cipher (no encryption).

**Rationale.** The NULL cipher provides authentication without confidentiality.

**Remediation.** Set SCHANNEL Ciphers NULL Enabled to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-010 - Disable TLS 1.0 (Server) { #win-tls-010 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

TLS 1.0 is a deprecated protocol with known weaknesses. The SCHANNEL server endpoint for TLS 1.0 must be disabled.

**Rationale.** Downgrade and cryptographic attacks against legacy TLS.

**Remediation.** Disable the TLS 1.0 server endpoint by setting the SCHANNEL TLS 1.0 Server Enabled value to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-011 - Disable TLS 1.1 (Server) { #win-tls-011 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

TLS 1.1 is a deprecated protocol. The SCHANNEL server endpoint for TLS 1.1 must be disabled.

**Rationale.** Downgrade and cryptographic attacks against legacy TLS.

**Remediation.** Disable the TLS 1.1 server endpoint by setting the SCHANNEL TLS 1.1 Server Enabled value to 0. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `FedRAMP` `PCI DSS v4.0` `ISO/IEC 27001` `HIPAA Security Rule` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-012 - Disable SSL 3.0 (Server) { #win-tls-012 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

The deprecated SSL 3.0 protocol must be disabled on the SCHANNEL server endpoint.

**Rationale.** SSL 3.0 is vulnerable to POODLE and other attacks.

**Remediation.** Set the SCHANNEL SSL 3.0 Server Enabled value to 0. Requires a reboot.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-TLS-013 - Disable SSL 2.0 (Server) { #win-tls-013 }

**Severity:** High &nbsp; **Category:** Cryptography &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

The obsolete SSL 2.0 protocol must be disabled on the SCHANNEL server endpoint.

**Rationale.** SSL 2.0 is fundamentally insecure and must not be offered.

**Remediation.** Set the SCHANNEL SSL 2.0 Server Enabled value to 0. Requires a reboot.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings](https://learn.microsoft.com/en-us/windows-server/security/tls/tls-registry-settings)

### WIN-UAC-001 - User Account Control Enabled { #win-uac-001 }

**Severity:** High &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** Yes &nbsp; **Tier:** Essential

User Account Control (UAC) must be enabled (EnableLUA = 1) to enforce administrative elevation prompts. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Disabling UAC allows silent privilege escalation by malicious code.

**Remediation.** Enable User Account Control by setting EnableLUA to 1 under the CurrentVersion Policies System key. A reboot is required to take effect.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `CMMC Level 2` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-run-all-administrators-in-admin-approval-mode](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-run-all-administrators-in-admin-approval-mode)

### WIN-UAC-002 - UAC Elevation Prompt for Administrators { #win-uac-002 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Administrator elevation must prompt for consent on the secure desktop. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Weak elevation prompts allow silent or spoofed privilege escalation.

**Remediation.** Set Policies System ConsentPromptBehaviorAdmin to 2 (prompt for consent on the secure desktop).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-behavior-of-the-elevation-prompt-for-administrators-in-admin-approval-mode](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-behavior-of-the-elevation-prompt-for-administrators-in-admin-approval-mode)

### WIN-UAC-003 - UAC Detect Application Installations { #win-uac-003 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

UAC must detect application installations and prompt for elevation. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Silent installer elevation allows privilege escalation via installers.

**Remediation.** Set Policies System EnableInstallerDetection to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-detect-application-installations-and-prompt-for-elevation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-detect-application-installations-and-prompt-for-elevation)

### WIN-UAC-004 - Deny UAC Elevation Prompt for Standard Users { #win-uac-004 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Standard users must not be prompted to elevate; elevation requests are automatically denied. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Prompting standard users to elevate encourages credential sharing and misuse.

**Remediation.** Set Policies System ConsentPromptBehaviorUser to 0 (automatically deny).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-behavior-of-the-elevation-prompt-for-standard-users](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-behavior-of-the-elevation-prompt-for-standard-users)

### WIN-UAC-005 - UAC Switch to the Secure Desktop for Elevation { #win-uac-005 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Elevation prompts must be shown on the secure desktop to resist spoofing. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Elevation prompts on the interactive desktop can be spoofed to capture credentials.

**Remediation.** Set Policies System PromptOnSecureDesktop to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-switch-to-the-secure-desktop-when-prompting-for-elevation](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-switch-to-the-secure-desktop-when-prompting-for-elevation)

### WIN-UAC-006 - Only Elevate UIAccess Apps in Secure Locations { #win-uac-006 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only allow UIAccess applications installed in secure file-system locations to elevate. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** UIAccess apps outside secure paths can bypass UI privilege isolation.

**Remediation.** Set Policies System EnableSecureUIAPaths to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-only-elevate-uiaccess-applications-that-are-installed-in-secure-locations](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-only-elevate-uiaccess-applications-that-are-installed-in-secure-locations)

### WIN-UAC-007 - Apply UAC Token Filtering to Remote Local Accounts { #win-uac-007 }

**Severity:** High &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Force UAC remote-access token filtering for local accounts so they connect without full administrator rights. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Un-filtered remote local-admin tokens enable pass-the-hash lateral movement.

**Remediation.** Set Policies System LocalAccountTokenFilterPolicy to 0 (token filtering enabled).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-UAC-008 - Admin Approval Mode for the Built-in Administrator { #win-uac-008 }

**Severity:** Medium &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Apply Admin Approval Mode (UAC prompts) to the built-in Administrator account. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Without this, the built-in Administrator runs with full rights and no elevation prompt.

**Remediation.** Set Policies System FilterAdministratorToken to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-admin-approval-mode-for-the-built-in-administrator-account](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-admin-approval-mode-for-the-built-in-administrator-account)

### WIN-UAC-009 - Virtualize File and Registry Write Failures to Per-User Locations { #win-uac-009 }

**Severity:** Low &nbsp; **Category:** Privilege Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Redirect legacy per-machine file and registry writes to per-user locations. Group Policy setting: this control checks the corresponding Group Policy registry value; a domain Group Policy applied after hardening can override the local configuration.

**Rationale.** Disabling virtualization can cause legacy apps to write to protected locations.

**Remediation.** Set Policies System EnableVirtualization to 1.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-virtualize-file-and-registry-write-failures-to-per-user-locations](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-account-control-virtualize-file-and-registry-write-failures-to-per-user-locations)

### WIN-URA-001 - Access Credential Manager as a Trusted Caller = No One { #win-ura-001 }

**Severity:** High &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

No account should hold the Access Credential Manager as a trusted caller right.

**Rationale.** This right lets a process retrieve stored credentials from Credential Manager.

**Remediation.** Configure the 'SeTrustedCredManAccessPrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-002 - Act as Part of the Operating System = No One { #win-ura-002 }

**Severity:** High &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

No account should be able to act as part of the operating system (TCB).

**Rationale.** This right allows a process to impersonate any user and bypass access controls.

**Remediation.** Configure the 'SeTcbPrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-003 - Create a Token Object = No One { #win-ura-003 }

**Severity:** High &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

No account should be able to create an access token object.

**Rationale.** Creating arbitrary tokens allows privilege escalation to any identity.

**Remediation.** Configure the 'SeCreateTokenPrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-004 - Create Permanent Shared Objects = No One { #win-ura-004 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

No account should be able to create permanent shared objects.

**Rationale.** This right can be used to expose sensitive data or cause denial of service via the object namespace.

**Remediation.** Configure the 'SeCreatePermanentPrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-005 - Debug Programs = Administrators Only { #win-ura-005 }

**Severity:** High &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should hold the Debug programs right.

**Rationale.** Debug rights allow reading and modifying the memory of any process, including LSASS.

**Remediation.** Assign the 'SeDebugPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-006 - Deny Access to This Computer From the Network (includes Guests) { #win-ura-006 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Guests must be denied network logon to this computer.

**Rationale.** Network logon by guest accounts enables anonymous access and lateral movement.

**Remediation.** Add the required principals (e.g. Guests) to the 'SeDenyNetworkLogonRight' user right.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-007 - Deny Log On as a Batch Job (includes Guests) { #win-ura-007 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Guests must be denied batch logon.

**Rationale.** Batch logon by guests could run scheduled tasks under an untrusted identity.

**Remediation.** Add the required principals (e.g. Guests) to the 'SeDenyBatchLogonRight' user right.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-008 - Deny Log On as a Service (includes Guests) { #win-ura-008 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Guests must be denied service logon.

**Rationale.** Service logon by guests could run services under an untrusted identity.

**Remediation.** Add the required principals (e.g. Guests) to the 'SeDenyServiceLogonRight' user right.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-009 - Deny Log On Locally (includes Guests) { #win-ura-009 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Guests must be denied local (interactive) logon.

**Rationale.** Interactive logon by guests permits console access by untrusted users.

**Remediation.** Add the required principals (e.g. Guests) to the 'SeDenyInteractiveLogonRight' user right.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-010 - Deny Log On Through Remote Desktop Services (includes Guests) { #win-ura-010 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Guests must be denied logon through Remote Desktop Services.

**Rationale.** RDP logon by guests exposes remote sessions to untrusted users.

**Remediation.** Add the required principals (e.g. Guests) to the 'SeDenyRemoteInteractiveLogonRight' user right.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-011 - Force Shutdown From a Remote System = Administrators Only { #win-ura-011 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to shut down the system remotely.

**Rationale.** Remote shutdown by non-administrators enables denial of service.

**Remediation.** Assign the 'SeRemoteShutdownPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-012 - Generate Security Audits = Local Service, Network Service { #win-ura-012 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Local Service and Network Service should generate security audit entries.

**Rationale.** This right can be abused to flood or forge the security log.

**Remediation.** Assign the 'SeAuditPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-013 - Impersonate a Client After Authentication = Service Accounts and Administrators { #win-ura-013 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators and the built-in service accounts should hold the Impersonate a client right.

**Rationale.** Unrestricted impersonation is the basis of many privilege-escalation (potato) attacks.

**Remediation.** Assign the 'SeImpersonatePrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-014 - Load and Unload Device Drivers = Administrators Only { #win-ura-014 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to load and unload device drivers.

**Rationale.** Loading drivers allows execution of arbitrary kernel-mode code.

**Remediation.** Assign the 'SeLoadDriverPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-015 - Manage Auditing and Security Log = Administrators Only { #win-ura-015 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to manage auditing and the security log.

**Rationale.** This right allows clearing the security log to hide malicious activity.

**Remediation.** Assign the 'SeSecurityPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-016 - Take Ownership of Files or Other Objects = Administrators Only { #win-ura-016 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to take ownership of objects.

**Rationale.** Taking ownership lets a user override object permissions and access any resource.

**Remediation.** Assign the 'SeTakeOwnershipPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-017 - Access This Computer From the Network = Administrators, Authenticated Users { #win-ura-017 }

**Severity:** High &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators and Authenticated Users should be able to access this computer from the network.

**Rationale.** Over-broad network logon rights widen the remote attack surface.

**Remediation.** Assign the 'SeNetworkLogonRight' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-018 - Allow Log On Locally = Administrators { #win-ura-018 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to log on locally to a server.

**Rationale.** Broad local logon rights allow non-administrators console access.

**Remediation.** Assign the 'SeInteractiveLogonRight' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-019 - Allow Log On Through Remote Desktop Services = Administrators, Remote Desktop Users { #win-ura-019 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators and Remote Desktop Users should log on through Remote Desktop Services.

**Rationale.** Excess RDS logon rights expand remote-access exposure.

**Remediation.** Assign the 'SeRemoteInteractiveLogonRight' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-020 - Back Up Files and Directories = Administrators { #win-ura-020 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should hold the Back up files and directories right.

**Rationale.** This right bypasses file permissions to read any file on the system.

**Remediation.** Assign the 'SeBackupPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-021 - Restore Files and Directories = Administrators { #win-ura-021 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should hold the Restore files and directories right.

**Rationale.** This right bypasses file permissions to overwrite any file, enabling privilege escalation.

**Remediation.** Assign the 'SeRestorePrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-022 - Change the System Time = Administrators, Local Service { #win-ura-022 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators and Local Service should be able to change the system time.

**Rationale.** Altering the clock can defeat time-based security and corrupt audit timelines.

**Remediation.** Assign the 'SeSystemtimePrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-023 - Change the Time Zone = Administrators, Local Service, Users { #win-ura-023 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Restrict the Change the time zone right to Administrators, Local Service, and Users.

**Rationale.** Time-zone changes can confuse local log interpretation if granted too broadly.

**Remediation.** Assign the 'SeTimeZonePrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-024 - Create a Pagefile = Administrators { #win-ura-024 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to create a pagefile.

**Rationale.** Pagefile manipulation can be used to affect system performance or memory forensics.

**Remediation.** Assign the 'SeCreatePagefilePrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-025 - Create Global Objects = Administrators and Service Accounts { #win-ura-025 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators and the built-in service accounts should create global objects.

**Rationale.** Global object creation can be abused for cross-session attacks and escalation.

**Remediation.** Assign the 'SeCreateGlobalPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-026 - Create Symbolic Links = Administrators { #win-ura-026 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to create symbolic links (add Virtual Machines on Hyper-V hosts).

**Rationale.** Symbolic-link creation enables link-following attacks against privileged processes.

**Remediation.** Assign the 'SeCreateSymbolicLinkPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-027 - Adjust Memory Quotas for a Process = Administrators and Service Accounts { #win-ura-027 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Restrict Adjust memory quotas for a process to Administrators, Local Service, and Network Service.

**Rationale.** This right can be used to starve other processes of memory (denial of service).

**Remediation.** Assign the 'SeIncreaseQuotaPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-028 - Increase Scheduling Priority = Administrators, Window Manager { #win-ura-028 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Restrict Increase scheduling priority to Administrators and Window Manager.

**Rationale.** Raising process priority can be used to degrade or monopolise system responsiveness.

**Remediation.** Assign the 'SeIncreaseBasePriorityPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-029 - Lock Pages in Memory = No One { #win-ura-029 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

No account should hold the Lock pages in memory right.

**Rationale.** Locking pages in physical memory can be abused to cause denial of service.

**Remediation.** Configure the 'SeLockMemoryPrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-030 - Perform Volume Maintenance Tasks = Administrators { #win-ura-030 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to perform volume maintenance tasks.

**Rationale.** This right permits raw disk access that can bypass file-level security.

**Remediation.** Assign the 'SeManageVolumePrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-031 - Profile Single Process = Administrators { #win-ura-031 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to profile a single process.

**Rationale.** Process profiling can reveal sensitive information about running software.

**Remediation.** Assign the 'SeProfileSingleProcessPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-032 - Replace a Process Level Token = Local Service, Network Service { #win-ura-032 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Local Service and Network Service should hold the Replace a process-level token right.

**Rationale.** This right can be used to launch processes under a different identity.

**Remediation.** Assign the 'SeAssignPrimaryTokenPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-033 - Shut Down the System = Administrators { #win-ura-033 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to shut down the system.

**Rationale.** Broad shutdown rights allow non-administrators to cause an availability outage.

**Remediation.** Assign the 'SeShutdownPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-034 - Modify Firmware Environment Values = Administrators { #win-ura-034 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Only Administrators should be able to modify firmware environment values.

**Rationale.** Firmware/boot variable changes can undermine platform boot integrity.

**Remediation.** Assign the 'SeSystemEnvironmentPrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-035 - Enable Accounts to Be Trusted for Delegation = No One { #win-ura-035 }

**Severity:** High &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

On member servers, no account should be able to enable accounts to be trusted for delegation.

**Rationale.** Delegation trust can be abused to impersonate users across services.

**Remediation.** Configure the 'SeEnableDelegationPrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-036 - Obtain an Impersonation Token for Another User = No One { #win-ura-036 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

No account should be able to obtain an impersonation token for another user in the same session.

**Rationale.** Session impersonation tokens can be used to escalate to another user context.

**Remediation.** Configure the 'SeDelegateSessionUserImpersonatePrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-037 - Modify an Object Label = No One { #win-ura-037 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

No account should be able to modify an object integrity label.

**Rationale.** Relabeling objects can subvert mandatory integrity control protections.

**Remediation.** Configure the 'SeRelabelPrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-038 - Synchronize Directory Service Data = No One { #win-ura-038 }

**Severity:** Medium &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

On member servers, no account should hold the Synchronize directory service data right.

**Rationale.** This right allows bulk reading of directory data (a DCSync-style exposure).

**Remediation.** Configure the 'SeSyncAgentPrivilege' user right so that no account holds it.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-URA-039 - Profile System Performance = Administrators, WdiServiceHost { #win-ura-039 }

**Severity:** Low &nbsp; **Category:** User Rights Assignment &nbsp; **Provider:** SecEdit &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

Restrict Profile system performance to Administrators and the WdiServiceHost service.

**Rationale.** System profiling can expose timing and workload information about the host.

**Remediation.** Assign the 'SeSystemProfilePrivilege' user right to exactly the expected principals.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/security-policy-settings/user-rights-assignment)

### WIN-VBS-001 - Enable Virtualization Based Security { #win-vbs-001 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Enterprise

Enable Virtualization Based Security (VBS), the hardware-isolated foundation for Credential Guard and memory integrity.

**Rationale.** Without VBS, kernel-level malware can compromise credentials and code integrity.

**Remediation.** Set Control DeviceGuard EnableVirtualizationBasedSecurity to 1 (requires a reboot and compatible hardware).

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/hardware-security/enable-virtualization-based-protection-of-code-integrity](https://learn.microsoft.com/en-us/windows/security/hardware-security/enable-virtualization-based-protection-of-code-integrity)

### WIN-VBS-002 - Require Secure Boot for VBS { #win-vbs-002 }

**Severity:** Medium &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Enterprise

Require Secure Boot as the VBS platform security feature.

**Rationale.** Without Secure Boot, the boot chain that VBS relies on is not verified.

**Remediation.** Set Control DeviceGuard RequirePlatformSecurityFeatures to 1 (Secure Boot). A reboot is required.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/hardware-security/enable-virtualization-based-protection-of-code-integrity](https://learn.microsoft.com/en-us/windows/security/hardware-security/enable-virtualization-based-protection-of-code-integrity)

### WIN-VBS-003 - Enable Memory Integrity (HVCI) { #win-vbs-003 }

**Severity:** High &nbsp; **Category:** Exploit Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** Yes &nbsp; **Tier:** Enterprise

Enable hypervisor-enforced code integrity (memory integrity / HVCI) to protect kernel-mode code.

**Rationale.** Without HVCI, malicious or vulnerable drivers can run unsigned code in the kernel.

**Remediation.** Set Control DeviceGuard Scenarios HypervisorEnforcedCodeIntegrity Enabled to 1. A reboot is required.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/hardware-security/enable-virtualization-based-protection-of-code-integrity](https://learn.microsoft.com/en-us/windows/security/hardware-security/enable-virtualization-based-protection-of-code-integrity)

### WIN-WDIGEST-001 - Disable WDigest Credential Caching { #win-wdigest-001 }

**Severity:** High &nbsp; **Category:** Credential Protection &nbsp; **Provider:** Registry &nbsp; **Delivery:** Direct &nbsp; **Reboot:** No &nbsp; **Tier:** Essential

WDigest must not cache plaintext credentials in memory.

**Rationale.** WDigest plaintext credential caching enables credential theft.

**Remediation.** Set SecurityProviders WDigest UseLogonCredential to 0 to disable plaintext caching.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `CMMC Level 2` `HIPAA Security Rule` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-WINRM-001 - Disable WinRM Client Basic Authentication { #win-winrm-001 }

**Severity:** Medium &nbsp; **Category:** Remote Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The WinRM client must not allow Basic authentication. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** WinRM Basic auth transmits credentials with weak protection.

**Remediation.** Set Policies Microsoft Windows WinRM Client AllowBasic to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-WINRM-002 - Disallow WinRM Unencrypted Traffic { #win-winrm-002 }

**Severity:** Medium &nbsp; **Category:** Remote Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The WinRM service must not allow unencrypted traffic. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Unencrypted WinRM traffic exposes management data and credentials.

**Remediation.** Set Policies Microsoft Windows WinRM Service AllowUnencryptedTraffic to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

### WIN-WINRM-003 - Disable WinRM Client Digest Authentication { #win-winrm-003 }

**Severity:** Medium &nbsp; **Category:** Remote Management &nbsp; **Provider:** Registry &nbsp; **Delivery:** Group Policy &nbsp; **Reboot:** No &nbsp; **Tier:** Standard

The WinRM client must not use Digest authentication. Group Policy setting: this control checks the corresponding Group Policy registry value, so it can report non-compliant until the policy is explicitly configured (even where the effective Windows default is already secure), and a domain Group Policy applied after hardening can override it.

**Rationale.** Digest authentication is weaker than Kerberos/Negotiate and can expose credentials.

**Remediation.** Set Policies Microsoft Windows WinRM Client AllowDigest to 0.

**Compliance alignment:** `DISA STIG` `NIST CSF` `NIST SP 800-53 Rev 5` `NIST SP 800-171` `PCI DSS v4.0` `ISO/IEC 27001` `Microsoft Cloud Security Benchmark` `Microsoft Security Baselines` `NIS2` `UK Cyber Essentials`

**References:**
- [https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines)

