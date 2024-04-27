document.addEventListener("DOMContentLoaded", function () {
  function drawLine(length) {
    var hr = document.createElement("hr");
    hr.setAttribute("align", "center");
    hr.setAttribute("width", length + "px");
    return hr;
  }

  var container = document.getElementById("linesContainer");

  for (var i = 1; i <= 10; i++) {
    var lineLength = i * 10;
    var line = drawLine(lineLength);
    container.appendChild(line);
  }
});
