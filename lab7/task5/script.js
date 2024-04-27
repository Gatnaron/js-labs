document.addEventListener("mousemove", function (event) {
  var xPosition = event.clientX;

  if (xPosition % 50 === 0) {
    changeStyles();
  }
});

function changeStyles() {
  var body = document.body;
  var container = document.querySelector(".container");

  // Random background color
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = randomColor;

  // Random text color
  var randomTextColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  container.style.color = randomTextColor;

  // Random font size
  var randomFontSize = Math.floor(Math.random() * 20) + 10;
  container.style.fontSize = randomFontSize + "px";
}
