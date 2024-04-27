// Получаем имя и возраст с помощью prompt
var enteredName = prompt("Введите имя:", "");
var enteredAge = prompt("Введите возраст:", "");

// Задаем ожидаемые имя и возраст
var expectedName = "Иван";
var expectedAge = 20;

// Преобразуем введенный возраст в число
enteredAge = parseInt(enteredAge);

// Сравниваем введенные значения с ожидаемыми
var nameMatch = enteredName === expectedName;
var ageMatch = enteredAge === expectedAge;

// Выводим результаты сравнения
if (nameMatch && ageMatch) {
  alert("Имя и возраст совпадают!");
} else if (nameMatch) {
  alert("Имя совпадает, но возраст не совпадает.");
} else if (ageMatch) {
  alert("Возраст совпадает, но имя не совпадает.");
} else {
  alert("Имя и возраст не совпадают.");
}

function checkVotingRights() {
  var message =
    enteredAge >= 18
      ? "Вы обладаете избирательным правом."
      : "Вы не имеете избирательного права.";
  alert(message);
}
