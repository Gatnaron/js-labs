document.addEventListener("DOMContentLoaded", function () {
  const colorSelect = document.getElementById("colorSelect");
  const imageSelect = document.getElementById("imageSelect");
  const imageDisplay = document.getElementById("imageDisplay");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  // изменение света фона
  colorSelect.addEventListener("change", function () {
    document.body.style.backgroundColor = colorSelect.value;
  });

  // изменение отображаемого изображения
  imageSelect.addEventListener("change", function () {
    const selectedImage = imageSelect.value;
    imageDisplay.src = "images/" + selectedImage;
  });

  // отображение предыдущего изображения
  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imageDisplay.src = "images/" + images[currentIndex];
  });

  // отображение следующего изображения
  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    imageDisplay.src = "images/" + images[currentIndex];
  });
});
