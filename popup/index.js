var port = browser.runtime.connect({name: "background"});

port.onMessage.addListener(function(info) {
    info = info || {}

    document.getElementById("ip-value").innerHTML = info.IP || "N/A"
    document.getElementById("dns-value").innerHTML = info.DNS || "N/A"
    document.getElementById("country-value").innerHTML = info.COUNTRY || "N/A"
    document.getElementById("city-value").innerHTML = info.CITY || "N/A"
});
