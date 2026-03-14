const API_URL = 'http://localhost:5000/api/todos';
const list = document.getElementById('list');
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');

async function loadTodos() {
    list.innerHTML = '';
    const res = await fetch(API_URL);
    const todos = await res.json();
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text + (todo.completed ? ' ✅' : '');
        list.appendChild(li);
    });
}

async function deleteTodo(id) {
    try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        const data = await res.json();
        console.log(data.message);
        loadTodos(); // перезагружаем список задач
    } catch (err) {
        console.error('Ошибка удаления:', err);
    }
}

// Когда создаём элемент списка задачи:
function createTodoElement(todo) {
    const li = document.createElement('li');
    li.textContent = todo.text;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Удалить';
    delBtn.onclick = () => deleteTodo(todo._id);

    li.appendChild(delBtn);
    list.appendChild(li);
}



addBtn.addEventListener('click', async () => {
    const title = input.value;
    if (!title) return;
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: title })
    });
    if (!res.ok) {
        const err = await res.text();
        console.error('Ошибка добавления задачи:', err);
    }
    input.value = '';
    loadTodos();
});

loadTodos();