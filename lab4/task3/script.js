document.addEventListener("DOMContentLoaded", function () {
  var students = [];

  // Функция для вывода сведений о студентах
  function displayStudentInfo() {
    var studentInfoDiv = document.getElementById("student-info");
    studentInfoDiv.innerHTML = "";
    students.forEach(function (student) {
      studentInfoDiv.innerHTML += `Имя: ${student.имя}; Год рождения: ${student.год_рождения}; Место жительства: ${student.место_жительства}<br>`;
    });
  }

  // Функция для вывода сведений о студентах в таблице
  function displayStudentTable() {
    var studentTableBody = document.querySelector("#student-table tbody");
    studentTableBody.innerHTML = "";
    students.forEach(function (student) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.имя}</td>
        <td>${student.год_рождения}</td>
        <td>${student.место_жительства}</td>
      `;
      studentTableBody.appendChild(row);
    });
  }

  // Функция для обработки отправки формы
  function handleFormSubmit(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var birthYearInput = document.getElementById("birth-year");
    var locationInput = document.getElementById("location");
    var name = nameInput.value.trim();
    var birthYear = parseInt(birthYearInput.value);
    var location = locationInput.value.trim();

    if (name && !isNaN(birthYear) && location) {
      students.push({
        имя: name,
        год_рождения: birthYear,
        место_жительства: location,
      });
      displayStudentInfo();
      displayStudentTable();
      // Сброс значений формы
      nameInput.value = "";
      birthYearInput.value = "";
      locationInput.value = "";
    } else {
      alert("Пожалуйста, заполните все поля корректно.");
    }
  }

  // Добавляем обработчик события отправки формы
  var studentForm = document.getElementById("student-form");
  studentForm.addEventListener("submit", handleFormSubmit);
});
