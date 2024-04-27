window.onload = function () {
  var startOver = confirm("Начать заново?");

  if (startOver) {
    var userName = prompt("Введите сюда своё имя", "Введите имя");

    // Проверка на null (пользователь нажал "Отмена")
    if (userName !== null) {
      // Выводим имя в окно браузера
      document.write(
        "<p style='font-weight: bold; font-style: italic;'>Ваше имя " +
          userName +
          "</p>" +
          "<br>" +
          "<a href=../5/index.html>" +
          "task5" +
          "</a>"
      );

      var continuePlaying = confirm("Не надоело?");

      if (continuePlaying) {
        alert("Продолжайте наслаждаться!");
      } else {
        alert("Ну и правильно!");
      }
    }
  } else {
    alert("До свидания!");
  }
};
