function findMax() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);

  var maxNum = num1;

  if (num2 > maxNum) {
    maxNum = num2;
  }

  if (num3 > maxNum) {
    maxNum = num3;
  }

  document.getElementById("result").innerText = "Максимальное число: " + maxNum;
}
