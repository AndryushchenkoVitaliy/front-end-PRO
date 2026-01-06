'use strict';

function askNumber() {
  let lastInput;

  for (let i = 0; i < 10; i++) {
      let input = prompt("Введите число больше 100:");
      
      if (input === null || input.trim() === "") {
          console.log("Пользователь отменил ввод.");
          return;
      }

      input = Number(input);

      if (isNaN(input)) {
          alert("Пожалуйста, введите число!");
          i--; // не защитываем итерацию
          continue;
      }

      lastInput = input;

      if (input > 100) {
          break;
      } else {
          alert("Число должно быть больше 100. Попробуйте ещё раз.");
      }
  }

  console.log("Последнее введенное число:", lastInput);
}

askNumber();