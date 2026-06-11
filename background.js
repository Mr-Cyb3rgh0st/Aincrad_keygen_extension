const _0xdec = (val) => {
const raw = atob(val);
const bytes = new Uint8Array(raw.length);
for (let i = 0; i < raw.length; i++) {
bytes[i] = raw.charCodeAt(i) ^ (110 ^ (i % 5));
}
return new TextDecoder().decode(bytes);
};
console.log(_0xdec("LwYCDhgPC0wmDxcoCQNKLA4PBg0cABkDDk48CR8cBwwJTRkaDh4ZDwpBQkM="));
if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
chrome.sidePanel
.setPanelBehavior({ openPanelOnActionClick: true })
.then(() => console.log(_0xdec("KgofBh4BH0wpDxoKDxkPClVMPgMKCkw9CwAKAE0rDRsFGwsaCghD")))
.catch((error) => console.error(_0xdec("Pg4CCAZOKh4fBRxV"), error));
} else {
console.log(_0xdec("IwAOBAYLTygIHgsMGAgOVE8/BA4LTzwMBAsDTAMFGk8fGBoeAB4ZDwpBTDgZBwELTRkaDgIJCxwLTB0FHhocQw=="));
}
chrome.runtime.onStartup.addListener(() => {
chrome.storage.local.remove(_0xdec("CxcYHwsNGwkJKRcNCR8NBgAfGSErNg=="), () => {
console.log(_0xdec("NS4FAwkcDghNIQsWKwgEM08uHwUZHAkfShwKHxkLHBsJCUqM7/hNGRoOAAhKBQoVTQkCCg0fDwpB"));
});
});
chrome.runtime.onInstalled.addListener(() => {
chrome.storage.local.remove(_0xdec("CxcYHwsNGwkJKRcNCR8NBgAfGSErNg=="), () => {
console.log("[Aincrad KeyGen] Extension installed/updated — key cleared.");
});
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
if (changeInfo.status === _0xdec("DQABHQYLGwk=") && tab.url) {
try {
const url = new URL(tab.url);
const isTargetPage =
url.hostname.includes(_0xdec("DwYCDhgPCwECDh1BDwIH")) &&
url.pathname.includes("getkey");
const hasValidParam =
(url.searchParams.has(_0xdec("CQoYJg8X")) && url.searchParams.get(_0xdec("CQoYJg8X")) !== "") ||
(url.searchParams.has(_0xdec("GgAHCAQ=")) && url.searchParams.get(_0xdec("GgAHCAQ=")) !== "");
if (isTargetPage && hasValidParam) {
chrome.storage.local.remove(_0xdec("CxcYHwsNGwkJKRcNCR8NBgAfGSErNg=="), () => {
console.log(_0xdec("NS4FAwkcDghNIQsWKwgEM08jAQ5OBAkUSg0DCQwYCwtCTT0PBhgEBAlPCgIYTgEJGkoFChVDREA="));
});
chrome.scripting.executeScript({
target: { tabId: tabId },
func: () => {
const codeEls = document.querySelectorAll(_0xdec("DQAICA=="));
let foundKey = null;
for (const el of codeEls) {
const text = el.innerText.trim();
if (text.includes(_0xdec("LyYiLjgvKw=="))) {
foundKey = text;
break;
}
}
if (foundKey) {
chrome.storage.local.set({ extractedCyberghostKEY: foundKey });
console.log(_0xdec("NS4FAwkcDghNIQsWKwgEM088DBMCAA0JSh0KDxgYCwtMDAQKTx8IBBpPGAJKOyZC"));
} else {
chrome.storage.local.set({ extractedCyberghostKEY: _0xdec("Kz0+IjgxISM5NSggOSMu") });
console.log(_0xdec("NS4FAwkcDghNIQsWKwgEM08nCBNOAQMZSggAGQMOTgYCTQkBCwlNHg8IH0M="));
}
},
});
}
} catch (error) {
}
}
});
const GETKEY_URL = _0xdec("BhsYHRlUQEMMAwAMHgwOQAsJDhgXHxgbGgBBFBQQQQgJGQELFg==");
function _0xccook(callback) {
const TARGET_DOMAIN = _0xdec("DwYCDhgPCwECDh1BDwIH");
chrome.browsingData.remove(
{
origins: [
_0xdec("BhsYHRlUQEM=") + TARGET_DOMAIN,
_0xdec("BhsYHVBBQA==") + TARGET_DOMAIN
]
},
{ cookies: true, cache: true },
() => {
console.log(_0xdec("NS4FAwkcDghNIQsWKwgEM08OHwUZHAUDDSoOGAxKDQADBgMLHEwOBgsOHggOTgkDH0o=") + TARGET_DOMAIN);
if (callback) callback();
}
);
chrome.cookies.getAll({ domain: TARGET_DOMAIN }, (cookies) => {
for (const cookie of cookies) {
const protocol = cookie.secure ? _0xdec("BhsYHRlUQEM=") : _0xdec("BhsYHVBBQA==");
const cookieUrl = protocol + cookie.domain.replace(/^\./, "") + cookie.path;
chrome.cookies.remove({ url: cookieUrl, name: cookie.name });
}
console.log("[Aincrad KeyGen] Manually removed " + cookies.length + " cookie(s).");
});
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
if (request.action === _0xdec("LSMpLDgxLCMiIScqPw==")) {
_0xccook(() => {
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
if (tabs && tabs.length > 0) {
chrome.tabs.update(tabs[0].id, { url: GETKEY_URL });
}
});
sendResponse({ success: true });
});
return true;
}
});