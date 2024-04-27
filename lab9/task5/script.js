document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || !password) {
      document.getElementById("output").innerText = "Заполните поля";
      return;
    }

    if (username === "YourName" && password === "1") {
      document.location.replace("document1.html");
    } else if (username === "YourName" && password === "0") {
      document.location.replace("document2.html");
    } else {
      document.getElementById("output").innerText = "Ошибка";
    }
  });
