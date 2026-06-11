# ⚔️ AINCRAD KEYGEN

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0-00ffcc?style=for-the-badge&logo=google-chrome&logoColor=white" />
  <img src="https://img.shields.io/badge/Manifest-V3-0078d7?style=for-the-badge&logo=googlechrome&logoColor=white" />
  <img src="https://img.shields.io/badge/Platform-Chrome-f28c28?style=for-the-badge&logo=googlechrome&logoColor=white" />
  <img src="https://img.shields.io/badge/Made%20by-Mr%20Cyb3rgh0st-ff003c?style=for-the-badge&logo=hackaday&logoColor=white" />
  <img src="https://img.shields.io/github/stars/Mr-Cyb3rgh0st/Aincrad-_keygen_extension-?style=for-the-badge&color=gold&logo=github&logoColor=white" />
  <img src="https://img.shields.io/github/license/Mr-Cyb3rgh0st/Aincrad-_keygen_extension-?style=for-the-badge&color=blueviolet" />
</p>

> **Auto Cloudflare Bypass & JS Injection Engine**  
> A powerful Chrome Extension built for seamless session key extraction — with a hacker-style terminal UI.

---

[📥 Download CRX](#-installation) · [⚡ Features](#-features) · [🚀 Usage](#-how-to-use) · [🛡️ Permissions](#%EF%B8%8F-permissions-used) · [👤 Developer](#-developer)

</div>

---

## 📌 Overview

**Aincrad Keygen** is a Chrome Extension (Manifest V3) that automates the process of bypassing Cloudflare protection and extracting session authentication keys from supported target pages.

It features:
- 🧠 Intelligent silent scraping engine
- 🍪 Auto cookie management with retry logic
- 🔐 Password-protected secure access gate
- 💻 Sleek hacker-style terminal UI with animated panels
- 📌 Chrome Side Panel support for permanent access

> ⚠️ **Note:** Only the compiled `.crx` binary is distributed. Source code is not included in this release.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Secure Auth Gate** | Password-protected login screen before any operation |
| ☁️ **Cloudflare Bypass** | Automated bypass mechanism for CF-protected routes |
| 💉 **JS Injection Engine** | Silently injects payload scripts into target pages |
| 🍪 **Smart Cookie Management** | Auto-clears cookies and retries when extraction fails |
| ⏱️ **Countdown Timer** | Visual 30-second tunnel initialization sequence |
| 📋 **One-Click Copy** | Instantly copy the extracted key to clipboard |
| 🔄 **Clear & Retry** | Manual override button for a fresh session attempt |
| 💻 **Terminal Hacker UI** | Dark-themed popup with animated scan-line aesthetics |
| ⚡ **Background Service Worker** | Persistent background operation with Manifest V3 |
| 📌 **Side Panel Mode** | Pin the panel for easy sidebar access while browsing |
| 🚫 **Domain Guard** | Auto-detects and blocks operation on unsupported sites |
| 🔔 **Update Notifier** | Built-in update alert screen for version checks |

---

## 📥 Installation

> No Chrome Web Store required. Install directly via the `.crx` file from the [Releases](https://github.com/Mr-Cyb3rgh0st/Aincrad-_keygen_extension-/releases) page.

### ✅ Method 1 — Drag & Drop (Recommended)

1. Go to the [**Releases**](https://github.com/Mr-Cyb3rgh0st/Aincrad-_keygen_extension-/releases) tab and download **`Ainecrad Keygen.crx`**
2. Open Chrome and navigate to: `chrome://extensions/`
3. Enable **Developer Mode** (toggle at top-right corner)
4. **Drag and drop** the `.crx` file directly onto the extensions page
5. Click **"Add Extension"** when the prompt appears
6. ✅ The **Aincrad Keygen** icon will appear in your Chrome toolbar

---

### 🔧 Method 2 — Force Install (If Blocked by Chrome)

If Chrome blocks the drag-and-drop installation:

1. Open a new tab and go to `chrome://flags/`
2. Search for **`#extensions-menu-access-control`** and set it to **Disabled**
3. Relaunch Chrome when prompted
4. Retry **Method 1**

---

### 🛡️ Method 3 — Enterprise Policy (Advanced)

For persistent installation across sessions without Developer Mode warnings:

1. Create the registry key:  
   `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallAllowlist`
2. Add the extension ID as a string value
3. Restart Chrome

---

## 🚀 How to Use

```
1. Click the [AINCRAD KEYGEN] icon in your Chrome toolbar
       ↓
2. Enter your secure authentication password on the login screen
       ↓
3. Navigate to a supported target domain (aincradmods.com | tarviral.com | rodaemotor.com)
       ↓
4. The extension verifies the target → shows "TARGET LOCKED" screen
       ↓
5. Click [INITIALIZE TUNNEL] to start the 30-second encrypted session setup
       ↓
6. Click [EXECUTE OVERRIDE] to inject the payload into the target page
       ↓
7. On success → "PAYLOAD SECURED" screen appears with your extracted key
       ↓
8. Click [⎘ COPY KEY] to copy it instantly to clipboard
```

> 💡 **Tip:** If no key is found, click **"⟳ CLEAR COOKIES & RETRY"** to wipe the session and start fresh.

---

## 🖥️ UI Screens

| Screen | Trigger |
|---|---|
| **Login Gate** | Extension opened — password required |
| **Access Denied** | Unsupported/wrong domain detected |
| **Target Locked** | Correct domain verified, ready to inject |
| **Missile Launching** | Countdown tunnel initialization (30s) |
| **Injection Ready** | Tunnel established, awaiting execute command |
| **Payload Secured** | Key successfully extracted |
| **Update Required** | Extension version outdated |

---

## 🌐 Supported Domains

The extension operates exclusively on these verified targets:

```
✅ aincradmods.com
✅ tarviral.com
✅ rodaemotor.com
```

Any other domain will trigger the **ACCESS DENIED** screen.

---

## 🛡️ Permissions Used

| Permission | Why It's Needed |
|---|---|
| `activeTab` | Read the currently active tab's content |
| `scripting` | Inject JavaScript payload into target pages |
| `tabs` | Monitor tab navigation and URL changes |
| `storage` | Persist the extracted key and auth state locally |
| `cookies` | Read and clear session cookies for retry logic |
| `browsingData` | Clear cache and cookies during retry mechanism |
| `sidePanel` | Enable Chrome Side Panel docking support |

---

## 📦 Release Contents

| File | Type | Description |
|---|---|---|
| `Ainecrad Keygen.crx` | Binary | Ready-to-install Chrome Extension package |

> 📌 Source code is **obfuscated and not distributed** in this release. Only the compiled `.crx` binary is provided.

---

## ⚙️ Technical Specifications

```json
{
  "name": "AINCRAD KEYGEN",
  "version": "1.0",
  "manifest_version": 3,
  "background": "service_worker → background.js",
  "ui": "popup.html + side_panel (popup.html)",
  "permissions": [
    "activeTab", "scripting", "tabs",
    "storage", "sidePanel", "cookies", "browsingData"
  ],
  "host_permissions": ["https://*/*", "http://*/*"]
}
```

---

## 📋 Changelog

### v1.0 — Initial Release
- ✅ Password-protected login gate
- ✅ Cloudflare bypass engine
- ✅ JS payload injection system
- ✅ Smart cookie clear & retry mechanism
- ✅ 30-second tunnel countdown UI
- ✅ One-click key copy
- ✅ Domain whitelist guard
- ✅ Chrome Side Panel support
- ✅ Update notification screen

---

## ⚠️ Disclaimer

> This tool is developed strictly for **educational and research purposes only.**  
> The developer holds **no responsibility** for any misuse, damage, or illegal activity arising from the use of this extension.  
> You must only use this tool on websites and accounts **you own or have been explicitly authorized to test.**  
> Unauthorized use against third-party systems may violate **computer fraud and abuse laws** in your jurisdiction.

---

## 👤 Developer

<div align="center">

<br>

**Mr Cyb3rgh0st**

*"In the world of Aincrad, the keys to power are earned — not given."*

<br>

[![Telegram](https://img.shields.io/badge/Contact%20on-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/MrCyb3rgh0st)

<br>

</div>

---

<div align="center">

**⭐ If this tool helped you, please star the repository! ⭐**

<br>

`© 2025 Mr Cyb3rgh0st — AINCRAD KEYGEN v1.0 | All Rights Reserved`

</div>
