var age = +prompt("Введите свой возраст");
console.log(age);

if (age <= 0) {
  console.log(false);
} else if (age > 0 && age <= 18) {
  alert("Вы еще молоды, Вам нужно учиться");
} else if (age > 18 && age <= 50) {
  alert("Вам нужно работать");
} else if (age > 50 && age <= 59) {
  alert("Вам скоро на пенсию");
} else if (age > 59 && age <= 100) {
  alert("Вы пенсионер");
} else {
  alert("Что-то пошло не так");
}
