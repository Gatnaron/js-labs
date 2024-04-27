// Функция для рисования линий
function drawLines() {
  var lineContainer = document.getElementById("lineContainer");
  lineContainer.innerHTML = ""; // Очищаем контейнер перед рисованием новых линий

  var step = 5; // Шаг изменения длины линии
  var maxLength = 100; // Максимальная длина линии

  // Создаем линии с разной длиной
  for (var length = 5; length <= maxLength; length += step) {
    var hr = document.createElement("hr");
    hr.style.width = length + "px";
    hr.style.margin = "5px auto"; // Центрируем линию
    lineContainer.appendChild(hr);
  }
}

document.write("<h2>Таблица степеней двойки</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Степень</th><th>Результат</th></tr>");

// Генерация строк таблицы
for (var i = 0; i <= 10; i++) {
  var powerOfTwo = Math.pow(2, i);
  document.write("<tr><td>" + i + "</td><td>" + powerOfTwo + "</td></tr>");
}

document.write("</table>");

function splitSubjects() {
  var allSubjects = [
    "Математика",
    "Физика",
    "Химия",
    "Биология",
    "Информатика",
    "Литература",
    "История",
    "География",
    "Иностранный язык",
    "Искусство",
  ];

  var exactSciences = allSubjects.slice(0, 5); // Первые пять предметов - точные науки
  var humanities = allSubjects.slice(5); // Остальные предметы - гуманитарные науки

  document.write("<h2>Предметы точных наук:</h2>");
  document.write("<ul>");
  for (var i = 0; i < exactSciences.length; i++) {
    document.write("<li>" + exactSciences[i] + "</li>");
  }
  document.write("</ul>");

  document.write("<h2>Предметы гуманитарных наук:</h2>");
  document.write("<ul>");
  for (var j = 0; j < humanities.length; j++) {
    document.write("<li>" + humanities[j] + "</li>");
  }
  document.write("</ul>");
}

splitSubjects();
