document.getElementById("block1").addEventListener("click", function () {
  document.getElementById("text2").style.color = "red";
  document.getElementById("block2").style.borderColor = "red";
});

document.getElementById("block2").addEventListener("click", function () {
  document.getElementById("text1").style.color = "blue";
  document.getElementById("block1").style.borderColor = "blue";
});
