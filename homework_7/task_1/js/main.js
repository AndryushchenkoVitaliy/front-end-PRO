'use strict';

function removeSymbols(str, symbols) {
  return str
    .split('')
    .filter(char => !symbols.includes(char))
    .join('');
}

const text = prompt("Введіть рядок:");
const chars = prompt("Введіть символи для видалення (без пробілів):").split('');

alert(removeSymbols(text, chars));