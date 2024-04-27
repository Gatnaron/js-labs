// 2.1. Назначить обработчик событию применив атрибут HTML.
document.getElementById("confirmButton").addEventListener("click", function () {
  var inputData = document.getElementById("inputField").value;
  var confirmation = confirm(
    "Вы уверены, что хотите подтвердить данные: " + inputData + "?"
  );
  if (confirmation) {
    document.getElementById("outputField").value = inputData;
  } else {
    document.getElementById("inputField").value = "";
  }
});

// 2.2. Назначить обработчик события используя свойство DOM-объекта.
var confirmButton = document.getElementById("confirmButton");
confirmButton.onclick = function () {
  var inputData = document.getElementById("inputField").value;
  var confirmation = confirm(
    "Вы уверены, что хотите подтвердить данные: " + inputData + "?"
  );
  if (confirmation) {
    document.getElementById("outputField").value = inputData;
  } else {
    document.getElementById("inputField").value = "";
  }
};

// 2.3. Выполнить задания 2.1 и 2.2 применив доступ к элементу через this.
document.getElementById("confirmButton").addEventListener("click", function () {
  var inputData = this.parentElement.querySelector("#inputField").value;
  var confirmation = confirm(
    "Вы уверены, что хотите подтвердить данные: " + inputData + "?"
  );
  if (confirmation) {
    this.parentElement.querySelector("#outputField").value = inputData;
  } else {
    this.parentElement.querySelector("#inputField").value = "";
  }
});

// 2.4. Изучить основные свойства объекта event.
// Примеры изучения основных свойств объекта event
document.addEventListener("hello", function (event) {
  alert("Привет от " + event.target.tagName); // Привет от H1
});
let event = new Event("hello", { bubbles: true });
document.getElementById("elem").dispatchEvent(event);

// 2.5. Реализовать пример, в котором один и тот же объект обрабатывает оба события.
var eventHandler = function (event) {
  var inputData = document.getElementById("inputField").value;
  if (event.type === "click") {
    var confirmation = confirm(
      "Вы уверены, что хотите подтвердить данные: " + inputData + "?"
    );
    if (confirmation) {
      document.getElementById("outputField").value = inputData;
    } else {
      document.getElementById("inputField").value = "";
    }
  } else if (event.type === "mouseover") {
    console.log("Mouse over the button");
  }
};

document
  .getElementById("confirmButton")
  .addEventListener("click", eventHandler);
document
  .getElementById("confirmButton")
  .addEventListener("mouseover", eventHandler);
