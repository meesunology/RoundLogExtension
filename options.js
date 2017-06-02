// Saves options to chrome.storage
function save_options() {
  var newTab = document.getElementById('newTab').value;
  chrome.storage.sync.set({
    chosenNewTab = newTab;
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
  // Use default value newTab = 'staffpage'
  chrome.storage.sync.get({
    chosenNewTab: 'staffpage'
  }, function(items) {
    document.getElementById('newTab').value = items.chosenNewTab;
  });
}
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('restore').addEventListener('click',
    restore_options);