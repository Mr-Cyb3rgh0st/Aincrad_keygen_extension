console.log("Aincrad KeyGen Background Service started...");


if (chrome.sidePanel && chrome.sidePanel.setPanelBehavior) {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .then(() => console.log("Desktop Detected: Side Panel Activated."))
    .catch((error) => console.error("Panel Error:", error));
} else {
  console.log("Mobile Detected: Side Panel not supported. Using standard popup.");
}


chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.remove("extractedCyberghostKEY", () => {
    console.log("[Aincrad KeyGen] Browser restarted — stale key cleared.");
  });
});


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.remove("extractedCyberghostKEY", () => {
    console.log("[Aincrad KeyGen] Extension installed/updated — key cleared.");
  });
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    try {
      const url = new URL(tab.url);

  
      const isTargetPage =
        url.hostname.includes("aincradmods.com") &&
        url.pathname.includes("getkey");

      
      const hasValidParam =
        (url.searchParams.has("getKey") && url.searchParams.get("getKey") !== "") ||
        (url.searchParams.has("token") && url.searchParams.get("token") !== "");


      if (isTargetPage && hasValidParam) {


        chrome.storage.local.remove("extractedCyberghostKEY", () => {
          console.log("[Aincrad KeyGen] Old key cleared. Waiting for new key...");
        });

        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: () => {

            const codeEls = document.querySelectorAll("code");
            let foundKey = null;


            for (const el of codeEls) {
              const text = el.innerText.trim();
              if (text.includes("AINCRAD")) {
                foundKey = text;
                break;
              }
            }

        
            if (foundKey) {
              chrome.storage.local.set({ extractedCyberghostKEY: foundKey });
              console.log("[Aincrad KeyGen] Payload secured and sent to UI.");
            } else {
              chrome.storage.local.set({ extractedCyberghostKEY: "ERROR_NOT_FOUND" });
              console.log("[Aincrad KeyGen] Key not found in code tags.");

            }
          },
        });
      }
    } catch (error) {

    }
  }
});


const GETKEY_URL = "https://aincrad.decryptvpn.xyz/getkey";


function clearAincradCookies(callback) {
  const TARGET_DOMAIN = "aincradmods.com";


  chrome.browsingData.remove(
    {
      origins: [
        "https://" + TARGET_DOMAIN,
        "http://" + TARGET_DOMAIN
      ]
    },
    { cookies: true, cache: true },
    () => {
      console.log("[Aincrad KeyGen] browsingData cookies cleared for " + TARGET_DOMAIN);
      if (callback) callback();
    }
  );


  chrome.cookies.getAll({ domain: TARGET_DOMAIN }, (cookies) => {
    for (const cookie of cookies) {
      const protocol = cookie.secure ? "https://" : "http://";
      const cookieUrl = protocol + cookie.domain.replace(/^\./, "") + cookie.path;
      chrome.cookies.remove({ url: cookieUrl, name: cookie.name });
    }
    console.log("[Aincrad KeyGen] Manually removed " + cookies.length + " cookie(s).");
  });
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "CLEAR_COOKIES") {
    clearAincradCookies(() => {

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
