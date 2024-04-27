// Объявление переменных различных типов
var stringVariable = "Привет, это строка!";
var numericVariable = "42";
var floatVariable = "3.14";
var invalidNumber = "abc";
var combinedVariable = "№ - " + numericVariable;
var quotes =
  "Вам нужна " +
  "\u0022кредитная карта\u0022" +
  ", чтобы совершить покупки через 'Интрнет'.";

// Преобразование строк в числа с использованием parseInt и parseFloat
var numericValue = parseInt(numericVariable, 10); // преобразование строки в целое число
var floatValue = parseFloat(floatVariable); // преобразование строки в число с плавающей точкой
var invalidValue = parseInt(invalidNumber, 10); // попытка преобразования недопустимой строки

// Вывод переменных в окне браузера
document.write("<p>Строковая переменная: " + stringVariable + "</p>");
document.write(
  "<p>Числовая переменная (как строка): " + numericVariable + "</p>"
);
document.write("<p>Комбинированная переменная: " + combinedVariable + "</p>");
document.write("<p>Целочисленное значение: " + numericValue + "</p>");
document.write("<p>Число с плавающей точкой: " + floatValue + "</p>");
document.write(quotes);
// Показать, что происходит при невозможности преобразования
if (isNaN(invalidValue)) {
  document.write(
    "<p>Невозможно преобразовать в целое число: " + invalidNumber + "</p>"
  );
} else {
  document.write(
    "<p>Целочисленное значение (недопустимый случай): " + invalidValue + "</p>"
  );
}
