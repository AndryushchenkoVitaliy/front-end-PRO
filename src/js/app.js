'use strict';

const list = document.getElementById('list');
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');

list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

addBtn.addEventListener('click', function () {
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
        ${text}
        <button class="delete">Видалити</button>
      `;

  list.append(li);
  input.value = '';
});