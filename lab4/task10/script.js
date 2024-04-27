// Определение двух массивов с именами сотрудников
let emp = ["Никита", "Данил", "Саша"];
let emp1 = ["Маша", "Лика"];

// Создание нового массива empA путем объединения emp и emp1
let empA = emp.concat(emp1);

// Сортировка значений массива empA в порядке возрастания
empA.sort();

// Создание нового массива empA1 с обратным порядком элементов массива empA
let empA1 = empA.slice().reverse();

// Функция для отображения массивов на странице
function displayArrays() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML += "<p>emp: " + emp.join(", ") + "</p>";
  outputDiv.innerHTML += "<p>emp1: " + emp1.join(", ") + "</p>";
  outputDiv.innerHTML += "<p>empA: " + empA.join(", ") + "</p>";
  outputDiv.innerHTML += "<p>empA1: " + empA1.join(", ") + "</p>";
}

// Вызов функции для отображения массивов на странице
displayArrays();
