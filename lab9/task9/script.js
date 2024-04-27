// Функция для извлечения протокола и пути и обновления страницы
function manipulateURL() {
  // Извлечение протокола
  document.getElementById("protocol").innerText =
    "Протокол: " + window.location.protocol;
  // Извлечение пути
  document.getElementById("pathname").innerText =
    "Путь: " + window.location.pathname;
}

// Функция для перезагрузки страницы
function reloadPage() {
  window.location.reload();
}

// Функция для замены текущей страницы новой
function replacePage() {
  window.location.replace("newPage.html");
}

// Функция для возврата на предыдущую страницу
function goBack() {
  window.history.back();
}

// Вызов функции manipulateURL при загрузке страницы
window.onload = function () {
  manipulateURL();
};
