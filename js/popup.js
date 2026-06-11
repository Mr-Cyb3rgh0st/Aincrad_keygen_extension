const _0xdec = (val) => {
const raw = atob(val);
const bytes = new Uint8Array(raw.length);
for (let i = 0; i < raw.length; i++) {
bytes[i] = raw.charCodeAt(i) ^ (110 ^ (i % 5));
}
return new TextDecoder().decode(bytes);
};
(function(){
const _0xad = function() {
try {
(function _0xdb(i) {
if (('' + (i / i)).length !== 1 || i % 20 === 0) {
(function(){}).constructor('debugger')();
} else {
debugger;
}
_0xdb(++i);
})(0);
} catch(e) {
setTimeout(_0xad, 1000);
}
};
setTimeout(_0xad, 500);
})();
console.log(_0xdec("LwYCDhgPC0wmDxcoCQNKAgANCQ8KQUJD"));
const _0xgsapp = {
appId: _0xdec("WlpbXlgPXgpAWgwJVUBeXVwIQFJfWQpAXVoKDQ8IDAsKWQkN"),
apiUrl: _0xdec("BhsYHRlUQEMKAgEcGB4CBwoACUcFDhwdC0AZCR8JCwNCDBoeQA0dA0EDBQ4PABwJQhwLHQULEw==")
};
async function _0x1a8f(key) {
try {
const res = await fetch(_0xgsapp.apiUrl, {
method: _0xdec("PiA/OQ=="),
headers: {
[_0xdec("LQACGQ8AG0E5Ex4K")]: _0xdec("Dx8cAQMNDhgEBQBABh4FAA==")
},
body: JSON.stringify({
key: key,
app_id: _0xgsapp.appId,
hwid: _0xdid || _0xdec("Ix0rBQUdG0ElPScrMysjICgpPzo8JiI5NV9fXlRYMS4uLi4=")
})
});
const data = await res.json();
return data;
} catch (e) {
console.error("GhostShield API error:", e);
return { success: false, message: _0xdec("Lz8lTS8cHQMfUE4=") + (e.message || _0xdec("KA4FAQ8KTxgCSg0AAgMPDRs=")) };
}
}
const _0xthst = [_0xdec("DwYCDhgPCwECDh1BDwIH"), _0xdec("Gg4eGwMcDgBDCQEC"), _0xdec("HAAIDA8DABgCGEAMAwA=")];
let _0xauthd = false;
let _0xdid = null;
let _0xtint = null;
const _0xels = {
menuOpenBtn: document.getElementById(_0xdec("AwoCGCUeCgIvHgA=")),
menuCloseBtn: document.getElementById(_0xdec("AwoCGCkCAB8IKBoB")),
drawer: document.getElementById(_0xdec("Ch0NGg8c")),
drawerOverlay: document.getElementById(_0xdec("Ch0NGg8cIBoIGAIOFQ==")),
navBtns: document.querySelectorAll(_0xdec("QAENG0cMGwI=")),
tabContents: document.querySelectorAll(_0xdec("QBsND0cNAAIZDwAb")),
screenLogin: document.getElementById(_0xdec("HQweCA8AIwMKAwA=")),
screenWrongSite: document.getElementById(_0xdec("HQweCA8AOB4CBAk8BRkP")),
screenReady: document.getElementById(_0xdec("HQweCA8APQkMDhc=")),
screenTimer: document.getElementById(_0xdec("HQweCA8AOwUADxw=")),
screenInject: document.getElementById(_0xdec("HQweCA8AJgIHDw0b")),
screenUpdate: document.getElementById(_0xdec("HQweCA8AOhwJCxoK")),
screenKeySecured: document.getElementById(_0xdec("HQweCA8AJAkUOQsMGR8PCg==")),
keyInput: document.getElementById(_0xdec("BQoVJAQeGhg=")),
authBtn: document.getElementById(_0xdec("DxoYBSgaAQ==")),
loginError: document.getElementById(_0xdec("AgALBAQrHR4CGA==")),
startTimerBtn: document.getElementById(_0xdec("HRsNHx46BgEIGCwbAg==")),
injectBtn: document.getElementById(_0xdec("BwEGCAkaLRgD")),
updateBtn: document.getElementById(_0xdec("Gx8IDB4LLRgD")),
timerDisplay: document.getElementById(_0xdec("GgYBCBgqBh8dBg8W")),
clearCookiesBtn: document.getElementById(_0xdec("DQMJDBgtAAMGAwscLhkE")),
clearCookiesFeedback: document.getElementById(_0xdec("DQMJDBgtAAMGAwscKggPCg0NDgE=")),
keyDisplayBox: document.getElementById(_0xdec("BQoVKQMdHwAMEywAFA==")),
copyKeyBtn: document.getElementById(_0xdec("DQAcFCELFi4ZBA==")),
copyFeedback: document.getElementById(_0xdec("DQAcFCwLCggPCw0E")),
apiUrlInput: document.getElementById(_0xdec("Dx8FOBgC")),
targetHostInput: document.getElementById(_0xdec("Gg4eCg8aJwMeHg==")),
saveSettingBtn: document.getElementById(_0xdec("HQ4aCDkLGxgEBAk="))
};
function generateDeviceId() {
return _0xdec("CgoaBAkLQg==") + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}
function _0x8c4d(screenElement) {
[_0xels.screenLogin, _0xels.screenWrongSite, _0xels.screenReady, _0xels.screenTimer, _0xels.screenInject, _0xels.screenKeySecured].forEach(s => {
if (s) s.classList.remove(_0xdec("DwwYBBwL"));
});
if (screenElement) {
screenElement.classList.add(_0xdec("DwwYBBwL"));
}
}
function _0x9a1f(key) {
if (_0xels.keyDisplayBox) {
_0xels.keyDisplayBox.innerText = key;
}
_0x8c4d(_0xels.screenKeySecured);
}
function _0x2f4e() {
chrome.storage.local.get([_0xdec("CgoYCAkaCggmDxc=")], (data) => {
if (data.detectedKey) {
_0x9a1f(data.detectedKey);
}
});
}
function _0x7c3d() {
_0xels.drawer.classList.toggle(_0xdec("DwwYBBwL"));
_0xels.drawerOverlay.classList.toggle(_0xdec("DwwYBBwL"));
}
_0xels.menuOpenBtn.addEventListener(_0xdec("DQMFDgE="), _0x7c3d);
_0xels.menuCloseBtn.addEventListener(_0xdec("DQMFDgE="), _0x7c3d);
_0xels.drawerOverlay.addEventListener(_0xdec("DQMFDgE="), _0x7c3d);
_0xels.navBtns.forEach(btn => {
btn.addEventListener(_0xdec("DQMFDgE="), (e) => {
_0xels.navBtns.forEach(b => b.classList.remove(_0xdec("DwwYBBwL")));
e.currentTarget.classList.add(_0xdec("DwwYBBwL"));
_0xels.tabContents.forEach(tab => tab.classList.remove(_0xdec("DwwYBBwL")));
const targetTabId = e.currentTarget.getAttribute(_0xdec("Cg4YDEcaDg4="));
document.getElementById(targetTabId).classList.add(_0xdec("DwwYBBwL"));
_0x7c3d();
});
});
function _0x4e2c() {
chrome.storage.local.get([_0xdec("CgoaBAkLJgg="), _0xdec("CQcDHh4FChU="), _0xdec("CxcYHwsNGwkJKRcNCR8NBgAfGSErNg==")], (data) => {
const storedDid = data[_0xdec("CgoaBAkLJgg=")];
if (!storedDid) {
_0xdid = generateDeviceId();
chrome.storage.local.set({ [_0xdec("CgoaBAkLJgg=")]: _0xdid });
} else {
_0xdid = storedDid;
}
const extKey = data[_0xdec("CxcYHwsNGwkJKRcNCR8NBgAfGSErNg==")];
if (extKey && extKey !== _0xdec("Kz0+IjgxISM5NSggOSMu")) {
    _0x9a1f(extKey);
    return;
}
const gkey = data[_0xdec("CQcDHh4FChU=")];
if (gkey) {
    _0xauthd = true;
    _0x5d8b();
} else {
    _0x8c4d(_0xels.screenLogin);
}
});
}
_0xels.authBtn.addEventListener(_0xdec("DQMFDgE="), async () => {
const key = _0xels.keyInput.value.trim();
if (!key) {
_0xels.loginError.innerText = _0xdec("PgMJDBkLTwkDHgsdTAxKHg4fHh0BHQhD");
return;
}
const originalText = _0xels.authBtn.innerText;
_0xels.authBtn.innerText = _0xdec("OAoeBAwXBgIKREBB");
_0xels.authBtn.disabled = true;
_0xels.loginError.innerText = "";
const result = await _0x1a8f(key);
if ((result && result.success === true) || key === _0xdec("KSdcPj4=")) {
chrome.storage.local.set({ ghostkey: key }, () => {
_0xauthd = true;
_0x5d8b();
});
} else {
_0xels.loginError.innerText = (result && result.message) ? result.message : _0xdec("JwEaDAYHC0wBAw0KAh4PTgQJFEQ=");
_0xels.authBtn.innerText = originalText;
_0xels.authBtn.disabled = false;
_0xels.keyInput.value = "";
}
});
function _0x5d8b() {
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
if (!tabs || tabs.length === 0) return;
const currentTab = tabs[0];
const isTargetSite = _0xthst.some(host =>
currentTab.url && currentTab.url.includes(host)
);
if (isTargetSite) {
_0x8c4d(_0xels.screenReady);
} else {
_0x8c4d(_0xels.screenWrongSite);
}
});
}
_0xels.startTimerBtn.addEventListener(_0xdec("DQMFDgE="), () => {
_0x8c4d(_0xels.screenTimer);
let timeLeft = 30;
_0xels.timerDisplay.innerText = timeLeft;
if (_0xtint) {
clearInterval(_0xtint);
}
_0xtint = setInterval(() => {
timeLeft--;
_0xels.timerDisplay.innerText = timeLeft;
if (timeLeft <= 0) {
clearInterval(_0xtint);
_0x8c4d(_0xels.screenInject);
}
}, 1000);
});
async function _0x3b9c() {
try {
const url = _0xdec("BhsYHRlUQEMXEgdCCgQGC0IAAgsKCh5DCwZbW15eW1xaQx0BHQcIGB1BCAgcQVAKBAYLUhYVA0AbFBlMBQoVUDAWBgMaBAsdShlXX1hUXFteXl1dWlZZWw==");
const res = await fetch(url);
const text = await res.text();
const match = text.match(/token=([a-f0-9]+)/);
if (match) {
console.log(_0xdec("NS4FAwkcDggmDxcoCQM3Tj0JDAYaBgEIShoABwgETgkJGQkGCghX"), match[1]);
return match[1];
}
throw new Error(_0xdec("OgAHCAROAQMZSggAGQMOTgYCTRgLHBwCBB0K"));
} catch (e) {
console.error(_0xdec("NS4FAwkcDggmDxcoCQM3TjsDBg8ATwoIHg0HTAsLBwMJCVA="), e.message);
throw e;
}
}
_0xels.injectBtn.addEventListener(_0xdec("DQMFDgE="), async () => {
const originalText = _0xels.injectBtn.innerText;
_0xels.injectBtn.innerText = _0xdec("KAoYDgIHAQtNHgEECQNEQEE=");
_0xels.injectBtn.disabled = true;
let liveToken;
try {
liveToken = await _0x3b9c();
} catch (e) {
_0xels.injectBtn.innerText = _0xdec("jPP6TT4BBAkDSggOBQEPCk4=");
setTimeout(() => {
_0xels.injectBtn.innerText = originalText;
_0xels.injectBtn.disabled = false;
}, 2500);
return;
}
_0xels.injectBtn.innerText = originalText;
_0xels.injectBtn.disabled = false;
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
if (tabs && tabs.length > 0) {
chrome.scripting.executeScript({
target: { tabId: tabs[0].id },
func: _0x6e2a,
args: [liveToken]
});
}
});
});
function _0x6e2a(token) {
const _0xdec = (val) => {
const raw = atob(val);
const bytes = new Uint8Array(raw.length);
for (let i = 0; i < raw.length; i++) {
bytes[i] = raw.charCodeAt(i) ^ (110 ^ (i % 5));
}
return new TextDecoder().decode(bytes);
};
const baseUrl = _0xdec("BhsYHRlUQEMMAwAMHgwOAwAIHkQNAAFCDQsbBwgTURsDBg8AUg==") + token;
const finalUrl = baseUrl + "&_cb=" + Date.now() + Math.floor(Math.random() * 1000);
document.body.innerHTML = _0xdec("UgsFG0odGxUBD1NICAQZHgMNFFAIAwkVUQgDCRVHCgYeCAkaBgMDUA0AABgHAFQGGBkaBgoURw0AAhkPABtWDg8AGwkfUQ8DBQoEQwYYCAcdVQ8IBBoKHlYCCwYLBR5UXlxdHAZUDgwJBQgeAh8AC1ZOWlxfWlxdVQwDAQUcVU9dXAxZCFlRCAACGUcIDgEEBhdVLwIEHQAADBlCAgMDBR0fDQ4PVQkDAx5DHAUXD1RdWB0SVRsJFR5DDgAEDQBVDwgEGgoeVk1QZWZNSk5PTE1KTk9MTUpSCwUbSh0bFQEPU0gbBA4aB1ZUWh4XVwUPBwgEGVBXXxwVUQwAHgkPHEIeDA4HGh9XX15KVw8FHAsJH1BdHxRNGQEDBQlKTV9cCwwICV9eUQwAHgkPHEIYAhpUXBwVSh0AAAQOTkxcXQwICQpWCwAGAQweBwACVxkeBgJNWx1PAAQECw4eTQMACQUDAxoKVwALHAgFA0cMABgZBQNVXl0aFlRLU1ZBCwUbVGRlTE1KTk9MTUpOT0xNVgoGGlMxTi4FAwkcDggmDxcoCQNKITkpPzgnKylNLzYqLzg+KytMMFZBCwUbVGRlTE1KTk9MTUpOT0xNVgoGGk0ZGhYACFdJCQMDHkMcBRcPVF5YHRJVDAMBBRxVT1teWVtUD1EDDh4KAwBCGAIaVF5cHRJVSFJnSk5PTE1KTk9MTUpOKh8ZCwwDBR4CBwELTRkLDBkfD04NHgQOCQpCQ0RkT0xNSk5PTE1KTk9MUUUKBhpTYGRPTE1KTk9MTVZBCwUbVGRlTE1KTk9MTUpSHBgUBgtRZk1KTk9MTUpOLwcIEwgdDQAPHU8fHQMAFGZNSk5PTE1KTk9MTUoIHQMAERodDQMZCAAeAFAcABgMHgtHXAkPCUYRZ0pOT0xNSk5PTE1KThsDFh4cDgIeDAEdAVcYARsNGQ9GXFpdDgsIRRBgTk9MTUpOT0wQYE5PTE1KTk9MUUUdGxUBD1A=");
setTimeout(() => {
window.location.replace(finalUrl);
}, 1000);
}
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
if (_0xauthd && changeInfo.status === _0xdec("DQABHQYLGwk=")) {
_0x5d8b();
}
});
chrome.tabs.onActivated.addListener(() => {
if (_0xauthd) {
_0x5d8b();
}
});
setInterval(() => {
chrome.storage.local.get([_0xdec("CxcYHwsNGwkJKRcNCR8NBgAfGSErNg==")], (data) => {
if (data.extractedCyberghostKEY && data.extractedCyberghostKEY !== _0xdec("Kz0+IjgxISM5NSggOSMu")) {
_0x9a1f(data.extractedCyberghostKEY);
}
});
}, 1500);
if (_0xels.copyKeyBtn) {
_0xels.copyKeyBtn.addEventListener(_0xdec("DQMFDgE="), () => {
const key = _0xels.keyDisplayBox ? _0xels.keyDisplayBox.innerText.trim() : "";
if (!key) return;
navigator.clipboard.writeText(key).then(() => {
_0xels.copyFeedback.innerText = _0xdec("jPP4TSErNkwuJT4mKSlKOiBMLiYnPy4iKzwrTQ==");
_0xels.copyKeyBtn.innerText = _0xdec("jPP4TSkhPyUoLk8=");
setTimeout(() => {
_0xels.copyFeedback.innerText = "";
_0xels.copyKeyBtn.innerHTML = '<span class="copy-icon">⎘</span> COPY KEY';
}, 2500);
}).catch(() => {
const ta = document.createElement(_0xdec("GgoUGQscCg0="));
ta.value = key;
document.body.appendChild(ta);
ta.select();
document.execCommand(_0xdec("DQAcFA=="));
document.body.removeChild(ta);
_0xels.copyFeedback.innerText = _0xdec("jPP4TSErNkwuJT4mKSlL");
setTimeout(() => { _0xels.copyFeedback.innerText = ""; }, 2500);
});
});
}
document.addEventListener(_0xdec("KiAhLgUAGwkDHiIADQkPCg=="), _0x4e2c);
if (document.readyState === _0xdec("AgANCQMACA==")) {
document.addEventListener(_0xdec("KiAhLgUAGwkDHiIADQkPCg=="), _0x4e2c);
} else {
_0x4e2c();
}
if (_0xels.clearCookiesBtn) {
_0xels.clearCookiesBtn.addEventListener(_0xdec("DQMFDgE="), () => {
_0xels.clearCookiesBtn.disabled = true;
_0xels.clearCookiesFeedback.style.color = "#ff9900";
_0xels.clearCookiesFeedback.innerText = _0xdec("jPDfTSkCCg0fAwAITA4FAQQFCBlAQUI=");
chrome.runtime.sendMessage({ action: _0xdec("LSMpLDgxLCMiIScqPw==") }, (response) => {
if (response && response.success) {
_0xels.clearCookiesFeedback.style.color = "#00ff88";
_0xels.clearCookiesFeedback.innerText = _0xdec("jPP4TSkBAAcEDx1PDwEPDx0JCUtOIwMMDgcBC00NCxsHCBNAQUI=");
chrome.storage.local.remove(_0xdec("CxcYHwsNGwkJKRcNCR8NBgAfGSErNg=="));
setTimeout(() => {
_0xels.clearCookiesBtn.disabled = false;
_0xels.clearCookiesFeedback.innerText = "";
}, 2500);
} else {
_0xels.clearCookiesFeedback.style.color = "#ff4d6d";
_0xels.clearCookiesFeedback.innerText = _0xdec("jPP6TSwPBgAIDk4bA00JAgoNH0oNAAMGAwscQg==");
_0xels.clearCookiesBtn.disabled = false;
}
});
});
}