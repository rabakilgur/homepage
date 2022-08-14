var Messenger = function(el){
  'use strict';
  var m = this;

  m.init = function(){
    m.codeletters = "#*+%?@§$abcdefghijklmnopjrstuvwxyz0123456789";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = el.getAttribute("data-glitch_text").split(" | ");

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      el.innerHTML = message;

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }

    var do_cycles = false;
    var message = '';

    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    el.innerHTML = message;

    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }

    m.fadeBuffer = false;




		function blendStrings(rStr, startLength){
			var resultString = "";
			var x = startLength / String(rStr).length;
			for (var i = 0; i < String(rStr).length - 3; i++){
				var y = Math.random() * String(el.innerHTML).length * 2;
				if (y >= x){
					rStr = String(rStr).substr(0, i) + String(el.innerHTML).substr(i, 1) + String(rStr).substr(i + 1);
				}
			}
			return rStr;
		}

    function cutBackString(length, startLength){
			var randomString =m.generateRandomString(length);
      el.innerHTML = blendStrings(randomString, startLength);
      m.current_length = length;
      if(length > 0){
        setTimeout(function(){ cutBackString(length - 1, startLength); }, 50);
      } else {
				el.innerHTML= '';
    		m.current_length = 0;
				setTimeout(m.animateIn, 200);
			}
    }

    cutBackString(m.current_length, m.current_length);

  };

  m.init();
}


function getAllElemWithAttr(attribute)
{
  var matchingElem = [];
  var allElem = document.getElementsByTagName('*');
  for (var i = 0, n = allElem.length; i < n; i++)
  {
    if (allElem[i].getAttribute(attribute) !== null)
    {
      // If elem exists with attribute, add it to matchingElem
      matchingElem.push(allElem[i]);
    }
  }
  return matchingElem;
}

getAllElemWithAttr("data-glitch_text").forEach(function(elem, index){
  var messenger = new Messenger(elem);
});
