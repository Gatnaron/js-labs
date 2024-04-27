function createRecord() {
  var lastName = document.getElementById("lastName").value;
  var firstName = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var age = document.getElementById("age").value;

  var errorMessage = "";

  // Проверка заполнения полей
  if (lastName === "") {
    errorMessage += "Поле 'Фамилия' не заполнено.\n";
  }
  if (firstName === "") {
    errorMessage += "Поле 'Имя' не заполнено.\n";
  }
  if (email === "") {
    errorMessage += "Поле 'Email' не заполнено.\n";
  } else if (!validateEmail(email)) {
    errorMessage +=
      "Неверный формат email. Пожалуйста, введите корректный email.\n";
  }
  if (phone === "") {
    errorMessage += "Поле 'Телефон' не заполнено.\n";
  } else if (!validatePhone(phone)) {
    errorMessage +=
      "Неверный формат телефона. Пожалуйста, введите телефон в формате +7XXXXXXXXXX.\n";
  }
  if (age === "") {
    errorMessage += "Поле 'Возраст' не заполнено.\n";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
  } else {
    createWindow(lastName, firstName, email, phone, age);
  }
}

function createWindow(lastName, firstName, email, phone, age) {
  var newWindow = window.open("", "NewWindow", "width=400,height=300");
  newWindow.document.write("<h2>Данные формы:</h2>");
  newWindow.document.write("<p>Фамилия: " + lastName + "</p>");
  newWindow.document.write("<p>Имя: " + firstName + "</p>");
  newWindow.document.write("<p>Email: " + email + "</p>");
  newWindow.document.write("<p>Телефон: " + phone + "</p>");
  newWindow.document.write("<p>Возраст: " + age + "</p>");
}

function resetForm() {
  document.getElementById("myForm").reset();
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(phone) {
  var re = /^\+7\d{10}$/;
  return re.test(phone);
}
