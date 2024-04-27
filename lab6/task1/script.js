// Задание 1.1
// Создание пустого объекта "Пользователь"
let user = {};

// Добавление свойств: имя, отчество, фамилия
user.firstName = "Иван";
user.middleName = "Иванович";
user.lastName = "Иванов";

// Добавление свойства студент с значением группы
user.student = "Группа A";

// Изменение значения свойства имени на имя соседа
user.firstName = "Петр";

// Удаление свойства имени из объекта
delete user.firstName;

// Функция, возвращающая true, если у объекта нет свойств, иначе false
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Проверка функции isEmpty
document.getElementById("output").innerHTML +=
  "Результат проверки на пустоту объекта user: " + isEmpty(user) + "<br>";

// Задание 1.2
// Создание объекта с днями недели
let daysOfWeek = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",
};

// Вывод текущего дня недели
let today = new Date().getDay();
document.getElementById("output").innerHTML +=
  "Сегодня " + daysOfWeek[today] + "<br>";

// Задание 1.3
// Номер дня недели хранится в переменной day
let day = 3;

// Вывод дня недели по номеру из переменной day
document.getElementById("output").innerHTML +=
  "День недели для числа " + day + ": " + daysOfWeek[day] + "<br>";

// Задание 1.4
// Часть 1

// 1) Получение ответа от пользователя на вопрос "Сколько фильмов вы уже посмотрели?"
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 2) Создание объекта personalMovieDB и заполнение его свойств
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

// 3) Задание пользователю два раза вопросов
// Вопрос №1: "Один из последних просмотренных фильмов"
let lastMovie = prompt("Один из последних просмотренных фильмов?", "");
// Вопрос №2: "На сколько оцените его?"
let movieRating = prompt("На сколько оцените его?", "");

// Запись ответов в объект movies в формате: movies: { 'logan': '8.1' }
personalMovieDB.movies[lastMovie] = movieRating;

// Вывод personalMovieDB в консоль для проверки
console.log(personalMovieDB);

// Часть 2

// 1) Автоматизация вопросов пользователю про фильмы при помощи цикла
for (let i = 0; i < 2; i++) {
  let movieName, movieRating;

  // Проверка чтобы пользователь не мог оставить ответ в виде пустой строки или отменить ответ,
  // или ввести название фильма длиннее 50 символов
  do {
    movieName = prompt("Один из последних просмотренных фильмов?", "");
  } while (!movieName || movieName.length > 50);

  do {
    movieRating = prompt("На сколько оцените его?", "");
  } while (!movieRating || movieRating.length > 50);

  // Запись ответов в объект movies в формате: movies: { 'logan': '8.1' }
  personalMovieDB.movies[movieName] = movieRating;
}

// 2) Проверка personalMovieDB.count и вывод сообщения в зависимости от значения
if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

// Часть 3

// 1) Создание функции showMyDB
function showMyDB() {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  } else {
    console.log("Данные приватны");
  }
}

// 2) Вызов функции showMyDB
showMyDB();

// 3) Создание функции writeYourGenres
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    if (genre) {
      personalMovieDB.genres.push(genre);
    } else {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
      i--;
    }
  }
}

// 3) Вызов функции writeYourGenres
writeYourGenres();
