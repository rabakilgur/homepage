$(document).ready(function(){
    var textareaList = document.getElementsByClassName("height-dynamic");
    var textareaArray = Array.prototype.slice.call(textareaList);

    textareaArray.forEach(function(textarea, index){
    	// resize at the start:
    	textarea.rows = 1;
    	textarea.rows = Math.floor(textarea.scrollHeight / 20);

    	// document.getElementsByClassName("height-dynamic")[1].rows = 1;

    	// resize whenever the content of the textarea is changed:
    	textarea.addEventListener('input', function () {
    		this.rows = 1;
    		this.rows = Math.floor(this.scrollHeight / 18);
    	});
    });
});
