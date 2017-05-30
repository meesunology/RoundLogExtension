function show() {
  var roundReminder = setInterval(roundLogNotification(), 900000);

}

function roundLogNotification(){
    new Notification('Hello', {
        icon: '48.png',
        body: 'Time to make the toast.'
  });
}
