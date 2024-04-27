// Функция для отображения имени кнопки
function showButtonName(button) {
  alert("Имя кнопки: " + button.textContent);
}

// Функция для расчета площади круга
function calculateCircleArea() {
  var radiusInput = document.getElementById("radius");
  var radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius <= 0) {
    alert("Пожалуйста, введите положительное число для радиуса.");
    return;
  }

  var area = Math.PI * Math.pow(radius, 2);
  area = Math.round(area * 100) / 100; // Округление до сотых
  alert("Площадь круга: " + area);
}

// Функция для расчета площади прямоугольника
function calculateRectangleArea() {
  var widthInput = document.getElementById("width");
  var heightInput = document.getElementById("height");
  var resultInput = document.getElementById("result");

  var width = parseFloat(widthInput.value);
  var height = parseFloat(heightInput.value);

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    alert("Пожалуйста, введите положительные числа для ширины и высоты.");
    return;
  }

  var area = width * height;
  resultInput.value = area;
}
