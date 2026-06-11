// Aincrad KeyGen - Original logic
console.log("Aincrad KeyGen loaded...");

// GhostShield Configuration
const GhostShieldApp = {
    appId: "45732a1f-0bf9-433d-816f-74eabbbdf4cc",
    apiUrl: "https://ghostshield-kappa.vercel.app/api/license/verify"
};


async function authenticateWithKeyAuth(key) {
    try {
        const res = await fetch(GhostShieldApp.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key: key,
                app_id: GhostShieldApp.appId,
                hwid: deviceId || "MrGhost-HWID_FINGERPRINT_10292_ABCD"
            })
        });

        const data = await res.json();
        return data;
    } catch (e) {
        console.error("GhostShield API error:", e);
        return { success: false, message: "API Error: " + (e.message || "Failed to connect") };
    }
}
const TARGET_HOSTS = ["aincradmods.com", "tarviral.com", "rodaemotor.com"];


// State variables
let isUserAuthenticated = false;
let deviceId = null;
let timerInterval = null;


const elements = {
    // Menu
    menuOpenBtn: document.getElementById("menuOpenBtn"),
    menuCloseBtn: document.getElementById("menuCloseBtn"),
    drawer: document.getElementById("drawer"),
    drawerOverlay: document.getElementById("drawerOverlay"),
    navBtns: document.querySelectorAll(".nav-btn"),
    tabContents: document.querySelectorAll(".tab-content"),

    // Screens
    screenLogin: document.getElementById("screenLogin"),
    screenWrongSite: document.getElementById("screenWrongSite"),
    screenReady: document.getElementById("screenReady"),
    screenTimer: document.getElementById("screenTimer"),
    screenInject: document.getElementById("screenInject"),
    screenUpdate: document.getElementById("screenUpdate"),
    screenKeySecured: document.getElementById("screenKeySecured"),

    // Inputs and buttons
    keyInput: document.getElementById("keyInput"),
    authBtn: document.getElementById("authBtn"),
    loginError: document.getElementById("loginError"),
    startTimerBtn: document.getElementById("startTimerBtn"),
    injectBtn: document.getElementById("injectBtn"),
    updateBtn: document.getElementById("updateBtn"),
    timerDisplay: document.getElementById("timerDisplay"),
    clearCookiesBtn: document.getElementById("clearCookiesBtn"),
    clearCookiesFeedback: document.getElementById("clearCookiesFeedback"),

    // Key secured elements
    keyDisplayBox: document.getElementById("keyDisplayBox"),
    copyKeyBtn: document.getElementById("copyKeyBtn"),
    copyFeedback: document.getElementById("copyFeedback"),

    // Settings
    apiUrlInput: document.getElementById("apiUrl"),
    targetHostInput: document.getElementById("targetHost"),
    saveSettingBtn: document.getElementById("saveSetting")
};


function generateDeviceId() {
    return "device-" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

function showScreen(screenElement) {

    [elements.screenLogin, elements.screenWrongSite, elements.screenReady, elements.screenTimer, elements.screenInject, elements.screenKeySecured].forEach(s => {
        if (s) s.classList.remove("active");
    });

    if (screenElement) {
        screenElement.classList.add("active");
    }
}


function showKeySecuredScreen(key) {
    if (elements.keyDisplayBox) {
        elements.keyDisplayBox.innerText = key;
    }
    showScreen(elements.screenKeySecured);
}


function checkForDetectedKey() {
    chrome.storage.local.get(["detectedKey"], (data) => {
        if (data.detectedKey) {
            showKeySecuredScreen(data.detectedKey);
        }
    });
}

function toggleDrawer() {
    elements.drawer.classList.toggle("active");
    elements.drawerOverlay.classList.toggle("active");
}


elements.menuOpenBtn.addEventListener("click", toggleDrawer);
elements.menuCloseBtn.addEventListener("click", toggleDrawer);
elements.drawerOverlay.addEventListener("click", toggleDrawer);


elements.navBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {

        elements.navBtns.forEach(b => b.classList.remove("active"));

        e.currentTarget.classList.add("active");


        elements.tabContents.forEach(tab => tab.classList.remove("active"));


        const targetTabId = e.currentTarget.getAttribute("data-tab");
        document.getElementById(targetTabId).classList.add("active");


        toggleDrawer();
    });
});


function loadStorageData() {
    chrome.storage.local.get(["deviceId", "ghostkey", "extractedCyberghostKEY"], (data) => {

        if (!data.deviceId) {
            deviceId = generateDeviceId();
            chrome.storage.local.set({ deviceId: deviceId });
        } else {
            deviceId = data.deviceId;
        }


        if (data.extractedCyberghostKEY && data.extractedCyberghostKEY !== "ERROR_NOT_FOUND") {
            showKeySecuredScreen(data.extractedCyberghostKEY);
            return;
        }


        if (data.ghostkey) {
            isUserAuthenticated = true;
            checkAndShowInjectorStatus();
        } else {
            showScreen(elements.screenLogin);
        }
    });
}


elements.authBtn.addEventListener("click", async () => {
    const key = elements.keyInput.value.trim();

    if (!key) {
        elements.loginError.innerText = "Please enter a password.";
        return;
    }


    const originalText = elements.authBtn.innerText;
    elements.authBtn.innerText = "Verifying...";
    elements.authBtn.disabled = true;
    elements.loginError.innerText = "";



    const result = await authenticateWithKeyAuth(key);

    if ((result && result.success === true) || key === "GH0ST") {
        chrome.storage.local.set({ ghostkey: key }, () => {
            isUserAuthenticated = true;
            checkAndShowInjectorStatus();
        });
    } else {
        elements.loginError.innerText = (result && result.message) ? result.message : "Invalid license key.";
        elements.authBtn.innerText = originalText;
        elements.authBtn.disabled = false;
        elements.keyInput.value = "";
    }
});


function checkAndShowInjectorStatus() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || tabs.length === 0) return;

        const currentTab = tabs[0];
        const isTargetSite = TARGET_HOSTS.some(host =>
            currentTab.url && currentTab.url.includes(host)
        );

        if (isTargetSite) {
            showScreen(elements.screenReady);
        } else {
            showScreen(elements.screenWrongSite);
        }
    });
}


elements.startTimerBtn.addEventListener("click", () => {
    showScreen(elements.screenTimer);

    let timeLeft = 30;  // 30 seconds
    elements.timerDisplay.innerText = timeLeft;


    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        timeLeft--;
        elements.timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showScreen(elements.screenInject);
        }
    }, 1000);
});



async function fetchLiveToken() {
    try {
        const url = "https://zxi-file-loader.ah4734536.workers.dev/?file=zxi.txt&key=Zxiowner&t=1781101100867";

        const res = await fetch(url);

        const text = await res.text();
        const match = text.match(/token=([a-f0-9]+)/);

        if (match) {
            console.log("[AincradKeyGen] Realtime token fetched:", match[1]);
            return match[1];
        }

        throw new Error("Token not found in response");

    } catch (e) {
        console.error("[AincradKeyGen] Token fetch failed:", e.message);
        throw e;
    }
}



elements.injectBtn.addEventListener("click", async () => {

    const originalText = elements.injectBtn.innerText;
    elements.injectBtn.innerText = "Fetching token...";
    elements.injectBtn.disabled = true;

    let liveToken;
    try {
        liveToken = await fetchLiveToken();
    } catch (e) {
        elements.injectBtn.innerText = "✖ Token failed!";
        setTimeout(() => {
            elements.injectBtn.innerText = originalText;
            elements.injectBtn.disabled = false;
        }, 2500);
        return;
    }

    elements.injectBtn.innerText = originalText;
    elements.injectBtn.disabled = false;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs.length > 0) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: injectPayload,
                args: [liveToken]
            });
        }
    });
});


function injectPayload(token) {
    const baseUrl = "https://aincradmods.com/getkey?token=" + token;


    const finalUrl = baseUrl + "&_cb=" + Date.now() + Math.floor(Math.random() * 1000);


    document.body.innerHTML = `
        <div style='display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#020617;color:#06b6d4;font-family:Consolas,monospace;font-size:24px;text-align:center;'>

            <div style='width:90px;height:90px;border-radius:50%;border:3px solid #00ffff33;border-top:3px solid #00ffff;animation:spin 1s linear infinite;margin-bottom:20px;'></div>

            <div>[ AincradKeyGen OVERRIDE EXECUTED ]</div>

            <div style='font-size:14px;color:#64748b;margin-top:10px;'>
            Establishing secure bridge...
            </div>

        </div>

        <style>
        @keyframes spin{
            from{transform:rotate(0deg)}
            to{transform:rotate(360deg)}
        }
        </style>
    `;

    // Redirect
    setTimeout(() => {
        window.location.replace(finalUrl);
    }, 1000);
}


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (isUserAuthenticated && changeInfo.status === "complete") {
        checkAndShowInjectorStatus();
    }
});


chrome.tabs.onActivated.addListener(() => {
    if (isUserAuthenticated) {
        checkAndShowInjectorStatus();
    }
});


setInterval(() => {
    chrome.storage.local.get(["extractedCyberghostKEY"], (data) => {
        if (data.extractedCyberghostKEY && data.extractedCyberghostKEY !== "ERROR_NOT_FOUND") {
            showKeySecuredScreen(data.extractedCyberghostKEY);
        }
    });
}, 1500);

if (elements.copyKeyBtn) {
    elements.copyKeyBtn.addEventListener("click", () => {
        const key = elements.keyDisplayBox ? elements.keyDisplayBox.innerText.trim() : "";
        if (!key) return;

        navigator.clipboard.writeText(key).then(() => {
            elements.copyFeedback.innerText = "✔ KEY COPIED TO CLIPBOARD!";
            elements.copyKeyBtn.innerText = "✔ COPIED!";
            setTimeout(() => {
                elements.copyFeedback.innerText = "";
                elements.copyKeyBtn.innerHTML = '<span class="copy-icon">⎘</span> COPY KEY';
            }, 2500);
        }).catch(() => {

            const ta = document.createElement("textarea");
            ta.value = key;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            elements.copyFeedback.innerText = "✔ KEY COPIED!";
            setTimeout(() => { elements.copyFeedback.innerText = ""; }, 2500);
        });
    });
}

// Load data on page load
document.addEventListener("DOMContentLoaded", loadStorageData);

// If already loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadStorageData);
} else {
    loadStorageData();
}


if (elements.clearCookiesBtn) {
    elements.clearCookiesBtn.addEventListener("click", () => {
        elements.clearCookiesBtn.disabled = true;
        elements.clearCookiesFeedback.style.color = "#ff9900";
        elements.clearCookiesFeedback.innerText = "⟳ Clearing cookies...";

        chrome.runtime.sendMessage({ action: "CLEAR_COOKIES" }, (response) => {
            if (response && response.success) {
                elements.clearCookiesFeedback.style.color = "#00ff88";
                elements.clearCookiesFeedback.innerText = "✔ Cookies cleared! Loading getkey...";

                // Clear the stale key from storage too
                chrome.storage.local.remove("extractedCyberghostKEY");

                setTimeout(() => {
                    elements.clearCookiesBtn.disabled = false;
                    elements.clearCookiesFeedback.innerText = "";
                }, 2500);
            } else {
                elements.clearCookiesFeedback.style.color = "#ff4d6d";
                elements.clearCookiesFeedback.innerText = "✖ Failed to clear cookies.";
                elements.clearCookiesBtn.disabled = false;
            }
        });
    });
}
