const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkEmailValidity(email) {
  return emailRegex.test(email);
}
function enterEmail() {
  const inputEmail = prompt("Пожалуйста, введите ваш email:");
  if (inputEmail) {
    if (checkEmailValidity(inputEmail)) {
      alert("Email введен верно!");
    } else {
      alert("Пожалуйста, введите корректный email!");
      enterEmail();
    }
  } else {
    alert("Вы не ввели email!");
    enterEmail();
  }
}
enterEmail();
