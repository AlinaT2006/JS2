var time = +prompt("Введите время");

switch (true) {
  case time >= 0 && time <= 1:
    alert(time + " час ночи");
    break;
  case time >= 2 && time <= 4:
    alert(time + " часа ночи");
    break;
  case time >= 5 && time <= 6:
    alert(time + " часов ночи");
    break;
  case time >= 7 && time <= 10:
    alert(time + " часов утра");
    break;
  case time >= 11 && time <= 17:
    alert(time + " часов дня");
    break;
  case time >= 18 && time <= 20:
    alert(time + " часов вечера");
    break;
  case time == 21:
    alert(time + " час вечера");
    break;
  case time >= 22 && time <= 23:
    alert(time + " часа вечера");
    break;
  default:
    alert("Значение не соответствует условию");
}
