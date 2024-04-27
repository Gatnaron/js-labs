document.addEventListener("DOMContentLoaded", function () {
  // Сохранение исходного состояния выбранного цвета и размера
  const initialColor = document.getElementById("colorSelect").value;
  const initialSize = document.getElementById("sizeSelect").value;

  // Функция для возврата выбранных объектов в исходное состояние
  function resetSelection() {
    document.getElementById("colorSelect").value = initialColor;
    document.getElementById("sizeSelect").value = initialSize;
  }

  // Функция отображения выбранного цвета и размера в диалоговом окне
  function displaySelection() {
    const selectedColor = document.getElementById("colorSelect").value;
    const selectedSize = document.getElementById("sizeSelect").value;
    alert(`Selected Color: ${selectedColor}\nSelected Size: ${selectedSize}`);
  }

  document
    .getElementById("completeButton")
    .addEventListener("click", displaySelection);

  document
    .getElementById("resetButton")
    .addEventListener("click", resetSelection);
});
