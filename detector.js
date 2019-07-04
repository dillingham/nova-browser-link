window.addEventListener('message', e => {
    if (e.source === window && e.data.nova_meta) {
        chrome.runtime.sendMessage(e.data)
    }
})

function detect (window) {

    let novaMeta = false;

    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === 'nova') {
        novaMeta = metas[i].getAttribute('content');
      }
    }

    if(novaMeta) {
        window.postMessage({
            'nova_meta': novaMeta,
            'nova_meta_url': window.location.protocol + '//' + window.location.hostname
        }, '*')
    }
}

if (document instanceof HTMLDocument) {
    installScript(detect)
}

function installScript (fn) {
    const source = ';(' + fn.toString() + ')(window)'
    const script = document.createElement('script')
    script.textContent = source
    document.documentElement.appendChild(script)
    script.parentNode.removeChild(script)
}