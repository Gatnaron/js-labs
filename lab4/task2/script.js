// Функция для ввода элементов массива через prompt
function inputArrayElements() {
  let array = [];
  for (let i = 0; i < 12; i++) {
    let input = prompt("Введите элемент массива:");
    // Проверяем, чтобы введенное значение было числом
    if (!isNaN(input)) {
      array.push(parseFloat(input)); // Преобразуем введенное значение в число и добавляем в массив
    } else {
      alert("Пожалуйста, введите числовое значение.");
      return null; // Возвращаем null, если введенное значение не является числом
    }
  }
  return array;
}

// Функция для поиска максимального элемента массива
function findMaxElement(array) {
  let max = array[0];
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }

  return { max, maxIndex };
}

// Вызываем функцию для ввода элементов массива
let inputArray = inputArrayElements();

// Проверяем, был ли введен массив
if (inputArray !== null) {
  // Вызываем функцию для поиска максимального элемента
  let result = findMaxElement(inputArray);

  // Выводим результаты на страницу
  document.write("<h1>task 2</h1>");
  document.write("<h3>Максимальный элемент массива:</h3>");
  document.write("<p>Максимальное значение: " + result.max + "</p>");
  document.write("<p>Порядковый номер: " + (result.maxIndex + 1) + "</p>");

  // Выводим максимальный элемент в диалоговом окне alert
  alert("Максимальное значение массива: " + result.max);
}
