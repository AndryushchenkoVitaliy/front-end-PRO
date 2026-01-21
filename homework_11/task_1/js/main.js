'use strict';

const app = document.querySelector('.app');
const table = document.createElement('table');

for (let i = 0; i <= 10; i++) {
  const tr = document.createElement('tr');

  for (let j = 0; j <= 10; j++) {
    const td = document.createElement('td');

    if (i === 0 && j === 0) {
      td.textContent = '×';
      td.classList.add('header-cell');
    } else if (i === 0) {
      td.textContent = j;
      td.classList.add('header-cell');
    } else if (j === 0) {
      td.textContent = i;
      td.classList.add('header-cell');
    } else {
      td.textContent = i * j;
    }

    tr.appendChild(td);
  }

  table.appendChild(tr);
}

app.appendChild(table);