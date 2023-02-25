$( window ).on( "orientationchange", function( event ) {
	setTimeout(function() {
		if (window.innerHeight < window.innerWidth) {
			alert("This app only works in portrait mode!");
		}
	}, 1000)
});
