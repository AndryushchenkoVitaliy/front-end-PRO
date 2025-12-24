'use strict';

const user = {
  name: "Виталий",
  age: 41,
  city: "Одесса",
  profession: "Frontend developer",

  showInfo() {
    console.log(`Имя: ${this.name}`);
    console.log(`Возраст: ${this.age}`);
    console.log(`Город проживания: ${this.city}`);
    console.log(`Профессия: ${this.profession}`);
  }
};

user.showInfo();