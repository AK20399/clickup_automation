var tab_title = '';
function display_h1(results) {
    h1 = results;
    console.log("resuL:", results)
    document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
}

function funcToExecute() {
    return document.querySelector("h2").textContent;
}

chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        function: funcToExecute
    }, display_h1);
});