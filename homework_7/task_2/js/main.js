'use strict';

function getAverageOfNumbers(arr) {
    let sum = 0;
    let count = 0;
  
    for (let item of arr) {
      if (typeof item === 'number' && !isNaN(item)) {
        sum += item;
        count++;
      }
    }
  
    return count === 0 ? 0 : sum / count;
}