// Создаем массив X
let X = [5, 8, 2, 14, 7, 1, 9, 3, 11, 6, 4, 10];

// Выводим начальный массив X
alert("Начальный массив X: " + X);

// Сортируем массив X с использованием цикла
function sortArrayWithLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Сортируем массив X с использованием метода массива sort()
function sortArrayWithMethod(arr) {
  return arr.sort((a, b) => a - b);
}

// Выводим упорядоченный массив X с использованием цикла
alert("Сортировка с использованием цикла: " + sortArrayWithLoop(X));

// Выводим упорядоченный массив X с использованием метода массива
alert("Сортировка с использованием метода массива: " + sortArrayWithMethod(X));
