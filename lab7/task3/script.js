document.addEventListener("DOMContentLoaded", function () {
  const depositInput = document.getElementById("depositAmount");
  const interestInput = document.getElementById("interestRate");
  const timeInput = document.getElementById("timePeriod");
  const calculateBtn = document.getElementById("calculateBtn");
  const resultDiv = document.getElementById("result");

  // 3.2 focus-blur
  depositInput.addEventListener("focus", function () {
    console.log("Поле ввода суммы вклада в фокусе");
  });

  depositInput.addEventListener("blur", function () {
    console.log("Поле ввода суммы вклада потеряло фокус");
  });

  interestInput.addEventListener("focus", function () {
    console.log("Поле ввода процентной ставки в фокусе");
  });

  interestInput.addEventListener("blur", function () {
    console.log("Поле ввода процентной ставки потеряло фокус");
  });

  timeInput.addEventListener("focus", function () {
    console.log("Поле ввода периода времени в фокусе");
  });

  timeInput.addEventListener("blur", function () {
    console.log("Поле ввода периода времени потеряло фокус");
  });

  // 3.3 mousemove-mouseover-mouseout-mouseenter-mouseleave
  resultDiv.addEventListener("mousemove", function () {
    console.log("Мышь движется над результатом");
  });

  resultDiv.addEventListener("mouseover", function () {
    console.log("Мышь находится над результатом");
  });

  resultDiv.addEventListener("mouseout", function () {
    console.log("Мышь покинула область результата");
  });

  resultDiv.addEventListener("mouseenter", function () {
    console.log("Мышь вошла в область результата");
  });

  resultDiv.addEventListener("mouseleave", function () {
    console.log("Мышь покинула область результата");
  });

  calculateBtn.addEventListener("click", function () {
    const depositAmount = parseFloat(depositInput.value);
    const interestRate = parseFloat(interestInput.value);
    const timePeriod = parseFloat(timeInput.value);

    const finalAmount = calculateFinalAmount(
      depositAmount,
      interestRate,
      timePeriod
    );
    resultDiv.textContent = `Через ${timePeriod} лет ваш вклад вырастет до ${finalAmount.toFixed(
      2
    )} руб.`;
  });

  function calculateFinalAmount(deposit, rate, time) {
    const interest = rate / 100;
    const totalAmount = deposit * Math.pow(1 + interest, time);
    return totalAmount;
  }

  // 3.4 styles-and-classes
  const computedStyle = window.getComputedStyle(resultDiv);
  console.log("Вычисленные стили:", computedStyle.cssText);
  console.log("Классы:", resultDiv.className);

  // 3.5 mouse-event-basics
  resultDiv.addEventListener("click", function (event) {
    console.log("Клик мыши по результату");
    console.log("ClientX:", event.clientX);
    console.log("ClientY:", event.clientY);
  });

  // 3.6 onload-onerror
  window.addEventListener("load", function () {
    console.log("Страница успешно загружена");
  });

  window.addEventListener("error", function (event) {
    console.error("Произошла ошибка:", event.message);
  });

  // 3.7 forms-submit
  calculateBtn.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Форма отправлена");
  });
});
