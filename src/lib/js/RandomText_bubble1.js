var word = document.getElementById('bubble1');
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
    word.innerHTML = "<br/>" + randWord;
    word.dataset.text = "<br/>" + randWord;
    counter = 0;
    timer++;
  }
  if(timer < 25) {
    window.requestAnimationFrame(swap);
  }
  else {
    word.innerHTML = "<br/>Hallo!";
    word.dataset.text = "<br/>Hallo!";
  }
}
swap();