// 1. Функция приветствия
function greet() {
  document.getElementById("output").innerHTML = "1. Привет, мир!";
}

// 2. Функция сложения чисел
function addNumbers() {
  var num1 = parseFloat(prompt("Введите первое число:"));
  var num2 = parseFloat(prompt("Введите второе число:"));
  var sum = num1 + num2;
  document.getElementById("output").innerHTML = "2. Сумма чисел: " + sum;
}

// 3. Функция сложения элементов массива в обратном порядке с возможностью просмотра выражения
function sumReverseArray() {
  var numbers = [1, 2, 3, 4, 5];
  var sum = 0;
  var expression = "3. Выражение (путь сложения): ";
  for (var i = numbers.length - 1; i >= 0; i--) {
    sum += numbers[i];
    expression += numbers[i];
    if (i !== 0) {
      expression += " + ";
    }
  }
  document.getElementById("output").innerHTML =
    "3. Сумма элементов массива в обратном порядке: " +
    sum +
    "<br>" +
    expression;
}

// 4. Функция добавления элемента в массив с возможностью просмотра массива до добавления
function addItemToArray() {
  var array = [1, 2, 3];
  var newItem = parseInt(prompt("Введите элемент для добавления в массив:"));
  var arrayBefore = array.slice(); // Копируем массив перед добавлением нового элемента
  array.push(newItem);
  var output = "4. Массив до добавления элемента: " + arrayBefore + "<br>";
  output += "Массив после добавления элемента: " + array;
  document.getElementById("output").innerHTML = output;
}

// 5. Функция вывода элементов массива с их порядковым номером
function printArrayWithIndex() {
  var fruits = ["Яблоко", "Груша", "Банан"];
  var output = "5. Элементы массива с порядковым номером:<br>";
  fruits.forEach(function (fruit, index) {
    output += "Элемент " + index + ": " + fruit + "<br>";
  });
  document.getElementById("output").innerHTML = output;
}

// 6. Функция возврата элементов массива
function returnArray() {
  var originalArray = [1, 2, 3];
  var newArray = originalArray.slice();
  document.getElementById("output").innerHTML = "6. Новый массив: " + newArray;
}

// 7. Функция ввода отрицательных и положительных элементов
function inputPositiveAndNegativeElements() {
  var positiveElements = [];
  var negativeElements = [];
  var input;
  do {
    input = parseFloat(prompt("Введите число (для выхода введите 0):"));
    if (input > 0) {
      positiveElements.push(input);
    } else if (input < 0) {
      negativeElements.push(input);
    }
  } while (input !== 0);

  var output = "7. Положительные элементы: " + positiveElements + "<br>";
  output += "Отрицательные элементы с их индексами:<br>";
  negativeElements.forEach(function (element, index) {
    output += "Индекс " + index + ": " + element + "<br>";
  });
  document.getElementById("output").innerHTML = output;
}

// 8. Подсчет количества отрицательных, положительных и нулевых элементов массива
function countArrayElements() {
  var numbersArray = [1, -2, 3, 0, -4, 0, 5];
  var positiveCount = 0;
  var negativeCount = 0;
  var zeroCount = 0;
  numbersArray.forEach(function (element) {
    if (element > 0) {
      positiveCount++;
    } else if (element < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });
  var output =
    "8. Количество положительных элементов: " + positiveCount + "<br>";
  output += "Количество отрицательных элементов: " + negativeCount + "<br>";
  output += "Количество нулевых элементов: " + zeroCount + "<br>";
  output += "Массив: " + numbersArray;
  document.getElementById("output").innerHTML = output;
}
