'use strict';

function removeElement(array, item) {
  return array.filter(el => el !== item);
}

const array = [10, 20, 30, 40, 50, 60, 70];
const newArray = removeElement(array, 40);

console.log(newArray);
console.log(array);