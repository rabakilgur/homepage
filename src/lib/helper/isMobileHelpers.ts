/**
 * Checks if the user agent is from a mobile device.
 *
 * Is`true` if the user is accessing the website from a mobile device (Android, webOS, iPhone, iPad, iPod, BlackBerry, or Windows Phone), and `false` otherwise.
 */
const isMobile = !!(navigator.userAgent.match(/Android/i)
	              || navigator.userAgent.match(/webOS/i)
	              || navigator.userAgent.match(/iPhone/i)
	              || navigator.userAgent.match(/iPad/i)
	              || navigator.userAgent.match(/iPod/i)
	              || navigator.userAgent.match(/BlackBerry/i)
	              || navigator.userAgent.match(/Windows Phone/i));
export default isMobile;
