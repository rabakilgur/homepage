$(document).ready(function(){ 
    var scroll_pos = 0;
    var beginning_value = 10; //value at the start
	myElement = document.getElementById('opt_fixed');
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        myElement.style.top = (beginning_value + scroll_pos) + "px";
    });
});