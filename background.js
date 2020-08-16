chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/www\.nzherald/.test(current_tab_info.url)){
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('code injected'));
        }
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.status == 'complete'){
        console.log('trest');
        if (/^https:\/\/www\.nzherald/.test(tab.url)){
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('code injected'));
        }
    }
 }); 
