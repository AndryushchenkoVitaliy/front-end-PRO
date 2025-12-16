'use strict';

console.log('number:', typeof 123);
console.log('string:', typeof 'Hello');
console.log('boolean:', typeof true);
console.log('undefined:', typeof undefined);
console.log('null:', typeof null); // особливість JS
console.log('symbol:', typeof Symbol('id'));
console.log('bigint:', typeof 12345678901234567890n);

console.log('object:', typeof {});
console.log('array:', typeof []);
console.log('function:', typeof function () {});