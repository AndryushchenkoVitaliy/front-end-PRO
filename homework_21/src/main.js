document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.querySelector('#taskInput');
  const addBtn = document.querySelector('#addBtn');
  const list = document.querySelector('#list');
  const modalTaskText = document.querySelector('#modalTaskText');
  const modal = new bootstrap.Modal(document.querySelector('#taskModal'));

  addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.innerHTML = `
      ${text}
      <button class="delete">Видалити</button>
    `;

    list.append(li);
    taskInput.value = '';
  });

  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      e.stopPropagation();
      e.target.parentElement.remove();
      return;
    }

    if (e.target.tagName === 'LI') {
      const text = e.target.childNodes[0].textContent.trim();
      modalTaskText.textContent = text;
      modal.show();
    }
  });
});