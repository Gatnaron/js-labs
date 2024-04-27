let grades = [];

function addGrade() {
  const gradeInput = document.getElementById("gradeInput").value.trim();

  if (gradeInput === "" || isNaN(gradeInput)) {
    alert("Пожалуйста, введите числовую оценку.");
    return;
  }

  const grade = parseFloat(gradeInput);
  grades.push(grade);
  document.getElementById("gradeInput").value = "";
  alert("Оценка успешно добавлена!");
}

function calculateAverage() {
  if (grades.length < 5) {
    alert("Пожалуйста, введите еще " + (5 - grades.length) + " оценки");
    return;
  }

  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  document.getElementById("result").innerText =
    "Средний балл: " + average.toFixed(2);
}
