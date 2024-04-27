function calculate() {
  var firstNumber = parseFloat(document.getElementById("firstNumber").value);
  var secondNumber = parseFloat(document.getElementById("secondNumber").value);
  var operation = document.getElementById("operation").value;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Не допустимый выбор. Повторите ввод.");
    return;
  }

  var result;

  switch (operation) {
    case "1":
      result = firstNumber + secondNumber;
      break;
    case "2":
      result = firstNumber - secondNumber;
      break;
    case "3":
      result = firstNumber * secondNumber;
      break;
    case "4":
      if (secondNumber === 0) {
        alert("Деление на ноль невозможно.");
        return;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      alert("Не допустимый выбор. Повторите ввод.");
      return;
  }

  alert("Результат: " + result);
}
