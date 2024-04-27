var images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
];
var interval = 1000;

var index = 0;
var container = document.getElementById("imageContainer");
var timer;

function displayNextImage() {
  if (index >= images.length) {
    index = 0;
  }
  var image = document.createElement("img");
  image.src = images[index];
  container.innerHTML = "";
  container.appendChild(image);
  index++;
}

function startSlideshow() {
  displayNextImage();
  timer = setInterval(displayNextImage, interval);
}

function stopSlideshow() {
  clearInterval(timer);
}

document
  .getElementById("startButton")
  .addEventListener("click", startSlideshow);
document.getElementById("stopButton").addEventListener("click", stopSlideshow);
