// Задание 1
function changeImage() {
  document.getElementById("image1").src = "images/image2.jpg";
}

function resetImage() {
  document.getElementById("image1").src = "images/image1.jpg";
}

// Задание 2
var currentImageIndex = 1;
var totalImages = 3;

function nextImage() {
  currentImageIndex = (currentImageIndex % totalImages) + 1;
  document.getElementById("image2").src =
    "images/image" + currentImageIndex + ".jpg";
}

// Задание 3
function displayText(text) {
  document.getElementById("textContainer").innerText = text;
}

// Задание 4
function showImage(event, src, x, y) {
  event.preventDefault();
  var image = document.createElement("img");
  image.src = src;
  image.style.position = "absolute";
  image.style.left = x + "px";
  image.style.top = y + "px";
  image.style.width = "200px";
  image.style.height = "auto";
  document.getElementById("imageContainer").appendChild(image);
}
