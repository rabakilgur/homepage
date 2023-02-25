function clocky_look() {
	var mouseX = event.clientX;     // Get the horizontal coordinate
	var mouseY = event.clientY;     // Get the vertical coordinate
	var clocky = document.getElementById("clocky");
	var face = clocky.getBoundingClientRect();
	var faceX = Math.floor(face.left) + 100;
	var faceY = Math.floor(face.top) + 100;
	var relX = mouseX - faceX;
	var relY = mouseY - faceY;
	var rotX = relX/4;
	var rotY = relY/4;
	var vectorL = Math.sqrt(rotX * rotX + rotY * rotY);
	var oldrotX = rotX;
	var oldrotY = rotY;
	if (vectorL > 30) {
		var ratio = vectorL / 30;
		rotX = (rotX / ratio);
		rotY = (rotY / ratio);
	}
	rotX = rotX + (oldrotX / 20);
	rotY = rotY + (oldrotY / 20);

	clocky.style.transform = "rotateX(" + -rotY + "deg) rotateY(" + rotX + "deg)";
}

function clocky_blink() {
	document.getElementById("clocky").classList.toggle("clocky-blink");
	setTimeout(function(){
		document.getElementById("clocky").classList.toggle("clocky-blink");
	},100);
}

function clocky_sexyblink() {
	document.getElementById("clocky").classList.toggle("clocky-sexyblink");
	setTimeout(function(){
		document.getElementById("clocky").classList.toggle("clocky-sexyblink");
	},100);
}

function clocky_smirk() {
	document.getElementById("clocky").classList.toggle("clocky-smirk");
	setTimeout(function(){
		document.getElementById("clocky").classList.toggle("clocky-smirk");
	},400);
}

function clocky_random_blink() {
	clocky_blink();
	 setTimeout(function(){
		 clocky_random_blink();
	 },Math.floor((Math.random() * 18 + 2) * 1000));
}
function clocky_random_smirk() {
	clocky_smirk();
	 setTimeout(function(){
		 clocky_random_smirk();
	 },Math.floor((Math.random() * 15 + 5) * 1000));
}

document.querySelector("body").addEventListener("mousemove", function() { clocky_look() });
document.querySelector(".clocky-face").addEventListener("click", function() { clocky_sexyblink() });
document.querySelector(".navi_box").addEventListener("click", function() { clocky_blink() });
clocky_random_blink();
clocky_random_smirk();
