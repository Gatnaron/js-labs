function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  var operation = prompt(
    "Выберите операцию: \n 1 - умножение \n 2 - деление \n 3 - первые пять кратных чисел (введенного первого числа) \n 4 - факториал числа (введенного первого числа)"
  );

  switch (operation) {
    case "1":
      alert("Результат умножения: " + num1 * num2);
      break;
    case "2":
      var subOperation = prompt(
        "Выберите тип деления: \n 1 - частное \n 2 - остаток"
      );
      switch (subOperation) {
        case "1":
          alert("Результат деления: " + num1 / num2);
          break;
        case "2":
          alert("Остаток от деления: " + (num1 % num2));
          break;
        default:
          alert("Неверный выбор");
          break;
      }
      break;
    case "3":
      var multiples = "";
      for (var i = 1; i <= 5; i++) {
        multiples += num1 * i + "\n";
      }
      alert("Первые пять кратных чисел: \n" + multiples);
      break;
    case "4":
      var factorial = 1;
      for (var i = 1; i <= num1; i++) {
        factorial *= i;
      }
      alert("Факториал числа " + num1 + ": " + factorial);
      break;
    default:
      alert("Неверный выбор");
      break;
  }
}
