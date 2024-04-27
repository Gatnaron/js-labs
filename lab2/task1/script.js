// Функция для запроса суммы займа и процента через prompt
function getLoanDetails() {
  var loanAmount = parseFloat(prompt("Введите сумму займа:", ""));
  var interestRate = parseFloat(prompt("Введите процентную ставку (в %):", ""));

  // Если введенные данные некорректны, повторяем запрос
  if (
    isNaN(loanAmount) ||
    isNaN(interestRate) ||
    loanAmount <= 0 ||
    interestRate <= 0
  ) {
    alert("Пожалуйста, введите корректные данные.");
    return getLoanDetails();
  }

  return { loanAmount: loanAmount, interestRate: interestRate };
}

// Функция для расчета итоговой суммы ссуды
function calculateTotalLoanAmount(loanAmount, interestRate) {
  var totalAmount = loanAmount * (1 + interestRate / 100);
  return totalAmount;
}

// Получаем сумму займа и процент
var loanDetails = getLoanDetails();
var loanAmount = loanDetails.loanAmount;
var interestRate = loanDetails.interestRate;

// Рассчитываем и выводим итоговую сумму ссуды
var totalAmount = calculateTotalLoanAmount(loanAmount, interestRate);
document.write(
  "Итоговая сумма ссуды, подлежащей уплате: " + totalAmount.toFixed(2)
);
