notificationStart();

function notificationStart() {
	setInterval(function() {
		new Notification('Hey! It\'s time to do a round log!', {
        icon: '48.png',
        body: 'Press the extension to open up our round log.'
    });
	}, 900000);
}