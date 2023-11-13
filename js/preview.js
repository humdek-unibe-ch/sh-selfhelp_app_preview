document.addEventListener('DOMContentLoaded', function () {
    // Function to be called when selection changes
    document.getElementById('version').addEventListener('change', handleSelectChange);
    reloadIframe(document.getElementById('version').value);
});

// Function to be called when selection changes
function handleSelectChange() {
    var selectedVersion = document.getElementById('version').value;
    reloadIframe(selectedVersion);
}

function reloadIframe(version) {
    var iframe = document.getElementById('iFrame');
    iFrameSrc = 'https://tpf-test.humdek.unibe.ch/SelfHelpMobilePreview/' + version;
    iframe.src = iFrameSrc;
}