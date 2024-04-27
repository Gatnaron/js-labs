var x, y;
x = parseInt(prompt("Введите значение x"));
y = parseInt(prompt("Введите значение y"));

if (x < y) {
  alert("Максимальное число - y");
} else if (x > y) {
  alert("Максимальное число - x");
} else {
  alert("Введенные числа равны!");
}
