function show() {
  setInterval(roundLogReminder(), 900000); //15 minutes in miliseconds
}

function roundLogReminder() {
    new Notification('Hey! It\'s time to do a round log!', {
        icon: '48.png',
        body: 'Press the extension to open up our round log.'
    });
}

show();