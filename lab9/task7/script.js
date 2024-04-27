const carImages = {
  audi: "images/audi.jpg",
  bmw: "images/bmw.jpg",
  mercedes: "images/mercedes.jpg",
};

function showImage(carModel) {
  const imgElement = document.getElementById("carImage");
  imgElement.src = carImages[carModel];
}

function goBack() {
  history.back();
}

function goForward() {
  history.go();
}
