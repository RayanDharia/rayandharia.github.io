function setRandomColor() {
    var randomColor = "#";
    for(var i = 0; i < 6; i++) {
        randomColor += (Math.floor(Math.random() * 16)).toString(16);
    }
    document.querySelector("p").setAttribute("style", "color: " + randomColor);
}

const interval = setInterval(function() {
    setRandomColor();
  }, 500);