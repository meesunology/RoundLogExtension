function show() {
  var roundLogReminder = setInterval(function() {
    new Notification('Hey! It\'s time to do a round log!', {
        icon: '48.png',
        body: 'Press the extension to open up our round log.'
    })
    }, 900000); //15 minutes in miliseconds

}

// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.frequency = 1;        // The display frequency, in minutes.
  localStorage.isInitialized = true; // The option initialization.
}
// Test for notification support.
if (window.Notification) {
  // While activated, show notifications at the display frequency.
  if (JSON.parse(localStorage.isActivated)) { show(); }
  var interval = 0; // The display interval, in minutes.
  setInterval(function() {
    interval++;
    if (
      JSON.parse(localStorage.isActivated) &&
        localStorage.frequency <= interval
    ) {
      show();
      interval = 0;
    }
  }, 60000);
}