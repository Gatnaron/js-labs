function checkPostalCode() {
  var postalCodeInput = document.getElementById("postalCodeInput").value;
  var postalCodePattern = /^\d{5}$/;

  var resultMessage = document.getElementById("resultMessage");
  var match = postalCodePattern.exec(postalCodeInput);
  if (match !== null) {
    var postalCode = match[0];
    resultMessage.textContent = "Прваильный индекс: " + postalCode;
  } else {
    resultMessage.textContent = "Неверный почтовый индекс";
  }
}
