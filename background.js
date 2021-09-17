var info = null;
var port = null;

function connected(p) {
  port = p;

  updatePort();
}

function updatePort() {
    if (port) {
        port.postMessage(info);
    }
}

function updateStatus() {
    if (info && info.VPN) {
        browser.browserAction.setTitle({ title: "Connected to Perfect Privacy" })
        browser.browserAction.setIcon({ path: { 32: "icons/perfect-privacy-32.png" } });
    } else {
        browser.browserAction.setIcon({ path: { 32: "icons/perfect-privacy-32-inactive.png" } });
        browser.browserAction.setTitle({ title: "Not Connected to Perfect Privacy" })
    }
}


function checkIp(_tabs) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://checkip.perfect-privacy.com/json", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            info = JSON.parse(this.responseText);
        } else {
            info = null;
        }

        updateStatus();
    }

    var res = xhr.send(null);
}

browser.tabs.onUpdated.addListener(checkIp);
browser.tabs.onActivated.addListener(checkIp);
browser.windows.onFocusChanged.addListener(checkIp);
browser.runtime.onConnect.addListener(connected);

checkIp(null);
