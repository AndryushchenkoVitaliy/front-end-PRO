'use strict';

const createSum = () => {
  let total = 0;
  return num => total += num;
};

const sum = createSum();

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));