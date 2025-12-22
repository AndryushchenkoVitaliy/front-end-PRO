'use strict';

const num = prompt("Введите трёхзначное число:");

const a = num[0];
const b = num[1];
const c = num[2];

//Все ли цифры одинаковые
const allSame = a === b && b === c;

//Есть ли среди цифр одинаковые
const hasSame = a === b || b === c || a === c;

alert(
  `Все цифры одинаковые: ${allSame}\n` +
  `Есть одинаковые цифры: ${hasSame}`
);