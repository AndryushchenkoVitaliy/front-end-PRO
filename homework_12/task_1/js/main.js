'use strict';

let savedLink = '';

document.getElementById('setLink').addEventListener('click', () => {
  const link = prompt('Введіть посилання (https://...)');

  if (link) {
    savedLink = link;
    alert('Посилання збережено ✅');
  }
});

document.getElementById('goLink').addEventListener('click', () => {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert('Спочатку введіть посилання ⚠️');
  }
});