function openWindow() {
  // Открытие нового окна с заданными параметрами
  window.open(
    "",
    "NEW",
    "status=0, toolbar=1, location=1, menubar=1, directories=1, resizable=1, height=500, width=500"
  );
}

// Назначение обработчика события клика на ссылку
document.getElementById("openLink").addEventListener("click", function (event) {
  // Предотвращение стандартного действия ссылки (перехода по адресу)
  event.preventDefault();
  // Вызов функции открытия окна
  openWindow();
});
