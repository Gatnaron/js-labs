// Функция для форматирования времени
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Функция для обновления таймера в поле формы
function updateTimerField() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  const timerInput = document.getElementById("timerInput");
  timerInput.value = `${hours}:${minutes}:${seconds}`;
}

// Функция для обновления таймера на странице
function updateTimerPage() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  const timerContainer = document.getElementById("timerContainer");
  timerContainer.innerText = `${hours}:${minutes}:${seconds}`;
}

// Обновляем таймеры каждую секунду
setInterval(updateTimerField, 1000);
setInterval(updateTimerPage, 1000);
