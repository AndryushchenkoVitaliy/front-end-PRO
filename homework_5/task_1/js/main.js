'use strict';

let i = 20;
let result = '';

while (i <= 30) {
  result += i + ' ';
  i += 0.5;
}

console.log(result.trim());