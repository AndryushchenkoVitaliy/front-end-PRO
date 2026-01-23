'use strict';

const wrapper = document.getElementById('buttons');

wrapper.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    alert('Клікнуто на кнопці: ' + event.target.textContent);
  }
});