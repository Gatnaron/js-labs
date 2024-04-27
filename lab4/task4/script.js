// Функция для ввода элементов матрицы через prompt
function inputMatrix() {
  let matrix = [];
  for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 4; j++) {
      let value = prompt(
        `Введите элемент для строки ${i + 1} и столбца ${j + 1}:`
      );
      matrix[i][j] = parseFloat(value); // Преобразуем введенное значение в число
    }
  }
  return matrix;
}

// Функция для поиска минимального элемента и его индексов
function findMinElement(matrix) {
  let min = matrix[0][0];
  let minRow = 0;
  let minCol = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
        minRow = i;
        minCol = j;
      }
    }
  }

  // Выводим минимальный элемент и его индексы
  alert(
    `Минимальный элемент матрицы: ${min}.\nИндексы: Строка ${
      minRow + 1
    }, Столбец ${minCol + 1}.`
  );
}

function main() {
  const matrix = inputMatrix(); // Ввод матрицы
  // Выводим введенные значения с порядковым номером
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      document.write(
        `Элемент ${i * matrix[i].length + j + 1}: ${matrix[i][j]}<br>`
      );
    }
  }
  findMinElement(matrix); // Находим минимальный элемент
}
document.write("<h1>task4</h1>");
main(); // Вызываем главную функцию при загрузке страницы
