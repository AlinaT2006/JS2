var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");
var c = +prompt("Введите третье число");

if (a > b && a < c) {
  alert(a);
} else if (b > a && b < c) {
  alert(b);
} else if (c > b && c < a) {
  alert(c);
} else if (a < b && a > c) {
  alert(a);
} else if (b < a && b > c) {
  alert(b);
} else if (c < b && c > a) {
  alert(c);
} else {
  alert('Условие не соблюдено')
}


