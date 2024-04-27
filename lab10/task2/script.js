var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

function displayImagesWithInterval(images, interval) {
  var index = 0;
  var container = document.getElementById("imageContainer");
  var timer = setInterval(function () {
    if (index >= images.length) {
      clearInterval(timer); // Остановить таймер, если достигнут конец массива
      return;
    }
    var image = document.createElement("img");
    image.src = images[index];
    container.appendChild(image);
    index++;
  }, interval);
}

window.onload = function () {
  displayImagesWithInterval(images, 1000); // Вывод изображений каждую секунду (интервал в миллисекундах)
};
