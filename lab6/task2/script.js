// Функция ucFirst для заглавного последнего символа строки
function ucFirst(str) {
  // Проверка на пустую строку
  if (str === "") {
    return "Строка пуста.";
  }
  // Получение последнего символа в верхнем регистре
  return str.slice(0, -1) + str.slice(-1).toUpperCase();
}

// Функция для подсчета числа символов в строке и символов на шестой позиции
function countCharacters(str) {
  // Подсчет общего числа символов
  const totalCharacters = str.length;
  // Получение символа на шестой позиции (индекс 5)
  const sixthCharacter = str.charAt(5);
  // Разделение строки на слова
  const words = str.split(" ");
  // Получение первых двух слов
  const firstTwoWords = words.slice(0, 2);
  // Преобразование строки к верхнему регистру
  const upperCaseString = str.toUpperCase();

  return {
    totalCharacters,
    sixthCharacter,
    firstTwoWords,
    upperCaseString,
  };
}

// Функция для вывода слов через Enter
function printWords(str) {
  // Разделение строки на слова
  const words = str.split(" ");
  // Вывод слов через Enter
  for (let word of words) {
    console.log(word);
  }
}

// Функция для обрезания текста
function truncateText(str, n) {
  // Проверка длины строки
  if (str.length > n) {
    // Обрезание и добавление троеточия
    return str.slice(0, n) + "...";
  } else {
    return str;
  }
}

// Функция для замены дефисов на восклицательные знаки
function replaceHyphens(str) {
  // Глобальный поиск и замена дефисов
  return str.replace(/-/g, "!");
}

// Пример использования функций
const exampleString = "hello-world and people";
console.log("1. Заглавный последний символ:", ucFirst(exampleString));
console.log("2. Информация о строке:", countCharacters(exampleString));
console.log("3. Вывод слов через Enter:");
printWords(exampleString);
console.log("4. Обрезанный текст:", truncateText(exampleString, 5));
console.log("5. Замена дефисов на '!':", replaceHyphens(exampleString));
