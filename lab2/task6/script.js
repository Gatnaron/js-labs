function divideNumbers() {
  var numerator = parseFloat(document.getElementById("numerator").value);
  var denominator = parseFloat(document.getElementById("denominator").value);

  if (denominator === 0) {
    document.getElementById("result").innerText =
      "Ошибка! Делить на ноль нельзя";
  } else {
    var result = numerator / denominator;
    document.getElementById("result").innerText = "Ответ: " + result;
  }
}
