window.onload = function () {
  var name = prompt("Введите ваше имя:");
  while (name === null || name === "") {
    name = prompt("Пожалуйста, введите ваше имя:");
  }

  var greeting = document.createElement("h1");
  greeting.textContent = "Hello, ";

  var boldName = document.createElement("span");
  boldName.textContent = name;
  boldName.style.fontWeight = "bold";

  greeting.appendChild(boldName);
  greeting.innerHTML += "!";

  document.body.appendChild(greeting);
};
