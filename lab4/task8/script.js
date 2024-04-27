document.addEventListener("DOMContentLoaded", function () {
  var colors = []; // Создаем пустой массив для цветов

  // Функция для заполнения массива цветами, введенными через клавиатуру
  function fillColorsArray() {
    var color = prompt("Введите цвет (нажмите отмена для завершения ввода):");
    while (color !== null && color !== "") {
      colors.push(color);
      color = prompt("Введите цвет (нажмите отмена для завершения ввода):");
    }
  }

  // Функция для отображения цветов в таблице
  function displayColors() {
    var tableBody = document.querySelector("#colorsTable tbody");
    tableBody.innerHTML = ""; // Очищаем содержимое tbody перед добавлением новых строк

    // Проходим по всем элементам массива и создаем строки таблицы для каждого цвета
    for (var i in colors) {
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      cell.textContent = colors[i];
      row.appendChild(cell);
      tableBody.appendChild(row);
    }
  }

  fillColorsArray(); // Заполняем массив цветов
  displayColors(); // Отображаем цвета в таблице
});
