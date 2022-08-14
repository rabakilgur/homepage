var word = document.getElementById('bubble3');
var letters =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','&','!','0','1','2','3','4','5','6','7','8','9'];
var skip = 4;
var counter = 0;
var timer = 0;
var swap = function() {
  if(counter++ == skip) {
    randWord = 
      letters[Math.floor(Math.random()*37)]
    + letters[Math.floor(Math.random()*37)]
    + letters[Math.floor(Math.random()*37)]
    + letters[Math.floor(Math.random()*37)]
    + letters[Math.floor(Math.random()*37)]
    + letters[Math.floor(Math.random()*37)];
    word.innerHTML = randWord;
    word.dataset.text = randWord;
    counter = 0;
    timer++;
  }
  if(timer < 25) {
    window.requestAnimationFrame(swap);
  }
  else {
    word.innerHTML = "<a style='color:red;'>Hallo!</a>";
    word.dataset.text = "Hallo!";
  }
}
swap();