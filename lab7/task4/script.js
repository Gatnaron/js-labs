// Функция для обработки событий onFocus и onBlur
function changeText(message) {
  document.getElementById("textField").value = message;
}

// Функция для обработки события onClick
function fillTextField(button) {
  var buttonText = button.innerText;
  document.getElementById("buttonText").value = buttonText;
}

// Функция для калькулятора
function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Неверный оператор";
      break;
  }

  document.getElementById("result").innerText = "Результат: " + result;
}
