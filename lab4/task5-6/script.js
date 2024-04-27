// Функция для обработки введенного пользователем массива
function processArray() {
  const inputArrayElement = document.getElementById("inputArray");
  const inputArrayValue = inputArrayElement.value.trim();
  const inputArray = inputArrayValue
    .split(",")
    .map((item) => parseInt(item.trim(), 10));

  printEvenNumbers(inputArray);
  printPositiveAndNegativeNumbers(inputArray);
}

// Функция для вывода четных чисел из массива
function printEvenNumbers(arr) {
  const evenNumbersList = document.getElementById("evenNumbers");
  evenNumbersList.innerHTML = ""; // Очищаем список перед выводом

  arr.forEach(function (num) {
    if (!isNaN(num) && num % 2 === 0) {
      const listItem = document.createElement("li");
      listItem.textContent = num;
      evenNumbersList.appendChild(listItem);
    }
  });
}

// Функция для вывода положительных и отрицательных чисел из массива
function printPositiveAndNegativeNumbers(arr) {
  const positiveNumbersList = document.getElementById("positiveNumbers");
  const negativeNumbersList = document.getElementById("negativeNumbers");
  positiveNumbersList.innerHTML = ""; // Очищаем списки перед выводом
  negativeNumbersList.innerHTML = "";

  arr.forEach(function (num, index) {
    if (!isNaN(num)) {
      const listItem = document.createElement("li");
      listItem.textContent = "Элемент " + index + ": " + num;
      if (num >= 0) {
        positiveNumbersList.appendChild(listItem);
      } else {
        negativeNumbersList.appendChild(listItem);
      }
    }
  });
}
