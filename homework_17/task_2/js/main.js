'use strict';

class Coach {
    #rating;

    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    get rating() {
        return this.#rating;
    }

    set rating(value) {
        if (typeof value !== 'number' || value < 0 || value > 5) {
            throw new Error('Rating must be between 0 and 5');
        }
        this.#rating = value;
    }

    displayInfo() {
        console.log(
            `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`
        );
    }
}

class SeniorCoach extends Coach {
    constructor(name, specialization, rating, experience) {
        super(name, specialization, rating);
        this.experience = experience;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Experience: ${this.experience} years`);
    }
}

const coach = new SeniorCoach('Emili Brooks', 'CrossFit', 4.8, 8);
coach.displayInfo();