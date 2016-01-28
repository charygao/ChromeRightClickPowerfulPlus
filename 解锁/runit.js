chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.executeScript(null, {file: "rightclick_plus.js"});
});

