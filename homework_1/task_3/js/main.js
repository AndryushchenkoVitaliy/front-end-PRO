'use strict';

let number;
do {
    number = prompt("Введите пятизначное число:");
} while (!/^\d{5}$/.test(number)); // проверка: ровно 5 цифр

console.log(number.split('').join(' '));