'use strict';

class BankAccount {
    #balance;
    #history;

    constructor(initialBalance) {
        this.#balance = initialBalance;
        this.#history = [];
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Сума депозиту має бути більше 0");
            return;
        }
        this.#balance += amount;
        this.#history.push(`Депозит: +${amount}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Сума зняття має бути більше 0");
            return;
        }
        if (amount > this.#balance) {
            console.log("Недостатньо коштів для зняття");
            return;
        }
        this.#balance -= amount;
        this.#history.push(`Зняття: -${amount}`);
    }

    getHistory() {
        return this.#history;
    }
}


const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);
console.log(account1.getBalance());

account1.withdraw(200);
console.log(account1.getBalance());

console.log(account1.getHistory());