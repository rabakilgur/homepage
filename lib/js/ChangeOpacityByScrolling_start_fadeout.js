$(document).ready(function(){ 
    var scroll_pos = 0;
    var animation_begin_pos = 290; //where you want the animation to begin
    var animation_end_pos = 900; //where you want the animation to stop
    var beginning_value = 1; //value at the start
    var ending_value = 0; //value at the end
	myElement = document.getElementById('start_fadeout');
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
            var percentScrolled = (scroll_pos - animation_begin_pos) / (animation_end_pos - animation_begin_pos);
            var newValue = beginning_value + ( ( ending_value - beginning_value ) * percentScrolled );
            myElement.style.MozOpacity=newValue;
			myElement.style.filter = "alpha(opacity=" + (newValue * 100) + ")";
			myElement.style.opacity = newValue;
			/* console.log("opacity: " + newValue); */
        } else if ( scroll_pos > animation_end_pos ) {
            myElement.style.MozOpacity=ending_value;
			myElement.style.filter = "alpha(opacity=" + (ending_value * 100) + ")";
			myElement.style.opacity = ending_value;
        } else if ( scroll_pos < animation_begin_pos ) {
            myElement.style.MozOpacity=beginning_value;
			myElement.style.filter = "alpha(opacity=" + (beginning_value * 100) + ")";
			myElement.style.opacity = beginning_value;
        } else { }
    });
});