function openWindow4() {
  window.open("window4.html", "_self");
}

function openNewWindow() {
  var formData = document.getElementById("data").value;
  var newWindow = window.open("", "_blank");
  newWindow.document.write("<h1>Form Data</h1><p>" + formData + "</p>");
}

function closeCurrentWindow() {
  window.close();
}
