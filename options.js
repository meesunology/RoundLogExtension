// Saves options to chrome.storage
function save_options() {
  var newtab = document.getElementById('newtab').value;
  chrome.storage.sync.set({
    chosenNewTab: newtab
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value newtab = 'staffpage'
  chrome.storage.sync.get({
    chosenNewTab: 'staffpage'
  }, function(items) {
    document.getElementById('newtab').value = items.chosenNewTab;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);