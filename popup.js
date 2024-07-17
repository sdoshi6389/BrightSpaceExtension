let script = document.getElementById("batchscript")

var port = null;

script.addEventListener('click', () => {
    port = chrome.runtime.connectNative('com.runscript.script');
    onDisconnect();
})

function onDisconnect() {
    port.onDisconnect.addListener(function () {
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError);
        }
    });
}