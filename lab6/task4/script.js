// Ждем, пока загрузится весь HTML, прежде чем начать выполнение скрипта
document.addEventListener("DOMContentLoaded", function () {
  // 4.1
  // Функция для получения текущей даты и времени и форматированного вывода
  function getCurrentDateTime() {
    const now = new Date(); // Создаем объект Date для текущего времени
    // Формируем строку с текущей датой и временем
    const dateStr = `${now.getDate()}.${
      now.getMonth() + 1
    }.${now.getFullYear()}`;
    const timeStr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    return `Дата сегодня ${dateStr} время сейчас ${timeStr}`; // Возвращаем строку с датой и временем
  }

  // 4.2
  // Функция для преобразования массива даты в локализованную строку и строку UTC
  function convertToLocaleString(dateArray) {
    const date = new Date(
      dateArray[2],
      dateArray[1] - 1,
      dateArray[0],
      dateArray[3],
      dateArray[4],
      dateArray[5]
    );
    const dateString = date.toLocaleString(); // Получаем строку с локализованной датой и временем
    const utcString = date.toUTCString(); // Получаем строку с датой и временем в формате UTC
    return `Дата и время сейчас ${dateString} дата и время сейчас ${utcString}`;
  }

  // 4.3
  // Функция для вычисления разности в днях между двумя датами
  function getDateStringDifference(today, otherDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Количество миллисекунд в одном дне
    const firstDate = new Date(today[2], today[1] - 1, today[0]); // Создаем объект Date для первой даты
    const secondDate = new Date(otherDate[2], otherDate[1] - 1, otherDate[0]); // Создаем объект Date для второй даты
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)); // Вычисляем разницу в днях и округляем до целого
    return `Разность в днях между этими датами: ${diffDays}`; // Возвращаем строку с разностью в днях
  }

  // 4.4
  // Функция для вычисления количества дней, оставшихся до дня рождения
  function daysUntilBirthday() {
    const now = new Date(); // Создаем объект Date для текущего времени
    const birthdayString = prompt(
      "Введите дату своего дня рождения в формате ДД-ММ-ГГГГ:"
    ); // Запрашиваем у пользователя дату его дня рождения
    const birthday = new Date(birthdayString); // Создаем объект Date для дня рождения, введенного пользователем
    birthday.setFullYear(now.getFullYear()); // Устанавливаем год рождения текущего года

    if (birthday < now) {
      birthday.setFullYear(now.getFullYear() + 1); // Если день рождения уже прошел в текущем году, переносим на следующий год
    }

    const oneDay = 24 * 60 * 60 * 1000; // Количество миллисекунд в одном дне
    const daysUntil = Math.round((birthday - now) / oneDay); // Вычисляем количество дней до дня рождения
    return `До вашего дня рождения осталось ${daysUntil} дней.`; // Возвращаем строку с количеством дней
  }

  // Output
  const outputDiv = document.getElementById("output"); // Получаем элемент вывода по его ID
  // Добавляем внутрь элемента вывода различные строки с датами и временем, используя ранее определенные функции
  outputDiv.innerHTML += `<p>${getCurrentDateTime()}</p>`;
  outputDiv.innerHTML += `<p>${convertToLocaleString([
    12, 11, 23, 14, 10, 7,
  ])}</p>`;
  outputDiv.innerHTML += `<p>${getDateStringDifference(
    [25, 3, 2013],
    [23, 12, 1912]
  )}</p>`;
  outputDiv.innerHTML += `<p>${daysUntilBirthday()}</p>`;
});
