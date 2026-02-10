'use strict';

class Calculator {
    add(a, b) {
        this.#validateNumbers(a, b);
        return a + b;
    }

    subtract(a, b) {
        this.#validateNumbers(a, b);
        return a - b;
    }

    multiply(a, b) {
        this.#validateNumbers(a, b);
        return a * b;
    }

    divide(a, b) {
        this.#validateNumbers(a, b);

        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }

        return a / b;
    }

    #validateNumbers(...values) {
        if (!values.every(Number.isFinite)) {
            throw new TypeError('All arguments must be finite numbers');
        }
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2));