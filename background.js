let nova_meta = null;
let nova_meta_url = null;

chrome.runtime.onMessage.addListener((req, sender) => {
    if (sender.tab && req.nova_meta) {
        nova_meta = req.nova_meta;
        nova_meta_url = req.nova_meta_url;

        chrome.browserAction.setIcon({
            tabId: sender.tab.id,
            path: {
            16: `icons/16.png`,
            48: `icons/48.png`,
            128: `icons/128.png`
            }
        })
    }
})

function navigate() {
    let path = '/nova';
    let resource = null;
    let id = null;

    let parts = nova_meta.split(',').map(s => s.trim().split('='));

    parts.forEach(part => {
        if(part[0] == 'resource') {
            resource = part[1]
        } else if(part[0] == 'path') {
            path = part[1]
        } else if(part[0] == 'id') {
            id = part[1]
        }
    })

    chrome.tabs.update({url: nova_meta_url + '/' + path + '/resources/' + resource + '/' + id});
}

chrome.browserAction.onClicked.addListener(navigate);