document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("myButton");

  button.addEventListener("click", function () {
    alert(
      "Свойства кнопки:\n" +
        JSON.stringify({ id: button.id, name: button.name })
    );
  });
});
