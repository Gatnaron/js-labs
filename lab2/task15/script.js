document.addEventListener("DOMContentLoaded", function () {
  var output = document.getElementById("output");
  var startButton = document.getElementById("startButton");

  startButton.addEventListener("click", function () {
    var result = "";

    for (var i = 0; i <= 10; i++) {
      for (var j = 0; j <= i; j++) {
        result += j;
      }
      result += "<br>";
    }

    output.innerHTML = result;
  });
});
