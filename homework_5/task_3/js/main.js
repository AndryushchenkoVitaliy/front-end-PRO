'use strict';

const N = Number(prompt("Введите целое число"));

if (isNaN(N)) {
  alert("Вы ввели не число");
} else {
  let result = "";

  for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
      result += i + " ";
    }
  }

  alert(result || "Таких чисел нет");
}