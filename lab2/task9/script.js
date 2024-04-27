document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Проверка имени пользователя и пароля
    if (username === "login" && password === "pass") {
      alert("Пароль и имя верны!");
    } else {
      alert("Неправильно введен пароль или имя.");
    }
  });
