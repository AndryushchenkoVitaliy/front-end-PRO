'use strict';

class TodoApp {
  constructor() {
    this.form = document.querySelector('.js--form');
    this.input = document.querySelector('.js--form__input');
    this.todosWrapper = document.querySelector('.js--todos-wrapper');
    this.totalEl = document.querySelector('.js--total');
    this.completedEl = document.querySelector('.js--completed');
    this.progressBar = document.querySelector('.js--progress-bar');
    this.progressText = document.querySelector('.js--progress-text');
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];

    this.form.addEventListener('submit', e => this.addTodo(e));
    this.todosWrapper.addEventListener('click', e => this.handleListClick(e));
    this.render();
  }

  save = () => localStorage.setItem('todos', JSON.stringify(this.todos));

  addTodo = e => {
    e.preventDefault();
    const text = this.input.value.trim();
    if (!text) return;
    this.todos.push({ text, completed: false });
    this.input.value = '';
    this.save();
    this.render();
  }

  handleListClick = e => {
    const li = e.target.closest('li');
    if (!li) return;
    const index = [...this.todosWrapper.children].indexOf(li);

    if (e.target.tagName === 'INPUT') this.todos[index].completed = e.target.checked;
    if (e.target.classList.contains('todo-item__delete')) this.todos.splice(index, 1);

    this.save();
    this.render();
  }

  updateCounter = () => {
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    this.totalEl.textContent = total;
    this.completedEl.textContent = completed;

    const percent = total ? Math.round((completed / total) * 100) : 0;
    this.progressBar.style.width = percent + '%';
    this.progressText.textContent = percent + '%';
    this.progressBar.style.backgroundColor = percent < 40 ? '#e74c3c' : percent < 80 ? '#f1c40f' : '#2ecc71';
    this.progressText.style.color = (percent >= 40 && percent < 80) ? '#333' : '#fff';
    if (percent === 0) this.progressText.style.color = '#333';
  }

  render = () => {
    this.todosWrapper.innerHTML = this.todos.map(todo => `
      <li class="todo-item ${todo.completed ? 'todo-item--checked' : ''}">
        <input type="checkbox" ${todo.completed ? 'checked' : ''}>
        <span class="todo-item__description">${todo.text}</span>
        <button class="todo-item__delete">Видалити</button>
      </li>
    `).join('');
    this.updateCounter();
  }
}

new TodoApp();