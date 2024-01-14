function changeBackgroundColor() {
    var element = document.getElementById("myElement");
    var colors = ["red", "green", "blue", "yellow", "orange"];
    var currentColor = element.style.backgroundColor;
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (currentColor === randomColor) {
        changeBackgroundColor();
    } else {
        element.style.backgroundColor = randomColor;
    }
}

setInterval(changeBackgroundColor, 1000);