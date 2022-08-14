$(document).ready(function(){
	for (var i = 0; i < 60; i++) {
		$('.clock').append("<div class=\"bit b" + i +"\" style=\"transform:rotate(" + i * 6 + "deg) translateY(-260px);\"></div>");
	}
	clock();
	setInterval(clock, 1000);
	function clock() {
		var d = new Date();
		var seconds = d.getSeconds();
		var minutes = d.getMinutes();
		var hours = d.getHours();
		if (hours >= 12) {
			hours -= 12;
		}
		clearClock();
		$('.b' + seconds).addClass('activesec');
		$('.b' + minutes).addClass('active');
		$('.b' + (hours*5)).addClass('activehour');
	}
	function clearClock() {
		for (var i = 0; i < 60; i++) {
			$('.b' + i).removeClass('active').removeClass('activehour').removeClass('activesec');
		}
	}
});