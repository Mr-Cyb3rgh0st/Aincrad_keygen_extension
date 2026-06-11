# Aincrad KeyGen — Premium Automation Extension

A robust, feature-rich Chrome Extension built on Manifest V3, designed to automate key verification gates, bypass validation tunnels, and securely inject authentication payloads.

---

## ✨ Features

- 🚀 **Automated Token Fetching** — Automatically contacts secure workers to fetch live authentication tokens.
- 💉 **Seamless Injection Bridge** — Dynamically injects override payloads into target sites to establish secure bridges.
- 🍪 **Integrated Cookie Manager** — Built-in utility to clear cookies and caches for target domains to avoid stale sessions.
- 🔒 **GhostShield Integration** — Highly secure client-side licensing check validated directly via GhostShield API.
- 🛡️ **Advanced Self-Defense** — Custom XOR shifting obfuscation and anti-debugging loops to prevent unauthorized inspections or tampering.
- 🎨 **Premium UI/UX** — Modern dark-mode interface with smooth transitions, interactive menus, and feedback state controls.

---

## 📂 Project Structure

```
Ainecrad-Keygen/
├── background.js       # Background worker managing tab events and cookie clearing
├── popup.html          # Extension popup markup (UI Structure)
├── manifest.json       # Manifest V3 extension configuration
├── css/                # Styling assets (modern dark theme)
├── js/
│   └── popup.js        # Core controller (GhostShield licensing, obfuscation & injection)
├── images/             # Extension icons (16px, 48px, 128px)
└── backup_src/         # Raw, unobfuscated source code (for developer reference)
```

---

## 🛠️ Installation Guide

Follow these steps to install the extension locally in Developer Mode:

1. **Download/Clone** this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. In the top-right corner, toggle the **Developer mode** switch **ON**.
4. Click the **Load unpacked** button in the top-left corner.
5. Select the directory containing the project files (where `manifest.json` is located).
6. The extension is now successfully installed and ready to use!

---

## 🛡️ Security & Anti-Analysis

This extension employs custom mitigation techniques to protect developer IP:
- **String Encryption**: Key URLs, identifiers, and storage strings are encrypted using a dynamic XOR-cipher byte shuffler.
- **Debugger Traps**: Self-defending loops continuously monitor for developer tool inspection and will automatically halt context analysis.

*Note: For modification or development, use the clean source files available under the [backup_src/](backup_src/) folder.*

---

## 📜 Disclaimer

This repository is provided for educational and analytical purposes only. The authors are not responsible for any misuse, unauthorized scraping, or violation of third-party terms of service through the use of this tool.
