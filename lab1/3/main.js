// Обработчик события при изменении состояния checkbox
document.getElementById("showMessage").addEventListener("change", function () {
  // Проверка, выбран ли checkbox
  if (this.checked) {
    // Вывод приветственного сообщения в диалоговом окне
    alert("Привет! Добро пожаловать!");
  }
});
